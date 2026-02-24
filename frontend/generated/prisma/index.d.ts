
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Models
 * 
 */
export type Models = $Result.DefaultSelection<Prisma.$ModelsPayload>
/**
 * Model Predictions
 * 
 */
export type Predictions = $Result.DefaultSelection<Prisma.$PredictionsPayload>
/**
 * Model XAI
 * 
 */
export type XAI = $Result.DefaultSelection<Prisma.$XAIPayload>
/**
 * Model GradCAM
 * 
 */
export type GradCAM = $Result.DefaultSelection<Prisma.$GradCAMPayload>
/**
 * Model Processes
 * 
 */
export type Processes = $Result.DefaultSelection<Prisma.$ProcessesPayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProcessStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ProcessStatus = (typeof ProcessStatus)[keyof typeof ProcessStatus]


export const ProcessKind: {
  PREDICTION: 'PREDICTION',
  XAI: 'XAI',
  GRADCAM: 'GRADCAM'
};

export type ProcessKind = (typeof ProcessKind)[keyof typeof ProcessKind]


export const LANGUAGEOPTIONS: {
  EN: 'EN',
  TR: 'TR'
};

export type LANGUAGEOPTIONS = (typeof LANGUAGEOPTIONS)[keyof typeof LANGUAGEOPTIONS]

}

export type ProcessStatus = $Enums.ProcessStatus

export const ProcessStatus: typeof $Enums.ProcessStatus

export type ProcessKind = $Enums.ProcessKind

export const ProcessKind: typeof $Enums.ProcessKind

export type LANGUAGEOPTIONS = $Enums.LANGUAGEOPTIONS

export const LANGUAGEOPTIONS: typeof $Enums.LANGUAGEOPTIONS

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.models`: Exposes CRUD operations for the **Models** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.models.findMany()
    * ```
    */
  get models(): Prisma.ModelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.predictions`: Exposes CRUD operations for the **Predictions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Predictions
    * const predictions = await prisma.predictions.findMany()
    * ```
    */
  get predictions(): Prisma.PredictionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.xAI`: Exposes CRUD operations for the **XAI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more XAIS
    * const xAIS = await prisma.xAI.findMany()
    * ```
    */
  get xAI(): Prisma.XAIDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gradCAM`: Exposes CRUD operations for the **GradCAM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GradCAMS
    * const gradCAMS = await prisma.gradCAM.findMany()
    * ```
    */
  get gradCAM(): Prisma.GradCAMDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processes`: Exposes CRUD operations for the **Processes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Processes
    * const processes = await prisma.processes.findMany()
    * ```
    */
  get processes(): Prisma.ProcessesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Models: 'Models',
    Predictions: 'Predictions',
    XAI: 'XAI',
    GradCAM: 'GradCAM',
    Processes: 'Processes',
    UserSettings: 'UserSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "models" | "predictions" | "xAI" | "gradCAM" | "processes" | "userSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Models: {
        payload: Prisma.$ModelsPayload<ExtArgs>
        fields: Prisma.ModelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          findFirst: {
            args: Prisma.ModelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          findMany: {
            args: Prisma.ModelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          create: {
            args: Prisma.ModelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          createMany: {
            args: Prisma.ModelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          delete: {
            args: Prisma.ModelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          update: {
            args: Prisma.ModelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          deleteMany: {
            args: Prisma.ModelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>[]
          }
          upsert: {
            args: Prisma.ModelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelsPayload>
          }
          aggregate: {
            args: Prisma.ModelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModels>
          }
          groupBy: {
            args: Prisma.ModelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelsCountArgs<ExtArgs>
            result: $Utils.Optional<ModelsCountAggregateOutputType> | number
          }
        }
      }
      Predictions: {
        payload: Prisma.$PredictionsPayload<ExtArgs>
        fields: Prisma.PredictionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredictionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredictionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload>
          }
          findFirst: {
            args: Prisma.PredictionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredictionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload>
          }
          findMany: {
            args: Prisma.PredictionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload>[]
          }
          create: {
            args: Prisma.PredictionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload>
          }
          createMany: {
            args: Prisma.PredictionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredictionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload>[]
          }
          delete: {
            args: Prisma.PredictionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload>
          }
          update: {
            args: Prisma.PredictionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload>
          }
          deleteMany: {
            args: Prisma.PredictionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredictionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PredictionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload>[]
          }
          upsert: {
            args: Prisma.PredictionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionsPayload>
          }
          aggregate: {
            args: Prisma.PredictionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePredictions>
          }
          groupBy: {
            args: Prisma.PredictionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredictionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredictionsCountArgs<ExtArgs>
            result: $Utils.Optional<PredictionsCountAggregateOutputType> | number
          }
        }
      }
      XAI: {
        payload: Prisma.$XAIPayload<ExtArgs>
        fields: Prisma.XAIFieldRefs
        operations: {
          findUnique: {
            args: Prisma.XAIFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.XAIFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload>
          }
          findFirst: {
            args: Prisma.XAIFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.XAIFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload>
          }
          findMany: {
            args: Prisma.XAIFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload>[]
          }
          create: {
            args: Prisma.XAICreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload>
          }
          createMany: {
            args: Prisma.XAICreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.XAICreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload>[]
          }
          delete: {
            args: Prisma.XAIDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload>
          }
          update: {
            args: Prisma.XAIUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload>
          }
          deleteMany: {
            args: Prisma.XAIDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.XAIUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.XAIUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload>[]
          }
          upsert: {
            args: Prisma.XAIUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XAIPayload>
          }
          aggregate: {
            args: Prisma.XAIAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateXAI>
          }
          groupBy: {
            args: Prisma.XAIGroupByArgs<ExtArgs>
            result: $Utils.Optional<XAIGroupByOutputType>[]
          }
          count: {
            args: Prisma.XAICountArgs<ExtArgs>
            result: $Utils.Optional<XAICountAggregateOutputType> | number
          }
        }
      }
      GradCAM: {
        payload: Prisma.$GradCAMPayload<ExtArgs>
        fields: Prisma.GradCAMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradCAMFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradCAMFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload>
          }
          findFirst: {
            args: Prisma.GradCAMFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradCAMFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload>
          }
          findMany: {
            args: Prisma.GradCAMFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload>[]
          }
          create: {
            args: Prisma.GradCAMCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload>
          }
          createMany: {
            args: Prisma.GradCAMCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GradCAMCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload>[]
          }
          delete: {
            args: Prisma.GradCAMDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload>
          }
          update: {
            args: Prisma.GradCAMUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload>
          }
          deleteMany: {
            args: Prisma.GradCAMDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradCAMUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GradCAMUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload>[]
          }
          upsert: {
            args: Prisma.GradCAMUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradCAMPayload>
          }
          aggregate: {
            args: Prisma.GradCAMAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGradCAM>
          }
          groupBy: {
            args: Prisma.GradCAMGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradCAMGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradCAMCountArgs<ExtArgs>
            result: $Utils.Optional<GradCAMCountAggregateOutputType> | number
          }
        }
      }
      Processes: {
        payload: Prisma.$ProcessesPayload<ExtArgs>
        fields: Prisma.ProcessesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload>
          }
          findFirst: {
            args: Prisma.ProcessesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload>
          }
          findMany: {
            args: Prisma.ProcessesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload>[]
          }
          create: {
            args: Prisma.ProcessesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload>
          }
          createMany: {
            args: Prisma.ProcessesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload>[]
          }
          delete: {
            args: Prisma.ProcessesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload>
          }
          update: {
            args: Prisma.ProcessesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload>
          }
          deleteMany: {
            args: Prisma.ProcessesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload>[]
          }
          upsert: {
            args: Prisma.ProcessesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessesPayload>
          }
          aggregate: {
            args: Prisma.ProcessesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcesses>
          }
          groupBy: {
            args: Prisma.ProcessesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessesCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessesCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    models?: ModelsOmit
    predictions?: PredictionsOmit
    xAI?: XAIOmit
    gradCAM?: GradCAMOmit
    processes?: ProcessesOmit
    userSettings?: UserSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    predictions: number
    userSettings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | UserCountOutputTypeCountPredictionsArgs
    userSettings?: boolean | UserCountOutputTypeCountUserSettingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
  }


  /**
   * Count Type ModelsCountOutputType
   */

  export type ModelsCountOutputType = {
    model: number
  }

  export type ModelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelsCountOutputTypeCountModelArgs
  }

  // Custom InputTypes
  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelsCountOutputType
     */
    select?: ModelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelsCountOutputType without action
   */
  export type ModelsCountOutputTypeCountModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionsWhereInput
  }


  /**
   * Count Type PredictionsCountOutputType
   */

  export type PredictionsCountOutputType = {
    xairesults: number
    gradcamresults: number
  }

  export type PredictionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    xairesults?: boolean | PredictionsCountOutputTypeCountXairesultsArgs
    gradcamresults?: boolean | PredictionsCountOutputTypeCountGradcamresultsArgs
  }

  // Custom InputTypes
  /**
   * PredictionsCountOutputType without action
   */
  export type PredictionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredictionsCountOutputType
     */
    select?: PredictionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PredictionsCountOutputType without action
   */
  export type PredictionsCountOutputTypeCountXairesultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: XAIWhereInput
  }

  /**
   * PredictionsCountOutputType without action
   */
  export type PredictionsCountOutputTypeCountGradcamresultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradCAMWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    predictions?: boolean | User$predictionsArgs<ExtArgs>
    userSettings?: boolean | User$userSettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | User$predictionsArgs<ExtArgs>
    userSettings?: boolean | User$userSettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      predictions: Prisma.$PredictionsPayload<ExtArgs>[]
      userSettings: Prisma.$UserSettingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    predictions<T extends User$predictionsArgs<ExtArgs> = {}>(args?: Subset<T, User$predictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userSettings<T extends User$userSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$userSettingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.predictions
   */
  export type User$predictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    where?: PredictionsWhereInput
    orderBy?: PredictionsOrderByWithRelationInput | PredictionsOrderByWithRelationInput[]
    cursor?: PredictionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionsScalarFieldEnum | PredictionsScalarFieldEnum[]
  }

  /**
   * User.userSettings
   */
  export type User$userSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    cursor?: UserSettingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Models
   */

  export type AggregateModels = {
    _count: ModelsCountAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  export type ModelsMinAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelsCountAggregateOutputType = {
    id: number
    name: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelsMinAggregateInputType = {
    id?: true
    name?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelsMaxAggregateInputType = {
    id?: true
    name?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelsCountAggregateInputType = {
    id?: true
    name?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to aggregate.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelsMaxAggregateInputType
  }

  export type GetModelsAggregateType<T extends ModelsAggregateArgs> = {
        [P in keyof T & keyof AggregateModels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModels[P]>
      : GetScalarType<T[P], AggregateModels[P]>
  }




  export type ModelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelsWhereInput
    orderBy?: ModelsOrderByWithAggregationInput | ModelsOrderByWithAggregationInput[]
    by: ModelsScalarFieldEnum[] | ModelsScalarFieldEnum
    having?: ModelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelsCountAggregateInputType | true
    _min?: ModelsMinAggregateInputType
    _max?: ModelsMaxAggregateInputType
  }

  export type ModelsGroupByOutputType = {
    id: string
    name: string
    version: string
    createdAt: Date
    updatedAt: Date
    _count: ModelsCountAggregateOutputType | null
    _min: ModelsMinAggregateOutputType | null
    _max: ModelsMaxAggregateOutputType | null
  }

  type GetModelsGroupByPayload<T extends ModelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelsGroupByOutputType[P]>
            : GetScalarType<T[P], ModelsGroupByOutputType[P]>
        }
      >
    >


  export type ModelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | Models$modelArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["models"]>

  export type ModelsSelectScalar = {
    id?: boolean
    name?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["models"]>
  export type ModelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | Models$modelArgs<ExtArgs>
    _count?: boolean | ModelsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Models"
    objects: {
      model: Prisma.$PredictionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      version: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["models"]>
    composites: {}
  }

  type ModelsGetPayload<S extends boolean | null | undefined | ModelsDefaultArgs> = $Result.GetResult<Prisma.$ModelsPayload, S>

  type ModelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelsCountAggregateInputType | true
    }

  export interface ModelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Models'], meta: { name: 'Models' } }
    /**
     * Find zero or one Models that matches the filter.
     * @param {ModelsFindUniqueArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelsFindUniqueArgs>(args: SelectSubset<T, ModelsFindUniqueArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Models that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelsFindUniqueOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelsFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindFirstArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelsFindFirstArgs>(args?: SelectSubset<T, ModelsFindFirstArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Models that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindFirstOrThrowArgs} args - Arguments to find a Models
     * @example
     * // Get one Models
     * const models = await prisma.models.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelsFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.models.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.models.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelsWithIdOnly = await prisma.models.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelsFindManyArgs>(args?: SelectSubset<T, ModelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Models.
     * @param {ModelsCreateArgs} args - Arguments to create a Models.
     * @example
     * // Create one Models
     * const Models = await prisma.models.create({
     *   data: {
     *     // ... data to create a Models
     *   }
     * })
     * 
     */
    create<T extends ModelsCreateArgs>(args: SelectSubset<T, ModelsCreateArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelsCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const models = await prisma.models.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelsCreateManyArgs>(args?: SelectSubset<T, ModelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Models and returns the data saved in the database.
     * @param {ModelsCreateManyAndReturnArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const models = await prisma.models.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Models and only return the `id`
     * const modelsWithIdOnly = await prisma.models.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelsCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Models.
     * @param {ModelsDeleteArgs} args - Arguments to delete one Models.
     * @example
     * // Delete one Models
     * const Models = await prisma.models.delete({
     *   where: {
     *     // ... filter to delete one Models
     *   }
     * })
     * 
     */
    delete<T extends ModelsDeleteArgs>(args: SelectSubset<T, ModelsDeleteArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Models.
     * @param {ModelsUpdateArgs} args - Arguments to update one Models.
     * @example
     * // Update one Models
     * const models = await prisma.models.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelsUpdateArgs>(args: SelectSubset<T, ModelsUpdateArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelsDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.models.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelsDeleteManyArgs>(args?: SelectSubset<T, ModelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const models = await prisma.models.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelsUpdateManyArgs>(args: SelectSubset<T, ModelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models and returns the data updated in the database.
     * @param {ModelsUpdateManyAndReturnArgs} args - Arguments to update many Models.
     * @example
     * // Update many Models
     * const models = await prisma.models.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Models and only return the `id`
     * const modelsWithIdOnly = await prisma.models.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModelsUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Models.
     * @param {ModelsUpsertArgs} args - Arguments to update or create a Models.
     * @example
     * // Update or create a Models
     * const models = await prisma.models.upsert({
     *   create: {
     *     // ... data to create a Models
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Models we want to update
     *   }
     * })
     */
    upsert<T extends ModelsUpsertArgs>(args: SelectSubset<T, ModelsUpsertArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.models.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelsCountArgs>(
      args?: Subset<T, ModelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelsAggregateArgs>(args: Subset<T, ModelsAggregateArgs>): Prisma.PrismaPromise<GetModelsAggregateType<T>>

    /**
     * Group by Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelsGroupByArgs} args - Group by arguments.
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
      T extends ModelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelsGroupByArgs['orderBy'] }
        : { orderBy?: ModelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Models model
   */
  readonly fields: ModelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Models.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends Models$modelArgs<ExtArgs> = {}>(args?: Subset<T, Models$modelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Models model
   */
  interface ModelsFieldRefs {
    readonly id: FieldRef<"Models", 'String'>
    readonly name: FieldRef<"Models", 'String'>
    readonly version: FieldRef<"Models", 'String'>
    readonly createdAt: FieldRef<"Models", 'DateTime'>
    readonly updatedAt: FieldRef<"Models", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Models findUnique
   */
  export type ModelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models findUniqueOrThrow
   */
  export type ModelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models findFirst
   */
  export type ModelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models findFirstOrThrow
   */
  export type ModelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models findMany
   */
  export type ModelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelsOrderByWithRelationInput | ModelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelsScalarFieldEnum | ModelsScalarFieldEnum[]
  }

  /**
   * Models create
   */
  export type ModelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The data needed to create a Models.
     */
    data: XOR<ModelsCreateInput, ModelsUncheckedCreateInput>
  }

  /**
   * Models createMany
   */
  export type ModelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelsCreateManyInput | ModelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Models createManyAndReturn
   */
  export type ModelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * The data used to create many Models.
     */
    data: ModelsCreateManyInput | ModelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Models update
   */
  export type ModelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The data needed to update a Models.
     */
    data: XOR<ModelsUpdateInput, ModelsUncheckedUpdateInput>
    /**
     * Choose, which Models to update.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models updateMany
   */
  export type ModelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelsUpdateManyMutationInput, ModelsUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Models updateManyAndReturn
   */
  export type ModelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * The data used to update Models.
     */
    data: XOR<ModelsUpdateManyMutationInput, ModelsUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Models upsert
   */
  export type ModelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * The filter to search for the Models to update in case it exists.
     */
    where: ModelsWhereUniqueInput
    /**
     * In case the Models found by the `where` argument doesn't exist, create a new Models with this data.
     */
    create: XOR<ModelsCreateInput, ModelsUncheckedCreateInput>
    /**
     * In case the Models was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelsUpdateInput, ModelsUncheckedUpdateInput>
  }

  /**
   * Models delete
   */
  export type ModelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
    /**
     * Filter which Models to delete.
     */
    where: ModelsWhereUniqueInput
  }

  /**
   * Models deleteMany
   */
  export type ModelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelsWhereInput
    /**
     * Limit how many Models to delete.
     */
    limit?: number
  }

  /**
   * Models.model
   */
  export type Models$modelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    where?: PredictionsWhereInput
    orderBy?: PredictionsOrderByWithRelationInput | PredictionsOrderByWithRelationInput[]
    cursor?: PredictionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionsScalarFieldEnum | PredictionsScalarFieldEnum[]
  }

  /**
   * Models without action
   */
  export type ModelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Models
     */
    select?: ModelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Models
     */
    omit?: ModelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelsInclude<ExtArgs> | null
  }


  /**
   * Model Predictions
   */

  export type AggregatePredictions = {
    _count: PredictionsCountAggregateOutputType | null
    _min: PredictionsMinAggregateOutputType | null
    _max: PredictionsMaxAggregateOutputType | null
  }

  export type PredictionsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    modelId: string | null
    status: $Enums.ProcessStatus | null
    ownerId: string | null
  }

  export type PredictionsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    modelId: string | null
    status: $Enums.ProcessStatus | null
    ownerId: string | null
  }

  export type PredictionsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    modelId: number
    status: number
    ownerId: number
    _all: number
  }


  export type PredictionsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    modelId?: true
    status?: true
    ownerId?: true
  }

  export type PredictionsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    modelId?: true
    status?: true
    ownerId?: true
  }

  export type PredictionsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    modelId?: true
    status?: true
    ownerId?: true
    _all?: true
  }

  export type PredictionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Predictions to aggregate.
     */
    where?: PredictionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionsOrderByWithRelationInput | PredictionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredictionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Predictions
    **/
    _count?: true | PredictionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredictionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredictionsMaxAggregateInputType
  }

  export type GetPredictionsAggregateType<T extends PredictionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePredictions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePredictions[P]>
      : GetScalarType<T[P], AggregatePredictions[P]>
  }




  export type PredictionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionsWhereInput
    orderBy?: PredictionsOrderByWithAggregationInput | PredictionsOrderByWithAggregationInput[]
    by: PredictionsScalarFieldEnum[] | PredictionsScalarFieldEnum
    having?: PredictionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredictionsCountAggregateInputType | true
    _min?: PredictionsMinAggregateInputType
    _max?: PredictionsMaxAggregateInputType
  }

  export type PredictionsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    modelId: string
    status: $Enums.ProcessStatus
    ownerId: string
    _count: PredictionsCountAggregateOutputType | null
    _min: PredictionsMinAggregateOutputType | null
    _max: PredictionsMaxAggregateOutputType | null
  }

  type GetPredictionsGroupByPayload<T extends PredictionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredictionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredictionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredictionsGroupByOutputType[P]>
            : GetScalarType<T[P], PredictionsGroupByOutputType[P]>
        }
      >
    >


  export type PredictionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelId?: boolean
    status?: boolean
    ownerId?: boolean
    xairesults?: boolean | Predictions$xairesultsArgs<ExtArgs>
    gradcamresults?: boolean | Predictions$gradcamresultsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    _count?: boolean | PredictionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predictions"]>

  export type PredictionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelId?: boolean
    status?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predictions"]>

  export type PredictionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelId?: boolean
    status?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predictions"]>

  export type PredictionsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelId?: boolean
    status?: boolean
    ownerId?: boolean
  }

  export type PredictionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "modelId" | "status" | "ownerId", ExtArgs["result"]["predictions"]>
  export type PredictionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    xairesults?: boolean | Predictions$xairesultsArgs<ExtArgs>
    gradcamresults?: boolean | Predictions$gradcamresultsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
    _count?: boolean | PredictionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PredictionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
  }
  export type PredictionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    model?: boolean | ModelsDefaultArgs<ExtArgs>
  }

  export type $PredictionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Predictions"
    objects: {
      xairesults: Prisma.$XAIPayload<ExtArgs>[]
      gradcamresults: Prisma.$GradCAMPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
      model: Prisma.$ModelsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      modelId: string
      status: $Enums.ProcessStatus
      ownerId: string
    }, ExtArgs["result"]["predictions"]>
    composites: {}
  }

  type PredictionsGetPayload<S extends boolean | null | undefined | PredictionsDefaultArgs> = $Result.GetResult<Prisma.$PredictionsPayload, S>

  type PredictionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredictionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredictionsCountAggregateInputType | true
    }

  export interface PredictionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Predictions'], meta: { name: 'Predictions' } }
    /**
     * Find zero or one Predictions that matches the filter.
     * @param {PredictionsFindUniqueArgs} args - Arguments to find a Predictions
     * @example
     * // Get one Predictions
     * const predictions = await prisma.predictions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredictionsFindUniqueArgs>(args: SelectSubset<T, PredictionsFindUniqueArgs<ExtArgs>>): Prisma__PredictionsClient<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Predictions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredictionsFindUniqueOrThrowArgs} args - Arguments to find a Predictions
     * @example
     * // Get one Predictions
     * const predictions = await prisma.predictions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredictionsFindUniqueOrThrowArgs>(args: SelectSubset<T, PredictionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredictionsClient<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Predictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionsFindFirstArgs} args - Arguments to find a Predictions
     * @example
     * // Get one Predictions
     * const predictions = await prisma.predictions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredictionsFindFirstArgs>(args?: SelectSubset<T, PredictionsFindFirstArgs<ExtArgs>>): Prisma__PredictionsClient<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Predictions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionsFindFirstOrThrowArgs} args - Arguments to find a Predictions
     * @example
     * // Get one Predictions
     * const predictions = await prisma.predictions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredictionsFindFirstOrThrowArgs>(args?: SelectSubset<T, PredictionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredictionsClient<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Predictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Predictions
     * const predictions = await prisma.predictions.findMany()
     * 
     * // Get first 10 Predictions
     * const predictions = await prisma.predictions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predictionsWithIdOnly = await prisma.predictions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredictionsFindManyArgs>(args?: SelectSubset<T, PredictionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Predictions.
     * @param {PredictionsCreateArgs} args - Arguments to create a Predictions.
     * @example
     * // Create one Predictions
     * const Predictions = await prisma.predictions.create({
     *   data: {
     *     // ... data to create a Predictions
     *   }
     * })
     * 
     */
    create<T extends PredictionsCreateArgs>(args: SelectSubset<T, PredictionsCreateArgs<ExtArgs>>): Prisma__PredictionsClient<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Predictions.
     * @param {PredictionsCreateManyArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const predictions = await prisma.predictions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredictionsCreateManyArgs>(args?: SelectSubset<T, PredictionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Predictions and returns the data saved in the database.
     * @param {PredictionsCreateManyAndReturnArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const predictions = await prisma.predictions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Predictions and only return the `id`
     * const predictionsWithIdOnly = await prisma.predictions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredictionsCreateManyAndReturnArgs>(args?: SelectSubset<T, PredictionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Predictions.
     * @param {PredictionsDeleteArgs} args - Arguments to delete one Predictions.
     * @example
     * // Delete one Predictions
     * const Predictions = await prisma.predictions.delete({
     *   where: {
     *     // ... filter to delete one Predictions
     *   }
     * })
     * 
     */
    delete<T extends PredictionsDeleteArgs>(args: SelectSubset<T, PredictionsDeleteArgs<ExtArgs>>): Prisma__PredictionsClient<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Predictions.
     * @param {PredictionsUpdateArgs} args - Arguments to update one Predictions.
     * @example
     * // Update one Predictions
     * const predictions = await prisma.predictions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredictionsUpdateArgs>(args: SelectSubset<T, PredictionsUpdateArgs<ExtArgs>>): Prisma__PredictionsClient<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Predictions.
     * @param {PredictionsDeleteManyArgs} args - Arguments to filter Predictions to delete.
     * @example
     * // Delete a few Predictions
     * const { count } = await prisma.predictions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredictionsDeleteManyArgs>(args?: SelectSubset<T, PredictionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Predictions
     * const predictions = await prisma.predictions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredictionsUpdateManyArgs>(args: SelectSubset<T, PredictionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions and returns the data updated in the database.
     * @param {PredictionsUpdateManyAndReturnArgs} args - Arguments to update many Predictions.
     * @example
     * // Update many Predictions
     * const predictions = await prisma.predictions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Predictions and only return the `id`
     * const predictionsWithIdOnly = await prisma.predictions.updateManyAndReturn({
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
    updateManyAndReturn<T extends PredictionsUpdateManyAndReturnArgs>(args: SelectSubset<T, PredictionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Predictions.
     * @param {PredictionsUpsertArgs} args - Arguments to update or create a Predictions.
     * @example
     * // Update or create a Predictions
     * const predictions = await prisma.predictions.upsert({
     *   create: {
     *     // ... data to create a Predictions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Predictions we want to update
     *   }
     * })
     */
    upsert<T extends PredictionsUpsertArgs>(args: SelectSubset<T, PredictionsUpsertArgs<ExtArgs>>): Prisma__PredictionsClient<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionsCountArgs} args - Arguments to filter Predictions to count.
     * @example
     * // Count the number of Predictions
     * const count = await prisma.predictions.count({
     *   where: {
     *     // ... the filter for the Predictions we want to count
     *   }
     * })
    **/
    count<T extends PredictionsCountArgs>(
      args?: Subset<T, PredictionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredictionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PredictionsAggregateArgs>(args: Subset<T, PredictionsAggregateArgs>): Prisma.PrismaPromise<GetPredictionsAggregateType<T>>

    /**
     * Group by Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionsGroupByArgs} args - Group by arguments.
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
      T extends PredictionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredictionsGroupByArgs['orderBy'] }
        : { orderBy?: PredictionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PredictionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredictionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Predictions model
   */
  readonly fields: PredictionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Predictions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredictionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    xairesults<T extends Predictions$xairesultsArgs<ExtArgs> = {}>(args?: Subset<T, Predictions$xairesultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gradcamresults<T extends Predictions$gradcamresultsArgs<ExtArgs> = {}>(args?: Subset<T, Predictions$gradcamresultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    model<T extends ModelsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelsDefaultArgs<ExtArgs>>): Prisma__ModelsClient<$Result.GetResult<Prisma.$ModelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Predictions model
   */
  interface PredictionsFieldRefs {
    readonly id: FieldRef<"Predictions", 'String'>
    readonly createdAt: FieldRef<"Predictions", 'DateTime'>
    readonly updatedAt: FieldRef<"Predictions", 'DateTime'>
    readonly modelId: FieldRef<"Predictions", 'String'>
    readonly status: FieldRef<"Predictions", 'ProcessStatus'>
    readonly ownerId: FieldRef<"Predictions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Predictions findUnique
   */
  export type PredictionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where: PredictionsWhereUniqueInput
  }

  /**
   * Predictions findUniqueOrThrow
   */
  export type PredictionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where: PredictionsWhereUniqueInput
  }

  /**
   * Predictions findFirst
   */
  export type PredictionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where?: PredictionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionsOrderByWithRelationInput | PredictionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionsScalarFieldEnum | PredictionsScalarFieldEnum[]
  }

  /**
   * Predictions findFirstOrThrow
   */
  export type PredictionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where?: PredictionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionsOrderByWithRelationInput | PredictionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionsScalarFieldEnum | PredictionsScalarFieldEnum[]
  }

  /**
   * Predictions findMany
   */
  export type PredictionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where?: PredictionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionsOrderByWithRelationInput | PredictionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Predictions.
     */
    cursor?: PredictionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    distinct?: PredictionsScalarFieldEnum | PredictionsScalarFieldEnum[]
  }

  /**
   * Predictions create
   */
  export type PredictionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Predictions.
     */
    data: XOR<PredictionsCreateInput, PredictionsUncheckedCreateInput>
  }

  /**
   * Predictions createMany
   */
  export type PredictionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Predictions.
     */
    data: PredictionsCreateManyInput | PredictionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Predictions createManyAndReturn
   */
  export type PredictionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * The data used to create many Predictions.
     */
    data: PredictionsCreateManyInput | PredictionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Predictions update
   */
  export type PredictionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Predictions.
     */
    data: XOR<PredictionsUpdateInput, PredictionsUncheckedUpdateInput>
    /**
     * Choose, which Predictions to update.
     */
    where: PredictionsWhereUniqueInput
  }

  /**
   * Predictions updateMany
   */
  export type PredictionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionsUpdateManyMutationInput, PredictionsUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionsWhereInput
    /**
     * Limit how many Predictions to update.
     */
    limit?: number
  }

  /**
   * Predictions updateManyAndReturn
   */
  export type PredictionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionsUpdateManyMutationInput, PredictionsUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionsWhereInput
    /**
     * Limit how many Predictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Predictions upsert
   */
  export type PredictionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Predictions to update in case it exists.
     */
    where: PredictionsWhereUniqueInput
    /**
     * In case the Predictions found by the `where` argument doesn't exist, create a new Predictions with this data.
     */
    create: XOR<PredictionsCreateInput, PredictionsUncheckedCreateInput>
    /**
     * In case the Predictions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredictionsUpdateInput, PredictionsUncheckedUpdateInput>
  }

  /**
   * Predictions delete
   */
  export type PredictionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
    /**
     * Filter which Predictions to delete.
     */
    where: PredictionsWhereUniqueInput
  }

  /**
   * Predictions deleteMany
   */
  export type PredictionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Predictions to delete
     */
    where?: PredictionsWhereInput
    /**
     * Limit how many Predictions to delete.
     */
    limit?: number
  }

  /**
   * Predictions.xairesults
   */
  export type Predictions$xairesultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
    where?: XAIWhereInput
    orderBy?: XAIOrderByWithRelationInput | XAIOrderByWithRelationInput[]
    cursor?: XAIWhereUniqueInput
    take?: number
    skip?: number
    distinct?: XAIScalarFieldEnum | XAIScalarFieldEnum[]
  }

  /**
   * Predictions.gradcamresults
   */
  export type Predictions$gradcamresultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
    where?: GradCAMWhereInput
    orderBy?: GradCAMOrderByWithRelationInput | GradCAMOrderByWithRelationInput[]
    cursor?: GradCAMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradCAMScalarFieldEnum | GradCAMScalarFieldEnum[]
  }

  /**
   * Predictions without action
   */
  export type PredictionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Predictions
     */
    select?: PredictionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Predictions
     */
    omit?: PredictionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionsInclude<ExtArgs> | null
  }


  /**
   * Model XAI
   */

  export type AggregateXAI = {
    _count: XAICountAggregateOutputType | null
    _min: XAIMinAggregateOutputType | null
    _max: XAIMaxAggregateOutputType | null
  }

  export type XAIMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.ProcessStatus | null
    predictionId: string | null
  }

  export type XAIMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.ProcessStatus | null
    predictionId: string | null
  }

  export type XAICountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    status: number
    predictionId: number
    _all: number
  }


  export type XAIMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    predictionId?: true
  }

  export type XAIMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    predictionId?: true
  }

  export type XAICountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    predictionId?: true
    _all?: true
  }

  export type XAIAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which XAI to aggregate.
     */
    where?: XAIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XAIS to fetch.
     */
    orderBy?: XAIOrderByWithRelationInput | XAIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: XAIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XAIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XAIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned XAIS
    **/
    _count?: true | XAICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: XAIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: XAIMaxAggregateInputType
  }

  export type GetXAIAggregateType<T extends XAIAggregateArgs> = {
        [P in keyof T & keyof AggregateXAI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateXAI[P]>
      : GetScalarType<T[P], AggregateXAI[P]>
  }




  export type XAIGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: XAIWhereInput
    orderBy?: XAIOrderByWithAggregationInput | XAIOrderByWithAggregationInput[]
    by: XAIScalarFieldEnum[] | XAIScalarFieldEnum
    having?: XAIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: XAICountAggregateInputType | true
    _min?: XAIMinAggregateInputType
    _max?: XAIMaxAggregateInputType
  }

  export type XAIGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.ProcessStatus
    predictionId: string
    _count: XAICountAggregateOutputType | null
    _min: XAIMinAggregateOutputType | null
    _max: XAIMaxAggregateOutputType | null
  }

  type GetXAIGroupByPayload<T extends XAIGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<XAIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof XAIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], XAIGroupByOutputType[P]>
            : GetScalarType<T[P], XAIGroupByOutputType[P]>
        }
      >
    >


  export type XAISelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    predictionId?: boolean
    xairesults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["xAI"]>

  export type XAISelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    predictionId?: boolean
    xairesults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["xAI"]>

  export type XAISelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    predictionId?: boolean
    xairesults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["xAI"]>

  export type XAISelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    predictionId?: boolean
  }

  export type XAIOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "status" | "predictionId", ExtArgs["result"]["xAI"]>
  export type XAIInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    xairesults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }
  export type XAIIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    xairesults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }
  export type XAIIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    xairesults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }

  export type $XAIPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "XAI"
    objects: {
      xairesults: Prisma.$PredictionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.ProcessStatus
      predictionId: string
    }, ExtArgs["result"]["xAI"]>
    composites: {}
  }

  type XAIGetPayload<S extends boolean | null | undefined | XAIDefaultArgs> = $Result.GetResult<Prisma.$XAIPayload, S>

  type XAICountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<XAIFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: XAICountAggregateInputType | true
    }

  export interface XAIDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['XAI'], meta: { name: 'XAI' } }
    /**
     * Find zero or one XAI that matches the filter.
     * @param {XAIFindUniqueArgs} args - Arguments to find a XAI
     * @example
     * // Get one XAI
     * const xAI = await prisma.xAI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends XAIFindUniqueArgs>(args: SelectSubset<T, XAIFindUniqueArgs<ExtArgs>>): Prisma__XAIClient<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one XAI that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {XAIFindUniqueOrThrowArgs} args - Arguments to find a XAI
     * @example
     * // Get one XAI
     * const xAI = await prisma.xAI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends XAIFindUniqueOrThrowArgs>(args: SelectSubset<T, XAIFindUniqueOrThrowArgs<ExtArgs>>): Prisma__XAIClient<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first XAI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XAIFindFirstArgs} args - Arguments to find a XAI
     * @example
     * // Get one XAI
     * const xAI = await prisma.xAI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends XAIFindFirstArgs>(args?: SelectSubset<T, XAIFindFirstArgs<ExtArgs>>): Prisma__XAIClient<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first XAI that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XAIFindFirstOrThrowArgs} args - Arguments to find a XAI
     * @example
     * // Get one XAI
     * const xAI = await prisma.xAI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends XAIFindFirstOrThrowArgs>(args?: SelectSubset<T, XAIFindFirstOrThrowArgs<ExtArgs>>): Prisma__XAIClient<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more XAIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XAIFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all XAIS
     * const xAIS = await prisma.xAI.findMany()
     * 
     * // Get first 10 XAIS
     * const xAIS = await prisma.xAI.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const xAIWithIdOnly = await prisma.xAI.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends XAIFindManyArgs>(args?: SelectSubset<T, XAIFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a XAI.
     * @param {XAICreateArgs} args - Arguments to create a XAI.
     * @example
     * // Create one XAI
     * const XAI = await prisma.xAI.create({
     *   data: {
     *     // ... data to create a XAI
     *   }
     * })
     * 
     */
    create<T extends XAICreateArgs>(args: SelectSubset<T, XAICreateArgs<ExtArgs>>): Prisma__XAIClient<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many XAIS.
     * @param {XAICreateManyArgs} args - Arguments to create many XAIS.
     * @example
     * // Create many XAIS
     * const xAI = await prisma.xAI.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends XAICreateManyArgs>(args?: SelectSubset<T, XAICreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many XAIS and returns the data saved in the database.
     * @param {XAICreateManyAndReturnArgs} args - Arguments to create many XAIS.
     * @example
     * // Create many XAIS
     * const xAI = await prisma.xAI.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many XAIS and only return the `id`
     * const xAIWithIdOnly = await prisma.xAI.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends XAICreateManyAndReturnArgs>(args?: SelectSubset<T, XAICreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a XAI.
     * @param {XAIDeleteArgs} args - Arguments to delete one XAI.
     * @example
     * // Delete one XAI
     * const XAI = await prisma.xAI.delete({
     *   where: {
     *     // ... filter to delete one XAI
     *   }
     * })
     * 
     */
    delete<T extends XAIDeleteArgs>(args: SelectSubset<T, XAIDeleteArgs<ExtArgs>>): Prisma__XAIClient<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one XAI.
     * @param {XAIUpdateArgs} args - Arguments to update one XAI.
     * @example
     * // Update one XAI
     * const xAI = await prisma.xAI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends XAIUpdateArgs>(args: SelectSubset<T, XAIUpdateArgs<ExtArgs>>): Prisma__XAIClient<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more XAIS.
     * @param {XAIDeleteManyArgs} args - Arguments to filter XAIS to delete.
     * @example
     * // Delete a few XAIS
     * const { count } = await prisma.xAI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends XAIDeleteManyArgs>(args?: SelectSubset<T, XAIDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more XAIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XAIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many XAIS
     * const xAI = await prisma.xAI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends XAIUpdateManyArgs>(args: SelectSubset<T, XAIUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more XAIS and returns the data updated in the database.
     * @param {XAIUpdateManyAndReturnArgs} args - Arguments to update many XAIS.
     * @example
     * // Update many XAIS
     * const xAI = await prisma.xAI.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more XAIS and only return the `id`
     * const xAIWithIdOnly = await prisma.xAI.updateManyAndReturn({
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
    updateManyAndReturn<T extends XAIUpdateManyAndReturnArgs>(args: SelectSubset<T, XAIUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one XAI.
     * @param {XAIUpsertArgs} args - Arguments to update or create a XAI.
     * @example
     * // Update or create a XAI
     * const xAI = await prisma.xAI.upsert({
     *   create: {
     *     // ... data to create a XAI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the XAI we want to update
     *   }
     * })
     */
    upsert<T extends XAIUpsertArgs>(args: SelectSubset<T, XAIUpsertArgs<ExtArgs>>): Prisma__XAIClient<$Result.GetResult<Prisma.$XAIPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of XAIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XAICountArgs} args - Arguments to filter XAIS to count.
     * @example
     * // Count the number of XAIS
     * const count = await prisma.xAI.count({
     *   where: {
     *     // ... the filter for the XAIS we want to count
     *   }
     * })
    **/
    count<T extends XAICountArgs>(
      args?: Subset<T, XAICountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], XAICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a XAI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XAIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends XAIAggregateArgs>(args: Subset<T, XAIAggregateArgs>): Prisma.PrismaPromise<GetXAIAggregateType<T>>

    /**
     * Group by XAI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XAIGroupByArgs} args - Group by arguments.
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
      T extends XAIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: XAIGroupByArgs['orderBy'] }
        : { orderBy?: XAIGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, XAIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetXAIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the XAI model
   */
  readonly fields: XAIFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for XAI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__XAIClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    xairesults<T extends PredictionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PredictionsDefaultArgs<ExtArgs>>): Prisma__PredictionsClient<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the XAI model
   */
  interface XAIFieldRefs {
    readonly id: FieldRef<"XAI", 'String'>
    readonly createdAt: FieldRef<"XAI", 'DateTime'>
    readonly updatedAt: FieldRef<"XAI", 'DateTime'>
    readonly status: FieldRef<"XAI", 'ProcessStatus'>
    readonly predictionId: FieldRef<"XAI", 'String'>
  }
    

  // Custom InputTypes
  /**
   * XAI findUnique
   */
  export type XAIFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
    /**
     * Filter, which XAI to fetch.
     */
    where: XAIWhereUniqueInput
  }

  /**
   * XAI findUniqueOrThrow
   */
  export type XAIFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
    /**
     * Filter, which XAI to fetch.
     */
    where: XAIWhereUniqueInput
  }

  /**
   * XAI findFirst
   */
  export type XAIFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
    /**
     * Filter, which XAI to fetch.
     */
    where?: XAIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XAIS to fetch.
     */
    orderBy?: XAIOrderByWithRelationInput | XAIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for XAIS.
     */
    cursor?: XAIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XAIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XAIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of XAIS.
     */
    distinct?: XAIScalarFieldEnum | XAIScalarFieldEnum[]
  }

  /**
   * XAI findFirstOrThrow
   */
  export type XAIFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
    /**
     * Filter, which XAI to fetch.
     */
    where?: XAIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XAIS to fetch.
     */
    orderBy?: XAIOrderByWithRelationInput | XAIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for XAIS.
     */
    cursor?: XAIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XAIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XAIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of XAIS.
     */
    distinct?: XAIScalarFieldEnum | XAIScalarFieldEnum[]
  }

  /**
   * XAI findMany
   */
  export type XAIFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
    /**
     * Filter, which XAIS to fetch.
     */
    where?: XAIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XAIS to fetch.
     */
    orderBy?: XAIOrderByWithRelationInput | XAIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing XAIS.
     */
    cursor?: XAIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XAIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XAIS.
     */
    skip?: number
    distinct?: XAIScalarFieldEnum | XAIScalarFieldEnum[]
  }

  /**
   * XAI create
   */
  export type XAICreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
    /**
     * The data needed to create a XAI.
     */
    data: XOR<XAICreateInput, XAIUncheckedCreateInput>
  }

  /**
   * XAI createMany
   */
  export type XAICreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many XAIS.
     */
    data: XAICreateManyInput | XAICreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * XAI createManyAndReturn
   */
  export type XAICreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * The data used to create many XAIS.
     */
    data: XAICreateManyInput | XAICreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * XAI update
   */
  export type XAIUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
    /**
     * The data needed to update a XAI.
     */
    data: XOR<XAIUpdateInput, XAIUncheckedUpdateInput>
    /**
     * Choose, which XAI to update.
     */
    where: XAIWhereUniqueInput
  }

  /**
   * XAI updateMany
   */
  export type XAIUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update XAIS.
     */
    data: XOR<XAIUpdateManyMutationInput, XAIUncheckedUpdateManyInput>
    /**
     * Filter which XAIS to update
     */
    where?: XAIWhereInput
    /**
     * Limit how many XAIS to update.
     */
    limit?: number
  }

  /**
   * XAI updateManyAndReturn
   */
  export type XAIUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * The data used to update XAIS.
     */
    data: XOR<XAIUpdateManyMutationInput, XAIUncheckedUpdateManyInput>
    /**
     * Filter which XAIS to update
     */
    where?: XAIWhereInput
    /**
     * Limit how many XAIS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * XAI upsert
   */
  export type XAIUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
    /**
     * The filter to search for the XAI to update in case it exists.
     */
    where: XAIWhereUniqueInput
    /**
     * In case the XAI found by the `where` argument doesn't exist, create a new XAI with this data.
     */
    create: XOR<XAICreateInput, XAIUncheckedCreateInput>
    /**
     * In case the XAI was found with the provided `where` argument, update it with this data.
     */
    update: XOR<XAIUpdateInput, XAIUncheckedUpdateInput>
  }

  /**
   * XAI delete
   */
  export type XAIDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
    /**
     * Filter which XAI to delete.
     */
    where: XAIWhereUniqueInput
  }

  /**
   * XAI deleteMany
   */
  export type XAIDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which XAIS to delete
     */
    where?: XAIWhereInput
    /**
     * Limit how many XAIS to delete.
     */
    limit?: number
  }

  /**
   * XAI without action
   */
  export type XAIDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XAI
     */
    select?: XAISelect<ExtArgs> | null
    /**
     * Omit specific fields from the XAI
     */
    omit?: XAIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XAIInclude<ExtArgs> | null
  }


  /**
   * Model GradCAM
   */

  export type AggregateGradCAM = {
    _count: GradCAMCountAggregateOutputType | null
    _min: GradCAMMinAggregateOutputType | null
    _max: GradCAMMaxAggregateOutputType | null
  }

  export type GradCAMMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.ProcessStatus | null
    predictionId: string | null
  }

  export type GradCAMMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.ProcessStatus | null
    predictionId: string | null
  }

  export type GradCAMCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    status: number
    predictionId: number
    _all: number
  }


  export type GradCAMMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    predictionId?: true
  }

  export type GradCAMMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    predictionId?: true
  }

  export type GradCAMCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    predictionId?: true
    _all?: true
  }

  export type GradCAMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradCAM to aggregate.
     */
    where?: GradCAMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradCAMS to fetch.
     */
    orderBy?: GradCAMOrderByWithRelationInput | GradCAMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradCAMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradCAMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradCAMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GradCAMS
    **/
    _count?: true | GradCAMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradCAMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradCAMMaxAggregateInputType
  }

  export type GetGradCAMAggregateType<T extends GradCAMAggregateArgs> = {
        [P in keyof T & keyof AggregateGradCAM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGradCAM[P]>
      : GetScalarType<T[P], AggregateGradCAM[P]>
  }




  export type GradCAMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradCAMWhereInput
    orderBy?: GradCAMOrderByWithAggregationInput | GradCAMOrderByWithAggregationInput[]
    by: GradCAMScalarFieldEnum[] | GradCAMScalarFieldEnum
    having?: GradCAMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradCAMCountAggregateInputType | true
    _min?: GradCAMMinAggregateInputType
    _max?: GradCAMMaxAggregateInputType
  }

  export type GradCAMGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.ProcessStatus
    predictionId: string
    _count: GradCAMCountAggregateOutputType | null
    _min: GradCAMMinAggregateOutputType | null
    _max: GradCAMMaxAggregateOutputType | null
  }

  type GetGradCAMGroupByPayload<T extends GradCAMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradCAMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradCAMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradCAMGroupByOutputType[P]>
            : GetScalarType<T[P], GradCAMGroupByOutputType[P]>
        }
      >
    >


  export type GradCAMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    predictionId?: boolean
    gradcamresults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradCAM"]>

  export type GradCAMSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    predictionId?: boolean
    gradcamresults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradCAM"]>

  export type GradCAMSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    predictionId?: boolean
    gradcamresults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradCAM"]>

  export type GradCAMSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    predictionId?: boolean
  }

  export type GradCAMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "status" | "predictionId", ExtArgs["result"]["gradCAM"]>
  export type GradCAMInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gradcamresults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }
  export type GradCAMIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gradcamresults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }
  export type GradCAMIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gradcamresults?: boolean | PredictionsDefaultArgs<ExtArgs>
  }

  export type $GradCAMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GradCAM"
    objects: {
      gradcamresults: Prisma.$PredictionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.ProcessStatus
      predictionId: string
    }, ExtArgs["result"]["gradCAM"]>
    composites: {}
  }

  type GradCAMGetPayload<S extends boolean | null | undefined | GradCAMDefaultArgs> = $Result.GetResult<Prisma.$GradCAMPayload, S>

  type GradCAMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GradCAMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradCAMCountAggregateInputType | true
    }

  export interface GradCAMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GradCAM'], meta: { name: 'GradCAM' } }
    /**
     * Find zero or one GradCAM that matches the filter.
     * @param {GradCAMFindUniqueArgs} args - Arguments to find a GradCAM
     * @example
     * // Get one GradCAM
     * const gradCAM = await prisma.gradCAM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradCAMFindUniqueArgs>(args: SelectSubset<T, GradCAMFindUniqueArgs<ExtArgs>>): Prisma__GradCAMClient<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GradCAM that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GradCAMFindUniqueOrThrowArgs} args - Arguments to find a GradCAM
     * @example
     * // Get one GradCAM
     * const gradCAM = await prisma.gradCAM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradCAMFindUniqueOrThrowArgs>(args: SelectSubset<T, GradCAMFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradCAMClient<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradCAM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradCAMFindFirstArgs} args - Arguments to find a GradCAM
     * @example
     * // Get one GradCAM
     * const gradCAM = await prisma.gradCAM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradCAMFindFirstArgs>(args?: SelectSubset<T, GradCAMFindFirstArgs<ExtArgs>>): Prisma__GradCAMClient<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradCAM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradCAMFindFirstOrThrowArgs} args - Arguments to find a GradCAM
     * @example
     * // Get one GradCAM
     * const gradCAM = await prisma.gradCAM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradCAMFindFirstOrThrowArgs>(args?: SelectSubset<T, GradCAMFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradCAMClient<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GradCAMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradCAMFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GradCAMS
     * const gradCAMS = await prisma.gradCAM.findMany()
     * 
     * // Get first 10 GradCAMS
     * const gradCAMS = await prisma.gradCAM.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradCAMWithIdOnly = await prisma.gradCAM.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradCAMFindManyArgs>(args?: SelectSubset<T, GradCAMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GradCAM.
     * @param {GradCAMCreateArgs} args - Arguments to create a GradCAM.
     * @example
     * // Create one GradCAM
     * const GradCAM = await prisma.gradCAM.create({
     *   data: {
     *     // ... data to create a GradCAM
     *   }
     * })
     * 
     */
    create<T extends GradCAMCreateArgs>(args: SelectSubset<T, GradCAMCreateArgs<ExtArgs>>): Prisma__GradCAMClient<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GradCAMS.
     * @param {GradCAMCreateManyArgs} args - Arguments to create many GradCAMS.
     * @example
     * // Create many GradCAMS
     * const gradCAM = await prisma.gradCAM.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradCAMCreateManyArgs>(args?: SelectSubset<T, GradCAMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GradCAMS and returns the data saved in the database.
     * @param {GradCAMCreateManyAndReturnArgs} args - Arguments to create many GradCAMS.
     * @example
     * // Create many GradCAMS
     * const gradCAM = await prisma.gradCAM.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GradCAMS and only return the `id`
     * const gradCAMWithIdOnly = await prisma.gradCAM.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GradCAMCreateManyAndReturnArgs>(args?: SelectSubset<T, GradCAMCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GradCAM.
     * @param {GradCAMDeleteArgs} args - Arguments to delete one GradCAM.
     * @example
     * // Delete one GradCAM
     * const GradCAM = await prisma.gradCAM.delete({
     *   where: {
     *     // ... filter to delete one GradCAM
     *   }
     * })
     * 
     */
    delete<T extends GradCAMDeleteArgs>(args: SelectSubset<T, GradCAMDeleteArgs<ExtArgs>>): Prisma__GradCAMClient<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GradCAM.
     * @param {GradCAMUpdateArgs} args - Arguments to update one GradCAM.
     * @example
     * // Update one GradCAM
     * const gradCAM = await prisma.gradCAM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradCAMUpdateArgs>(args: SelectSubset<T, GradCAMUpdateArgs<ExtArgs>>): Prisma__GradCAMClient<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GradCAMS.
     * @param {GradCAMDeleteManyArgs} args - Arguments to filter GradCAMS to delete.
     * @example
     * // Delete a few GradCAMS
     * const { count } = await prisma.gradCAM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradCAMDeleteManyArgs>(args?: SelectSubset<T, GradCAMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GradCAMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradCAMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GradCAMS
     * const gradCAM = await prisma.gradCAM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradCAMUpdateManyArgs>(args: SelectSubset<T, GradCAMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GradCAMS and returns the data updated in the database.
     * @param {GradCAMUpdateManyAndReturnArgs} args - Arguments to update many GradCAMS.
     * @example
     * // Update many GradCAMS
     * const gradCAM = await prisma.gradCAM.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GradCAMS and only return the `id`
     * const gradCAMWithIdOnly = await prisma.gradCAM.updateManyAndReturn({
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
    updateManyAndReturn<T extends GradCAMUpdateManyAndReturnArgs>(args: SelectSubset<T, GradCAMUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GradCAM.
     * @param {GradCAMUpsertArgs} args - Arguments to update or create a GradCAM.
     * @example
     * // Update or create a GradCAM
     * const gradCAM = await prisma.gradCAM.upsert({
     *   create: {
     *     // ... data to create a GradCAM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GradCAM we want to update
     *   }
     * })
     */
    upsert<T extends GradCAMUpsertArgs>(args: SelectSubset<T, GradCAMUpsertArgs<ExtArgs>>): Prisma__GradCAMClient<$Result.GetResult<Prisma.$GradCAMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GradCAMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradCAMCountArgs} args - Arguments to filter GradCAMS to count.
     * @example
     * // Count the number of GradCAMS
     * const count = await prisma.gradCAM.count({
     *   where: {
     *     // ... the filter for the GradCAMS we want to count
     *   }
     * })
    **/
    count<T extends GradCAMCountArgs>(
      args?: Subset<T, GradCAMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradCAMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GradCAM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradCAMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradCAMAggregateArgs>(args: Subset<T, GradCAMAggregateArgs>): Prisma.PrismaPromise<GetGradCAMAggregateType<T>>

    /**
     * Group by GradCAM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradCAMGroupByArgs} args - Group by arguments.
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
      T extends GradCAMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradCAMGroupByArgs['orderBy'] }
        : { orderBy?: GradCAMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GradCAMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradCAMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GradCAM model
   */
  readonly fields: GradCAMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GradCAM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradCAMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gradcamresults<T extends PredictionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PredictionsDefaultArgs<ExtArgs>>): Prisma__PredictionsClient<$Result.GetResult<Prisma.$PredictionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GradCAM model
   */
  interface GradCAMFieldRefs {
    readonly id: FieldRef<"GradCAM", 'String'>
    readonly createdAt: FieldRef<"GradCAM", 'DateTime'>
    readonly updatedAt: FieldRef<"GradCAM", 'DateTime'>
    readonly status: FieldRef<"GradCAM", 'ProcessStatus'>
    readonly predictionId: FieldRef<"GradCAM", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GradCAM findUnique
   */
  export type GradCAMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
    /**
     * Filter, which GradCAM to fetch.
     */
    where: GradCAMWhereUniqueInput
  }

  /**
   * GradCAM findUniqueOrThrow
   */
  export type GradCAMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
    /**
     * Filter, which GradCAM to fetch.
     */
    where: GradCAMWhereUniqueInput
  }

  /**
   * GradCAM findFirst
   */
  export type GradCAMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
    /**
     * Filter, which GradCAM to fetch.
     */
    where?: GradCAMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradCAMS to fetch.
     */
    orderBy?: GradCAMOrderByWithRelationInput | GradCAMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradCAMS.
     */
    cursor?: GradCAMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradCAMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradCAMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradCAMS.
     */
    distinct?: GradCAMScalarFieldEnum | GradCAMScalarFieldEnum[]
  }

  /**
   * GradCAM findFirstOrThrow
   */
  export type GradCAMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
    /**
     * Filter, which GradCAM to fetch.
     */
    where?: GradCAMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradCAMS to fetch.
     */
    orderBy?: GradCAMOrderByWithRelationInput | GradCAMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradCAMS.
     */
    cursor?: GradCAMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradCAMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradCAMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradCAMS.
     */
    distinct?: GradCAMScalarFieldEnum | GradCAMScalarFieldEnum[]
  }

  /**
   * GradCAM findMany
   */
  export type GradCAMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
    /**
     * Filter, which GradCAMS to fetch.
     */
    where?: GradCAMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradCAMS to fetch.
     */
    orderBy?: GradCAMOrderByWithRelationInput | GradCAMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GradCAMS.
     */
    cursor?: GradCAMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradCAMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradCAMS.
     */
    skip?: number
    distinct?: GradCAMScalarFieldEnum | GradCAMScalarFieldEnum[]
  }

  /**
   * GradCAM create
   */
  export type GradCAMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
    /**
     * The data needed to create a GradCAM.
     */
    data: XOR<GradCAMCreateInput, GradCAMUncheckedCreateInput>
  }

  /**
   * GradCAM createMany
   */
  export type GradCAMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GradCAMS.
     */
    data: GradCAMCreateManyInput | GradCAMCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GradCAM createManyAndReturn
   */
  export type GradCAMCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * The data used to create many GradCAMS.
     */
    data: GradCAMCreateManyInput | GradCAMCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GradCAM update
   */
  export type GradCAMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
    /**
     * The data needed to update a GradCAM.
     */
    data: XOR<GradCAMUpdateInput, GradCAMUncheckedUpdateInput>
    /**
     * Choose, which GradCAM to update.
     */
    where: GradCAMWhereUniqueInput
  }

  /**
   * GradCAM updateMany
   */
  export type GradCAMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GradCAMS.
     */
    data: XOR<GradCAMUpdateManyMutationInput, GradCAMUncheckedUpdateManyInput>
    /**
     * Filter which GradCAMS to update
     */
    where?: GradCAMWhereInput
    /**
     * Limit how many GradCAMS to update.
     */
    limit?: number
  }

  /**
   * GradCAM updateManyAndReturn
   */
  export type GradCAMUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * The data used to update GradCAMS.
     */
    data: XOR<GradCAMUpdateManyMutationInput, GradCAMUncheckedUpdateManyInput>
    /**
     * Filter which GradCAMS to update
     */
    where?: GradCAMWhereInput
    /**
     * Limit how many GradCAMS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GradCAM upsert
   */
  export type GradCAMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
    /**
     * The filter to search for the GradCAM to update in case it exists.
     */
    where: GradCAMWhereUniqueInput
    /**
     * In case the GradCAM found by the `where` argument doesn't exist, create a new GradCAM with this data.
     */
    create: XOR<GradCAMCreateInput, GradCAMUncheckedCreateInput>
    /**
     * In case the GradCAM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradCAMUpdateInput, GradCAMUncheckedUpdateInput>
  }

  /**
   * GradCAM delete
   */
  export type GradCAMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
    /**
     * Filter which GradCAM to delete.
     */
    where: GradCAMWhereUniqueInput
  }

  /**
   * GradCAM deleteMany
   */
  export type GradCAMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradCAMS to delete
     */
    where?: GradCAMWhereInput
    /**
     * Limit how many GradCAMS to delete.
     */
    limit?: number
  }

  /**
   * GradCAM without action
   */
  export type GradCAMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradCAM
     */
    select?: GradCAMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradCAM
     */
    omit?: GradCAMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradCAMInclude<ExtArgs> | null
  }


  /**
   * Model Processes
   */

  export type AggregateProcesses = {
    _count: ProcessesCountAggregateOutputType | null
    _min: ProcessesMinAggregateOutputType | null
    _max: ProcessesMaxAggregateOutputType | null
  }

  export type ProcessesMinAggregateOutputType = {
    id: string | null
    status: $Enums.ProcessStatus | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcessesMaxAggregateOutputType = {
    id: string | null
    status: $Enums.ProcessStatus | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcessesCountAggregateOutputType = {
    id: number
    status: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProcessesMinAggregateInputType = {
    id?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcessesMaxAggregateInputType = {
    id?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcessesCountAggregateInputType = {
    id?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProcessesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processes to aggregate.
     */
    where?: ProcessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessesOrderByWithRelationInput | ProcessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Processes
    **/
    _count?: true | ProcessesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessesMaxAggregateInputType
  }

  export type GetProcessesAggregateType<T extends ProcessesAggregateArgs> = {
        [P in keyof T & keyof AggregateProcesses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcesses[P]>
      : GetScalarType<T[P], AggregateProcesses[P]>
  }




  export type ProcessesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessesWhereInput
    orderBy?: ProcessesOrderByWithAggregationInput | ProcessesOrderByWithAggregationInput[]
    by: ProcessesScalarFieldEnum[] | ProcessesScalarFieldEnum
    having?: ProcessesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessesCountAggregateInputType | true
    _min?: ProcessesMinAggregateInputType
    _max?: ProcessesMaxAggregateInputType
  }

  export type ProcessesGroupByOutputType = {
    id: string
    status: $Enums.ProcessStatus
    type: string
    createdAt: Date
    updatedAt: Date
    _count: ProcessesCountAggregateOutputType | null
    _min: ProcessesMinAggregateOutputType | null
    _max: ProcessesMaxAggregateOutputType | null
  }

  type GetProcessesGroupByPayload<T extends ProcessesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessesGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessesGroupByOutputType[P]>
        }
      >
    >


  export type ProcessesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["processes"]>

  export type ProcessesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["processes"]>

  export type ProcessesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["processes"]>

  export type ProcessesSelectScalar = {
    id?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProcessesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["processes"]>

  export type $ProcessesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Processes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.ProcessStatus
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["processes"]>
    composites: {}
  }

  type ProcessesGetPayload<S extends boolean | null | undefined | ProcessesDefaultArgs> = $Result.GetResult<Prisma.$ProcessesPayload, S>

  type ProcessesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessesCountAggregateInputType | true
    }

  export interface ProcessesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Processes'], meta: { name: 'Processes' } }
    /**
     * Find zero or one Processes that matches the filter.
     * @param {ProcessesFindUniqueArgs} args - Arguments to find a Processes
     * @example
     * // Get one Processes
     * const processes = await prisma.processes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessesFindUniqueArgs>(args: SelectSubset<T, ProcessesFindUniqueArgs<ExtArgs>>): Prisma__ProcessesClient<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Processes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessesFindUniqueOrThrowArgs} args - Arguments to find a Processes
     * @example
     * // Get one Processes
     * const processes = await prisma.processes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessesClient<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Processes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessesFindFirstArgs} args - Arguments to find a Processes
     * @example
     * // Get one Processes
     * const processes = await prisma.processes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessesFindFirstArgs>(args?: SelectSubset<T, ProcessesFindFirstArgs<ExtArgs>>): Prisma__ProcessesClient<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Processes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessesFindFirstOrThrowArgs} args - Arguments to find a Processes
     * @example
     * // Get one Processes
     * const processes = await prisma.processes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessesClient<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Processes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Processes
     * const processes = await prisma.processes.findMany()
     * 
     * // Get first 10 Processes
     * const processes = await prisma.processes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processesWithIdOnly = await prisma.processes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessesFindManyArgs>(args?: SelectSubset<T, ProcessesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Processes.
     * @param {ProcessesCreateArgs} args - Arguments to create a Processes.
     * @example
     * // Create one Processes
     * const Processes = await prisma.processes.create({
     *   data: {
     *     // ... data to create a Processes
     *   }
     * })
     * 
     */
    create<T extends ProcessesCreateArgs>(args: SelectSubset<T, ProcessesCreateArgs<ExtArgs>>): Prisma__ProcessesClient<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Processes.
     * @param {ProcessesCreateManyArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const processes = await prisma.processes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessesCreateManyArgs>(args?: SelectSubset<T, ProcessesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Processes and returns the data saved in the database.
     * @param {ProcessesCreateManyAndReturnArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const processes = await prisma.processes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Processes and only return the `id`
     * const processesWithIdOnly = await prisma.processes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Processes.
     * @param {ProcessesDeleteArgs} args - Arguments to delete one Processes.
     * @example
     * // Delete one Processes
     * const Processes = await prisma.processes.delete({
     *   where: {
     *     // ... filter to delete one Processes
     *   }
     * })
     * 
     */
    delete<T extends ProcessesDeleteArgs>(args: SelectSubset<T, ProcessesDeleteArgs<ExtArgs>>): Prisma__ProcessesClient<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Processes.
     * @param {ProcessesUpdateArgs} args - Arguments to update one Processes.
     * @example
     * // Update one Processes
     * const processes = await prisma.processes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessesUpdateArgs>(args: SelectSubset<T, ProcessesUpdateArgs<ExtArgs>>): Prisma__ProcessesClient<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Processes.
     * @param {ProcessesDeleteManyArgs} args - Arguments to filter Processes to delete.
     * @example
     * // Delete a few Processes
     * const { count } = await prisma.processes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessesDeleteManyArgs>(args?: SelectSubset<T, ProcessesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Processes
     * const processes = await prisma.processes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessesUpdateManyArgs>(args: SelectSubset<T, ProcessesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes and returns the data updated in the database.
     * @param {ProcessesUpdateManyAndReturnArgs} args - Arguments to update many Processes.
     * @example
     * // Update many Processes
     * const processes = await prisma.processes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Processes and only return the `id`
     * const processesWithIdOnly = await prisma.processes.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Processes.
     * @param {ProcessesUpsertArgs} args - Arguments to update or create a Processes.
     * @example
     * // Update or create a Processes
     * const processes = await prisma.processes.upsert({
     *   create: {
     *     // ... data to create a Processes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Processes we want to update
     *   }
     * })
     */
    upsert<T extends ProcessesUpsertArgs>(args: SelectSubset<T, ProcessesUpsertArgs<ExtArgs>>): Prisma__ProcessesClient<$Result.GetResult<Prisma.$ProcessesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessesCountArgs} args - Arguments to filter Processes to count.
     * @example
     * // Count the number of Processes
     * const count = await prisma.processes.count({
     *   where: {
     *     // ... the filter for the Processes we want to count
     *   }
     * })
    **/
    count<T extends ProcessesCountArgs>(
      args?: Subset<T, ProcessesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessesAggregateArgs>(args: Subset<T, ProcessesAggregateArgs>): Prisma.PrismaPromise<GetProcessesAggregateType<T>>

    /**
     * Group by Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessesGroupByArgs} args - Group by arguments.
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
      T extends ProcessesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessesGroupByArgs['orderBy'] }
        : { orderBy?: ProcessesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Processes model
   */
  readonly fields: ProcessesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Processes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Processes model
   */
  interface ProcessesFieldRefs {
    readonly id: FieldRef<"Processes", 'String'>
    readonly status: FieldRef<"Processes", 'ProcessStatus'>
    readonly type: FieldRef<"Processes", 'String'>
    readonly createdAt: FieldRef<"Processes", 'DateTime'>
    readonly updatedAt: FieldRef<"Processes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Processes findUnique
   */
  export type ProcessesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * Filter, which Processes to fetch.
     */
    where: ProcessesWhereUniqueInput
  }

  /**
   * Processes findUniqueOrThrow
   */
  export type ProcessesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * Filter, which Processes to fetch.
     */
    where: ProcessesWhereUniqueInput
  }

  /**
   * Processes findFirst
   */
  export type ProcessesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * Filter, which Processes to fetch.
     */
    where?: ProcessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessesOrderByWithRelationInput | ProcessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processes.
     */
    cursor?: ProcessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processes.
     */
    distinct?: ProcessesScalarFieldEnum | ProcessesScalarFieldEnum[]
  }

  /**
   * Processes findFirstOrThrow
   */
  export type ProcessesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * Filter, which Processes to fetch.
     */
    where?: ProcessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessesOrderByWithRelationInput | ProcessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processes.
     */
    cursor?: ProcessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processes.
     */
    distinct?: ProcessesScalarFieldEnum | ProcessesScalarFieldEnum[]
  }

  /**
   * Processes findMany
   */
  export type ProcessesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * Filter, which Processes to fetch.
     */
    where?: ProcessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessesOrderByWithRelationInput | ProcessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Processes.
     */
    cursor?: ProcessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    distinct?: ProcessesScalarFieldEnum | ProcessesScalarFieldEnum[]
  }

  /**
   * Processes create
   */
  export type ProcessesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * The data needed to create a Processes.
     */
    data: XOR<ProcessesCreateInput, ProcessesUncheckedCreateInput>
  }

  /**
   * Processes createMany
   */
  export type ProcessesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Processes.
     */
    data: ProcessesCreateManyInput | ProcessesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Processes createManyAndReturn
   */
  export type ProcessesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * The data used to create many Processes.
     */
    data: ProcessesCreateManyInput | ProcessesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Processes update
   */
  export type ProcessesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * The data needed to update a Processes.
     */
    data: XOR<ProcessesUpdateInput, ProcessesUncheckedUpdateInput>
    /**
     * Choose, which Processes to update.
     */
    where: ProcessesWhereUniqueInput
  }

  /**
   * Processes updateMany
   */
  export type ProcessesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Processes.
     */
    data: XOR<ProcessesUpdateManyMutationInput, ProcessesUncheckedUpdateManyInput>
    /**
     * Filter which Processes to update
     */
    where?: ProcessesWhereInput
    /**
     * Limit how many Processes to update.
     */
    limit?: number
  }

  /**
   * Processes updateManyAndReturn
   */
  export type ProcessesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * The data used to update Processes.
     */
    data: XOR<ProcessesUpdateManyMutationInput, ProcessesUncheckedUpdateManyInput>
    /**
     * Filter which Processes to update
     */
    where?: ProcessesWhereInput
    /**
     * Limit how many Processes to update.
     */
    limit?: number
  }

  /**
   * Processes upsert
   */
  export type ProcessesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * The filter to search for the Processes to update in case it exists.
     */
    where: ProcessesWhereUniqueInput
    /**
     * In case the Processes found by the `where` argument doesn't exist, create a new Processes with this data.
     */
    create: XOR<ProcessesCreateInput, ProcessesUncheckedCreateInput>
    /**
     * In case the Processes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessesUpdateInput, ProcessesUncheckedUpdateInput>
  }

  /**
   * Processes delete
   */
  export type ProcessesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
    /**
     * Filter which Processes to delete.
     */
    where: ProcessesWhereUniqueInput
  }

  /**
   * Processes deleteMany
   */
  export type ProcessesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processes to delete
     */
    where?: ProcessesWhereInput
    /**
     * Limit how many Processes to delete.
     */
    limit?: number
  }

  /**
   * Processes without action
   */
  export type ProcessesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Processes
     */
    select?: ProcessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Processes
     */
    omit?: ProcessesOmit<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: string | null
    theme: string | null
    language: $Enums.LANGUAGEOPTIONS | null
    ownerId: string | null
    preferredBasicModel: string | null
    preferredTransformerModel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: string | null
    theme: string | null
    language: $Enums.LANGUAGEOPTIONS | null
    ownerId: string | null
    preferredBasicModel: string | null
    preferredTransformerModel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    theme: number
    language: number
    ownerId: number
    preferredBasicModel: number
    preferredTransformerModel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSettingsMinAggregateInputType = {
    id?: true
    theme?: true
    language?: true
    ownerId?: true
    preferredBasicModel?: true
    preferredTransformerModel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    theme?: true
    language?: true
    ownerId?: true
    preferredBasicModel?: true
    preferredTransformerModel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    theme?: true
    language?: true
    ownerId?: true
    preferredBasicModel?: true
    preferredTransformerModel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: string
    theme: string
    language: $Enums.LANGUAGEOPTIONS
    ownerId: string
    preferredBasicModel: string
    preferredTransformerModel: string
    createdAt: Date
    updatedAt: Date
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    language?: boolean
    ownerId?: boolean
    preferredBasicModel?: boolean
    preferredTransformerModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    language?: boolean
    ownerId?: boolean
    preferredBasicModel?: boolean
    preferredTransformerModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    language?: boolean
    ownerId?: boolean
    preferredBasicModel?: boolean
    preferredTransformerModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    theme?: boolean
    language?: boolean
    ownerId?: boolean
    preferredBasicModel?: boolean
    preferredTransformerModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "theme" | "language" | "ownerId" | "preferredBasicModel" | "preferredTransformerModel" | "createdAt" | "updatedAt", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      theme: string
      language: $Enums.LANGUAGEOPTIONS
      ownerId: string
      preferredBasicModel: string
      preferredTransformerModel: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSettings model
   */
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'String'>
    readonly theme: FieldRef<"UserSettings", 'String'>
    readonly language: FieldRef<"UserSettings", 'LANGUAGEOPTIONS'>
    readonly ownerId: FieldRef<"UserSettings", 'String'>
    readonly preferredBasicModel: FieldRef<"UserSettings", 'String'>
    readonly preferredTransformerModel: FieldRef<"UserSettings", 'String'>
    readonly createdAt: FieldRef<"UserSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ModelsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelsScalarFieldEnum = (typeof ModelsScalarFieldEnum)[keyof typeof ModelsScalarFieldEnum]


  export const PredictionsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    modelId: 'modelId',
    status: 'status',
    ownerId: 'ownerId'
  };

  export type PredictionsScalarFieldEnum = (typeof PredictionsScalarFieldEnum)[keyof typeof PredictionsScalarFieldEnum]


  export const XAIScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    predictionId: 'predictionId'
  };

  export type XAIScalarFieldEnum = (typeof XAIScalarFieldEnum)[keyof typeof XAIScalarFieldEnum]


  export const GradCAMScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    predictionId: 'predictionId'
  };

  export type GradCAMScalarFieldEnum = (typeof GradCAMScalarFieldEnum)[keyof typeof GradCAMScalarFieldEnum]


  export const ProcessesScalarFieldEnum: {
    id: 'id',
    status: 'status',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProcessesScalarFieldEnum = (typeof ProcessesScalarFieldEnum)[keyof typeof ProcessesScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    theme: 'theme',
    language: 'language',
    ownerId: 'ownerId',
    preferredBasicModel: 'preferredBasicModel',
    preferredTransformerModel: 'preferredTransformerModel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


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
   * Reference to a field of type 'ProcessStatus'
   */
  export type EnumProcessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessStatus'>
    


  /**
   * Reference to a field of type 'ProcessStatus[]'
   */
  export type ListEnumProcessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessStatus[]'>
    


  /**
   * Reference to a field of type 'LANGUAGEOPTIONS'
   */
  export type EnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LANGUAGEOPTIONS'>
    


  /**
   * Reference to a field of type 'LANGUAGEOPTIONS[]'
   */
  export type ListEnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LANGUAGEOPTIONS[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    predictions?: PredictionsListRelationFilter
    userSettings?: UserSettingsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    predictions?: PredictionsOrderByRelationAggregateInput
    userSettings?: UserSettingsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    predictions?: PredictionsListRelationFilter
    userSettings?: UserSettingsListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
  }

  export type ModelsWhereInput = {
    AND?: ModelsWhereInput | ModelsWhereInput[]
    OR?: ModelsWhereInput[]
    NOT?: ModelsWhereInput | ModelsWhereInput[]
    id?: UuidFilter<"Models"> | string
    name?: StringFilter<"Models"> | string
    version?: StringFilter<"Models"> | string
    createdAt?: DateTimeFilter<"Models"> | Date | string
    updatedAt?: DateTimeFilter<"Models"> | Date | string
    model?: PredictionsListRelationFilter
  }

  export type ModelsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    model?: PredictionsOrderByRelationAggregateInput
  }

  export type ModelsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_version?: ModelsNameVersionCompoundUniqueInput
    AND?: ModelsWhereInput | ModelsWhereInput[]
    OR?: ModelsWhereInput[]
    NOT?: ModelsWhereInput | ModelsWhereInput[]
    name?: StringFilter<"Models"> | string
    version?: StringFilter<"Models"> | string
    createdAt?: DateTimeFilter<"Models"> | Date | string
    updatedAt?: DateTimeFilter<"Models"> | Date | string
    model?: PredictionsListRelationFilter
  }, "id" | "name_version">

  export type ModelsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelsCountOrderByAggregateInput
    _max?: ModelsMaxOrderByAggregateInput
    _min?: ModelsMinOrderByAggregateInput
  }

  export type ModelsScalarWhereWithAggregatesInput = {
    AND?: ModelsScalarWhereWithAggregatesInput | ModelsScalarWhereWithAggregatesInput[]
    OR?: ModelsScalarWhereWithAggregatesInput[]
    NOT?: ModelsScalarWhereWithAggregatesInput | ModelsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Models"> | string
    name?: StringWithAggregatesFilter<"Models"> | string
    version?: StringWithAggregatesFilter<"Models"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Models"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Models"> | Date | string
  }

  export type PredictionsWhereInput = {
    AND?: PredictionsWhereInput | PredictionsWhereInput[]
    OR?: PredictionsWhereInput[]
    NOT?: PredictionsWhereInput | PredictionsWhereInput[]
    id?: UuidFilter<"Predictions"> | string
    createdAt?: DateTimeFilter<"Predictions"> | Date | string
    updatedAt?: DateTimeFilter<"Predictions"> | Date | string
    modelId?: UuidFilter<"Predictions"> | string
    status?: EnumProcessStatusFilter<"Predictions"> | $Enums.ProcessStatus
    ownerId?: UuidFilter<"Predictions"> | string
    xairesults?: XAIListRelationFilter
    gradcamresults?: GradCAMListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    model?: XOR<ModelsScalarRelationFilter, ModelsWhereInput>
  }

  export type PredictionsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelId?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    xairesults?: XAIOrderByRelationAggregateInput
    gradcamresults?: GradCAMOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    model?: ModelsOrderByWithRelationInput
  }

  export type PredictionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PredictionsWhereInput | PredictionsWhereInput[]
    OR?: PredictionsWhereInput[]
    NOT?: PredictionsWhereInput | PredictionsWhereInput[]
    createdAt?: DateTimeFilter<"Predictions"> | Date | string
    updatedAt?: DateTimeFilter<"Predictions"> | Date | string
    modelId?: UuidFilter<"Predictions"> | string
    status?: EnumProcessStatusFilter<"Predictions"> | $Enums.ProcessStatus
    ownerId?: UuidFilter<"Predictions"> | string
    xairesults?: XAIListRelationFilter
    gradcamresults?: GradCAMListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    model?: XOR<ModelsScalarRelationFilter, ModelsWhereInput>
  }, "id">

  export type PredictionsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelId?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    _count?: PredictionsCountOrderByAggregateInput
    _max?: PredictionsMaxOrderByAggregateInput
    _min?: PredictionsMinOrderByAggregateInput
  }

  export type PredictionsScalarWhereWithAggregatesInput = {
    AND?: PredictionsScalarWhereWithAggregatesInput | PredictionsScalarWhereWithAggregatesInput[]
    OR?: PredictionsScalarWhereWithAggregatesInput[]
    NOT?: PredictionsScalarWhereWithAggregatesInput | PredictionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Predictions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Predictions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Predictions"> | Date | string
    modelId?: UuidWithAggregatesFilter<"Predictions"> | string
    status?: EnumProcessStatusWithAggregatesFilter<"Predictions"> | $Enums.ProcessStatus
    ownerId?: UuidWithAggregatesFilter<"Predictions"> | string
  }

  export type XAIWhereInput = {
    AND?: XAIWhereInput | XAIWhereInput[]
    OR?: XAIWhereInput[]
    NOT?: XAIWhereInput | XAIWhereInput[]
    id?: UuidFilter<"XAI"> | string
    createdAt?: DateTimeFilter<"XAI"> | Date | string
    updatedAt?: DateTimeFilter<"XAI"> | Date | string
    status?: EnumProcessStatusFilter<"XAI"> | $Enums.ProcessStatus
    predictionId?: UuidFilter<"XAI"> | string
    xairesults?: XOR<PredictionsScalarRelationFilter, PredictionsWhereInput>
  }

  export type XAIOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    predictionId?: SortOrder
    xairesults?: PredictionsOrderByWithRelationInput
  }

  export type XAIWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: XAIWhereInput | XAIWhereInput[]
    OR?: XAIWhereInput[]
    NOT?: XAIWhereInput | XAIWhereInput[]
    createdAt?: DateTimeFilter<"XAI"> | Date | string
    updatedAt?: DateTimeFilter<"XAI"> | Date | string
    status?: EnumProcessStatusFilter<"XAI"> | $Enums.ProcessStatus
    predictionId?: UuidFilter<"XAI"> | string
    xairesults?: XOR<PredictionsScalarRelationFilter, PredictionsWhereInput>
  }, "id">

  export type XAIOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    predictionId?: SortOrder
    _count?: XAICountOrderByAggregateInput
    _max?: XAIMaxOrderByAggregateInput
    _min?: XAIMinOrderByAggregateInput
  }

  export type XAIScalarWhereWithAggregatesInput = {
    AND?: XAIScalarWhereWithAggregatesInput | XAIScalarWhereWithAggregatesInput[]
    OR?: XAIScalarWhereWithAggregatesInput[]
    NOT?: XAIScalarWhereWithAggregatesInput | XAIScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"XAI"> | string
    createdAt?: DateTimeWithAggregatesFilter<"XAI"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"XAI"> | Date | string
    status?: EnumProcessStatusWithAggregatesFilter<"XAI"> | $Enums.ProcessStatus
    predictionId?: UuidWithAggregatesFilter<"XAI"> | string
  }

  export type GradCAMWhereInput = {
    AND?: GradCAMWhereInput | GradCAMWhereInput[]
    OR?: GradCAMWhereInput[]
    NOT?: GradCAMWhereInput | GradCAMWhereInput[]
    id?: UuidFilter<"GradCAM"> | string
    createdAt?: DateTimeFilter<"GradCAM"> | Date | string
    updatedAt?: DateTimeFilter<"GradCAM"> | Date | string
    status?: EnumProcessStatusFilter<"GradCAM"> | $Enums.ProcessStatus
    predictionId?: UuidFilter<"GradCAM"> | string
    gradcamresults?: XOR<PredictionsScalarRelationFilter, PredictionsWhereInput>
  }

  export type GradCAMOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    predictionId?: SortOrder
    gradcamresults?: PredictionsOrderByWithRelationInput
  }

  export type GradCAMWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GradCAMWhereInput | GradCAMWhereInput[]
    OR?: GradCAMWhereInput[]
    NOT?: GradCAMWhereInput | GradCAMWhereInput[]
    createdAt?: DateTimeFilter<"GradCAM"> | Date | string
    updatedAt?: DateTimeFilter<"GradCAM"> | Date | string
    status?: EnumProcessStatusFilter<"GradCAM"> | $Enums.ProcessStatus
    predictionId?: UuidFilter<"GradCAM"> | string
    gradcamresults?: XOR<PredictionsScalarRelationFilter, PredictionsWhereInput>
  }, "id">

  export type GradCAMOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    predictionId?: SortOrder
    _count?: GradCAMCountOrderByAggregateInput
    _max?: GradCAMMaxOrderByAggregateInput
    _min?: GradCAMMinOrderByAggregateInput
  }

  export type GradCAMScalarWhereWithAggregatesInput = {
    AND?: GradCAMScalarWhereWithAggregatesInput | GradCAMScalarWhereWithAggregatesInput[]
    OR?: GradCAMScalarWhereWithAggregatesInput[]
    NOT?: GradCAMScalarWhereWithAggregatesInput | GradCAMScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GradCAM"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GradCAM"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GradCAM"> | Date | string
    status?: EnumProcessStatusWithAggregatesFilter<"GradCAM"> | $Enums.ProcessStatus
    predictionId?: UuidWithAggregatesFilter<"GradCAM"> | string
  }

  export type ProcessesWhereInput = {
    AND?: ProcessesWhereInput | ProcessesWhereInput[]
    OR?: ProcessesWhereInput[]
    NOT?: ProcessesWhereInput | ProcessesWhereInput[]
    id?: UuidFilter<"Processes"> | string
    status?: EnumProcessStatusFilter<"Processes"> | $Enums.ProcessStatus
    type?: StringFilter<"Processes"> | string
    createdAt?: DateTimeFilter<"Processes"> | Date | string
    updatedAt?: DateTimeFilter<"Processes"> | Date | string
  }

  export type ProcessesOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcessesWhereInput | ProcessesWhereInput[]
    OR?: ProcessesWhereInput[]
    NOT?: ProcessesWhereInput | ProcessesWhereInput[]
    status?: EnumProcessStatusFilter<"Processes"> | $Enums.ProcessStatus
    type?: StringFilter<"Processes"> | string
    createdAt?: DateTimeFilter<"Processes"> | Date | string
    updatedAt?: DateTimeFilter<"Processes"> | Date | string
  }, "id">

  export type ProcessesOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProcessesCountOrderByAggregateInput
    _max?: ProcessesMaxOrderByAggregateInput
    _min?: ProcessesMinOrderByAggregateInput
  }

  export type ProcessesScalarWhereWithAggregatesInput = {
    AND?: ProcessesScalarWhereWithAggregatesInput | ProcessesScalarWhereWithAggregatesInput[]
    OR?: ProcessesScalarWhereWithAggregatesInput[]
    NOT?: ProcessesScalarWhereWithAggregatesInput | ProcessesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Processes"> | string
    status?: EnumProcessStatusWithAggregatesFilter<"Processes"> | $Enums.ProcessStatus
    type?: StringWithAggregatesFilter<"Processes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Processes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Processes"> | Date | string
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: UuidFilter<"UserSettings"> | string
    theme?: StringFilter<"UserSettings"> | string
    language?: EnumLANGUAGEOPTIONSFilter<"UserSettings"> | $Enums.LANGUAGEOPTIONS
    ownerId?: UuidFilter<"UserSettings"> | string
    preferredBasicModel?: StringFilter<"UserSettings"> | string
    preferredTransformerModel?: StringFilter<"UserSettings"> | string
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    ownerId?: SortOrder
    preferredBasicModel?: SortOrder
    preferredTransformerModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId?: string
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    theme?: StringFilter<"UserSettings"> | string
    language?: EnumLANGUAGEOPTIONSFilter<"UserSettings"> | $Enums.LANGUAGEOPTIONS
    preferredBasicModel?: StringFilter<"UserSettings"> | string
    preferredTransformerModel?: StringFilter<"UserSettings"> | string
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "ownerId">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    ownerId?: SortOrder
    preferredBasicModel?: SortOrder
    preferredTransformerModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserSettings"> | string
    theme?: StringWithAggregatesFilter<"UserSettings"> | string
    language?: EnumLANGUAGEOPTIONSWithAggregatesFilter<"UserSettings"> | $Enums.LANGUAGEOPTIONS
    ownerId?: UuidWithAggregatesFilter<"UserSettings"> | string
    preferredBasicModel?: StringWithAggregatesFilter<"UserSettings"> | string
    preferredTransformerModel?: StringWithAggregatesFilter<"UserSettings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    predictions?: PredictionsCreateNestedManyWithoutOwnerInput
    userSettings?: UserSettingsCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    predictions?: PredictionsUncheckedCreateNestedManyWithoutOwnerInput
    userSettings?: UserSettingsUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictions?: PredictionsUpdateManyWithoutOwnerNestedInput
    userSettings?: UserSettingsUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictions?: PredictionsUncheckedUpdateManyWithoutOwnerNestedInput
    userSettings?: UserSettingsUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ModelsCreateInput = {
    id?: string
    name: string
    version: string
    createdAt?: Date | string
    updatedAt?: Date | string
    model?: PredictionsCreateNestedManyWithoutModelInput
  }

  export type ModelsUncheckedCreateInput = {
    id?: string
    name: string
    version: string
    createdAt?: Date | string
    updatedAt?: Date | string
    model?: PredictionsUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: PredictionsUpdateManyWithoutModelNestedInput
  }

  export type ModelsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: PredictionsUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelsCreateManyInput = {
    id?: string
    name: string
    version: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    xairesults?: XAICreateNestedManyWithoutXairesultsInput
    gradcamresults?: GradCAMCreateNestedManyWithoutGradcamresultsInput
    owner: UserCreateNestedOneWithoutPredictionsInput
    model: ModelsCreateNestedOneWithoutModelInput
  }

  export type PredictionsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: string
    status?: $Enums.ProcessStatus
    ownerId: string
    xairesults?: XAIUncheckedCreateNestedManyWithoutXairesultsInput
    gradcamresults?: GradCAMUncheckedCreateNestedManyWithoutGradcamresultsInput
  }

  export type PredictionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    xairesults?: XAIUpdateManyWithoutXairesultsNestedInput
    gradcamresults?: GradCAMUpdateManyWithoutGradcamresultsNestedInput
    owner?: UserUpdateOneRequiredWithoutPredictionsNestedInput
    model?: ModelsUpdateOneRequiredWithoutModelNestedInput
  }

  export type PredictionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    ownerId?: StringFieldUpdateOperationsInput | string
    xairesults?: XAIUncheckedUpdateManyWithoutXairesultsNestedInput
    gradcamresults?: GradCAMUncheckedUpdateManyWithoutGradcamresultsNestedInput
  }

  export type PredictionsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: string
    status?: $Enums.ProcessStatus
    ownerId: string
  }

  export type PredictionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
  }

  export type PredictionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type XAICreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    xairesults: PredictionsCreateNestedOneWithoutXairesultsInput
  }

  export type XAIUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    predictionId: string
  }

  export type XAIUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    xairesults?: PredictionsUpdateOneRequiredWithoutXairesultsNestedInput
  }

  export type XAIUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    predictionId?: StringFieldUpdateOperationsInput | string
  }

  export type XAICreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    predictionId: string
  }

  export type XAIUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
  }

  export type XAIUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    predictionId?: StringFieldUpdateOperationsInput | string
  }

  export type GradCAMCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    gradcamresults: PredictionsCreateNestedOneWithoutGradcamresultsInput
  }

  export type GradCAMUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    predictionId: string
  }

  export type GradCAMUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    gradcamresults?: PredictionsUpdateOneRequiredWithoutGradcamresultsNestedInput
  }

  export type GradCAMUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    predictionId?: StringFieldUpdateOperationsInput | string
  }

  export type GradCAMCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    predictionId: string
  }

  export type GradCAMUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
  }

  export type GradCAMUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    predictionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessesCreateInput = {
    id?: string
    status?: $Enums.ProcessStatus
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessesUncheckedCreateInput = {
    id?: string
    status?: $Enums.ProcessStatus
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessesCreateManyInput = {
    id?: string
    status?: $Enums.ProcessStatus
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateInput = {
    id?: string
    theme?: string
    language?: $Enums.LANGUAGEOPTIONS
    preferredBasicModel?: string
    preferredTransformerModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutUserSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: string
    theme?: string
    language?: $Enums.LANGUAGEOPTIONS
    ownerId: string
    preferredBasicModel?: string
    preferredTransformerModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEOPTIONSFieldUpdateOperationsInput | $Enums.LANGUAGEOPTIONS
    preferredBasicModel?: StringFieldUpdateOperationsInput | string
    preferredTransformerModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutUserSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEOPTIONSFieldUpdateOperationsInput | $Enums.LANGUAGEOPTIONS
    ownerId?: StringFieldUpdateOperationsInput | string
    preferredBasicModel?: StringFieldUpdateOperationsInput | string
    preferredTransformerModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateManyInput = {
    id?: string
    theme?: string
    language?: $Enums.LANGUAGEOPTIONS
    ownerId: string
    preferredBasicModel?: string
    preferredTransformerModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEOPTIONSFieldUpdateOperationsInput | $Enums.LANGUAGEOPTIONS
    preferredBasicModel?: StringFieldUpdateOperationsInput | string
    preferredTransformerModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEOPTIONSFieldUpdateOperationsInput | $Enums.LANGUAGEOPTIONS
    ownerId?: StringFieldUpdateOperationsInput | string
    preferredBasicModel?: StringFieldUpdateOperationsInput | string
    preferredTransformerModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type PredictionsListRelationFilter = {
    every?: PredictionsWhereInput
    some?: PredictionsWhereInput
    none?: PredictionsWhereInput
  }

  export type UserSettingsListRelationFilter = {
    every?: UserSettingsWhereInput
    some?: UserSettingsWhereInput
    none?: UserSettingsWhereInput
  }

  export type PredictionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSettingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type ModelsNameVersionCompoundUniqueInput = {
    name: string
    version: string
  }

  export type ModelsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusFilter<$PrismaModel> | $Enums.ProcessStatus
  }

  export type XAIListRelationFilter = {
    every?: XAIWhereInput
    some?: XAIWhereInput
    none?: XAIWhereInput
  }

  export type GradCAMListRelationFilter = {
    every?: GradCAMWhereInput
    some?: GradCAMWhereInput
    none?: GradCAMWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ModelsScalarRelationFilter = {
    is?: ModelsWhereInput
    isNot?: ModelsWhereInput
  }

  export type XAIOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GradCAMOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PredictionsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelId?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
  }

  export type PredictionsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelId?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
  }

  export type PredictionsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelId?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessStatusFilter<$PrismaModel>
  }

  export type PredictionsScalarRelationFilter = {
    is?: PredictionsWhereInput
    isNot?: PredictionsWhereInput
  }

  export type XAICountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    predictionId?: SortOrder
  }

  export type XAIMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    predictionId?: SortOrder
  }

  export type XAIMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    predictionId?: SortOrder
  }

  export type GradCAMCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    predictionId?: SortOrder
  }

  export type GradCAMMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    predictionId?: SortOrder
  }

  export type GradCAMMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    predictionId?: SortOrder
  }

  export type ProcessesCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessesMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessesMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLANGUAGEOPTIONSFilter<$PrismaModel = never> = {
    equals?: $Enums.LANGUAGEOPTIONS | EnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    in?: $Enums.LANGUAGEOPTIONS[] | ListEnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LANGUAGEOPTIONS[] | ListEnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    not?: NestedEnumLANGUAGEOPTIONSFilter<$PrismaModel> | $Enums.LANGUAGEOPTIONS
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    ownerId?: SortOrder
    preferredBasicModel?: SortOrder
    preferredTransformerModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    ownerId?: SortOrder
    preferredBasicModel?: SortOrder
    preferredTransformerModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    ownerId?: SortOrder
    preferredBasicModel?: SortOrder
    preferredTransformerModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLANGUAGEOPTIONSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LANGUAGEOPTIONS | EnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    in?: $Enums.LANGUAGEOPTIONS[] | ListEnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LANGUAGEOPTIONS[] | ListEnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    not?: NestedEnumLANGUAGEOPTIONSWithAggregatesFilter<$PrismaModel> | $Enums.LANGUAGEOPTIONS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLANGUAGEOPTIONSFilter<$PrismaModel>
    _max?: NestedEnumLANGUAGEOPTIONSFilter<$PrismaModel>
  }

  export type PredictionsCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PredictionsCreateWithoutOwnerInput, PredictionsUncheckedCreateWithoutOwnerInput> | PredictionsCreateWithoutOwnerInput[] | PredictionsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PredictionsCreateOrConnectWithoutOwnerInput | PredictionsCreateOrConnectWithoutOwnerInput[]
    createMany?: PredictionsCreateManyOwnerInputEnvelope
    connect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
  }

  export type UserSettingsCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UserSettingsCreateWithoutOwnerInput, UserSettingsUncheckedCreateWithoutOwnerInput> | UserSettingsCreateWithoutOwnerInput[] | UserSettingsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserSettingsCreateOrConnectWithoutOwnerInput | UserSettingsCreateOrConnectWithoutOwnerInput[]
    createMany?: UserSettingsCreateManyOwnerInputEnvelope
    connect?: UserSettingsWhereUniqueInput | UserSettingsWhereUniqueInput[]
  }

  export type PredictionsUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PredictionsCreateWithoutOwnerInput, PredictionsUncheckedCreateWithoutOwnerInput> | PredictionsCreateWithoutOwnerInput[] | PredictionsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PredictionsCreateOrConnectWithoutOwnerInput | PredictionsCreateOrConnectWithoutOwnerInput[]
    createMany?: PredictionsCreateManyOwnerInputEnvelope
    connect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UserSettingsCreateWithoutOwnerInput, UserSettingsUncheckedCreateWithoutOwnerInput> | UserSettingsCreateWithoutOwnerInput[] | UserSettingsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserSettingsCreateOrConnectWithoutOwnerInput | UserSettingsCreateOrConnectWithoutOwnerInput[]
    createMany?: UserSettingsCreateManyOwnerInputEnvelope
    connect?: UserSettingsWhereUniqueInput | UserSettingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PredictionsUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PredictionsCreateWithoutOwnerInput, PredictionsUncheckedCreateWithoutOwnerInput> | PredictionsCreateWithoutOwnerInput[] | PredictionsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PredictionsCreateOrConnectWithoutOwnerInput | PredictionsCreateOrConnectWithoutOwnerInput[]
    upsert?: PredictionsUpsertWithWhereUniqueWithoutOwnerInput | PredictionsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PredictionsCreateManyOwnerInputEnvelope
    set?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    disconnect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    delete?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    connect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    update?: PredictionsUpdateWithWhereUniqueWithoutOwnerInput | PredictionsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PredictionsUpdateManyWithWhereWithoutOwnerInput | PredictionsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PredictionsScalarWhereInput | PredictionsScalarWhereInput[]
  }

  export type UserSettingsUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UserSettingsCreateWithoutOwnerInput, UserSettingsUncheckedCreateWithoutOwnerInput> | UserSettingsCreateWithoutOwnerInput[] | UserSettingsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserSettingsCreateOrConnectWithoutOwnerInput | UserSettingsCreateOrConnectWithoutOwnerInput[]
    upsert?: UserSettingsUpsertWithWhereUniqueWithoutOwnerInput | UserSettingsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UserSettingsCreateManyOwnerInputEnvelope
    set?: UserSettingsWhereUniqueInput | UserSettingsWhereUniqueInput[]
    disconnect?: UserSettingsWhereUniqueInput | UserSettingsWhereUniqueInput[]
    delete?: UserSettingsWhereUniqueInput | UserSettingsWhereUniqueInput[]
    connect?: UserSettingsWhereUniqueInput | UserSettingsWhereUniqueInput[]
    update?: UserSettingsUpdateWithWhereUniqueWithoutOwnerInput | UserSettingsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UserSettingsUpdateManyWithWhereWithoutOwnerInput | UserSettingsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UserSettingsScalarWhereInput | UserSettingsScalarWhereInput[]
  }

  export type PredictionsUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PredictionsCreateWithoutOwnerInput, PredictionsUncheckedCreateWithoutOwnerInput> | PredictionsCreateWithoutOwnerInput[] | PredictionsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PredictionsCreateOrConnectWithoutOwnerInput | PredictionsCreateOrConnectWithoutOwnerInput[]
    upsert?: PredictionsUpsertWithWhereUniqueWithoutOwnerInput | PredictionsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PredictionsCreateManyOwnerInputEnvelope
    set?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    disconnect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    delete?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    connect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    update?: PredictionsUpdateWithWhereUniqueWithoutOwnerInput | PredictionsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PredictionsUpdateManyWithWhereWithoutOwnerInput | PredictionsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PredictionsScalarWhereInput | PredictionsScalarWhereInput[]
  }

  export type UserSettingsUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UserSettingsCreateWithoutOwnerInput, UserSettingsUncheckedCreateWithoutOwnerInput> | UserSettingsCreateWithoutOwnerInput[] | UserSettingsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserSettingsCreateOrConnectWithoutOwnerInput | UserSettingsCreateOrConnectWithoutOwnerInput[]
    upsert?: UserSettingsUpsertWithWhereUniqueWithoutOwnerInput | UserSettingsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UserSettingsCreateManyOwnerInputEnvelope
    set?: UserSettingsWhereUniqueInput | UserSettingsWhereUniqueInput[]
    disconnect?: UserSettingsWhereUniqueInput | UserSettingsWhereUniqueInput[]
    delete?: UserSettingsWhereUniqueInput | UserSettingsWhereUniqueInput[]
    connect?: UserSettingsWhereUniqueInput | UserSettingsWhereUniqueInput[]
    update?: UserSettingsUpdateWithWhereUniqueWithoutOwnerInput | UserSettingsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UserSettingsUpdateManyWithWhereWithoutOwnerInput | UserSettingsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UserSettingsScalarWhereInput | UserSettingsScalarWhereInput[]
  }

  export type PredictionsCreateNestedManyWithoutModelInput = {
    create?: XOR<PredictionsCreateWithoutModelInput, PredictionsUncheckedCreateWithoutModelInput> | PredictionsCreateWithoutModelInput[] | PredictionsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PredictionsCreateOrConnectWithoutModelInput | PredictionsCreateOrConnectWithoutModelInput[]
    createMany?: PredictionsCreateManyModelInputEnvelope
    connect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
  }

  export type PredictionsUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<PredictionsCreateWithoutModelInput, PredictionsUncheckedCreateWithoutModelInput> | PredictionsCreateWithoutModelInput[] | PredictionsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PredictionsCreateOrConnectWithoutModelInput | PredictionsCreateOrConnectWithoutModelInput[]
    createMany?: PredictionsCreateManyModelInputEnvelope
    connect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PredictionsUpdateManyWithoutModelNestedInput = {
    create?: XOR<PredictionsCreateWithoutModelInput, PredictionsUncheckedCreateWithoutModelInput> | PredictionsCreateWithoutModelInput[] | PredictionsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PredictionsCreateOrConnectWithoutModelInput | PredictionsCreateOrConnectWithoutModelInput[]
    upsert?: PredictionsUpsertWithWhereUniqueWithoutModelInput | PredictionsUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: PredictionsCreateManyModelInputEnvelope
    set?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    disconnect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    delete?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    connect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    update?: PredictionsUpdateWithWhereUniqueWithoutModelInput | PredictionsUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: PredictionsUpdateManyWithWhereWithoutModelInput | PredictionsUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: PredictionsScalarWhereInput | PredictionsScalarWhereInput[]
  }

  export type PredictionsUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<PredictionsCreateWithoutModelInput, PredictionsUncheckedCreateWithoutModelInput> | PredictionsCreateWithoutModelInput[] | PredictionsUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PredictionsCreateOrConnectWithoutModelInput | PredictionsCreateOrConnectWithoutModelInput[]
    upsert?: PredictionsUpsertWithWhereUniqueWithoutModelInput | PredictionsUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: PredictionsCreateManyModelInputEnvelope
    set?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    disconnect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    delete?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    connect?: PredictionsWhereUniqueInput | PredictionsWhereUniqueInput[]
    update?: PredictionsUpdateWithWhereUniqueWithoutModelInput | PredictionsUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: PredictionsUpdateManyWithWhereWithoutModelInput | PredictionsUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: PredictionsScalarWhereInput | PredictionsScalarWhereInput[]
  }

  export type XAICreateNestedManyWithoutXairesultsInput = {
    create?: XOR<XAICreateWithoutXairesultsInput, XAIUncheckedCreateWithoutXairesultsInput> | XAICreateWithoutXairesultsInput[] | XAIUncheckedCreateWithoutXairesultsInput[]
    connectOrCreate?: XAICreateOrConnectWithoutXairesultsInput | XAICreateOrConnectWithoutXairesultsInput[]
    createMany?: XAICreateManyXairesultsInputEnvelope
    connect?: XAIWhereUniqueInput | XAIWhereUniqueInput[]
  }

  export type GradCAMCreateNestedManyWithoutGradcamresultsInput = {
    create?: XOR<GradCAMCreateWithoutGradcamresultsInput, GradCAMUncheckedCreateWithoutGradcamresultsInput> | GradCAMCreateWithoutGradcamresultsInput[] | GradCAMUncheckedCreateWithoutGradcamresultsInput[]
    connectOrCreate?: GradCAMCreateOrConnectWithoutGradcamresultsInput | GradCAMCreateOrConnectWithoutGradcamresultsInput[]
    createMany?: GradCAMCreateManyGradcamresultsInputEnvelope
    connect?: GradCAMWhereUniqueInput | GradCAMWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPredictionsInput = {
    create?: XOR<UserCreateWithoutPredictionsInput, UserUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPredictionsInput
    connect?: UserWhereUniqueInput
  }

  export type ModelsCreateNestedOneWithoutModelInput = {
    create?: XOR<ModelsCreateWithoutModelInput, ModelsUncheckedCreateWithoutModelInput>
    connectOrCreate?: ModelsCreateOrConnectWithoutModelInput
    connect?: ModelsWhereUniqueInput
  }

  export type XAIUncheckedCreateNestedManyWithoutXairesultsInput = {
    create?: XOR<XAICreateWithoutXairesultsInput, XAIUncheckedCreateWithoutXairesultsInput> | XAICreateWithoutXairesultsInput[] | XAIUncheckedCreateWithoutXairesultsInput[]
    connectOrCreate?: XAICreateOrConnectWithoutXairesultsInput | XAICreateOrConnectWithoutXairesultsInput[]
    createMany?: XAICreateManyXairesultsInputEnvelope
    connect?: XAIWhereUniqueInput | XAIWhereUniqueInput[]
  }

  export type GradCAMUncheckedCreateNestedManyWithoutGradcamresultsInput = {
    create?: XOR<GradCAMCreateWithoutGradcamresultsInput, GradCAMUncheckedCreateWithoutGradcamresultsInput> | GradCAMCreateWithoutGradcamresultsInput[] | GradCAMUncheckedCreateWithoutGradcamresultsInput[]
    connectOrCreate?: GradCAMCreateOrConnectWithoutGradcamresultsInput | GradCAMCreateOrConnectWithoutGradcamresultsInput[]
    createMany?: GradCAMCreateManyGradcamresultsInputEnvelope
    connect?: GradCAMWhereUniqueInput | GradCAMWhereUniqueInput[]
  }

  export type EnumProcessStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProcessStatus
  }

  export type XAIUpdateManyWithoutXairesultsNestedInput = {
    create?: XOR<XAICreateWithoutXairesultsInput, XAIUncheckedCreateWithoutXairesultsInput> | XAICreateWithoutXairesultsInput[] | XAIUncheckedCreateWithoutXairesultsInput[]
    connectOrCreate?: XAICreateOrConnectWithoutXairesultsInput | XAICreateOrConnectWithoutXairesultsInput[]
    upsert?: XAIUpsertWithWhereUniqueWithoutXairesultsInput | XAIUpsertWithWhereUniqueWithoutXairesultsInput[]
    createMany?: XAICreateManyXairesultsInputEnvelope
    set?: XAIWhereUniqueInput | XAIWhereUniqueInput[]
    disconnect?: XAIWhereUniqueInput | XAIWhereUniqueInput[]
    delete?: XAIWhereUniqueInput | XAIWhereUniqueInput[]
    connect?: XAIWhereUniqueInput | XAIWhereUniqueInput[]
    update?: XAIUpdateWithWhereUniqueWithoutXairesultsInput | XAIUpdateWithWhereUniqueWithoutXairesultsInput[]
    updateMany?: XAIUpdateManyWithWhereWithoutXairesultsInput | XAIUpdateManyWithWhereWithoutXairesultsInput[]
    deleteMany?: XAIScalarWhereInput | XAIScalarWhereInput[]
  }

  export type GradCAMUpdateManyWithoutGradcamresultsNestedInput = {
    create?: XOR<GradCAMCreateWithoutGradcamresultsInput, GradCAMUncheckedCreateWithoutGradcamresultsInput> | GradCAMCreateWithoutGradcamresultsInput[] | GradCAMUncheckedCreateWithoutGradcamresultsInput[]
    connectOrCreate?: GradCAMCreateOrConnectWithoutGradcamresultsInput | GradCAMCreateOrConnectWithoutGradcamresultsInput[]
    upsert?: GradCAMUpsertWithWhereUniqueWithoutGradcamresultsInput | GradCAMUpsertWithWhereUniqueWithoutGradcamresultsInput[]
    createMany?: GradCAMCreateManyGradcamresultsInputEnvelope
    set?: GradCAMWhereUniqueInput | GradCAMWhereUniqueInput[]
    disconnect?: GradCAMWhereUniqueInput | GradCAMWhereUniqueInput[]
    delete?: GradCAMWhereUniqueInput | GradCAMWhereUniqueInput[]
    connect?: GradCAMWhereUniqueInput | GradCAMWhereUniqueInput[]
    update?: GradCAMUpdateWithWhereUniqueWithoutGradcamresultsInput | GradCAMUpdateWithWhereUniqueWithoutGradcamresultsInput[]
    updateMany?: GradCAMUpdateManyWithWhereWithoutGradcamresultsInput | GradCAMUpdateManyWithWhereWithoutGradcamresultsInput[]
    deleteMany?: GradCAMScalarWhereInput | GradCAMScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPredictionsNestedInput = {
    create?: XOR<UserCreateWithoutPredictionsInput, UserUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPredictionsInput
    upsert?: UserUpsertWithoutPredictionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPredictionsInput, UserUpdateWithoutPredictionsInput>, UserUncheckedUpdateWithoutPredictionsInput>
  }

  export type ModelsUpdateOneRequiredWithoutModelNestedInput = {
    create?: XOR<ModelsCreateWithoutModelInput, ModelsUncheckedCreateWithoutModelInput>
    connectOrCreate?: ModelsCreateOrConnectWithoutModelInput
    upsert?: ModelsUpsertWithoutModelInput
    connect?: ModelsWhereUniqueInput
    update?: XOR<XOR<ModelsUpdateToOneWithWhereWithoutModelInput, ModelsUpdateWithoutModelInput>, ModelsUncheckedUpdateWithoutModelInput>
  }

  export type XAIUncheckedUpdateManyWithoutXairesultsNestedInput = {
    create?: XOR<XAICreateWithoutXairesultsInput, XAIUncheckedCreateWithoutXairesultsInput> | XAICreateWithoutXairesultsInput[] | XAIUncheckedCreateWithoutXairesultsInput[]
    connectOrCreate?: XAICreateOrConnectWithoutXairesultsInput | XAICreateOrConnectWithoutXairesultsInput[]
    upsert?: XAIUpsertWithWhereUniqueWithoutXairesultsInput | XAIUpsertWithWhereUniqueWithoutXairesultsInput[]
    createMany?: XAICreateManyXairesultsInputEnvelope
    set?: XAIWhereUniqueInput | XAIWhereUniqueInput[]
    disconnect?: XAIWhereUniqueInput | XAIWhereUniqueInput[]
    delete?: XAIWhereUniqueInput | XAIWhereUniqueInput[]
    connect?: XAIWhereUniqueInput | XAIWhereUniqueInput[]
    update?: XAIUpdateWithWhereUniqueWithoutXairesultsInput | XAIUpdateWithWhereUniqueWithoutXairesultsInput[]
    updateMany?: XAIUpdateManyWithWhereWithoutXairesultsInput | XAIUpdateManyWithWhereWithoutXairesultsInput[]
    deleteMany?: XAIScalarWhereInput | XAIScalarWhereInput[]
  }

  export type GradCAMUncheckedUpdateManyWithoutGradcamresultsNestedInput = {
    create?: XOR<GradCAMCreateWithoutGradcamresultsInput, GradCAMUncheckedCreateWithoutGradcamresultsInput> | GradCAMCreateWithoutGradcamresultsInput[] | GradCAMUncheckedCreateWithoutGradcamresultsInput[]
    connectOrCreate?: GradCAMCreateOrConnectWithoutGradcamresultsInput | GradCAMCreateOrConnectWithoutGradcamresultsInput[]
    upsert?: GradCAMUpsertWithWhereUniqueWithoutGradcamresultsInput | GradCAMUpsertWithWhereUniqueWithoutGradcamresultsInput[]
    createMany?: GradCAMCreateManyGradcamresultsInputEnvelope
    set?: GradCAMWhereUniqueInput | GradCAMWhereUniqueInput[]
    disconnect?: GradCAMWhereUniqueInput | GradCAMWhereUniqueInput[]
    delete?: GradCAMWhereUniqueInput | GradCAMWhereUniqueInput[]
    connect?: GradCAMWhereUniqueInput | GradCAMWhereUniqueInput[]
    update?: GradCAMUpdateWithWhereUniqueWithoutGradcamresultsInput | GradCAMUpdateWithWhereUniqueWithoutGradcamresultsInput[]
    updateMany?: GradCAMUpdateManyWithWhereWithoutGradcamresultsInput | GradCAMUpdateManyWithWhereWithoutGradcamresultsInput[]
    deleteMany?: GradCAMScalarWhereInput | GradCAMScalarWhereInput[]
  }

  export type PredictionsCreateNestedOneWithoutXairesultsInput = {
    create?: XOR<PredictionsCreateWithoutXairesultsInput, PredictionsUncheckedCreateWithoutXairesultsInput>
    connectOrCreate?: PredictionsCreateOrConnectWithoutXairesultsInput
    connect?: PredictionsWhereUniqueInput
  }

  export type PredictionsUpdateOneRequiredWithoutXairesultsNestedInput = {
    create?: XOR<PredictionsCreateWithoutXairesultsInput, PredictionsUncheckedCreateWithoutXairesultsInput>
    connectOrCreate?: PredictionsCreateOrConnectWithoutXairesultsInput
    upsert?: PredictionsUpsertWithoutXairesultsInput
    connect?: PredictionsWhereUniqueInput
    update?: XOR<XOR<PredictionsUpdateToOneWithWhereWithoutXairesultsInput, PredictionsUpdateWithoutXairesultsInput>, PredictionsUncheckedUpdateWithoutXairesultsInput>
  }

  export type PredictionsCreateNestedOneWithoutGradcamresultsInput = {
    create?: XOR<PredictionsCreateWithoutGradcamresultsInput, PredictionsUncheckedCreateWithoutGradcamresultsInput>
    connectOrCreate?: PredictionsCreateOrConnectWithoutGradcamresultsInput
    connect?: PredictionsWhereUniqueInput
  }

  export type PredictionsUpdateOneRequiredWithoutGradcamresultsNestedInput = {
    create?: XOR<PredictionsCreateWithoutGradcamresultsInput, PredictionsUncheckedCreateWithoutGradcamresultsInput>
    connectOrCreate?: PredictionsCreateOrConnectWithoutGradcamresultsInput
    upsert?: PredictionsUpsertWithoutGradcamresultsInput
    connect?: PredictionsWhereUniqueInput
    update?: XOR<XOR<PredictionsUpdateToOneWithWhereWithoutGradcamresultsInput, PredictionsUpdateWithoutGradcamresultsInput>, PredictionsUncheckedUpdateWithoutGradcamresultsInput>
  }

  export type UserCreateNestedOneWithoutUserSettingsInput = {
    create?: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLANGUAGEOPTIONSFieldUpdateOperationsInput = {
    set?: $Enums.LANGUAGEOPTIONS
  }

  export type UserUpdateOneRequiredWithoutUserSettingsNestedInput = {
    create?: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSettingsInput
    upsert?: UserUpsertWithoutUserSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSettingsInput, UserUpdateWithoutUserSettingsInput>, UserUncheckedUpdateWithoutUserSettingsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusFilter<$PrismaModel> | $Enums.ProcessStatus
  }

  export type NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessStatusFilter<$PrismaModel>
  }

  export type NestedEnumLANGUAGEOPTIONSFilter<$PrismaModel = never> = {
    equals?: $Enums.LANGUAGEOPTIONS | EnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    in?: $Enums.LANGUAGEOPTIONS[] | ListEnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LANGUAGEOPTIONS[] | ListEnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    not?: NestedEnumLANGUAGEOPTIONSFilter<$PrismaModel> | $Enums.LANGUAGEOPTIONS
  }

  export type NestedEnumLANGUAGEOPTIONSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LANGUAGEOPTIONS | EnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    in?: $Enums.LANGUAGEOPTIONS[] | ListEnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LANGUAGEOPTIONS[] | ListEnumLANGUAGEOPTIONSFieldRefInput<$PrismaModel>
    not?: NestedEnumLANGUAGEOPTIONSWithAggregatesFilter<$PrismaModel> | $Enums.LANGUAGEOPTIONS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLANGUAGEOPTIONSFilter<$PrismaModel>
    _max?: NestedEnumLANGUAGEOPTIONSFilter<$PrismaModel>
  }

  export type PredictionsCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    xairesults?: XAICreateNestedManyWithoutXairesultsInput
    gradcamresults?: GradCAMCreateNestedManyWithoutGradcamresultsInput
    model: ModelsCreateNestedOneWithoutModelInput
  }

  export type PredictionsUncheckedCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: string
    status?: $Enums.ProcessStatus
    xairesults?: XAIUncheckedCreateNestedManyWithoutXairesultsInput
    gradcamresults?: GradCAMUncheckedCreateNestedManyWithoutGradcamresultsInput
  }

  export type PredictionsCreateOrConnectWithoutOwnerInput = {
    where: PredictionsWhereUniqueInput
    create: XOR<PredictionsCreateWithoutOwnerInput, PredictionsUncheckedCreateWithoutOwnerInput>
  }

  export type PredictionsCreateManyOwnerInputEnvelope = {
    data: PredictionsCreateManyOwnerInput | PredictionsCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsCreateWithoutOwnerInput = {
    id?: string
    theme?: string
    language?: $Enums.LANGUAGEOPTIONS
    preferredBasicModel?: string
    preferredTransformerModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUncheckedCreateWithoutOwnerInput = {
    id?: string
    theme?: string
    language?: $Enums.LANGUAGEOPTIONS
    preferredBasicModel?: string
    preferredTransformerModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsCreateOrConnectWithoutOwnerInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutOwnerInput, UserSettingsUncheckedCreateWithoutOwnerInput>
  }

  export type UserSettingsCreateManyOwnerInputEnvelope = {
    data: UserSettingsCreateManyOwnerInput | UserSettingsCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PredictionsUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PredictionsWhereUniqueInput
    update: XOR<PredictionsUpdateWithoutOwnerInput, PredictionsUncheckedUpdateWithoutOwnerInput>
    create: XOR<PredictionsCreateWithoutOwnerInput, PredictionsUncheckedCreateWithoutOwnerInput>
  }

  export type PredictionsUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PredictionsWhereUniqueInput
    data: XOR<PredictionsUpdateWithoutOwnerInput, PredictionsUncheckedUpdateWithoutOwnerInput>
  }

  export type PredictionsUpdateManyWithWhereWithoutOwnerInput = {
    where: PredictionsScalarWhereInput
    data: XOR<PredictionsUpdateManyMutationInput, PredictionsUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PredictionsScalarWhereInput = {
    AND?: PredictionsScalarWhereInput | PredictionsScalarWhereInput[]
    OR?: PredictionsScalarWhereInput[]
    NOT?: PredictionsScalarWhereInput | PredictionsScalarWhereInput[]
    id?: UuidFilter<"Predictions"> | string
    createdAt?: DateTimeFilter<"Predictions"> | Date | string
    updatedAt?: DateTimeFilter<"Predictions"> | Date | string
    modelId?: UuidFilter<"Predictions"> | string
    status?: EnumProcessStatusFilter<"Predictions"> | $Enums.ProcessStatus
    ownerId?: UuidFilter<"Predictions"> | string
  }

  export type UserSettingsUpsertWithWhereUniqueWithoutOwnerInput = {
    where: UserSettingsWhereUniqueInput
    update: XOR<UserSettingsUpdateWithoutOwnerInput, UserSettingsUncheckedUpdateWithoutOwnerInput>
    create: XOR<UserSettingsCreateWithoutOwnerInput, UserSettingsUncheckedCreateWithoutOwnerInput>
  }

  export type UserSettingsUpdateWithWhereUniqueWithoutOwnerInput = {
    where: UserSettingsWhereUniqueInput
    data: XOR<UserSettingsUpdateWithoutOwnerInput, UserSettingsUncheckedUpdateWithoutOwnerInput>
  }

  export type UserSettingsUpdateManyWithWhereWithoutOwnerInput = {
    where: UserSettingsScalarWhereInput
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyWithoutOwnerInput>
  }

  export type UserSettingsScalarWhereInput = {
    AND?: UserSettingsScalarWhereInput | UserSettingsScalarWhereInput[]
    OR?: UserSettingsScalarWhereInput[]
    NOT?: UserSettingsScalarWhereInput | UserSettingsScalarWhereInput[]
    id?: UuidFilter<"UserSettings"> | string
    theme?: StringFilter<"UserSettings"> | string
    language?: EnumLANGUAGEOPTIONSFilter<"UserSettings"> | $Enums.LANGUAGEOPTIONS
    ownerId?: UuidFilter<"UserSettings"> | string
    preferredBasicModel?: StringFilter<"UserSettings"> | string
    preferredTransformerModel?: StringFilter<"UserSettings"> | string
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
  }

  export type PredictionsCreateWithoutModelInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    xairesults?: XAICreateNestedManyWithoutXairesultsInput
    gradcamresults?: GradCAMCreateNestedManyWithoutGradcamresultsInput
    owner: UserCreateNestedOneWithoutPredictionsInput
  }

  export type PredictionsUncheckedCreateWithoutModelInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    ownerId: string
    xairesults?: XAIUncheckedCreateNestedManyWithoutXairesultsInput
    gradcamresults?: GradCAMUncheckedCreateNestedManyWithoutGradcamresultsInput
  }

  export type PredictionsCreateOrConnectWithoutModelInput = {
    where: PredictionsWhereUniqueInput
    create: XOR<PredictionsCreateWithoutModelInput, PredictionsUncheckedCreateWithoutModelInput>
  }

  export type PredictionsCreateManyModelInputEnvelope = {
    data: PredictionsCreateManyModelInput | PredictionsCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type PredictionsUpsertWithWhereUniqueWithoutModelInput = {
    where: PredictionsWhereUniqueInput
    update: XOR<PredictionsUpdateWithoutModelInput, PredictionsUncheckedUpdateWithoutModelInput>
    create: XOR<PredictionsCreateWithoutModelInput, PredictionsUncheckedCreateWithoutModelInput>
  }

  export type PredictionsUpdateWithWhereUniqueWithoutModelInput = {
    where: PredictionsWhereUniqueInput
    data: XOR<PredictionsUpdateWithoutModelInput, PredictionsUncheckedUpdateWithoutModelInput>
  }

  export type PredictionsUpdateManyWithWhereWithoutModelInput = {
    where: PredictionsScalarWhereInput
    data: XOR<PredictionsUpdateManyMutationInput, PredictionsUncheckedUpdateManyWithoutModelInput>
  }

  export type XAICreateWithoutXairesultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
  }

  export type XAIUncheckedCreateWithoutXairesultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
  }

  export type XAICreateOrConnectWithoutXairesultsInput = {
    where: XAIWhereUniqueInput
    create: XOR<XAICreateWithoutXairesultsInput, XAIUncheckedCreateWithoutXairesultsInput>
  }

  export type XAICreateManyXairesultsInputEnvelope = {
    data: XAICreateManyXairesultsInput | XAICreateManyXairesultsInput[]
    skipDuplicates?: boolean
  }

  export type GradCAMCreateWithoutGradcamresultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
  }

  export type GradCAMUncheckedCreateWithoutGradcamresultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
  }

  export type GradCAMCreateOrConnectWithoutGradcamresultsInput = {
    where: GradCAMWhereUniqueInput
    create: XOR<GradCAMCreateWithoutGradcamresultsInput, GradCAMUncheckedCreateWithoutGradcamresultsInput>
  }

  export type GradCAMCreateManyGradcamresultsInputEnvelope = {
    data: GradCAMCreateManyGradcamresultsInput | GradCAMCreateManyGradcamresultsInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPredictionsInput = {
    id: string
    userSettings?: UserSettingsCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutPredictionsInput = {
    id: string
    userSettings?: UserSettingsUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutPredictionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPredictionsInput, UserUncheckedCreateWithoutPredictionsInput>
  }

  export type ModelsCreateWithoutModelInput = {
    id?: string
    name: string
    version: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelsUncheckedCreateWithoutModelInput = {
    id?: string
    name: string
    version: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelsCreateOrConnectWithoutModelInput = {
    where: ModelsWhereUniqueInput
    create: XOR<ModelsCreateWithoutModelInput, ModelsUncheckedCreateWithoutModelInput>
  }

  export type XAIUpsertWithWhereUniqueWithoutXairesultsInput = {
    where: XAIWhereUniqueInput
    update: XOR<XAIUpdateWithoutXairesultsInput, XAIUncheckedUpdateWithoutXairesultsInput>
    create: XOR<XAICreateWithoutXairesultsInput, XAIUncheckedCreateWithoutXairesultsInput>
  }

  export type XAIUpdateWithWhereUniqueWithoutXairesultsInput = {
    where: XAIWhereUniqueInput
    data: XOR<XAIUpdateWithoutXairesultsInput, XAIUncheckedUpdateWithoutXairesultsInput>
  }

  export type XAIUpdateManyWithWhereWithoutXairesultsInput = {
    where: XAIScalarWhereInput
    data: XOR<XAIUpdateManyMutationInput, XAIUncheckedUpdateManyWithoutXairesultsInput>
  }

  export type XAIScalarWhereInput = {
    AND?: XAIScalarWhereInput | XAIScalarWhereInput[]
    OR?: XAIScalarWhereInput[]
    NOT?: XAIScalarWhereInput | XAIScalarWhereInput[]
    id?: UuidFilter<"XAI"> | string
    createdAt?: DateTimeFilter<"XAI"> | Date | string
    updatedAt?: DateTimeFilter<"XAI"> | Date | string
    status?: EnumProcessStatusFilter<"XAI"> | $Enums.ProcessStatus
    predictionId?: UuidFilter<"XAI"> | string
  }

  export type GradCAMUpsertWithWhereUniqueWithoutGradcamresultsInput = {
    where: GradCAMWhereUniqueInput
    update: XOR<GradCAMUpdateWithoutGradcamresultsInput, GradCAMUncheckedUpdateWithoutGradcamresultsInput>
    create: XOR<GradCAMCreateWithoutGradcamresultsInput, GradCAMUncheckedCreateWithoutGradcamresultsInput>
  }

  export type GradCAMUpdateWithWhereUniqueWithoutGradcamresultsInput = {
    where: GradCAMWhereUniqueInput
    data: XOR<GradCAMUpdateWithoutGradcamresultsInput, GradCAMUncheckedUpdateWithoutGradcamresultsInput>
  }

  export type GradCAMUpdateManyWithWhereWithoutGradcamresultsInput = {
    where: GradCAMScalarWhereInput
    data: XOR<GradCAMUpdateManyMutationInput, GradCAMUncheckedUpdateManyWithoutGradcamresultsInput>
  }

  export type GradCAMScalarWhereInput = {
    AND?: GradCAMScalarWhereInput | GradCAMScalarWhereInput[]
    OR?: GradCAMScalarWhereInput[]
    NOT?: GradCAMScalarWhereInput | GradCAMScalarWhereInput[]
    id?: UuidFilter<"GradCAM"> | string
    createdAt?: DateTimeFilter<"GradCAM"> | Date | string
    updatedAt?: DateTimeFilter<"GradCAM"> | Date | string
    status?: EnumProcessStatusFilter<"GradCAM"> | $Enums.ProcessStatus
    predictionId?: UuidFilter<"GradCAM"> | string
  }

  export type UserUpsertWithoutPredictionsInput = {
    update: XOR<UserUpdateWithoutPredictionsInput, UserUncheckedUpdateWithoutPredictionsInput>
    create: XOR<UserCreateWithoutPredictionsInput, UserUncheckedCreateWithoutPredictionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPredictionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPredictionsInput, UserUncheckedUpdateWithoutPredictionsInput>
  }

  export type UserUpdateWithoutPredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userSettings?: UserSettingsUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutPredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userSettings?: UserSettingsUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ModelsUpsertWithoutModelInput = {
    update: XOR<ModelsUpdateWithoutModelInput, ModelsUncheckedUpdateWithoutModelInput>
    create: XOR<ModelsCreateWithoutModelInput, ModelsUncheckedCreateWithoutModelInput>
    where?: ModelsWhereInput
  }

  export type ModelsUpdateToOneWithWhereWithoutModelInput = {
    where?: ModelsWhereInput
    data: XOR<ModelsUpdateWithoutModelInput, ModelsUncheckedUpdateWithoutModelInput>
  }

  export type ModelsUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelsUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionsCreateWithoutXairesultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    gradcamresults?: GradCAMCreateNestedManyWithoutGradcamresultsInput
    owner: UserCreateNestedOneWithoutPredictionsInput
    model: ModelsCreateNestedOneWithoutModelInput
  }

  export type PredictionsUncheckedCreateWithoutXairesultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: string
    status?: $Enums.ProcessStatus
    ownerId: string
    gradcamresults?: GradCAMUncheckedCreateNestedManyWithoutGradcamresultsInput
  }

  export type PredictionsCreateOrConnectWithoutXairesultsInput = {
    where: PredictionsWhereUniqueInput
    create: XOR<PredictionsCreateWithoutXairesultsInput, PredictionsUncheckedCreateWithoutXairesultsInput>
  }

  export type PredictionsUpsertWithoutXairesultsInput = {
    update: XOR<PredictionsUpdateWithoutXairesultsInput, PredictionsUncheckedUpdateWithoutXairesultsInput>
    create: XOR<PredictionsCreateWithoutXairesultsInput, PredictionsUncheckedCreateWithoutXairesultsInput>
    where?: PredictionsWhereInput
  }

  export type PredictionsUpdateToOneWithWhereWithoutXairesultsInput = {
    where?: PredictionsWhereInput
    data: XOR<PredictionsUpdateWithoutXairesultsInput, PredictionsUncheckedUpdateWithoutXairesultsInput>
  }

  export type PredictionsUpdateWithoutXairesultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    gradcamresults?: GradCAMUpdateManyWithoutGradcamresultsNestedInput
    owner?: UserUpdateOneRequiredWithoutPredictionsNestedInput
    model?: ModelsUpdateOneRequiredWithoutModelNestedInput
  }

  export type PredictionsUncheckedUpdateWithoutXairesultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    ownerId?: StringFieldUpdateOperationsInput | string
    gradcamresults?: GradCAMUncheckedUpdateManyWithoutGradcamresultsNestedInput
  }

  export type PredictionsCreateWithoutGradcamresultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    xairesults?: XAICreateNestedManyWithoutXairesultsInput
    owner: UserCreateNestedOneWithoutPredictionsInput
    model: ModelsCreateNestedOneWithoutModelInput
  }

  export type PredictionsUncheckedCreateWithoutGradcamresultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: string
    status?: $Enums.ProcessStatus
    ownerId: string
    xairesults?: XAIUncheckedCreateNestedManyWithoutXairesultsInput
  }

  export type PredictionsCreateOrConnectWithoutGradcamresultsInput = {
    where: PredictionsWhereUniqueInput
    create: XOR<PredictionsCreateWithoutGradcamresultsInput, PredictionsUncheckedCreateWithoutGradcamresultsInput>
  }

  export type PredictionsUpsertWithoutGradcamresultsInput = {
    update: XOR<PredictionsUpdateWithoutGradcamresultsInput, PredictionsUncheckedUpdateWithoutGradcamresultsInput>
    create: XOR<PredictionsCreateWithoutGradcamresultsInput, PredictionsUncheckedCreateWithoutGradcamresultsInput>
    where?: PredictionsWhereInput
  }

  export type PredictionsUpdateToOneWithWhereWithoutGradcamresultsInput = {
    where?: PredictionsWhereInput
    data: XOR<PredictionsUpdateWithoutGradcamresultsInput, PredictionsUncheckedUpdateWithoutGradcamresultsInput>
  }

  export type PredictionsUpdateWithoutGradcamresultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    xairesults?: XAIUpdateManyWithoutXairesultsNestedInput
    owner?: UserUpdateOneRequiredWithoutPredictionsNestedInput
    model?: ModelsUpdateOneRequiredWithoutModelNestedInput
  }

  export type PredictionsUncheckedUpdateWithoutGradcamresultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    ownerId?: StringFieldUpdateOperationsInput | string
    xairesults?: XAIUncheckedUpdateManyWithoutXairesultsNestedInput
  }

  export type UserCreateWithoutUserSettingsInput = {
    id: string
    predictions?: PredictionsCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutUserSettingsInput = {
    id: string
    predictions?: PredictionsUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutUserSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
  }

  export type UserUpsertWithoutUserSettingsInput = {
    update: XOR<UserUpdateWithoutUserSettingsInput, UserUncheckedUpdateWithoutUserSettingsInput>
    create: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSettingsInput, UserUncheckedUpdateWithoutUserSettingsInput>
  }

  export type UserUpdateWithoutUserSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictions?: PredictionsUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictions?: PredictionsUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PredictionsCreateManyOwnerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelId: string
    status?: $Enums.ProcessStatus
  }

  export type UserSettingsCreateManyOwnerInput = {
    id?: string
    theme?: string
    language?: $Enums.LANGUAGEOPTIONS
    preferredBasicModel?: string
    preferredTransformerModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionsUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    xairesults?: XAIUpdateManyWithoutXairesultsNestedInput
    gradcamresults?: GradCAMUpdateManyWithoutGradcamresultsNestedInput
    model?: ModelsUpdateOneRequiredWithoutModelNestedInput
  }

  export type PredictionsUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    xairesults?: XAIUncheckedUpdateManyWithoutXairesultsNestedInput
    gradcamresults?: GradCAMUncheckedUpdateManyWithoutGradcamresultsNestedInput
  }

  export type PredictionsUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelId?: StringFieldUpdateOperationsInput | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
  }

  export type UserSettingsUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEOPTIONSFieldUpdateOperationsInput | $Enums.LANGUAGEOPTIONS
    preferredBasicModel?: StringFieldUpdateOperationsInput | string
    preferredTransformerModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEOPTIONSFieldUpdateOperationsInput | $Enums.LANGUAGEOPTIONS
    preferredBasicModel?: StringFieldUpdateOperationsInput | string
    preferredTransformerModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEOPTIONSFieldUpdateOperationsInput | $Enums.LANGUAGEOPTIONS
    preferredBasicModel?: StringFieldUpdateOperationsInput | string
    preferredTransformerModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionsCreateManyModelInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
    ownerId: string
  }

  export type PredictionsUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    xairesults?: XAIUpdateManyWithoutXairesultsNestedInput
    gradcamresults?: GradCAMUpdateManyWithoutGradcamresultsNestedInput
    owner?: UserUpdateOneRequiredWithoutPredictionsNestedInput
  }

  export type PredictionsUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    ownerId?: StringFieldUpdateOperationsInput | string
    xairesults?: XAIUncheckedUpdateManyWithoutXairesultsNestedInput
    gradcamresults?: GradCAMUncheckedUpdateManyWithoutGradcamresultsNestedInput
  }

  export type PredictionsUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type XAICreateManyXairesultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
  }

  export type GradCAMCreateManyGradcamresultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.ProcessStatus
  }

  export type XAIUpdateWithoutXairesultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
  }

  export type XAIUncheckedUpdateWithoutXairesultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
  }

  export type XAIUncheckedUpdateManyWithoutXairesultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
  }

  export type GradCAMUpdateWithoutGradcamresultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
  }

  export type GradCAMUncheckedUpdateWithoutGradcamresultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
  }

  export type GradCAMUncheckedUpdateManyWithoutGradcamresultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
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