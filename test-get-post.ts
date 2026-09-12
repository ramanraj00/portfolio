import { getPost, getAllPosts } from './lib/content';
console.log('Testing getPost...');
const post = getPost('how-i-built-a-zero-knowledge-e2ee-web-app');
console.log(post.title);
console.log('Testing getAllPosts...');
getAllPosts().forEach(p => console.log(p.slug));
