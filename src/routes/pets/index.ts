import { FastifyPluginAsync } from "fastify";

const pets: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    "/",
    {
      schema: {
        description: "post some data",
        tags: ["pets"],
        response: {
          200: {
            description: "Successful response",
            type: "array",
            items: {
              type: "object",
              required: ["id", "name", "tag"],
              properties: {
                id: { type: "number" },
                name: { type: "string" },
                tag: { type: "string" },
              },
            },
          },
        },
      },
    },
    (req, reply) => {
      reply.send([
        { id: 1, name: "dog", tag: "animal" },
        { id: 2, name: "cat", tag: "animal" },
      ]);
    }
  );
};

export default pets;
