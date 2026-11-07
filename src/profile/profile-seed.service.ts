import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { profileData } from './profile.data.js';

@Injectable()
export class ProfileSeedService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    const count = await this.prisma.profile.count();
    if (count > 0) {
      return;
    }

    await this.prisma.profile.create({ data: profileData });
  }
}
