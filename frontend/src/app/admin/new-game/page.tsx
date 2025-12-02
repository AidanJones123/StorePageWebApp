"use client";

import { gql } from "@apollo/client";
import { client } from "@/lib/apollo-client";
import { useState } from "react";
import Link from "next/link";

const ADD_GAME = gql`
  mutation AddGame(
    $title: String!
    $platform: String!
    $description: String
    $genre: String
    $releaseDate: String
  ) {
    addGame(
      title: $title
      platform: $platform
      description: $description
      genre: $genre
      releaseDate: $releaseDate
    ) {
      id
      title
    }
  }
`;

// Define the type for the mutation response
interface AddGameResponse {
  addGame: {
    id: string;
    title: string;
  };
}

export default function NewGamePage() {
  const [form, setForm] = useState({
    title: "",
    platform: "",
    description: "",
    genre: "",
    releaseDate: ""
  });

  const [message, setMessage] = useState("");

  function updateField(field: string, value: string) {
    setForm({ ...form, [field]: value });
  }

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();

    try {
      // Add the type parameter to the mutate call
      const { data } = await client.mutate<AddGameResponse>({
        mutation: ADD_GAME,
        variables: form
      });

      if (data) {
        setMessage(`Game added: ${data.addGame.title}`);
        setForm({
          title: "",
          platform: "",
          description: "",
          genre: "",
          releaseDate: ""
        });
      }
    } catch (err) {
      console.error(err);
      setMessage("Error adding game");
    }
  }

  return (
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Add New Game</h1>

      {message && (
        <p style={{ padding: "10px", background: "#e0ffe0", borderRadius: "6px" }}>
          {message}
        </p>
      )}

      <form onSubmit={submitForm} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={e => updateField("title", e.target.value)}
          required
          style={{ padding: "10px" }}
        />

        <input
          type="text"
          placeholder="Platform"
          value={form.platform}
          onChange={e => updateField("platform", e.target.value)}
          required
          style={{ padding: "10px" }}
        />

        <input
          type="text"
          placeholder="Genre"
          value={form.genre}
          onChange={e => updateField("genre", e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          type="text"
          placeholder="Release Date"
          value={form.releaseDate}
          onChange={e => updateField("releaseDate", e.target.value)}
          style={{ padding: "10px" }}
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={e => updateField("description", e.target.value)}
          rows={4}
          style={{ padding: "10px" }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#8403fc",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Add Game
        </button>
      </form>

      <Link href="/games" style={{ marginTop: "20px", display: "inline-block" }}>
        ← Back to Game List
      </Link>
    </main>
  );
}