"use client";

import { useState } from "react";
import { Shell } from "@/components/Shell";

export default function SettingsPage() {
  const [name, setName] = useState("Acme Loop");
  const [email] = useState("anna@acme.com");
  return (
    <Shell>
      <div className="settings" data-testid="settings">
        <h2 className="page">Settings</h2>
        <p className="subtle">Workspace and profile.</p>
        <div className="row">
          <div>Workspace name</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="workspace-name-input"
          />
        </div>
        <div className="row">
          <div>Owner email</div>
          <input value={email} readOnly />
        </div>
        <div className="row">
          <div>Plan</div>
          <div className="subtle">Team · 12 seats</div>
        </div>
      </div>
    </Shell>
  );
}
