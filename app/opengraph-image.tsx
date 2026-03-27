import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "linear-gradient(135deg, #f8f3ec 0%, #eef5f3 52%, #f6eadf 100%)",
          color: "#16313b",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "56px",
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "rgba(201, 112, 70, 0.14)",
            borderRadius: "999px",
            height: "320px",
            position: "absolute",
            right: "-80px",
            top: "-120px",
            width: "320px"
          }}
        />
        <div
          style={{
            background: "rgba(63, 127, 125, 0.12)",
            borderRadius: "999px",
            bottom: "-120px",
            height: "280px",
            left: "-60px",
            position: "absolute",
            width: "280px"
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: "720px",
            zIndex: 1
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "16px"
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "linear-gradient(180deg, #d06f46 0%, #b85b35 100%)",
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(22,49,59,0.12)",
                color: "#fffaf4",
                display: "flex",
                fontSize: "44px",
                fontWeight: 700,
                height: "76px",
                justifyContent: "center",
                width: "76px"
              }}
            >
              N
            </div>
            <div
              style={{
                color: "#3f7f7d",
                display: "flex",
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              Novaro
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px"
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Georgia, serif",
                fontSize: "78px",
                fontWeight: 700,
                lineHeight: 1.02
              }}
            >
              Werkzeug für den
              <br />
              Logopäden von morgen
            </div>
            <div
              style={{
                color: "#5d7076",
                display: "flex",
                fontSize: "30px",
                lineHeight: 1.35,
                maxWidth: "700px"
              }}
            >
              Fantasiegestützte Inhalte für Kinder. Direkt nutzbar im
              therapeutischen Alltag.
            </div>
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "320px",
            zIndex: 1
          }}
        >
          <div
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #f6f0e7 100%)",
              border: "10px solid rgba(255,255,255,0.7)",
              borderRadius: "42px",
              boxShadow: "0 28px 60px rgba(22,49,59,0.12)",
              display: "flex",
              height: "440px",
              padding: "26px",
              position: "relative",
              width: "280px"
            }}
          >
            <div
              style={{
                background: "linear-gradient(180deg, #dcefeb 0%, #f7fbfa 100%)",
                borderRadius: "30px",
                display: "flex",
                height: "100%",
                position: "relative",
                width: "100%"
              }}
            >
              <div
                style={{
                  background: "#f1c9b3",
                  borderRadius: "999px",
                  height: "86px",
                  left: "84px",
                  position: "absolute",
                  top: "60px",
                  width: "86px"
                }}
              />
              <div
                style={{
                  background: "#d06f46",
                  borderRadius: "999px 999px 28px 28px",
                  height: "120px",
                  left: "58px",
                  position: "absolute",
                  top: "132px",
                  width: "138px"
                }}
              />
              <div
                style={{
                  background: "#3f7f7d",
                  borderRadius: "24px",
                  bottom: "34px",
                  color: "#fffaf4",
                  display: "flex",
                  fontSize: "22px",
                  fontWeight: 700,
                  left: "26px",
                  padding: "14px 18px",
                  position: "absolute"
                }}
              >
                Fantasie im Fokus
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
