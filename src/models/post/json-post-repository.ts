import { PostRepository } from "@/repositories/post/post-repository";
import { PostModel } from "./post-model";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
  private posts: PostModel[];

  constructor(posts: PostModel[]) {
    this.posts = posts;
  }

  async findAll(): Promise<PostModel[]> {
    return this.posts;
  }
} 

