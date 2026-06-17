"use client";
import { useState } from "react";
import { facilities } from "@/lib/data";
import { getFacilityTypeLabel } from "@/lib/utils";

const facilityTypes = [
  { value: "all", label: "All Types", color: "#1B5E37" },
  { value: "recycling-plant", label: "Recycling Plant", color: "#1B5E37" },
  { value: "landfill", label: "TPA / Landfill", color: "#0D7377" },
  { value: "sorting-center", label: "Sorting Center", color: "#A8C96E" },
  { value: "drop-off", label: "Drop-Off Point", color: "#D4873A" },
];

const provinces = [...new Set(facilities.map((f) => f.province))];

export default function LocationsPage() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [provinceFilter, setProvinceFilter] = useState("all");
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"map" | "list">("list");

  const filtered = facilities.filter((f) => {
    const matchesType = typeFilter === "all" || f.type === typeFilter;
    const matchesProvince = provinceFilter === "all" || f.province === provinceFilter;
    return matchesType && matchesProvince;
  });

  const selected = facilities.find((f) => f.id === selectedFacility);

  return (
    <>
      <section className="relative bg-surface-dark py-16">
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-secondary">Nationwide Coverage</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)]">Facilities & Locations</h1>
          <p className="mt-4 text-lg text-text-inverse/80 max-w-2xl">47 facilities across all 34 Indonesian provinces — recycling plants, engineered landfills, sorting centers, and public drop-off points.</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-background border-b border-border-subtle sticky top-16 sm:top-20 z-30">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {facilityTypes.map((ft) => (
                <button
                  key={ft.value}
                  onClick={() => setTypeFilter(ft.value)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-colors ${
                    typeFilter === ft.value ? "bg-primary text-text-inverse border-primary" : "bg-transparent text-text-secondary border-border-medium hover:bg-surface"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: ft.color }} />
                  {ft.label}
                </button>
              ))}
            </div>
            <div className="flex gap-3 items-center">
              <select
                value={provinceFilter}
                onChange={(e) => setProvinceFilter(e.target.value)}
                className="px-3 py-2 bg-white border border-border-medium rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary"
              >
                <option value="all">All Provinces</option>
                {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
              <div className="flex bg-surface rounded-lg p-0.5">
                <button onClick={() => setViewMode("map")} className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${viewMode === "map" ? "bg-primary text-text-inverse" : "text-text-secondary"}`}>Map</button>
                <button onClick={() => setViewMode("list")} className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${viewMode === "list" ? "bg-primary text-text-inverse" : "text-text-secondary"}`}>List</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {viewMode === "map" ? (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Map Area */}
              <div className="lg:col-span-2">
                <div className="relative h-[500px] lg:h-[600px] bg-surface rounded-2xl border border-border-subtle overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-24 h-24 text-primary/30 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                        <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                      <p className="text-lg font-semibold text-text-secondary">Interactive Google Map</p>
                      <p className="text-sm text-text-tertiary mt-1">Requires Google Maps API key for production</p>
                    </div>
                  </div>
                  {/* Decorative facility pins */}
                  {filtered.map((f, i) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFacility(f.id)}
                      className="absolute w-5 h-5 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform"
                      style={{
                        top: `${10 + (i * 11) % 80}%`,
                        left: `${10 + (i * 13) % 80}%`,
                        backgroundColor: facilityTypes.find(t => t.value === f.type)?.color || "#7A9E85",
                      }}
                      title={f.name}
                    />
                  ))}
                </div>
              </div>
              {/* Sidebar */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {selected && (
                  <div className="bg-surface border-l-4 border-secondary rounded-r-2xl p-5 mb-4">
                    <button onClick={() => setSelectedFacility(null)} className="text-xs text-text-tertiary hover:text-primary mb-2">&times; Close</button>
                    <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)]">{selected.name}</h3>
                    <p className="text-sm text-text-secondary mt-1">{selected.address}</p>
                    <div className="mt-3 space-y-1 text-xs text-text-tertiary">
                      <p>Type: <span className="text-text-secondary font-medium">{getFacilityTypeLabel(selected.type)}</span></p>
                      <p>Status: <span className={`font-semibold ${selected.status === "active" ? "text-success" : "text-warning"}`}>{selected.status}</span></p>
                      <p>Capacity: <span className="text-text-secondary font-medium">{selected.capacity} tons/day</span></p>
                      <p>Hours: <span className="text-text-secondary">{selected.hours}</span></p>
                    </div>
                    <a href={`https://maps.google.com/?q=${selected.lat},${selected.lng}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 px-4 py-2 bg-tertiary text-text-inverse text-xs font-semibold rounded-md hover:bg-tertiary-hover transition-colors">
                      Get Directions
                    </a>
                  </div>
                )}
                {filtered.map((f) => (
                  <button key={f.id} onClick={() => setSelectedFacility(f.id)} className="w-full text-left bg-background border border-border-subtle rounded-xl p-4 hover:border-border-medium hover:shadow-subtle transition-all">
                    <div className="flex items-start gap-3">
                      <span className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: facilityTypes.find(t => t.value === f.type)?.color }} />
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{f.name}</p>
                        <p className="text-xs text-text-tertiary mt-0.5">{f.city}, {f.province}</p>
                        <span className={`inline-block mt-1.5 px-2 py-0.5 text-[10px] font-bold rounded ${f.status === "active" ? "bg-[#D4EDDA] text-[#1B5E37]" : "bg-[#EDF3E6] text-[#3D5C45]"}`}>{f.status}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((f) => (
                <div key={f.id} className="bg-background border border-border-subtle rounded-2xl p-5 hover:shadow-medium hover:border-border-medium transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: facilityTypes.find(t => t.value === f.type)?.color }} />
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">{f.name}</h3>
                      <p className="text-xs text-text-tertiary">{getFacilityTypeLabel(f.type)}</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary mb-2">{f.address}</p>
                  <p className="text-xs text-text-tertiary">{f.city}, {f.province}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-subtle">
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${f.status === "active" ? "bg-[#D4EDDA] text-[#1B5E37]" : "bg-[#EDF3E6] text-[#3D5C45]"}`}>{f.status}</span>
                    <span className="text-xs text-text-tertiary">{f.capacity} t/day</span>
                  </div>
                  <a href={`https://maps.google.com/?q=${f.lat},${f.lng}`} target="_blank" rel="noopener noreferrer" className="block mt-3 text-center px-3 py-2 bg-surface border border-border-subtle rounded-lg text-xs font-semibold text-primary hover:bg-surface-raised transition-colors">
                    View on Google Maps
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Find Nearest */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-heading)] mb-4">Find a Recycling Drop-Off Near You</h2>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input type="text" placeholder="Enter your city or address" className="flex-1 px-5 py-3.5 bg-white border border-border-medium rounded-lg text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(27,94,55,0.15)]" />
            <select className="px-4 py-3.5 bg-white border border-border-medium rounded-lg text-sm focus:outline-none focus:border-primary">
              <option>5 km</option><option>10 km</option><option>25 km</option>
            </select>
            <button className="px-6 py-3.5 bg-primary text-text-inverse text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors whitespace-nowrap">Search</button>
          </div>
        </div>
      </section>
    </>
  );
}
