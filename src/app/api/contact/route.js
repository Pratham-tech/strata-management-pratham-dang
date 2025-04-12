// app/api/contact/route.js

export async function POST(req) {
    const body = await req.json();
  
    return new Response(JSON.stringify({
      message: "Form submitted!",
      data: body,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  
  export async function GET() {
    return new Response(JSON.stringify({
      message: "GET request to /api/contact",
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  