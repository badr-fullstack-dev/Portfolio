import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = { width: 32, height: 32 };

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0b1220",
          border: "1px solid rgba(34,211,238,0.55)",
          borderRadius: 6,
          color: "#67e8f9",
          display: "flex",
          fontSize: 22,
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
