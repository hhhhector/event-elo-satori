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
  let badgeBg = "bg-neutral-800";
  let badgeText = "text-neutral-300";
  let badgeBorder = "border-neutral-500";
  let auraColor = "transparent";

  if (rarity === "C-TIER") {
    badgeBg = "bg-red-900";
    badgeText = "text-red-300";
    badgeBorder = "border-red-500";
    auraColor = "rgba(220, 38, 38, 0.1)";
  } else if (rarity === "B-TIER") {
    badgeBg = "bg-blue-900";
    badgeText = "text-blue-300";
    badgeBorder = "border-blue-500";
    auraColor = "rgba(37, 99, 235, 0.1)";
  } else if (rarity === "A-TIER") {
    badgeBg = "bg-green-900";
    badgeText = "text-green-300";
    badgeBorder = "border-green-500";
    auraColor = "rgba(22, 163, 74, 0.1)";
  } else if (rarity === "S-TIER") {
    badgeBg = "bg-amber-900";
    badgeText = "text-amber-400";
    badgeBorder = "border-amber-500";
    auraColor = "rgba(245, 158, 11, 0.15)";
  } else if (rarity === "X-TIER") {
    badgeBg = "bg-pink-900";
    badgeText = "text-pink-300";
    badgeBorder = "border-pink-500";
    auraColor = "rgba(233, 30, 99, 0.25)";
  }

  return (
    <div tw="flex flex-col items-center w-full h-full bg-[#0a0a0a] text-white font-['Outfit'] p-3">
      <div
        tw="flex flex-col w-full h-full border-2 border-neutral-700 rounded-2xl p-8 bg-neutral-900 shadow-2xl relative"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #0a0a0a, #202020)",
        }}
      >
        {/* Subtle Top Right Stats */}
        <div tw="flex absolute top-5 right-6 text-neutral-500 text-m font-bold tracking-widest items-center">
          <div tw="flex items-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ marginRight: "6px" }}
            >
              <line x1="3" x2="21" y1="22" y2="22" />
              <line x1="6" x2="6" y1="18" y2="11" />
              <line x1="10" x2="10" y1="18" y2="11" />
              <line x1="14" x2="14" y1="18" y2="11" />
              <line x1="18" x2="18" y1="18" y2="11" />
              <polygon points="12 2 20 7 4 7 12 2" />
            </svg>
            <span>{bank}</span>
          </div>
          <div tw="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ marginRight: "6px" }}
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            <span>{yieldValue}</span>
          </div>
        </div>

        {/* Left-Justified Stats Section */}
        <div tw="flex flex-col w-full items-start justify-start px-2 mt-2">
          <div tw="flex flex-col items-start w-full">
            <h1 tw="text-4xl m-0 p-0 font-bold text-white tracking-wider mb-2">
              {name}
            </h1>
            <div
              tw={`flex items-center justify-center px-3 py-0 rounded-full border-2 text-sm font-bold tracking-widest ${badgeBg} ${badgeText} ${badgeBorder}`}
            >
              {rarity}
            </div>
            <div tw="flex justify-center items-center w-full mt-5 mb-5 relative">
              {auraColor !== "transparent" && (
                <div
                  tw="absolute flex"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    boxShadow: `0 0 200px 200px ${auraColor}`,
                  }}
                />
              )}
              <img
                src={avatarUrl}
                alt={`${name} Avatar`}
                width={350}
                height={350}
              />
            </div>
          </div>

          {/* Stats Two-Column Grid */}
          <div tw="flex w-full justify-between mt-2">
            {/* Left Column - Rating */}
            <div tw="flex flex-col w-[48%] pr-4">
              <span tw="text-sm text-neutral-400 font-bold tracking-widest mb-1 uppercase">
                Rating
              </span>
              <span tw="text-3xl text-white font-bold mb-4">{rating}</span>

              <span tw="text-sm text-neutral-400 font-bold tracking-widest mb-1 uppercase">
                Peak Rating
              </span>
              <span tw="text-2xl text-neutral-300 font-bold">{peakRating}</span>
            </div>

            {/* Right Column - Rank */}
            <div tw="flex flex-col w-[48%] pl-6">
              <span tw="text-sm text-neutral-400 font-bold tracking-widest mb-1 uppercase">
                Rank
              </span>
              <span tw="text-3xl text-white font-bold mb-4">#{rank}</span>

              <span tw="text-sm text-neutral-400 font-bold tracking-widest mb-1 uppercase">
                Peak Rank
              </span>
              <span tw="text-2xl text-neutral-300 font-bold">#{peakRank}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
