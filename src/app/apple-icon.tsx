import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = { width: 180, height: 180 };

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0b1220",
          border: "3px solid rgba(34,211,238,0.55)",
          borderRadius: 36,
          color: "#67e8f9",
          display: "flex",
          fontSize: 110,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        B
      </div>
    ),
    size,
  );
}
