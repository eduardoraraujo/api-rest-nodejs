import { FastifyReply, FastifyRequest } from "fastify";
import { randomUUID } from "node:crypto";

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { sessionId } = request.cookies;

  if (!sessionId) {
    return reply.status(401).send({
      error: "Unauthorized",
    });
  }
}
