"use client";

import { gql } from "@apollo/client";
import { client } from "@/lib/apollo-client";
import { useEffect, useState } from "react";

// Define types for your data
interface Game {
  id: string;
  title: string;
  platform: string;
  description: string
  genre: string
  releaseDate: string
}

interface GetGamesData {
  games: Game[];
}

// GraphQL query to get all games
const GET_GAMES = gql`
  query {
    games {
      id
      title
      platform
      description
      genre
      releaseDate
    }
  }
`;

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState("");
  const [platformFilter, setPlatformFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  // Grab data on first load
  useEffect(() => {
    async function fetchGames() {
      try {
        const { data } = await client.query<GetGamesData>({
          query: GET_GAMES,
        });

        if (data && data.games) {
          setGames(data.games);
        }
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  // FILTERING LOGIC (search + platform)
  const filteredGames = games
    .filter((game) =>
      platformFilter === "All" ? true : game.platform === platformFilter
    )
    .filter((game) =>
      game.title.toLowerCase().includes(search.toLowerCase())
    );

  // Loading state
  if (loading) {
    return (
      <main>
        <h1>Game List</h1>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Game List</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px 0",
          width: "100%",
          maxWidth: "400px",
          display: "block",
        }}
      />

      {/* Platform Dropdown Filter */}
      <select
        value={platformFilter}
        onChange={(e) => setPlatformFilter(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px 0",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <option value="All">All Platforms</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
      </select>

      {/* No matching results */}
      {filteredGames.length === 0 ? (
        <p>No games match your search.</p>
      ) : (
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  }}
>
  {filteredGames.map((game) => (
    <a
      key={game.id}
      href={`/games/${game.id}`}
      style={{
        display: "block",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "white",
        textDecoration: "none",
        color: "black",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 10px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <h3>{game.title}</h3>
<p style={{ color: "gray", marginBottom: "8px" }}>{game.platform}</p>

{game.genre && (
  <p style={{ fontSize: "14px", marginBottom: "4px" }}>
    Genre: {game.genre}
  </p>
)}

{game.releaseDate && (
  <p style={{ fontSize: "14px", marginBottom: "8px" }}>
    Release: {game.releaseDate}
  </p>
)}

{game.description && (
  <p style={{ fontSize: "14px", color: "#555" }}>
    {game.description}
  </p>
)}

    </a>
  ))}
</div>
      )}
    </main>
  );
}
