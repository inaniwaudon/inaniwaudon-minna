import { styled } from "@linaria/react";

import { stringifyDate } from "@/lib/utils";
import { Checkin } from "../utils";

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

const Item = styled.li`
  border-radius: 4px;
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
  checkins: Checkin[];
  setSelectedIndex: (value: number) => void;
}

{
  /* タイルビュー と タイムラインビュー */
}

const Timeline = ({ checkins, setSelectedIndex }: TimelineProps) => {
  return (
    <nav>
      <List>
        {checkins.map((checkin, index) => {
          const thumbnail = checkin.photos[0]?.src ?? undefined;
          return (
            <Item onClick={() => setSelectedIndex(index)} key={index}>
              <Thumbnail style={{ backgroundImage: `url(${thumbnail})` }} />
              <Information>
                <Time>{stringifyDate(new Date(checkin.datetime), false)}</Time>
                <Location ratio={(index + 1) / checkins.length}>
                  {checkin.location}
                </Location>
              </Information>
            </Item>
          );
        })}
      </List>
    </nav>
  );
};

export default Timeline;
