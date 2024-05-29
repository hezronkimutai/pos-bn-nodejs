import mongoose from 'mongoose';

import { IUserIssue } from '../../types/userIssues'

const userIssueSchema = new mongoose.Schema<IUserIssue>({
    userId: { type: String, required: false },
    issueId: { type: String, required: true },
});


const UserIssue = mongoose.model<IUserIssue>('UserIssue', userIssueSchema);

export default UserIssue;
