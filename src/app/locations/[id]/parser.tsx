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
