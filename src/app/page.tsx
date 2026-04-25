import Link from "next/link";
import { Shell } from "@/components/Shell";
import { COLUMNS, TICKETS } from "@/lib/data";

export default function BoardPage() {
  return (
    <Shell>
      <h2 className="page">Board</h2>
      <p className="subtle">Everything in flight.</p>
      <div className="board" data-testid="board">
        {COLUMNS.map((col) => (
          <div key={col.id} className="col" data-column={col.id}>
            <h3>{col.name}</h3>
            {TICKETS.filter((t) => t.status === col.id).map((t) => (
              <Link key={t.id} href={`/ticket/${t.id}`}>
                <div className="card" data-ticket={t.id}>
                  <div className="id">{t.id}</div>
                  <div className="title">{t.title}</div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </Shell>
  );
}
