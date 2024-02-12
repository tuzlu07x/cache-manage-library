# Cache Manage Library

This project aims to create a high-performance cache management library. It offers two different cache storage mechanisms: in-memory cache and Redis-based cache.

### Installation

```
npm i cache-manage-library
```

## Features

- In-memory cache: A caching mechanism that runs in the application's memory.
- Redis-based cache: Caching mechanism using Redis server.
- `set`, `get`, `del` functions: Allows operations on key-value pairs.
- Timeout: Allows the cached data to be automatically deleted after a certain period of time.

## Usage

### In-Memory Cache Usage

```
import InMemoryCacheService from './services/InMemoryCacheService';
import CacheManager from './CacheManager';

const cacheService = new InMemoryCacheService();
const cacheManager = new CacheManager(cacheService);

await cacheManager.set('key1', 'value1', 60);
const value = await cacheManager.get('key1');
console.log('Cached value:', value);
await cacheManager.del('key1');

```

### Using Redis Based Cache

```
import RedisCacheService from './services/RedisCacheService';
import CacheManager from './CacheManager';

const cacheService = new RedisCacheService();
const cacheManager = new CacheManager(cacheService);

await cacheManager.set('key1', 'value1', 60);
const value = await cacheManager.get('key1');
console.log('Cached value:', value);
await cacheManager.del('key1');

```
