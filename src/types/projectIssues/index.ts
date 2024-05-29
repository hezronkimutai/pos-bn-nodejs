import { Document } from 'mongoose';

export interface IProjectIssue extends Document {
    projectId: string;
    IssueId: string;
}
