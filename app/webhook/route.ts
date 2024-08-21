import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { TEAM_KEY } from "../../lib/tbaStuff";

function setCorsHeaders(response: NextResponse): NextResponse {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function POST(req: Request) {
  let body;
  try {
    body = await req.json();
  } catch (e) {
    return setCorsHeaders(NextResponse.json({ message: "Invalid JSON" }, { status: 400 }));
  }
  if (body.message_type === "verification") {
    await fetch("https://griffon-crack-piranha.ngrok-free.app", {
      method: "POST",
      body: JSON.stringify(body),
    });
    return setCorsHeaders(NextResponse.json(null, { status: 200 }));
  }
  if (body.message_type === "awards_posted") {
    if (
      body.message_data.awards.find(
        (award: any) =>
          !!award.recipient_list.find(
            (recepient: { team_key: string | null }) => recepient.team_key === TEAM_KEY,
          ),
      )
    ) {
      revalidatePath("/awards");
      return setCorsHeaders(NextResponse.json(null, { status: 200 }));
    }
  }
  return setCorsHeaders(NextResponse.json(null, { status: 200 }));
}

export async function OPTIONS() {
  const response = setCorsHeaders(new NextResponse());
  response.headers.set("Allow", "POST");
  return response;
}
