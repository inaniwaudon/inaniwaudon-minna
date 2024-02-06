import { Metadata } from "next";

import PageWrapper from "@/components/common/PageWrapper";
import { SearchParams } from "@/lib/utils";
import Main from "./Main";

const title = "やること・やったこと";

export const metadata: Metadata = {
  title: title,
};

export interface Task {
  title: string;
  number: number;
  state: "open" | "closed";
  created_at: string;
  closed_at: string;
  public: boolean;
}

const fetchTasks = async () => {
  const url = new URL("/api/tasks", process.env.NEXT_PUBLIC_BACKEND_URL);
  try {
    const response = await fetch(url.href, {
      next: { revalidate: 10 },
    });
    if (!response.ok) {
      return [];
    }
    const json: { tasks: Task[] } = await response.json();
    return json.tasks;
  } catch {
    return [];
  }
};

interface PageProps {
  searchParams: SearchParams;
}

const Page = async ({ searchParams }: PageProps) => {
  const tasks: Task[] = await fetchTasks();

  return (
    <PageWrapper title={title} path="/tasks">
      <Main title={title} tasks={tasks} searchParams={searchParams} />
    </PageWrapper>
  );
};

export default Page;
