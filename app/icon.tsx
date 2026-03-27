import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(180deg, #f8f3ec 0%, #e8f1ee 100%)",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "linear-gradient(180deg, #d06f46 0%, #b85b35 100%)",
            borderRadius: "18px",
            boxShadow: "0 10px 24px rgba(22,49,59,0.18)",
            display: "flex",
            height: "46px",
            justifyContent: "center",
            width: "46px"
          }}
        >
          <div
            style={{
              color: "#fffaf4",
              fontSize: 28,
              fontWeight: 700,
              lineHeight: 1,
              marginTop: 7
            }}
          >
            N
          </div>
        </div>
      </div>
    ),
    size
  );
}
