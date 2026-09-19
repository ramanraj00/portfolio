import sys

with open('app/_views/home-page.tsx', 'r') as f:
    content = f.read()

# Add import
if "import { ProfileViews } from '~/components/profile-views'" not in content:
    content = content.replace("import { TimeOnEarth } from '~/components/time-on-earth'", "import { TimeOnEarth } from '~/components/time-on-earth'\nimport { ProfileViews } from '~/components/profile-views'")

target = """            <div className="mt-3 flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <img 
                src="/api/views" 
                alt="Profile Views" 
              />
            </div>"""

replacement = """            <div className="mt-4 mb-3">
              <ProfileViews />
            </div>"""

content = content.replace(target, replacement)

with open('app/_views/home-page.tsx', 'w') as f:
    f.write(content)
