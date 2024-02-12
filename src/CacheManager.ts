import CacheInterface from "./interfaces/CacheInterface";
import RedisCacheService from "./services/RedisCacheService";

class CacheManager {
  private cacheService: CacheInterface;

  constructor(service: CacheInterface) {
    this.cacheService = service;
  }

  async set(key: string, value: string, ttl?: number): Promise<void> {
    await this.cacheService.set(key, value, ttl);
  }

  async get(key: string): Promise<string | null> {
    return await this.cacheService.get(key);
  }

  async del(key: string): Promise<void> {
    await this.cacheService.del(key);
  }
}

export default CacheManager;
