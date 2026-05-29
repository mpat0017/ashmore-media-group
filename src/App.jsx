import React from "react";
import {
  BadgeCheck,
  Church,
  SlidersHorizontal,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Speaker,
  Music2,
} from "lucide-react";

const services = [
  {
    icon: <Speaker className="h-8 w-8" />,
    title: "System Design",
    text: "Tailored audio systems designed for performance, clarity, coverage, and long-term reliability.",
  },
  {
    icon: <SlidersHorizontal className="h-8 w-8" />,
    title: "Venue Consulting",
    text: "Acoustics, speaker coverage, stage volume, infrastructure, and upgrade planning for live rooms.",
  },
  {
    icon: <Church className="h-8 w-8" />,
    title: "Church AVL Support",
    text: "Audio, video, livestream, and volunteer-friendly technology support for worship environments.",
  },
  {
    icon: <Music2 className="h-8 w-8" />,
    title: "Live Production",
    text: "Professional production support for bands, venues, private events, corporate events, and concerts.",
  },
];

const projectTypes = [
  "Church Sound Upgrades",
  "Live Music Venues",
  "Portable PA Systems",
  "Band & Event Production",
  "AVL Troubleshooting",
  "Stage Monitoring",
  "Wireless & IEM Systems",
  "Livestream Audio Workflows",
];

const brands = [
  "RCF",
  "Yorkville",
  "Yamaha",
  "Allen & Heath",
  "Behringer WING",
  "Shure",
  "Sennheiser",
  "Dante",
];

function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-7 py-3 text-sm font-black uppercase tracking-[0.18em] transition duration-200";

  const styles =
    variant === "primary"
      ? "border border-orange-600 bg-transparent text-stone-100 hover:bg-orange-600 hover:text-zinc-950"
      : "border border-stone-600 bg-black/30 text-stone-100 hover:border-orange-600 hover:text-orange-500";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function AMGBadge({ small = false }) {
  return (
    <img
      src="/amg-badge.png"
      alt="Ashmore Media Group AMG badge"
      className={
        small
          ? "h-14 w-14 object-contain"
          : "h-56 w-56 object-contain drop-shadow-2xl md:h-80 md:w-80"
      }
    />
  );
}

function Logo({ className = "" }) {
  return (
    <img
      src="/amg-logo.png"
      alt="Ashmore Media Group"
      className={`object-contain ${className}`}
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-stone-100">
      <header className="sticky top-0 z-50 border-b border-stone-800/80 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-4">
            <AMGBadge small />
            <Logo className="h-14 w-auto" />
          </a>

          <nav className="hidden items-center gap-9 text-xs font-black uppercase tracking-[0.18em] text-stone-200 md:flex">
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#projects" className="hover:text-orange-500">Projects</a>
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </nav>

          <div className="hidden md:block">
            <Button href="#contact">Let’s Talk</Button>
          </div>
        </div>
      </header>

      <section
        className="relative overflow-hidden border-b border-stone-800 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[0.95fr_1.05fr] md:py-32">
          <div>
            <div className="mb-6 h-1 w-16 bg-orange-600" />

            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight text-stone-100 md:text-7xl">
              Sound.
              <br />
              Vision.
              <br />
              <span className="text-orange-600">Experience.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-300 md:text-xl">
              Professional audio, production, and consulting for houses of worship,
              venues, artists, and live events.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">
                Let’s Talk <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
              <Button href="#services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <AMGBadge />
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-stone-800 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 py-14 md:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="border-stone-800 px-6 py-10 text-center md:border-r last:md:border-r-0"
            >
              <div className="mb-5 flex justify-center text-orange-600">
                {service.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-[0.12em] text-stone-100">
                {service.title}
              </h3>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-stone-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="border-b border-stone-800 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-5 h-1 w-16 bg-orange-600" />
            <div className="text-xs font-black uppercase tracking-[0.35em] text-orange-600">
              Built for real rooms
            </div>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-stone-100 md:text-5xl">
              Production-minded AVL support
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-stone-400">
              From church sound upgrades to live venue systems, Ashmore Media Group
              focuses on practical solutions that work once the room fills up, the
              band starts, and the clock is running.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border border-stone-800 bg-zinc-950/70 p-5"
              >
                <BadgeCheck className="h-5 w-5 shrink-0 text-orange-600" />
                <span className="text-sm font-bold uppercase tracking-[0.08em] text-stone-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-stone-800 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.35em] text-orange-600">
              Why Ashmore
            </div>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-stone-100 md:text-5xl">
              Field-tested recommendations. No showroom fantasy.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-300">
            <p>
              Ashmore Media Group was created to help organizations make better
              decisions about live audio, AVL technology, and production
              infrastructure.
            </p>
            <p>
              The goal is simple: systems that sound better, operate more reliably,
              and make sense for the people using them every week.
            </p>
            <p>
              We work best with churches, venues, artists, and event spaces that need
              honest guidance, practical system planning, and someone who understands
              what happens after the gear leaves the box.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-800 bg-stone-200 text-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8 text-center text-xs font-black uppercase tracking-[0.28em]">
            Trusted systems, brands, and ecosystems
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <span
                key={brand}
                className="border border-zinc-900/20 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-zinc-800"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-5 h-1 w-16 bg-orange-600" />
            <h2 className="text-4xl font-black uppercase tracking-tight text-stone-100 md:text-6xl">
              Let’s talk about your next project.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-400">
              Need help planning a system, cleaning up a room, upgrading production,
              or figuring out which gear actually fits the job? Reach out and let’s
              talk through it.
            </p>
          </div>

          <div className="border border-orange-700/70 bg-zinc-950 p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-orange-600" />
                <a
                  href="mailto:mike@ashmoremediagroup.com"
                  className="font-bold hover:text-orange-500"
                >
                  mike@ashmoremediagroup.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-orange-600" />
                <a
                  href="tel:8178745153"
                  className="font-bold hover:text-orange-500"
                >
                  (817) 874-5153
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-orange-600" />
                <span className="font-bold">Arlington / DFW, Texas</span>
              </div>

              <div className="pt-4">
                <Button href="mailto:mike@ashmoremediagroup.com?subject=Project%20Inquiry%20-%20Ashmore%20Media%20Group">
                  Email Ashmore Media Group
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-800 bg-zinc-950 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <a href="/" className="flex items-center gap-4">
            <AMGBadge small />
            <Logo className="h-14 w-auto" />
          </a>

          <div className="text-center text-xs uppercase tracking-[0.22em] text-stone-500 md:text-right">
            © {new Date().getFullYear()} Ashmore Media Group.
            <br />
            Sound. Vision. Experience.
          </div>
        </div>
      </footer>
    </div>
  );
}