import { createFileRoute } from "@tanstack/react-router";
import backgroundAsset from "@/assets/instapay-background.jpeg.asset.json";
import instapayLogo from "@/assets/instapay-logo.png";
import ipnLogo from "@/assets/ipn-logo.png";

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
    <main
      className="splash"
      aria-label="Instapay splash screen"
      style={{ backgroundImage: `url(${backgroundAsset.url})` }}
    >

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
        <h1 className="sr-only">Instapay</h1>
        <img src={instapayLogo} alt="Instapay" />
      </section>

      <footer className="splash-footer">
        <img src={ipnLogo} alt="IPN" />
        <small>V1.12.1</small>
      </footer>
    </main>
  );
}
