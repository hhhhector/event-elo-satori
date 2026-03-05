export interface TierTheme {
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  auraColor: string;
  glowColor: string;
  badgeContent: string;
}

export const TIER_THEMES: Record<string, TierTheme> = {
  D: {
    badgeBg: "bg-transparent",
    badgeText: "text-transparent",
    badgeBorder: "border-transparent",
    auraColor: "transparent",
    glowColor: "transparent",
    badgeContent: "HIDDEN",
  },
  C: {
    badgeBg: "bg-blue-900",
    badgeText: "text-blue-300",
    badgeBorder: "border-blue-500",
    auraColor: "rgba(37, 99, 235, 0.05)", // Green
    glowColor: "rgba(0, 0, 0, 1)",
    badgeContent: "TOP 1000",
  },
  B: {
    badgeBg: "bg-[#5E3306]",
    badgeText: "text-[#EEA05E]",
    badgeBorder: "border-[#D48F54]",
    auraColor: "rgba(221, 139, 69, 0.1)",
    glowColor: "rgba(0, 0, 0, 1)",
    badgeContent: "TOP 500",
  },
  A: {
    badgeBg: "bg-slate-900",
    badgeText: "text-slate-300",
    badgeBorder: "border-slate-500",
    auraColor: "rgba(144, 161, 185, 0.2)", // Red
    glowColor: "rgba(0, 0, 0, 1)",
    badgeContent: "TOP 250",
  },
  S: {
    badgeBg: "bg-amber-900",
    badgeText: "text-amber-400",
    badgeBorder: "border-amber-500",
    auraColor: "rgba(245, 158, 11, 0.2)", // Amber
    glowColor: "rgba(0, 0, 0, 1)",
    badgeContent: "TOP 100",
  },
  X: {
    badgeBg: "bg-red-900",
    badgeText: "text-red-300",
    badgeBorder: "border-red-500",
    auraColor: "rgba(251, 44, 54, 0.3)", // Rose/Crimson
    glowColor: "rgba(0, 0, 0, 1)",
    badgeContent: "TOP 10",
  },
};

export const getTierTheme = (rarity: string): TierTheme => {
  return TIER_THEMES[rarity.toUpperCase()] || TIER_THEMES.D;
};
