import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-20">

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">

    
        {/* Illustration */}
        <div className="mt-10">
          <Image
            src="/404.svg"
            alt="404 Illustration"
            width={120}
            height={120}
            priority
            className="mx-auto h-auto w-full max-w-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-10 font-heading text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl">
          Oops! Page Not Found
        </h1>

        {/* Description */}
        <span className="mt-5 max-w-xl text-base leading-8 text-body">
          The page you're looking for may have been moved, deleted,
          or the URL might be incorrect. Let's get you back on track.
        </span>

        {/* CTA */}
        <Link
          href="/"
          className="
            mt-2
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-primary
            px-7
            py-3.5
            text-sm
            font-semibold
            text-primary-foreground
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            hover:shadow-primary/20
          "
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>

      </div>
    </main>
  );
};

export default NotFound;