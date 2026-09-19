import sys

with open('lib/security/headers.ts', 'r') as f:
    content = f.read()

target = "`img-src 'self' data: blob: https://og.zolplay.com${optionalMediaImageSource()}`,"
replacement = "`img-src 'self' data: blob: https://og.zolplay.com https://komarev.com${optionalMediaImageSource()}`,"

if target in content:
    content = content.replace(target, replacement)
    with open('lib/security/headers.ts', 'w') as f:
        f.write(content)
    print("Replaced successfully!")
else:
    print("Target not found!")
