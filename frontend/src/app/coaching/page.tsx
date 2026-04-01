"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Coaching() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="w-full">
      {/* Floating Navigation - Desktop */}
      <nav className="fixed left-1/2 top-8 z-50 hidden -translate-x-1/2 items-center gap-4 rounded-[100px] bg-[#f6f3f1] py-2 pl-6 pr-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] md:flex">
        <Link href="/" scroll={true} className="flex items-center gap-2 py-1">
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
        </Link>

        <div className="flex items-center">
          <Link
            href="/coaching"
            className="body flex items-center justify-center px-3 text-[#012c3f]"
          >
            Coaching
          </Link>
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
        <Link href="/" scroll={true} className="flex items-center gap-2 py-1">
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
        <div className="mx-auto flex max-w-[1100px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          {/* Left Column — Text + CTA */}
          <div className="order-2 relative z-10 flex flex-col gap-6 lg:order-1 lg:max-w-[600px] lg:pt-8">
            <div
              className="text-[48px] font-bold uppercase leading-[0.9] tracking-[-1px] text-[#0074b3] lg:text-[100px]"
              style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}
            >
              twelve months of leadership transformation
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-end gap-[5px]">
                <span className="text-[32px] font-bold leading-[1.3] text-black">
                  €25,000
                </span>
                <span className="pb-1 text-[20px] font-bold leading-[1.3] text-[#0074b3]">
                  / 1 Year
                </span>
              </div>
              <p className="text-[18px] leading-[1.3] text-[#65564a]">
                A deep, sustained transformation{" "}
                <strong>for leaders ready to evolve</strong> personally and
                strategically
              </p>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScYNbbrDcMdqHbeu5F_tQOUhspqT1GiXH0fnC88huXqv8MbbQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-[24px] bg-[#ed6606] px-6 py-3 text-[18px] font-bold leading-[1.3] text-white transition-opacity hover:opacity-90 lg:max-w-[328px]"
            >
              Sign up for 12 months
            </a>
          </div>

          {/* Right Column — Overlapping Photos */}
          <div className="order-1 relative mx-auto h-[340px] w-[300px] lg:order-2 lg:mx-0 lg:ml-auto lg:h-[520px] lg:w-[340px]">
            <div
              className="absolute left-0 top-0 z-10 h-[240px] w-[210px] -rotate-2 cursor-pointer overflow-hidden rounded-[40px] transition-all duration-300 ease-out hover:z-30 hover:scale-[1.06] hover:-rotate-[4deg] lg:h-[332px] lg:w-[281px]"
            >
              <Image
                src="/coaching/hero-presenting.jpg"
                alt="Hugo presenting to a group"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute bottom-0 right-0 z-20 h-[240px] w-[210px] rotate-2 cursor-pointer overflow-hidden rounded-[40px] bg-[#ed6606] transition-all duration-300 ease-out hover:z-30 hover:scale-[1.06] hover:rotate-[5deg] lg:h-[332px] lg:w-[281px]"
            >
              <Image
                src="/coaching/hero-portrait.jpg"
                alt="Hugo portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 1:1 COACHING SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-[40px] lg:gap-[80px]">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-6 text-center">
            <div
              className="text-[60px] font-bold uppercase leading-[0.8] tracking-[-0.02em] text-[#0074b3] lg:text-[180px] lg:tracking-[-3.6px]"
              style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}
            >
              1:1 Coaching
            </div>
            <div className="flex flex-col gap-3 text-center text-[#65564a]">
              <p className="text-[24px] font-semibold leading-[1.3] lg:text-[32px]">
                Get year-long personalised guidance
              </p>
              <p className="text-[18px] leading-[1.3]">
                Align your personal growth with your organisation&apos;s goals
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex w-full flex-col gap-6">
            {/* Card 1 — 360° Leadership Assessment */}
            <div className="flex w-full flex-col overflow-hidden rounded-[24px] lg:h-[400px] lg:flex-row">
              <div className="flex flex-col justify-between bg-white p-8 lg:order-1 lg:h-full lg:w-[60%] lg:p-8">
                <span className="font-sacramento text-[64px] leading-[1.2] text-[#0074b3]">1</span>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3] lg:text-[32px]">
                    360° Leadership Assessment
                  </p>
                  <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                    We&apos;ll start with a robust evaluation of your leadership style using the Leadership Circle framework. This will uncover your strengths, identify growth areas, and set the foundation for your journey.
                  </p>
                </div>
              </div>
              <div className="relative order-first aspect-[3/2] w-full lg:order-2 lg:aspect-auto lg:h-auto lg:w-auto lg:flex-1">
                <Image src="/coaching/tools.jpg" alt="360° Leadership Assessment" fill className="object-cover" />
              </div>
            </div>

            {/* Card 2 — Goal Setting & Debrief */}
            <div className="flex w-full flex-col overflow-hidden rounded-[24px] lg:h-[400px] lg:flex-row">
              <div className="relative order-first aspect-[3/2] w-full lg:order-1 lg:aspect-auto lg:h-auto lg:w-auto lg:flex-1">
                <Image src="/coaching/goal.jpg" alt="Goal Setting & Debrief" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-between bg-white p-8 lg:order-2 lg:h-full lg:w-[60%] lg:p-8">
                <span className="font-sacramento text-[64px] leading-[1.2] text-[#0074b3]">2</span>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3] lg:text-[32px]">
                    Goal Setting &amp; Debrief
                  </p>
                  <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                    In a half-day session, we&apos;ll unpack the results of your assessment and set 1-3 specific, measurable leadership goals for the year. This step establishes a clear roadmap for your development.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 — Personalized Coaching Sessions */}
            <div className="flex w-full flex-col overflow-hidden rounded-[24px] lg:h-[400px] lg:flex-row">
              <div className="flex flex-col justify-between bg-white p-8 lg:order-1 lg:h-full lg:w-[60%] lg:p-8">
                <span className="font-sacramento text-[64px] leading-[1.2] text-[#0074b3]">3</span>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3] lg:text-[32px]">
                    Personalized Coaching Sessions
                  </p>
                  <p className="text-[20px] font-bold leading-[1.3] text-[#65564a] lg:text-[24px]">
                    7 x 90 minute, 1:1 Sessions
                  </p>
                  <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                    Over the course of the year, you&apos;ll have seven in-depth sessions focused on your unique leadership challenges. Each session will be a deep dive, offering actionable insights and strategies you can apply immediately.
                  </p>
                </div>
              </div>
              <div className="relative order-first aspect-[3/2] w-full lg:order-2 lg:aspect-auto lg:h-auto lg:w-auto lg:flex-1">
                <Image src="/coaching/personalized sessions.jpg" alt="Personalized Coaching Sessions" fill className="object-cover" />
              </div>
            </div>

            {/* Card 4 — Accountability Team */}
            <div className="flex w-full flex-col overflow-hidden rounded-[24px] lg:h-[400px] lg:flex-row">
              <div className="relative order-first aspect-[3/2] w-full lg:order-1 lg:aspect-auto lg:h-auto lg:w-auto lg:flex-1">
                <Image src="/coaching/accountability.jpg" alt="Accountability Team" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-between bg-white p-8 lg:order-2 lg:h-full lg:w-[60%] lg:p-8">
                <span className="font-sacramento text-[64px] leading-[1.2] text-[#0074b3]">4</span>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3] lg:text-[32px]">
                    Accountability Team
                  </p>
                  <p className="text-[20px] font-bold leading-[1.3] text-[#65564a] lg:text-[24px]">
                    Set up your personal counsel
                  </p>
                  <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                    You&apos;ll create a small accountability team from your organization. This team will give you feedback, review progress, and provide external perspectives, ensuring that you stay on track and hold yourself to the highest standard.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 — Unlimited Real-Time Support */}
            <div className="flex w-full flex-col overflow-hidden rounded-[24px] lg:h-[400px] lg:flex-row">
              <div className="flex flex-col justify-between bg-white p-8 lg:order-1 lg:h-full lg:w-[60%] lg:p-8">
                <span className="font-sacramento text-[64px] leading-[1.2] text-[#0074b3]">5</span>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3] lg:text-[32px]">
                    Unlimited Real-Time Support
                  </p>
                  <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                    Outside of your scheduled sessions, you&apos;ll have unlimited access to advice and guidance. Whether it&apos;s a quick question or navigating a major challenge, support is always just a call, WhatsApp, or email away.
                  </p>
                </div>
              </div>
              <div className="relative order-first aspect-[3/2] w-full lg:order-2 lg:aspect-auto lg:h-auto lg:w-auto lg:flex-1">
                <Image src="/coaching/support.jpg" alt="Unlimited Real-Time Support" fill className="object-cover" />
              </div>
            </div>

            {/* Card 6 — Tailored Leadership Tools */}
            <div className="flex w-full flex-col overflow-hidden rounded-[24px] lg:h-[400px] lg:flex-row">
              <div className="relative order-first aspect-[3/2] w-full lg:order-1 lg:aspect-auto lg:h-auto lg:w-auto lg:flex-1">
                <Image src="/coaching/360.jpg" alt="Tailored Leadership Tools" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-between bg-white p-8 lg:order-2 lg:h-full lg:w-[60%] lg:p-8">
                <span className="font-sacramento text-[64px] leading-[1.2] text-[#0074b3]">6</span>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3] lg:text-[32px]">
                    Tailored Leadership Tools
                  </p>
                  <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                    Throughout the journey, you&apos;ll be provided with tailored tools, resources, and feedback specific to your goals, empowering you to lead with confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 7 — Flexible Payment Options */}
            <div className="flex w-full flex-col overflow-hidden rounded-[24px] lg:h-[400px] lg:flex-row">
              <div className="flex flex-col justify-between bg-white p-8 lg:order-1 lg:h-full lg:w-[60%] lg:p-8">
                <span className="font-sacramento text-[64px] leading-[1.2] text-[#0074b3]">7</span>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3] lg:text-[32px]">
                    Flexible payment options
                  </p>
                  <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                    I offer the possibility of converting part of the payment into shares, aligning your success with long-term sustainability. This option ensures a vested interest in both your growth and the organization&apos;s future.
                  </p>
                </div>
              </div>
              <div className="relative order-first aspect-[3/2] w-full lg:order-2 lg:aspect-auto lg:h-auto lg:w-auto lg:flex-1">
                <Image src="/coaching/payments.jpg" alt="Flexible payment options" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM COACHING SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-[40px] lg:gap-[80px]">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-5 py-12 text-center lg:py-16">
            <div
              className="text-[60px] font-bold uppercase leading-[0.8] tracking-[-0.02em] text-[#0074b3] lg:text-[180px] lg:tracking-[-3.6px]"
              style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}
            >
              Team Coaching
            </div>
            <div className="flex max-w-[800px] flex-col items-center gap-5 text-center text-[#65564a]">
              <p className="text-[24px] leading-[1.3] lg:text-[32px]">
                A 12-Month{" "}
                <span className="font-semibold">Leadership-Team Journey</span>
              </p>
              <p className="text-[18px] leading-[1.3]">
                This journey is for leadership teams ready to grow up, not just
                scale up. You&apos;ll work directly with Hugo to build trust,
                sharpen your collective edge, and align behind a vision
                that&apos;s bigger than any one person in the room.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScYNbbrDcMdqHbeu5F_tQOUhspqT1GiXH0fnC88huXqv8MbbQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-[24px] bg-[#f6872b] px-6 py-3 text-[18px] font-bold leading-[1.3] text-white transition-opacity hover:opacity-90 lg:max-w-[328px]"
              >
                Sign up as a team
              </a>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex w-full flex-col gap-8">
            {/* Row 1 — 2 cards */}
            <div className="flex flex-col gap-6 lg:flex-row">
              {/* Card 1 — Discovery & Fit Session */}
              <div className="flex flex-1 flex-col gap-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[40px] lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/coaching/Frame 94.jpg"
                    alt="Discovery & Fit Session"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[28px] font-bold leading-[1.1]">
                    <p className="text-[#0074b3]">Discovery &amp;</p>
                    <p className="uppercase text-white" style={{ fontVariationSettings: "'opsz' 36, 'wdth' 87.5" }}>Fit Session</p>
                  </div>
                </div>
                <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                  We meet the whole leadership team, surface current challenges,
                  and agree on success criteria. You receive a short written
                  debrief so everyone starts on the same page.
                </p>
              </div>

              {/* Card 2 — Road-Map Design */}
              <div className="flex flex-1 flex-col gap-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[40px] lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/coaching/Frame 94-1.jpg"
                    alt="Road-Map Design"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[28px] font-bold leading-[1.1]">
                    <p className="text-[#0074b3]">Road-Map</p>
                    <p className="text-[#001924] uppercase">Design</p>
                  </div>
                </div>
                <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                  Using your input, we build a bespoke sequence of four
                  workshops—each with a clear objective, success metric, and
                  business case. No cookie-cutter agendas.
                </p>
              </div>
            </div>

            {/* Row 2 — 3 cards */}
            <div className="flex flex-col gap-6 lg:flex-row">
              {/* Card 3 — Pre-Workshop Sprints */}
              <div className="flex flex-1 flex-col gap-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[40px] lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/coaching/Frame 94-2.jpg"
                    alt="Pre-Workshop Sprints"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[28px] font-bold leading-[1.1]">
                    <p className="text-[#0074b3]">Pre-Workshop</p>
                    <p className="text-[#012c3f] uppercase">Sprints</p>
                  </div>
                </div>
                <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                  Two weeks before every workshop we hold a 30-minute alignment
                  call, review live data, and tweak the agenda. Prep keeps each
                  day laser-focused on what matters now.
                </p>
              </div>

              {/* Card 4 — Four Full-Day Immersive Workshops */}
              <div className="flex flex-1 flex-col gap-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[40px] lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/coaching/Frame 94-3.jpg"
                    alt="Four Full-Day Immersive Workshops"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[28px] font-bold leading-[1.1]">
                    <p className="text-[#79cbff]">Four Full-Day</p>
                    <p className="uppercase text-white">Immersive</p>
                    <p className="uppercase text-white">Workshops</p>
                  </div>
                </div>
                <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                  The workshops build a strong First-Team mindset, align vision
                  and strategy, reinforce values-driven culture, and clarify
                  roles and strengths for better teamwork.
                </p>
              </div>

              {/* Card 5 — Leadership Circle™ Benchmarks */}
              <div className="flex flex-1 flex-col gap-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[40px] lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/coaching/Frame 94-4.jpg"
                    alt="Leadership Circle™ Benchmarks"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[28px] font-bold leading-[1.1]">
                    <p className="text-[#0074b3]">Leadership Circle™</p>
                    <p className="uppercase text-white">Benchmarks</p>
                  </div>
                </div>
                <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                  Each leader, and the team as a whole completes the TLC Profile.
                  Results are compared with 200,000+ global leaders, giving
                  hard-number clarity on where to invest next.
                </p>
              </div>
            </div>

            {/* Row 3 — 2 cards */}
            <div className="flex flex-col gap-6 lg:flex-row">
              {/* Card 6 — Integration & Accountability Loops */}
              <div className="flex flex-1 flex-col gap-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[40px] lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/coaching/Frame 94-6.jpg"
                    alt="Integration & Accountability Loops"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[28px] font-bold leading-[1.1]">
                    <p className="text-[#0074b3]">Integration &amp;</p>
                    <p className="text-[#001924] uppercase">Accountability</p>
                    <p className="text-[#001924] uppercase">Loops</p>
                  </div>
                </div>
                <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                  After every workshop you receive a photo-protocol of key
                  flip-charts plus a micro-video recap from Hugo. Pulse surveys
                  track behavioural change; peer-coaching triads keep the heat on
                  between sessions.
                </p>
              </div>

              {/* Card 7 — Wrap-Up & Forward Plan */}
              <div className="flex flex-1 flex-col gap-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[40px] lg:aspect-auto lg:h-[300px]">
                  <Image
                    src="/coaching/Frame 94-5.jpg"
                    alt="Wrap-Up & Forward Plan"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[28px] font-bold leading-[1.1]">
                    <p className="text-[#0074b3]">Wrap-Up &amp;</p>
                    <p className="text-[#012c3f] uppercase">Forward Plan</p>
                  </div>
                </div>
                <p className="text-[16px] leading-[1.3] text-[#65564a] lg:text-[18px]">
                  A final session consolidates gains, documents lessons learned,
                  and builds a forward plan so the team continues to grow long
                  after the programme ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE RESULT SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px]">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 lg:gap-[80px]">
          <div className="h-[4px] w-full bg-[#014664]" />
          <div className="flex flex-col gap-4">
            <p className="text-[24px] leading-[1.3] text-black lg:text-[32px]">
              — The Result:
            </p>
            <p className="text-[36px] leading-[1] text-[#0074b3] lg:text-[72px]">
              A leadership team that{" "}
              <span className="font-semibold uppercase">thinks</span>, {" "}
              <span className="font-semibold uppercase">decides</span>, and{" "}
              <span className="font-semibold uppercase">executes</span> as one
              cohesive unit—freeing the organisation to scale with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER AND PARTNER SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px]">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex w-full flex-col overflow-hidden rounded-[40px] bg-white lg:h-[657px] lg:flex-row">
            {/* Left: Hugo image */}
            <div className="relative aspect-square w-full overflow-hidden lg:aspect-auto lg:h-full lg:w-1/2">
              <Image
                src="/coaching/hugo2.jpg"
                alt="Hugo coaching a team"
                fill
                className="rounded-[40px] object-cover"
              />
            </div>

            {/* Right: White content card */}
            <div className="flex w-full flex-col justify-center gap-10 rounded-[40px] bg-white px-8 py-10 lg:w-1/2 lg:px-20 lg:py-8">
              <div className="flex flex-col gap-4">
                <p className="text-[18px] leading-[1.3] text-[#65564a]">
                  Founder and Partner of
                </p>
                <a href="https://forchiefs.com" target="_blank" rel="noopener noreferrer" className="relative h-[36px] w-[239px] block">
                  <Image
                    src="/coaching/forchiefs.svg"
                    alt="ForChiefs Alliance"
                    fill
                    className="object-contain object-left"
                  />
                </a>
              </div>

              <div className="flex flex-col gap-4 text-[18px] leading-[1.3] text-[#65564a]">
                <p>
                  I founded ForChiefs to help leadership teams clarify
                  purpose, strengthen culture, and navigate change.
                </p>
                <Link href="/about" className="font-bold text-[#65564a] transition-colors hover:text-[#012c3f]">
                  Learn more about ForChiefs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FULL POTENTIAL CTA SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center">
          <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[40px] bg-[#012c3f] px-8 py-16 lg:rounded-[80px] lg:py-24">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
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

            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
              <div className="flex flex-col gap-2">
                <p
                  className="text-[36px] font-bold leading-[1.1] text-white lg:text-[48px]"
                  style={{ fontVariationSettings: "'opsz' 48, 'wdth' 87.5" }}
                >
                  Are you at your<br />
                  <span
                    className="uppercase"
                    style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}
                  >
                    FULL POTENTIAL?
                  </span>
                </p>
                <p className="text-[18px] leading-[1.3] text-white lg:text-[20px]">
                  Get benchmarked on the world wide standard for leadership
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScYNbbrDcMdqHbeu5F_tQOUhspqT1GiXH0fnC88huXqv8MbbQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-[24px] bg-[#001924] px-6 py-3 text-[18px] font-bold leading-[1.3] text-white transition-opacity hover:opacity-90"
              >
                Find out where you stand
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MY STRATEGY SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px]">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 lg:gap-12">
          {/* Section Title */}
          <div
            className="text-[60px] font-bold uppercase leading-[0.8] tracking-[-0.02em] text-[#0074b3] lg:text-[180px] lg:tracking-[-3.6px]"
            style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}
          >
            My Strategy
          </div>

          {/* Content Grid — Left: Sticky Text & CTA, Right: Cards */}
          <div className="grid w-full items-start gap-8 lg:grid-cols-2">
            {/* Left Column: Sticky Text & CTA */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-[128px]">
              <p className="text-[24px] leading-[1.3] text-[#65564a] lg:text-[32px]">
                How to cultivate{" "}
                <span className="font-semibold">
                  High Performing Leadership Teams
                </span>
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScYNbbrDcMdqHbeu5F_tQOUhspqT1GiXH0fnC88huXqv8MbbQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-[24px] bg-[#f6872b] px-6 py-3 text-[18px] font-bold leading-[1.3] text-white transition-opacity hover:opacity-90 lg:max-w-[328px]"
              >
                Create your blueprint
              </a>
            </div>

            {/* Right Column: Strategy Cards */}
            <div className="flex flex-col gap-8">
              {/* Card 1 — Good Companies Enrich Society */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2000px]">
                  <Image
                    src="/coaching/Frame 142.jpg"
                    alt="Good Companies Enrich Society"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 px-4">
                  <p className="text-[28px] font-bold leading-[1.3] text-[#0074b3]">
                    Good Companies Enrich Society
                  </p>
                  <p className="text-[18px] leading-[1.3] text-[#94857a]">
                    Modern champions of industry do more than fill bank accounts;
                    they fill gaps in our world. Working together, we&apos;ll
                    define how your company can not only survive but thrive by
                    meaningfully engaging with the community. I guide businesses
                    to realize their potential for societal impact, ensuring that
                    your operations enhance the world around us.
                  </p>
                </div>
              </div>

              {/* Card 2 — Successful Companies are Vision-Driven */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2000px]">
                  <Image
                    src="/coaching/Frame 142-1.jpg"
                    alt="Successful Companies are Vision-Driven"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 px-4">
                  <p className="text-[28px] font-bold leading-[1.3] text-[#0074b3]">
                    Successful Companies are Vision-Driven
                  </p>
                  <p className="text-[18px] leading-[1.3] text-[#94857a]">
                    Without a vivid, compelling vision, efforts scatter. Remember
                    Kennedy&apos;s moonshot? It unified and directed the energies
                    of an entire nation. I specialize in crystallizing your
                    vision, setting a strategic course that galvanizes your
                    entire team to achieve unprecedented success.
                  </p>
                </div>
              </div>

              {/* Card 3 — Great Companies Cultivate Strong Values */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2000px]">
                  <Image
                    src="/coaching/Frame 142-2.jpg"
                    alt="Great Companies Cultivate Strong Values"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 px-4">
                  <p className="text-[28px] font-bold leading-[1.3] text-[#0074b3]">
                    Great Companies Cultivate Strong Values
                  </p>
                  <p className="text-[18px] leading-[1.3] text-[#94857a]">
                    Core values should be the heartbeat of every company
                    decision. With you, I&apos;ll sculpt values that not only
                    reflect your company&apos;s ethos but are also robust enough
                    to drive every strategy and decision. This alignment ensures
                    your values are more than words—they are the standards by
                    which your company thrives.
                  </p>
                </div>
              </div>

              {/* Card 4 — Effective Leaders Model Desired Behaviors */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2000px]">
                  <Image
                    src="/coaching/Frame 142-3.jpg"
                    alt="Effective Leaders Model Desired Behaviors"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 px-4">
                  <p className="text-[28px] font-bold leading-[1.3] text-[#0074b3]">
                    Effective Leaders Model Desired Behaviors
                  </p>
                  <p className="text-[18px] leading-[1.3] text-[#94857a]">
                    The effectiveness of your leadership team sets the tone for
                    your entire organization. I focus on enhancing the dynamics
                    within your leadership to ensure that their actions inspire
                    and direct. We&apos;ll refine how they lead by example,
                    fostering an environment where teamwork and integrity define
                    the corporate culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW TO UNLOCK YOUR POTENTIAL SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 lg:gap-12">
          {/* Section Title */}
          <div
            className="text-center text-[48px] font-bold uppercase leading-[0.9] tracking-[-1px] text-[#0074b3] lg:text-[180px] lg:tracking-[-1.8px]"
            style={{ fontVariationSettings: "'opsz' 72, 'wdth' 75" }}
          >
            How to unlock your potential
          </div>

          {/* Cards Grid */}
          <div className="flex w-full flex-col gap-4">
            {/* Row 1 — 3 cards */}
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-white p-8 lg:h-[300px] lg:p-10">
                <p className="text-[24px] font-bold leading-[1.1] text-[#0074b3] lg:text-[32px]">
                  Uncover your{" "}
                  <span className="uppercase text-[#001924]">hidden potential</span>
                </p>
                <p className="mt-4 text-[16px] leading-[1.3] text-[#65564a]">
                  A 12-month commitment designed to reshape beliefs, build
                  future-fit habits, and create measurable change.
                </p>
              </div>

              <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-white p-8 lg:h-[300px] lg:p-10">
                <p className="text-[24px] font-bold leading-[1.1] text-[#0074b3] lg:text-[32px]">
                  Choose your{" "}
                  <span className="uppercase text-[#001924]">masks wisely</span>
                </p>
                <p className="mt-4 text-[16px] leading-[1.3] text-[#65564a]">
                  When we work together, I will be your sidekick—available to
                  support, challenge, and guide you in the moments that matter.
                </p>
              </div>

              <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-white p-8 lg:h-[300px] lg:p-10">
                <p className="text-[24px] font-bold leading-[1.1] text-[#0074b3] lg:text-[32px]">
                  Dare to be your{" "}
                  <span className="uppercase text-[#001924]">genuine self</span>
                </p>
                <p className="mt-4 text-[16px] leading-[1.3] text-[#65564a]">
                  Whether one-on-one or with your leadership team, we will
                  co-create to customize to your context.
                </p>
              </div>
            </div>

            {/* Row 2 — 2 cards */}
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-white p-8 lg:h-[240px] lg:p-10">
                <div className="text-[24px] font-bold leading-[1.1] lg:text-[32px]">
                  <p className="uppercase text-[#001924]">Foster growth</p>
                  <p className="text-[#0074b3]">in leadership:</p>
                </div>
                <p className="mt-4 text-[16px] leading-[1.3] text-[#65564a]">
                  Create safe spaces for people to explore their potential and
                  grow.
                </p>
              </div>

              <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-[24px] bg-white p-8 lg:h-[240px] lg:p-10">
                <div className="text-[24px] font-bold leading-[1.1] lg:text-[32px]">
                  <p className="uppercase text-[#001924]">Empower</p>
                  <p className="text-[#0074b3]">others:</p>
                </div>
                <p className="mt-4 text-[16px] leading-[1.3] text-[#65564a]">
                  Help people discover, live out, and share their genius with the
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORK WITH ME SECTION ===== */}
      <section className="relative px-6 pb-[40px] pt-0 lg:pb-[80px] lg:pt-0">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center">
          <div className="relative w-full">
            <h2 className="relative z-10 -mb-[0.45em] text-center text-[#0074b3]">
              WORK with ME
            </h2>

            <div className="w-full overflow-hidden rounded-[40px] bg-white">
              <div className="flex flex-col lg:flex-row">
                <div className="relative aspect-square w-full overflow-hidden lg:aspect-[4/5] lg:w-1/2">
                  <Image
                    src="/coaching/hugo3.jpg"
                    alt="Hugo coaching"
                    fill
                    className="rounded-[40px] object-cover"
                  />
                </div>

                <div className="flex w-full flex-col justify-center gap-6 px-8 py-10 lg:w-1/2 lg:px-16 lg:py-8">
                  <p className="text-[32px] font-bold leading-[1.2] text-[#0074b3]">
                    Ignite Your Leadership Journey Now
                  </p>

                  <p className="text-[18px] leading-[1.3] text-[#65564a]">
                    Step up and stand out. Begin your journey to top-tier
                    leadership now—where will your potential take you?
                  </p>

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
