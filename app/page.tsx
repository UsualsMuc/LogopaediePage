import Image from "next/image";
import elefantImage from "../elefant.png";
import fussballImage from "../fussball.png";
import postHappyImage from "../postHappy.png";
import preHappyImage from "../preHappy.png";
import queenImage from "../queen.png";
import { ContactForm } from "../components/contact-form";
import { Header } from "../components/header";

const timelineSteps = [
  {
    id: "interessen",
    step: "01",
    title: "Kinder wählen ihre Interessen",
    text:
      "Kinder wählen aus verschiedenen Kategorien ihre Interessen aus oder beschreiben diese frei. So beginnt jede Einheit mit einer Welt, die sie wirklich anspricht.",
    image: queenImage,
    alt: "Kind mit Krone als Symbol für Fantasie und persönliche Themen.",
    tone: "from-[#f7d8c6] to-[#fff4ec]"
  },
  {
    id: "inhalte",
    step: "02",
    title: "Wir liefern Texte und Bilder",
    text:
      "Auf Basis dieser Impulse entstehen passende Texte und Bildwelten, die sprachtherapeutisch nutzbar sind und gleichzeitig zur Fantasie des Kindes passen.",
    image: elefantImage,
    alt: "Kind mit Elefant als Symbol für passende Bildwelten und ruhige Begleitung.",
    tone: "from-[#dcefeb] to-[#f5fbfa]"
  },
  {
    id: "einsatz",
    step: "03",
    title: "Direkt im Unterricht nutzbar",
    text:
      "Die Inhalte lassen sich unmittelbar in die Therapie einbauen. Das spart Vorbereitungszeit und schafft einen klaren roten Faden für die Stunde.",
    image: fussballImage,
    alt: "Kind mit Fußball als Symbol für aktivierende Lerninhalte.",
    tone: "from-[#f4eab8] to-[#fffbee]"
  },
  {
    id: "teilen",
    step: "04",
    title: "Einfach mit Eltern teilen",
    text:
      "Nach dem Unterricht können die Materialien unkompliziert mit den Eltern geteilt werden, damit die sprachliche Förderung auch zu Hause anschlussfähig bleibt.",
    image: postHappyImage,
    alt: "Glückliches Kind als Symbol für Fortschritt und Teilbarkeit mit Eltern.",
    tone: "from-[#d8ebe5] to-[#f6fbfa]"
  }
];

export default function Home() {
  return (
    <main className="shell">
      <Header />

      <section id="top" className="relative isolate overflow-hidden">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="mx-auto grid w-full max-w-[88rem] items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-18 lg:grid-cols-[0.96fr_1.04fr] lg:px-10 lg:pb-20 lg:pt-14">
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1 className="font-display mt-2 max-w-4xl text-5xl leading-[0.88] text-foreground sm:text-6xl lg:text-[5.8rem]">
              Der Weg zum Ziel
              <br />
              entspringt in der
              <br />
              Fantasie
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Individuelle Inhalte, die zu den Interessen des Kindes passen und direkt im
              logopädischen Alltag nutzbar sind.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#funktioniert"
                className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#bc6339]"
              >
                Wie es funktioniert
              </a>
              <a
                href="#kontakt"
                className="inline-flex text-sm font-semibold text-foreground transition hover:text-brand"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>

          <div className="hero-visual relative z-10 mx-auto w-full max-w-[30rem] lg:max-w-[36rem]">
            <div className="hero-card hero-card-main overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#d8ebe5] via-[#eef5f3] to-[#f8f3ec] p-3">
              <Image
                src={postHappyImage}
                alt="Kind mit Freude ueber Lernerfolge."
                priority
                className="hero-image h-auto w-full rounded-[2rem] object-cover"
              />
            </div>

            <div className="hero-card hero-card-floating overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f4eab8] to-[#fff7dc] p-3">
              <div className="rounded-[1.5rem] border border-white/70 bg-white/45 p-2">
                <Image
                  src={preHappyImage}
                  alt="Kind in einer fruehen Lernphase."
                  className="hero-image hero-image-small h-auto w-full rounded-[1.2rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="funktioniert">
        <div className="mx-auto w-full max-w-[88rem] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
          <h2 className="font-display mx-auto max-w-3xl text-center text-4xl leading-tight text-foreground sm:text-5xl">
            Wie es funktioniert
          </h2>

          <div className="timeline mt-14">
            <div className="timeline-rail" aria-hidden="true" />
            {timelineSteps.map((step, index) => (
              <article
                key={step.id}
                id={step.id}
                className="timeline-item"
              >
                <div
                  className={`timeline-stage ${
                    index % 2 === 0 ? "lg:grid-cols-[1fr_96px_1fr]" : "lg:grid-cols-[1fr_96px_1fr]"
                  }`}
                >
                  <div className={index % 2 === 0 ? "timeline-copy lg:text-right" : "timeline-visual-wrap"}>
                    {index % 2 === 0 ? (
                      <>
                        <div className="inline-flex rounded-full bg-[#eef4f3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent lg:ml-auto">
                          Schritt {step.step}
                        </div>
                        <h3 className="font-display mt-4 text-3xl leading-tight text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-base leading-8 text-muted">{step.text}</p>
                      </>
                    ) : (
                      <div
                        className={`timeline-visual overflow-hidden rounded-[2rem] bg-gradient-to-br ${step.tone} p-3`}
                      >
                        <Image
                          src={step.image}
                          alt={step.alt}
                          placeholder="blur"
                          className="h-auto w-full rounded-[1.5rem] object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="timeline-center">
                    <div className="timeline-dot">
                      <span>{step.step}</span>
                    </div>
                  </div>

                  <div className={index % 2 === 0 ? "timeline-visual-wrap" : "timeline-copy"}>
                    {index % 2 === 0 ? (
                      <div
                        className={`timeline-visual overflow-hidden rounded-[2rem] bg-gradient-to-br ${step.tone} p-3`}
                      >
                        <Image
                          src={step.image}
                          alt={step.alt}
                          placeholder="blur"
                          className="h-auto w-full rounded-[1.5rem] object-cover"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="inline-flex rounded-full bg-[#eef4f3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          Schritt {step.step}
                        </div>
                        <h3 className="font-display mt-4 text-3xl leading-tight text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-base leading-8 text-muted">{step.text}</p>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="border-t border-line">
        <div className="mx-auto grid w-full max-w-[88rem] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Kontakt
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
              Wenn Sie Logopädie
              <br />
              moderner gestalten wollen.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              Schreiben Sie uns. Wir melden uns mit weiteren Informationen dazu, wie
              fantasiegeleitete Inhalte sinnvoll in den therapeutischen Alltag integriert
              werden können.
            </p>
            <p className="mt-5 text-base font-semibold text-foreground">novaro-build@gmail.com</p>
          </div>

          <div className="rounded-[2rem] border border-line bg-white/74 p-6 shadow-[0_20px_50px_rgba(27,49,60,0.08)] backdrop-blur sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
