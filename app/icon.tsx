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
          background: "linear-gradient(180deg, #fff7ec 0%, #ffe7d3 100%)",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#2f8c88",
            borderRadius: "9999px",
            bottom: "10px",
            boxShadow: "0 0 0 4px rgba(255,255,255,0.6)",
            height: "28px",
            position: "absolute",
            width: "28px"
          }}
        />
        <div
          style={{
            background: "#d7642b",
            borderRadius: "9999px",
            height: "10px",
            position: "absolute",
            right: "15px",
            top: "14px",
            transform: "rotate(-25deg)",
            width: "10px"
          }}
        />
        <div
          style={{
            background: "linear-gradient(90deg, rgba(215,100,43,0), rgba(215,100,43,0.9))",
            borderRadius: "9999px",
            height: "4px",
            position: "absolute",
            right: "20px",
            top: "18px",
            transform: "rotate(-25deg)",
            width: "22px"
          }}
        />
      </div>
    ),
    size
  );
}
