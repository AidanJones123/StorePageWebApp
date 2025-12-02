const { ApolloServer, gql } = require('apollo-server');

// Schema defines the structure of data
const typeDefs = gql`
	type Game {
  id: ID!
  title: String!
  platform: String!
  description: String
  genre: String
  releaseDate: String
}

	type Query {
		games: [Game!]!
		game(id: ID!): Game
	}

	type Mutation {
  addGame(
    title: String!
    platform: String!
    description: String
    genre: String
    releaseDate: String
  ): Game!
}
`;

//sample data
const games = [
  {
    id: "1",
    title: "The Legend of Zelda: Tears of the Kingdom",
    platform: "Nintendo Switch",
    genre: "Adventure",
    releaseDate: "2023",
    description: "An epic adventure across the skies and lands of Hyrule."
  },
  {
    id: "2",
    title: "Super Mario Odyssey",
    platform: "Nintendo Switch",
    genre: "Platformer",
    releaseDate: "2017",
    description: "Mario embarks on a globe-trotting adventure with Cappy."
  },
  {
    id: "3",
    title: "Animal Crossing: New Horizons",
    platform: "Nintendo Switch",
    genre: "Simulation",
    releaseDate: "2020",
    description: "Build your island getaway and befriend charming villagers."
  }
];
// Resolver functions that fetch the data
const resolvers = {
  Query: {
    games: () => games,
    game: (_, args) => {
      return games.find(g => g.id === args.id);
    }
  },

  Mutation: {
  addGame: (_, args) => {
    const newGame = {
      id: String(games.length + 1),
      ...args
    };

    games.push(newGame);
    return newGame;
  }
}

};

// Create the server
const server = new ApolloServer({ typeDefs, resolvers });

// Start it
server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});