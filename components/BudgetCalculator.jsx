'use client';

import { useMemo, useState } from 'react';

const categories = [
  'EVA Foam',
  'Wigs',
  'Fabric',
  'Thermoplastics',
  'Electronics / LEDs',
  'Props'
];

export default function BudgetCalculator() {
  const [costs, setCosts] = useState(() =>
    Object.fromEntries(categories.map((category) => [category, 0]))
  );

  const total = useMemo(
    () => Object.values(costs).reduce((sum, value) => sum + Number(value || 0), 0),
    [costs]
  );

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-fuchsia-900/10">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-fuchsia-200">Cosplay Budget Calculator</h2>
        <p className="mt-2 text-sm text-slate-300">Estimate your build budget and compare category weight.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => {
          const amount = Number(costs[category] || 0);
          const ratio = total > 0 ? (amount / total) * 100 : 0;

          return (
            <div key={category} className="space-y-2 rounded-lg bg-slate-800/80 p-4">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor={category} className="font-medium text-slate-200">
                  {category}
                </label>
                <span className="text-slate-300">${amount.toFixed(2)}</span>
              </div>
              <input
                id={category}
                type="number"
                min="0"
                step="0.01"
                value={costs[category]}
                onChange={(event) => {
                  const value = Math.max(0, Number(event.target.value || 0));
                  setCosts((prev) => ({ ...prev, [category]: value }));
                }}
                className="w-full rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-fuchsia-400 transition focus:ring-2"
              />
              <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                <div className="h-full rounded-full bg-fuchsia-400 transition-all" style={{ width: `${ratio}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-lg bg-fuchsia-500/10 p-4 text-right">
        <p className="text-sm text-fuchsia-100">Estimated Total</p>
        <p className="text-3xl font-bold text-fuchsia-300">${total.toFixed(2)}</p>
      </div>
    </section>
  );
}
