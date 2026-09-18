import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  try {
    const res = await fetch("https://komarev.com/ghpvc/?username=ramanraj00-portfolio&style=flat-square&color=252525&label=PROFILE+VIEWS", {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      cache: 'no-store'
    });
    
    if (!res.ok) {
      return new NextResponse("Error", { status: res.status });
    }
    
    const svg = await res.text();
    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    return new NextResponse("Error fetching views", { status: 500 });
  }
}
