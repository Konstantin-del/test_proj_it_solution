import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { ProfileSeedService } from './profile-seed.service.js';

@Module({
  imports: [PrismaModule],
  providers: [ProfileSeedService],
})
export class ProfileModule {}
