import Link from "next/link";
import { Shell } from "@/components/Shell";

export default function TicketNotFound() {
  return (
    <Shell>
      <div className="ticket">
        <h1>Ticket not found</h1>
        <p className="subtle">It may have been deleted or never existed.</p>
        <Link href="/" className="btn">Back to board</Link>
      </div>
    </Shell>
  );
}
