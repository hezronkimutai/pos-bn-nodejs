import mongoose from 'mongoose';

import { IUserPullRequest } from '../../types/userPullRequests'

const userPullRequestSchema = new mongoose.Schema<IUserPullRequest>({
    userId: { type: String, required: false },
    pullRequestId: { type: String, required: true },
});

const UserPullRequest = mongoose.model<IUserPullRequest>('UserPullRequest', userPullRequestSchema);

export default UserPullRequest;
