const fs = require('fs');
const path = require('path');

const dir = '/Users/ramanraj/Documents/Portfolio';

function update(file, replacements) {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    for (const [find, replace] of replacements) {
        if (typeof find === 'string') {
            content = content.replaceAll(find, replace);
        } else {
            content = content.replace(find, replace);
        }
    }
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`No changes made to ${file}`);
    }
}

// BATCH 1
update('components/site-footer.tsx', [
    ["href={localePath(locale, '/ama')}", "href={localePath(locale, '/reels')}"]
]);

update('hooks/use-dock-go-shortcuts.ts', [
    ["a: '/ama'", "r: '/reels'"]
]);

update('app/sitemap.ts', [
    ["...pairedEntry('/ama')", "...pairedEntry('/reels')"]
]);

update('app/robots.ts', [
    ["'/ama/manage/'", "'/reels/manage/'"],
    ["'/en/ama/manage/'", "'/en/reels/manage/'"]
]);

update('lib/locale-metadata.ts', [
    ["'/ama'", "'/reels'"]
]);

update('components/reels/booking-confirmation.tsx', [
    ["href={localePath(locale, '/ama')}", "href={localePath(locale, '/reels')}"],
    ["en=\"Back to the AMA page\"", "en=\"Back to the Reels page\""],
    ["zh=\"回到 AMA 页面\"", "zh=\"回到 Reels 页面\""],
    ["href={localePath(locale, '/ama/book')}", "href={localePath(locale, '/reels/book')}"]
]);

update('components/reels/booking-flow.tsx', [
    ["/ama/book/confirmation", "/reels/book/confirmation"],
    ["href={localePath(locale, '/ama')}", "href={localePath(locale, '/reels')}"],
    ["en=\"Back to the AMA page\"", "en=\"Back to the Reels page\""],
    ["zh=\"回到 AMA 页面\"", "zh=\"回到 Reels 页面\""]
]);

update('app/_views/ama-book-page.tsx', [
    ["path: '/ama/book'", "path: '/reels/book'"]
]);

update('app/_views/ama-confirmation-page.tsx', [
    ["path: '/ama/book/confirmation'", "path: '/reels/book/confirmation'"]
]);

update('app/_views/ama-manage-page.tsx', [
    ["path: '/ama/manage'", "path: '/reels/manage'"]
]);

update('lib/ama/booking/service.ts', [
    ["/ama/book/confirmation", "/reels/book/confirmation"],
    ["/ama/book`", "/reels/book`"] // To catch interpolation or strings
]);

update('lib/ama/operations/handlers.ts', [
    ["/ama/manage/", "/reels/manage/"]
]);

// BATCH 2
update('app/global-error.tsx', [
    ["Cali Castle", "Raman Raj"]
]);

update('app/global-not-found.tsx', [
    ["Cali Castle", "Raman Raj"]
]);

update('app/_views/error-page.tsx', [
    ["ERR-500-CALI-SO", "ERR-500-RAMAN"]
]);

update('app/_views/not-found-page.tsx', [
    ["ERR-404-CALI-SO", "ERR-404-RAMAN"]
]);

update('app/llms.txt/route.ts', [
    ["'# Cali Castle and Cali Baby'", "'# Raman Raj'"],
    ["> The personal portfolio site of software engineer, designer, and creator Cali Castle.", "> The personal portfolio site of software engineer Raman Raj."],
    ["'## Cali Castle'", "'## Raman Raj'"],
    ["'Cali 的文章：${post.title}'", "'Raman Raj का लेख：${post.title}'"]
]);

update('lib/non-public-metadata.ts', [
    ["Private owner administration for Cali Castle.", "Private owner administration for Raman Raj."]
]);

update('lib/ama/email/templates.ts', [
    ["return { type: 'paragraph', text: 'Cali' }", "return { type: 'paragraph', text: 'Raman' }"]
]);

update('lib/ama/booking/service.ts', [
    ["'AMA Session with Cali (60 minutes)'", "'Session with Raman Raj (60 minutes)'"],
    ["'Cali AMA Session（60 分钟）'", "'Raman Raj Session（60 मिनट）'"]
]);

update('package.json', [
    ['"name": "cali.so"', '"name": "ramanraj-portfolio"']
]);

// Handle dynamic replacements more carefully for service.ts to ensure we catch all
let serviceFile = fs.readFileSync(path.join(dir, 'lib/ama/booking/service.ts'), 'utf8');
serviceFile = serviceFile.replace(/\/ama\/book\/confirmation/g, '/reels/book/confirmation');
serviceFile = serviceFile.replace(/\/ama\/book/g, '/reels/book');
fs.writeFileSync(path.join(dir, 'lib/ama/booking/service.ts'), serviceFile, 'utf8');

