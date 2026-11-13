import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { ProfileSeedService } from './profile-seed.service.js';
import { ProfileService } from './profile.service.js';
import { ProfileResolver } from './profile.resolver.js';

@Module({
  imports: [PrismaModule],
  providers: [ProfileSeedService, ProfileService, ProfileResolver],
})
export class ProfileModule {}
