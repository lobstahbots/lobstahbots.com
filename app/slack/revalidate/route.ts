import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

function setCorsHeaders(response: NextResponse): NextResponse {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function POST() {
  revalidatePath("/");
  revalidatePath("/history");
  revalidatePath("/awards");
  return setCorsHeaders(
    NextResponse.json(
      { response_type: "in_channel", text: "Revalidation triggered." },
      { status: 200 },
    ),
  );
}

export async function OPTIONS() {
  const response = setCorsHeaders(new NextResponse());
  response.headers.set("Allow", "POST");
  return response;
}
