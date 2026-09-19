import sys
import glob
import os
import subprocess
import urllib.parse

photo_dir = "public/photos"
# get all jpeg/jpg/png files
files = []
for ext in ["*.jpeg", "*.jpg", "*.png", "*.webp"]:
    files.extend(glob.glob(os.path.join(photo_dir, ext)))

# Sort alphabetically
files.sort()

photos_data = []
for fname in files:
    name = os.path.basename(fname)
    # URL encode the filename because it has spaces (e.g., 'WhatsApp Image...')
    url_encoded_name = urllib.parse.quote(name)
    
    # read dimensions using sips
    width = 1200
    height = 800
    try:
        out = subprocess.check_output(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', fname]).decode('utf-8')
        for line in out.splitlines():
            if 'pixelWidth:' in line:
                width = int(line.split(':')[1].strip())
            elif 'pixelHeight:' in line:
                height = int(line.split(':')[1].strip())
    except:
        pass
    
    photos_data.append({
        'name': url_encoded_name,
        'width': width,
        'height': height
    })

ts_code = """import type { PublicPhotoSelection } from './repository'

export function devPhotoSelectionFixture(): PublicPhotoSelection | null {
  return {
    revision: 'dev-fixture-v3',
    publishedAt: new Date(),
    count: """ + str(len(photos_data)) + """,
    items: [
"""

for i, p in enumerate(photos_data):
    ts_code += f"""      {{
        id: 'dev-photo-{i}',
        width: {p['width']},
        height: {p['height']},
        altText: {{ zhHans: 'Photo {i+1}', en: 'Photo {i+1}' }},
        renditions: [
          {{
            profileWidth: 1080,
            src: '/photos/{p['name']}',
            width: {p['width']},
            height: {p['height']},
          }}
        ],
        focalPoint: {{ x: 0.5, y: 0.5 }},
        capturedAt: new Date(Date.now() - {i} * 86400000),
        camera: {{
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }}
      }},
"""

ts_code += """    ],
  }
}
"""

with open('lib/media/photo-selection/dev-fixtures.ts', 'w') as f:
    f.write(ts_code)

print("Updated dev-fixtures.ts with", len(photos_data), "photos")
