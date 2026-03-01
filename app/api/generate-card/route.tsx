import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { PlayerCard } from "@/components/PlayerCard";

export const runtime = "edge";

const fontBoldPromise = fetch(
  new URL("./Outfit-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
const fontRegularPromise = fetch(
  new URL("./Outfit-Regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name") || "Unknown Player";
    const rarity = (searchParams.get("rarity") || "D-TIER").toUpperCase();
    const rating = searchParams.get("rating") || "N/A";
    const rank = searchParams.get("rank") || "N/A";
    const bank = searchParams.get("bank") || "0";
    const yieldValue = searchParams.get("yield") || "0";
    const peakRating = searchParams.get("peak_rating") || "N/A";
    const peakRank = searchParams.get("peak_rank") || "N/A";

    const avatarUrl =
      searchParams.get("avatar_url") ||
      `https://mc-heads.net/head/${name === "Unknown Player" ? "MHF_Steve" : name}/350`;

    const [fontBoldData, fontRegularData] = await Promise.all([
      fontBoldPromise,
      fontRegularPromise,
    ]);

    return new ImageResponse(
      (
        <PlayerCard
          name={name}
          rarity={rarity}
          rating={rating}
          rank={rank}
          bank={bank}
          yieldValue={yieldValue}
          peakRating={peakRating}
          peakRank={peakRank}
          avatarUrl={avatarUrl}
        />
      ),
      {
        width: 500,
        height: 700,
        fonts: [
          {
            name: "Outfit",
            data: fontRegularData,
            style: "normal",
            weight: 400,
          },
          {
            name: "Outfit",
            data: fontBoldData,
            style: "normal",
            weight: 700,
          },
        ],
      },
    );
  } catch (e: any) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
