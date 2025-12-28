
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * @pothos-generator operation {exclude:["query", "find", "create", "update", "delete", "mutation"]}
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model projects
 * @pothos-generator operation {exclude:["query", "find", "create", "update", "delete", "mutation"]}
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model tasks
 * @pothos-generator operation {exclude:["query", "find", "create", "update", "delete", "mutation"]}
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>
/**
 * Model comments
 * @pothos-generator operation {exclude:["query", "find", "create", "update", "delete", "mutation"]}
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model tags
 * @pothos-generator operation {exclude:["query", "find", "create", "update", "delete", "mutation"]}
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model task_tags
 * @pothos-generator operation {exclude:["query", "find", "create", "update", "delete", "mutation"]}
 */
export type task_tags = $Result.DefaultSelection<Prisma.$task_tagsPayload>
/**
 * Model activity_logs
 * @pothos-generator operation {exclude:["query", "find", "create", "update", "delete", "mutation"]}
 */
export type activity_logs = $Result.DefaultSelection<Prisma.$activity_logsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task_tags`: Exposes CRUD operations for the **task_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Task_tags
    * const task_tags = await prisma.task_tags.findMany()
    * ```
    */
  get task_tags(): Prisma.task_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity_logs`: Exposes CRUD operations for the **activity_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activity_logs
    * const activity_logs = await prisma.activity_logs.findMany()
    * ```
    */
  get activity_logs(): Prisma.activity_logsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    projects: 'projects',
    tasks: 'tasks',
    comments: 'comments',
    tags: 'tags',
    task_tags: 'task_tags',
    activity_logs: 'activity_logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "projects" | "tasks" | "comments" | "tags" | "task_tags" | "activity_logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      task_tags: {
        payload: Prisma.$task_tagsPayload<ExtArgs>
        fields: Prisma.task_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.task_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.task_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          findFirst: {
            args: Prisma.task_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.task_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          findMany: {
            args: Prisma.task_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>[]
          }
          create: {
            args: Prisma.task_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          createMany: {
            args: Prisma.task_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.task_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>[]
          }
          delete: {
            args: Prisma.task_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          update: {
            args: Prisma.task_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          deleteMany: {
            args: Prisma.task_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.task_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.task_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>[]
          }
          upsert: {
            args: Prisma.task_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_tagsPayload>
          }
          aggregate: {
            args: Prisma.Task_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask_tags>
          }
          groupBy: {
            args: Prisma.task_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Task_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.task_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Task_tagsCountAggregateOutputType> | number
          }
        }
      }
      activity_logs: {
        payload: Prisma.$activity_logsPayload<ExtArgs>
        fields: Prisma.activity_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activity_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activity_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          findFirst: {
            args: Prisma.activity_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activity_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          findMany: {
            args: Prisma.activity_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>[]
          }
          create: {
            args: Prisma.activity_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          createMany: {
            args: Prisma.activity_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.activity_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>[]
          }
          delete: {
            args: Prisma.activity_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          update: {
            args: Prisma.activity_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          deleteMany: {
            args: Prisma.activity_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activity_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.activity_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>[]
          }
          upsert: {
            args: Prisma.activity_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activity_logsPayload>
          }
          aggregate: {
            args: Prisma.Activity_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity_logs>
          }
          groupBy: {
            args: Prisma.activity_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Activity_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.activity_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Activity_logsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    projects?: projectsOmit
    tasks?: tasksOmit
    comments?: commentsOmit
    tags?: tagsOmit
    task_tags?: task_tagsOmit
    activity_logs?: activity_logsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    projects: number
    tasks: number
    comments: number
    activity_logs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UsersCountOutputTypeCountProjectsArgs
    tasks?: boolean | UsersCountOutputTypeCountTasksArgs
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    activity_logs?: boolean | UsersCountOutputTypeCountActivity_logsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountActivity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activity_logsWhereInput
  }


  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    tasks: number
    comments: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectsCountOutputTypeCountTasksArgs
    comments?: boolean | ProjectsCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Count Type TasksCountOutputType
   */

  export type TasksCountOutputType = {
    tags: number
    comments: number
  }

  export type TasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | TasksCountOutputTypeCountTagsArgs
    comments?: boolean | TasksCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     */
    select?: TasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_tagsWhereInput
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    taskTags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskTags?: boolean | TagsCountOutputTypeCountTaskTagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountTaskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_tagsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    username: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    username: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password_hash: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: bigint
    username: string
    email: string
    password_hash: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    projects?: boolean | users$projectsArgs<ExtArgs>
    tasks?: boolean | users$tasksArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    activity_logs?: boolean | users$activity_logsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password_hash" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | users$projectsArgs<ExtArgs>
    tasks?: boolean | users$tasksArgs<ExtArgs>
    comments?: boolean | users$commentsArgs<ExtArgs>
    activity_logs?: boolean | users$activity_logsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs>[]
      tasks: Prisma.$tasksPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
      activity_logs: Prisma.$activity_logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      username: string
      email: string
      password_hash: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends users$projectsArgs<ExtArgs> = {}>(args?: Subset<T, users$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends users$tasksArgs<ExtArgs> = {}>(args?: Subset<T, users$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activity_logs<T extends users$activity_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$activity_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'BigInt'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.projects
   */
  export type users$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    cursor?: projectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * users.tasks
   */
  export type users$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.activity_logs
   */
  export type users$activity_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    where?: activity_logsWhereInput
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    cursor?: activity_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    owner_id: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: bigint | null
    owner_id: bigint | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    owner_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    owner_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    owner_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    owner_id?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    owner_id?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: bigint
    name: string
    description: string | null
    owner_id: bigint
    created_at: Date
    updated_at: Date
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | projects$tasksArgs<ExtArgs>
    comments?: boolean | projects$commentsArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "owner_id" | "created_at" | "updated_at", ExtArgs["result"]["projects"]>
  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | usersDefaultArgs<ExtArgs>
    tasks?: boolean | projects$tasksArgs<ExtArgs>
    comments?: boolean | projects$commentsArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type projectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      owner: Prisma.$usersPayload<ExtArgs>
      tasks: Prisma.$tasksPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      description: string | null
      owner_id: bigint
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectsCreateManyAndReturnArgs>(args?: SelectSubset<T, projectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectsUpdateManyAndReturnArgs>(args: SelectSubset<T, projectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends projects$tasksArgs<ExtArgs> = {}>(args?: Subset<T, projects$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends projects$commentsArgs<ExtArgs> = {}>(args?: Subset<T, projects$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'BigInt'>
    readonly name: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'String'>
    readonly owner_id: FieldRef<"projects", 'BigInt'>
    readonly created_at: FieldRef<"projects", 'DateTime'>
    readonly updated_at: FieldRef<"projects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects createManyAndReturn
   */
  export type projectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects updateManyAndReturn
   */
  export type projectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects.tasks
   */
  export type projects$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * projects.comments
   */
  export type projects$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    id: number | null
    project_id: number | null
    assignee_id: number | null
  }

  export type TasksSumAggregateOutputType = {
    id: bigint | null
    project_id: bigint | null
    assignee_id: bigint | null
  }

  export type TasksMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    description: string | null
    status: string | null
    project_id: bigint | null
    assignee_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TasksMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    description: string | null
    status: string | null
    project_id: bigint | null
    assignee_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    project_id: number
    assignee_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    id?: true
    project_id?: true
    assignee_id?: true
  }

  export type TasksSumAggregateInputType = {
    id?: true
    project_id?: true
    assignee_id?: true
  }

  export type TasksMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    project_id?: true
    assignee_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    project_id?: true
    assignee_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    project_id?: true
    assignee_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: bigint
    title: string
    description: string | null
    status: string
    project_id: bigint
    assignee_id: bigint | null
    created_at: Date
    updated_at: Date
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    project_id?: boolean
    assignee_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
    assignee?: boolean | tasks$assigneeArgs<ExtArgs>
    tags?: boolean | tasks$tagsArgs<ExtArgs>
    comments?: boolean | tasks$commentsArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    project_id?: boolean
    assignee_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
    assignee?: boolean | tasks$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    project_id?: boolean
    assignee_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    project?: boolean | projectsDefaultArgs<ExtArgs>
    assignee?: boolean | tasks$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    project_id?: boolean
    assignee_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "project_id" | "assignee_id" | "created_at" | "updated_at", ExtArgs["result"]["tasks"]>
  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
    assignee?: boolean | tasks$assigneeArgs<ExtArgs>
    tags?: boolean | tasks$tagsArgs<ExtArgs>
    comments?: boolean | tasks$commentsArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
    assignee?: boolean | tasks$assigneeArgs<ExtArgs>
  }
  export type tasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectsDefaultArgs<ExtArgs>
    assignee?: boolean | tasks$assigneeArgs<ExtArgs>
  }

  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      project: Prisma.$projectsPayload<ExtArgs>
      assignee: Prisma.$usersPayload<ExtArgs> | null
      tags: Prisma.$task_tagsPayload<ExtArgs>[]
      comments: Prisma.$commentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      description: string | null
      status: string
      project_id: bigint
      assignee_id: bigint | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasksFindUniqueArgs>(args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasksFindFirstArgs>(args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tasksFindManyArgs>(args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends tasksCreateArgs>(args: SelectSubset<T, tasksCreateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasksCreateManyArgs>(args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {tasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tasksCreateManyAndReturnArgs>(args?: SelectSubset<T, tasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends tasksDeleteArgs>(args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasksUpdateArgs>(args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasksDeleteManyArgs>(args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasksUpdateManyArgs>(args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {tasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tasksUpdateManyAndReturnArgs>(args: SelectSubset<T, tasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends tasksUpsertArgs>(args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignee<T extends tasks$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, tasks$assigneeArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tags<T extends tasks$tagsArgs<ExtArgs> = {}>(args?: Subset<T, tasks$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends tasks$commentsArgs<ExtArgs> = {}>(args?: Subset<T, tasks$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tasks model
   */
  interface tasksFieldRefs {
    readonly id: FieldRef<"tasks", 'BigInt'>
    readonly title: FieldRef<"tasks", 'String'>
    readonly description: FieldRef<"tasks", 'String'>
    readonly status: FieldRef<"tasks", 'String'>
    readonly project_id: FieldRef<"tasks", 'BigInt'>
    readonly assignee_id: FieldRef<"tasks", 'BigInt'>
    readonly created_at: FieldRef<"tasks", 'DateTime'>
    readonly updated_at: FieldRef<"tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }

  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasks createManyAndReturn
   */
  export type tasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * tasks updateManyAndReturn
   */
  export type tasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }

  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * tasks.assignee
   */
  export type tasks$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * tasks.tags
   */
  export type tasks$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    where?: task_tagsWhereInput
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    cursor?: task_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Task_tagsScalarFieldEnum | Task_tagsScalarFieldEnum[]
  }

  /**
   * tasks.comments
   */
  export type tasks$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    task_id: number | null
    project_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    task_id: bigint | null
    project_id: bigint | null
  }

  export type CommentsMinAggregateOutputType = {
    id: bigint | null
    content: string | null
    user_id: bigint | null
    task_id: bigint | null
    project_id: bigint | null
    created_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: bigint | null
    content: string | null
    user_id: bigint | null
    task_id: bigint | null
    project_id: bigint | null
    created_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    content: number
    user_id: number
    task_id: number
    project_id: number
    created_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    task_id?: true
    project_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    user_id?: true
    task_id?: true
    project_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    content?: true
    user_id?: true
    task_id?: true
    project_id?: true
    created_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    content?: true
    user_id?: true
    task_id?: true
    project_id?: true
    created_at?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    content?: true
    user_id?: true
    task_id?: true
    project_id?: true
    created_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: bigint
    content: string
    user_id: bigint
    task_id: bigint | null
    project_id: bigint | null
    created_at: Date
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    user_id?: boolean
    task_id?: boolean
    project_id?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    task?: boolean | comments$taskArgs<ExtArgs>
    project?: boolean | comments$projectArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    user_id?: boolean
    task_id?: boolean
    project_id?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    task?: boolean | comments$taskArgs<ExtArgs>
    project?: boolean | comments$projectArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    user_id?: boolean
    task_id?: boolean
    project_id?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    task?: boolean | comments$taskArgs<ExtArgs>
    project?: boolean | comments$projectArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    content?: boolean
    user_id?: boolean
    task_id?: boolean
    project_id?: boolean
    created_at?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "user_id" | "task_id" | "project_id" | "created_at", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    task?: boolean | comments$taskArgs<ExtArgs>
    project?: boolean | comments$projectArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    task?: boolean | comments$taskArgs<ExtArgs>
    project?: boolean | comments$projectArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    task?: boolean | comments$taskArgs<ExtArgs>
    project?: boolean | comments$projectArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      task: Prisma.$tasksPayload<ExtArgs> | null
      project: Prisma.$projectsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      content: string
      user_id: bigint
      task_id: bigint | null
      project_id: bigint | null
      created_at: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends comments$taskArgs<ExtArgs> = {}>(args?: Subset<T, comments$taskArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends comments$projectArgs<ExtArgs> = {}>(args?: Subset<T, comments$projectArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'BigInt'>
    readonly content: FieldRef<"comments", 'String'>
    readonly user_id: FieldRef<"comments", 'BigInt'>
    readonly task_id: FieldRef<"comments", 'BigInt'>
    readonly project_id: FieldRef<"comments", 'BigInt'>
    readonly created_at: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.task
   */
  export type comments$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
  }

  /**
   * comments.project
   */
  export type comments$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: bigint | null
  }

  export type TagsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: bigint
    name: string
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    taskTags?: boolean | tags$taskTagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskTags?: boolean | tags$taskTagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      taskTags: Prisma.$task_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taskTags<T extends tags$taskTagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$taskTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'BigInt'>
    readonly name: FieldRef<"tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.taskTags
   */
  export type tags$taskTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    where?: task_tagsWhereInput
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    cursor?: task_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Task_tagsScalarFieldEnum | Task_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model task_tags
   */

  export type AggregateTask_tags = {
    _count: Task_tagsCountAggregateOutputType | null
    _avg: Task_tagsAvgAggregateOutputType | null
    _sum: Task_tagsSumAggregateOutputType | null
    _min: Task_tagsMinAggregateOutputType | null
    _max: Task_tagsMaxAggregateOutputType | null
  }

  export type Task_tagsAvgAggregateOutputType = {
    id: number | null
    task_id: number | null
    tag_id: number | null
  }

  export type Task_tagsSumAggregateOutputType = {
    id: bigint | null
    task_id: bigint | null
    tag_id: bigint | null
  }

  export type Task_tagsMinAggregateOutputType = {
    id: bigint | null
    task_id: bigint | null
    tag_id: bigint | null
  }

  export type Task_tagsMaxAggregateOutputType = {
    id: bigint | null
    task_id: bigint | null
    tag_id: bigint | null
  }

  export type Task_tagsCountAggregateOutputType = {
    id: number
    task_id: number
    tag_id: number
    _all: number
  }


  export type Task_tagsAvgAggregateInputType = {
    id?: true
    task_id?: true
    tag_id?: true
  }

  export type Task_tagsSumAggregateInputType = {
    id?: true
    task_id?: true
    tag_id?: true
  }

  export type Task_tagsMinAggregateInputType = {
    id?: true
    task_id?: true
    tag_id?: true
  }

  export type Task_tagsMaxAggregateInputType = {
    id?: true
    task_id?: true
    tag_id?: true
  }

  export type Task_tagsCountAggregateInputType = {
    id?: true
    task_id?: true
    tag_id?: true
    _all?: true
  }

  export type Task_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_tags to aggregate.
     */
    where?: task_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_tags to fetch.
     */
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: task_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned task_tags
    **/
    _count?: true | Task_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Task_tagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Task_tagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Task_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Task_tagsMaxAggregateInputType
  }

  export type GetTask_tagsAggregateType<T extends Task_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTask_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask_tags[P]>
      : GetScalarType<T[P], AggregateTask_tags[P]>
  }




  export type task_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_tagsWhereInput
    orderBy?: task_tagsOrderByWithAggregationInput | task_tagsOrderByWithAggregationInput[]
    by: Task_tagsScalarFieldEnum[] | Task_tagsScalarFieldEnum
    having?: task_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Task_tagsCountAggregateInputType | true
    _avg?: Task_tagsAvgAggregateInputType
    _sum?: Task_tagsSumAggregateInputType
    _min?: Task_tagsMinAggregateInputType
    _max?: Task_tagsMaxAggregateInputType
  }

  export type Task_tagsGroupByOutputType = {
    id: bigint
    task_id: bigint
    tag_id: bigint
    _count: Task_tagsCountAggregateOutputType | null
    _avg: Task_tagsAvgAggregateOutputType | null
    _sum: Task_tagsSumAggregateOutputType | null
    _min: Task_tagsMinAggregateOutputType | null
    _max: Task_tagsMaxAggregateOutputType | null
  }

  type GetTask_tagsGroupByPayload<T extends task_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Task_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Task_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Task_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Task_tagsGroupByOutputType[P]>
        }
      >
    >


  export type task_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    tag_id?: boolean
    task?: boolean | tasksDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_tags"]>

  export type task_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    tag_id?: boolean
    task?: boolean | tasksDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_tags"]>

  export type task_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    tag_id?: boolean
    task?: boolean | tasksDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_tags"]>

  export type task_tagsSelectScalar = {
    id?: boolean
    task_id?: boolean
    tag_id?: boolean
  }

  export type task_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_id" | "tag_id", ExtArgs["result"]["task_tags"]>
  export type task_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | tasksDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type task_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | tasksDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type task_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | tasksDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $task_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task_tags"
    objects: {
      task: Prisma.$tasksPayload<ExtArgs>
      tag: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      task_id: bigint
      tag_id: bigint
    }, ExtArgs["result"]["task_tags"]>
    composites: {}
  }

  type task_tagsGetPayload<S extends boolean | null | undefined | task_tagsDefaultArgs> = $Result.GetResult<Prisma.$task_tagsPayload, S>

  type task_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<task_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Task_tagsCountAggregateInputType | true
    }

  export interface task_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task_tags'], meta: { name: 'task_tags' } }
    /**
     * Find zero or one Task_tags that matches the filter.
     * @param {task_tagsFindUniqueArgs} args - Arguments to find a Task_tags
     * @example
     * // Get one Task_tags
     * const task_tags = await prisma.task_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends task_tagsFindUniqueArgs>(args: SelectSubset<T, task_tagsFindUniqueArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {task_tagsFindUniqueOrThrowArgs} args - Arguments to find a Task_tags
     * @example
     * // Get one Task_tags
     * const task_tags = await prisma.task_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends task_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, task_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsFindFirstArgs} args - Arguments to find a Task_tags
     * @example
     * // Get one Task_tags
     * const task_tags = await prisma.task_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends task_tagsFindFirstArgs>(args?: SelectSubset<T, task_tagsFindFirstArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsFindFirstOrThrowArgs} args - Arguments to find a Task_tags
     * @example
     * // Get one Task_tags
     * const task_tags = await prisma.task_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends task_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, task_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Task_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Task_tags
     * const task_tags = await prisma.task_tags.findMany()
     * 
     * // Get first 10 Task_tags
     * const task_tags = await prisma.task_tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const task_tagsWithIdOnly = await prisma.task_tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends task_tagsFindManyArgs>(args?: SelectSubset<T, task_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task_tags.
     * @param {task_tagsCreateArgs} args - Arguments to create a Task_tags.
     * @example
     * // Create one Task_tags
     * const Task_tags = await prisma.task_tags.create({
     *   data: {
     *     // ... data to create a Task_tags
     *   }
     * })
     * 
     */
    create<T extends task_tagsCreateArgs>(args: SelectSubset<T, task_tagsCreateArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Task_tags.
     * @param {task_tagsCreateManyArgs} args - Arguments to create many Task_tags.
     * @example
     * // Create many Task_tags
     * const task_tags = await prisma.task_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends task_tagsCreateManyArgs>(args?: SelectSubset<T, task_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Task_tags and returns the data saved in the database.
     * @param {task_tagsCreateManyAndReturnArgs} args - Arguments to create many Task_tags.
     * @example
     * // Create many Task_tags
     * const task_tags = await prisma.task_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Task_tags and only return the `id`
     * const task_tagsWithIdOnly = await prisma.task_tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends task_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, task_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task_tags.
     * @param {task_tagsDeleteArgs} args - Arguments to delete one Task_tags.
     * @example
     * // Delete one Task_tags
     * const Task_tags = await prisma.task_tags.delete({
     *   where: {
     *     // ... filter to delete one Task_tags
     *   }
     * })
     * 
     */
    delete<T extends task_tagsDeleteArgs>(args: SelectSubset<T, task_tagsDeleteArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task_tags.
     * @param {task_tagsUpdateArgs} args - Arguments to update one Task_tags.
     * @example
     * // Update one Task_tags
     * const task_tags = await prisma.task_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends task_tagsUpdateArgs>(args: SelectSubset<T, task_tagsUpdateArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Task_tags.
     * @param {task_tagsDeleteManyArgs} args - Arguments to filter Task_tags to delete.
     * @example
     * // Delete a few Task_tags
     * const { count } = await prisma.task_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends task_tagsDeleteManyArgs>(args?: SelectSubset<T, task_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Task_tags
     * const task_tags = await prisma.task_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends task_tagsUpdateManyArgs>(args: SelectSubset<T, task_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_tags and returns the data updated in the database.
     * @param {task_tagsUpdateManyAndReturnArgs} args - Arguments to update many Task_tags.
     * @example
     * // Update many Task_tags
     * const task_tags = await prisma.task_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Task_tags and only return the `id`
     * const task_tagsWithIdOnly = await prisma.task_tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends task_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, task_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task_tags.
     * @param {task_tagsUpsertArgs} args - Arguments to update or create a Task_tags.
     * @example
     * // Update or create a Task_tags
     * const task_tags = await prisma.task_tags.upsert({
     *   create: {
     *     // ... data to create a Task_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task_tags we want to update
     *   }
     * })
     */
    upsert<T extends task_tagsUpsertArgs>(args: SelectSubset<T, task_tagsUpsertArgs<ExtArgs>>): Prisma__task_tagsClient<$Result.GetResult<Prisma.$task_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Task_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsCountArgs} args - Arguments to filter Task_tags to count.
     * @example
     * // Count the number of Task_tags
     * const count = await prisma.task_tags.count({
     *   where: {
     *     // ... the filter for the Task_tags we want to count
     *   }
     * })
    **/
    count<T extends task_tagsCountArgs>(
      args?: Subset<T, task_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Task_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Task_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Task_tagsAggregateArgs>(args: Subset<T, Task_tagsAggregateArgs>): Prisma.PrismaPromise<GetTask_tagsAggregateType<T>>

    /**
     * Group by Task_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends task_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: task_tagsGroupByArgs['orderBy'] }
        : { orderBy?: task_tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, task_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTask_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task_tags model
   */
  readonly fields: task_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__task_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tasksDefaultArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the task_tags model
   */
  interface task_tagsFieldRefs {
    readonly id: FieldRef<"task_tags", 'BigInt'>
    readonly task_id: FieldRef<"task_tags", 'BigInt'>
    readonly tag_id: FieldRef<"task_tags", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * task_tags findUnique
   */
  export type task_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter, which task_tags to fetch.
     */
    where: task_tagsWhereUniqueInput
  }

  /**
   * task_tags findUniqueOrThrow
   */
  export type task_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter, which task_tags to fetch.
     */
    where: task_tagsWhereUniqueInput
  }

  /**
   * task_tags findFirst
   */
  export type task_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter, which task_tags to fetch.
     */
    where?: task_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_tags to fetch.
     */
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_tags.
     */
    cursor?: task_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_tags.
     */
    distinct?: Task_tagsScalarFieldEnum | Task_tagsScalarFieldEnum[]
  }

  /**
   * task_tags findFirstOrThrow
   */
  export type task_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter, which task_tags to fetch.
     */
    where?: task_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_tags to fetch.
     */
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_tags.
     */
    cursor?: task_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_tags.
     */
    distinct?: Task_tagsScalarFieldEnum | Task_tagsScalarFieldEnum[]
  }

  /**
   * task_tags findMany
   */
  export type task_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter, which task_tags to fetch.
     */
    where?: task_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_tags to fetch.
     */
    orderBy?: task_tagsOrderByWithRelationInput | task_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing task_tags.
     */
    cursor?: task_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_tags.
     */
    skip?: number
    distinct?: Task_tagsScalarFieldEnum | Task_tagsScalarFieldEnum[]
  }

  /**
   * task_tags create
   */
  export type task_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a task_tags.
     */
    data: XOR<task_tagsCreateInput, task_tagsUncheckedCreateInput>
  }

  /**
   * task_tags createMany
   */
  export type task_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many task_tags.
     */
    data: task_tagsCreateManyInput | task_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task_tags createManyAndReturn
   */
  export type task_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many task_tags.
     */
    data: task_tagsCreateManyInput | task_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_tags update
   */
  export type task_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a task_tags.
     */
    data: XOR<task_tagsUpdateInput, task_tagsUncheckedUpdateInput>
    /**
     * Choose, which task_tags to update.
     */
    where: task_tagsWhereUniqueInput
  }

  /**
   * task_tags updateMany
   */
  export type task_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update task_tags.
     */
    data: XOR<task_tagsUpdateManyMutationInput, task_tagsUncheckedUpdateManyInput>
    /**
     * Filter which task_tags to update
     */
    where?: task_tagsWhereInput
    /**
     * Limit how many task_tags to update.
     */
    limit?: number
  }

  /**
   * task_tags updateManyAndReturn
   */
  export type task_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * The data used to update task_tags.
     */
    data: XOR<task_tagsUpdateManyMutationInput, task_tagsUncheckedUpdateManyInput>
    /**
     * Filter which task_tags to update
     */
    where?: task_tagsWhereInput
    /**
     * Limit how many task_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_tags upsert
   */
  export type task_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the task_tags to update in case it exists.
     */
    where: task_tagsWhereUniqueInput
    /**
     * In case the task_tags found by the `where` argument doesn't exist, create a new task_tags with this data.
     */
    create: XOR<task_tagsCreateInput, task_tagsUncheckedCreateInput>
    /**
     * In case the task_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<task_tagsUpdateInput, task_tagsUncheckedUpdateInput>
  }

  /**
   * task_tags delete
   */
  export type task_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
    /**
     * Filter which task_tags to delete.
     */
    where: task_tagsWhereUniqueInput
  }

  /**
   * task_tags deleteMany
   */
  export type task_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_tags to delete
     */
    where?: task_tagsWhereInput
    /**
     * Limit how many task_tags to delete.
     */
    limit?: number
  }

  /**
   * task_tags without action
   */
  export type task_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_tags
     */
    select?: task_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_tags
     */
    omit?: task_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_tagsInclude<ExtArgs> | null
  }


  /**
   * Model activity_logs
   */

  export type AggregateActivity_logs = {
    _count: Activity_logsCountAggregateOutputType | null
    _avg: Activity_logsAvgAggregateOutputType | null
    _sum: Activity_logsSumAggregateOutputType | null
    _min: Activity_logsMinAggregateOutputType | null
    _max: Activity_logsMaxAggregateOutputType | null
  }

  export type Activity_logsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Activity_logsSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type Activity_logsMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    action: string | null
    created_at: Date | null
  }

  export type Activity_logsMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    action: string | null
    created_at: Date | null
  }

  export type Activity_logsCountAggregateOutputType = {
    id: number
    user_id: number
    action: number
    details: number
    created_at: number
    _all: number
  }


  export type Activity_logsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Activity_logsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Activity_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    created_at?: true
  }

  export type Activity_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    created_at?: true
  }

  export type Activity_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    details?: true
    created_at?: true
    _all?: true
  }

  export type Activity_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity_logs to aggregate.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activity_logs
    **/
    _count?: true | Activity_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Activity_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Activity_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Activity_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Activity_logsMaxAggregateInputType
  }

  export type GetActivity_logsAggregateType<T extends Activity_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity_logs[P]>
      : GetScalarType<T[P], AggregateActivity_logs[P]>
  }




  export type activity_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activity_logsWhereInput
    orderBy?: activity_logsOrderByWithAggregationInput | activity_logsOrderByWithAggregationInput[]
    by: Activity_logsScalarFieldEnum[] | Activity_logsScalarFieldEnum
    having?: activity_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Activity_logsCountAggregateInputType | true
    _avg?: Activity_logsAvgAggregateInputType
    _sum?: Activity_logsSumAggregateInputType
    _min?: Activity_logsMinAggregateInputType
    _max?: Activity_logsMaxAggregateInputType
  }

  export type Activity_logsGroupByOutputType = {
    id: bigint
    user_id: bigint
    action: string
    details: JsonValue
    created_at: Date
    _count: Activity_logsCountAggregateOutputType | null
    _avg: Activity_logsAvgAggregateOutputType | null
    _sum: Activity_logsSumAggregateOutputType | null
    _min: Activity_logsMinAggregateOutputType | null
    _max: Activity_logsMaxAggregateOutputType | null
  }

  type GetActivity_logsGroupByPayload<T extends activity_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Activity_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Activity_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Activity_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Activity_logsGroupByOutputType[P]>
        }
      >
    >


  export type activity_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity_logs"]>

  export type activity_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity_logs"]>

  export type activity_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity_logs"]>

  export type activity_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
  }

  export type activity_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "action" | "details" | "created_at", ExtArgs["result"]["activity_logs"]>
  export type activity_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type activity_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type activity_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $activity_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activity_logs"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      action: string
      details: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["activity_logs"]>
    composites: {}
  }

  type activity_logsGetPayload<S extends boolean | null | undefined | activity_logsDefaultArgs> = $Result.GetResult<Prisma.$activity_logsPayload, S>

  type activity_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activity_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Activity_logsCountAggregateInputType | true
    }

  export interface activity_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activity_logs'], meta: { name: 'activity_logs' } }
    /**
     * Find zero or one Activity_logs that matches the filter.
     * @param {activity_logsFindUniqueArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activity_logsFindUniqueArgs>(args: SelectSubset<T, activity_logsFindUniqueArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activity_logsFindUniqueOrThrowArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activity_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, activity_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsFindFirstArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activity_logsFindFirstArgs>(args?: SelectSubset<T, activity_logsFindFirstArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsFindFirstOrThrowArgs} args - Arguments to find a Activity_logs
     * @example
     * // Get one Activity_logs
     * const activity_logs = await prisma.activity_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activity_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, activity_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activity_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activity_logs
     * const activity_logs = await prisma.activity_logs.findMany()
     * 
     * // Get first 10 Activity_logs
     * const activity_logs = await prisma.activity_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activity_logsWithIdOnly = await prisma.activity_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activity_logsFindManyArgs>(args?: SelectSubset<T, activity_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity_logs.
     * @param {activity_logsCreateArgs} args - Arguments to create a Activity_logs.
     * @example
     * // Create one Activity_logs
     * const Activity_logs = await prisma.activity_logs.create({
     *   data: {
     *     // ... data to create a Activity_logs
     *   }
     * })
     * 
     */
    create<T extends activity_logsCreateArgs>(args: SelectSubset<T, activity_logsCreateArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activity_logs.
     * @param {activity_logsCreateManyArgs} args - Arguments to create many Activity_logs.
     * @example
     * // Create many Activity_logs
     * const activity_logs = await prisma.activity_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activity_logsCreateManyArgs>(args?: SelectSubset<T, activity_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activity_logs and returns the data saved in the database.
     * @param {activity_logsCreateManyAndReturnArgs} args - Arguments to create many Activity_logs.
     * @example
     * // Create many Activity_logs
     * const activity_logs = await prisma.activity_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activity_logs and only return the `id`
     * const activity_logsWithIdOnly = await prisma.activity_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends activity_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, activity_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity_logs.
     * @param {activity_logsDeleteArgs} args - Arguments to delete one Activity_logs.
     * @example
     * // Delete one Activity_logs
     * const Activity_logs = await prisma.activity_logs.delete({
     *   where: {
     *     // ... filter to delete one Activity_logs
     *   }
     * })
     * 
     */
    delete<T extends activity_logsDeleteArgs>(args: SelectSubset<T, activity_logsDeleteArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity_logs.
     * @param {activity_logsUpdateArgs} args - Arguments to update one Activity_logs.
     * @example
     * // Update one Activity_logs
     * const activity_logs = await prisma.activity_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activity_logsUpdateArgs>(args: SelectSubset<T, activity_logsUpdateArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activity_logs.
     * @param {activity_logsDeleteManyArgs} args - Arguments to filter Activity_logs to delete.
     * @example
     * // Delete a few Activity_logs
     * const { count } = await prisma.activity_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activity_logsDeleteManyArgs>(args?: SelectSubset<T, activity_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activity_logs
     * const activity_logs = await prisma.activity_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activity_logsUpdateManyArgs>(args: SelectSubset<T, activity_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activity_logs and returns the data updated in the database.
     * @param {activity_logsUpdateManyAndReturnArgs} args - Arguments to update many Activity_logs.
     * @example
     * // Update many Activity_logs
     * const activity_logs = await prisma.activity_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activity_logs and only return the `id`
     * const activity_logsWithIdOnly = await prisma.activity_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends activity_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, activity_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity_logs.
     * @param {activity_logsUpsertArgs} args - Arguments to update or create a Activity_logs.
     * @example
     * // Update or create a Activity_logs
     * const activity_logs = await prisma.activity_logs.upsert({
     *   create: {
     *     // ... data to create a Activity_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity_logs we want to update
     *   }
     * })
     */
    upsert<T extends activity_logsUpsertArgs>(args: SelectSubset<T, activity_logsUpsertArgs<ExtArgs>>): Prisma__activity_logsClient<$Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsCountArgs} args - Arguments to filter Activity_logs to count.
     * @example
     * // Count the number of Activity_logs
     * const count = await prisma.activity_logs.count({
     *   where: {
     *     // ... the filter for the Activity_logs we want to count
     *   }
     * })
    **/
    count<T extends activity_logsCountArgs>(
      args?: Subset<T, activity_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Activity_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Activity_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Activity_logsAggregateArgs>(args: Subset<T, Activity_logsAggregateArgs>): Prisma.PrismaPromise<GetActivity_logsAggregateType<T>>

    /**
     * Group by Activity_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends activity_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activity_logsGroupByArgs['orderBy'] }
        : { orderBy?: activity_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, activity_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivity_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activity_logs model
   */
  readonly fields: activity_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activity_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activity_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the activity_logs model
   */
  interface activity_logsFieldRefs {
    readonly id: FieldRef<"activity_logs", 'BigInt'>
    readonly user_id: FieldRef<"activity_logs", 'BigInt'>
    readonly action: FieldRef<"activity_logs", 'String'>
    readonly details: FieldRef<"activity_logs", 'Json'>
    readonly created_at: FieldRef<"activity_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * activity_logs findUnique
   */
  export type activity_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs findUniqueOrThrow
   */
  export type activity_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs findFirst
   */
  export type activity_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activity_logs.
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activity_logs.
     */
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * activity_logs findFirstOrThrow
   */
  export type activity_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activity_logs.
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activity_logs.
     */
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * activity_logs findMany
   */
  export type activity_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter, which activity_logs to fetch.
     */
    where?: activity_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_logs to fetch.
     */
    orderBy?: activity_logsOrderByWithRelationInput | activity_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activity_logs.
     */
    cursor?: activity_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_logs.
     */
    skip?: number
    distinct?: Activity_logsScalarFieldEnum | Activity_logsScalarFieldEnum[]
  }

  /**
   * activity_logs create
   */
  export type activity_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a activity_logs.
     */
    data: XOR<activity_logsCreateInput, activity_logsUncheckedCreateInput>
  }

  /**
   * activity_logs createMany
   */
  export type activity_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activity_logs.
     */
    data: activity_logsCreateManyInput | activity_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activity_logs createManyAndReturn
   */
  export type activity_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * The data used to create many activity_logs.
     */
    data: activity_logsCreateManyInput | activity_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * activity_logs update
   */
  export type activity_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a activity_logs.
     */
    data: XOR<activity_logsUpdateInput, activity_logsUncheckedUpdateInput>
    /**
     * Choose, which activity_logs to update.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs updateMany
   */
  export type activity_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activity_logs.
     */
    data: XOR<activity_logsUpdateManyMutationInput, activity_logsUncheckedUpdateManyInput>
    /**
     * Filter which activity_logs to update
     */
    where?: activity_logsWhereInput
    /**
     * Limit how many activity_logs to update.
     */
    limit?: number
  }

  /**
   * activity_logs updateManyAndReturn
   */
  export type activity_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * The data used to update activity_logs.
     */
    data: XOR<activity_logsUpdateManyMutationInput, activity_logsUncheckedUpdateManyInput>
    /**
     * Filter which activity_logs to update
     */
    where?: activity_logsWhereInput
    /**
     * Limit how many activity_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * activity_logs upsert
   */
  export type activity_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the activity_logs to update in case it exists.
     */
    where: activity_logsWhereUniqueInput
    /**
     * In case the activity_logs found by the `where` argument doesn't exist, create a new activity_logs with this data.
     */
    create: XOR<activity_logsCreateInput, activity_logsUncheckedCreateInput>
    /**
     * In case the activity_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activity_logsUpdateInput, activity_logsUncheckedUpdateInput>
  }

  /**
   * activity_logs delete
   */
  export type activity_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
    /**
     * Filter which activity_logs to delete.
     */
    where: activity_logsWhereUniqueInput
  }

  /**
   * activity_logs deleteMany
   */
  export type activity_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity_logs to delete
     */
    where?: activity_logsWhereInput
    /**
     * Limit how many activity_logs to delete.
     */
    limit?: number
  }

  /**
   * activity_logs without action
   */
  export type activity_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_logs
     */
    select?: activity_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity_logs
     */
    omit?: activity_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activity_logsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    owner_id: 'owner_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    project_id: 'project_id',
    assignee_id: 'assignee_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    user_id: 'user_id',
    task_id: 'task_id',
    project_id: 'project_id',
    created_at: 'created_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const Task_tagsScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    tag_id: 'tag_id'
  };

  export type Task_tagsScalarFieldEnum = (typeof Task_tagsScalarFieldEnum)[keyof typeof Task_tagsScalarFieldEnum]


  export const Activity_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    details: 'details',
    created_at: 'created_at'
  };

  export type Activity_logsScalarFieldEnum = (typeof Activity_logsScalarFieldEnum)[keyof typeof Activity_logsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: BigIntFilter<"users"> | bigint | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    projects?: ProjectsListRelationFilter
    tasks?: TasksListRelationFilter
    comments?: CommentsListRelationFilter
    activity_logs?: Activity_logsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    projects?: projectsOrderByRelationAggregateInput
    tasks?: tasksOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
    activity_logs?: activity_logsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    projects?: ProjectsListRelationFilter
    tasks?: TasksListRelationFilter
    comments?: CommentsListRelationFilter
    activity_logs?: Activity_logsListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"users"> | bigint | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: BigIntFilter<"projects"> | bigint | number
    name?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    owner_id?: BigIntFilter<"projects"> | bigint | number
    created_at?: DateTimeFilter<"projects"> | Date | string
    updated_at?: DateTimeFilter<"projects"> | Date | string
    owner?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tasks?: TasksListRelationFilter
    comments?: CommentsListRelationFilter
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    owner?: usersOrderByWithRelationInput
    tasks?: tasksOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    name?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    owner_id?: BigIntFilter<"projects"> | bigint | number
    created_at?: DateTimeFilter<"projects"> | Date | string
    updated_at?: DateTimeFilter<"projects"> | Date | string
    owner?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tasks?: TasksListRelationFilter
    comments?: CommentsListRelationFilter
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"projects"> | bigint | number
    name?: StringWithAggregatesFilter<"projects"> | string
    description?: StringNullableWithAggregatesFilter<"projects"> | string | null
    owner_id?: BigIntWithAggregatesFilter<"projects"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"projects"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"projects"> | Date | string
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    id?: BigIntFilter<"tasks"> | bigint | number
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    status?: StringFilter<"tasks"> | string
    project_id?: BigIntFilter<"tasks"> | bigint | number
    assignee_id?: BigIntNullableFilter<"tasks"> | bigint | number | null
    created_at?: DateTimeFilter<"tasks"> | Date | string
    updated_at?: DateTimeFilter<"tasks"> | Date | string
    project?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    assignee?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    tags?: Task_tagsListRelationFilter
    comments?: CommentsListRelationFilter
  }

  export type tasksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    project_id?: SortOrder
    assignee_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    project?: projectsOrderByWithRelationInput
    assignee?: usersOrderByWithRelationInput
    tags?: task_tagsOrderByRelationAggregateInput
    comments?: commentsOrderByRelationAggregateInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    status?: StringFilter<"tasks"> | string
    project_id?: BigIntFilter<"tasks"> | bigint | number
    assignee_id?: BigIntNullableFilter<"tasks"> | bigint | number | null
    created_at?: DateTimeFilter<"tasks"> | Date | string
    updated_at?: DateTimeFilter<"tasks"> | Date | string
    project?: XOR<ProjectsScalarRelationFilter, projectsWhereInput>
    assignee?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    tags?: Task_tagsListRelationFilter
    comments?: CommentsListRelationFilter
  }, "id">

  export type tasksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    project_id?: SortOrder
    assignee_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: tasksCountOrderByAggregateInput
    _avg?: tasksAvgOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
    _sum?: tasksSumOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"tasks"> | bigint | number
    title?: StringWithAggregatesFilter<"tasks"> | string
    description?: StringNullableWithAggregatesFilter<"tasks"> | string | null
    status?: StringWithAggregatesFilter<"tasks"> | string
    project_id?: BigIntWithAggregatesFilter<"tasks"> | bigint | number
    assignee_id?: BigIntNullableWithAggregatesFilter<"tasks"> | bigint | number | null
    created_at?: DateTimeWithAggregatesFilter<"tasks"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tasks"> | Date | string
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: BigIntFilter<"comments"> | bigint | number
    content?: StringFilter<"comments"> | string
    user_id?: BigIntFilter<"comments"> | bigint | number
    task_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    project_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    created_at?: DateTimeFilter<"comments"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    task?: XOR<TasksNullableScalarRelationFilter, tasksWhereInput> | null
    project?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrderInput | SortOrder
    project_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
    task?: tasksOrderByWithRelationInput
    project?: projectsOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    content?: StringFilter<"comments"> | string
    user_id?: BigIntFilter<"comments"> | bigint | number
    task_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    project_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    created_at?: DateTimeFilter<"comments"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    task?: XOR<TasksNullableScalarRelationFilter, tasksWhereInput> | null
    project?: XOR<ProjectsNullableScalarRelationFilter, projectsWhereInput> | null
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrderInput | SortOrder
    project_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"comments"> | bigint | number
    content?: StringWithAggregatesFilter<"comments"> | string
    user_id?: BigIntWithAggregatesFilter<"comments"> | bigint | number
    task_id?: BigIntNullableWithAggregatesFilter<"comments"> | bigint | number | null
    project_id?: BigIntNullableWithAggregatesFilter<"comments"> | bigint | number | null
    created_at?: DateTimeWithAggregatesFilter<"comments"> | Date | string
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: BigIntFilter<"tags"> | bigint | number
    name?: StringFilter<"tags"> | string
    taskTags?: Task_tagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    taskTags?: task_tagsOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    name?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    taskTags?: Task_tagsListRelationFilter
  }, "id" | "name">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"tags"> | bigint | number
    name?: StringWithAggregatesFilter<"tags"> | string
  }

  export type task_tagsWhereInput = {
    AND?: task_tagsWhereInput | task_tagsWhereInput[]
    OR?: task_tagsWhereInput[]
    NOT?: task_tagsWhereInput | task_tagsWhereInput[]
    id?: BigIntFilter<"task_tags"> | bigint | number
    task_id?: BigIntFilter<"task_tags"> | bigint | number
    tag_id?: BigIntFilter<"task_tags"> | bigint | number
    task?: XOR<TasksScalarRelationFilter, tasksWhereInput>
    tag?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type task_tagsOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
    task?: tasksOrderByWithRelationInput
    tag?: tagsOrderByWithRelationInput
  }

  export type task_tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: task_tagsWhereInput | task_tagsWhereInput[]
    OR?: task_tagsWhereInput[]
    NOT?: task_tagsWhereInput | task_tagsWhereInput[]
    task_id?: BigIntFilter<"task_tags"> | bigint | number
    tag_id?: BigIntFilter<"task_tags"> | bigint | number
    task?: XOR<TasksScalarRelationFilter, tasksWhereInput>
    tag?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "id">

  export type task_tagsOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
    _count?: task_tagsCountOrderByAggregateInput
    _avg?: task_tagsAvgOrderByAggregateInput
    _max?: task_tagsMaxOrderByAggregateInput
    _min?: task_tagsMinOrderByAggregateInput
    _sum?: task_tagsSumOrderByAggregateInput
  }

  export type task_tagsScalarWhereWithAggregatesInput = {
    AND?: task_tagsScalarWhereWithAggregatesInput | task_tagsScalarWhereWithAggregatesInput[]
    OR?: task_tagsScalarWhereWithAggregatesInput[]
    NOT?: task_tagsScalarWhereWithAggregatesInput | task_tagsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"task_tags"> | bigint | number
    task_id?: BigIntWithAggregatesFilter<"task_tags"> | bigint | number
    tag_id?: BigIntWithAggregatesFilter<"task_tags"> | bigint | number
  }

  export type activity_logsWhereInput = {
    AND?: activity_logsWhereInput | activity_logsWhereInput[]
    OR?: activity_logsWhereInput[]
    NOT?: activity_logsWhereInput | activity_logsWhereInput[]
    id?: BigIntFilter<"activity_logs"> | bigint | number
    user_id?: BigIntFilter<"activity_logs"> | bigint | number
    action?: StringFilter<"activity_logs"> | string
    details?: JsonFilter<"activity_logs">
    created_at?: DateTimeFilter<"activity_logs"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type activity_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type activity_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: activity_logsWhereInput | activity_logsWhereInput[]
    OR?: activity_logsWhereInput[]
    NOT?: activity_logsWhereInput | activity_logsWhereInput[]
    user_id?: BigIntFilter<"activity_logs"> | bigint | number
    action?: StringFilter<"activity_logs"> | string
    details?: JsonFilter<"activity_logs">
    created_at?: DateTimeFilter<"activity_logs"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type activity_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    _count?: activity_logsCountOrderByAggregateInput
    _avg?: activity_logsAvgOrderByAggregateInput
    _max?: activity_logsMaxOrderByAggregateInput
    _min?: activity_logsMinOrderByAggregateInput
    _sum?: activity_logsSumOrderByAggregateInput
  }

  export type activity_logsScalarWhereWithAggregatesInput = {
    AND?: activity_logsScalarWhereWithAggregatesInput | activity_logsScalarWhereWithAggregatesInput[]
    OR?: activity_logsScalarWhereWithAggregatesInput[]
    NOT?: activity_logsScalarWhereWithAggregatesInput | activity_logsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"activity_logs"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"activity_logs"> | bigint | number
    action?: StringWithAggregatesFilter<"activity_logs"> | string
    details?: JsonWithAggregatesFilter<"activity_logs">
    created_at?: DateTimeWithAggregatesFilter<"activity_logs"> | Date | string
  }

  export type usersCreateInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    projects?: projectsCreateNestedManyWithoutOwnerInput
    tasks?: tasksCreateNestedManyWithoutAssigneeInput
    comments?: commentsCreateNestedManyWithoutUserInput
    activity_logs?: activity_logsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    projects?: projectsUncheckedCreateNestedManyWithoutOwnerInput
    tasks?: tasksUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUpdateManyWithoutOwnerNestedInput
    tasks?: tasksUpdateManyWithoutAssigneeNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
    activity_logs?: activity_logsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUncheckedUpdateManyWithoutOwnerNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
    activity_logs?: activity_logsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectsCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    owner: usersCreateNestedOneWithoutProjectsInput
    tasks?: tasksCreateNestedManyWithoutProjectInput
    comments?: commentsCreateNestedManyWithoutProjectInput
  }

  export type projectsUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    owner_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectInput
    comments?: commentsUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: usersUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: tasksUpdateManyWithoutProjectNestedInput
    comments?: commentsUpdateManyWithoutProjectNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: tasksUncheckedUpdateManyWithoutProjectNestedInput
    comments?: commentsUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectsCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string | null
    owner_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type projectsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tasksCreateInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    project: projectsCreateNestedOneWithoutTasksInput
    assignee?: usersCreateNestedOneWithoutTasksInput
    tags?: task_tagsCreateNestedManyWithoutTaskInput
    comments?: commentsCreateNestedManyWithoutTaskInput
  }

  export type tasksUncheckedCreateInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    project_id: bigint | number
    assignee_id?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
    tags?: task_tagsUncheckedCreateNestedManyWithoutTaskInput
    comments?: commentsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type tasksUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectsUpdateOneRequiredWithoutTasksNestedInput
    assignee?: usersUpdateOneWithoutTasksNestedInput
    tags?: task_tagsUpdateManyWithoutTaskNestedInput
    comments?: commentsUpdateManyWithoutTaskNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    project_id?: BigIntFieldUpdateOperationsInput | bigint | number
    assignee_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: task_tagsUncheckedUpdateManyWithoutTaskNestedInput
    comments?: commentsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type tasksCreateManyInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    project_id: bigint | number
    assignee_id?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tasksUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tasksUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    project_id?: BigIntFieldUpdateOperationsInput | bigint | number
    assignee_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsCreateInput = {
    id?: bigint | number
    content: string
    created_at?: Date | string
    user: usersCreateNestedOneWithoutCommentsInput
    task?: tasksCreateNestedOneWithoutCommentsInput
    project?: projectsCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: bigint | number
    content: string
    user_id: bigint | number
    task_id?: bigint | number | null
    project_id?: bigint | number | null
    created_at?: Date | string
  }

  export type commentsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutCommentsNestedInput
    task?: tasksUpdateOneWithoutCommentsNestedInput
    project?: projectsUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    project_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsCreateManyInput = {
    id?: bigint | number
    content: string
    user_id: bigint | number
    task_id?: bigint | number | null
    project_id?: bigint | number | null
    created_at?: Date | string
  }

  export type commentsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    project_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagsCreateInput = {
    id?: bigint | number
    name: string
    taskTags?: task_tagsCreateNestedManyWithoutTagInput
  }

  export type tagsUncheckedCreateInput = {
    id?: bigint | number
    name: string
    taskTags?: task_tagsUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    taskTags?: task_tagsUpdateManyWithoutTagNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    taskTags?: task_tagsUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagsCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type tagsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type task_tagsCreateInput = {
    id?: bigint | number
    task: tasksCreateNestedOneWithoutTagsInput
    tag: tagsCreateNestedOneWithoutTaskTagsInput
  }

  export type task_tagsUncheckedCreateInput = {
    id?: bigint | number
    task_id: bigint | number
    tag_id: bigint | number
  }

  export type task_tagsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task?: tasksUpdateOneRequiredWithoutTagsNestedInput
    tag?: tagsUpdateOneRequiredWithoutTaskTagsNestedInput
  }

  export type task_tagsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type task_tagsCreateManyInput = {
    id?: bigint | number
    task_id: bigint | number
    tag_id: bigint | number
  }

  export type task_tagsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type task_tagsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type activity_logsCreateInput = {
    id?: bigint | number
    action: string
    details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    user: usersCreateNestedOneWithoutActivity_logsInput
  }

  export type activity_logsUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    action: string
    details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type activity_logsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutActivity_logsNestedInput
  }

  export type activity_logsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activity_logsCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    action: string
    details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type activity_logsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activity_logsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectsListRelationFilter = {
    every?: projectsWhereInput
    some?: projectsWhereInput
    none?: projectsWhereInput
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type Activity_logsListRelationFilter = {
    every?: activity_logsWhereInput
    some?: activity_logsWhereInput
    none?: activity_logsWhereInput
  }

  export type projectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type activity_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ProjectsScalarRelationFilter = {
    is?: projectsWhereInput
    isNot?: projectsWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type Task_tagsListRelationFilter = {
    every?: task_tagsWhereInput
    some?: task_tagsWhereInput
    none?: task_tagsWhereInput
  }

  export type task_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    project_id?: SortOrder
    assignee_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksAvgOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    assignee_id?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    project_id?: SortOrder
    assignee_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    project_id?: SortOrder
    assignee_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksSumOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    assignee_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type TasksNullableScalarRelationFilter = {
    is?: tasksWhereInput | null
    isNot?: tasksWhereInput | null
  }

  export type ProjectsNullableScalarRelationFilter = {
    is?: projectsWhereInput | null
    isNot?: projectsWhereInput | null
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    project_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    project_id?: SortOrder
    created_at?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    project_id?: SortOrder
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TasksScalarRelationFilter = {
    is?: tasksWhereInput
    isNot?: tasksWhereInput
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type task_tagsCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type task_tagsAvgOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type task_tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type task_tagsMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type task_tagsSumOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type activity_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
  }

  export type activity_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type activity_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }

  export type activity_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }

  export type activity_logsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type projectsCreateNestedManyWithoutOwnerInput = {
    create?: XOR<projectsCreateWithoutOwnerInput, projectsUncheckedCreateWithoutOwnerInput> | projectsCreateWithoutOwnerInput[] | projectsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutOwnerInput | projectsCreateOrConnectWithoutOwnerInput[]
    createMany?: projectsCreateManyOwnerInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<tasksCreateWithoutAssigneeInput, tasksUncheckedCreateWithoutAssigneeInput> | tasksCreateWithoutAssigneeInput[] | tasksUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutAssigneeInput | tasksCreateOrConnectWithoutAssigneeInput[]
    createMany?: tasksCreateManyAssigneeInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutUserInput = {
    create?: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput> | commentsCreateWithoutUserInput[] | commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUserInput | commentsCreateOrConnectWithoutUserInput[]
    createMany?: commentsCreateManyUserInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type activity_logsCreateNestedManyWithoutUserInput = {
    create?: XOR<activity_logsCreateWithoutUserInput, activity_logsUncheckedCreateWithoutUserInput> | activity_logsCreateWithoutUserInput[] | activity_logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutUserInput | activity_logsCreateOrConnectWithoutUserInput[]
    createMany?: activity_logsCreateManyUserInputEnvelope
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
  }

  export type projectsUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<projectsCreateWithoutOwnerInput, projectsUncheckedCreateWithoutOwnerInput> | projectsCreateWithoutOwnerInput[] | projectsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutOwnerInput | projectsCreateOrConnectWithoutOwnerInput[]
    createMany?: projectsCreateManyOwnerInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<tasksCreateWithoutAssigneeInput, tasksUncheckedCreateWithoutAssigneeInput> | tasksCreateWithoutAssigneeInput[] | tasksUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutAssigneeInput | tasksCreateOrConnectWithoutAssigneeInput[]
    createMany?: tasksCreateManyAssigneeInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput> | commentsCreateWithoutUserInput[] | commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUserInput | commentsCreateOrConnectWithoutUserInput[]
    createMany?: commentsCreateManyUserInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type activity_logsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<activity_logsCreateWithoutUserInput, activity_logsUncheckedCreateWithoutUserInput> | activity_logsCreateWithoutUserInput[] | activity_logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutUserInput | activity_logsCreateOrConnectWithoutUserInput[]
    createMany?: activity_logsCreateManyUserInputEnvelope
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type projectsUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<projectsCreateWithoutOwnerInput, projectsUncheckedCreateWithoutOwnerInput> | projectsCreateWithoutOwnerInput[] | projectsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutOwnerInput | projectsCreateOrConnectWithoutOwnerInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutOwnerInput | projectsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: projectsCreateManyOwnerInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutOwnerInput | projectsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutOwnerInput | projectsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<tasksCreateWithoutAssigneeInput, tasksUncheckedCreateWithoutAssigneeInput> | tasksCreateWithoutAssigneeInput[] | tasksUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutAssigneeInput | tasksCreateOrConnectWithoutAssigneeInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutAssigneeInput | tasksUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: tasksCreateManyAssigneeInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutAssigneeInput | tasksUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutAssigneeInput | tasksUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput> | commentsCreateWithoutUserInput[] | commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUserInput | commentsCreateOrConnectWithoutUserInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUserInput | commentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentsCreateManyUserInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUserInput | commentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUserInput | commentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type activity_logsUpdateManyWithoutUserNestedInput = {
    create?: XOR<activity_logsCreateWithoutUserInput, activity_logsUncheckedCreateWithoutUserInput> | activity_logsCreateWithoutUserInput[] | activity_logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutUserInput | activity_logsCreateOrConnectWithoutUserInput[]
    upsert?: activity_logsUpsertWithWhereUniqueWithoutUserInput | activity_logsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: activity_logsCreateManyUserInputEnvelope
    set?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    disconnect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    delete?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    update?: activity_logsUpdateWithWhereUniqueWithoutUserInput | activity_logsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: activity_logsUpdateManyWithWhereWithoutUserInput | activity_logsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
  }

  export type projectsUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<projectsCreateWithoutOwnerInput, projectsUncheckedCreateWithoutOwnerInput> | projectsCreateWithoutOwnerInput[] | projectsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutOwnerInput | projectsCreateOrConnectWithoutOwnerInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutOwnerInput | projectsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: projectsCreateManyOwnerInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutOwnerInput | projectsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutOwnerInput | projectsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<tasksCreateWithoutAssigneeInput, tasksUncheckedCreateWithoutAssigneeInput> | tasksCreateWithoutAssigneeInput[] | tasksUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutAssigneeInput | tasksCreateOrConnectWithoutAssigneeInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutAssigneeInput | tasksUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: tasksCreateManyAssigneeInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutAssigneeInput | tasksUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutAssigneeInput | tasksUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput> | commentsCreateWithoutUserInput[] | commentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUserInput | commentsCreateOrConnectWithoutUserInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUserInput | commentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentsCreateManyUserInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUserInput | commentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUserInput | commentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type activity_logsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<activity_logsCreateWithoutUserInput, activity_logsUncheckedCreateWithoutUserInput> | activity_logsCreateWithoutUserInput[] | activity_logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: activity_logsCreateOrConnectWithoutUserInput | activity_logsCreateOrConnectWithoutUserInput[]
    upsert?: activity_logsUpsertWithWhereUniqueWithoutUserInput | activity_logsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: activity_logsCreateManyUserInputEnvelope
    set?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    disconnect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    delete?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    connect?: activity_logsWhereUniqueInput | activity_logsWhereUniqueInput[]
    update?: activity_logsUpdateWithWhereUniqueWithoutUserInput | activity_logsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: activity_logsUpdateManyWithWhereWithoutUserInput | activity_logsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutProjectsInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput
    connect?: usersWhereUniqueInput
  }

  export type tasksCreateNestedManyWithoutProjectInput = {
    create?: XOR<tasksCreateWithoutProjectInput, tasksUncheckedCreateWithoutProjectInput> | tasksCreateWithoutProjectInput[] | tasksUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectInput | tasksCreateOrConnectWithoutProjectInput[]
    createMany?: tasksCreateManyProjectInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutProjectInput = {
    create?: XOR<commentsCreateWithoutProjectInput, commentsUncheckedCreateWithoutProjectInput> | commentsCreateWithoutProjectInput[] | commentsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutProjectInput | commentsCreateOrConnectWithoutProjectInput[]
    createMany?: commentsCreateManyProjectInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<tasksCreateWithoutProjectInput, tasksUncheckedCreateWithoutProjectInput> | tasksCreateWithoutProjectInput[] | tasksUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectInput | tasksCreateOrConnectWithoutProjectInput[]
    createMany?: tasksCreateManyProjectInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<commentsCreateWithoutProjectInput, commentsUncheckedCreateWithoutProjectInput> | commentsCreateWithoutProjectInput[] | commentsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutProjectInput | commentsCreateOrConnectWithoutProjectInput[]
    createMany?: commentsCreateManyProjectInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProjectsInput
    upsert?: usersUpsertWithoutProjectsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProjectsInput, usersUpdateWithoutProjectsInput>, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type tasksUpdateManyWithoutProjectNestedInput = {
    create?: XOR<tasksCreateWithoutProjectInput, tasksUncheckedCreateWithoutProjectInput> | tasksCreateWithoutProjectInput[] | tasksUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectInput | tasksCreateOrConnectWithoutProjectInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutProjectInput | tasksUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: tasksCreateManyProjectInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutProjectInput | tasksUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutProjectInput | tasksUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutProjectNestedInput = {
    create?: XOR<commentsCreateWithoutProjectInput, commentsUncheckedCreateWithoutProjectInput> | commentsCreateWithoutProjectInput[] | commentsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutProjectInput | commentsCreateOrConnectWithoutProjectInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutProjectInput | commentsUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: commentsCreateManyProjectInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutProjectInput | commentsUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutProjectInput | commentsUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<tasksCreateWithoutProjectInput, tasksUncheckedCreateWithoutProjectInput> | tasksCreateWithoutProjectInput[] | tasksUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutProjectInput | tasksCreateOrConnectWithoutProjectInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutProjectInput | tasksUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: tasksCreateManyProjectInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutProjectInput | tasksUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutProjectInput | tasksUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<commentsCreateWithoutProjectInput, commentsUncheckedCreateWithoutProjectInput> | commentsCreateWithoutProjectInput[] | commentsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutProjectInput | commentsCreateOrConnectWithoutProjectInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutProjectInput | commentsUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: commentsCreateManyProjectInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutProjectInput | commentsUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutProjectInput | commentsUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type projectsCreateNestedOneWithoutTasksInput = {
    create?: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: projectsCreateOrConnectWithoutTasksInput
    connect?: projectsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTasksInput = {
    create?: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasksInput
    connect?: usersWhereUniqueInput
  }

  export type task_tagsCreateNestedManyWithoutTaskInput = {
    create?: XOR<task_tagsCreateWithoutTaskInput, task_tagsUncheckedCreateWithoutTaskInput> | task_tagsCreateWithoutTaskInput[] | task_tagsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTaskInput | task_tagsCreateOrConnectWithoutTaskInput[]
    createMany?: task_tagsCreateManyTaskInputEnvelope
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
  }

  export type commentsCreateNestedManyWithoutTaskInput = {
    create?: XOR<commentsCreateWithoutTaskInput, commentsUncheckedCreateWithoutTaskInput> | commentsCreateWithoutTaskInput[] | commentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutTaskInput | commentsCreateOrConnectWithoutTaskInput[]
    createMany?: commentsCreateManyTaskInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type task_tagsUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<task_tagsCreateWithoutTaskInput, task_tagsUncheckedCreateWithoutTaskInput> | task_tagsCreateWithoutTaskInput[] | task_tagsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTaskInput | task_tagsCreateOrConnectWithoutTaskInput[]
    createMany?: task_tagsCreateManyTaskInputEnvelope
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<commentsCreateWithoutTaskInput, commentsUncheckedCreateWithoutTaskInput> | commentsCreateWithoutTaskInput[] | commentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutTaskInput | commentsCreateOrConnectWithoutTaskInput[]
    createMany?: commentsCreateManyTaskInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type projectsUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: projectsCreateOrConnectWithoutTasksInput
    upsert?: projectsUpsertWithoutTasksInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutTasksInput, projectsUpdateWithoutTasksInput>, projectsUncheckedUpdateWithoutTasksInput>
  }

  export type usersUpdateOneWithoutTasksNestedInput = {
    create?: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasksInput
    upsert?: usersUpsertWithoutTasksInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasksInput, usersUpdateWithoutTasksInput>, usersUncheckedUpdateWithoutTasksInput>
  }

  export type task_tagsUpdateManyWithoutTaskNestedInput = {
    create?: XOR<task_tagsCreateWithoutTaskInput, task_tagsUncheckedCreateWithoutTaskInput> | task_tagsCreateWithoutTaskInput[] | task_tagsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTaskInput | task_tagsCreateOrConnectWithoutTaskInput[]
    upsert?: task_tagsUpsertWithWhereUniqueWithoutTaskInput | task_tagsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: task_tagsCreateManyTaskInputEnvelope
    set?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    disconnect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    delete?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    update?: task_tagsUpdateWithWhereUniqueWithoutTaskInput | task_tagsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: task_tagsUpdateManyWithWhereWithoutTaskInput | task_tagsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
  }

  export type commentsUpdateManyWithoutTaskNestedInput = {
    create?: XOR<commentsCreateWithoutTaskInput, commentsUncheckedCreateWithoutTaskInput> | commentsCreateWithoutTaskInput[] | commentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutTaskInput | commentsCreateOrConnectWithoutTaskInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutTaskInput | commentsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: commentsCreateManyTaskInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutTaskInput | commentsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutTaskInput | commentsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type task_tagsUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<task_tagsCreateWithoutTaskInput, task_tagsUncheckedCreateWithoutTaskInput> | task_tagsCreateWithoutTaskInput[] | task_tagsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTaskInput | task_tagsCreateOrConnectWithoutTaskInput[]
    upsert?: task_tagsUpsertWithWhereUniqueWithoutTaskInput | task_tagsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: task_tagsCreateManyTaskInputEnvelope
    set?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    disconnect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    delete?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    update?: task_tagsUpdateWithWhereUniqueWithoutTaskInput | task_tagsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: task_tagsUpdateManyWithWhereWithoutTaskInput | task_tagsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<commentsCreateWithoutTaskInput, commentsUncheckedCreateWithoutTaskInput> | commentsCreateWithoutTaskInput[] | commentsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutTaskInput | commentsCreateOrConnectWithoutTaskInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutTaskInput | commentsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: commentsCreateManyTaskInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutTaskInput | commentsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutTaskInput | commentsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type tasksCreateNestedOneWithoutCommentsInput = {
    create?: XOR<tasksCreateWithoutCommentsInput, tasksUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutCommentsInput
    connect?: tasksWhereUniqueInput
  }

  export type projectsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<projectsCreateWithoutCommentsInput, projectsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutCommentsInput
    connect?: projectsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type tasksUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<tasksCreateWithoutCommentsInput, tasksUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutCommentsInput
    upsert?: tasksUpsertWithoutCommentsInput
    disconnect?: tasksWhereInput | boolean
    delete?: tasksWhereInput | boolean
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutCommentsInput, tasksUpdateWithoutCommentsInput>, tasksUncheckedUpdateWithoutCommentsInput>
  }

  export type projectsUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<projectsCreateWithoutCommentsInput, projectsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: projectsCreateOrConnectWithoutCommentsInput
    upsert?: projectsUpsertWithoutCommentsInput
    disconnect?: projectsWhereInput | boolean
    delete?: projectsWhereInput | boolean
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutCommentsInput, projectsUpdateWithoutCommentsInput>, projectsUncheckedUpdateWithoutCommentsInput>
  }

  export type task_tagsCreateNestedManyWithoutTagInput = {
    create?: XOR<task_tagsCreateWithoutTagInput, task_tagsUncheckedCreateWithoutTagInput> | task_tagsCreateWithoutTagInput[] | task_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTagInput | task_tagsCreateOrConnectWithoutTagInput[]
    createMany?: task_tagsCreateManyTagInputEnvelope
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
  }

  export type task_tagsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<task_tagsCreateWithoutTagInput, task_tagsUncheckedCreateWithoutTagInput> | task_tagsCreateWithoutTagInput[] | task_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTagInput | task_tagsCreateOrConnectWithoutTagInput[]
    createMany?: task_tagsCreateManyTagInputEnvelope
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
  }

  export type task_tagsUpdateManyWithoutTagNestedInput = {
    create?: XOR<task_tagsCreateWithoutTagInput, task_tagsUncheckedCreateWithoutTagInput> | task_tagsCreateWithoutTagInput[] | task_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTagInput | task_tagsCreateOrConnectWithoutTagInput[]
    upsert?: task_tagsUpsertWithWhereUniqueWithoutTagInput | task_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: task_tagsCreateManyTagInputEnvelope
    set?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    disconnect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    delete?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    update?: task_tagsUpdateWithWhereUniqueWithoutTagInput | task_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: task_tagsUpdateManyWithWhereWithoutTagInput | task_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
  }

  export type task_tagsUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<task_tagsCreateWithoutTagInput, task_tagsUncheckedCreateWithoutTagInput> | task_tagsCreateWithoutTagInput[] | task_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: task_tagsCreateOrConnectWithoutTagInput | task_tagsCreateOrConnectWithoutTagInput[]
    upsert?: task_tagsUpsertWithWhereUniqueWithoutTagInput | task_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: task_tagsCreateManyTagInputEnvelope
    set?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    disconnect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    delete?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    connect?: task_tagsWhereUniqueInput | task_tagsWhereUniqueInput[]
    update?: task_tagsUpdateWithWhereUniqueWithoutTagInput | task_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: task_tagsUpdateManyWithWhereWithoutTagInput | task_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
  }

  export type tasksCreateNestedOneWithoutTagsInput = {
    create?: XOR<tasksCreateWithoutTagsInput, tasksUncheckedCreateWithoutTagsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutTagsInput
    connect?: tasksWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutTaskTagsInput = {
    create?: XOR<tagsCreateWithoutTaskTagsInput, tagsUncheckedCreateWithoutTaskTagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutTaskTagsInput
    connect?: tagsWhereUniqueInput
  }

  export type tasksUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<tasksCreateWithoutTagsInput, tasksUncheckedCreateWithoutTagsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutTagsInput
    upsert?: tasksUpsertWithoutTagsInput
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutTagsInput, tasksUpdateWithoutTagsInput>, tasksUncheckedUpdateWithoutTagsInput>
  }

  export type tagsUpdateOneRequiredWithoutTaskTagsNestedInput = {
    create?: XOR<tagsCreateWithoutTaskTagsInput, tagsUncheckedCreateWithoutTaskTagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutTaskTagsInput
    upsert?: tagsUpsertWithoutTaskTagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutTaskTagsInput, tagsUpdateWithoutTaskTagsInput>, tagsUncheckedUpdateWithoutTaskTagsInput>
  }

  export type usersCreateNestedOneWithoutActivity_logsInput = {
    create?: XOR<usersCreateWithoutActivity_logsInput, usersUncheckedCreateWithoutActivity_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutActivity_logsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutActivity_logsNestedInput = {
    create?: XOR<usersCreateWithoutActivity_logsInput, usersUncheckedCreateWithoutActivity_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutActivity_logsInput
    upsert?: usersUpsertWithoutActivity_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutActivity_logsInput, usersUpdateWithoutActivity_logsInput>, usersUncheckedUpdateWithoutActivity_logsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type projectsCreateWithoutOwnerInput = {
    id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    tasks?: tasksCreateNestedManyWithoutProjectInput
    comments?: commentsCreateNestedManyWithoutProjectInput
  }

  export type projectsUncheckedCreateWithoutOwnerInput = {
    id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectInput
    comments?: commentsUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectsCreateOrConnectWithoutOwnerInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutOwnerInput, projectsUncheckedCreateWithoutOwnerInput>
  }

  export type projectsCreateManyOwnerInputEnvelope = {
    data: projectsCreateManyOwnerInput | projectsCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutAssigneeInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    project: projectsCreateNestedOneWithoutTasksInput
    tags?: task_tagsCreateNestedManyWithoutTaskInput
    comments?: commentsCreateNestedManyWithoutTaskInput
  }

  export type tasksUncheckedCreateWithoutAssigneeInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    project_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    tags?: task_tagsUncheckedCreateNestedManyWithoutTaskInput
    comments?: commentsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type tasksCreateOrConnectWithoutAssigneeInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutAssigneeInput, tasksUncheckedCreateWithoutAssigneeInput>
  }

  export type tasksCreateManyAssigneeInputEnvelope = {
    data: tasksCreateManyAssigneeInput | tasksCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutUserInput = {
    id?: bigint | number
    content: string
    created_at?: Date | string
    task?: tasksCreateNestedOneWithoutCommentsInput
    project?: projectsCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    content: string
    task_id?: bigint | number | null
    project_id?: bigint | number | null
    created_at?: Date | string
  }

  export type commentsCreateOrConnectWithoutUserInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput>
  }

  export type commentsCreateManyUserInputEnvelope = {
    data: commentsCreateManyUserInput | commentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type activity_logsCreateWithoutUserInput = {
    id?: bigint | number
    action: string
    details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type activity_logsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    action: string
    details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type activity_logsCreateOrConnectWithoutUserInput = {
    where: activity_logsWhereUniqueInput
    create: XOR<activity_logsCreateWithoutUserInput, activity_logsUncheckedCreateWithoutUserInput>
  }

  export type activity_logsCreateManyUserInputEnvelope = {
    data: activity_logsCreateManyUserInput | activity_logsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type projectsUpsertWithWhereUniqueWithoutOwnerInput = {
    where: projectsWhereUniqueInput
    update: XOR<projectsUpdateWithoutOwnerInput, projectsUncheckedUpdateWithoutOwnerInput>
    create: XOR<projectsCreateWithoutOwnerInput, projectsUncheckedCreateWithoutOwnerInput>
  }

  export type projectsUpdateWithWhereUniqueWithoutOwnerInput = {
    where: projectsWhereUniqueInput
    data: XOR<projectsUpdateWithoutOwnerInput, projectsUncheckedUpdateWithoutOwnerInput>
  }

  export type projectsUpdateManyWithWhereWithoutOwnerInput = {
    where: projectsScalarWhereInput
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyWithoutOwnerInput>
  }

  export type projectsScalarWhereInput = {
    AND?: projectsScalarWhereInput | projectsScalarWhereInput[]
    OR?: projectsScalarWhereInput[]
    NOT?: projectsScalarWhereInput | projectsScalarWhereInput[]
    id?: BigIntFilter<"projects"> | bigint | number
    name?: StringFilter<"projects"> | string
    description?: StringNullableFilter<"projects"> | string | null
    owner_id?: BigIntFilter<"projects"> | bigint | number
    created_at?: DateTimeFilter<"projects"> | Date | string
    updated_at?: DateTimeFilter<"projects"> | Date | string
  }

  export type tasksUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutAssigneeInput, tasksUncheckedUpdateWithoutAssigneeInput>
    create: XOR<tasksCreateWithoutAssigneeInput, tasksUncheckedCreateWithoutAssigneeInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutAssigneeInput, tasksUncheckedUpdateWithoutAssigneeInput>
  }

  export type tasksUpdateManyWithWhereWithoutAssigneeInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    id?: BigIntFilter<"tasks"> | bigint | number
    title?: StringFilter<"tasks"> | string
    description?: StringNullableFilter<"tasks"> | string | null
    status?: StringFilter<"tasks"> | string
    project_id?: BigIntFilter<"tasks"> | bigint | number
    assignee_id?: BigIntNullableFilter<"tasks"> | bigint | number | null
    created_at?: DateTimeFilter<"tasks"> | Date | string
    updated_at?: DateTimeFilter<"tasks"> | Date | string
  }

  export type commentsUpsertWithWhereUniqueWithoutUserInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUserInput, commentsUncheckedUpdateWithoutUserInput>
    create: XOR<commentsCreateWithoutUserInput, commentsUncheckedCreateWithoutUserInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUserInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUserInput, commentsUncheckedUpdateWithoutUserInput>
  }

  export type commentsUpdateManyWithWhereWithoutUserInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUserInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: BigIntFilter<"comments"> | bigint | number
    content?: StringFilter<"comments"> | string
    user_id?: BigIntFilter<"comments"> | bigint | number
    task_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    project_id?: BigIntNullableFilter<"comments"> | bigint | number | null
    created_at?: DateTimeFilter<"comments"> | Date | string
  }

  export type activity_logsUpsertWithWhereUniqueWithoutUserInput = {
    where: activity_logsWhereUniqueInput
    update: XOR<activity_logsUpdateWithoutUserInput, activity_logsUncheckedUpdateWithoutUserInput>
    create: XOR<activity_logsCreateWithoutUserInput, activity_logsUncheckedCreateWithoutUserInput>
  }

  export type activity_logsUpdateWithWhereUniqueWithoutUserInput = {
    where: activity_logsWhereUniqueInput
    data: XOR<activity_logsUpdateWithoutUserInput, activity_logsUncheckedUpdateWithoutUserInput>
  }

  export type activity_logsUpdateManyWithWhereWithoutUserInput = {
    where: activity_logsScalarWhereInput
    data: XOR<activity_logsUpdateManyMutationInput, activity_logsUncheckedUpdateManyWithoutUserInput>
  }

  export type activity_logsScalarWhereInput = {
    AND?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
    OR?: activity_logsScalarWhereInput[]
    NOT?: activity_logsScalarWhereInput | activity_logsScalarWhereInput[]
    id?: BigIntFilter<"activity_logs"> | bigint | number
    user_id?: BigIntFilter<"activity_logs"> | bigint | number
    action?: StringFilter<"activity_logs"> | string
    details?: JsonFilter<"activity_logs">
    created_at?: DateTimeFilter<"activity_logs"> | Date | string
  }

  export type usersCreateWithoutProjectsInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    tasks?: tasksCreateNestedManyWithoutAssigneeInput
    comments?: commentsCreateNestedManyWithoutUserInput
    activity_logs?: activity_logsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutProjectsInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    tasks?: tasksUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutProjectsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
  }

  export type tasksCreateWithoutProjectInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    assignee?: usersCreateNestedOneWithoutTasksInput
    tags?: task_tagsCreateNestedManyWithoutTaskInput
    comments?: commentsCreateNestedManyWithoutTaskInput
  }

  export type tasksUncheckedCreateWithoutProjectInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    assignee_id?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
    tags?: task_tagsUncheckedCreateNestedManyWithoutTaskInput
    comments?: commentsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type tasksCreateOrConnectWithoutProjectInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutProjectInput, tasksUncheckedCreateWithoutProjectInput>
  }

  export type tasksCreateManyProjectInputEnvelope = {
    data: tasksCreateManyProjectInput | tasksCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutProjectInput = {
    id?: bigint | number
    content: string
    created_at?: Date | string
    user: usersCreateNestedOneWithoutCommentsInput
    task?: tasksCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutProjectInput = {
    id?: bigint | number
    content: string
    user_id: bigint | number
    task_id?: bigint | number | null
    created_at?: Date | string
  }

  export type commentsCreateOrConnectWithoutProjectInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutProjectInput, commentsUncheckedCreateWithoutProjectInput>
  }

  export type commentsCreateManyProjectInputEnvelope = {
    data: commentsCreateManyProjectInput | commentsCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutProjectsInput = {
    update: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
    create: XOR<usersCreateWithoutProjectsInput, usersUncheckedCreateWithoutProjectsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProjectsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProjectsInput, usersUncheckedUpdateWithoutProjectsInput>
  }

  export type usersUpdateWithoutProjectsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: tasksUpdateManyWithoutAssigneeNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
    activity_logs?: activity_logsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutProjectsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: tasksUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
    activity_logs?: activity_logsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tasksUpsertWithWhereUniqueWithoutProjectInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutProjectInput, tasksUncheckedUpdateWithoutProjectInput>
    create: XOR<tasksCreateWithoutProjectInput, tasksUncheckedCreateWithoutProjectInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutProjectInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutProjectInput, tasksUncheckedUpdateWithoutProjectInput>
  }

  export type tasksUpdateManyWithWhereWithoutProjectInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutProjectInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutProjectInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutProjectInput, commentsUncheckedUpdateWithoutProjectInput>
    create: XOR<commentsCreateWithoutProjectInput, commentsUncheckedCreateWithoutProjectInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutProjectInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutProjectInput, commentsUncheckedUpdateWithoutProjectInput>
  }

  export type commentsUpdateManyWithWhereWithoutProjectInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutProjectInput>
  }

  export type projectsCreateWithoutTasksInput = {
    id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    owner: usersCreateNestedOneWithoutProjectsInput
    comments?: commentsCreateNestedManyWithoutProjectInput
  }

  export type projectsUncheckedCreateWithoutTasksInput = {
    id?: bigint | number
    name: string
    description?: string | null
    owner_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectsCreateOrConnectWithoutTasksInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
  }

  export type usersCreateWithoutTasksInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    projects?: projectsCreateNestedManyWithoutOwnerInput
    comments?: commentsCreateNestedManyWithoutUserInput
    activity_logs?: activity_logsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutTasksInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    projects?: projectsUncheckedCreateNestedManyWithoutOwnerInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutTasksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
  }

  export type task_tagsCreateWithoutTaskInput = {
    id?: bigint | number
    tag: tagsCreateNestedOneWithoutTaskTagsInput
  }

  export type task_tagsUncheckedCreateWithoutTaskInput = {
    id?: bigint | number
    tag_id: bigint | number
  }

  export type task_tagsCreateOrConnectWithoutTaskInput = {
    where: task_tagsWhereUniqueInput
    create: XOR<task_tagsCreateWithoutTaskInput, task_tagsUncheckedCreateWithoutTaskInput>
  }

  export type task_tagsCreateManyTaskInputEnvelope = {
    data: task_tagsCreateManyTaskInput | task_tagsCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type commentsCreateWithoutTaskInput = {
    id?: bigint | number
    content: string
    created_at?: Date | string
    user: usersCreateNestedOneWithoutCommentsInput
    project?: projectsCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutTaskInput = {
    id?: bigint | number
    content: string
    user_id: bigint | number
    project_id?: bigint | number | null
    created_at?: Date | string
  }

  export type commentsCreateOrConnectWithoutTaskInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutTaskInput, commentsUncheckedCreateWithoutTaskInput>
  }

  export type commentsCreateManyTaskInputEnvelope = {
    data: commentsCreateManyTaskInput | commentsCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type projectsUpsertWithoutTasksInput = {
    update: XOR<projectsUpdateWithoutTasksInput, projectsUncheckedUpdateWithoutTasksInput>
    create: XOR<projectsCreateWithoutTasksInput, projectsUncheckedCreateWithoutTasksInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutTasksInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutTasksInput, projectsUncheckedUpdateWithoutTasksInput>
  }

  export type projectsUpdateWithoutTasksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: usersUpdateOneRequiredWithoutProjectsNestedInput
    comments?: commentsUpdateManyWithoutProjectNestedInput
  }

  export type projectsUncheckedUpdateWithoutTasksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type usersUpsertWithoutTasksInput = {
    update: XOR<usersUpdateWithoutTasksInput, usersUncheckedUpdateWithoutTasksInput>
    create: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasksInput, usersUncheckedUpdateWithoutTasksInput>
  }

  export type usersUpdateWithoutTasksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUpdateManyWithoutOwnerNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
    activity_logs?: activity_logsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutTasksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
    activity_logs?: activity_logsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type task_tagsUpsertWithWhereUniqueWithoutTaskInput = {
    where: task_tagsWhereUniqueInput
    update: XOR<task_tagsUpdateWithoutTaskInput, task_tagsUncheckedUpdateWithoutTaskInput>
    create: XOR<task_tagsCreateWithoutTaskInput, task_tagsUncheckedCreateWithoutTaskInput>
  }

  export type task_tagsUpdateWithWhereUniqueWithoutTaskInput = {
    where: task_tagsWhereUniqueInput
    data: XOR<task_tagsUpdateWithoutTaskInput, task_tagsUncheckedUpdateWithoutTaskInput>
  }

  export type task_tagsUpdateManyWithWhereWithoutTaskInput = {
    where: task_tagsScalarWhereInput
    data: XOR<task_tagsUpdateManyMutationInput, task_tagsUncheckedUpdateManyWithoutTaskInput>
  }

  export type task_tagsScalarWhereInput = {
    AND?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
    OR?: task_tagsScalarWhereInput[]
    NOT?: task_tagsScalarWhereInput | task_tagsScalarWhereInput[]
    id?: BigIntFilter<"task_tags"> | bigint | number
    task_id?: BigIntFilter<"task_tags"> | bigint | number
    tag_id?: BigIntFilter<"task_tags"> | bigint | number
  }

  export type commentsUpsertWithWhereUniqueWithoutTaskInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutTaskInput, commentsUncheckedUpdateWithoutTaskInput>
    create: XOR<commentsCreateWithoutTaskInput, commentsUncheckedCreateWithoutTaskInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutTaskInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutTaskInput, commentsUncheckedUpdateWithoutTaskInput>
  }

  export type commentsUpdateManyWithWhereWithoutTaskInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutTaskInput>
  }

  export type usersCreateWithoutCommentsInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    projects?: projectsCreateNestedManyWithoutOwnerInput
    tasks?: tasksCreateNestedManyWithoutAssigneeInput
    activity_logs?: activity_logsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    projects?: projectsUncheckedCreateNestedManyWithoutOwnerInput
    tasks?: tasksUncheckedCreateNestedManyWithoutAssigneeInput
    activity_logs?: activity_logsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type tasksCreateWithoutCommentsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    project: projectsCreateNestedOneWithoutTasksInput
    assignee?: usersCreateNestedOneWithoutTasksInput
    tags?: task_tagsCreateNestedManyWithoutTaskInput
  }

  export type tasksUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    project_id: bigint | number
    assignee_id?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
    tags?: task_tagsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type tasksCreateOrConnectWithoutCommentsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutCommentsInput, tasksUncheckedCreateWithoutCommentsInput>
  }

  export type projectsCreateWithoutCommentsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    owner: usersCreateNestedOneWithoutProjectsInput
    tasks?: tasksCreateNestedManyWithoutProjectInput
  }

  export type projectsUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    name: string
    description?: string | null
    owner_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    tasks?: tasksUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectsCreateOrConnectWithoutCommentsInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutCommentsInput, projectsUncheckedCreateWithoutCommentsInput>
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUpdateManyWithoutOwnerNestedInput
    tasks?: tasksUpdateManyWithoutAssigneeNestedInput
    activity_logs?: activity_logsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUncheckedUpdateManyWithoutOwnerNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutAssigneeNestedInput
    activity_logs?: activity_logsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tasksUpsertWithoutCommentsInput = {
    update: XOR<tasksUpdateWithoutCommentsInput, tasksUncheckedUpdateWithoutCommentsInput>
    create: XOR<tasksCreateWithoutCommentsInput, tasksUncheckedCreateWithoutCommentsInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutCommentsInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutCommentsInput, tasksUncheckedUpdateWithoutCommentsInput>
  }

  export type tasksUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectsUpdateOneRequiredWithoutTasksNestedInput
    assignee?: usersUpdateOneWithoutTasksNestedInput
    tags?: task_tagsUpdateManyWithoutTaskNestedInput
  }

  export type tasksUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    project_id?: BigIntFieldUpdateOperationsInput | bigint | number
    assignee_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: task_tagsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type projectsUpsertWithoutCommentsInput = {
    update: XOR<projectsUpdateWithoutCommentsInput, projectsUncheckedUpdateWithoutCommentsInput>
    create: XOR<projectsCreateWithoutCommentsInput, projectsUncheckedCreateWithoutCommentsInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutCommentsInput, projectsUncheckedUpdateWithoutCommentsInput>
  }

  export type projectsUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: usersUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: tasksUpdateManyWithoutProjectNestedInput
  }

  export type projectsUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: tasksUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type task_tagsCreateWithoutTagInput = {
    id?: bigint | number
    task: tasksCreateNestedOneWithoutTagsInput
  }

  export type task_tagsUncheckedCreateWithoutTagInput = {
    id?: bigint | number
    task_id: bigint | number
  }

  export type task_tagsCreateOrConnectWithoutTagInput = {
    where: task_tagsWhereUniqueInput
    create: XOR<task_tagsCreateWithoutTagInput, task_tagsUncheckedCreateWithoutTagInput>
  }

  export type task_tagsCreateManyTagInputEnvelope = {
    data: task_tagsCreateManyTagInput | task_tagsCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type task_tagsUpsertWithWhereUniqueWithoutTagInput = {
    where: task_tagsWhereUniqueInput
    update: XOR<task_tagsUpdateWithoutTagInput, task_tagsUncheckedUpdateWithoutTagInput>
    create: XOR<task_tagsCreateWithoutTagInput, task_tagsUncheckedCreateWithoutTagInput>
  }

  export type task_tagsUpdateWithWhereUniqueWithoutTagInput = {
    where: task_tagsWhereUniqueInput
    data: XOR<task_tagsUpdateWithoutTagInput, task_tagsUncheckedUpdateWithoutTagInput>
  }

  export type task_tagsUpdateManyWithWhereWithoutTagInput = {
    where: task_tagsScalarWhereInput
    data: XOR<task_tagsUpdateManyMutationInput, task_tagsUncheckedUpdateManyWithoutTagInput>
  }

  export type tasksCreateWithoutTagsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    project: projectsCreateNestedOneWithoutTasksInput
    assignee?: usersCreateNestedOneWithoutTasksInput
    comments?: commentsCreateNestedManyWithoutTaskInput
  }

  export type tasksUncheckedCreateWithoutTagsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    project_id: bigint | number
    assignee_id?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
    comments?: commentsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type tasksCreateOrConnectWithoutTagsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutTagsInput, tasksUncheckedCreateWithoutTagsInput>
  }

  export type tagsCreateWithoutTaskTagsInput = {
    id?: bigint | number
    name: string
  }

  export type tagsUncheckedCreateWithoutTaskTagsInput = {
    id?: bigint | number
    name: string
  }

  export type tagsCreateOrConnectWithoutTaskTagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutTaskTagsInput, tagsUncheckedCreateWithoutTaskTagsInput>
  }

  export type tasksUpsertWithoutTagsInput = {
    update: XOR<tasksUpdateWithoutTagsInput, tasksUncheckedUpdateWithoutTagsInput>
    create: XOR<tasksCreateWithoutTagsInput, tasksUncheckedCreateWithoutTagsInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutTagsInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutTagsInput, tasksUncheckedUpdateWithoutTagsInput>
  }

  export type tasksUpdateWithoutTagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectsUpdateOneRequiredWithoutTasksNestedInput
    assignee?: usersUpdateOneWithoutTasksNestedInput
    comments?: commentsUpdateManyWithoutTaskNestedInput
  }

  export type tasksUncheckedUpdateWithoutTagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    project_id?: BigIntFieldUpdateOperationsInput | bigint | number
    assignee_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: commentsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type tagsUpsertWithoutTaskTagsInput = {
    update: XOR<tagsUpdateWithoutTaskTagsInput, tagsUncheckedUpdateWithoutTaskTagsInput>
    create: XOR<tagsCreateWithoutTaskTagsInput, tagsUncheckedCreateWithoutTaskTagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutTaskTagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutTaskTagsInput, tagsUncheckedUpdateWithoutTaskTagsInput>
  }

  export type tagsUpdateWithoutTaskTagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateWithoutTaskTagsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateWithoutActivity_logsInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    projects?: projectsCreateNestedManyWithoutOwnerInput
    tasks?: tasksCreateNestedManyWithoutAssigneeInput
    comments?: commentsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutActivity_logsInput = {
    id?: bigint | number
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    projects?: projectsUncheckedCreateNestedManyWithoutOwnerInput
    tasks?: tasksUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: commentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutActivity_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutActivity_logsInput, usersUncheckedCreateWithoutActivity_logsInput>
  }

  export type usersUpsertWithoutActivity_logsInput = {
    update: XOR<usersUpdateWithoutActivity_logsInput, usersUncheckedUpdateWithoutActivity_logsInput>
    create: XOR<usersCreateWithoutActivity_logsInput, usersUncheckedCreateWithoutActivity_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutActivity_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutActivity_logsInput, usersUncheckedUpdateWithoutActivity_logsInput>
  }

  export type usersUpdateWithoutActivity_logsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUpdateManyWithoutOwnerNestedInput
    tasks?: tasksUpdateManyWithoutAssigneeNestedInput
    comments?: commentsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutActivity_logsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: projectsUncheckedUpdateManyWithoutOwnerNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: commentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type projectsCreateManyOwnerInput = {
    id?: bigint | number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tasksCreateManyAssigneeInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    project_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type commentsCreateManyUserInput = {
    id?: bigint | number
    content: string
    task_id?: bigint | number | null
    project_id?: bigint | number | null
    created_at?: Date | string
  }

  export type activity_logsCreateManyUserInput = {
    id?: bigint | number
    action: string
    details: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type projectsUpdateWithoutOwnerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: tasksUpdateManyWithoutProjectNestedInput
    comments?: commentsUpdateManyWithoutProjectNestedInput
  }

  export type projectsUncheckedUpdateWithoutOwnerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: tasksUncheckedUpdateManyWithoutProjectNestedInput
    comments?: commentsUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectsUncheckedUpdateManyWithoutOwnerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tasksUpdateWithoutAssigneeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectsUpdateOneRequiredWithoutTasksNestedInput
    tags?: task_tagsUpdateManyWithoutTaskNestedInput
    comments?: commentsUpdateManyWithoutTaskNestedInput
  }

  export type tasksUncheckedUpdateWithoutAssigneeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    project_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: task_tagsUncheckedUpdateManyWithoutTaskNestedInput
    comments?: commentsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutAssigneeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    project_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: tasksUpdateOneWithoutCommentsNestedInput
    project?: projectsUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    task_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    project_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    task_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    project_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activity_logsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activity_logsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activity_logsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    action?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tasksCreateManyProjectInput = {
    id?: bigint | number
    title: string
    description?: string | null
    status?: string
    assignee_id?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type commentsCreateManyProjectInput = {
    id?: bigint | number
    content: string
    user_id: bigint | number
    task_id?: bigint | number | null
    created_at?: Date | string
  }

  export type tasksUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignee?: usersUpdateOneWithoutTasksNestedInput
    tags?: task_tagsUpdateManyWithoutTaskNestedInput
    comments?: commentsUpdateManyWithoutTaskNestedInput
  }

  export type tasksUncheckedUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignee_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: task_tagsUncheckedUpdateManyWithoutTaskNestedInput
    comments?: commentsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignee_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutCommentsNestedInput
    task?: tasksUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUncheckedUpdateManyWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_tagsCreateManyTaskInput = {
    id?: bigint | number
    tag_id: bigint | number
  }

  export type commentsCreateManyTaskInput = {
    id?: bigint | number
    content: string
    user_id: bigint | number
    project_id?: bigint | number | null
    created_at?: Date | string
  }

  export type task_tagsUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag?: tagsUpdateOneRequiredWithoutTaskTagsNestedInput
  }

  export type task_tagsUncheckedUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type task_tagsUncheckedUpdateManyWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tag_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type commentsUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutCommentsNestedInput
    project?: projectsUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    project_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsUncheckedUpdateManyWithoutTaskInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    project_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_tagsCreateManyTagInput = {
    id?: bigint | number
    task_id: bigint | number
  }

  export type task_tagsUpdateWithoutTagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task?: tasksUpdateOneRequiredWithoutTagsNestedInput
  }

  export type task_tagsUncheckedUpdateWithoutTagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type task_tagsUncheckedUpdateManyWithoutTagInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}