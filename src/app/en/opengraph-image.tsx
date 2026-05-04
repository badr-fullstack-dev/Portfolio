import { ImageResponse } from "next/og";

import { contactInfo } from "@/lib/content";

export const alt =
  "Badreddine, freelance AI automation and full-stack developer, Paris.";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020617",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle at 12% 8%, rgba(34,211,238,0.32) 0%, transparent 42%), radial-gradient(circle at 92% 92%, rgba(16,185,129,0.28) 0%, transparent 38%)",
            inset: 0,
            position: "absolute",
          }}
        />
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            inset: 0,
            opacity: 0.6,
            position: "absolute",
          }}
        />

        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#0b1220",
              border: "1px solid rgba(34,211,238,0.45)",
              borderRadius: "14px",
              color: "#67e8f9",
              display: "flex",
              fontSize: 44,
              fontWeight: 700,
              height: 76,
              justifyContent: "center",
              width: 76,
            }}
          >
            B
          </div>
          <div
            style={{
              color: "#cbd5f5",
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Badreddine · Paris
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            position: "relative",
          }}
        >
          <div
            style={{
              color: "#67e8f9",
              display: "flex",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.22em",
              marginBottom: 18,
              textTransform: "uppercase",
            }}
          >
            Freelance AI · Full-stack
          </div>
          <div
            style={{
              color: "#ffffff",
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            AI automations, chatbots and web apps for SMBs.
          </div>
          <div
            style={{
              color: "#94a3b8",
              display: "flex",
              fontSize: 30,
              marginTop: 28,
            }}
          >
            badreddine.dev · {contactInfo.email}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
