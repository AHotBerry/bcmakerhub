'use client';

import { useState } from 'react';

export default function MemberJoin() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
      <h2 className="text-2xl font-semibold text-fuchsia-200">Become a Member</h2>
      <p className="mt-2 text-sm text-slate-300">Share your interest and we will reach out before the next workshop.</p>

      <form
        className="mt-5 grid gap-4 md:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <input
          required
          placeholder="Name"
          className="rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-sm outline-none ring-fuchsia-400 focus:ring-2"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-sm outline-none ring-fuchsia-400 focus:ring-2"
        />
        <textarea
          placeholder="What are you excited to build?"
          className="md:col-span-2 rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-sm outline-none ring-fuchsia-400 focus:ring-2"
          rows={3}
        />
        <div className="md:col-span-2 flex flex-wrap items-center gap-3">
          <button type="submit" className="rounded-md bg-fuchsia-500 px-4 py-2 text-sm font-medium text-white hover:bg-fuchsia-400">
            Register Interest
          </button>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-fuchsia-300 px-4 py-2 text-sm font-medium text-fuchsia-200 hover:bg-fuchsia-400/10"
          >
            Join Discord Directly
          </a>
          {submitted ? <span className="text-sm text-emerald-300">Thanks! We will contact you soon.</span> : null}
        </div>
      </form>
    </section>
  );
}
