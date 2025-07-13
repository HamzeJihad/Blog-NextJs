import { PostRepository } from "@/repositories/post/post-repository";
import { PostModel } from "../../models/post/post-model";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILES_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);
export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const fileContent = await readFile(JSON_POSTS_FILES_PATH, "utf-8");
    const data = JSON.parse(fileContent);

    return data.postsas;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }
  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);
    if(!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    return post;
  }
}



