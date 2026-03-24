import Image from "next/image";
import elefantImage from "../elefant.png";
import fussballImage from "../fussball.png";
import postHappyImage from "../postHappy.png";
import preHappyImage from "../preHappy.png";
import queenImage from "../queen.png";
import { ContactForm } from "../components/contact-form";
import { Header } from "../components/header";

const sections = [
  {
    id: "fantasie",
    title: "Fantasie macht Sprache leicht.",
    text: "Kinder durfen in ihre eigene Welt eintauchen und dabei mutig sprechen.",
    image: queenImage,
    alt: "Kind mit Krone als Bild fur Fantasie und Selbstvertrauen."
  },
  {
    id: "bewegung",
    title: "Bewegung bringt Worte in Gang.",
    text: "Spiel, Energie und Freude helfen dabei, Sprache lebendig zu machen.",
    image: fussballImage,
    alt: "Kind mit Fussball als Bild fur Bewegung und Mitmachen."
  },
  {
    id: "sicherheit",
    title: "Sicherheit gibt Kindern Stimme.",
    text: "Mit Ruhe, Struktur und warmen Impulsen entsteht Vertrauen ins eigene Sprechen.",
    image: elefantImage,
    alt: "Kind mit Elefant als Bild fur Sicherheit und Geborgenheit."
  }
];

export default function Home() {
  return (
    <main className="shell">
      <Header />

      <section id="top" className="bg-[linear-gradient(180deg,#fff9f0_0%,#fff4ea_100%)]">
        <div className="mx-auto w-full max-w-[88rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-5xl leading-[0.9] text-foreground sm:text-6xl lg:text-7xl">
              Der Weg zum Ziel
              <br />
              entspringt in
              <br />
              der Fantasie.
            </h1>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <div className="max-w-[24rem] justify-self-end">
              <div className="overflow-hidden rounded-[2rem] bg-[#ffd9bf] p-3 shadow-[0_18px_40px_rgba(215,100,43,0.14)]">
                <Image
                  src={preHappyImage}
                  alt="Kind beim ersten Sprachmoment."
                  priority
                  className="h-auto w-full rounded-[1.4rem] object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="font-display text-2xl leading-tight text-brand sm:text-3xl">
                Fantasie macht mutig.
              </p>
            </div>

            <div className="max-w-[24rem]">
              <div className="overflow-hidden rounded-[2rem] bg-[#cfeee6] p-3 shadow-[0_18px_40px_rgba(47,140,136,0.14)]">
                <Image
                  src={postHappyImage}
                  alt="Kind mit viel Fantasie und Freude am Sprechen."
                  className="h-auto w-full rounded-[1.4rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="uberblick" className="border-t border-line bg-[#fff6ec]">
        <div className="mx-auto grid w-full max-w-[88rem] gap-6 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Fur Kinder
            </p>
            <h2 className="font-display mt-3 text-3xl text-foreground">
              Warm, klar und kindgerecht.
            </h2>
          </div>
          <div className="rounded-[1.5rem] bg-white/55 px-4 py-4 text-base leading-7 text-muted">
            Novaro hilft Kindern, mutiger zu sprechen und ihrer Stimme zu vertrauen.
          </div>
          <div className="rounded-[1.5rem] bg-white/55 px-4 py-4 text-base leading-7 text-muted">
            Fur Eltern, Schulen und Einrichtungen, die Sprache freundlich begleiten wollen.
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`border-t border-line ${index % 2 === 0 ? "bg-white" : "bg-[#fff8ef]"}`}
        >
          <div className="mx-auto grid w-full max-w-[88rem] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-20">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Novaro
                </p>
                <h2 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">{section.text}</p>
              </div>
            </div>

            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div
                className={`mx-auto max-w-[25rem] overflow-hidden rounded-[2rem] p-3 ${
                  index === 0 ? "bg-[#ffd9bf]" : index === 1 ? "bg-[#d8f1ea]" : "bg-[#f8efb9]"
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.alt}
                  className="h-auto w-full rounded-[1.4rem] object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="kontakt" className="border-t border-line bg-[#fff8ef]">
        <div className="mx-auto grid w-full max-w-[88rem] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Kontakt
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
              Lass uns gemeinsam
              <br />
              Kinder starken.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Schreib uns und wir senden deine Anfrage direkt weiter.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">novaro-build@gmail.com</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
