"use client";

import { styled } from "@linaria/react";
import { useMemo } from "react";

import Checkbox from "@/components/common/Checkbox";
import PageTitle from "@/components/common/PageTitle";
import { useCustomParams } from "@/lib/useCustomParams";
import { SearchParams } from "@/lib/utils";
import { MdCheck } from "react-icons/md";
import { Task } from "./page";

const color = {
  open: "#ff32ab",
  closed: "#cc22db",
} as const;

const TopHeader = styled.header`
  margin-bottom: 16px;
`;

const List = styled.ul`
  line-height: 1.4;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItem = styled.li`
  display: flex;
  gap: 16px;
`;

const CheckIcon = styled.div<{ closed: boolean }>`
  flex: 24px 0 0;
  font-size: 24px;
  color: ${({ closed }) => (closed ? color.closed : "#ddd")};
  display: flex;
  align-items: center;
`;

const Information = styled.div`
  flex: 1 1;
`;

const Time = styled.time`
  color: #999;
  font-size: 12px;
  margin-top: 2px;
  display: block;
`;

const Bar = styled.div`
  width: 80%;
  max-width: 300px;
  height: 2px;
  margin-top: 4px;
  border-radius: 1px;
  background: #eee;
`;

const BarContent = styled.div<{ closed: boolean }>`
  height: 100%;
  border-radius: 2px;
  opacity: 0.4;
  background: ${({ closed }) => (closed ? color.closed : color.open)};
`;

interface MainProps {
  title: string;
  tasks: Task[];
  searchParams: SearchParams;
}

const Main = ({ title, tasks, searchParams }: MainProps) => {
  const customParams = useCustomParams("tag", true, undefined, searchParams);
  const { isSelectedTag } = customParams;

  const tags = [
    { key: "open", label: "open", keyColor: "#ff32ab" },
    { key: "closed", label: "closed", keyColor: "#cc22db" },
    { key: "public-only", label: "public only", keyColor: "#009ae1" },
  ];

  const selectedTags = tags.filter(({ key }) => isSelectedTag(key));

  const [minDate, maxDate] = useMemo(() => {
    const times = tasks.map((task) => new Date(task.created_at).getTime());
    return [Math.min(...times), Math.max(...times)];
  }, [tasks]);

  const calculateDateRatio = (date: string) => {
    const time = new Date(date).getTime();
    return (time - minDate) / (maxDate - minDate);
  };

  const filteredTasks = useMemo(
    () =>
      selectedTags.length > 0
        ? tasks.filter((task) => {
            const matchesState =
              (isSelectedTag("open") && task.state === "open") ||
              (isSelectedTag("closed") && task.state === "closed");
            if (!matchesState) {
              return false;
            }
            return !isSelectedTag("public-only") || task.public;
          })
        : tasks,
    [tasks, selectedTags, isSelectedTag],
  );

  const pad = (n: number) => n.toString().padStart(2, "0");

  const displayDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const YY = date.getFullYear();
    const MM = pad(date.getMonth() + 1);
    const DD = pad(date.getDate());
    return `${YY}/${MM}/${DD}`;
  };

  return (
    <main>
      <TopHeader>
        <PageTitle>{title}</PageTitle>
        <p>課題山積</p>
        <Checkbox paramKey="tag" tags={tags} customParams={customParams} />
      </TopHeader>
      <List>
        {filteredTasks.map((task, index) => {
          const start = calculateDateRatio(task.created_at);
          const end = task.closed_at ? calculateDateRatio(task.closed_at) : 1.0;
          return (
            <ListItem key={index}>
              <CheckIcon closed={task.state === "closed"}>
                <MdCheck />
              </CheckIcon>
              <Information>
                <div>{task.title}</div>
                <Time>
                  {displayDate(task.created_at)}
                  {task.closed_at && ` – ${displayDate(task.closed_at)}`}
                </Time>
                <Bar>
                  <BarContent
                    closed={task.state === "closed"}
                    style={{
                      width: `calc(${(end - start) * 100}% + 2px)`,
                      marginLeft: `calc(${start * 100}% - 2px)`,
                    }}
                  />
                </Bar>
              </Information>
            </ListItem>
          );
        })}
      </List>
    </main>
  );
};

export default Main;
