import { Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  async listCommits(): Promise<any> {
    return await this.commitsService.listCommits();
  }

  @Get(':ref')
  async getCommit(@Param('ref') ref: string): Promise<any> {
    return await this.commitsService.getCommit(ref);
  }
}
