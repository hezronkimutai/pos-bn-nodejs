import mongoose, { Document } from 'mongoose';

import { IPullRequest } from '../../types/pullRequests'
import { Schema } from "mongoose"

// Define the schema for the Label
const LabelSchema: Schema = new Schema({
    id: { type: Number, required: false },
    node_id: { type: String, required: false },
    url: { type: String, required: false },
    name: { type: String, required: false },
    color: { type: String, required: false },
    default: { type: Boolean, required: false },
    description: { type: String, required: false }
});



// Define the schema for the Reviewer
const ReviewerSchema: Schema = new Schema({
    id: { type: Number, required: false },
    name: { type: String, required: false },
    reviewStatus: { type: String, enum: ['pending', 'approved', 'rejected'], required: false }
});

const pullRequestSchema = new mongoose.Schema<IPullRequest>({
    userId: { type: String, required: false },
    projectId: { type: String, required: false },
    url: { type: String, required: false },
    id: { type: Number, required: false, unique: true },
    node_id: { type: String, required: false },
    html_url: { type: String, required: false },
    diff_url: { type: String, required: false },
    patch_url: { type: String, required: false },
    issue_url: { type: String, required: false },
    number: { type: Number, required: false },
    state: { type: String, required: false },
    locked: { type: Boolean, required: false },
    title: { type: String, required: false },
    body: { type: String, required: false },
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: false },
    closed_at: { type: Date, required: false },
    merged_at: { type: Date, required: false },
    merge_commit_sha: { type: String, required: false },
    assignees: [String],
    requestedReviewers: { type: [ReviewerSchema], required: false },
    labels: { type: [LabelSchema], required: false },
    requested_teams: [String],
    draft: { type: Boolean, required: false },
    commits_url: { type: String, required: false },
    review_comments_url: { type: String, required: false },
    review_comment_url: { type: String, required: false },
    comments_url: { type: String, required: false },
    statuses_url: { type: String, required: false },
    author_association: { type: String, required: false },
});

const PullRequest = mongoose.model<IPullRequest>('PullRequest', pullRequestSchema);

export default PullRequest;
