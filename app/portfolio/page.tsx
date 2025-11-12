// app/portfolio/page.tsx
import { Suspense } from "react";
import PortfolioPageClient from "./portfolio-client";

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Carregando portfólio...</div>}>
      <PortfolioPageClient />
    </Suspense>
  );
}
