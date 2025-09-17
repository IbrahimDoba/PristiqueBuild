import { handleWebhookEvent, verifySignature } from "@/lib/marble/webhook";

export async function POST(request: Request) {
  const signature = request.headers.get("x-marble-signature");
  const secret = process.env.MARBLE_WEBHOOK_SECRET;

  if (!secret || !signature) {
    return new Response("Secret not found", { status: 400 });
  }

  const bodyText = await request.text();

  if (!verifySignature(signature, secret, bodyText)) {
    return Response.json({ error: "Invalid signature" }, { status: 400 });
  }
  
  const payload = JSON.parse(bodyText);

  if (!payload.event || !payload.data) {
    return Response.json(
      { error: "Invalid payload structure" },
      { status: 400 }
    );
  }

  try {
    return await handleWebhookEvent(payload);
  } catch (error) {
    console.error("Error processing webhook:", error);
    return Response.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}
