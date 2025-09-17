import { revalidatePath, revalidateTag } from "next/cache";
import { createHmac, timingSafeEqual } from "node:crypto";
import { PostEventData } from "./types";

export function verifySignature(
  secret: string,
  signatureHeader: string,
  bodyText: string
) {
  // Strip possible "sha256=" prefix
  const expectedHex = signatureHeader.replace(/^sha256=/, "");

  const computedHex = createHmac("sha256", secret)
    .update(bodyText)
    .digest("hex");

  // Convert to Uint8Array for constant-time compare
  const expected = new Uint8Array(Buffer.from(expectedHex, "hex"));
  const computed = new Uint8Array(Buffer.from(computedHex, "hex"));

  // lengths must match for timingSafeEqual
  if (expected.length !== computed.length) return false;

  return timingSafeEqual(expected, computed);
}

export async function handleWebhookEvent(payload: PostEventData) {
  const event = payload.event;
  const eventData = payload.data;

  if (event.startsWith("post")) {
    revalidatePath("/blog");
    revalidatePath(`/blog/${eventData.slug}`);
    revalidateTag("posts");

    return Response.json({
      revalidated: true,
      now: Date.now(),
      message: "Event handled",
    });
  } else {
    return Response.json({
      revalidated: false,
      now: Date.now(),
      message: "Event ignored",
    });
  }
}
