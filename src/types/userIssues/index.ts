import { Document } from 'mongoose';

export interface IUserIssue extends Document {
    userId: string;
    issueId: string;
}
