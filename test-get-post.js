const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { z } = require('zod')

const frontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  publishedAt: z.coerce.date(),
  cover: z.string().startsWith('./').optional(),
  coverWidth: z.number().int().positive().optional(),
  coverHeight: z.number().int().positive().optional(),
  coverCaption: z.string().optional(),
})

const translatedFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
})

function getPost(slug) {
  const POSTS_DIR = path.join(process.cwd(), 'content/blog')
  const raw = fs.readFileSync(path.join(POSTS_DIR, slug, 'index.mdx'), 'utf8')
  const { data, content } = matter(raw)
  const fm = frontmatterSchema.parse(data)
  
  const translatedRaw = fs.readFileSync(path.join(POSTS_DIR, slug, 'index.en.mdx'), 'utf8')
  const { data: translatedData, content: translatedContent } = matter(translatedRaw)
  const translatedFm = translatedFrontmatterSchema.parse(translatedData)

  return { fm, translatedFm }
}

try {
  console.log(getPost('how-i-built-a-zero-knowledge-e2ee-web-app'))
} catch (e) {
  console.error(e)
}
