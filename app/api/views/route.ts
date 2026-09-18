import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch("https://komarev.com/ghpvc/?username=ramanraj00-portfolio", {
      headers: { "User-Agent": "Mozilla/5.0" },
      cache: 'no-store'
    });
    
    if (!res.ok) {
      return NextResponse.json({ views: 0 }, { status: 200 });
    }
    
    const svg = await res.text();
    // The SVG contains text tags. The last two <text> tags contain the count.
    // e.g. <text ...>123</text>
    
    // We can use a regex to find the last <text> tag content that is a number
    const matches = [...svg.matchAll(/<text[^>]*>([0-9\., ]+[kM]?)<\/text>/g)];
    
    let count = "0";
    if (matches && matches.length > 0) {
      // The last match usually contains the count (since the first matches are the label)
      count = matches[matches.length - 1][1];
    }
    
    return NextResponse.json({ views: count }, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    return NextResponse.json({ views: 0 }, { status: 200 });
  }
}
