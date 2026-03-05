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
    auraColor: "rgba(144, 161, 185, 0.05)", // Red
    glowColor: "transparent",
    badgeContent: "HIDDEN",
  },
  C: {
    badgeBg: "bg-green-900",
    badgeText: "text-green-300",
    badgeBorder: "border-green-500",
    auraColor: "rgba(22, 163, 74, 0.05)",
    glowColor: "rgba(0, 0, 0, 1)",
    badgeContent: "TOP 1000",
  },
  B: {
    badgeBg: "bg-sky-900",
    badgeText: "text-sky-300",
    badgeBorder: "border-sky-500",
    auraColor: "rgba(0, 166, 237, 0.05)", // Green
    glowColor: "rgba(0, 0, 0, 1)",
    badgeContent: "TOP 500",
  },
  A: {
    badgeBg: "bg-purple-900",
    badgeText: "text-purple-300",
    badgeBorder: "border-purple-500",
    auraColor: "rgba(173, 70, 265, 0.1)", // Red
    glowColor: "rgba(0, 0, 0, 1)",
    badgeContent: "TOP 250",
  },
  S: {
    badgeBg: "bg-amber-900",
    badgeText: "text-amber-400",
    badgeBorder: "border-amber-500",
    auraColor: "rgba(245, 158, 11, 0.15)", // Amber
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
