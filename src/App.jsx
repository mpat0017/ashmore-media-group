<div className="bg-red-500 text-white p-10 text-4xl">
  TEST
</div>
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Church,
  SlidersHorizontal,
  RadioTower,
  Wrench,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Speaker,
  Headphones,
  Cable,
} from "lucide-react";

const services = [
  {
    icon: <Speaker className="h-7 w-7" />,
    title: "Live Sound Production",
    text: "Professional audio support for bands, venues, churches, private events, and corporate productions.",
  },
  {
    icon: <SlidersHorizontal className="h-7 w-7" />,
    title: "System Design & Consulting",
    text: "Practical recommendations for PA systems, stage monitoring, wireless, DSP, speaker coverage, and room acoustics.",
  },
  {
    icon: <Church className="h-7 w-7" />,
    title: "Church AVL Support",
    text: "Audio, video, livestream, stage, and volunteer-friendly technology solutions for worship environments.",
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: "Install & Integration Planning",
    text: "Planning, vendor coordination, gear selection, and upgrade roadmaps for venues and multi-use spaces.",
  },
  {
    icon: <RadioTower className="h-7 w-7" />,
    title: "Wireless & IEM Systems",
    text: "Frequency-conscious wireless microphone and in-ear monitor planning for reliable live performance.",
  },
  {
    icon: <Cable className="h-7 w-7" />,
    title: "Production Infrastructure",
    text: "Signal flow, stage boxes, Dante/AES50 workflows, racks, cabling, power, and practical field-ready systems.",
  },
];

const projectTypes = [
  "Church Sound Upgrades",
  "Live Music Venues",
  "Portable PA Systems",
  "Band & Event Production",
  "Speaker System Recommendations",
  "AVL Troubleshooting",
  "Stage Monitoring",
  "Livestream Audio Workflows",
];

const brands = [
  "RCF",
  "Yorkville",
  "Yamaha",
  "Allen & Heath",
  "Behringer",
  "Shure",
  "Sennheiser",
  "QSC",
  "Dante",
  "ChamSys",
];

function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-7 py-3 text-base font-bold transition duration-200";

  const styles =
    variant === "primary"
      ? "bg-amber-400 text-zinc-950 hover:bg-amber-300"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 font-black text-zinc-950 shadow-lg shadow-orange-900/30">
              A
            </a>

            <div>
              <div className="text-lg font-bold tracking-wide">
                Ashmore Media Group
              </div>

              <div className="text-xs uppercase tracking-[0.25em] text-amber-400">
                Live Production · AVL · Consulting
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#services" className="hover:text-amber-300">
              Services
            </a>

            <a href="#work" className="hover:text-amber-300">
              Work
            </a>

            <a href="#about" className="hover:text-amber-300">
              About
            </a>

            <a href="#contact" className="hover:text-amber-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
              <BadgeCheck className="h-4 w-4" />
              DFW-based live production and AVL consulting
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Better sound for rooms that matter.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Ashmore Media Group helps churches, venues, artists, and event
              teams build practical, reliable audio and media systems that work
              in the real world, not just on a spec sheet.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button href="#services" variant="secondary">
                View Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="overflow-hidden bg-white/[0.06] shadow-2xl shadow-black/40 backdrop-blur">
              <div className="border-b border-white/10 bg-zinc-900/80 px-6 py-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="space-y-5 p-7">
                <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-5">
                  <div className="text-sm uppercase tracking-[0.2em] text-amber-300">
                    Project Snapshot
                  </div>

                  <div className="mt-3 text-3xl font-black">
                    Church · Venue · Live Event
                  </div>

                  <p className="mt-3 text-zinc-300">
                    Coverage, intelligibility, stage volume, system reliability,
                    and volunteer-friendly workflows.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-zinc-900 p-5">
                    <div className="text-3xl font-black text-amber-300">
                      20+
                    </div>

                    <div className="mt-1 text-sm text-zinc-400">
                      years live experience
                    </div>
                  </div>

                  <div className="rounded-3xl bg-zinc-900 p-5">
                    <div className="text-3xl font-black text-amber-300">
                      DFW
                    </div>

                    <div className="mt-1 text-sm text-zinc-400">
                      North Texas market
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-zinc-900 p-5">
                  <div className="mb-3 flex items-center gap-2 font-semibold">
                    <Headphones className="h-5 w-5 text-amber-300" />
                    Field-tested recommendations
                  </div>

                  <p className="text-sm leading-6 text-zinc-400">
                    From small rooms to high-energy stages, recommendations are
                    shaped by hands-on production experience.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            Services
          </div>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Audio and media support without the fog machine sales pitch.
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Practical planning, smart gear selection, and real-world execution
            for rooms where clarity and reliability matter.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {service.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="border-y border-white/10 bg-white/[0.03]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              Project Types
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Built for the rooms where people actually gather.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Every room has its own personality: reflections, stage volume,
              volunteer workflows, budget realities, and the occasional mystery
              buzz hiding behind a rack panel.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projectTypes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/50 p-4"
              >
                <BadgeCheck className="h-5 w-5 shrink-0 text-amber-300" />

                <span className="font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              About
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Led by working production experience.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              Ashmore Media Group was created to help organizations make better
              decisions about live audio, AVL technology, and production
              infrastructure.
            </p>

            <p>
              We work best with churches, venues, artists, and event spaces that
              need honest guidance, practical system planning, and someone who
              understands what happens after the gear leaves the box.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-10">
          <div className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            Brands & Ecosystems
          </div>

          <div className="flex flex-wrap gap-3">
            {brands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-zinc-200"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-amber-400 text-zinc-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.6),transparent_28%)] opacity-40" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Let’s make the room work better.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-800">
              Need help planning a system, cleaning up a room, upgrading
              production, or figuring out which gear actually fits the job?
              Reach out and let’s talk through it.
            </p>
          </div>

          <Card className="border-zinc-950/10 bg-zinc-950 text-white shadow-2xl">
            <div className="space-y-5 p-7">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-amber-300" />

                <a
                  href="tel:8178745153"
                  className="text-lg font-semibold hover:text-amber-300"
                >
                  (817) 874-5153
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-amber-300" />

                <a
                  href="mailto:info@ashmoremediagroup.com"
                  className="text-lg font-semibold hover:text-amber-300"
                >
                  info@ashmoremediagroup.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-amber-300" />

                <span className="text-lg font-semibold">
                  Arlington / DFW, Texas
                </span>
              </div>

              <a
                href="mailto:info@ashmoremediagroup.com?subject=Project%20Inquiry%20-%20Ashmore%20Media%20Group"
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-amber-400 px-6 py-3 text-center font-bold text-zinc-950 transition hover:bg-amber-300"
              >
                Email Ashmore Media Group
              </a>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-zinc-950 px-6 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Ashmore Media Group. Live Production · AVL
        Consulting · DFW, Texas.
      </footer>
    </div>
  );
}