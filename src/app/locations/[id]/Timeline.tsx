import { styled } from "@linaria/react";

import { stringifyDate } from "@/lib/utils";
import Link from "next/link";
import { Checkin, getImageUrl } from "../_lib/utils";

const List = styled.ul`
  width: 340px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 12px;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  gap: 16px;
`;

const Thumbnail = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #eee;
  background-size: cover;
  background-position: center;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Time = styled.time`
  font-size: 12px;
  color: #999;
  display: block;
`;

const Location = styled.div<{ ratio: number }>`
  font-size: 15px;
  padding-bottom: 4px;
  position: relative;

  --color: hsl(40, 60%, 50%);

  &::before {
    width: 100px;
    height: 1px;
    content: "";
    background: linear-gradient(90deg, var(--color), var(--color) ${({
      ratio,
    }) => `${ratio * 100}%`}, #eee calc(${({ ratio }) => `${ratio * 100}%`} + 1px), #eee);
    display: block;
    position: absolute;
    bottom: 0;
  }
`;

interface TimelineProps {
  id: string;
  checkins: Checkin[];
}

{
  /* タイルビュー と タイムラインビュー */
}

const Timeline = ({ id, checkins }: TimelineProps) => {
  return (
    <nav>
      <List>
        {checkins.map((checkin, index) => {
          const thumbnail = checkin.photos[0]
            ? getImageUrl(id, checkin.photos[0].src)
            : undefined;
          return (
            <li key={index}>
              <Link
                href={`/locations/${id}?checkin=${checkin.id}`}
                legacyBehavior
              >
                <Anchor>
                  <Thumbnail style={{ backgroundImage: `url(${thumbnail})` }} />
                  <Information>
                    <Time>
                      {stringifyDate(new Date(checkin.datetime), false)}
                    </Time>
                    <Location ratio={(index + 1) / checkins.length}>
                      {checkin.location}
                    </Location>
                  </Information>
                </Anchor>
              </Link>
            </li>
          );
        })}
      </List>
    </nav>
  );
};

export default Timeline;
