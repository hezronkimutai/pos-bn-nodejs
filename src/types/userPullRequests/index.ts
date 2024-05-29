import { Document } from 'mongoose';

export interface IUserPullRequest extends Document {
    userId: string;
    pullRequestId: string;
}
