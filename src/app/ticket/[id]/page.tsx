import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { ticket } from "@/lib/data";
import { TicketActions } from "./TicketActions";

export default function TicketPage({ params }: { params: { id: string } }) {
  const t = ticket(params.id);
  if (!t) notFound();
  return (
    <Shell>
      <div className="ticket" data-testid="ticket">
        <div className="meta">
          {t.id} · <span className={`pill ${t.status}`}>{t.status}</span> · {t.assignee}
        </div>
        <h1>{t.title}</h1>
        <div className="actions">
          <TicketActions ticketId={t.id} />
        </div>
        <div className="desc">{t.description}</div>
        <div className="comments">
          {t.comments.map((c) => (
            <div key={c.id} className="comment" data-comment-id={c.id}>
              <span className="who">{c.author}</span>
              <span className="when">{c.at}</span>
              <div>{c.body}</div>
            </div>
          ))}
          <form className="composer" data-testid="composer">
            <input placeholder="Leave a comment" />
            <button className="btn" type="button">Post</button>
          </form>
        </div>
      </div>
    </Shell>
  );
}
