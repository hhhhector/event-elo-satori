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
    badgeBg: "bg-green-900",
    badgeText: "text-green-300",
    badgeBorder: "border-green-500",
    auraColor: "rgba(22, 163, 74, 0.1)",
    glowColor: "rgba(22, 163, 74, 0.5)",
    badgeContent: "TOP 1000",
  },
  B: {
    badgeBg: "bg-blue-900",
    badgeText: "text-blue-300",
    badgeBorder: "border-blue-500",
    auraColor: "rgba(37, 99, 235, 0.1)",
    glowColor: "rgba(37, 99, 235, 0.5)",
    badgeContent: "TOP 500",
  },
  A: {
    badgeBg: "bg-red-900",
    badgeText: "text-red-300",
    badgeBorder: "border-red-500",
    auraColor: "rgba(220, 38, 38, 0.2)",
    glowColor: "rgba(220, 38, 38, 0.5)",
    badgeContent: "TOP 250",
  },
  S: {
    badgeBg: "bg-amber-900",
    badgeText: "text-amber-400",
    badgeBorder: "border-amber-500",
    auraColor: "rgba(245, 158, 11, 0.2)",
    glowColor: "rgba(245, 158, 11, 0.5)",
    badgeContent: "TOP 100",
  },
  X: {
    badgeBg: "bg-pink-900",
    badgeText: "text-pink-300",
    badgeBorder: "border-pink-500",
    auraColor: "rgba(233, 30, 99, 0.3)",
    glowColor: "rgba(233, 30, 99, 0.5)",
    badgeContent: "TOP 10",
  },
};

export const getTierTheme = (rarity: string): TierTheme => {
  return TIER_THEMES[rarity.toUpperCase()] || TIER_THEMES.D;
};
