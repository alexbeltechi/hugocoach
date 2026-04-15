"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coachingOpen, setCoachingOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const testimonials = [
    {
      logo: "/logos/forto.svg",
      quote: `Hugo is more than a consultant — he's a mentor who is always just a phone call away. He understands our business deeply, challenges us, and `,
      bold: `ensures we remain accountable to our potential`,
      rest: `. His partnership has been vital for our development.`,
      name: "Michael Wax",
      role: "Founder & CEO",
      company: "Forto",
      avatar: "/testimonials/michaelwax.png",
    },
    {
      logo: "/logos/generalcatalyst.svg",
      quote: `Hugo's ability to address any leadership dilemma with creativity and depth is unparalleled. His counsel is always insightful, whether `,
      bold: `strategizing over business growth or navigating team dynamics`,
      rest: `. He ensures I approach each challenge with confidence.`,
      name: "Jeannette zu Fürstenberg",
      role: "MD & Head of Europe",
      company: "General Catalyst",
      avatar: "/testimonials/jeannettezufuerstenberg.png",
    },
    {
      logo: "/logos/personio.svg",
      quote: `Hugo's genuine connection to our leadership team, combined with `,
      bold: `a challenging yet supportive approach`,
      rest: `, has guided us through numerous growth challenges. Both 1:1 coaching and group workshops have proved very valuable.`,
      name: "Hanno Renner",
      role: "CEO",
      company: "Personio",
      avatar: "/testimonials/hannorenner.png",
    },
    {
      logo: "/logos/ing.svg",
      quote: `Hugo serves not only as a developer of leaders but as a relentless challenger, ensuring `,
      bold: `we remain accountable to our highest potential`,
      rest: `. His guidance has been pivotal in refining our leadership vision and my personal approach as a CEO.`,
      name: "Nick Jue",
      role: "CEO",
      company: "ING Germany",
      avatar: "/testimonials/nickjue.png",
    },
  ];

  const goToTestimonial = (index: number, direction: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(direction);
    setTimeout(() => {
      setActiveTestimonial(index);
      setTimeout(() => setIsAnimating(false), 400);
    }, 10);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(diff) < threshold) return;
    if (diff > 0) {
      const next = (activeTestimonial + 1) % testimonials.length;
      goToTestimonial(next, "left");
    } else {
      const prev = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
      goToTestimonial(prev, "right");
    }
  };

  return (
    <main className="w-full">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#012c3f]">
        <div className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-3">
          <div className="border-r border-[#0a3a52]" />
          <div className="border-r border-[#0a3a52]" />
          <div />
          <div className="border-y border-r border-[#0a3a52]" />
          <div className="border-y border-r border-[#0a3a52]" />
          <div className="border-y border-[#0a3a52]" />
          <div className="border-r border-[#0a3a52]" />
          <div className="border-r border-[#0a3a52]" />
          <div />
        </div>

        {/* Floating Navigation - Desktop */}
        <nav className="fixed left-1/2 top-8 z-50 hidden -translate-x-1/2 items-center gap-4 rounded-[100px] bg-[#f6f3f1] py-2 pl-6 pr-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] md:flex">
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 py-1">
            <div className="relative h-[29px] w-[29px] shrink-0">
              <Image
                src="/hugo-large.png"
                alt="Hugo"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-[32px] font-bold leading-[0.9] tracking-[-0.64px] text-[#012c3f]">
              Hugo
            </span>
          </a>

          <div className="flex items-center">
            <div
              className="relative"
              onMouseEnter={() => setCoachingOpen(true)}
              onMouseLeave={() => setCoachingOpen(false)}
            >
              <Link
                href="/coaching"
                className="body flex items-center justify-center px-3 text-[#65564a] transition-colors hover:text-[#012c3f]"
              >
                Coaching
              </Link>
              {coachingOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                  <div className="flex flex-col rounded-[20px] bg-[#f6f3f1] py-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] min-w-[160px]">
                    <Link
                      href="/coaching#individual"
                      className="body px-4 py-2 text-[#65564a] transition-colors hover:text-[#012c3f]"
                    >
                      1:1 Coaching
                    </Link>
                    <Link
                      href="/coaching#team"
                      className="body whitespace-nowrap px-4 py-2 text-[#65564a] transition-colors hover:text-[#012c3f]"
                    >
                      Team Coaching
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="body flex items-center justify-center whitespace-nowrap px-3 text-[#65564a] transition-colors hover:text-[#012c3f]"
            >
              About me
            </Link>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScYNbbrDcMdqHbeu5F_tQOUhspqT1GiXH0fnC88huXqv8MbbQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="body flex items-center justify-center whitespace-nowrap rounded-[24px] bg-[#001924] px-6 py-3 text-white transition-opacity hover:opacity-90"
          >
            Work with me
          </a>
        </nav>

        {/* Floating Navigation - Mobile */}
        <nav className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-4 rounded-[100px] bg-[#f6f3f1] px-6 py-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] md:hidden">
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 py-1">
            <div className="relative h-[29px] w-[29px] shrink-0">
              <Image
                src="/hugo-large.png"
                alt="Hugo"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-[32px] font-bold leading-[0.9] tracking-[-0.64px] text-[#012c3f]">
              Hugo
            </span>
          </a>

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

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center px-6 pb-[130px] pt-[130px] md:pb-[152px] md:pt-[175px]">
          <div className="flex w-full max-w-[900px] flex-col items-center gap-4">
            <h2 className="text-center text-[72px] text-white md:text-[100px]">
              Create your<br />LEADERSHIP blueprint
            </h2>

            <div className="flex w-full flex-col items-center gap-6">
              <p className="w-full text-center text-[18px] leading-[1.3] text-[#a7c9eb] md:text-[20px]">
                Make this your year of Breakthrough and Reinvention
              </p>

              <Link
                href="/coaching"
                className="flex w-full max-w-[328px] items-center justify-center rounded-[24px] bg-[#ed6606] px-6 py-3 text-[18px] font-bold leading-[1.3] text-white transition-opacity hover:opacity-90"
              >
                Sign up for 12 months
              </Link>
            </div>

            <div className="flex items-baseline justify-center gap-2 pt-[10px]">
              <p className="text-[18px] leading-[1.3] text-[#cebcad]">
                Founder and Partner of
              </p>
              <a href="https://forchiefs.com" target="_blank" rel="noopener noreferrer" className="relative h-4 w-[106px] translate-y-[2px] block">
                <Image
                  src="/forchiefs.svg"
                  alt="FORCHIEFS"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="relative px-6">
        <div className="mx-auto flex max-w-[1024px] flex-col items-center gap-8">
          {/* Hugo Image — pulled up to overlap hero */}
          <div className="-mt-[90px] relative h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full bg-[#e1eefb] md:-mt-[112px] md:h-[223px] md:w-[223px]">
            <Image
              src="/hugo-large.png"
              alt="Hugo"
              fill
              className="object-cover"
              style={{ objectPosition: "center 10%" }}
            />
          </div>

          {/* Intro Text */}
          <div className="max-w-[601px] text-center">
            <p className="text-[18px] leading-[1.3] text-[#65564a] md:text-[20px]">
              Hi, I&apos;m Hugo,{" "}
              <span className="font-bold">
                steadfast partner to committed leaders.
              </span>{" "}
              I help professionals uncover their true potential, build a
              blueprint for their next chapter, and push them to become the
              leaders they&apos;re meant to be.
            </p>
          </div>

          {/* Companies Section */}
          <div className="flex w-full flex-col items-center gap-4">
            <p className="text-[16px] leading-[1.1] text-[#94857a]">
              Companies I have worked with:
            </p>

            <div className="relative w-full overflow-hidden">
              {/* Left fade */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#f6f3f1] to-transparent" />
              {/* Right fade */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#f6f3f1] to-transparent" />

              {/* Scrolling marquee track — logos duplicated for seamless loop */}
              <div className="marquee-track">
                <img src="/logos/personio.svg" alt="Personio" className="h-6 w-auto shrink-0" />
                <img src="/logos/forto.svg" alt="Forto" className="h-6 w-auto shrink-0" />
                <img src="/logos/ing.svg" alt="ING" className="h-6 w-auto shrink-0" />
                <img src="/logos/dataguard.svg" alt="DataGuard" className="h-6 w-auto shrink-0" />
                <img src="/logos/ah.svg" alt="AH" className="h-6 w-auto shrink-0" />
                <img src="/logos/raiffeisen.svg" alt="Raiffeisen Bank" className="h-6 w-auto shrink-0" />
                <img src="/logos/sumup.svg" alt="SumUp" className="h-6 w-auto shrink-0" />
                <img src="/logos/wayflyer.svg" alt="Wayflyer" className="h-6 w-auto shrink-0" />
                {/* Duplicate set for seamless loop */}
                <img src="/logos/personio.svg" alt="Personio" className="h-6 w-auto shrink-0" aria-hidden="true" />
                <img src="/logos/forto.svg" alt="Forto" className="h-6 w-auto shrink-0" aria-hidden="true" />
                <img src="/logos/ing.svg" alt="ING" className="h-6 w-auto shrink-0" aria-hidden="true" />
                <img src="/logos/dataguard.svg" alt="DataGuard" className="h-6 w-auto shrink-0" aria-hidden="true" />
                <img src="/logos/ah.svg" alt="AH" className="h-6 w-auto shrink-0" aria-hidden="true" />
                <img src="/logos/raiffeisen.svg" alt="Raiffeisen Bank" className="h-6 w-auto shrink-0" aria-hidden="true" />
                <img src="/logos/sumup.svg" alt="SumUp" className="h-6 w-auto shrink-0" aria-hidden="true" />
                <img src="/logos/wayflyer.svg" alt="Wayflyer" className="h-6 w-auto shrink-0" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HIDDEN GENIUS SECTION ===== */}
      <section className="relative px-6 py-[40px] lg:py-[100px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 lg:gap-20">
          {/* "Uncover Your" + Container + "Hidden Genius" */}
          <div className="relative w-full pt-[25px] pb-[25px] lg:pt-[40px] lg:pb-[70px]">
            {/* "Uncover Your" - positioned 50% above the top edge */}
            <h1 className="absolute left-0 right-0 top-[25px] z-10 -translate-y-1/2 text-center text-[#0074b3] lg:top-[40px]">
              uncover your
            </h1>

            {/* Blue container with Mozart image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-[40px] bg-[#e1eefb] lg:aspect-auto lg:h-[500px]">
              <Image
                src="/home/Mozart.jpg"
                alt="Mozart"
                fill
                className="object-cover"
              />
            </div>

            {/* "Hidden Genius" - positioned 50% below the bottom edge */}
            <h1 className="absolute bottom-[25px] left-0 right-0 z-10 translate-y-1/2 text-center text-[#0074b3] lg:bottom-[70px]">
              hidden genius
            </h1>
          </div>

          {/* Content Grid — Left: Text & CTA, Right: Cards */}
          <div className="grid w-full items-start gap-8 lg:grid-cols-2">
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col lg:sticky lg:top-[128px]">
              <p className="text-[28px] font-bold leading-[1.3] text-[#65564a] lg:text-[32px]">
                Dare to be your genuine self{" "}
                <span className="font-normal">
                  and uncover your inner Mozart
                </span>
              </p>

              <p className="mt-2 text-[18px] leading-[1.3] text-[#65564a]">
                Get Benchmarked on the world wide standard for leadership
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScYNbbrDcMdqHbeu5F_tQOUhspqT1GiXH0fnC88huXqv8MbbQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center rounded-[24px] bg-[#ed6606] px-6 py-3 text-[18px] font-bold leading-[1.3] text-white transition-opacity hover:opacity-90 lg:max-w-[328px]"
              >
                Work with me
              </a>
            </div>

            {/* Right Column: Cards */}
            <div className="flex flex-col gap-4">
              {/* Card 1: Remove the Masks */}
              <div className="overflow-hidden rounded-[40px] bg-[#e4d1fa]">
                <div className="relative aspect-video w-full lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/home/masks.jpg"
                    alt="Remove the Masks"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-start p-12">
                    <div className="space-y-1">
                      <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                        Remove
                      </p>
                      <p className="text-[32px] leading-[1.1]">
                        <span className="font-bold text-[#0074b3]">the </span>
                        <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                          MASKS
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-12 py-6">
                  <p className="text-center text-[18px] leading-[1.3] text-[#65564a]">
                    Remove the masks that hold you back and let your real self shine.
                  </p>
                </div>
              </div>

              {/* Card 2: Discover your hidden Strengths */}
              <div className="overflow-hidden rounded-[40px] bg-[#dbe7ed]">
                <div className="relative aspect-video w-full lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/home/strengths.jpg"
                    alt="Discover your hidden Strengths"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-end p-12">
                    <div className="space-y-1 text-right">
                      <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                        Discover
                      </p>
                      <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                        your hidden
                      </p>
                      <p className="text-[32px] leading-[1.1]">
                        <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                          STRENGTHS
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-12 py-6">
                  <p className="text-center text-[18px] leading-[1.3] text-[#65564a]">
                    Turn your hidden strengths into advantages.
                  </p>
                </div>
              </div>

              {/* Card 3: Connect with your Brilliance */}
              <div className="overflow-hidden rounded-[40px] bg-[#e4d1fa]">
                <div className="relative aspect-video w-full lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/home/brilliance.jpg"
                    alt="Connect with your Brilliance"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-start p-12">
                    <div className="space-y-1">
                      <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                        Connect with
                      </p>
                      <p className="text-[32px] leading-[1.1]">
                        <span className="font-bold text-[#0074b3]">your </span>
                        <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                          BRILLIANCE
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-12 py-6">
                  <p className="text-center text-[18px] leading-[1.3] text-[#65564a]">
                    Find what truly excites you and let it guide your growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BECOME THE ARCHITECT SECTION ===== */}
      <section className="relative px-6 py-[40px] lg:py-[100px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 lg:gap-20">
          {/* "Become The Architect" + Container + "Of Your Own Future" */}
          <div className="relative w-full pt-[40px] pb-[40px] lg:pt-[120px] lg:pb-[220px]">
            <h1 className="absolute left-0 right-0 top-[40px] z-10 -translate-y-[75%] text-center text-[#0074b3] lg:top-[120px]">
              become the<br />architect
            </h1>

            <div className="relative aspect-video w-full overflow-hidden rounded-[40px] bg-[#e1eefb] lg:aspect-auto lg:h-[500px]">
              <Image
                src="/home/architect.jpg"
                alt="Become the Architect"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="absolute bottom-[40px] left-0 right-0 z-10 translate-y-[75%] text-center text-[#0074b3] lg:bottom-[220px]">
              of your<br />own future
            </h1>
          </div>

          {/* Content Grid — Left: Cards, Right: Text & CTA */}
          <div className="grid w-full items-start gap-8 lg:grid-cols-2">
            {/* Left Column: Cards */}
            <div className="order-2 flex flex-col gap-4 lg:order-1">
              {/* Card 1: Shake off the Past */}
              <div className="overflow-hidden rounded-[40px] bg-[#e4d1fa]">
                <div className="relative aspect-video w-full lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/home/past.jpg"
                    alt="Shake off the Past"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-end p-12">
                    <div className="space-y-1 text-right">
                      <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                        Shake off
                      </p>
                      <p className="text-[32px] leading-[1.1]">
                        <span className="font-bold text-[#0074b3]">the </span>
                        <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                          PAST
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-12 py-6">
                  <p className="text-center text-[18px] leading-[1.3] text-[#65564a]">
                    Unlearn your old habits.
                  </p>
                </div>
              </div>

              {/* Card 2: Create your Blueprint */}
              <div className="overflow-hidden rounded-[40px] bg-[#dbe7ed]">
                <div className="relative aspect-video w-full lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/home/blueprint.jpg"
                    alt="Create your Blueprint"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-start p-12">
                    <div className="space-y-1">
                      <p className="text-[32px] font-bold leading-[1.1] text-white">
                        Create your
                      </p>
                      <p className="text-[32px] leading-[1.1]">
                        <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                          BLUEPRINT
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-12 py-6">
                  <p className="text-center text-[18px] leading-[1.3] text-[#65564a]">
                    Break down the goal, build the team, and own your part.
                  </p>
                </div>
              </div>

              {/* Card 3: Go through Transformation */}
              <div className="overflow-hidden rounded-[40px] bg-[#e4d1fa]">
                <div className="relative aspect-video w-full lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/home/transformation.jpg"
                    alt="Go through Transformation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-end p-12">
                    <div className="space-y-1 text-right">
                      <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                        Go through
                      </p>
                      <p className="text-[32px] leading-[1.1]">
                        <span className="font-bold text-[#0074b3]">a personal </span>
                      </p>
                      <p className="text-[32px] leading-[1.1]">
                        <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                          TRANSFORMATION
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-12 py-6">
                  <p className="text-center text-[18px] leading-[1.3] text-[#65564a]">
                    Shake off your past and invite the future.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Text & CTA (sticky) */}
            <div className="order-1 flex flex-col gap-6 lg:order-2 lg:sticky lg:top-[128px]">
              <p className="text-[28px] font-bold leading-[1.3] text-[#65564a] lg:text-[32px]">
                Together, we&apos;ll design a blueprint{" "}
                <span className="font-normal">
                  for your transformation
                </span>
              </p>

              <Link
                href="/coaching"
                className="flex w-full items-center justify-center rounded-[24px] bg-[#ed6606] px-6 py-3 text-[18px] font-bold leading-[1.3] text-white transition-opacity hover:opacity-90 lg:max-w-[328px]"
              >
                Ignite your leadership journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RISE UP TO YOUR NEXT UPGRADE SECTION ===== */}
      <section className="relative px-6 py-[40px] lg:py-[100px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 lg:gap-20">
          {/* "Rise Up To Your" + Container + "Next Upgrade" */}
          <div className="relative w-full pt-[25px] pb-[25px] lg:pt-[40px] lg:pb-[70px]">
            <h1 className="absolute left-0 right-0 top-[25px] z-10 -translate-y-1/2 text-center text-[#0074b3] lg:top-[40px]">
              rise up to your
            </h1>

            <div className="relative aspect-video w-full overflow-hidden rounded-[40px] bg-[#e1eefb] lg:aspect-auto lg:h-[500px]">
              <Image
                src="/home/upgrade.jpg"
                alt="Rise up to your next upgrade"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="absolute bottom-[25px] left-0 right-0 z-10 translate-y-1/2 text-center text-[#0074b3] lg:bottom-[70px]">
              next upgrade
            </h1>
          </div>

          {/* Content Grid — Left: Text & CTA, Right: Cards */}
          <div className="grid w-full items-start gap-8 lg:grid-cols-2">
            {/* Left Column: Text & CTA (sticky) */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-[128px]">
              <p className="text-[28px] font-bold leading-[1.3] text-[#65564a] lg:text-[32px]">
                I&apos;ll challenge and support you{" "}
                <span className="font-normal">
                  to achieve your next level of leadership.
                </span>
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScYNbbrDcMdqHbeu5F_tQOUhspqT1GiXH0fnC88huXqv8MbbQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-[24px] bg-[#ed6606] px-6 py-3 text-[18px] font-bold leading-[1.3] text-white transition-opacity hover:opacity-90 lg:max-w-[328px]"
              >
                Book a Chemistry Call
              </a>
            </div>

            {/* Right Column: Cards */}
            <div className="flex flex-col gap-4">
              {/* Card 1: Transform your Thinking */}
              <div className="overflow-hidden rounded-[40px] bg-[#e4d1fa]">
                <div className="relative aspect-video w-full lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/home/thinking.jpg"
                    alt="Transform your Thinking"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-end p-12">
                    <div className="space-y-1 text-right">
                      <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                        Transform your
                      </p>
                      <p className="text-[32px] leading-[1.1]">
                        <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                          THINKING
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-12 py-6">
                  <p className="text-center text-[18px] leading-[1.3] text-[#65564a]">
                    Reform your thinking and habits according to your intended future.
                  </p>
                </div>
              </div>

              {/* Card 2: Enter a Safe Space */}
              <div className="overflow-hidden rounded-[40px] bg-[#dbe7ed]">
                <div className="relative aspect-video w-full lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/home/safe_space.jpg"
                    alt="Enter a Safe Space"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-start p-12">
                    <div className="space-y-1">
                      <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                        Enter a
                      </p>
                      <p className="text-[32px] leading-[1.1]">
                        <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                          SAFE SPACE
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-12 py-6">
                  <p className="text-center text-[18px] leading-[1.3] text-[#65564a]">
                    Leadership can be lonely. Discuss anything with me that&apos;s on your mind in a safe, creative space.
                  </p>
                </div>
              </div>

              {/* Card 3: Grow through your Discomfort */}
              <div className="overflow-hidden rounded-[40px] bg-[#e4d1fa]">
                <div className="relative aspect-video w-full lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/home/discomfort.jpg"
                    alt="Grow through your Discomfort"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-end p-12">
                    <div className="space-y-1 text-right">
                      <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                        Grow
                      </p>
                      <p className="text-[32px] leading-[1.1]">
                        <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                          THROUGH{" "}
                        </span>
                        <span className="font-bold text-[#0074b3]">your</span>
                      </p>
                      <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                        discomfort
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-12 py-6">
                  <p className="text-center text-[18px] leading-[1.3] text-[#65564a]">
                    I&apos;ll support you like an athlete to reach an olympic level — every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FULL POTENTIAL CTA SECTION ===== */}
      <section className="relative px-6 pt-0 pb-[40px] lg:pt-0 lg:pb-[70px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center">
          <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[40px] bg-[#f6872b] px-8 py-16 lg:rounded-[80px] lg:py-24">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
              <div className="border-r border-[#e07a20]" />
              <div className="border-r border-[#e07a20]" />
              <div />
              <div className="border-y border-r border-[#e07a20]" />
              <div className="border-y border-r border-[#e07a20]" />
              <div className="border-y border-[#e07a20]" />
              <div className="border-r border-[#e07a20]" />
              <div className="border-r border-[#e07a20]" />
              <div />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
              <div className="flex flex-col gap-2">
                <p className="text-[36px] font-bold leading-[1.1] text-white lg:text-[48px]" style={{ fontVariationSettings: "'opsz' 48, 'wdth' 87.5" }}>
                  Are you at your<br />
                  <span className="uppercase" style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}>
                    FULL POTENTIAL?
                  </span>
                </p>
                <p className="text-[18px] leading-[1.3] text-white lg:text-[20px]">
                  Get benchmarked on the world wide standard for leadership
                </p>
              </div>
              <Link
                href="/coaching"
                className="flex items-center justify-center rounded-[24px] bg-[#001924] px-6 py-3 text-[18px] font-bold leading-[1.3] text-white transition-opacity hover:opacity-90"
              >
                Find out where you stand
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW I WORK SECTION ===== */}
      <section className="relative px-6 pt-0 pb-[40px] lg:pt-0 lg:pb-[70px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-12">
          <div className="flex max-w-[800px] flex-col items-center gap-3 text-center">
            <h2 className="text-[#0074b3]">
              HOW I WORK
            </h2>
            <p className="max-w-[690px] text-[20px] leading-[1.3] text-[#65564a] lg:text-[24px]">
              <span className="font-bold">A year-long partnership with me.</span>{" "}
              Direct, personal and customized to build lasting impact
            </p>
          </div>

          <div className="grid w-full gap-4 md:grid-cols-3">
            {/* Card 1: A ONE year Journey */}
            <div className="flex flex-col justify-between rounded-[24px] bg-white p-10 lg:h-[350px]">
              <div>
                <p className="text-[32px] font-bold leading-[1.1] text-[#0074b3]">
                  A{" "}
                  <span className="uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                    ONE
                  </span>{" "}
                  year
                </p>
                <p className="text-[32px] font-bold italic leading-[1.1] text-[#0074b3]">
                  Journey
                </p>
              </div>
              <p className="mt-8 text-[16px] leading-[1.3] text-[#65564a] lg:mt-0">
                A 12-month commitment designed to reshape beliefs, build future-fit habits, and create measurable change.
              </p>
            </div>

            {/* Card 2: Direct ACCESS to me */}
            <div className="flex flex-col justify-between rounded-[24px] bg-white p-10 lg:h-[350px]">
              <div>
                <p className="text-[32px] leading-[1.1]">
                  <span className="font-bold text-[#0074b3]">Direct </span>
                  <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                    ACCESS
                  </span>
                </p>
                <p className="text-[32px] font-bold italic leading-[1.1] text-[#0074b3]">
                  to me
                </p>
              </div>
              <p className="mt-8 text-[16px] leading-[1.3] text-[#65564a] lg:mt-0">
                When we work together, I will be your sidekick—available to support, challenge, and guide you in the moments that matter.
              </p>
            </div>

            {/* Card 3: Tailored to YOU and your TEAM */}
            <div className="flex flex-col justify-between rounded-[24px] bg-white p-10 lg:h-[350px]">
              <div>
                <p className="text-[32px] leading-[1.1]">
                  <span className="font-bold text-[#0074b3]">Tailored to </span>
                  <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                    YOU
                  </span>
                </p>
                <p className="text-[32px] leading-[1.1]">
                  <span className="font-bold italic text-[#0074b3]">and your </span>
                  <span className="font-bold uppercase text-black" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>
                    TEAM
                  </span>
                </p>
              </div>
              <p className="mt-8 text-[16px] leading-[1.3] text-[#65564a] lg:mt-0">
                Whether one-on-one or with your leadership team, we will co-create to customize to your context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="relative px-6 pt-0 pb-[40px] lg:pt-0 lg:pb-[70px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center">
          <div
            className="relative flex w-full flex-col overflow-hidden rounded-[40px] bg-[#f6f3f1] px-6 py-10 lg:flex-row lg:items-center lg:justify-center lg:px-8 lg:py-20"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Mobile arrows — top of card */}
            <div className="mb-6 flex items-center justify-center gap-4 lg:hidden">
              <button
                onClick={() => {
                  const prev = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
                  goToTestimonial(prev, "right");
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#94857a] transition-all duration-200 hover:bg-[#e8e4e1] hover:text-[#65564a]"
                aria-label="Previous testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={() => {
                  const next = (activeTestimonial + 1) % testimonials.length;
                  goToTestimonial(next, "left");
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#94857a] transition-all duration-200 hover:bg-[#e8e4e1] hover:text-[#65564a]"
                aria-label="Next testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Desktop left arrow */}
            <button
              onClick={() => {
                const prev = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
                goToTestimonial(prev, "right");
              }}
              className="absolute left-8 z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#94857a] transition-all duration-200 hover:bg-[#e8e4e1] hover:text-[#65564a] lg:flex"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            {/* Testimonial Content */}
            <div className="relative w-full max-w-[760px] overflow-hidden lg:mx-auto">
              <div
                key={activeTestimonial}
                className="flex flex-col items-center gap-8 transition-all duration-400 ease-out"
                style={{
                  animation: `${slideDirection === "left" ? "slideFromRight" : "slideFromLeft"} 0.4s ease-out`,
                }}
              >
                <div className="relative h-8 w-32">
                  <Image
                    src={testimonials[activeTestimonial].logo}
                    alt={testimonials[activeTestimonial].company}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-center text-[18px] leading-[1.3] text-[#65564a] lg:text-[24px]">
                  {testimonials[activeTestimonial].quote}
                  <span className="font-bold">{testimonials[activeTestimonial].bold}</span>
                  {testimonials[activeTestimonial].rest}
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-[20px] leading-[1.3] text-[#012c3f]">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-[18px] leading-[1.3] text-[#94857a]">
                      {testimonials[activeTestimonial].role} — <span className="font-bold">{testimonials[activeTestimonial].company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop right arrow */}
            <button
              onClick={() => {
                const next = (activeTestimonial + 1) % testimonials.length;
                goToTestimonial(next, "left");
              }}
              className="absolute right-8 z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#94857a] transition-all duration-200 hover:bg-[#e8e4e1] hover:text-[#65564a] lg:flex"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToTestimonial(i, i > activeTestimonial ? "left" : "right")}
                className={`h-3 w-3 rounded-full transition-colors ${i === activeTestimonial ? "bg-[#0074b3]" : "bg-[#d5d0cc]"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPROACH SECTION ===== */}
      <section className="relative px-6 pt-0 pb-[40px] lg:pt-0 lg:pb-[70px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10">
          <div className="flex max-w-[800px] flex-col items-center gap-3 text-center">
            <h2 className="text-[#0074b3]">
              APPROACH
            </h2>
            <p className="text-[24px] leading-[1.3] text-[#65564a] lg:text-[32px]">
              My authentic growth framework for{" "}
              <span className="font-bold">fostering long lasting transformation</span>
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {/* Pillar 1: Open and honest dialogue */}
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-full bg-[#e9f4ff]">
                <Image
                  src="/home/open.jpg"
                  alt="Open and honest dialogue"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2">
                <p className="text-[28px] font-bold leading-[1.3] text-[#0074b3]">
                  Open and honest dialogue
                </p>
                <p className="mt-4 text-[18px] leading-[1.3] text-[#94857a]">
                  We cocreate a space where{" "}
                  <span className="font-bold">you can speak your truth</span> and I share mine — generating insights and driving growth.
                </p>
              </div>
            </div>

            {/* Pillar 2: Keeping progress aligned */}
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-full bg-[#edc8c8]">
                <Image
                  src="/home/progress.jpg"
                  alt="Keeping progress aligned"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2">
                <p className="text-[28px] font-bold leading-[1.3] text-[#0074b3]">
                  Keeping progress aligned
                </p>
                <p className="mt-4 text-[18px] leading-[1.3] text-[#94857a]">
                  We actively monitor your progress and ensure accountability, guiding both of us toward your developmental goals.
                </p>
              </div>
            </div>

            {/* Pillar 3: Serious growth, lighthearted spirit */}
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-full bg-[#f4dc46]">
                <Image
                  src="/home/growth.jpg"
                  alt="Serious growth, lighthearted spirit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2">
                <p className="text-[28px] font-bold leading-[1.3] text-[#0074b3]">
                  Serious growth, lighthearted spirit
                </p>
                <p className="mt-4 text-[18px] leading-[1.3] text-[#94857a]">
                  I guide you through moments of growth—delving into the core—<span className="font-bold">embracing depth while maintaining a playful spirit.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORK WITH ME SECTION ===== */}
      <section id="work-with-me" className="relative px-6 pb-[40px] pt-0 lg:pb-[80px] lg:pt-0">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center">
          <div className="relative w-full">
            {/* "WORK with ME" title overlapping card 50% */}
            <h2 className="relative z-10 -mb-[0.45em] text-center text-[#0074b3]">
              WORK with ME
            </h2>

            {/* Card container */}
            <div className="w-full overflow-hidden rounded-[40px] bg-white">
              <div className="flex flex-col lg:flex-row">
                {/* Left: Hugo image */}
                <div className="relative aspect-square w-full overflow-hidden lg:aspect-[4/5] lg:w-1/2">
                  <Image
                    src="/home/hugo.jpg"
                    alt="Hugo coaching"
                    fill
                    className="rounded-[40px] object-cover"
                  />
                </div>

                {/* Right: Content card */}
                <div className="flex w-full flex-col justify-center gap-6 px-8 py-10 lg:w-1/2 lg:px-16 lg:py-8">
                  <p className="text-[32px] font-bold leading-[1.2] text-[#0074b3]">
                    Curious to find out what we can uncover?
                  </p>

                  <div className="flex flex-col gap-2 text-[18px] leading-[1.3] text-[#65564a]">
                    <p>Sign up for 12 months of coaching.</p>
                    <p>Have regular check-ins and milestones with me to track your progress.</p>
                    <p>Reach out to me whenever you need extra support.</p>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScYNbbrDcMdqHbeu5F_tQOUhspqT1GiXH0fnC88huXqv8MbbQ/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center rounded-[24px] bg-[#ed6606] px-6 py-3 text-[18px] font-medium leading-[1.3] text-white transition-opacity hover:opacity-90"
                    >
                      Book a Chemistry Call
                    </a>
                    <p className="text-[15px] leading-[1.3] text-[#65564a]">
                      📋 Fill out the form and we&apos;ll see if we&apos;re a match!
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
            <a
              href="#"
              className="body text-white"
              onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              Home
            </a>
            <Link
              href="/coaching"
              className="body text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Coaching
            </Link>
            <Link
              href="/coaching#individual"
              className="text-sm text-white/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              1:1 Coaching
            </Link>
            <Link
              href="/coaching#team"
              className="text-sm text-white/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team Coaching
            </Link>
            <Link
              href="/about"
              className="body text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              About me
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScYNbbrDcMdqHbeu5F_tQOUhspqT1GiXH0fnC88huXqv8MbbQ/viewform?usp=header"
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
