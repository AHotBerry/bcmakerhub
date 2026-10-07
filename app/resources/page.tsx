'use client';

import { useMemo, useState } from 'react';

const guides = [
  { title: 'EVA Foam Shaping Basics', tags: ['EVA', 'Armor'] },
  { title: 'Wig Styling for Anime Characters', tags: ['Wig', 'Styling'] },
  { title: 'Sewing Basics for Cloaks', tags: ['Sewing', 'Fabric'] },
  { title: 'Prop Finishing and Weathering', tags: ['Props', 'Painting'] },
  { title: 'Starter LEDs for Wearables', tags: ['Electronics', 'LEDs'] }
];

const allTags = ['All', ...Array.from(new Set(guides.flatMap((guide) => guide.tags)))];

export default function ResourcesPage() {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const filteredGuides = useMemo(() => {
    return guides.filter((guide) => {
      const matchesQuery = guide.title.toLowerCase().includes(query.toLowerCase());
      const matchesTag = activeTag === 'All' || guide.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [activeTag, query]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-fuchsia-200">Resource Hub</h1>
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search tutorials"
          className="w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm md:max-w-sm"
        />
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-3 py-1 text-xs transition ${
                activeTag === tag ? 'bg-fuchsia-500 text-white' : 'border border-white/20 text-slate-200 hover:bg-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {filteredGuides.map((guide) => (
          <article key={guide.title} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
            <h2 className="text-lg font-semibold text-slate-100">{guide.title}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {guide.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-fuchsia-500/20 px-2 py-1 text-xs text-fuchsia-200">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
