"use client";
import { useState } from "react";
import { jobs } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function CareersPage() {
  const [deptFilter, setDeptFilter] = useState("all");
  const departments = ["all", ...new Set(jobs.map((j) => j.department))];
  const filtered = jobs.filter((j) => j.status === "open" && (deptFilter === "all" || j.department === deptFilter));

  return (
    <>
      <section className="relative bg-surface-dark py-24">
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Join Our Team</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)]">Careers at Ree-Cycle</h1>
          <p className="mt-4 text-lg text-text-inverse/80 max-w-2xl">Be part of Indonesia&apos;s environmental revolution. We&apos;re looking for passionate people to help us reimagine waste.</p>
        </div>
      </section>

      {/* Life at Ree-Cycle */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { title: "Purpose-Driven Work", desc: "Every day, your work directly contributes to a cleaner Indonesia." },
              { title: "Growth & Learning", desc: "Continuous professional development, conferences, and certifications." },
              { title: "Inclusive Culture", desc: "Diverse teams from all backgrounds working together." },
              { title: "Green Benefits", desc: "Eco-commute allowance, green office perks, and sustainability bonuses." },
            ].map((item) => (
              <div key={item.title} className="bg-surface border border-border-subtle rounded-2xl p-6">
                <h3 className="text-base font-semibold text-primary font-[family-name:var(--font-heading)] mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setDeptFilter(dept)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition-colors capitalize ${
                  deptFilter === dept ? "bg-primary text-text-inverse border-primary" : "text-text-secondary border-border-medium hover:bg-surface"
                }`}
              >
                {dept === "all" ? "All Departments" : dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <p className="text-center py-12 text-text-tertiary">No open positions in this department currently.</p>
            ) : (
              filtered.map((job) => (
                <div key={job.id} className="bg-background border border-border-subtle rounded-2xl p-6 hover:shadow-medium hover:border-border-medium transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)]">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-text-secondary">
                        <span>{job.department}</span>
                        <span>&middot;</span>
                        <span>{job.location}</span>
                        <span>&middot;</span>
                        <span className="capitalize">{job.type}</span>
                        <span>&middot;</span>
                        <span>{job.experience}</span>
                      </div>
                      <p className="text-sm text-text-secondary mt-2">{job.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button className="px-5 py-2.5 bg-primary text-text-inverse text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors whitespace-nowrap">Apply Now</button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border-subtle flex flex-wrap gap-2">
                    {job.requirements.slice(0, 3).map((req) => (
                      <span key={req} className="px-2.5 py-1 bg-surface border border-border-subtle rounded text-xs text-text-tertiary">{req}</span>
                    ))}
                  </div>
                  <p className="text-xs text-text-tertiary mt-3">Deadline: {formatDate(job.deadline)}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
