'use client';

import { useMemo, useState } from 'react';

const categories = ['All', 'Workshops', 'Meetups', 'Conventions'];

const events = [
  { title: 'EVA Foam Armor Lab', category: 'Workshops', date: 'Oct 12', location: 'Maker Studio A' },
  { title: 'Club Build Night', category: 'Meetups', date: 'Oct 19', location: 'Student Union 204' },
  { title: 'Winter CosCon Trip Planning', category: 'Conventions', date: 'Nov 2', location: 'Online / Discord' },
  { title: 'Wig Styling Crash Course', category: 'Workshops', date: 'Nov 9', location: 'Maker Studio B' }
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = useMemo(
    () => (activeCategory === 'All' ? events : events.filter((event) => event.category === activeCategory)),
    [activeCategory]
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-fuchsia-200">Event Calendar</h1>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              activeCategory === category
                ? 'bg-fuchsia-500 text-white'
                : 'border border-white/20 text-slate-200 hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <section className="grid gap-4 md:grid-cols-2">
        {filteredEvents.map((event) => (
          <article key={`${event.title}-${event.date}`} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-fuchsia-300">{event.category}</p>
            <h2 className="mt-1 text-lg font-semibold text-slate-100">{event.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{event.date} · {event.location}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
