import { getTierTheme } from "@/lib/colors";

export interface PlayerCardProps {
  name: string;
  rarity: string;
  rating: string | number;
  rank: string | number;
  bank: string | number;
  yieldValue: string | number;
  peakRating: string | number;
  peakRank: string | number;
  avatarUrl: string;
}

export const PlayerCard = ({
  name,
  rarity,
  rating,
  rank,
  bank,
  yieldValue,
  peakRating,
  peakRank,
  avatarUrl,
}: PlayerCardProps) => {
  // 1. Calculate "Visual Weight" of the name (more accurate than length)
  const visualWeight = name.split("").reduce((acc, char) => {
    if (/[il1|'!,.;t]/.test(char)) return acc + 0.55;
    if (/[WMmO0Q#]/.test(char)) return acc + 1.2;
    return acc + 0.9;
  }, 0);

  // 2. Precise font-size scaling
  const baseFontSize = 60;
  const maxWeight = 9.8;
  const calculatedFontSize =
    visualWeight > maxWeight
      ? (baseFontSize * maxWeight) / visualWeight
      : baseFontSize;

  const { badgeBg, badgeText, badgeBorder, auraColor, glowColor, badgeContent } = getTierTheme(rarity);

  return (
    <div
      tw="flex flex-col items-center w-full h-full bg-[#0a0a0a] text-white p-3"
      style={{ fontFamily: "Outfit" }}
    >
      <div
        tw="flex flex-col w-full h-full border-2 border-neutral-700 rounded-2xl p-8 bg-neutral-900 shadow-2xl relative justify-end"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #090909, #161616)",
        }}
      >
        {/* Subtle Top Right Stats */}
        <div tw="flex absolute top-5 right-6 text-neutral-500 text-2xl font-bold items-center">
          <div tw="flex items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ marginRight: "8px" }}
            >
              <line x1="3" x2="21" y1="22" y2="22" />
              <line x1="6" x2="6" y1="18" y2="11" />
              <line x1="10" x2="10" y1="18" y2="11" />
              <line x1="14" x2="14" y1="18" y2="11" />
              <line x1="18" x2="18" y1="18" y2="11" />
              <polygon points="12 2 20 7 4 7 12 2" />
            </svg>
            <span>{Number(bank).toLocaleString()}</span>
          </div>
          <div tw="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ marginRight: "8px" }}
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            <span>{Number(yieldValue).toLocaleString()}</span>
          </div>
        </div>

        {/* Main Content Section - Anchored to Bottom */}
        <div tw="flex flex-col w-full items-start justify-start px-2">
          <div tw="flex flex-col items-start w-full">
            <h1
              style={{
                fontSize: `${calculatedFontSize}px`,
                letterSpacing: "0.05em",
              }}
              tw="m-0 p-0 font-bold text-white mb-2 "
            >
              {name}
            </h1>
            <div
              tw={`flex items-center justify-center px-4 py-0 rounded-full border-2 text-xl font-bold tracking-widest mb-2 ${badgeBg} ${badgeText} ${badgeBorder}`}
            >
              {badgeContent}
            </div>
            <div tw="flex justify-center items-center w-full mt-0 mb-0 relative">
              {auraColor !== "transparent" && (
                <div
                  tw="absolute flex"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    backgroundColor: auraColor,
                    boxShadow: `0 0 200px 200px ${auraColor}`,
                  }}
                />
              )}
              <img
                src={avatarUrl}
                alt={`${name} Avatar`}
                width={280}
                style={{
                  objectFit: "contain",
                  objectPosition: "top",
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 75%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 75%)",
                }}
              />
            </div>
          </div>

          {/* Stats Two-Column Grid */}
          <div tw="flex w-full justify-between mt-[-390px] relative">
            {/* Left Column - Rating */}
            <div tw="flex flex-col w-[48%] pr-4">
              <span
                tw="text-2xl text-neutral-300 font-bold mb-1 uppercase"
                style={{
                  textShadow:
                    glowColor !== "transparent"
                      ? `0 0 50px ${glowColor}`
                      : "none",
                }}
              >
                Rating
              </span>
              <span
                tw="text-6xl text-white font-bold mb-5"
                style={{
                  textShadow:
                    glowColor !== "transparent"
                      ? `0 0 50px ${glowColor}`
                      : "none",
                }}
              >
                {rating}
              </span>

              <span
                tw="text-base text-neutral-300 font-bold mb-1 uppercase"
                style={{
                  textShadow:
                    glowColor !== "transparent"
                      ? `0 0 50px ${glowColor}`
                      : "none",
                }}
              >
                Peak
              </span>
              <span
                tw="text-2xl text-white font-bold"
                style={{
                  textShadow:
                    glowColor !== "transparent"
                      ? `0 0 50px ${glowColor}`
                      : "none",
                }}
              >
                {peakRating}
              </span>
            </div>

            {/* Right Column - Rank */}
            <div tw="flex flex-col w-[48%] pl-6">
              <span
                tw="text-2xl text-neutral-300 font-bold mb-1 uppercase"
                style={{
                  textShadow:
                    glowColor !== "transparent"
                      ? `0 0 50px ${glowColor}`
                      : "none",
                }}
              >
                Rank
              </span>
              <span
                tw="text-6xl text-white font-bold mb-5"
                style={{
                  textShadow:
                    glowColor !== "transparent"
                      ? `0 0 50px ${glowColor}`
                      : "none",
                }}
              >
                #{rank}
              </span>

              <span
                tw="text-base text-neutral-300 font-bold mb-1 uppercase"
                style={{
                  textShadow:
                    glowColor !== "transparent"
                      ? `0 0 50px ${glowColor}`
                      : "none",
                }}
              >
                Peak
              </span>
              <span
                tw="text-2xl text-white font-bold"
                style={{
                  textShadow:
                    glowColor !== "transparent"
                      ? `0 0 50px ${glowColor}`
                      : "none",
                }}
              >
                #{peakRank}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
