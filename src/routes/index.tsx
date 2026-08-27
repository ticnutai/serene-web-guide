import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield,
  LayoutDashboard,
  Ban,
  BarChart3,
  GraduationCap,
  Search,
  RotateCw,
  Save,
  Sun,
  Moon,
  Timer,
  HeartPulse,
  Lock,
  Coffee,
  Activity,
  Blocks,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "מגן פוקוס — לוח בקרה" },
      {
        name: "description",
        content: "לוח הבקרה של מגן פוקוס: ניהול חסימת אתרים, זמני שימוש ומעקב יומי — חסימה חכמה ומאוזנת.",
      },
      { property: "og:title", content: "מגן פוקוס — לוח בקרה" },
      { property: "og:description", content: "ניהול חסימת אתרים וזמני שימוש בצורה חכמה ומאוזנת." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { icon: LayoutDashboard, label: "לוח בקרה", active: true },
  { icon: Ban, label: "בלוקים", active: false },
  { icon: BarChart3, label: "סטטיסטיקות", active: false },
  { icon: GraduationCap, label: "המדרכת", active: false },
];

function Index() {
  const [focusOn, setFocusOn] = useState(false);

  return (
    <div dir="rtl" className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 right-0 z-20 flex w-20 flex-col items-center gap-2 rounded-l-[40px] border-l border-white/5 bg-navy-deep py-6 shadow-2xl md:w-72 md:items-stretch md:px-6">
        <div className="mb-10 flex items-center justify-center gap-3 px-2 md:justify-start">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold via-[#F9E498] to-[#B8860B] shadow-gold">
            <Shield className="h-7 w-7 text-navy-deep" strokeWidth={2.4} />
          </div>
          <div className="hidden md:block">
            <p className="font-display text-lg font-bold leading-tight text-primary-foreground">
              מגן פוקוס
            </p>
            <p className="text-xs text-primary-foreground/60">חסימה חכמה</p>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`group flex items-center gap-3 rounded-full px-3 py-3 text-sm font-medium transition-all duration-300 md:px-5 md:py-4 ${
                item.active
                  ? "border border-white/10 bg-white/5 text-primary-foreground shadow-inner"
                  : "text-primary-foreground/60 hover:bg-white/5 hover:text-primary-foreground"
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  item.active
                    ? "bg-white/10 text-gold"
                    : "bg-transparent group-hover:bg-white/10 group-hover:text-gold"
                }`}
              >
                <item.icon className="h-5 w-5 shrink-0" strokeWidth={1.8} />
              </div>
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center md:text-right">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
            </span>
            <p className="hidden text-xs font-semibold text-primary-foreground md:block">
              השירות פעיל
            </p>
          </div>
          <p className="mt-1 hidden text-[11px] text-primary-foreground/50 md:block">
            הגנה מקומית
          </p>
        </div>
      </aside>

      {/* Main */}
      <div className="mr-20 flex min-h-screen flex-1 flex-col md:mr-72">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-navy-soft/20 bg-navy/95 backdrop-blur">
          <div className="flex items-center gap-3 px-5 py-4 md:px-8">
            <h1 className="font-display text-xl font-bold text-primary-foreground md:text-2xl">
              לוח בקרה
            </h1>
            <div className="mr-auto flex items-center gap-2 md:gap-3">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-foreground/50" />
                <input
                  type="search"
                  placeholder="חיפוש חסימה..."
                  className="w-36 rounded-full border border-navy-soft/50 bg-navy-soft/40 py-2 pr-9 pl-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold focus:outline-none md:w-56"
                />
              </div>
              <button className="flex items-center gap-1.5 rounded-full border border-navy-soft/60 px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:border-gold hover:text-gold">
                <RotateCw className="h-4 w-4" />
                <span className="hidden sm:inline">רענן</span>
              </button>
              <button className="flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-2 text-sm font-bold text-navy-deep shadow-gold transition-transform hover:scale-[1.03]">
                <Save className="h-4 w-4" />
                <span className="hidden sm:inline">שמור</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-5 py-7 md:px-8">
          <div className="mx-auto max-w-5xl space-y-6">
            {/* Focus shield */}
            <section>
              <h2 className="mb-3 font-display text-lg font-bold text-foreground">
                בלוקים פעילים
              </h2>
              <div className="card-surface flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                      focusOn ? "bg-gold text-navy-deep shadow-gold" : "bg-secondary text-primary"
                    }`}
                  >
                    <Shield className="h-7 w-7" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">מגן פוקוס</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      החסימה מושהית · מותאם אישית
                    </p>
                    <span
                      className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold ${
                        focusOn ? "bg-gold-soft text-accent-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {focusOn ? "פעיל כעת" : "אין גילה פעילה"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setFocusOn((v) => !v)}
                  aria-pressed={focusOn}
                  className="flex items-center gap-3"
                >
                  <span className="text-sm font-semibold text-muted-foreground">פעיל</span>
                  <span
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      focusOn ? "bg-gold" : "bg-input"
                    }`}
                  >
                    <span
                      className={`absolute h-6 w-6 rounded-full bg-card shadow transition-all ${
                        focusOn ? "right-1" : "right-7"
                      }`}
                    />
                  </span>
                </button>
              </div>
            </section>

            {/* Day summary */}
            <section>
              <h2 className="mb-3 font-display text-lg font-bold text-foreground">סיכום היום</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <StatCard
                  icon={Sun}
                  title="מצב השירות"
                  value="פעיל ותקין"
                  accent={false}
                />
                <StatCard
                  icon={Timer}
                  title="שימוש ממהל היום"
                  value="0 דקות"
                  accent={false}
                />
                <StatCard
                  icon={Moon}
                  title="נסיונות שנחסמו"
                  value="0"
                  accent
                />
              </div>
            </section>

            {/* Pause */}
            <section>
              <div className="flex items-center justify-between rounded-xl border border-gold/30 bg-gold-soft/60 p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <Coffee className="h-6 w-6 text-gold" />
                  <div>
                    <h3 className="font-display font-bold text-foreground">מכסה / הפסקה פעילה</h3>
                    <p className="text-sm text-muted-foreground">החסימה אינה פעילה כעת</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Health check */}
            <section>
              <div className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
                <div className="flex items-start gap-3">
                  <HeartPulse className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">בדיקת בריאות</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      שירות: תקין · DNS: ממתין · תוסף דפדפן: לא מחובר · תהליכים שנחסמו: 0 · חילוץ
                      פירורה: פעיל
                    </p>
                  </div>
                </div>
                <button className="shrink-0 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-navy-soft">
                  בדוק עכשיו
                </button>
              </div>
            </section>

            <p className="pt-2 text-center text-xs text-muted-foreground">
              ● המערכת מוכנה
            </p>
          </div>
        </main>
      </div>

      {/* Floating lock */}
      <button className="fixed bottom-6 left-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy-deep shadow-gold transition-transform hover:scale-105">
        <Lock className="h-6 w-6" strokeWidth={2.4} />
      </button>
    </div>
  );
}

function StatCard({
  icon: Icon,
  title,
  value,
  accent,
}: {
  icon: typeof Sun;
  title: string;
  value: string;
  accent: boolean;
}) {
  return (
    <div className="card-surface group p-5 transition-transform hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
            accent ? "bg-gold-soft text-gold group-hover:scale-110" : "bg-secondary text-primary group-hover:bg-white group-hover:text-navy"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
      </div>
      <p className="mt-3 font-display text-2xl font-extrabold text-foreground">{value}</p>
      <div className={`mt-3 h-1 w-10 rounded-full transition-all group-hover:w-16 ${accent ? "bg-gold" : "bg-navy"}`} />
    </div>
  );
}
