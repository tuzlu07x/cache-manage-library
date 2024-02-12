import CacheInterface from "../interfaces/CacheInterface";
import { RedisModules, createClient, RedisClientType } from "@redis/client";

class RedisCacheService implements CacheInterface {
  private client: RedisClientType<RedisModules>;

  constructor() {
    this.client = createClient();
  }

  async set(key: string, value: string, ttl?: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const args = [key, value];
      if (ttl) args.push("EX", ttl.toString());
      this.client.set(args, (err: any) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async del(key: string): Promise<void> {
    this.client.del(key);
  }
}

export default RedisCacheService;
