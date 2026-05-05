"use client";

import React from "react";

export const BlogNewsletter: React.FC = () => {
  return (
    <section className="py-32 bg-white text-slate-950 overflow-hidden relative border-t border-slate-100">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-950 to-transparent" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            Stay updated with <br />
            <span className="text-slate-400 italic font-light">The Journal.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-xl">
            Subscribe to get the latest insights on architecture and design delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 pt-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-slate-50 border border-slate-200 rounded-full px-8 py-4 flex-1 text-slate-950 focus:outline-none focus:border-slate-400 transition-colors"
            />
            <button className="bg-slate-950 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
