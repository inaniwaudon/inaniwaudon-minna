export interface Transportation {
  title: string;
  date: string;
  checkins: Checkin[];
}

export interface Checkin {
  location: string;
  datetime?: Date;
  photos: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  description: string;
}

export const parseTransportation = (text: string) => {
  const lines = text.split("\n");
  const checkins: Checkin[] = [];
  let title: string | null = null;
  let date: string | null = null;

  // 全体情報
  let headerI = 0;
  for (headerI = 0; headerI < lines.length; headerI++) {
    const line = lines[headerI];
    // タイトル
    const titleResult = line.match(/^#([^#]+)/);
    if (titleResult) {
      title = titleResult[1].trim();
    }
    // 日時
    const dateResult = line.match(/^- date:(.*)/);
    if (dateResult) {
      date = dateResult[1].trim();
      break;
    }
  }

  if (!title) {
    throw new Error("Invalid format: title is not found.");
  }
  if (!date) {
    throw new Error("Invalid format: date is not found.");
  }

  for (let i = headerI + 1; i < lines.length; i++) {
    const line = lines[i];

    // 場所を新たに追加
    const locationResult = line.match(/^##([^#]+)/);
    if (locationResult) {
      const location = locationResult[1].trim();
      checkins.push({ location, photos: [], description: "" });
      continue;
    }

    if (checkins.length === 0) {
      continue;
    }
    const checkin = checkins.at(-1)!;

    // 写真
    const photoResult = line.match(/^!\[(.*)\]\((.*)\)/);
    if (photoResult) {
      checkin.photos.push({ src: photoResult[2], alt: photoResult[1] });
      continue;
    }
    // 写真のキャプション
    const captionResult = line.match(/^\*(.+)\*/);
    if (captionResult && checkin.photos.length > 0) {
      checkin.photos.at(-1)!.caption = captionResult[1];
      continue;
    }
    // TODO: Swarm

    // 日時
    const dateResult = line.match(/^- date:(.*)/);
    if (dateResult) {
      checkin.datetime = new Date(dateResult[1].trim());
      continue;
    }
    // 説明文
    const trimedLine = line.trim();
    if (trimedLine.length > 0) {
      checkin.description += `${trimedLine}\n`;
    }
  }

  for (const checkin of checkins) {
    checkin.description = checkin.description.trim();
  }

  return { title, date, checkins };
};

const dateToISOStringWithTimezone = (date: Date) => {
  const pad = (str: string) => `0${str}`.slice(-2);

  const year = date.getFullYear().toString();
  const month = pad((date.getMonth() + 1).toString());
  const day = pad(date.getDate().toString());
  const hour = pad(date.getHours().toString());
  const min = pad(date.getMinutes().toString());
  const sec = pad(date.getSeconds().toString());
  const tz = -date.getTimezoneOffset();
  const sign = tz >= 0 ? "+" : "-";
  const tzHour = pad((tz / 60).toString());
  const tzMin = pad((tz % 60).toString());

  return `${year}-${month}-${day}T${hour}:${min}:${sec}${sign}${tzHour}:${tzMin}`;
};

export const stringifyTransportation = (transportation: Transportation) => {
  const { title, date, checkins } = transportation;
  let text = `# ${title}\n\n`;
  text += `- date: ${date}\n\n`;

  // チェックイン
  const checkinParts: string[][][] = [];

  for (const checkin of checkins) {
    const parts: string[][] = [[`## ${checkin.location}`]];

    if (checkin.datetime) {
      parts.push([`- date: ${dateToISOStringWithTimezone(checkin.datetime)}`]);
    }
    if (checkin.description) {
      parts.push([checkin.description]);
    }
    // 写真
    checkin.photos.map((photo) => {
      const photoPart: string[] = [];
      photoPart.push(`![${photo.alt}](${photo.src})`);
      if (photo.caption) {
        photoPart.push(`*${photo.caption}*`);
      }
      parts.push(photoPart);
    });

    checkinParts.push(parts);
  }
  text += checkinParts
    .map((parts) => parts.map((part) => part.join("\n")).join("\n\n"))
    .join("\n\n");
  return `${text}\n`;
};
