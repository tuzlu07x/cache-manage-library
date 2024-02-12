import CacheInterface from "../interfaces/CacheInterface";

class InMemoryCacheService implements CacheInterface {
  private cache: Map<string, string>;

  constructor() {
    this.cache = new Map<string, string>();
  }

  async set(key: string, value: string, ttl?: number): Promise<void> {
    this.cache.set(key, value);
    if (ttl) {
      setTimeout(() => {
        this.cache.delete(key);
      }, ttl * 1000);
    }
  }

  async get(key: string): Promise<string | null> {
    return this.cache.get(key) || null;
  }

  async del(key: string): Promise<void> {
    this.cache.delete(key);
  }
}

export default InMemoryCacheService;
