import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = profile.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p style={{ fontSize: 24, color: "#a1a1aa", marginBottom: 16 }}>
          Software Engineer · Full Stack
        </p>
        <h1 style={{ fontSize: 64, fontWeight: 600, letterSpacing: "-0.02em", margin: 0 }}>
          {profile.name}
        </h1>
        <p style={{ fontSize: 28, color: "#a1a1aa", marginTop: 24, maxWidth: 800, lineHeight: 1.4 }}>
          {profile.tagline}
        </p>
      </div>
    ),
    { ...size }
  );
}
