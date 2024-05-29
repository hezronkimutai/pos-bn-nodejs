import { Document } from 'mongoose';

export interface IProjectPullRequest extends Document {
    projectId: string;
    pullRequestId: string;
}
