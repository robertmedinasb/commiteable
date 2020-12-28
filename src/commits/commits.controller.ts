import { Controller, Get, Param, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  async listCommits(
    @Query('repo') repo: string,
    @Query('owner') owner: string,
  ): Promise<any> {
    return await this.commitsService.listCommits({ repo, owner });
  }

  @Get(':ref')
  async getCommit(
    @Param('ref') ref: string,
    @Query('repo') repo: string,
    @Query('owner') owner: string,
  ): Promise<any> {
    return await this.commitsService.getCommit(ref, { repo, owner });
  }
}
