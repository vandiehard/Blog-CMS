"use client";
import { useState } from "react";
import { blogPosts, facilities, jobs, events, csrPrograms } from "@/lib/data";

type ContentType = "posts" | "facilities" | "jobs" | "events" | "programs";

const sidebarItems: { key: ContentType; label: string; count: number }[] = [
  { key: "posts", label: "Blog Posts", count: blogPosts.length },
  { key: "facilities", label: "Facilities", count: facilities.length },
  { key: "jobs", label: "Job Listings", count: jobs.length },
  { key: "events", label: "Events", count: events.length },
  { key: "programs", label: "CSR Programs", count: csrPrograms.length },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<ContentType>("posts");
  const [showEditor, setShowEditor] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return (
          <div className="space-y-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between bg-white border border-border-subtle rounded-xl p-4 hover:shadow-subtle transition-shadow">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary truncate">{post.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-xs text-text-tertiary">
                    <span>{post.author.name}</span>
                    <span>{post.publishedAt}</span>
                    <span className="capitalize">{post.status}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${post.featured ? "bg-[#D4EDDA] text-[#1B5E37]" : "bg-[#EDF3E6] text-[#3D5C45]"}`}>{post.featured ? "Featured" : "Standard"}</span>
                  <button className="px-3 py-1.5 text-xs font-semibold text-primary border border-border-medium rounded-md hover:bg-surface transition-colors">Edit</button>
                  <button className="px-3 py-1.5 text-xs font-semibold text-error border border-error/30 rounded-md hover:bg-error/5 transition-colors">Delete</button>
                </div>
              </div>
            ))}
          </div>
        );
      case "facilities":
        return (
          <div className="space-y-3">
            {facilities.map((f) => (
              <div key={f.id} className="flex items-center justify-between bg-white border border-border-subtle rounded-xl p-4">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{f.name}</h3>
                  <p className="text-xs text-text-tertiary mt-0.5">{f.city}, {f.province} &middot; {f.type}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${f.status === "active" ? "bg-[#D4EDDA] text-[#1B5E37]" : "bg-[#EDF3E6] text-[#3D5C45]"}`}>{f.status}</span>
                  <button className="px-3 py-1.5 text-xs font-semibold text-primary border border-border-medium rounded-md hover:bg-surface">Edit</button>
                </div>
              </div>
            ))}
          </div>
        );
      case "jobs":
        return (
          <div className="space-y-3">
            {jobs.map((j) => (
              <div key={j.id} className="flex items-center justify-between bg-white border border-border-subtle rounded-xl p-4">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{j.title}</h3>
                  <p className="text-xs text-text-tertiary">{j.department} &middot; {j.location} &middot; {j.type}</p>
                </div>
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${j.status === "open" ? "bg-[#D4EDDA] text-[#1B5E37]" : "bg-[#FADBD8] text-[#922B21]"}`}>{j.status}</span>
              </div>
            ))}
          </div>
        );
      case "events":
        return (
          <div className="space-y-3">
            {events.map((e) => (
              <div key={e.id} className="flex items-center justify-between bg-white border border-border-subtle rounded-xl p-4">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{e.name}</h3>
                  <p className="text-xs text-text-tertiary">{e.date} &middot; {e.type}</p>
                </div>
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${e.status === "upcoming" ? "bg-[#D4EDDA] text-[#1B5E37]" : "bg-[#FDEBD0] text-[#884210]"}`}>{e.status}</span>
              </div>
            ))}
          </div>
        );
      case "programs":
        return (
          <div className="space-y-3">
            {csrPrograms.map((p) => (
              <div key={p.id} className="bg-white border border-border-subtle rounded-xl p-4">
                <h3 className="text-sm font-semibold text-text-primary">{p.name}</h3>
                <p className="text-xs text-text-tertiary mt-0.5">{p.type} &middot; {p.beneficiaries.toLocaleString()} beneficiaries</p>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-dark text-text-inverse p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="#A8C96E" />
            <path d="M18 14V28M15 18L18 14L21 18" stroke="#F7FAF4" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-bold font-[family-name:var(--font-heading)]">CMS Admin</span>
        </div>
        <nav className="space-y-1 flex-1">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              onClick={() => { setActiveTab(item.key); setShowEditor(false); }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-colors ${
                activeTab === item.key ? "bg-primary text-text-inverse" : "text-text-inverse/70 hover:bg-text-inverse/10"
              }`}
            >
              <span>{item.label}</span>
              <span className="text-xs opacity-60">{item.count}</span>
            </button>
          ))}
        </nav>
        <div className="pt-4 border-t border-text-inverse/10">
          <a href="/" className="text-xs text-text-inverse/50 hover:text-secondary transition-colors">&larr; Back to Website</a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-text-primary font-[family-name:var(--font-heading)] capitalize">{activeTab === "programs" ? "CSR Programs" : activeTab}</h1>
            <p className="text-sm text-text-tertiary mt-1">Manage your {activeTab} content</p>
          </div>
          <button
            onClick={() => setShowEditor(!showEditor)}
            className="px-5 py-2.5 bg-primary text-text-inverse text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors"
          >
            + Create New
          </button>
        </div>

        {/* Editor Panel */}
        {showEditor && (
          <div className="mb-8 bg-white border border-border-subtle rounded-2xl p-6 shadow-medium">
            <h2 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-heading)] mb-4">Create New {activeTab === "posts" ? "Blog Post" : activeTab.slice(0, -1)}</h2>
            {activeTab === "posts" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1">Title *</label>
                    <input type="text" className="w-full h-[42px] px-3 bg-white border border-border-medium rounded-lg text-sm focus:outline-none focus:border-primary" placeholder="Article title" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1">Slug</label>
                    <input type="text" className="w-full h-[42px] px-3 bg-white border border-border-medium rounded-lg text-sm text-text-tertiary" placeholder="auto-generated-slug" readOnly />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1">Category</label>
                    <select className="w-full h-[42px] px-3 bg-white border border-border-medium rounded-lg text-sm">
                      <option>Technology</option><option>Company News</option><option>Policy</option><option>Community</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1">Author</label>
                    <select className="w-full h-[42px] px-3 bg-white border border-border-medium rounded-lg text-sm">
                      <option>Dr. Andi Prasetyo</option><option>Siti Nurhaliza</option><option>Budi Hartono</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1">Status</label>
                    <select className="w-full h-[42px] px-3 bg-white border border-border-medium rounded-lg text-sm">
                      <option>Draft</option><option>In Review</option><option>Scheduled</option><option>Published</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Excerpt</label>
                  <textarea rows={2} className="w-full px-3 py-2 bg-white border border-border-medium rounded-lg text-sm resize-none focus:outline-none focus:border-primary" placeholder="Brief summary..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Content (Rich Text Editor)</label>
                  <div className="border border-border-medium rounded-lg p-4 min-h-[200px] bg-white">
                    <div className="flex gap-2 mb-3 pb-3 border-b border-border-subtle">
                      {["B", "I", "U", "H1", "H2", "List", "Link", "Image"].map((btn) => (
                        <button key={btn} className="px-2.5 py-1 text-xs font-semibold bg-surface rounded text-text-secondary hover:bg-surface-raised">{btn}</button>
                      ))}
                    </div>
                    <p className="text-sm text-text-tertiary italic">Start writing your content here...</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1">SEO Title</label>
                    <input type="text" className="w-full h-[42px] px-3 bg-white border border-border-medium rounded-lg text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1">Meta Description</label>
                    <input type="text" className="w-full h-[42px] px-3 bg-white border border-border-medium rounded-lg text-sm focus:outline-none focus:border-primary" />
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="px-5 py-2.5 bg-primary text-text-inverse text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">Save Draft</button>
                  <button className="px-5 py-2.5 bg-secondary text-text-primary text-sm font-semibold rounded-lg hover:bg-secondary-hover transition-colors">Publish</button>
                  <button onClick={() => setShowEditor(false)} className="px-5 py-2.5 text-sm font-semibold text-text-tertiary hover:text-text-primary transition-colors">Cancel</button>
                </div>
              </div>
            )}
            {activeTab !== "posts" && (
              <div className="space-y-4">
                <p className="text-sm text-text-tertiary">Content editor for {activeTab} — similar form structure with fields matching the {activeTab} content type schema.</p>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 bg-primary text-text-inverse text-sm font-semibold rounded-lg">Save</button>
                  <button onClick={() => setShowEditor(false)} className="px-5 py-2.5 text-sm text-text-tertiary">Cancel</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Items", value: sidebarItems.find(s => s.key === activeTab)?.count || 0 },
            { label: "Published", value: activeTab === "posts" ? blogPosts.filter(p => p.status === "published").length : "—" },
            { label: "Drafts", value: activeTab === "posts" ? blogPosts.filter(p => p.status === "draft").length : "—" },
            { label: "Featured", value: activeTab === "posts" ? blogPosts.filter(p => p.featured).length : "—" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-border-subtle rounded-xl p-4 text-center">
              <div className="text-2xl font-extrabold text-primary font-[family-name:var(--font-heading)]">{stat.value}</div>
              <div className="text-xs text-text-tertiary mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content List */}
        {renderContent()}
      </div>
    </div>
  );
}
