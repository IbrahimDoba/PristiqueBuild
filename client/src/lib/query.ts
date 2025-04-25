import { MarblePost, MarblePostList, Post, Tag } from '@/types/post';

const url = process.env.MARBLE_API_URL;
const key = process.env.MARBLE_WORKSPACE_KEY;


export async function getPosts() {
  try {
    const raw = await fetch(`${url}/${key}/posts`);
    const data: MarblePostList = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTags() {
  try {
    const raw = await fetch(`${url}/${key}/tags`);
    const data: Tag[] = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSinglePost(slug: string) {
  try {
    const raw = await fetch(`${url}/${key}/posts/${slug}`);
    const data: MarblePost = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}