import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instapay | Splash Screen" },
      { name: "description", content: "Instapay mobile application splash screen." },
      { property: "og:title", content: "Instapay | Splash Screen" },
      { property: "og:description", content: "Instapay mobile application splash screen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="splash" aria-label="Instapay splash screen">
      <div className="splash-pattern" aria-hidden="true">
        <span className="violet-ribbon violet-ribbon-one" />
        <span className="violet-ribbon violet-ribbon-two" />
        <span className="orange-ribbon" />
        <span className="coral-ribbon" />
      </div>

      <div className="status-bar" aria-hidden="true">
        <div className="status-left">
          <span className="battery"><span>40</span></span>
          <span className="wifi" />
          <span className="signal"><i /><i /><i /><i /></span>
        </div>
        <time>11:01</time>
      </div>

      <section className="brand-lockup">
        <p lang="ar" dir="rtl">أهلاً بك في</p>
        <h1 aria-label="Instapay">INSTAPAY</h1>
      </section>

      <footer className="splash-footer">
        <div className="ipn-mark" aria-label="IPN">
          <span className="ipn-stripe" />
          <strong>IPN</strong>
        </div>
        <small>V1.12.1</small>
      </footer>
    </main>
  );
}
