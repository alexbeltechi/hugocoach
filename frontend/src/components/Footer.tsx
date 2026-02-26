import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Homepage" },
  { href: "/work-with-me", label: "Coaching" },
  { href: "/about", label: "About Me" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-bold text-white">H</span>
              </div>
              <span className="text-lg font-semibold">Hugo</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Leadership coaching to help you uncover your hidden genius and
              create your own blueprint for success.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="#contact"
                className="inline-block w-fit rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                BOOK A CALL
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Hugo Coaching. All rights reserved.
        </div>
      </div>
    </footer>
  );
}



