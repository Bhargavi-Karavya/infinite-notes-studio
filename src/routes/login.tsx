import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Eye,
  EyeOff,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import logo from "@/assets/infinite-notes-logo.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Admin Login — Infinite Notes" },
      { name: "description", content: "Secure access to the Infinite Notes administration portal." },
      { property: "og:title", content: "Infinite Notes Admin Login" },
      { property: "og:description", content: "Secure access to the Infinite Notes administration portal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [resetMessage, setResetMessage] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      navigate({ to: "/" });
    }, 850);
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <div className="login-intro">
          <div className="login-logo-frame">
            <img src={logo} alt="Infinite Notes identity" />
          </div>
          <div className="console-pill"><span /> Console v3.8 · Restricted Access</div>
          <h1 id="login-title">Infinite Notes <span>Admin Portal</span></h1>
          <p>Sign in to manage audio pipelines, global keychains, and live user synthesis nodes.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-field" htmlFor="admin-email">
            <span>Administrator Identifier</span>
            <div className="login-input-wrap">
              <BadgeCheck aria-hidden="true" />
              <input id="admin-email" type="email" placeholder="admin.orchestrator@infinitenotes.io" autoComplete="username" required />
            </div>
          </label>

          <div className="login-field">
            <div className="login-label-row">
              <label htmlFor="admin-password">Cryptographic Passkey</label>
              <Button type="button" variant="link" className="reset-token" onClick={() => setResetMessage(true)}>Reset Token</Button>
            </div>
            <div className="login-input-wrap">
              <KeyRound aria-hidden="true" />
              <input id="admin-password" type={showPassword ? "text" : "password"} placeholder="••••••••••••••••" autoComplete="current-password" required />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="password-toggle"
                aria-label={showPassword ? "Hide passkey" : "Show passkey"}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </Button>
            </div>
            {resetMessage && <p className="reset-message" role="status">Token reset instructions have been queued.</p>}
          </div>

          <label className="remember-session">
            <input type="checkbox" defaultChecked />
            <span className="custom-check"><Check /></span>
            Maintain verified session (12h)
          </label>

          <Button type="submit" className="login-submit" disabled={submitting}>
            {submitting ? <><span className="login-spinner" /> Authenticating Cluster...</> : <>Sign In to Portal <ArrowRight /></>}
          </Button>
        </form>

        <div className="login-status-stack">
          <div className="security-status">
            <span className="security-icon"><ShieldCheck /></span>
            <div><strong>Hardware Key Enforced</strong><small>FIPS 140-2 Level 3 HSM Active</small></div>
            <LockKeyhole />
          </div>
          <div className="mesh-status">
            <span><i /> Status: Audio Mesh Operational</span>
            <b>Lat: 2.1ms</b>
          </div>
          <div className="emergency-notice">
            <TriangleAlert />
            <div><strong>Emergency Notice</strong><p>Cluster EU-West undergoing maintenance at 04:00 UTC. Secondary failovers are armed.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}