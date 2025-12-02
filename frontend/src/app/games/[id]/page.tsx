"use client";

import { gql } from "@apollo/client";
import { client } from "@/lib/apollo-client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const GET_GAME = gql`
  query GetGame($id: ID!) {
    game(id: $id) {
      id
      title
      platform
      description
      genre
      releaseDate
    }
  }
`;

interface Game {
  id: string;
  title: string;
  platform: string;
  description: string;
  genre: string;
  releaseDate: string;
}

interface GetGameResponse {
  game: Game | null;
}

export default function GamePage() {
  const params = useParams();
  const id = params.id as string;

  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGame() {
      try {
        const { data } = await client.query<GetGameResponse>({
          query: GET_GAME,
          variables: { id }
        });

        if (data && data.game) {
          setGame(data.game);
        }
      } catch (error) {
        console.error("Error fetching game:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, [id]);

  if (loading) {
    return (
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Loading...</h1>
      </main>
    );
  }

  if (!game) {
    return (
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Game not found</h1>
        <Link href="/games" style={{ color: "#e60012", fontWeight: "bold" }}>
          ← Back to all games
        </Link>
      </main>
    );
  }

  return (
  <main
    style={{
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    }}
  >
    <h1 style={{ marginBottom: "10px" }}>{game.title}</h1>

    <p
      style={{
        fontSize: "18px",
        color: "gray",
        marginBottom: "10px",
      }}
    >
      Platform: {game.platform}
    </p>

    {game.genre && (
      <p style={{ fontSize: "16px", marginBottom: "6px" }}>
        Genre: {game.genre}
      </p>
    )}

    {game.releaseDate && (
      <p style={{ fontSize: "16px", marginBottom: "10px" }}>
        Release Date: {game.releaseDate}
      </p>
    )}

    {game.description && (
      <p style={{ fontSize: "15px", lineHeight: 1.5 }}>
        {game.description}
      </p>
    )}

    <Link
      href="/games"
      style={{
        display: "inline-block",
        marginTop: "20px",
        color: "#e60012",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px",
      }}
    >
      ← Back to all games
    </Link>
  </main>
);

}
