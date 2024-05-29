import { Document } from 'mongoose';

// Define interfaces for nested objects
interface IUser {
    userId: string,
    projectId: string;
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

interface IPullRequest {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    merged_at: Date | null;
}

interface IReactions {
    url: string;
    total_count: number;
    '+1': number;
    '-1': number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
}

interface ILinks {
    self: { href: string };
    html: { href: string };
    issue: { href: string };
    comments: { href: string };
    review_comments: { href: string };
    review_comment: { href: string };
    commits: { href: string };
    statuses: { href: string };
    reactions: { href: string };
    timeline: { href: string };
}

export interface IIssue extends Document {
    userId: string
    projectId: string,
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    user: IUser;
    labels: any[];
    state: string;
    locked: boolean;
    assignee: null;
    assignees: any[]; // GitHub assignees are dynamic
    milestone: null;
    comments: number;
    created_at: Date;
    updated_at: Date;
    closed_at: Date | null;
    author_association: string;
    active_lock_reason: null;
    body: string | null;
    performed_via_github_app: null;
    pull_request: IPullRequest;
    reactions: IReactions;
    timeline_url: string;
    state_reason: null;
    _links: ILinks;
}