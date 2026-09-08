import { useEffect } from "react";

const WHITEPAPER_URL =
  "/whitepaper/2026-09-03-White-paper-AlloX-FFG-76KSM9451.xhtml";

export function MicarWhitepaperPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "MiCA White Paper | AlloX";
  }, []);

  return (
    <div className="fixed inset-0 pt-28 bg-white">
      <iframe
        src={WHITEPAPER_URL}
        title="AlloX MiCA White Paper"
        className="w-full h-full border-0"
      />
    </div>
  );
}
