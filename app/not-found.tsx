import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="section-container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
        404
      </span>
      <h1 className="mt-4 text-3xl font-bold text-charcoal-700 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-charcoal-500">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </main>
  );
}
