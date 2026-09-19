async function test() {
  const res = await fetch("https://komarev.com/ghpvc/?username=ramanraj00-portfolio");
  const svg = await res.text();
  const matches = [...svg.matchAll(/<text[^>]*>([0-9\.]+[kM]?)<\/text>/g)];
  console.log(matches.map(m => m[1]));
}
test();
