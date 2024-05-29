import mongoose from 'mongoose';

import { IProjectPullRequest } from '../../types/projectPullRequests'

const projectPullRequestSchema = new mongoose.Schema<IProjectPullRequest>({
    projectId: { type: String, required: false },
    pullRequestId: { type: String, required: true },
});

const ProjectPullRequest = mongoose.model<IProjectPullRequest>('ProjectPullRequest', projectPullRequestSchema);

export default ProjectPullRequest;
