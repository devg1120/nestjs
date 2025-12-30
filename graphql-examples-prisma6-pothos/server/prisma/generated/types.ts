/* eslint-disable */
import type { Prisma, users, projects, tasks, comments, tags, task_tags, activity_logs } from "@prisma/generated/client";
export default interface PrismaTypes {
    users: {
        Name: "users";
        Shape: users;
        Include: Prisma.usersInclude;
        Select: Prisma.usersSelect;
        OrderBy: Prisma.usersOrderByWithRelationInput;
        WhereUnique: Prisma.usersWhereUniqueInput;
        Where: Prisma.usersWhereInput;
        Create: Prisma.usersCreateInput;
        Update: Prisma.usersUpdateInput;
        RelationName: "projects" | "tasks" | "comments" | "activity_logs";
        ListRelations: "projects" | "tasks" | "comments" | "activity_logs";
        Relations: {
            projects: {
                Shape: projects[];
                Name: "projects";
                Nullable: false;
            };
            tasks: {
                Shape: tasks[];
                Name: "tasks";
                Nullable: false;
            };
            comments: {
                Shape: comments[];
                Name: "comments";
                Nullable: false;
            };
            activity_logs: {
                Shape: activity_logs[];
                Name: "activity_logs";
                Nullable: false;
            };
        };
    };
    projects: {
        Name: "projects";
        Shape: projects;
        Include: Prisma.projectsInclude;
        Select: Prisma.projectsSelect;
        OrderBy: Prisma.projectsOrderByWithRelationInput;
        WhereUnique: Prisma.projectsWhereUniqueInput;
        Where: Prisma.projectsWhereInput;
        Create: Prisma.projectsCreateInput;
        Update: Prisma.projectsUpdateInput;
        RelationName: "owner" | "tasks" | "comments";
        ListRelations: "tasks" | "comments";
        Relations: {
            owner: {
                Shape: users;
                Name: "users";
                Nullable: false;
            };
            tasks: {
                Shape: tasks[];
                Name: "tasks";
                Nullable: false;
            };
            comments: {
                Shape: comments[];
                Name: "comments";
                Nullable: false;
            };
        };
    };
    tasks: {
        Name: "tasks";
        Shape: tasks;
        Include: Prisma.tasksInclude;
        Select: Prisma.tasksSelect;
        OrderBy: Prisma.tasksOrderByWithRelationInput;
        WhereUnique: Prisma.tasksWhereUniqueInput;
        Where: Prisma.tasksWhereInput;
        Create: Prisma.tasksCreateInput;
        Update: Prisma.tasksUpdateInput;
        RelationName: "project" | "assignee" | "tags" | "comments";
        ListRelations: "tags" | "comments";
        Relations: {
            project: {
                Shape: projects;
                Name: "projects";
                Nullable: false;
            };
            assignee: {
                Shape: users | null;
                Name: "users";
                Nullable: true;
            };
            tags: {
                Shape: task_tags[];
                Name: "task_tags";
                Nullable: false;
            };
            comments: {
                Shape: comments[];
                Name: "comments";
                Nullable: false;
            };
        };
    };
    comments: {
        Name: "comments";
        Shape: comments;
        Include: Prisma.commentsInclude;
        Select: Prisma.commentsSelect;
        OrderBy: Prisma.commentsOrderByWithRelationInput;
        WhereUnique: Prisma.commentsWhereUniqueInput;
        Where: Prisma.commentsWhereInput;
        Create: Prisma.commentsCreateInput;
        Update: Prisma.commentsUpdateInput;
        RelationName: "user" | "task" | "project";
        ListRelations: never;
        Relations: {
            user: {
                Shape: users;
                Name: "users";
                Nullable: false;
            };
            task: {
                Shape: tasks | null;
                Name: "tasks";
                Nullable: true;
            };
            project: {
                Shape: projects | null;
                Name: "projects";
                Nullable: true;
            };
        };
    };
    tags: {
        Name: "tags";
        Shape: tags;
        Include: Prisma.tagsInclude;
        Select: Prisma.tagsSelect;
        OrderBy: Prisma.tagsOrderByWithRelationInput;
        WhereUnique: Prisma.tagsWhereUniqueInput;
        Where: Prisma.tagsWhereInput;
        Create: Prisma.tagsCreateInput;
        Update: Prisma.tagsUpdateInput;
        RelationName: "taskTags";
        ListRelations: "taskTags";
        Relations: {
            taskTags: {
                Shape: task_tags[];
                Name: "task_tags";
                Nullable: false;
            };
        };
    };
    task_tags: {
        Name: "task_tags";
        Shape: task_tags;
        Include: Prisma.task_tagsInclude;
        Select: Prisma.task_tagsSelect;
        OrderBy: Prisma.task_tagsOrderByWithRelationInput;
        WhereUnique: Prisma.task_tagsWhereUniqueInput;
        Where: Prisma.task_tagsWhereInput;
        Create: Prisma.task_tagsCreateInput;
        Update: Prisma.task_tagsUpdateInput;
        RelationName: "task" | "tag";
        ListRelations: never;
        Relations: {
            task: {
                Shape: tasks;
                Name: "tasks";
                Nullable: false;
            };
            tag: {
                Shape: tags;
                Name: "tags";
                Nullable: false;
            };
        };
    };
    activity_logs: {
        Name: "activity_logs";
        Shape: activity_logs;
        Include: Prisma.activity_logsInclude;
        Select: Prisma.activity_logsSelect;
        OrderBy: Prisma.activity_logsOrderByWithRelationInput;
        WhereUnique: Prisma.activity_logsWhereUniqueInput;
        Where: Prisma.activity_logsWhereInput;
        Create: Prisma.activity_logsCreateInput;
        Update: Prisma.activity_logsUpdateInput;
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: users;
                Name: "users";
                Nullable: false;
            };
        };
    };
}