"use client";

import { useState } from "react";

export function TicketActions({ ticketId }: { ticketId: string }) {
  const [done, setDone] = useState(false);
  return (
    <>
      <button
        className="btn btn-primary"
        data-testid="mark-done-button"
        onClick={() => setDone(true)}
        disabled={done}
      >
        {done ? "Done" : "Mark as done"}
      </button>
      <button className="btn" data-testid="copy-link" onClick={() => navigator.clipboard?.writeText(`loop.app/${ticketId}`)}>
        Copy link
      </button>
    </>
  );
}
