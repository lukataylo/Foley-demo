export type Status = "todo" | "doing" | "done";

export interface Ticket {
  id: string;
  title: string;
  status: Status;
  assignee: string;
  description: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  body: string;
  at: string;
}

export const TICKETS: Ticket[] = [
  {
    id: "LOP-101",
    title: "Add keyboard shortcut for new ticket",
    status: "todo",
    assignee: "Anna",
    description: "Press C to open the new ticket dialog from anywhere.",
    comments: [
      { id: "c1", author: "Sam", body: "Linear uses C — let's match.", at: "2 days ago" },
    ],
  },
  {
    id: "LOP-102",
    title: "Dark mode polish on hover states",
    status: "doing",
    assignee: "Marcus",
    description: "Buttons feel a touch loud in dark mode.",
    comments: [],
  },
  {
    id: "LOP-103",
    title: "Ship invite flow",
    status: "doing",
    assignee: "Anna",
    description: "Email-based invite with expiring link.",
    comments: [
      { id: "c2", author: "Anna", body: "Backend is ready.", at: "1 day ago" },
    ],
  },
  {
    id: "LOP-104",
    title: "Refactor board state",
    status: "done",
    assignee: "Marcus",
    description: "Move from context to a small store.",
    comments: [],
  },
];

export const COLUMNS: { id: Status; name: string }[] = [
  { id: "todo", name: "Todo" },
  { id: "doing", name: "Doing" },
  { id: "done", name: "Done" },
];

export function ticket(id: string): Ticket | undefined {
  return TICKETS.find((t) => t.id === id);
}
