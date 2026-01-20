import { DateTime } from 'luxon';

/**
 * ユーザーモデル
 */
export class User {

    id: number;

    name: string;

    email: string;

    password: string;

    createdAt: DateTime;

    updatedAt: DateTime;
}

