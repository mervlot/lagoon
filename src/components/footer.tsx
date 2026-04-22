import Link from 'next/link';
import { Facebook, Instagram, Trees, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start">
          <Link href="/" className="flex items-center space-x-2">
            <Trees className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">
              The Lagoon
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            aria-label="Twitter"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            aria-label="Facebook"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
