import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt =
  "Fábio Henrique Ferreira — Engenheiro de Software · Arquiteto de Soluções";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const domain = siteConfig.url.replace(/^https?:\/\//, "");

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0a",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        {/* topo */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 60,
              height: 60,
              borderRadius: 16,
              background: "#f5f5f5",
              color: "#0a0a0a",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            FH
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#a1a1aa",
              letterSpacing: 4,
            }}
          >
            PORTFÓLIO
          </div>
        </div>

        {/* nome + cargo */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.02,
            }}
          >
            Fábio Henrique Ferreira
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 34,
              color: "#a1a1aa",
            }}
          >
            Engenheiro de Software · Arquiteto de Soluções
          </div>
        </div>

        {/* rodapé */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #232323",
            paddingTop: 28,
            fontSize: 24,
            color: "#71717a",
          }}
        >
          <div style={{ display: "flex" }}>
            Next.js · NestJS · AWS · IA em produção
          </div>
          <div style={{ display: "flex", color: "#a1a1aa" }}>{domain}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
