import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Experience, Profile, ProfileLink, Project, Skill } from './models.js';
import { ProfileService } from './profile.service.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile, { nullable: true })
  profile() {
    return this.profileService.getProfile();
  }

  @ResolveField(() => [ProfileLink])
  links(@Parent() profile: Profile) {
    return this.profileService.getLinks(profile.id);
  }

  @ResolveField(() => [Skill])
  skills(@Parent() profile: Profile) {
    return this.profileService.getSkills(profile.id);
  }

  @ResolveField(() => [Experience])
  experience(@Parent() profile: Profile) {
    return this.profileService.getExperience(profile.id);
  }

  @ResolveField(() => [Project])
  projects(@Parent() profile: Profile) {
    return this.profileService.getProjects(profile.id);
  }
}
