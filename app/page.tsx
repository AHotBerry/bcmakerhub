import { CalendarDays, Sparkles, Users } from 'lucide-react';
import BudgetCalculator from '@/components/BudgetCalculator';
import MemberJoin from '@/components/MemberJoin';

const highlights = [
  {
    icon: CalendarDays,
    title: 'Upcoming Workshops',
    description: 'Weekend EVA armor lab and sewing 101 sessions with veteran makers.'
  },
  {
    icon: Users,
    title: 'Community Perks',
    description: 'Tool sharing, material bulk buys, and team convention meetups.'
  },
  {
    icon: Sparkles,
    title: 'Creative Mentorship',
    description: 'Get feedback on props, LEDs, wigs, and finish techniques.'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-700/30 via-purple-700/20 to-sky-700/20 p-10">
        <div className="pointer-events-none absolute -top-24 right-4 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          Build Your Next Cosplay With the BCMaker Hub Community
        </h1>
        <p className="mt-4 max-w-2xl text-slate-100">
          Collaborate with crafters, attend hands-on workshops, and level up props, armor, and wearable tech.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-fuchsia-500 px-5 py-2.5 font-medium text-white hover:bg-fuchsia-400"
          >
            Join Discord
          </a>
          <a href="/resources" className="rounded-md border border-white/30 px-5 py-2.5 font-medium text-white hover:bg-white/10">
            Explore Resources
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
            <Icon className="mb-3 h-5 w-5 text-fuchsia-300" />
            <h2 className="font-semibold text-slate-100">{title}</h2>
            <p className="mt-2 text-sm text-slate-300">{description}</p>
          </article>
        ))}
      </section>

      <BudgetCalculator />
      <MemberJoin />
    </div>
  );
}
