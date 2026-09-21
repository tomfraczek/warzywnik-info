import type { ReactNode } from "react";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
  showDraftNotice?: boolean;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
  showDraftNotice = true,
}: LegalPageLayoutProps) {
  return (
    <main className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-green-primary text-sm font-medium hover:underline mb-10"
        >
          ← Wróć na stronę główną
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-graphite mb-3">
            {title}
          </h1>
          {showDraftNotice && (
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Uwaga:</strong> Ten dokument jest szablonem i może
              zawierać sekcje oznaczone jako &quot;[PLACEHOLDER]&quot;
              wymagające uzupełnienia przez właściciela aplikacji przed
              publikacją.
            </div>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-graphite [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-graphite-mid [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-graphite-mid [&_ul]:mb-4 [&_li]:mb-1">
          {children}
        </div>
      </div>
    </main>
  );
}
