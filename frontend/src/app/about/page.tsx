"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="w-full">
      {/* Floating Navigation - Desktop */}
      <nav className="fixed left-1/2 top-8 z-50 hidden -translate-x-1/2 items-center gap-4 rounded-[100px] bg-[#f6f3f1] py-2 pl-6 pr-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] md:flex">
        <Link href="/" scroll={true} className="flex items-center gap-2 py-1">
          <div className="relative h-[29px] w-[29px] shrink-0">
            <Image
              src="/hugo-avatar.jpg"
              alt="Hugo"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-[32px] font-bold leading-[0.9] tracking-[-0.64px] text-[#012c3f]">
            Hugo
          </span>
        </Link>

        <div className="flex items-center">
          <Link
            href="/coaching"
            className="body flex items-center justify-center px-3 text-[#65564a] transition-colors hover:text-[#012c3f]"
          >
            Coaching
          </Link>
          <Link
            href="/about"
            className="body flex items-center justify-center whitespace-nowrap px-3 text-[#012c3f]"
          >
            About me
          </Link>
        </div>

        <a
          href="https://voltavolta.typeform.com/to/vBa2coyl"
          target="_blank"
          rel="noopener noreferrer"
          className="body flex items-center justify-center whitespace-nowrap rounded-[24px] bg-[#001924] px-6 py-3 text-white transition-opacity hover:opacity-90"
        >
          Work with me
        </a>
      </nav>

      {/* Floating Navigation - Mobile */}
      <nav className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-4 rounded-[100px] bg-[#f6f3f1] px-6 py-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] md:hidden">
        <Link href="/" scroll={true} className="flex items-center gap-2 py-1">
          <div className="relative h-[29px] w-[29px] shrink-0">
            <Image
              src="/hugo-avatar.jpg"
              alt="Hugo"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-[32px] font-bold leading-[0.9] tracking-[-0.64px] text-[#012c3f]">
            Hugo
          </span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-6 w-6 flex-col items-center justify-center gap-[3px]"
          aria-label="Toggle menu"
        >
          <span className="h-[2px] w-4 bg-[#012c3f]"></span>
          <span className="h-[2px] w-4 bg-[#012c3f]"></span>
          <span className="h-[2px] w-4 bg-[#012c3f]"></span>
        </button>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden px-6 pb-[40px] pt-[120px] lg:pb-[80px] lg:pt-[160px]">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column — Tilted Photo + "Here to help" SVG */}
          <div className="order-1 relative mx-auto w-[300px] lg:mx-0 lg:w-[405px] lg:shrink-0">
            <div className="-rotate-1 overflow-hidden rounded-[40px]" style={{ background: "linear-gradient(180deg, #dbe7ed 25%, #e4d1fa 100%)" }}>
              <div className="relative aspect-[397/469]">
                <Image
                  src="/about/hugo.jpg"
                  alt="Hugo Suidman"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 60%" }}
                />
              </div>
            </div>
            {/* "Here to help you get there!" handwritten SVG — hidden on mobile */}
            <div className="absolute left-[65%] -top-[35px] z-10 hidden w-[217px] lg:block">
              <Image
                src="/about/heretohelp.svg"
                alt="Here to help you get there!"
                width={217}
                height={158}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Right Column — Text + CTA */}
          <div className="order-2 relative z-10 flex flex-col items-center gap-6 text-center lg:items-start lg:text-left lg:pt-[170px]">
            <div
              className="text-[48px] font-bold leading-[0.9] tracking-[-1px] text-[#0074b3] lg:text-[100px]"
              style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}
            >
              Hi, I&apos;m Hugo
            </div>

            <p className="max-w-[700px] text-[18px] leading-[1.5] text-[#65564a]">
              I work with people to{" "}
              <span className="font-bold">release their inner Genius</span>,
              helping leaders uncover their true potential and push toward who
              they&apos;re meant to become.
            </p>

            <Link
              href="/coaching"
              className="flex w-full items-center justify-center rounded-[24px] bg-[#ed6606] px-6 py-3 text-[18px] font-bold leading-[1.3] text-white transition-opacity hover:opacity-90 lg:max-w-[328px]"
            >
              Sign up for 12 months
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MANIFESTO SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px]">
        <div className="mx-auto flex max-w-[700px] flex-col gap-[16px]">
          <div className="text-[18px] leading-[1.5] text-[#65564a]">
            <p className="mb-4">
              When we look at work today, only a few feel truly engaged or
              fulfilled. Many are indifferent, and too many actively dislike what
              they do. This falls far short of what people are capable of
              becoming.
            </p>
            <p>
              Work has become just a way to earn money, not a space for
              expression, mastery, or meaning. Real growth—like learning music or
              a new language—comes from passion and deep belief, but most jobs
              leave little room for that. Instead, we wear roles designed by
              others, focus on targets, and follow paths that often hide our true
              strengths and dreams.
            </p>
          </div>

          {/* Quote Block */}
          <div className="flex flex-col items-center justify-center py-6">
            <p className="text-center text-[24px] font-semibold leading-[1.3] text-[#0074b3] lg:max-w-[500px] lg:text-[32px]">
              &ldquo;I believe every person carries more potential than they
              currently show.&rdquo;
            </p>
          </div>

          <div className="text-[18px] leading-[1.5] text-[#65564a]">
            <p className="mb-4">
              This drives me to propose a different way. I&apos;m convinced
              everyone has hidden potential waiting to be awakened. Discovering
              what genuinely excites you is the key to unlocking it—for your own
              growth and for the benefit of others.
            </p>
            <p className="mb-4">
              At work, we often wear masks to fit in, concealing who we really
              are. But masks don&apos;t have to limit us. Chosen consciously,
              they can amplify our strengths and values. When I act as St.
              Nicholas, the mask allows me to spread hope and recognition. As
              parents, the roles we play create safe spaces for growth. These
              masks don&apos;t hide us—they magnify what matters.
            </p>
            <p className="mb-4">
              Imagine if our work masks did the same: helping us be more
              authentic, not less.
            </p>
            <p className="mb-4">
              This manifesto is a call to remove limiting masks and choose those
              that let our genius shine. It&apos;s also a challenge to leaders:
              create environments where people feel safe to explore who they are
              and who they can become. Leadership isn&apos;t about titles—it&apos;s
              about care, trust, and helping others grow until they&apos;re ready
              to fly.
            </p>
            <p className="mb-4">
              I&apos;m Hugo. My mission is to reveal genius—empowering people to
              discover, live, and share their full potential, and supporting
              leaders in building spaces where that transformation can happen.
            </p>
            <p>— Yours</p>
          </div>

          <p className="font-sacramento text-[48px] leading-[1.2] text-[#0074b3]">
            Hugo Suidman
          </p>
        </div>
      </section>

      {/* ===== MY NETWORK SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-16 lg:pb-[80px]">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-10">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-6">
            <div
              className="text-center text-[60px] font-bold uppercase leading-[0.8] tracking-[-0.02em] text-[#0074b3] lg:text-[180px] lg:tracking-[-3.6px]"
              style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}
            >
              My NETWORK
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="relative h-[24px] w-[160px]">
                <Image
                  src="/about/forchiefs-alliance.svg"
                  alt="ForChiefs Alliance"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[24px] leading-[1.2] text-[#65564a] lg:text-[32px]">
                — Founder &amp; Partner
              </p>
            </div>
          </div>

          {/* Two-column: Text left, Image right */}
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-[24px] leading-[1.3] text-[#65564a] lg:text-[28px]">
                <span className="font-normal">
                  I created ForChiefs in 2017 to{" "}
                </span>
                <span className="font-bold">
                  help leaders build businesses that truly matter
                </span>
              </p>
              <div className="text-[18px] leading-[1.5] text-[#65564a]">
                <p className="mb-4">
                  I bring together like-minded people who have consciously
                  switched sides—from being leaders themselves to supporting
                  leaders as trusted sidekicks.
                </p>
                <p className="mb-4">
                  We are committed to raising the stakes of creating meaning
                  while building businesses that truly matter.
                </p>
                <p className="mb-4">
                  Together, we hold this purpose and work with leaders around the
                  world to elevate their ambition, level, and
                  consciousness—always in service of both society and companies.
                </p>
                <p>
                  When you work with me, you don&apos;t just get one sidekick.
                  You gain access to 28 similar yet distinct sidekicks, and I
                  make sure you&apos;re matched with the one who fits you best.
                </p>
              </div>
            </div>
            <div className="flex flex-1 items-start">
              <div className="relative h-[360px] w-full overflow-hidden rounded-[40px] bg-[#f6872b]">
                <Image
                  src="/about/network.jpg"
                  alt="ForChiefs network"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HUGO = HUGE GOALS SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center">
          <div className="relative w-full">
            <div
              className="relative z-10 -mb-[0.45em] text-left text-[48px] font-bold leading-[0.8] tracking-[-0.02em] text-[#0074b3] lg:text-center lg:text-[150px] lg:tracking-[-3px]"
              style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}
            >
              HuGo = HUGE GOALS
            </div>

            <div className="w-full overflow-hidden rounded-[40px] bg-white">
              <div className="flex flex-col gap-8 p-6 pt-[40px] lg:flex-row lg:gap-10 lg:p-10 lg:pt-[80px]">
                <div className="flex flex-1 items-start">
                  <div className="relative h-[360px] w-full overflow-hidden rounded-[24px] bg-[#f6872b]">
                    <Image
                      src="/about/hugo-goals.jpg"
                      alt="Hugo coaching"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6">
                  <p className="text-[24px] leading-[1.3] text-[#65564a] lg:text-[28px]">
                    <span className="font-bold">
                      I&apos;ve just completed four 18-year-long coaching journeys
                    </span>{" "}
                    with people who carry 50% of my DNA.
                  </p>
                  <div className="text-[18px] leading-[1.5] text-[#65564a]">
                    <p className="mb-4">
                      I always hold a larger picture of you in my mind—who you are
                      now and who you&apos;re becoming. I love talking business,
                      especially when it&apos;s connected to meaning, potential, and
                      real impact.
                    </p>
                    <p className="mb-4">
                      I set HuGo (Huge) Goals. I invite myself and others to fall in
                      love with their potential—with their future self—and to move
                      toward it deliberately.
                    </p>
                    <p className="mb-4">
                      I strive for irreversible growth. I see everyone as a hidden
                      artist, waiting to be revealed. I welcome the shady sides of
                      people and invite the sun to shine on them, because that&apos;s
                      where real transformation happens.
                    </p>
                    <p>
                      I value accountability and measurable progress. And one thing
                      is important to me: never treat me as a supplier. I don&apos;t
                      even like the word coach. I&apos;m your sidekick.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORK WITH ME SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px] lg:pt-0">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center">
          <div className="relative w-full">
            <div
              className="relative z-10 -mb-[0.45em] text-center text-[72px] font-bold uppercase leading-[0.8] tracking-[-0.02em] text-[#0074b3] lg:text-[150px] lg:tracking-[-3px]"
              style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}
            >
              WORK with ME
            </div>

            <div className="w-full overflow-hidden rounded-[40px] bg-white">
              <div className="flex flex-col lg:flex-row">
                {/* Hugo image — shows first on mobile */}
                <div className="relative aspect-square w-full overflow-hidden lg:aspect-[4/5] lg:w-1/2">
                  <Image
                    src="/about/hugo.jpg"
                    alt="Hugo"
                    fill
                    className="rounded-[40px] object-cover"
                    style={{ objectPosition: "right center" }}
                  />
                </div>

                {/* Content card */}
                <div className="flex w-full flex-col justify-center gap-6 px-8 py-12 lg:w-1/2 lg:px-16 lg:py-8">
                  <p className="text-[32px] font-bold leading-[1.2] text-[#0074b3]">
                    Ignite Your Leadership Journey Now
                  </p>

                  <p className="text-[18px] leading-[1.3] text-[#65564a]">
                    <span className="font-bold">Step up and stand out. </span>
                    Begin your journey to top-tier leadership now—where will your
                    potential take you?
                  </p>

                  <div className="flex flex-col items-center gap-3">
                    <a
                      href="https://voltavolta.typeform.com/to/vBa2coyl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center rounded-[24px] bg-[#ed6606] px-6 py-3 text-[18px] font-medium leading-[1.3] text-white transition-opacity hover:opacity-90"
                    >
                      Book a Chemistry Call
                    </a>
                    <p className="text-[15px] leading-[1.3] text-[#65564a]">
                      📋 Fill out the form and we&apos;ll see if we&apos;re a
                      match!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-6 pb-[40px] pt-0 text-center lg:pb-[80px]">
        <p className="text-[15px] leading-[1.3] text-[#94857a]">
          Copyright {new Date().getFullYear()}, All Rights Reserved
        </p>
      </footer>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#012c3f] md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute right-6 top-6 text-4xl text-white"
              aria-label="Close menu"
            >
              ×
            </button>
            <Link
              href="/"
              scroll={true}
              className="body text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/coaching"
              className="body text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Coaching
            </Link>
            <Link
              href="/about"
              className="body text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              About me
            </Link>
            <a
              href="https://voltavolta.typeform.com/to/vBa2coyl"
              target="_blank"
              rel="noopener noreferrer"
              className="body rounded-[24px] bg-[#ed6606] px-6 py-3 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work with me
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
