"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  return (
    <div className="login">
      <div className="card-box" data-testid="login-card">
        <h1>Sign in to Loop</h1>
        <p>Enter your work email to continue.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email-input"
            autoFocus
          />
          <button type="submit" className="btn btn-primary" data-testid="signin-button">
            Sign in
          </button>
        </form>
        <a href="/forgot-password" className="login-forgot" data-testid="forgot-password-link">
          Forgot password?
        </a>
      </div>
    </div>
  );
}
