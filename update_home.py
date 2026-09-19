import sys

with open('app/_views/home-page.tsx', 'r') as f:
    content = f.read()

target = """              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2.75rem] leading-tight">
                hi, Raman here
              </h1>
              <PixelCluster variant={2} className="shrink-0 scale-125 origin-left" />
            </div>"""

replacement = """              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2.75rem] leading-tight">
                hi, Raman here
              </h1>
              <PixelCluster variant={2} className="shrink-0 scale-125 origin-left" />
            </div>
            
            <div className="mt-3 flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <img 
                src="https://komarev.com/ghpvc/?username=ramanraj00.portfolio&style=flat-square&color=252525&label=PROFILE+VIEWS" 
                alt="Profile Views" 
              />
            </div>"""

if target in content:
    content = content.replace(target, replacement)
    with open('app/_views/home-page.tsx', 'w') as f:
        f.write(content)
    print("Replaced successfully!")
else:
    print("Target not found!")

