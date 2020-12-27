import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Octokit } from '@octokit/core';
import { ErrorResponse } from '../helpers/ErrorResponse';

@Injectable()
export class CommitsService {
  octokit = new Octokit();

  async listCommits(): Promise<any> {
    const response = await this.octokit.request(
      'GET /repos/{owner}/{repo}/commits',
      {
        mediaType: { format: 'json' },
        owner: 'robertmedinasb',
        repo: 'commiteable',
      },
    );
    if (response.status !== 200) {
      throw new InternalServerErrorException(
        new ErrorResponse({
          message: 'Something went wrong getting all commits',
          trace: response,
        }),
      );
    }

    return { commits: response.data };
  }

  async getCommit(ref: string): Promise<any> {
    const response = await this.octokit.request(
      'GET /repos/{owner}/{repo}/commits/{ref}',
      {
        owner: 'robertmedinasb',
        repo: 'commiteable',
        ref,
      },
    );
    if (response.status !== 200) {
      throw new InternalServerErrorException(
        new ErrorResponse({
          message: 'Something went wrong getting all commits',
          trace: response,
        }),
      );
    }
    return { commit: response };
  }
}
