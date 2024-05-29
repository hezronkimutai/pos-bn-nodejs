import mongoose from 'mongoose';
import { IIssue } from '../../types/issues'


const issueSchema = new mongoose.Schema<IIssue>({
    userId: { type: String, required: false },
    projectId: { type: String, required: false },
    url: { type: String, required: true },
    repository_url: { type: String, required: true },
    labels_url: { type: String, required: true },
    comments_url: { type: String, required: true },
    events_url: { type: String, required: true },
    html_url: { type: String, required: true },
    id: { type: Number, required: true, unique: true },
    node_id: { type: String, required: true },
    number: { type: Number, required: true },
    title: { type: String, required: true },
    user: { type: Object, required: true },
    labels: [Object], // GitHub labels are dynamic
    state: { type: String, required: true },
    locked: { type: Boolean, required: true },
    assignees: [Object], // GitHub assignees are dynamic
    comments: { type: Number, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
    closed_at: { type: Date, required: false },
    author_association: { type: String, required: true },
    body: { type: String, required: false },
    timeline_url: { type: String, required: true },

});

const Issue = mongoose.model<IIssue>('Issue', issueSchema);

export default Issue;
