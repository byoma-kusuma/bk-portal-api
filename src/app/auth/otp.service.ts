import { CacheKey, CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache as CacheManager } from "cache-manager";
import cryptoRandomString from "crypto-random-string";

Injectable();
export class Otp {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: CacheManager) {}

  private generate() {
    let length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  async create(ttl: number, userId: string) {
    const value = await this.cacheManager.get(userId);
    if (value) {
      await this.cacheManager.del(userId);
    }
    return await this.cacheManager.set(userId, this.generate(), { ttl });
  }

  async verify(opt: string, userId: string) {}
}
