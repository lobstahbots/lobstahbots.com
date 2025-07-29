import { get } from "@vercel/edge-config";
import { redirect } from "next/navigation";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ url: string }>;
  },
) {
  const url = (await params).url;
  const redirectUrl = await get(url);
  if (!redirectUrl) {
    return new Response("Not found", { status: 404 });
  }
  return redirect(redirectUrl as string);
}
