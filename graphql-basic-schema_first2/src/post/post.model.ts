import { DateTime } from 'luxon';

export class Post {

    id: number;
    title: string;
    content: string;
    authorID: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class Comment {

    id: number;
    text: string;
    postID: string;
    authorID: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}


