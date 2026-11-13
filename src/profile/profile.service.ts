import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  getProfile() {
    return this.prisma.profile.findFirst({
      orderBy: { id: 'asc' },
    });
  }

  getLinks(profileId: number) {
    return this.prisma.link.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }

  getSkills(profileId: number) {
    return this.prisma.skill.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }

  getExperience(profileId: number) {
    return this.prisma.experience.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }

  getProjects(profileId: number) {
    return this.prisma.project.findMany({
      where: { profileId },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
