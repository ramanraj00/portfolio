import { getPost } from './lib/content'
try {
  console.log(getPost('how-i-built-a-zero-knowledge-e2ee-web-app'))
} catch (e) {
  console.error(e)
}
