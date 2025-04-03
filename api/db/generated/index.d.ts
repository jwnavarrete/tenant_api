
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
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GlobalParameter
 * 
 */
export type GlobalParameter = $Result.DefaultSelection<Prisma.$GlobalParameterPayload>
/**
 * Model TenantConfig
 * 
 */
export type TenantConfig = $Result.DefaultSelection<Prisma.$TenantConfigPayload>
/**
 * Model AccountsReceivable
 * 
 */
export type AccountsReceivable = $Result.DefaultSelection<Prisma.$AccountsReceivablePayload>
/**
 * Model PaymentDetail
 * 
 */
export type PaymentDetail = $Result.DefaultSelection<Prisma.$PaymentDetailPayload>
/**
 * Model Debtor
 * 
 */
export type Debtor = $Result.DefaultSelection<Prisma.$DebtorPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
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
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.globalParameter`: Exposes CRUD operations for the **GlobalParameter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalParameters
    * const globalParameters = await prisma.globalParameter.findMany()
    * ```
    */
  get globalParameter(): Prisma.GlobalParameterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenantConfig`: Exposes CRUD operations for the **TenantConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantConfigs
    * const tenantConfigs = await prisma.tenantConfig.findMany()
    * ```
    */
  get tenantConfig(): Prisma.TenantConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountsReceivable`: Exposes CRUD operations for the **AccountsReceivable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountsReceivables
    * const accountsReceivables = await prisma.accountsReceivable.findMany()
    * ```
    */
  get accountsReceivable(): Prisma.AccountsReceivableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentDetail`: Exposes CRUD operations for the **PaymentDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentDetails
    * const paymentDetails = await prisma.paymentDetail.findMany()
    * ```
    */
  get paymentDetail(): Prisma.PaymentDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.debtor`: Exposes CRUD operations for the **Debtor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Debtors
    * const debtors = await prisma.debtor.findMany()
    * ```
    */
  get debtor(): Prisma.DebtorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Tenant: 'Tenant',
    Client: 'Client',
    Role: 'Role',
    User: 'User',
    GlobalParameter: 'GlobalParameter',
    TenantConfig: 'TenantConfig',
    AccountsReceivable: 'AccountsReceivable',
    PaymentDetail: 'PaymentDetail',
    Debtor: 'Debtor',
    Employee: 'Employee'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "tenant" | "client" | "role" | "user" | "globalParameter" | "tenantConfig" | "accountsReceivable" | "paymentDetail" | "debtor" | "employee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
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
      GlobalParameter: {
        payload: Prisma.$GlobalParameterPayload<ExtArgs>
        fields: Prisma.GlobalParameterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalParameterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalParameterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload>
          }
          findFirst: {
            args: Prisma.GlobalParameterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalParameterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload>
          }
          findMany: {
            args: Prisma.GlobalParameterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload>[]
          }
          create: {
            args: Prisma.GlobalParameterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload>
          }
          createMany: {
            args: Prisma.GlobalParameterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalParameterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload>[]
          }
          delete: {
            args: Prisma.GlobalParameterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload>
          }
          update: {
            args: Prisma.GlobalParameterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload>
          }
          deleteMany: {
            args: Prisma.GlobalParameterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalParameterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalParameterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload>[]
          }
          upsert: {
            args: Prisma.GlobalParameterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalParameterPayload>
          }
          aggregate: {
            args: Prisma.GlobalParameterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalParameter>
          }
          groupBy: {
            args: Prisma.GlobalParameterGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalParameterGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalParameterCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalParameterCountAggregateOutputType> | number
          }
        }
      }
      TenantConfig: {
        payload: Prisma.$TenantConfigPayload<ExtArgs>
        fields: Prisma.TenantConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload>
          }
          findFirst: {
            args: Prisma.TenantConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload>
          }
          findMany: {
            args: Prisma.TenantConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload>[]
          }
          create: {
            args: Prisma.TenantConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload>
          }
          createMany: {
            args: Prisma.TenantConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload>[]
          }
          delete: {
            args: Prisma.TenantConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload>
          }
          update: {
            args: Prisma.TenantConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload>
          }
          deleteMany: {
            args: Prisma.TenantConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload>[]
          }
          upsert: {
            args: Prisma.TenantConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantConfigPayload>
          }
          aggregate: {
            args: Prisma.TenantConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantConfig>
          }
          groupBy: {
            args: Prisma.TenantConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantConfigCountArgs<ExtArgs>
            result: $Utils.Optional<TenantConfigCountAggregateOutputType> | number
          }
        }
      }
      AccountsReceivable: {
        payload: Prisma.$AccountsReceivablePayload<ExtArgs>
        fields: Prisma.AccountsReceivableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsReceivableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsReceivableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          findFirst: {
            args: Prisma.AccountsReceivableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsReceivableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          findMany: {
            args: Prisma.AccountsReceivableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>[]
          }
          create: {
            args: Prisma.AccountsReceivableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          createMany: {
            args: Prisma.AccountsReceivableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountsReceivableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>[]
          }
          delete: {
            args: Prisma.AccountsReceivableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          update: {
            args: Prisma.AccountsReceivableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          deleteMany: {
            args: Prisma.AccountsReceivableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsReceivableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountsReceivableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>[]
          }
          upsert: {
            args: Prisma.AccountsReceivableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsReceivablePayload>
          }
          aggregate: {
            args: Prisma.AccountsReceivableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountsReceivable>
          }
          groupBy: {
            args: Prisma.AccountsReceivableGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsReceivableGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsReceivableCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsReceivableCountAggregateOutputType> | number
          }
        }
      }
      PaymentDetail: {
        payload: Prisma.$PaymentDetailPayload<ExtArgs>
        fields: Prisma.PaymentDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          findFirst: {
            args: Prisma.PaymentDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          findMany: {
            args: Prisma.PaymentDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>[]
          }
          create: {
            args: Prisma.PaymentDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          createMany: {
            args: Prisma.PaymentDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>[]
          }
          delete: {
            args: Prisma.PaymentDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          update: {
            args: Prisma.PaymentDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>[]
          }
          upsert: {
            args: Prisma.PaymentDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailPayload>
          }
          aggregate: {
            args: Prisma.PaymentDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentDetail>
          }
          groupBy: {
            args: Prisma.PaymentDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentDetailCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentDetailCountAggregateOutputType> | number
          }
        }
      }
      Debtor: {
        payload: Prisma.$DebtorPayload<ExtArgs>
        fields: Prisma.DebtorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebtorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebtorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload>
          }
          findFirst: {
            args: Prisma.DebtorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebtorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload>
          }
          findMany: {
            args: Prisma.DebtorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload>[]
          }
          create: {
            args: Prisma.DebtorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload>
          }
          createMany: {
            args: Prisma.DebtorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebtorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload>[]
          }
          delete: {
            args: Prisma.DebtorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload>
          }
          update: {
            args: Prisma.DebtorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload>
          }
          deleteMany: {
            args: Prisma.DebtorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebtorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DebtorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload>[]
          }
          upsert: {
            args: Prisma.DebtorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebtorPayload>
          }
          aggregate: {
            args: Prisma.DebtorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebtor>
          }
          groupBy: {
            args: Prisma.DebtorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebtorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebtorCountArgs<ExtArgs>
            result: $Utils.Optional<DebtorCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
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
    tenant?: TenantOmit
    client?: ClientOmit
    role?: RoleOmit
    user?: UserOmit
    globalParameter?: GlobalParameterOmit
    tenantConfig?: TenantConfigOmit
    accountsReceivable?: AccountsReceivableOmit
    paymentDetail?: PaymentDetailOmit
    debtor?: DebtorOmit
    employee?: EmployeeOmit
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
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    users: number
    tenantConfigs: number
    accountsReceivable: number
    debtors: number
    employees: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs
    tenantConfigs?: boolean | TenantCountOutputTypeCountTenantConfigsArgs
    accountsReceivable?: boolean | TenantCountOutputTypeCountAccountsReceivableArgs
    debtors?: boolean | TenantCountOutputTypeCountDebtorsArgs
    employees?: boolean | TenantCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountTenantConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantConfigWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountAccountsReceivableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsReceivableWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountDebtorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtorWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    invitations: number
    debtors: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | UserCountOutputTypeCountInvitationsArgs
    debtors?: boolean | UserCountOutputTypeCountDebtorsArgs
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
  export type UserCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDebtorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtorWhereInput
  }


  /**
   * Count Type GlobalParameterCountOutputType
   */

  export type GlobalParameterCountOutputType = {
    tenantConfigs: number
  }

  export type GlobalParameterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenantConfigs?: boolean | GlobalParameterCountOutputTypeCountTenantConfigsArgs
  }

  // Custom InputTypes
  /**
   * GlobalParameterCountOutputType without action
   */
  export type GlobalParameterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameterCountOutputType
     */
    select?: GlobalParameterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GlobalParameterCountOutputType without action
   */
  export type GlobalParameterCountOutputTypeCountTenantConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantConfigWhereInput
  }


  /**
   * Count Type AccountsReceivableCountOutputType
   */

  export type AccountsReceivableCountOutputType = {
    paymentDetail: number
  }

  export type AccountsReceivableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentDetail?: boolean | AccountsReceivableCountOutputTypeCountPaymentDetailArgs
  }

  // Custom InputTypes
  /**
   * AccountsReceivableCountOutputType without action
   */
  export type AccountsReceivableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivableCountOutputType
     */
    select?: AccountsReceivableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsReceivableCountOutputType without action
   */
  export type AccountsReceivableCountOutputTypeCountPaymentDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailWhereInput
  }


  /**
   * Count Type DebtorCountOutputType
   */

  export type DebtorCountOutputType = {
    accountsReceivable: number
  }

  export type DebtorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountsReceivable?: boolean | DebtorCountOutputTypeCountAccountsReceivableArgs
  }

  // Custom InputTypes
  /**
   * DebtorCountOutputType without action
   */
  export type DebtorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorCountOutputType
     */
    select?: DebtorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DebtorCountOutputType without action
   */
  export type DebtorCountOutputTypeCountAccountsReceivableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsReceivableWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    debtors: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    debtors?: boolean | EmployeeCountOutputTypeCountDebtorsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountDebtorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    subdomain: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    subdomain: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    subdomain: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    subdomain?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    subdomain?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    subdomain?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    subdomain: string
    clientId: string
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subdomain?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    users?: boolean | Tenant$usersArgs<ExtArgs>
    tenantConfigs?: boolean | Tenant$tenantConfigsArgs<ExtArgs>
    accountsReceivable?: boolean | Tenant$accountsReceivableArgs<ExtArgs>
    debtors?: boolean | Tenant$debtorsArgs<ExtArgs>
    employees?: boolean | Tenant$employeesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subdomain?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subdomain?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    subdomain?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subdomain" | "clientId" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    users?: boolean | Tenant$usersArgs<ExtArgs>
    tenantConfigs?: boolean | Tenant$tenantConfigsArgs<ExtArgs>
    accountsReceivable?: boolean | Tenant$accountsReceivableArgs<ExtArgs>
    debtors?: boolean | Tenant$debtorsArgs<ExtArgs>
    employees?: boolean | Tenant$employeesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
      tenantConfigs: Prisma.$TenantConfigPayload<ExtArgs>[]
      accountsReceivable: Prisma.$AccountsReceivablePayload<ExtArgs>[]
      debtors: Prisma.$DebtorPayload<ExtArgs>[]
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subdomain: string
      clientId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    tenantConfigs<T extends Tenant$tenantConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$tenantConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    accountsReceivable<T extends Tenant$accountsReceivableArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$accountsReceivableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    debtors<T extends Tenant$debtorsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$debtorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    employees<T extends Tenant$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly subdomain: FieldRef<"Tenant", 'String'>
    readonly clientId: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant.tenantConfigs
   */
  export type Tenant$tenantConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    where?: TenantConfigWhereInput
    orderBy?: TenantConfigOrderByWithRelationInput | TenantConfigOrderByWithRelationInput[]
    cursor?: TenantConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantConfigScalarFieldEnum | TenantConfigScalarFieldEnum[]
  }

  /**
   * Tenant.accountsReceivable
   */
  export type Tenant$accountsReceivableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    where?: AccountsReceivableWhereInput
    orderBy?: AccountsReceivableOrderByWithRelationInput | AccountsReceivableOrderByWithRelationInput[]
    cursor?: AccountsReceivableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountsReceivableScalarFieldEnum | AccountsReceivableScalarFieldEnum[]
  }

  /**
   * Tenant.debtors
   */
  export type Tenant$debtorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    where?: DebtorWhereInput
    orderBy?: DebtorOrderByWithRelationInput | DebtorOrderByWithRelationInput[]
    cursor?: DebtorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebtorScalarFieldEnum | DebtorScalarFieldEnum[]
  }

  /**
   * Tenant.employees
   */
  export type Tenant$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    kvk: string | null
    contactEmail: string | null
    numberOfEmployees: string | null
    country: string | null
    address: string | null
    termsAccepted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    kvk: string | null
    contactEmail: string | null
    numberOfEmployees: string | null
    country: string | null
    address: string | null
    termsAccepted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    type: number
    name: number
    kvk: number
    contactEmail: number
    numberOfEmployees: number
    country: number
    address: number
    termsAccepted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    kvk?: true
    contactEmail?: true
    numberOfEmployees?: true
    country?: true
    address?: true
    termsAccepted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    kvk?: true
    contactEmail?: true
    numberOfEmployees?: true
    country?: true
    address?: true
    termsAccepted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    kvk?: true
    contactEmail?: true
    numberOfEmployees?: true
    country?: true
    address?: true
    termsAccepted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    type: string
    name: string
    kvk: string
    contactEmail: string
    numberOfEmployees: string
    country: string
    address: string
    termsAccepted: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    kvk?: boolean
    contactEmail?: boolean
    numberOfEmployees?: boolean
    country?: boolean
    address?: boolean
    termsAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | Client$tenantArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    kvk?: boolean
    contactEmail?: boolean
    numberOfEmployees?: boolean
    country?: boolean
    address?: boolean
    termsAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    kvk?: boolean
    contactEmail?: boolean
    numberOfEmployees?: boolean
    country?: boolean
    address?: boolean
    termsAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    kvk?: boolean
    contactEmail?: boolean
    numberOfEmployees?: boolean
    country?: boolean
    address?: boolean
    termsAccepted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "kvk" | "contactEmail" | "numberOfEmployees" | "country" | "address" | "termsAccepted" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | Client$tenantArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      name: string
      kvk: string
      contactEmail: string
      numberOfEmployees: string
      country: string
      address: string
      termsAccepted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends Client$tenantArgs<ExtArgs> = {}>(args?: Subset<T, Client$tenantArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly type: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly kvk: FieldRef<"Client", 'String'>
    readonly contactEmail: FieldRef<"Client", 'String'>
    readonly numberOfEmployees: FieldRef<"Client", 'String'>
    readonly country: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly termsAccepted: FieldRef<"Client", 'Boolean'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.tenant
   */
  export type Client$tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


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
    tenantId: string | null
    email: string | null
    fullname: string | null
    password: string | null
    country: string | null
    phone: string | null
    typeIdentification: string | null
    identification: string | null
    emailVerified: boolean | null
    verificationToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resetPasswordToken: string | null
    joined: Date | null
    invitedById: string | null
    lastActive: Date | null
    status: string | null
    invitationToken: string | null
    roleId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    fullname: string | null
    password: string | null
    country: string | null
    phone: string | null
    typeIdentification: string | null
    identification: string | null
    emailVerified: boolean | null
    verificationToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resetPasswordToken: string | null
    joined: Date | null
    invitedById: string | null
    lastActive: Date | null
    status: string | null
    invitationToken: string | null
    roleId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    tenantId: number
    email: number
    fullname: number
    password: number
    country: number
    phone: number
    typeIdentification: number
    identification: number
    emailVerified: number
    verificationToken: number
    createdAt: number
    updatedAt: number
    resetPasswordToken: number
    joined: number
    invitedById: number
    lastActive: number
    status: number
    invitationToken: number
    roleId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    fullname?: true
    password?: true
    country?: true
    phone?: true
    typeIdentification?: true
    identification?: true
    emailVerified?: true
    verificationToken?: true
    createdAt?: true
    updatedAt?: true
    resetPasswordToken?: true
    joined?: true
    invitedById?: true
    lastActive?: true
    status?: true
    invitationToken?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    fullname?: true
    password?: true
    country?: true
    phone?: true
    typeIdentification?: true
    identification?: true
    emailVerified?: true
    verificationToken?: true
    createdAt?: true
    updatedAt?: true
    resetPasswordToken?: true
    joined?: true
    invitedById?: true
    lastActive?: true
    status?: true
    invitationToken?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    fullname?: true
    password?: true
    country?: true
    phone?: true
    typeIdentification?: true
    identification?: true
    emailVerified?: true
    verificationToken?: true
    createdAt?: true
    updatedAt?: true
    resetPasswordToken?: true
    joined?: true
    invitedById?: true
    lastActive?: true
    status?: true
    invitationToken?: true
    roleId?: true
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
    tenantId: string
    email: string
    fullname: string | null
    password: string | null
    country: string | null
    phone: string | null
    typeIdentification: string | null
    identification: string | null
    emailVerified: boolean
    verificationToken: string | null
    createdAt: Date
    updatedAt: Date
    resetPasswordToken: string | null
    joined: Date | null
    invitedById: string | null
    lastActive: Date | null
    status: string
    invitationToken: string | null
    roleId: string
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
    tenantId?: boolean
    email?: boolean
    fullname?: boolean
    password?: boolean
    country?: boolean
    phone?: boolean
    typeIdentification?: boolean
    identification?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordToken?: boolean
    joined?: boolean
    invitedById?: boolean
    lastActive?: boolean
    status?: boolean
    invitationToken?: boolean
    roleId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    invitedBy?: boolean | User$invitedByArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    debtors?: boolean | User$debtorsArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    fullname?: boolean
    password?: boolean
    country?: boolean
    phone?: boolean
    typeIdentification?: boolean
    identification?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordToken?: boolean
    joined?: boolean
    invitedById?: boolean
    lastActive?: boolean
    status?: boolean
    invitationToken?: boolean
    roleId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    invitedBy?: boolean | User$invitedByArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    fullname?: boolean
    password?: boolean
    country?: boolean
    phone?: boolean
    typeIdentification?: boolean
    identification?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordToken?: boolean
    joined?: boolean
    invitedById?: boolean
    lastActive?: boolean
    status?: boolean
    invitationToken?: boolean
    roleId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    invitedBy?: boolean | User$invitedByArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    tenantId?: boolean
    email?: boolean
    fullname?: boolean
    password?: boolean
    country?: boolean
    phone?: boolean
    typeIdentification?: boolean
    identification?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordToken?: boolean
    joined?: boolean
    invitedById?: boolean
    lastActive?: boolean
    status?: boolean
    invitationToken?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "email" | "fullname" | "password" | "country" | "phone" | "typeIdentification" | "identification" | "emailVerified" | "verificationToken" | "createdAt" | "updatedAt" | "resetPasswordToken" | "joined" | "invitedById" | "lastActive" | "status" | "invitationToken" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    invitedBy?: boolean | User$invitedByArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    debtors?: boolean | User$debtorsArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    invitedBy?: boolean | User$invitedByArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    invitedBy?: boolean | User$invitedByArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      invitedBy: Prisma.$UserPayload<ExtArgs> | null
      invitations: Prisma.$UserPayload<ExtArgs>[]
      debtors: Prisma.$DebtorPayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      email: string
      fullname: string | null
      password: string | null
      country: string | null
      phone: string | null
      typeIdentification: string | null
      identification: string | null
      emailVerified: boolean
      verificationToken: string | null
      createdAt: Date
      updatedAt: Date
      resetPasswordToken: string | null
      joined: Date | null
      invitedById: string | null
      lastActive: Date | null
      status: string
      invitationToken: string | null
      roleId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    invitedBy<T extends User$invitedByArgs<ExtArgs> = {}>(args?: Subset<T, User$invitedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    invitations<T extends User$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    debtors<T extends User$debtorsArgs<ExtArgs> = {}>(args?: Subset<T, User$debtorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
    readonly tenantId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly typeIdentification: FieldRef<"User", 'String'>
    readonly identification: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly joined: FieldRef<"User", 'DateTime'>
    readonly invitedById: FieldRef<"User", 'String'>
    readonly lastActive: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'String'>
    readonly invitationToken: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.invitedBy
   */
  export type User$invitedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * User.invitations
   */
  export type User$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.debtors
   */
  export type User$debtorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    where?: DebtorWhereInput
    orderBy?: DebtorOrderByWithRelationInput | DebtorOrderByWithRelationInput[]
    cursor?: DebtorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebtorScalarFieldEnum | DebtorScalarFieldEnum[]
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
   * Model GlobalParameter
   */

  export type AggregateGlobalParameter = {
    _count: GlobalParameterCountAggregateOutputType | null
    _avg: GlobalParameterAvgAggregateOutputType | null
    _sum: GlobalParameterSumAggregateOutputType | null
    _min: GlobalParameterMinAggregateOutputType | null
    _max: GlobalParameterMaxAggregateOutputType | null
  }

  export type GlobalParameterAvgAggregateOutputType = {
    porcCobranza: number | null
    porcAbb: number | null
    diasPlazoEmpresaAanmaning: number | null
    diasPlazoConsumidorAanmaning: number | null
    diasPlazoEmpresaSommatie: number | null
    diasPlazoConsumidorSommatie: number | null
    precioEmpresaPequena: number | null
    contribucionEmpresaPequenaPfc: number | null
    precioEmpresaGrande: number | null
    contribucionEmpresaGrandePfc: number | null
  }

  export type GlobalParameterSumAggregateOutputType = {
    porcCobranza: number | null
    porcAbb: number | null
    diasPlazoEmpresaAanmaning: number | null
    diasPlazoConsumidorAanmaning: number | null
    diasPlazoEmpresaSommatie: number | null
    diasPlazoConsumidorSommatie: number | null
    precioEmpresaPequena: number | null
    contribucionEmpresaPequenaPfc: number | null
    precioEmpresaGrande: number | null
    contribucionEmpresaGrandePfc: number | null
  }

  export type GlobalParameterMinAggregateOutputType = {
    id: string | null
    porcCobranza: number | null
    porcAbb: number | null
    diasPlazoEmpresaAanmaning: number | null
    diasPlazoConsumidorAanmaning: number | null
    diasPlazoEmpresaSommatie: number | null
    diasPlazoConsumidorSommatie: number | null
    precioEmpresaPequena: number | null
    contribucionEmpresaPequenaPfc: number | null
    precioEmpresaGrande: number | null
    contribucionEmpresaGrandePfc: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalParameterMaxAggregateOutputType = {
    id: string | null
    porcCobranza: number | null
    porcAbb: number | null
    diasPlazoEmpresaAanmaning: number | null
    diasPlazoConsumidorAanmaning: number | null
    diasPlazoEmpresaSommatie: number | null
    diasPlazoConsumidorSommatie: number | null
    precioEmpresaPequena: number | null
    contribucionEmpresaPequenaPfc: number | null
    precioEmpresaGrande: number | null
    contribucionEmpresaGrandePfc: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GlobalParameterCountAggregateOutputType = {
    id: number
    porcCobranza: number
    porcAbb: number
    diasPlazoEmpresaAanmaning: number
    diasPlazoConsumidorAanmaning: number
    diasPlazoEmpresaSommatie: number
    diasPlazoConsumidorSommatie: number
    precioEmpresaPequena: number
    contribucionEmpresaPequenaPfc: number
    precioEmpresaGrande: number
    contribucionEmpresaGrandePfc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GlobalParameterAvgAggregateInputType = {
    porcCobranza?: true
    porcAbb?: true
    diasPlazoEmpresaAanmaning?: true
    diasPlazoConsumidorAanmaning?: true
    diasPlazoEmpresaSommatie?: true
    diasPlazoConsumidorSommatie?: true
    precioEmpresaPequena?: true
    contribucionEmpresaPequenaPfc?: true
    precioEmpresaGrande?: true
    contribucionEmpresaGrandePfc?: true
  }

  export type GlobalParameterSumAggregateInputType = {
    porcCobranza?: true
    porcAbb?: true
    diasPlazoEmpresaAanmaning?: true
    diasPlazoConsumidorAanmaning?: true
    diasPlazoEmpresaSommatie?: true
    diasPlazoConsumidorSommatie?: true
    precioEmpresaPequena?: true
    contribucionEmpresaPequenaPfc?: true
    precioEmpresaGrande?: true
    contribucionEmpresaGrandePfc?: true
  }

  export type GlobalParameterMinAggregateInputType = {
    id?: true
    porcCobranza?: true
    porcAbb?: true
    diasPlazoEmpresaAanmaning?: true
    diasPlazoConsumidorAanmaning?: true
    diasPlazoEmpresaSommatie?: true
    diasPlazoConsumidorSommatie?: true
    precioEmpresaPequena?: true
    contribucionEmpresaPequenaPfc?: true
    precioEmpresaGrande?: true
    contribucionEmpresaGrandePfc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalParameterMaxAggregateInputType = {
    id?: true
    porcCobranza?: true
    porcAbb?: true
    diasPlazoEmpresaAanmaning?: true
    diasPlazoConsumidorAanmaning?: true
    diasPlazoEmpresaSommatie?: true
    diasPlazoConsumidorSommatie?: true
    precioEmpresaPequena?: true
    contribucionEmpresaPequenaPfc?: true
    precioEmpresaGrande?: true
    contribucionEmpresaGrandePfc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GlobalParameterCountAggregateInputType = {
    id?: true
    porcCobranza?: true
    porcAbb?: true
    diasPlazoEmpresaAanmaning?: true
    diasPlazoConsumidorAanmaning?: true
    diasPlazoEmpresaSommatie?: true
    diasPlazoConsumidorSommatie?: true
    precioEmpresaPequena?: true
    contribucionEmpresaPequenaPfc?: true
    precioEmpresaGrande?: true
    contribucionEmpresaGrandePfc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GlobalParameterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalParameter to aggregate.
     */
    where?: GlobalParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalParameters to fetch.
     */
    orderBy?: GlobalParameterOrderByWithRelationInput | GlobalParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalParameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalParameters
    **/
    _count?: true | GlobalParameterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalParameterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalParameterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalParameterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalParameterMaxAggregateInputType
  }

  export type GetGlobalParameterAggregateType<T extends GlobalParameterAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalParameter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalParameter[P]>
      : GetScalarType<T[P], AggregateGlobalParameter[P]>
  }




  export type GlobalParameterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalParameterWhereInput
    orderBy?: GlobalParameterOrderByWithAggregationInput | GlobalParameterOrderByWithAggregationInput[]
    by: GlobalParameterScalarFieldEnum[] | GlobalParameterScalarFieldEnum
    having?: GlobalParameterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalParameterCountAggregateInputType | true
    _avg?: GlobalParameterAvgAggregateInputType
    _sum?: GlobalParameterSumAggregateInputType
    _min?: GlobalParameterMinAggregateInputType
    _max?: GlobalParameterMaxAggregateInputType
  }

  export type GlobalParameterGroupByOutputType = {
    id: string
    porcCobranza: number
    porcAbb: number
    diasPlazoEmpresaAanmaning: number
    diasPlazoConsumidorAanmaning: number
    diasPlazoEmpresaSommatie: number
    diasPlazoConsumidorSommatie: number
    precioEmpresaPequena: number
    contribucionEmpresaPequenaPfc: number
    precioEmpresaGrande: number
    contribucionEmpresaGrandePfc: number
    createdAt: Date
    updatedAt: Date
    _count: GlobalParameterCountAggregateOutputType | null
    _avg: GlobalParameterAvgAggregateOutputType | null
    _sum: GlobalParameterSumAggregateOutputType | null
    _min: GlobalParameterMinAggregateOutputType | null
    _max: GlobalParameterMaxAggregateOutputType | null
  }

  type GetGlobalParameterGroupByPayload<T extends GlobalParameterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalParameterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalParameterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalParameterGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalParameterGroupByOutputType[P]>
        }
      >
    >


  export type GlobalParameterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    porcCobranza?: boolean
    porcAbb?: boolean
    diasPlazoEmpresaAanmaning?: boolean
    diasPlazoConsumidorAanmaning?: boolean
    diasPlazoEmpresaSommatie?: boolean
    diasPlazoConsumidorSommatie?: boolean
    precioEmpresaPequena?: boolean
    contribucionEmpresaPequenaPfc?: boolean
    precioEmpresaGrande?: boolean
    contribucionEmpresaGrandePfc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantConfigs?: boolean | GlobalParameter$tenantConfigsArgs<ExtArgs>
    _count?: boolean | GlobalParameterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalParameter"]>

  export type GlobalParameterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    porcCobranza?: boolean
    porcAbb?: boolean
    diasPlazoEmpresaAanmaning?: boolean
    diasPlazoConsumidorAanmaning?: boolean
    diasPlazoEmpresaSommatie?: boolean
    diasPlazoConsumidorSommatie?: boolean
    precioEmpresaPequena?: boolean
    contribucionEmpresaPequenaPfc?: boolean
    precioEmpresaGrande?: boolean
    contribucionEmpresaGrandePfc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalParameter"]>

  export type GlobalParameterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    porcCobranza?: boolean
    porcAbb?: boolean
    diasPlazoEmpresaAanmaning?: boolean
    diasPlazoConsumidorAanmaning?: boolean
    diasPlazoEmpresaSommatie?: boolean
    diasPlazoConsumidorSommatie?: boolean
    precioEmpresaPequena?: boolean
    contribucionEmpresaPequenaPfc?: boolean
    precioEmpresaGrande?: boolean
    contribucionEmpresaGrandePfc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalParameter"]>

  export type GlobalParameterSelectScalar = {
    id?: boolean
    porcCobranza?: boolean
    porcAbb?: boolean
    diasPlazoEmpresaAanmaning?: boolean
    diasPlazoConsumidorAanmaning?: boolean
    diasPlazoEmpresaSommatie?: boolean
    diasPlazoConsumidorSommatie?: boolean
    precioEmpresaPequena?: boolean
    contribucionEmpresaPequenaPfc?: boolean
    precioEmpresaGrande?: boolean
    contribucionEmpresaGrandePfc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GlobalParameterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "porcCobranza" | "porcAbb" | "diasPlazoEmpresaAanmaning" | "diasPlazoConsumidorAanmaning" | "diasPlazoEmpresaSommatie" | "diasPlazoConsumidorSommatie" | "precioEmpresaPequena" | "contribucionEmpresaPequenaPfc" | "precioEmpresaGrande" | "contribucionEmpresaGrandePfc" | "createdAt" | "updatedAt", ExtArgs["result"]["globalParameter"]>
  export type GlobalParameterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenantConfigs?: boolean | GlobalParameter$tenantConfigsArgs<ExtArgs>
    _count?: boolean | GlobalParameterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GlobalParameterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GlobalParameterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GlobalParameterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalParameter"
    objects: {
      tenantConfigs: Prisma.$TenantConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      porcCobranza: number
      porcAbb: number
      diasPlazoEmpresaAanmaning: number
      diasPlazoConsumidorAanmaning: number
      diasPlazoEmpresaSommatie: number
      diasPlazoConsumidorSommatie: number
      precioEmpresaPequena: number
      contribucionEmpresaPequenaPfc: number
      precioEmpresaGrande: number
      contribucionEmpresaGrandePfc: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["globalParameter"]>
    composites: {}
  }

  type GlobalParameterGetPayload<S extends boolean | null | undefined | GlobalParameterDefaultArgs> = $Result.GetResult<Prisma.$GlobalParameterPayload, S>

  type GlobalParameterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalParameterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalParameterCountAggregateInputType | true
    }

  export interface GlobalParameterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalParameter'], meta: { name: 'GlobalParameter' } }
    /**
     * Find zero or one GlobalParameter that matches the filter.
     * @param {GlobalParameterFindUniqueArgs} args - Arguments to find a GlobalParameter
     * @example
     * // Get one GlobalParameter
     * const globalParameter = await prisma.globalParameter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalParameterFindUniqueArgs>(args: SelectSubset<T, GlobalParameterFindUniqueArgs<ExtArgs>>): Prisma__GlobalParameterClient<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one GlobalParameter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalParameterFindUniqueOrThrowArgs} args - Arguments to find a GlobalParameter
     * @example
     * // Get one GlobalParameter
     * const globalParameter = await prisma.globalParameter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalParameterFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalParameterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalParameterClient<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first GlobalParameter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalParameterFindFirstArgs} args - Arguments to find a GlobalParameter
     * @example
     * // Get one GlobalParameter
     * const globalParameter = await prisma.globalParameter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalParameterFindFirstArgs>(args?: SelectSubset<T, GlobalParameterFindFirstArgs<ExtArgs>>): Prisma__GlobalParameterClient<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first GlobalParameter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalParameterFindFirstOrThrowArgs} args - Arguments to find a GlobalParameter
     * @example
     * // Get one GlobalParameter
     * const globalParameter = await prisma.globalParameter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalParameterFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalParameterFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalParameterClient<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more GlobalParameters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalParameterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalParameters
     * const globalParameters = await prisma.globalParameter.findMany()
     * 
     * // Get first 10 GlobalParameters
     * const globalParameters = await prisma.globalParameter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalParameterWithIdOnly = await prisma.globalParameter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalParameterFindManyArgs>(args?: SelectSubset<T, GlobalParameterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a GlobalParameter.
     * @param {GlobalParameterCreateArgs} args - Arguments to create a GlobalParameter.
     * @example
     * // Create one GlobalParameter
     * const GlobalParameter = await prisma.globalParameter.create({
     *   data: {
     *     // ... data to create a GlobalParameter
     *   }
     * })
     * 
     */
    create<T extends GlobalParameterCreateArgs>(args: SelectSubset<T, GlobalParameterCreateArgs<ExtArgs>>): Prisma__GlobalParameterClient<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many GlobalParameters.
     * @param {GlobalParameterCreateManyArgs} args - Arguments to create many GlobalParameters.
     * @example
     * // Create many GlobalParameters
     * const globalParameter = await prisma.globalParameter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalParameterCreateManyArgs>(args?: SelectSubset<T, GlobalParameterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalParameters and returns the data saved in the database.
     * @param {GlobalParameterCreateManyAndReturnArgs} args - Arguments to create many GlobalParameters.
     * @example
     * // Create many GlobalParameters
     * const globalParameter = await prisma.globalParameter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalParameters and only return the `id`
     * const globalParameterWithIdOnly = await prisma.globalParameter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalParameterCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalParameterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a GlobalParameter.
     * @param {GlobalParameterDeleteArgs} args - Arguments to delete one GlobalParameter.
     * @example
     * // Delete one GlobalParameter
     * const GlobalParameter = await prisma.globalParameter.delete({
     *   where: {
     *     // ... filter to delete one GlobalParameter
     *   }
     * })
     * 
     */
    delete<T extends GlobalParameterDeleteArgs>(args: SelectSubset<T, GlobalParameterDeleteArgs<ExtArgs>>): Prisma__GlobalParameterClient<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one GlobalParameter.
     * @param {GlobalParameterUpdateArgs} args - Arguments to update one GlobalParameter.
     * @example
     * // Update one GlobalParameter
     * const globalParameter = await prisma.globalParameter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalParameterUpdateArgs>(args: SelectSubset<T, GlobalParameterUpdateArgs<ExtArgs>>): Prisma__GlobalParameterClient<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more GlobalParameters.
     * @param {GlobalParameterDeleteManyArgs} args - Arguments to filter GlobalParameters to delete.
     * @example
     * // Delete a few GlobalParameters
     * const { count } = await prisma.globalParameter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalParameterDeleteManyArgs>(args?: SelectSubset<T, GlobalParameterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalParameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalParameterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalParameters
     * const globalParameter = await prisma.globalParameter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalParameterUpdateManyArgs>(args: SelectSubset<T, GlobalParameterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalParameters and returns the data updated in the database.
     * @param {GlobalParameterUpdateManyAndReturnArgs} args - Arguments to update many GlobalParameters.
     * @example
     * // Update many GlobalParameters
     * const globalParameter = await prisma.globalParameter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalParameters and only return the `id`
     * const globalParameterWithIdOnly = await prisma.globalParameter.updateManyAndReturn({
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
    updateManyAndReturn<T extends GlobalParameterUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalParameterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one GlobalParameter.
     * @param {GlobalParameterUpsertArgs} args - Arguments to update or create a GlobalParameter.
     * @example
     * // Update or create a GlobalParameter
     * const globalParameter = await prisma.globalParameter.upsert({
     *   create: {
     *     // ... data to create a GlobalParameter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalParameter we want to update
     *   }
     * })
     */
    upsert<T extends GlobalParameterUpsertArgs>(args: SelectSubset<T, GlobalParameterUpsertArgs<ExtArgs>>): Prisma__GlobalParameterClient<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of GlobalParameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalParameterCountArgs} args - Arguments to filter GlobalParameters to count.
     * @example
     * // Count the number of GlobalParameters
     * const count = await prisma.globalParameter.count({
     *   where: {
     *     // ... the filter for the GlobalParameters we want to count
     *   }
     * })
    **/
    count<T extends GlobalParameterCountArgs>(
      args?: Subset<T, GlobalParameterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalParameterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalParameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalParameterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlobalParameterAggregateArgs>(args: Subset<T, GlobalParameterAggregateArgs>): Prisma.PrismaPromise<GetGlobalParameterAggregateType<T>>

    /**
     * Group by GlobalParameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalParameterGroupByArgs} args - Group by arguments.
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
      T extends GlobalParameterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalParameterGroupByArgs['orderBy'] }
        : { orderBy?: GlobalParameterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlobalParameterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalParameterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalParameter model
   */
  readonly fields: GlobalParameterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalParameter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalParameterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenantConfigs<T extends GlobalParameter$tenantConfigsArgs<ExtArgs> = {}>(args?: Subset<T, GlobalParameter$tenantConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the GlobalParameter model
   */ 
  interface GlobalParameterFieldRefs {
    readonly id: FieldRef<"GlobalParameter", 'String'>
    readonly porcCobranza: FieldRef<"GlobalParameter", 'Float'>
    readonly porcAbb: FieldRef<"GlobalParameter", 'Float'>
    readonly diasPlazoEmpresaAanmaning: FieldRef<"GlobalParameter", 'Int'>
    readonly diasPlazoConsumidorAanmaning: FieldRef<"GlobalParameter", 'Int'>
    readonly diasPlazoEmpresaSommatie: FieldRef<"GlobalParameter", 'Int'>
    readonly diasPlazoConsumidorSommatie: FieldRef<"GlobalParameter", 'Int'>
    readonly precioEmpresaPequena: FieldRef<"GlobalParameter", 'Float'>
    readonly contribucionEmpresaPequenaPfc: FieldRef<"GlobalParameter", 'Float'>
    readonly precioEmpresaGrande: FieldRef<"GlobalParameter", 'Float'>
    readonly contribucionEmpresaGrandePfc: FieldRef<"GlobalParameter", 'Float'>
    readonly createdAt: FieldRef<"GlobalParameter", 'DateTime'>
    readonly updatedAt: FieldRef<"GlobalParameter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalParameter findUnique
   */
  export type GlobalParameterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalParameterInclude<ExtArgs> | null
    /**
     * Filter, which GlobalParameter to fetch.
     */
    where: GlobalParameterWhereUniqueInput
  }

  /**
   * GlobalParameter findUniqueOrThrow
   */
  export type GlobalParameterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalParameterInclude<ExtArgs> | null
    /**
     * Filter, which GlobalParameter to fetch.
     */
    where: GlobalParameterWhereUniqueInput
  }

  /**
   * GlobalParameter findFirst
   */
  export type GlobalParameterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalParameterInclude<ExtArgs> | null
    /**
     * Filter, which GlobalParameter to fetch.
     */
    where?: GlobalParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalParameters to fetch.
     */
    orderBy?: GlobalParameterOrderByWithRelationInput | GlobalParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalParameters.
     */
    cursor?: GlobalParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalParameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalParameters.
     */
    distinct?: GlobalParameterScalarFieldEnum | GlobalParameterScalarFieldEnum[]
  }

  /**
   * GlobalParameter findFirstOrThrow
   */
  export type GlobalParameterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalParameterInclude<ExtArgs> | null
    /**
     * Filter, which GlobalParameter to fetch.
     */
    where?: GlobalParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalParameters to fetch.
     */
    orderBy?: GlobalParameterOrderByWithRelationInput | GlobalParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalParameters.
     */
    cursor?: GlobalParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalParameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalParameters.
     */
    distinct?: GlobalParameterScalarFieldEnum | GlobalParameterScalarFieldEnum[]
  }

  /**
   * GlobalParameter findMany
   */
  export type GlobalParameterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalParameterInclude<ExtArgs> | null
    /**
     * Filter, which GlobalParameters to fetch.
     */
    where?: GlobalParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalParameters to fetch.
     */
    orderBy?: GlobalParameterOrderByWithRelationInput | GlobalParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalParameters.
     */
    cursor?: GlobalParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalParameters.
     */
    skip?: number
    distinct?: GlobalParameterScalarFieldEnum | GlobalParameterScalarFieldEnum[]
  }

  /**
   * GlobalParameter create
   */
  export type GlobalParameterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalParameterInclude<ExtArgs> | null
    /**
     * The data needed to create a GlobalParameter.
     */
    data: XOR<GlobalParameterCreateInput, GlobalParameterUncheckedCreateInput>
  }

  /**
   * GlobalParameter createMany
   */
  export type GlobalParameterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalParameters.
     */
    data: GlobalParameterCreateManyInput | GlobalParameterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalParameter createManyAndReturn
   */
  export type GlobalParameterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalParameters.
     */
    data: GlobalParameterCreateManyInput | GlobalParameterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalParameter update
   */
  export type GlobalParameterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalParameterInclude<ExtArgs> | null
    /**
     * The data needed to update a GlobalParameter.
     */
    data: XOR<GlobalParameterUpdateInput, GlobalParameterUncheckedUpdateInput>
    /**
     * Choose, which GlobalParameter to update.
     */
    where: GlobalParameterWhereUniqueInput
  }

  /**
   * GlobalParameter updateMany
   */
  export type GlobalParameterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalParameters.
     */
    data: XOR<GlobalParameterUpdateManyMutationInput, GlobalParameterUncheckedUpdateManyInput>
    /**
     * Filter which GlobalParameters to update
     */
    where?: GlobalParameterWhereInput
    /**
     * Limit how many GlobalParameters to update.
     */
    limit?: number
  }

  /**
   * GlobalParameter updateManyAndReturn
   */
  export type GlobalParameterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * The data used to update GlobalParameters.
     */
    data: XOR<GlobalParameterUpdateManyMutationInput, GlobalParameterUncheckedUpdateManyInput>
    /**
     * Filter which GlobalParameters to update
     */
    where?: GlobalParameterWhereInput
    /**
     * Limit how many GlobalParameters to update.
     */
    limit?: number
  }

  /**
   * GlobalParameter upsert
   */
  export type GlobalParameterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalParameterInclude<ExtArgs> | null
    /**
     * The filter to search for the GlobalParameter to update in case it exists.
     */
    where: GlobalParameterWhereUniqueInput
    /**
     * In case the GlobalParameter found by the `where` argument doesn't exist, create a new GlobalParameter with this data.
     */
    create: XOR<GlobalParameterCreateInput, GlobalParameterUncheckedCreateInput>
    /**
     * In case the GlobalParameter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalParameterUpdateInput, GlobalParameterUncheckedUpdateInput>
  }

  /**
   * GlobalParameter delete
   */
  export type GlobalParameterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalParameterInclude<ExtArgs> | null
    /**
     * Filter which GlobalParameter to delete.
     */
    where: GlobalParameterWhereUniqueInput
  }

  /**
   * GlobalParameter deleteMany
   */
  export type GlobalParameterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalParameters to delete
     */
    where?: GlobalParameterWhereInput
    /**
     * Limit how many GlobalParameters to delete.
     */
    limit?: number
  }

  /**
   * GlobalParameter.tenantConfigs
   */
  export type GlobalParameter$tenantConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    where?: TenantConfigWhereInput
    orderBy?: TenantConfigOrderByWithRelationInput | TenantConfigOrderByWithRelationInput[]
    cursor?: TenantConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantConfigScalarFieldEnum | TenantConfigScalarFieldEnum[]
  }

  /**
   * GlobalParameter without action
   */
  export type GlobalParameterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalParameter
     */
    select?: GlobalParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalParameter
     */
    omit?: GlobalParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalParameterInclude<ExtArgs> | null
  }


  /**
   * Model TenantConfig
   */

  export type AggregateTenantConfig = {
    _count: TenantConfigCountAggregateOutputType | null
    _avg: TenantConfigAvgAggregateOutputType | null
    _sum: TenantConfigSumAggregateOutputType | null
    _min: TenantConfigMinAggregateOutputType | null
    _max: TenantConfigMaxAggregateOutputType | null
  }

  export type TenantConfigAvgAggregateOutputType = {
    porcInteresCobranza: number | null
  }

  export type TenantConfigSumAggregateOutputType = {
    porcInteresCobranza: number | null
  }

  export type TenantConfigMinAggregateOutputType = {
    tenantId: string | null
    parameterId: string | null
    porcInteresCobranza: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantConfigMaxAggregateOutputType = {
    tenantId: string | null
    parameterId: string | null
    porcInteresCobranza: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantConfigCountAggregateOutputType = {
    tenantId: number
    parameterId: number
    porcInteresCobranza: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantConfigAvgAggregateInputType = {
    porcInteresCobranza?: true
  }

  export type TenantConfigSumAggregateInputType = {
    porcInteresCobranza?: true
  }

  export type TenantConfigMinAggregateInputType = {
    tenantId?: true
    parameterId?: true
    porcInteresCobranza?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantConfigMaxAggregateInputType = {
    tenantId?: true
    parameterId?: true
    porcInteresCobranza?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantConfigCountAggregateInputType = {
    tenantId?: true
    parameterId?: true
    porcInteresCobranza?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantConfig to aggregate.
     */
    where?: TenantConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantConfigs to fetch.
     */
    orderBy?: TenantConfigOrderByWithRelationInput | TenantConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantConfigs
    **/
    _count?: true | TenantConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantConfigMaxAggregateInputType
  }

  export type GetTenantConfigAggregateType<T extends TenantConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantConfig[P]>
      : GetScalarType<T[P], AggregateTenantConfig[P]>
  }




  export type TenantConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantConfigWhereInput
    orderBy?: TenantConfigOrderByWithAggregationInput | TenantConfigOrderByWithAggregationInput[]
    by: TenantConfigScalarFieldEnum[] | TenantConfigScalarFieldEnum
    having?: TenantConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantConfigCountAggregateInputType | true
    _avg?: TenantConfigAvgAggregateInputType
    _sum?: TenantConfigSumAggregateInputType
    _min?: TenantConfigMinAggregateInputType
    _max?: TenantConfigMaxAggregateInputType
  }

  export type TenantConfigGroupByOutputType = {
    tenantId: string
    parameterId: string
    porcInteresCobranza: number
    createdAt: Date
    updatedAt: Date
    _count: TenantConfigCountAggregateOutputType | null
    _avg: TenantConfigAvgAggregateOutputType | null
    _sum: TenantConfigSumAggregateOutputType | null
    _min: TenantConfigMinAggregateOutputType | null
    _max: TenantConfigMaxAggregateOutputType | null
  }

  type GetTenantConfigGroupByPayload<T extends TenantConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantConfigGroupByOutputType[P]>
            : GetScalarType<T[P], TenantConfigGroupByOutputType[P]>
        }
      >
    >


  export type TenantConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenantId?: boolean
    parameterId?: boolean
    porcInteresCobranza?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    parameter?: boolean | GlobalParameterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantConfig"]>

  export type TenantConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenantId?: boolean
    parameterId?: boolean
    porcInteresCobranza?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    parameter?: boolean | GlobalParameterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantConfig"]>

  export type TenantConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenantId?: boolean
    parameterId?: boolean
    porcInteresCobranza?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    parameter?: boolean | GlobalParameterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantConfig"]>

  export type TenantConfigSelectScalar = {
    tenantId?: boolean
    parameterId?: boolean
    porcInteresCobranza?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenantId" | "parameterId" | "porcInteresCobranza" | "createdAt" | "updatedAt", ExtArgs["result"]["tenantConfig"]>
  export type TenantConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    parameter?: boolean | GlobalParameterDefaultArgs<ExtArgs>
  }
  export type TenantConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    parameter?: boolean | GlobalParameterDefaultArgs<ExtArgs>
  }
  export type TenantConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    parameter?: boolean | GlobalParameterDefaultArgs<ExtArgs>
  }

  export type $TenantConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantConfig"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      parameter: Prisma.$GlobalParameterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tenantId: string
      parameterId: string
      porcInteresCobranza: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenantConfig"]>
    composites: {}
  }

  type TenantConfigGetPayload<S extends boolean | null | undefined | TenantConfigDefaultArgs> = $Result.GetResult<Prisma.$TenantConfigPayload, S>

  type TenantConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantConfigCountAggregateInputType | true
    }

  export interface TenantConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantConfig'], meta: { name: 'TenantConfig' } }
    /**
     * Find zero or one TenantConfig that matches the filter.
     * @param {TenantConfigFindUniqueArgs} args - Arguments to find a TenantConfig
     * @example
     * // Get one TenantConfig
     * const tenantConfig = await prisma.tenantConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantConfigFindUniqueArgs>(args: SelectSubset<T, TenantConfigFindUniqueArgs<ExtArgs>>): Prisma__TenantConfigClient<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TenantConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantConfigFindUniqueOrThrowArgs} args - Arguments to find a TenantConfig
     * @example
     * // Get one TenantConfig
     * const tenantConfig = await prisma.tenantConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantConfigClient<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TenantConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantConfigFindFirstArgs} args - Arguments to find a TenantConfig
     * @example
     * // Get one TenantConfig
     * const tenantConfig = await prisma.tenantConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantConfigFindFirstArgs>(args?: SelectSubset<T, TenantConfigFindFirstArgs<ExtArgs>>): Prisma__TenantConfigClient<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TenantConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantConfigFindFirstOrThrowArgs} args - Arguments to find a TenantConfig
     * @example
     * // Get one TenantConfig
     * const tenantConfig = await prisma.tenantConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantConfigClient<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TenantConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantConfigs
     * const tenantConfigs = await prisma.tenantConfig.findMany()
     * 
     * // Get first 10 TenantConfigs
     * const tenantConfigs = await prisma.tenantConfig.findMany({ take: 10 })
     * 
     * // Only select the `tenantId`
     * const tenantConfigWithTenantIdOnly = await prisma.tenantConfig.findMany({ select: { tenantId: true } })
     * 
     */
    findMany<T extends TenantConfigFindManyArgs>(args?: SelectSubset<T, TenantConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TenantConfig.
     * @param {TenantConfigCreateArgs} args - Arguments to create a TenantConfig.
     * @example
     * // Create one TenantConfig
     * const TenantConfig = await prisma.tenantConfig.create({
     *   data: {
     *     // ... data to create a TenantConfig
     *   }
     * })
     * 
     */
    create<T extends TenantConfigCreateArgs>(args: SelectSubset<T, TenantConfigCreateArgs<ExtArgs>>): Prisma__TenantConfigClient<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TenantConfigs.
     * @param {TenantConfigCreateManyArgs} args - Arguments to create many TenantConfigs.
     * @example
     * // Create many TenantConfigs
     * const tenantConfig = await prisma.tenantConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantConfigCreateManyArgs>(args?: SelectSubset<T, TenantConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantConfigs and returns the data saved in the database.
     * @param {TenantConfigCreateManyAndReturnArgs} args - Arguments to create many TenantConfigs.
     * @example
     * // Create many TenantConfigs
     * const tenantConfig = await prisma.tenantConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantConfigs and only return the `tenantId`
     * const tenantConfigWithTenantIdOnly = await prisma.tenantConfig.createManyAndReturn({
     *   select: { tenantId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TenantConfig.
     * @param {TenantConfigDeleteArgs} args - Arguments to delete one TenantConfig.
     * @example
     * // Delete one TenantConfig
     * const TenantConfig = await prisma.tenantConfig.delete({
     *   where: {
     *     // ... filter to delete one TenantConfig
     *   }
     * })
     * 
     */
    delete<T extends TenantConfigDeleteArgs>(args: SelectSubset<T, TenantConfigDeleteArgs<ExtArgs>>): Prisma__TenantConfigClient<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TenantConfig.
     * @param {TenantConfigUpdateArgs} args - Arguments to update one TenantConfig.
     * @example
     * // Update one TenantConfig
     * const tenantConfig = await prisma.tenantConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantConfigUpdateArgs>(args: SelectSubset<T, TenantConfigUpdateArgs<ExtArgs>>): Prisma__TenantConfigClient<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TenantConfigs.
     * @param {TenantConfigDeleteManyArgs} args - Arguments to filter TenantConfigs to delete.
     * @example
     * // Delete a few TenantConfigs
     * const { count } = await prisma.tenantConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantConfigDeleteManyArgs>(args?: SelectSubset<T, TenantConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantConfigs
     * const tenantConfig = await prisma.tenantConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantConfigUpdateManyArgs>(args: SelectSubset<T, TenantConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantConfigs and returns the data updated in the database.
     * @param {TenantConfigUpdateManyAndReturnArgs} args - Arguments to update many TenantConfigs.
     * @example
     * // Update many TenantConfigs
     * const tenantConfig = await prisma.tenantConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TenantConfigs and only return the `tenantId`
     * const tenantConfigWithTenantIdOnly = await prisma.tenantConfig.updateManyAndReturn({
     *   select: { tenantId: true },
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
    updateManyAndReturn<T extends TenantConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TenantConfig.
     * @param {TenantConfigUpsertArgs} args - Arguments to update or create a TenantConfig.
     * @example
     * // Update or create a TenantConfig
     * const tenantConfig = await prisma.tenantConfig.upsert({
     *   create: {
     *     // ... data to create a TenantConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantConfig we want to update
     *   }
     * })
     */
    upsert<T extends TenantConfigUpsertArgs>(args: SelectSubset<T, TenantConfigUpsertArgs<ExtArgs>>): Prisma__TenantConfigClient<$Result.GetResult<Prisma.$TenantConfigPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TenantConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantConfigCountArgs} args - Arguments to filter TenantConfigs to count.
     * @example
     * // Count the number of TenantConfigs
     * const count = await prisma.tenantConfig.count({
     *   where: {
     *     // ... the filter for the TenantConfigs we want to count
     *   }
     * })
    **/
    count<T extends TenantConfigCountArgs>(
      args?: Subset<T, TenantConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantConfigAggregateArgs>(args: Subset<T, TenantConfigAggregateArgs>): Prisma.PrismaPromise<GetTenantConfigAggregateType<T>>

    /**
     * Group by TenantConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantConfigGroupByArgs} args - Group by arguments.
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
      T extends TenantConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantConfigGroupByArgs['orderBy'] }
        : { orderBy?: TenantConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantConfig model
   */
  readonly fields: TenantConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    parameter<T extends GlobalParameterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GlobalParameterDefaultArgs<ExtArgs>>): Prisma__GlobalParameterClient<$Result.GetResult<Prisma.$GlobalParameterPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the TenantConfig model
   */ 
  interface TenantConfigFieldRefs {
    readonly tenantId: FieldRef<"TenantConfig", 'String'>
    readonly parameterId: FieldRef<"TenantConfig", 'String'>
    readonly porcInteresCobranza: FieldRef<"TenantConfig", 'Float'>
    readonly createdAt: FieldRef<"TenantConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"TenantConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenantConfig findUnique
   */
  export type TenantConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    /**
     * Filter, which TenantConfig to fetch.
     */
    where: TenantConfigWhereUniqueInput
  }

  /**
   * TenantConfig findUniqueOrThrow
   */
  export type TenantConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    /**
     * Filter, which TenantConfig to fetch.
     */
    where: TenantConfigWhereUniqueInput
  }

  /**
   * TenantConfig findFirst
   */
  export type TenantConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    /**
     * Filter, which TenantConfig to fetch.
     */
    where?: TenantConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantConfigs to fetch.
     */
    orderBy?: TenantConfigOrderByWithRelationInput | TenantConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantConfigs.
     */
    cursor?: TenantConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantConfigs.
     */
    distinct?: TenantConfigScalarFieldEnum | TenantConfigScalarFieldEnum[]
  }

  /**
   * TenantConfig findFirstOrThrow
   */
  export type TenantConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    /**
     * Filter, which TenantConfig to fetch.
     */
    where?: TenantConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantConfigs to fetch.
     */
    orderBy?: TenantConfigOrderByWithRelationInput | TenantConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantConfigs.
     */
    cursor?: TenantConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantConfigs.
     */
    distinct?: TenantConfigScalarFieldEnum | TenantConfigScalarFieldEnum[]
  }

  /**
   * TenantConfig findMany
   */
  export type TenantConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    /**
     * Filter, which TenantConfigs to fetch.
     */
    where?: TenantConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantConfigs to fetch.
     */
    orderBy?: TenantConfigOrderByWithRelationInput | TenantConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantConfigs.
     */
    cursor?: TenantConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantConfigs.
     */
    skip?: number
    distinct?: TenantConfigScalarFieldEnum | TenantConfigScalarFieldEnum[]
  }

  /**
   * TenantConfig create
   */
  export type TenantConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantConfig.
     */
    data: XOR<TenantConfigCreateInput, TenantConfigUncheckedCreateInput>
  }

  /**
   * TenantConfig createMany
   */
  export type TenantConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantConfigs.
     */
    data: TenantConfigCreateManyInput | TenantConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantConfig createManyAndReturn
   */
  export type TenantConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * The data used to create many TenantConfigs.
     */
    data: TenantConfigCreateManyInput | TenantConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantConfig update
   */
  export type TenantConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantConfig.
     */
    data: XOR<TenantConfigUpdateInput, TenantConfigUncheckedUpdateInput>
    /**
     * Choose, which TenantConfig to update.
     */
    where: TenantConfigWhereUniqueInput
  }

  /**
   * TenantConfig updateMany
   */
  export type TenantConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantConfigs.
     */
    data: XOR<TenantConfigUpdateManyMutationInput, TenantConfigUncheckedUpdateManyInput>
    /**
     * Filter which TenantConfigs to update
     */
    where?: TenantConfigWhereInput
    /**
     * Limit how many TenantConfigs to update.
     */
    limit?: number
  }

  /**
   * TenantConfig updateManyAndReturn
   */
  export type TenantConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * The data used to update TenantConfigs.
     */
    data: XOR<TenantConfigUpdateManyMutationInput, TenantConfigUncheckedUpdateManyInput>
    /**
     * Filter which TenantConfigs to update
     */
    where?: TenantConfigWhereInput
    /**
     * Limit how many TenantConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantConfig upsert
   */
  export type TenantConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantConfig to update in case it exists.
     */
    where: TenantConfigWhereUniqueInput
    /**
     * In case the TenantConfig found by the `where` argument doesn't exist, create a new TenantConfig with this data.
     */
    create: XOR<TenantConfigCreateInput, TenantConfigUncheckedCreateInput>
    /**
     * In case the TenantConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantConfigUpdateInput, TenantConfigUncheckedUpdateInput>
  }

  /**
   * TenantConfig delete
   */
  export type TenantConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
    /**
     * Filter which TenantConfig to delete.
     */
    where: TenantConfigWhereUniqueInput
  }

  /**
   * TenantConfig deleteMany
   */
  export type TenantConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantConfigs to delete
     */
    where?: TenantConfigWhereInput
    /**
     * Limit how many TenantConfigs to delete.
     */
    limit?: number
  }

  /**
   * TenantConfig without action
   */
  export type TenantConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantConfig
     */
    select?: TenantConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantConfig
     */
    omit?: TenantConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantConfigInclude<ExtArgs> | null
  }


  /**
   * Model AccountsReceivable
   */

  export type AggregateAccountsReceivable = {
    _count: AccountsReceivableCountAggregateOutputType | null
    _avg: AccountsReceivableAvgAggregateOutputType | null
    _sum: AccountsReceivableSumAggregateOutputType | null
    _min: AccountsReceivableMinAggregateOutputType | null
    _max: AccountsReceivableMaxAggregateOutputType | null
  }

  export type AccountsReceivableAvgAggregateOutputType = {
    invoiceAmount: number | null
    amountPaid: number | null
    outstandingBalance: number | null
  }

  export type AccountsReceivableSumAggregateOutputType = {
    invoiceAmount: number | null
    amountPaid: number | null
    outstandingBalance: number | null
  }

  export type AccountsReceivableMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    invoiceNumber: string | null
    issueDate: Date | null
    dueDate: Date | null
    customerName: string | null
    customerAddress: string | null
    customerEmail: string | null
    customerPhone: string | null
    invoiceAmount: number | null
    amountPaid: number | null
    outstandingBalance: number | null
    receivableStatus: string | null
    collectionStatus: string | null
    notes: string | null
    debtorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountsReceivableMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    invoiceNumber: string | null
    issueDate: Date | null
    dueDate: Date | null
    customerName: string | null
    customerAddress: string | null
    customerEmail: string | null
    customerPhone: string | null
    invoiceAmount: number | null
    amountPaid: number | null
    outstandingBalance: number | null
    receivableStatus: string | null
    collectionStatus: string | null
    notes: string | null
    debtorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountsReceivableCountAggregateOutputType = {
    id: number
    tenantId: number
    invoiceNumber: number
    issueDate: number
    dueDate: number
    customerName: number
    customerAddress: number
    customerEmail: number
    customerPhone: number
    invoiceAmount: number
    amountPaid: number
    outstandingBalance: number
    receivableStatus: number
    collectionStatus: number
    notes: number
    debtorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountsReceivableAvgAggregateInputType = {
    invoiceAmount?: true
    amountPaid?: true
    outstandingBalance?: true
  }

  export type AccountsReceivableSumAggregateInputType = {
    invoiceAmount?: true
    amountPaid?: true
    outstandingBalance?: true
  }

  export type AccountsReceivableMinAggregateInputType = {
    id?: true
    tenantId?: true
    invoiceNumber?: true
    issueDate?: true
    dueDate?: true
    customerName?: true
    customerAddress?: true
    customerEmail?: true
    customerPhone?: true
    invoiceAmount?: true
    amountPaid?: true
    outstandingBalance?: true
    receivableStatus?: true
    collectionStatus?: true
    notes?: true
    debtorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountsReceivableMaxAggregateInputType = {
    id?: true
    tenantId?: true
    invoiceNumber?: true
    issueDate?: true
    dueDate?: true
    customerName?: true
    customerAddress?: true
    customerEmail?: true
    customerPhone?: true
    invoiceAmount?: true
    amountPaid?: true
    outstandingBalance?: true
    receivableStatus?: true
    collectionStatus?: true
    notes?: true
    debtorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountsReceivableCountAggregateInputType = {
    id?: true
    tenantId?: true
    invoiceNumber?: true
    issueDate?: true
    dueDate?: true
    customerName?: true
    customerAddress?: true
    customerEmail?: true
    customerPhone?: true
    invoiceAmount?: true
    amountPaid?: true
    outstandingBalance?: true
    receivableStatus?: true
    collectionStatus?: true
    notes?: true
    debtorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountsReceivableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountsReceivable to aggregate.
     */
    where?: AccountsReceivableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsReceivables to fetch.
     */
    orderBy?: AccountsReceivableOrderByWithRelationInput | AccountsReceivableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsReceivableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsReceivables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsReceivables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountsReceivables
    **/
    _count?: true | AccountsReceivableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsReceivableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsReceivableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsReceivableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsReceivableMaxAggregateInputType
  }

  export type GetAccountsReceivableAggregateType<T extends AccountsReceivableAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountsReceivable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountsReceivable[P]>
      : GetScalarType<T[P], AggregateAccountsReceivable[P]>
  }




  export type AccountsReceivableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsReceivableWhereInput
    orderBy?: AccountsReceivableOrderByWithAggregationInput | AccountsReceivableOrderByWithAggregationInput[]
    by: AccountsReceivableScalarFieldEnum[] | AccountsReceivableScalarFieldEnum
    having?: AccountsReceivableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsReceivableCountAggregateInputType | true
    _avg?: AccountsReceivableAvgAggregateInputType
    _sum?: AccountsReceivableSumAggregateInputType
    _min?: AccountsReceivableMinAggregateInputType
    _max?: AccountsReceivableMaxAggregateInputType
  }

  export type AccountsReceivableGroupByOutputType = {
    id: string
    tenantId: string
    invoiceNumber: string
    issueDate: Date
    dueDate: Date
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid: number
    outstandingBalance: number
    receivableStatus: string
    collectionStatus: string | null
    notes: string | null
    debtorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountsReceivableCountAggregateOutputType | null
    _avg: AccountsReceivableAvgAggregateOutputType | null
    _sum: AccountsReceivableSumAggregateOutputType | null
    _min: AccountsReceivableMinAggregateOutputType | null
    _max: AccountsReceivableMaxAggregateOutputType | null
  }

  type GetAccountsReceivableGroupByPayload<T extends AccountsReceivableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsReceivableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsReceivableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsReceivableGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsReceivableGroupByOutputType[P]>
        }
      >
    >


  export type AccountsReceivableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    customerName?: boolean
    customerAddress?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    invoiceAmount?: boolean
    amountPaid?: boolean
    outstandingBalance?: boolean
    receivableStatus?: boolean
    collectionStatus?: boolean
    notes?: boolean
    debtorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    paymentDetail?: boolean | AccountsReceivable$paymentDetailArgs<ExtArgs>
    debtor?: boolean | AccountsReceivable$debtorArgs<ExtArgs>
    _count?: boolean | AccountsReceivableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountsReceivable"]>

  export type AccountsReceivableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    customerName?: boolean
    customerAddress?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    invoiceAmount?: boolean
    amountPaid?: boolean
    outstandingBalance?: boolean
    receivableStatus?: boolean
    collectionStatus?: boolean
    notes?: boolean
    debtorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    debtor?: boolean | AccountsReceivable$debtorArgs<ExtArgs>
  }, ExtArgs["result"]["accountsReceivable"]>

  export type AccountsReceivableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    customerName?: boolean
    customerAddress?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    invoiceAmount?: boolean
    amountPaid?: boolean
    outstandingBalance?: boolean
    receivableStatus?: boolean
    collectionStatus?: boolean
    notes?: boolean
    debtorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    debtor?: boolean | AccountsReceivable$debtorArgs<ExtArgs>
  }, ExtArgs["result"]["accountsReceivable"]>

  export type AccountsReceivableSelectScalar = {
    id?: boolean
    tenantId?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    customerName?: boolean
    customerAddress?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    invoiceAmount?: boolean
    amountPaid?: boolean
    outstandingBalance?: boolean
    receivableStatus?: boolean
    collectionStatus?: boolean
    notes?: boolean
    debtorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountsReceivableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "invoiceNumber" | "issueDate" | "dueDate" | "customerName" | "customerAddress" | "customerEmail" | "customerPhone" | "invoiceAmount" | "amountPaid" | "outstandingBalance" | "receivableStatus" | "collectionStatus" | "notes" | "debtorId" | "createdAt" | "updatedAt", ExtArgs["result"]["accountsReceivable"]>
  export type AccountsReceivableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    paymentDetail?: boolean | AccountsReceivable$paymentDetailArgs<ExtArgs>
    debtor?: boolean | AccountsReceivable$debtorArgs<ExtArgs>
    _count?: boolean | AccountsReceivableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountsReceivableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    debtor?: boolean | AccountsReceivable$debtorArgs<ExtArgs>
  }
  export type AccountsReceivableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    debtor?: boolean | AccountsReceivable$debtorArgs<ExtArgs>
  }

  export type $AccountsReceivablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountsReceivable"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      paymentDetail: Prisma.$PaymentDetailPayload<ExtArgs>[]
      debtor: Prisma.$DebtorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      invoiceNumber: string
      issueDate: Date
      dueDate: Date
      customerName: string
      customerAddress: string
      customerEmail: string
      customerPhone: string
      invoiceAmount: number
      amountPaid: number
      outstandingBalance: number
      receivableStatus: string
      collectionStatus: string | null
      notes: string | null
      debtorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountsReceivable"]>
    composites: {}
  }

  type AccountsReceivableGetPayload<S extends boolean | null | undefined | AccountsReceivableDefaultArgs> = $Result.GetResult<Prisma.$AccountsReceivablePayload, S>

  type AccountsReceivableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountsReceivableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsReceivableCountAggregateInputType | true
    }

  export interface AccountsReceivableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountsReceivable'], meta: { name: 'AccountsReceivable' } }
    /**
     * Find zero or one AccountsReceivable that matches the filter.
     * @param {AccountsReceivableFindUniqueArgs} args - Arguments to find a AccountsReceivable
     * @example
     * // Get one AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountsReceivableFindUniqueArgs>(args: SelectSubset<T, AccountsReceivableFindUniqueArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AccountsReceivable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountsReceivableFindUniqueOrThrowArgs} args - Arguments to find a AccountsReceivable
     * @example
     * // Get one AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountsReceivableFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountsReceivableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AccountsReceivable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableFindFirstArgs} args - Arguments to find a AccountsReceivable
     * @example
     * // Get one AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountsReceivableFindFirstArgs>(args?: SelectSubset<T, AccountsReceivableFindFirstArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AccountsReceivable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableFindFirstOrThrowArgs} args - Arguments to find a AccountsReceivable
     * @example
     * // Get one AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountsReceivableFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountsReceivableFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AccountsReceivables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountsReceivables
     * const accountsReceivables = await prisma.accountsReceivable.findMany()
     * 
     * // Get first 10 AccountsReceivables
     * const accountsReceivables = await prisma.accountsReceivable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsReceivableWithIdOnly = await prisma.accountsReceivable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountsReceivableFindManyArgs>(args?: SelectSubset<T, AccountsReceivableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AccountsReceivable.
     * @param {AccountsReceivableCreateArgs} args - Arguments to create a AccountsReceivable.
     * @example
     * // Create one AccountsReceivable
     * const AccountsReceivable = await prisma.accountsReceivable.create({
     *   data: {
     *     // ... data to create a AccountsReceivable
     *   }
     * })
     * 
     */
    create<T extends AccountsReceivableCreateArgs>(args: SelectSubset<T, AccountsReceivableCreateArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AccountsReceivables.
     * @param {AccountsReceivableCreateManyArgs} args - Arguments to create many AccountsReceivables.
     * @example
     * // Create many AccountsReceivables
     * const accountsReceivable = await prisma.accountsReceivable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountsReceivableCreateManyArgs>(args?: SelectSubset<T, AccountsReceivableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountsReceivables and returns the data saved in the database.
     * @param {AccountsReceivableCreateManyAndReturnArgs} args - Arguments to create many AccountsReceivables.
     * @example
     * // Create many AccountsReceivables
     * const accountsReceivable = await prisma.accountsReceivable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountsReceivables and only return the `id`
     * const accountsReceivableWithIdOnly = await prisma.accountsReceivable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountsReceivableCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountsReceivableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a AccountsReceivable.
     * @param {AccountsReceivableDeleteArgs} args - Arguments to delete one AccountsReceivable.
     * @example
     * // Delete one AccountsReceivable
     * const AccountsReceivable = await prisma.accountsReceivable.delete({
     *   where: {
     *     // ... filter to delete one AccountsReceivable
     *   }
     * })
     * 
     */
    delete<T extends AccountsReceivableDeleteArgs>(args: SelectSubset<T, AccountsReceivableDeleteArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AccountsReceivable.
     * @param {AccountsReceivableUpdateArgs} args - Arguments to update one AccountsReceivable.
     * @example
     * // Update one AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountsReceivableUpdateArgs>(args: SelectSubset<T, AccountsReceivableUpdateArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AccountsReceivables.
     * @param {AccountsReceivableDeleteManyArgs} args - Arguments to filter AccountsReceivables to delete.
     * @example
     * // Delete a few AccountsReceivables
     * const { count } = await prisma.accountsReceivable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountsReceivableDeleteManyArgs>(args?: SelectSubset<T, AccountsReceivableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountsReceivables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountsReceivables
     * const accountsReceivable = await prisma.accountsReceivable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountsReceivableUpdateManyArgs>(args: SelectSubset<T, AccountsReceivableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountsReceivables and returns the data updated in the database.
     * @param {AccountsReceivableUpdateManyAndReturnArgs} args - Arguments to update many AccountsReceivables.
     * @example
     * // Update many AccountsReceivables
     * const accountsReceivable = await prisma.accountsReceivable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountsReceivables and only return the `id`
     * const accountsReceivableWithIdOnly = await prisma.accountsReceivable.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountsReceivableUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountsReceivableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one AccountsReceivable.
     * @param {AccountsReceivableUpsertArgs} args - Arguments to update or create a AccountsReceivable.
     * @example
     * // Update or create a AccountsReceivable
     * const accountsReceivable = await prisma.accountsReceivable.upsert({
     *   create: {
     *     // ... data to create a AccountsReceivable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountsReceivable we want to update
     *   }
     * })
     */
    upsert<T extends AccountsReceivableUpsertArgs>(args: SelectSubset<T, AccountsReceivableUpsertArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AccountsReceivables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableCountArgs} args - Arguments to filter AccountsReceivables to count.
     * @example
     * // Count the number of AccountsReceivables
     * const count = await prisma.accountsReceivable.count({
     *   where: {
     *     // ... the filter for the AccountsReceivables we want to count
     *   }
     * })
    **/
    count<T extends AccountsReceivableCountArgs>(
      args?: Subset<T, AccountsReceivableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsReceivableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountsReceivable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsReceivableAggregateArgs>(args: Subset<T, AccountsReceivableAggregateArgs>): Prisma.PrismaPromise<GetAccountsReceivableAggregateType<T>>

    /**
     * Group by AccountsReceivable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsReceivableGroupByArgs} args - Group by arguments.
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
      T extends AccountsReceivableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsReceivableGroupByArgs['orderBy'] }
        : { orderBy?: AccountsReceivableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountsReceivableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsReceivableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountsReceivable model
   */
  readonly fields: AccountsReceivableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountsReceivable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsReceivableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    paymentDetail<T extends AccountsReceivable$paymentDetailArgs<ExtArgs> = {}>(args?: Subset<T, AccountsReceivable$paymentDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    debtor<T extends AccountsReceivable$debtorArgs<ExtArgs> = {}>(args?: Subset<T, AccountsReceivable$debtorArgs<ExtArgs>>): Prisma__DebtorClient<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the AccountsReceivable model
   */ 
  interface AccountsReceivableFieldRefs {
    readonly id: FieldRef<"AccountsReceivable", 'String'>
    readonly tenantId: FieldRef<"AccountsReceivable", 'String'>
    readonly invoiceNumber: FieldRef<"AccountsReceivable", 'String'>
    readonly issueDate: FieldRef<"AccountsReceivable", 'DateTime'>
    readonly dueDate: FieldRef<"AccountsReceivable", 'DateTime'>
    readonly customerName: FieldRef<"AccountsReceivable", 'String'>
    readonly customerAddress: FieldRef<"AccountsReceivable", 'String'>
    readonly customerEmail: FieldRef<"AccountsReceivable", 'String'>
    readonly customerPhone: FieldRef<"AccountsReceivable", 'String'>
    readonly invoiceAmount: FieldRef<"AccountsReceivable", 'Float'>
    readonly amountPaid: FieldRef<"AccountsReceivable", 'Float'>
    readonly outstandingBalance: FieldRef<"AccountsReceivable", 'Float'>
    readonly receivableStatus: FieldRef<"AccountsReceivable", 'String'>
    readonly collectionStatus: FieldRef<"AccountsReceivable", 'String'>
    readonly notes: FieldRef<"AccountsReceivable", 'String'>
    readonly debtorId: FieldRef<"AccountsReceivable", 'String'>
    readonly createdAt: FieldRef<"AccountsReceivable", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountsReceivable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountsReceivable findUnique
   */
  export type AccountsReceivableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    /**
     * Filter, which AccountsReceivable to fetch.
     */
    where: AccountsReceivableWhereUniqueInput
  }

  /**
   * AccountsReceivable findUniqueOrThrow
   */
  export type AccountsReceivableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    /**
     * Filter, which AccountsReceivable to fetch.
     */
    where: AccountsReceivableWhereUniqueInput
  }

  /**
   * AccountsReceivable findFirst
   */
  export type AccountsReceivableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    /**
     * Filter, which AccountsReceivable to fetch.
     */
    where?: AccountsReceivableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsReceivables to fetch.
     */
    orderBy?: AccountsReceivableOrderByWithRelationInput | AccountsReceivableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountsReceivables.
     */
    cursor?: AccountsReceivableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsReceivables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsReceivables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountsReceivables.
     */
    distinct?: AccountsReceivableScalarFieldEnum | AccountsReceivableScalarFieldEnum[]
  }

  /**
   * AccountsReceivable findFirstOrThrow
   */
  export type AccountsReceivableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    /**
     * Filter, which AccountsReceivable to fetch.
     */
    where?: AccountsReceivableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsReceivables to fetch.
     */
    orderBy?: AccountsReceivableOrderByWithRelationInput | AccountsReceivableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountsReceivables.
     */
    cursor?: AccountsReceivableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsReceivables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsReceivables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountsReceivables.
     */
    distinct?: AccountsReceivableScalarFieldEnum | AccountsReceivableScalarFieldEnum[]
  }

  /**
   * AccountsReceivable findMany
   */
  export type AccountsReceivableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    /**
     * Filter, which AccountsReceivables to fetch.
     */
    where?: AccountsReceivableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountsReceivables to fetch.
     */
    orderBy?: AccountsReceivableOrderByWithRelationInput | AccountsReceivableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountsReceivables.
     */
    cursor?: AccountsReceivableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountsReceivables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountsReceivables.
     */
    skip?: number
    distinct?: AccountsReceivableScalarFieldEnum | AccountsReceivableScalarFieldEnum[]
  }

  /**
   * AccountsReceivable create
   */
  export type AccountsReceivableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountsReceivable.
     */
    data: XOR<AccountsReceivableCreateInput, AccountsReceivableUncheckedCreateInput>
  }

  /**
   * AccountsReceivable createMany
   */
  export type AccountsReceivableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountsReceivables.
     */
    data: AccountsReceivableCreateManyInput | AccountsReceivableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountsReceivable createManyAndReturn
   */
  export type AccountsReceivableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * The data used to create many AccountsReceivables.
     */
    data: AccountsReceivableCreateManyInput | AccountsReceivableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountsReceivable update
   */
  export type AccountsReceivableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountsReceivable.
     */
    data: XOR<AccountsReceivableUpdateInput, AccountsReceivableUncheckedUpdateInput>
    /**
     * Choose, which AccountsReceivable to update.
     */
    where: AccountsReceivableWhereUniqueInput
  }

  /**
   * AccountsReceivable updateMany
   */
  export type AccountsReceivableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountsReceivables.
     */
    data: XOR<AccountsReceivableUpdateManyMutationInput, AccountsReceivableUncheckedUpdateManyInput>
    /**
     * Filter which AccountsReceivables to update
     */
    where?: AccountsReceivableWhereInput
    /**
     * Limit how many AccountsReceivables to update.
     */
    limit?: number
  }

  /**
   * AccountsReceivable updateManyAndReturn
   */
  export type AccountsReceivableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * The data used to update AccountsReceivables.
     */
    data: XOR<AccountsReceivableUpdateManyMutationInput, AccountsReceivableUncheckedUpdateManyInput>
    /**
     * Filter which AccountsReceivables to update
     */
    where?: AccountsReceivableWhereInput
    /**
     * Limit how many AccountsReceivables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountsReceivable upsert
   */
  export type AccountsReceivableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountsReceivable to update in case it exists.
     */
    where: AccountsReceivableWhereUniqueInput
    /**
     * In case the AccountsReceivable found by the `where` argument doesn't exist, create a new AccountsReceivable with this data.
     */
    create: XOR<AccountsReceivableCreateInput, AccountsReceivableUncheckedCreateInput>
    /**
     * In case the AccountsReceivable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsReceivableUpdateInput, AccountsReceivableUncheckedUpdateInput>
  }

  /**
   * AccountsReceivable delete
   */
  export type AccountsReceivableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    /**
     * Filter which AccountsReceivable to delete.
     */
    where: AccountsReceivableWhereUniqueInput
  }

  /**
   * AccountsReceivable deleteMany
   */
  export type AccountsReceivableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountsReceivables to delete
     */
    where?: AccountsReceivableWhereInput
    /**
     * Limit how many AccountsReceivables to delete.
     */
    limit?: number
  }

  /**
   * AccountsReceivable.paymentDetail
   */
  export type AccountsReceivable$paymentDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    where?: PaymentDetailWhereInput
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    cursor?: PaymentDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }

  /**
   * AccountsReceivable.debtor
   */
  export type AccountsReceivable$debtorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    where?: DebtorWhereInput
  }

  /**
   * AccountsReceivable without action
   */
  export type AccountsReceivableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
  }


  /**
   * Model PaymentDetail
   */

  export type AggregatePaymentDetail = {
    _count: PaymentDetailCountAggregateOutputType | null
    _avg: PaymentDetailAvgAggregateOutputType | null
    _sum: PaymentDetailSumAggregateOutputType | null
    _min: PaymentDetailMinAggregateOutputType | null
    _max: PaymentDetailMaxAggregateOutputType | null
  }

  export type PaymentDetailAvgAggregateOutputType = {
    paymentAmount: number | null
  }

  export type PaymentDetailSumAggregateOutputType = {
    paymentAmount: number | null
  }

  export type PaymentDetailMinAggregateOutputType = {
    id: string | null
    accountsReceivableId: string | null
    paymentDate: Date | null
    paymentAmount: number | null
    paymentMethod: string | null
    referenceNumber: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentDetailMaxAggregateOutputType = {
    id: string | null
    accountsReceivableId: string | null
    paymentDate: Date | null
    paymentAmount: number | null
    paymentMethod: string | null
    referenceNumber: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentDetailCountAggregateOutputType = {
    id: number
    accountsReceivableId: number
    paymentDate: number
    paymentAmount: number
    paymentMethod: number
    referenceNumber: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentDetailAvgAggregateInputType = {
    paymentAmount?: true
  }

  export type PaymentDetailSumAggregateInputType = {
    paymentAmount?: true
  }

  export type PaymentDetailMinAggregateInputType = {
    id?: true
    accountsReceivableId?: true
    paymentDate?: true
    paymentAmount?: true
    paymentMethod?: true
    referenceNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentDetailMaxAggregateInputType = {
    id?: true
    accountsReceivableId?: true
    paymentDate?: true
    paymentAmount?: true
    paymentMethod?: true
    referenceNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentDetailCountAggregateInputType = {
    id?: true
    accountsReceivableId?: true
    paymentDate?: true
    paymentAmount?: true
    paymentMethod?: true
    referenceNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetail to aggregate.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentDetails
    **/
    _count?: true | PaymentDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentDetailMaxAggregateInputType
  }

  export type GetPaymentDetailAggregateType<T extends PaymentDetailAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentDetail[P]>
      : GetScalarType<T[P], AggregatePaymentDetail[P]>
  }




  export type PaymentDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailWhereInput
    orderBy?: PaymentDetailOrderByWithAggregationInput | PaymentDetailOrderByWithAggregationInput[]
    by: PaymentDetailScalarFieldEnum[] | PaymentDetailScalarFieldEnum
    having?: PaymentDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentDetailCountAggregateInputType | true
    _avg?: PaymentDetailAvgAggregateInputType
    _sum?: PaymentDetailSumAggregateInputType
    _min?: PaymentDetailMinAggregateInputType
    _max?: PaymentDetailMaxAggregateInputType
  }

  export type PaymentDetailGroupByOutputType = {
    id: string
    accountsReceivableId: string
    paymentDate: Date
    paymentAmount: number
    paymentMethod: string
    referenceNumber: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentDetailCountAggregateOutputType | null
    _avg: PaymentDetailAvgAggregateOutputType | null
    _sum: PaymentDetailSumAggregateOutputType | null
    _min: PaymentDetailMinAggregateOutputType | null
    _max: PaymentDetailMaxAggregateOutputType | null
  }

  type GetPaymentDetailGroupByPayload<T extends PaymentDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentDetailGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentDetailGroupByOutputType[P]>
        }
      >
    >


  export type PaymentDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountsReceivableId?: boolean
    paymentDate?: boolean
    paymentAmount?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountsReceivable?: boolean | AccountsReceivableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetail"]>

  export type PaymentDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountsReceivableId?: boolean
    paymentDate?: boolean
    paymentAmount?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountsReceivable?: boolean | AccountsReceivableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetail"]>

  export type PaymentDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountsReceivableId?: boolean
    paymentDate?: boolean
    paymentAmount?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountsReceivable?: boolean | AccountsReceivableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetail"]>

  export type PaymentDetailSelectScalar = {
    id?: boolean
    accountsReceivableId?: boolean
    paymentDate?: boolean
    paymentAmount?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountsReceivableId" | "paymentDate" | "paymentAmount" | "paymentMethod" | "referenceNumber" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentDetail"]>
  export type PaymentDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountsReceivable?: boolean | AccountsReceivableDefaultArgs<ExtArgs>
  }
  export type PaymentDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountsReceivable?: boolean | AccountsReceivableDefaultArgs<ExtArgs>
  }
  export type PaymentDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountsReceivable?: boolean | AccountsReceivableDefaultArgs<ExtArgs>
  }

  export type $PaymentDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentDetail"
    objects: {
      accountsReceivable: Prisma.$AccountsReceivablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountsReceivableId: string
      paymentDate: Date
      paymentAmount: number
      paymentMethod: string
      referenceNumber: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentDetail"]>
    composites: {}
  }

  type PaymentDetailGetPayload<S extends boolean | null | undefined | PaymentDetailDefaultArgs> = $Result.GetResult<Prisma.$PaymentDetailPayload, S>

  type PaymentDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentDetailCountAggregateInputType | true
    }

  export interface PaymentDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentDetail'], meta: { name: 'PaymentDetail' } }
    /**
     * Find zero or one PaymentDetail that matches the filter.
     * @param {PaymentDetailFindUniqueArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentDetailFindUniqueArgs>(args: SelectSubset<T, PaymentDetailFindUniqueArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PaymentDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentDetailFindUniqueOrThrowArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PaymentDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailFindFirstArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentDetailFindFirstArgs>(args?: SelectSubset<T, PaymentDetailFindFirstArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PaymentDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailFindFirstOrThrowArgs} args - Arguments to find a PaymentDetail
     * @example
     * // Get one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentDetails
     * const paymentDetails = await prisma.paymentDetail.findMany()
     * 
     * // Get first 10 PaymentDetails
     * const paymentDetails = await prisma.paymentDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentDetailWithIdOnly = await prisma.paymentDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentDetailFindManyArgs>(args?: SelectSubset<T, PaymentDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PaymentDetail.
     * @param {PaymentDetailCreateArgs} args - Arguments to create a PaymentDetail.
     * @example
     * // Create one PaymentDetail
     * const PaymentDetail = await prisma.paymentDetail.create({
     *   data: {
     *     // ... data to create a PaymentDetail
     *   }
     * })
     * 
     */
    create<T extends PaymentDetailCreateArgs>(args: SelectSubset<T, PaymentDetailCreateArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PaymentDetails.
     * @param {PaymentDetailCreateManyArgs} args - Arguments to create many PaymentDetails.
     * @example
     * // Create many PaymentDetails
     * const paymentDetail = await prisma.paymentDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentDetailCreateManyArgs>(args?: SelectSubset<T, PaymentDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentDetails and returns the data saved in the database.
     * @param {PaymentDetailCreateManyAndReturnArgs} args - Arguments to create many PaymentDetails.
     * @example
     * // Create many PaymentDetails
     * const paymentDetail = await prisma.paymentDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentDetails and only return the `id`
     * const paymentDetailWithIdOnly = await prisma.paymentDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PaymentDetail.
     * @param {PaymentDetailDeleteArgs} args - Arguments to delete one PaymentDetail.
     * @example
     * // Delete one PaymentDetail
     * const PaymentDetail = await prisma.paymentDetail.delete({
     *   where: {
     *     // ... filter to delete one PaymentDetail
     *   }
     * })
     * 
     */
    delete<T extends PaymentDetailDeleteArgs>(args: SelectSubset<T, PaymentDetailDeleteArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PaymentDetail.
     * @param {PaymentDetailUpdateArgs} args - Arguments to update one PaymentDetail.
     * @example
     * // Update one PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentDetailUpdateArgs>(args: SelectSubset<T, PaymentDetailUpdateArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PaymentDetails.
     * @param {PaymentDetailDeleteManyArgs} args - Arguments to filter PaymentDetails to delete.
     * @example
     * // Delete a few PaymentDetails
     * const { count } = await prisma.paymentDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDetailDeleteManyArgs>(args?: SelectSubset<T, PaymentDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentDetails
     * const paymentDetail = await prisma.paymentDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentDetailUpdateManyArgs>(args: SelectSubset<T, PaymentDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentDetails and returns the data updated in the database.
     * @param {PaymentDetailUpdateManyAndReturnArgs} args - Arguments to update many PaymentDetails.
     * @example
     * // Update many PaymentDetails
     * const paymentDetail = await prisma.paymentDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentDetails and only return the `id`
     * const paymentDetailWithIdOnly = await prisma.paymentDetail.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PaymentDetail.
     * @param {PaymentDetailUpsertArgs} args - Arguments to update or create a PaymentDetail.
     * @example
     * // Update or create a PaymentDetail
     * const paymentDetail = await prisma.paymentDetail.upsert({
     *   create: {
     *     // ... data to create a PaymentDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentDetail we want to update
     *   }
     * })
     */
    upsert<T extends PaymentDetailUpsertArgs>(args: SelectSubset<T, PaymentDetailUpsertArgs<ExtArgs>>): Prisma__PaymentDetailClient<$Result.GetResult<Prisma.$PaymentDetailPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailCountArgs} args - Arguments to filter PaymentDetails to count.
     * @example
     * // Count the number of PaymentDetails
     * const count = await prisma.paymentDetail.count({
     *   where: {
     *     // ... the filter for the PaymentDetails we want to count
     *   }
     * })
    **/
    count<T extends PaymentDetailCountArgs>(
      args?: Subset<T, PaymentDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentDetailAggregateArgs>(args: Subset<T, PaymentDetailAggregateArgs>): Prisma.PrismaPromise<GetPaymentDetailAggregateType<T>>

    /**
     * Group by PaymentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailGroupByArgs} args - Group by arguments.
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
      T extends PaymentDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentDetailGroupByArgs['orderBy'] }
        : { orderBy?: PaymentDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentDetail model
   */
  readonly fields: PaymentDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accountsReceivable<T extends AccountsReceivableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsReceivableDefaultArgs<ExtArgs>>): Prisma__AccountsReceivableClient<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the PaymentDetail model
   */ 
  interface PaymentDetailFieldRefs {
    readonly id: FieldRef<"PaymentDetail", 'String'>
    readonly accountsReceivableId: FieldRef<"PaymentDetail", 'String'>
    readonly paymentDate: FieldRef<"PaymentDetail", 'DateTime'>
    readonly paymentAmount: FieldRef<"PaymentDetail", 'Float'>
    readonly paymentMethod: FieldRef<"PaymentDetail", 'String'>
    readonly referenceNumber: FieldRef<"PaymentDetail", 'String'>
    readonly notes: FieldRef<"PaymentDetail", 'String'>
    readonly createdAt: FieldRef<"PaymentDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentDetail findUnique
   */
  export type PaymentDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where: PaymentDetailWhereUniqueInput
  }

  /**
   * PaymentDetail findUniqueOrThrow
   */
  export type PaymentDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where: PaymentDetailWhereUniqueInput
  }

  /**
   * PaymentDetail findFirst
   */
  export type PaymentDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }

  /**
   * PaymentDetail findFirstOrThrow
   */
  export type PaymentDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetail to fetch.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }

  /**
   * PaymentDetail findMany
   */
  export type PaymentDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailOrderByWithRelationInput | PaymentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentDetails.
     */
    cursor?: PaymentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    distinct?: PaymentDetailScalarFieldEnum | PaymentDetailScalarFieldEnum[]
  }

  /**
   * PaymentDetail create
   */
  export type PaymentDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentDetail.
     */
    data: XOR<PaymentDetailCreateInput, PaymentDetailUncheckedCreateInput>
  }

  /**
   * PaymentDetail createMany
   */
  export type PaymentDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentDetails.
     */
    data: PaymentDetailCreateManyInput | PaymentDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentDetail createManyAndReturn
   */
  export type PaymentDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentDetails.
     */
    data: PaymentDetailCreateManyInput | PaymentDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentDetail update
   */
  export type PaymentDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentDetail.
     */
    data: XOR<PaymentDetailUpdateInput, PaymentDetailUncheckedUpdateInput>
    /**
     * Choose, which PaymentDetail to update.
     */
    where: PaymentDetailWhereUniqueInput
  }

  /**
   * PaymentDetail updateMany
   */
  export type PaymentDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentDetails.
     */
    data: XOR<PaymentDetailUpdateManyMutationInput, PaymentDetailUncheckedUpdateManyInput>
    /**
     * Filter which PaymentDetails to update
     */
    where?: PaymentDetailWhereInput
    /**
     * Limit how many PaymentDetails to update.
     */
    limit?: number
  }

  /**
   * PaymentDetail updateManyAndReturn
   */
  export type PaymentDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * The data used to update PaymentDetails.
     */
    data: XOR<PaymentDetailUpdateManyMutationInput, PaymentDetailUncheckedUpdateManyInput>
    /**
     * Filter which PaymentDetails to update
     */
    where?: PaymentDetailWhereInput
    /**
     * Limit how many PaymentDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentDetail upsert
   */
  export type PaymentDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentDetail to update in case it exists.
     */
    where: PaymentDetailWhereUniqueInput
    /**
     * In case the PaymentDetail found by the `where` argument doesn't exist, create a new PaymentDetail with this data.
     */
    create: XOR<PaymentDetailCreateInput, PaymentDetailUncheckedCreateInput>
    /**
     * In case the PaymentDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentDetailUpdateInput, PaymentDetailUncheckedUpdateInput>
  }

  /**
   * PaymentDetail delete
   */
  export type PaymentDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
    /**
     * Filter which PaymentDetail to delete.
     */
    where: PaymentDetailWhereUniqueInput
  }

  /**
   * PaymentDetail deleteMany
   */
  export type PaymentDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetails to delete
     */
    where?: PaymentDetailWhereInput
    /**
     * Limit how many PaymentDetails to delete.
     */
    limit?: number
  }

  /**
   * PaymentDetail without action
   */
  export type PaymentDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetail
     */
    select?: PaymentDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetail
     */
    omit?: PaymentDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailInclude<ExtArgs> | null
  }


  /**
   * Model Debtor
   */

  export type AggregateDebtor = {
    _count: DebtorCountAggregateOutputType | null
    _min: DebtorMinAggregateOutputType | null
    _max: DebtorMaxAggregateOutputType | null
  }

  export type DebtorMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    fullname: string | null
    email: string | null
    phone: string | null
    address: string | null
    identification: string | null
    employeeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebtorMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    fullname: string | null
    email: string | null
    phone: string | null
    address: string | null
    identification: string | null
    employeeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebtorCountAggregateOutputType = {
    id: number
    tenantId: number
    userId: number
    fullname: number
    email: number
    phone: number
    address: number
    identification: number
    employeeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DebtorMinAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    fullname?: true
    email?: true
    phone?: true
    address?: true
    identification?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebtorMaxAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    fullname?: true
    email?: true
    phone?: true
    address?: true
    identification?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebtorCountAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    fullname?: true
    email?: true
    phone?: true
    address?: true
    identification?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DebtorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Debtor to aggregate.
     */
    where?: DebtorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debtors to fetch.
     */
    orderBy?: DebtorOrderByWithRelationInput | DebtorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebtorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debtors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Debtors
    **/
    _count?: true | DebtorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebtorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebtorMaxAggregateInputType
  }

  export type GetDebtorAggregateType<T extends DebtorAggregateArgs> = {
        [P in keyof T & keyof AggregateDebtor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebtor[P]>
      : GetScalarType<T[P], AggregateDebtor[P]>
  }




  export type DebtorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtorWhereInput
    orderBy?: DebtorOrderByWithAggregationInput | DebtorOrderByWithAggregationInput[]
    by: DebtorScalarFieldEnum[] | DebtorScalarFieldEnum
    having?: DebtorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebtorCountAggregateInputType | true
    _min?: DebtorMinAggregateInputType
    _max?: DebtorMaxAggregateInputType
  }

  export type DebtorGroupByOutputType = {
    id: string
    tenantId: string
    userId: string | null
    fullname: string
    email: string
    phone: string | null
    address: string | null
    identification: string | null
    employeeId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DebtorCountAggregateOutputType | null
    _min: DebtorMinAggregateOutputType | null
    _max: DebtorMaxAggregateOutputType | null
  }

  type GetDebtorGroupByPayload<T extends DebtorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebtorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebtorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebtorGroupByOutputType[P]>
            : GetScalarType<T[P], DebtorGroupByOutputType[P]>
        }
      >
    >


  export type DebtorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    fullname?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    identification?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Debtor$userArgs<ExtArgs>
    accountsReceivable?: boolean | Debtor$accountsReceivableArgs<ExtArgs>
    employee?: boolean | Debtor$employeeArgs<ExtArgs>
    _count?: boolean | DebtorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debtor"]>

  export type DebtorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    fullname?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    identification?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Debtor$userArgs<ExtArgs>
    employee?: boolean | Debtor$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["debtor"]>

  export type DebtorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    fullname?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    identification?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Debtor$userArgs<ExtArgs>
    employee?: boolean | Debtor$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["debtor"]>

  export type DebtorSelectScalar = {
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    fullname?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    identification?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DebtorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "userId" | "fullname" | "email" | "phone" | "address" | "identification" | "employeeId" | "createdAt" | "updatedAt", ExtArgs["result"]["debtor"]>
  export type DebtorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Debtor$userArgs<ExtArgs>
    accountsReceivable?: boolean | Debtor$accountsReceivableArgs<ExtArgs>
    employee?: boolean | Debtor$employeeArgs<ExtArgs>
    _count?: boolean | DebtorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DebtorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Debtor$userArgs<ExtArgs>
    employee?: boolean | Debtor$employeeArgs<ExtArgs>
  }
  export type DebtorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Debtor$userArgs<ExtArgs>
    employee?: boolean | Debtor$employeeArgs<ExtArgs>
  }

  export type $DebtorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Debtor"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      accountsReceivable: Prisma.$AccountsReceivablePayload<ExtArgs>[]
      employee: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      userId: string | null
      fullname: string
      email: string
      phone: string | null
      address: string | null
      identification: string | null
      employeeId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["debtor"]>
    composites: {}
  }

  type DebtorGetPayload<S extends boolean | null | undefined | DebtorDefaultArgs> = $Result.GetResult<Prisma.$DebtorPayload, S>

  type DebtorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DebtorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DebtorCountAggregateInputType | true
    }

  export interface DebtorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Debtor'], meta: { name: 'Debtor' } }
    /**
     * Find zero or one Debtor that matches the filter.
     * @param {DebtorFindUniqueArgs} args - Arguments to find a Debtor
     * @example
     * // Get one Debtor
     * const debtor = await prisma.debtor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebtorFindUniqueArgs>(args: SelectSubset<T, DebtorFindUniqueArgs<ExtArgs>>): Prisma__DebtorClient<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Debtor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DebtorFindUniqueOrThrowArgs} args - Arguments to find a Debtor
     * @example
     * // Get one Debtor
     * const debtor = await prisma.debtor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebtorFindUniqueOrThrowArgs>(args: SelectSubset<T, DebtorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebtorClient<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Debtor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorFindFirstArgs} args - Arguments to find a Debtor
     * @example
     * // Get one Debtor
     * const debtor = await prisma.debtor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebtorFindFirstArgs>(args?: SelectSubset<T, DebtorFindFirstArgs<ExtArgs>>): Prisma__DebtorClient<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Debtor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorFindFirstOrThrowArgs} args - Arguments to find a Debtor
     * @example
     * // Get one Debtor
     * const debtor = await prisma.debtor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebtorFindFirstOrThrowArgs>(args?: SelectSubset<T, DebtorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebtorClient<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Debtors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Debtors
     * const debtors = await prisma.debtor.findMany()
     * 
     * // Get first 10 Debtors
     * const debtors = await prisma.debtor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debtorWithIdOnly = await prisma.debtor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebtorFindManyArgs>(args?: SelectSubset<T, DebtorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Debtor.
     * @param {DebtorCreateArgs} args - Arguments to create a Debtor.
     * @example
     * // Create one Debtor
     * const Debtor = await prisma.debtor.create({
     *   data: {
     *     // ... data to create a Debtor
     *   }
     * })
     * 
     */
    create<T extends DebtorCreateArgs>(args: SelectSubset<T, DebtorCreateArgs<ExtArgs>>): Prisma__DebtorClient<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Debtors.
     * @param {DebtorCreateManyArgs} args - Arguments to create many Debtors.
     * @example
     * // Create many Debtors
     * const debtor = await prisma.debtor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebtorCreateManyArgs>(args?: SelectSubset<T, DebtorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Debtors and returns the data saved in the database.
     * @param {DebtorCreateManyAndReturnArgs} args - Arguments to create many Debtors.
     * @example
     * // Create many Debtors
     * const debtor = await prisma.debtor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Debtors and only return the `id`
     * const debtorWithIdOnly = await prisma.debtor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebtorCreateManyAndReturnArgs>(args?: SelectSubset<T, DebtorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Debtor.
     * @param {DebtorDeleteArgs} args - Arguments to delete one Debtor.
     * @example
     * // Delete one Debtor
     * const Debtor = await prisma.debtor.delete({
     *   where: {
     *     // ... filter to delete one Debtor
     *   }
     * })
     * 
     */
    delete<T extends DebtorDeleteArgs>(args: SelectSubset<T, DebtorDeleteArgs<ExtArgs>>): Prisma__DebtorClient<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Debtor.
     * @param {DebtorUpdateArgs} args - Arguments to update one Debtor.
     * @example
     * // Update one Debtor
     * const debtor = await prisma.debtor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebtorUpdateArgs>(args: SelectSubset<T, DebtorUpdateArgs<ExtArgs>>): Prisma__DebtorClient<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Debtors.
     * @param {DebtorDeleteManyArgs} args - Arguments to filter Debtors to delete.
     * @example
     * // Delete a few Debtors
     * const { count } = await prisma.debtor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebtorDeleteManyArgs>(args?: SelectSubset<T, DebtorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Debtors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Debtors
     * const debtor = await prisma.debtor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebtorUpdateManyArgs>(args: SelectSubset<T, DebtorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Debtors and returns the data updated in the database.
     * @param {DebtorUpdateManyAndReturnArgs} args - Arguments to update many Debtors.
     * @example
     * // Update many Debtors
     * const debtor = await prisma.debtor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Debtors and only return the `id`
     * const debtorWithIdOnly = await prisma.debtor.updateManyAndReturn({
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
    updateManyAndReturn<T extends DebtorUpdateManyAndReturnArgs>(args: SelectSubset<T, DebtorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Debtor.
     * @param {DebtorUpsertArgs} args - Arguments to update or create a Debtor.
     * @example
     * // Update or create a Debtor
     * const debtor = await prisma.debtor.upsert({
     *   create: {
     *     // ... data to create a Debtor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Debtor we want to update
     *   }
     * })
     */
    upsert<T extends DebtorUpsertArgs>(args: SelectSubset<T, DebtorUpsertArgs<ExtArgs>>): Prisma__DebtorClient<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Debtors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorCountArgs} args - Arguments to filter Debtors to count.
     * @example
     * // Count the number of Debtors
     * const count = await prisma.debtor.count({
     *   where: {
     *     // ... the filter for the Debtors we want to count
     *   }
     * })
    **/
    count<T extends DebtorCountArgs>(
      args?: Subset<T, DebtorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebtorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Debtor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DebtorAggregateArgs>(args: Subset<T, DebtorAggregateArgs>): Prisma.PrismaPromise<GetDebtorAggregateType<T>>

    /**
     * Group by Debtor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorGroupByArgs} args - Group by arguments.
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
      T extends DebtorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebtorGroupByArgs['orderBy'] }
        : { orderBy?: DebtorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DebtorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebtorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Debtor model
   */
  readonly fields: DebtorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Debtor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebtorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    user<T extends Debtor$userArgs<ExtArgs> = {}>(args?: Subset<T, Debtor$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    accountsReceivable<T extends Debtor$accountsReceivableArgs<ExtArgs> = {}>(args?: Subset<T, Debtor$accountsReceivableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsReceivablePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    employee<T extends Debtor$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Debtor$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Debtor model
   */ 
  interface DebtorFieldRefs {
    readonly id: FieldRef<"Debtor", 'String'>
    readonly tenantId: FieldRef<"Debtor", 'String'>
    readonly userId: FieldRef<"Debtor", 'String'>
    readonly fullname: FieldRef<"Debtor", 'String'>
    readonly email: FieldRef<"Debtor", 'String'>
    readonly phone: FieldRef<"Debtor", 'String'>
    readonly address: FieldRef<"Debtor", 'String'>
    readonly identification: FieldRef<"Debtor", 'String'>
    readonly employeeId: FieldRef<"Debtor", 'String'>
    readonly createdAt: FieldRef<"Debtor", 'DateTime'>
    readonly updatedAt: FieldRef<"Debtor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Debtor findUnique
   */
  export type DebtorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    /**
     * Filter, which Debtor to fetch.
     */
    where: DebtorWhereUniqueInput
  }

  /**
   * Debtor findUniqueOrThrow
   */
  export type DebtorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    /**
     * Filter, which Debtor to fetch.
     */
    where: DebtorWhereUniqueInput
  }

  /**
   * Debtor findFirst
   */
  export type DebtorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    /**
     * Filter, which Debtor to fetch.
     */
    where?: DebtorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debtors to fetch.
     */
    orderBy?: DebtorOrderByWithRelationInput | DebtorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Debtors.
     */
    cursor?: DebtorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debtors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debtors.
     */
    distinct?: DebtorScalarFieldEnum | DebtorScalarFieldEnum[]
  }

  /**
   * Debtor findFirstOrThrow
   */
  export type DebtorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    /**
     * Filter, which Debtor to fetch.
     */
    where?: DebtorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debtors to fetch.
     */
    orderBy?: DebtorOrderByWithRelationInput | DebtorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Debtors.
     */
    cursor?: DebtorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debtors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Debtors.
     */
    distinct?: DebtorScalarFieldEnum | DebtorScalarFieldEnum[]
  }

  /**
   * Debtor findMany
   */
  export type DebtorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    /**
     * Filter, which Debtors to fetch.
     */
    where?: DebtorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Debtors to fetch.
     */
    orderBy?: DebtorOrderByWithRelationInput | DebtorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Debtors.
     */
    cursor?: DebtorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Debtors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Debtors.
     */
    skip?: number
    distinct?: DebtorScalarFieldEnum | DebtorScalarFieldEnum[]
  }

  /**
   * Debtor create
   */
  export type DebtorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    /**
     * The data needed to create a Debtor.
     */
    data: XOR<DebtorCreateInput, DebtorUncheckedCreateInput>
  }

  /**
   * Debtor createMany
   */
  export type DebtorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Debtors.
     */
    data: DebtorCreateManyInput | DebtorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Debtor createManyAndReturn
   */
  export type DebtorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * The data used to create many Debtors.
     */
    data: DebtorCreateManyInput | DebtorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Debtor update
   */
  export type DebtorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    /**
     * The data needed to update a Debtor.
     */
    data: XOR<DebtorUpdateInput, DebtorUncheckedUpdateInput>
    /**
     * Choose, which Debtor to update.
     */
    where: DebtorWhereUniqueInput
  }

  /**
   * Debtor updateMany
   */
  export type DebtorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Debtors.
     */
    data: XOR<DebtorUpdateManyMutationInput, DebtorUncheckedUpdateManyInput>
    /**
     * Filter which Debtors to update
     */
    where?: DebtorWhereInput
    /**
     * Limit how many Debtors to update.
     */
    limit?: number
  }

  /**
   * Debtor updateManyAndReturn
   */
  export type DebtorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * The data used to update Debtors.
     */
    data: XOR<DebtorUpdateManyMutationInput, DebtorUncheckedUpdateManyInput>
    /**
     * Filter which Debtors to update
     */
    where?: DebtorWhereInput
    /**
     * Limit how many Debtors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Debtor upsert
   */
  export type DebtorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    /**
     * The filter to search for the Debtor to update in case it exists.
     */
    where: DebtorWhereUniqueInput
    /**
     * In case the Debtor found by the `where` argument doesn't exist, create a new Debtor with this data.
     */
    create: XOR<DebtorCreateInput, DebtorUncheckedCreateInput>
    /**
     * In case the Debtor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebtorUpdateInput, DebtorUncheckedUpdateInput>
  }

  /**
   * Debtor delete
   */
  export type DebtorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    /**
     * Filter which Debtor to delete.
     */
    where: DebtorWhereUniqueInput
  }

  /**
   * Debtor deleteMany
   */
  export type DebtorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Debtors to delete
     */
    where?: DebtorWhereInput
    /**
     * Limit how many Debtors to delete.
     */
    limit?: number
  }

  /**
   * Debtor.user
   */
  export type Debtor$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Debtor.accountsReceivable
   */
  export type Debtor$accountsReceivableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsReceivable
     */
    select?: AccountsReceivableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountsReceivable
     */
    omit?: AccountsReceivableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsReceivableInclude<ExtArgs> | null
    where?: AccountsReceivableWhereInput
    orderBy?: AccountsReceivableOrderByWithRelationInput | AccountsReceivableOrderByWithRelationInput[]
    cursor?: AccountsReceivableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountsReceivableScalarFieldEnum | AccountsReceivableScalarFieldEnum[]
  }

  /**
   * Debtor.employee
   */
  export type Debtor$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Debtor without action
   */
  export type DebtorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    fullname: string | null
    email: string | null
    phone: string | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    fullname: string | null
    email: string | null
    phone: string | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    tenantId: number
    fullname: number
    email: number
    phone: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    tenantId?: true
    fullname?: true
    email?: true
    phone?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    tenantId?: true
    fullname?: true
    email?: true
    phone?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    tenantId?: true
    fullname?: true
    email?: true
    phone?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    tenantId: string
    fullname: string
    email: string
    phone: string | null
    position: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    fullname?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    debtors?: boolean | Employee$debtorsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    fullname?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    fullname?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    tenantId?: boolean
    fullname?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "fullname" | "email" | "phone" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    debtors?: boolean | Employee$debtorsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      debtors: Prisma.$DebtorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      fullname: string
      email: string
      phone: string | null
      position: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    debtors<T extends Employee$debtorsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$debtorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtorPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly tenantId: FieldRef<"Employee", 'String'>
    readonly fullname: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.debtors
   */
  export type Employee$debtorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Debtor
     */
    select?: DebtorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Debtor
     */
    omit?: DebtorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebtorInclude<ExtArgs> | null
    where?: DebtorWhereInput
    orderBy?: DebtorOrderByWithRelationInput | DebtorOrderByWithRelationInput[]
    cursor?: DebtorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DebtorScalarFieldEnum | DebtorScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
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


  export const TenantScalarFieldEnum: {
    id: 'id',
    subdomain: 'subdomain',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    kvk: 'kvk',
    contactEmail: 'contactEmail',
    numberOfEmployees: 'numberOfEmployees',
    country: 'country',
    address: 'address',
    termsAccepted: 'termsAccepted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    fullname: 'fullname',
    password: 'password',
    country: 'country',
    phone: 'phone',
    typeIdentification: 'typeIdentification',
    identification: 'identification',
    emailVerified: 'emailVerified',
    verificationToken: 'verificationToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resetPasswordToken: 'resetPasswordToken',
    joined: 'joined',
    invitedById: 'invitedById',
    lastActive: 'lastActive',
    status: 'status',
    invitationToken: 'invitationToken',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GlobalParameterScalarFieldEnum: {
    id: 'id',
    porcCobranza: 'porcCobranza',
    porcAbb: 'porcAbb',
    diasPlazoEmpresaAanmaning: 'diasPlazoEmpresaAanmaning',
    diasPlazoConsumidorAanmaning: 'diasPlazoConsumidorAanmaning',
    diasPlazoEmpresaSommatie: 'diasPlazoEmpresaSommatie',
    diasPlazoConsumidorSommatie: 'diasPlazoConsumidorSommatie',
    precioEmpresaPequena: 'precioEmpresaPequena',
    contribucionEmpresaPequenaPfc: 'contribucionEmpresaPequenaPfc',
    precioEmpresaGrande: 'precioEmpresaGrande',
    contribucionEmpresaGrandePfc: 'contribucionEmpresaGrandePfc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GlobalParameterScalarFieldEnum = (typeof GlobalParameterScalarFieldEnum)[keyof typeof GlobalParameterScalarFieldEnum]


  export const TenantConfigScalarFieldEnum: {
    tenantId: 'tenantId',
    parameterId: 'parameterId',
    porcInteresCobranza: 'porcInteresCobranza',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantConfigScalarFieldEnum = (typeof TenantConfigScalarFieldEnum)[keyof typeof TenantConfigScalarFieldEnum]


  export const AccountsReceivableScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    invoiceNumber: 'invoiceNumber',
    issueDate: 'issueDate',
    dueDate: 'dueDate',
    customerName: 'customerName',
    customerAddress: 'customerAddress',
    customerEmail: 'customerEmail',
    customerPhone: 'customerPhone',
    invoiceAmount: 'invoiceAmount',
    amountPaid: 'amountPaid',
    outstandingBalance: 'outstandingBalance',
    receivableStatus: 'receivableStatus',
    collectionStatus: 'collectionStatus',
    notes: 'notes',
    debtorId: 'debtorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountsReceivableScalarFieldEnum = (typeof AccountsReceivableScalarFieldEnum)[keyof typeof AccountsReceivableScalarFieldEnum]


  export const PaymentDetailScalarFieldEnum: {
    id: 'id',
    accountsReceivableId: 'accountsReceivableId',
    paymentDate: 'paymentDate',
    paymentAmount: 'paymentAmount',
    paymentMethod: 'paymentMethod',
    referenceNumber: 'referenceNumber',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentDetailScalarFieldEnum = (typeof PaymentDetailScalarFieldEnum)[keyof typeof PaymentDetailScalarFieldEnum]


  export const DebtorScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    fullname: 'fullname',
    email: 'email',
    phone: 'phone',
    address: 'address',
    identification: 'identification',
    employeeId: 'employeeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DebtorScalarFieldEnum = (typeof DebtorScalarFieldEnum)[keyof typeof DebtorScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    fullname: 'fullname',
    email: 'email',
    phone: 'phone',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    subdomain?: StringFilter<"Tenant"> | string
    clientId?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    users?: UserListRelationFilter
    tenantConfigs?: TenantConfigListRelationFilter
    accountsReceivable?: AccountsReceivableListRelationFilter
    debtors?: DebtorListRelationFilter
    employees?: EmployeeListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    subdomain?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    tenantConfigs?: TenantConfigOrderByRelationAggregateInput
    accountsReceivable?: AccountsReceivableOrderByRelationAggregateInput
    debtors?: DebtorOrderByRelationAggregateInput
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subdomain?: string
    clientId?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    users?: UserListRelationFilter
    tenantConfigs?: TenantConfigListRelationFilter
    accountsReceivable?: AccountsReceivableListRelationFilter
    debtors?: DebtorListRelationFilter
    employees?: EmployeeListRelationFilter
  }, "id" | "subdomain" | "clientId">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    subdomain?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    subdomain?: StringWithAggregatesFilter<"Tenant"> | string
    clientId?: StringWithAggregatesFilter<"Tenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    type?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    kvk?: StringFilter<"Client"> | string
    contactEmail?: StringFilter<"Client"> | string
    numberOfEmployees?: StringFilter<"Client"> | string
    country?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    termsAccepted?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    kvk?: SortOrder
    contactEmail?: SortOrder
    numberOfEmployees?: SortOrder
    country?: SortOrder
    address?: SortOrder
    termsAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    type?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    kvk?: StringFilter<"Client"> | string
    contactEmail?: StringFilter<"Client"> | string
    numberOfEmployees?: StringFilter<"Client"> | string
    country?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    termsAccepted?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    kvk?: SortOrder
    contactEmail?: SortOrder
    numberOfEmployees?: SortOrder
    country?: SortOrder
    address?: SortOrder
    termsAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    type?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    kvk?: StringWithAggregatesFilter<"Client"> | string
    contactEmail?: StringWithAggregatesFilter<"Client"> | string
    numberOfEmployees?: StringWithAggregatesFilter<"Client"> | string
    country?: StringWithAggregatesFilter<"Client"> | string
    address?: StringWithAggregatesFilter<"Client"> | string
    termsAccepted?: BoolWithAggregatesFilter<"Client"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullname?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    typeIdentification?: StringNullableFilter<"User"> | string | null
    identification?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    joined?: DateTimeNullableFilter<"User"> | Date | string | null
    invitedById?: StringNullableFilter<"User"> | string | null
    lastActive?: DateTimeNullableFilter<"User"> | Date | string | null
    status?: StringFilter<"User"> | string
    invitationToken?: StringNullableFilter<"User"> | string | null
    roleId?: StringFilter<"User"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    invitedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    invitations?: UserListRelationFilter
    debtors?: DebtorListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    fullname?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    typeIdentification?: SortOrderInput | SortOrder
    identification?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    joined?: SortOrderInput | SortOrder
    invitedById?: SortOrderInput | SortOrder
    lastActive?: SortOrderInput | SortOrder
    status?: SortOrder
    invitationToken?: SortOrderInput | SortOrder
    roleId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    invitedBy?: UserOrderByWithRelationInput
    invitations?: UserOrderByRelationAggregateInput
    debtors?: DebtorOrderByRelationAggregateInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_email?: UserTenantIdEmailCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    tenantId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullname?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    typeIdentification?: StringNullableFilter<"User"> | string | null
    identification?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    joined?: DateTimeNullableFilter<"User"> | Date | string | null
    invitedById?: StringNullableFilter<"User"> | string | null
    lastActive?: DateTimeNullableFilter<"User"> | Date | string | null
    status?: StringFilter<"User"> | string
    invitationToken?: StringNullableFilter<"User"> | string | null
    roleId?: StringFilter<"User"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    invitedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    invitations?: UserListRelationFilter
    debtors?: DebtorListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "tenantId_email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    fullname?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    typeIdentification?: SortOrderInput | SortOrder
    identification?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    joined?: SortOrderInput | SortOrder
    invitedById?: SortOrderInput | SortOrder
    lastActive?: SortOrderInput | SortOrder
    status?: SortOrder
    invitationToken?: SortOrderInput | SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    tenantId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    fullname?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    typeIdentification?: StringNullableWithAggregatesFilter<"User"> | string | null
    identification?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    joined?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    invitedById?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastActive?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    status?: StringWithAggregatesFilter<"User"> | string
    invitationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: StringWithAggregatesFilter<"User"> | string
  }

  export type GlobalParameterWhereInput = {
    AND?: GlobalParameterWhereInput | GlobalParameterWhereInput[]
    OR?: GlobalParameterWhereInput[]
    NOT?: GlobalParameterWhereInput | GlobalParameterWhereInput[]
    id?: StringFilter<"GlobalParameter"> | string
    porcCobranza?: FloatFilter<"GlobalParameter"> | number
    porcAbb?: FloatFilter<"GlobalParameter"> | number
    diasPlazoEmpresaAanmaning?: IntFilter<"GlobalParameter"> | number
    diasPlazoConsumidorAanmaning?: IntFilter<"GlobalParameter"> | number
    diasPlazoEmpresaSommatie?: IntFilter<"GlobalParameter"> | number
    diasPlazoConsumidorSommatie?: IntFilter<"GlobalParameter"> | number
    precioEmpresaPequena?: FloatFilter<"GlobalParameter"> | number
    contribucionEmpresaPequenaPfc?: FloatFilter<"GlobalParameter"> | number
    precioEmpresaGrande?: FloatFilter<"GlobalParameter"> | number
    contribucionEmpresaGrandePfc?: FloatFilter<"GlobalParameter"> | number
    createdAt?: DateTimeFilter<"GlobalParameter"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalParameter"> | Date | string
    tenantConfigs?: TenantConfigListRelationFilter
  }

  export type GlobalParameterOrderByWithRelationInput = {
    id?: SortOrder
    porcCobranza?: SortOrder
    porcAbb?: SortOrder
    diasPlazoEmpresaAanmaning?: SortOrder
    diasPlazoConsumidorAanmaning?: SortOrder
    diasPlazoEmpresaSommatie?: SortOrder
    diasPlazoConsumidorSommatie?: SortOrder
    precioEmpresaPequena?: SortOrder
    contribucionEmpresaPequenaPfc?: SortOrder
    precioEmpresaGrande?: SortOrder
    contribucionEmpresaGrandePfc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantConfigs?: TenantConfigOrderByRelationAggregateInput
  }

  export type GlobalParameterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalParameterWhereInput | GlobalParameterWhereInput[]
    OR?: GlobalParameterWhereInput[]
    NOT?: GlobalParameterWhereInput | GlobalParameterWhereInput[]
    porcCobranza?: FloatFilter<"GlobalParameter"> | number
    porcAbb?: FloatFilter<"GlobalParameter"> | number
    diasPlazoEmpresaAanmaning?: IntFilter<"GlobalParameter"> | number
    diasPlazoConsumidorAanmaning?: IntFilter<"GlobalParameter"> | number
    diasPlazoEmpresaSommatie?: IntFilter<"GlobalParameter"> | number
    diasPlazoConsumidorSommatie?: IntFilter<"GlobalParameter"> | number
    precioEmpresaPequena?: FloatFilter<"GlobalParameter"> | number
    contribucionEmpresaPequenaPfc?: FloatFilter<"GlobalParameter"> | number
    precioEmpresaGrande?: FloatFilter<"GlobalParameter"> | number
    contribucionEmpresaGrandePfc?: FloatFilter<"GlobalParameter"> | number
    createdAt?: DateTimeFilter<"GlobalParameter"> | Date | string
    updatedAt?: DateTimeFilter<"GlobalParameter"> | Date | string
    tenantConfigs?: TenantConfigListRelationFilter
  }, "id">

  export type GlobalParameterOrderByWithAggregationInput = {
    id?: SortOrder
    porcCobranza?: SortOrder
    porcAbb?: SortOrder
    diasPlazoEmpresaAanmaning?: SortOrder
    diasPlazoConsumidorAanmaning?: SortOrder
    diasPlazoEmpresaSommatie?: SortOrder
    diasPlazoConsumidorSommatie?: SortOrder
    precioEmpresaPequena?: SortOrder
    contribucionEmpresaPequenaPfc?: SortOrder
    precioEmpresaGrande?: SortOrder
    contribucionEmpresaGrandePfc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GlobalParameterCountOrderByAggregateInput
    _avg?: GlobalParameterAvgOrderByAggregateInput
    _max?: GlobalParameterMaxOrderByAggregateInput
    _min?: GlobalParameterMinOrderByAggregateInput
    _sum?: GlobalParameterSumOrderByAggregateInput
  }

  export type GlobalParameterScalarWhereWithAggregatesInput = {
    AND?: GlobalParameterScalarWhereWithAggregatesInput | GlobalParameterScalarWhereWithAggregatesInput[]
    OR?: GlobalParameterScalarWhereWithAggregatesInput[]
    NOT?: GlobalParameterScalarWhereWithAggregatesInput | GlobalParameterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalParameter"> | string
    porcCobranza?: FloatWithAggregatesFilter<"GlobalParameter"> | number
    porcAbb?: FloatWithAggregatesFilter<"GlobalParameter"> | number
    diasPlazoEmpresaAanmaning?: IntWithAggregatesFilter<"GlobalParameter"> | number
    diasPlazoConsumidorAanmaning?: IntWithAggregatesFilter<"GlobalParameter"> | number
    diasPlazoEmpresaSommatie?: IntWithAggregatesFilter<"GlobalParameter"> | number
    diasPlazoConsumidorSommatie?: IntWithAggregatesFilter<"GlobalParameter"> | number
    precioEmpresaPequena?: FloatWithAggregatesFilter<"GlobalParameter"> | number
    contribucionEmpresaPequenaPfc?: FloatWithAggregatesFilter<"GlobalParameter"> | number
    precioEmpresaGrande?: FloatWithAggregatesFilter<"GlobalParameter"> | number
    contribucionEmpresaGrandePfc?: FloatWithAggregatesFilter<"GlobalParameter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GlobalParameter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GlobalParameter"> | Date | string
  }

  export type TenantConfigWhereInput = {
    AND?: TenantConfigWhereInput | TenantConfigWhereInput[]
    OR?: TenantConfigWhereInput[]
    NOT?: TenantConfigWhereInput | TenantConfigWhereInput[]
    tenantId?: StringFilter<"TenantConfig"> | string
    parameterId?: StringFilter<"TenantConfig"> | string
    porcInteresCobranza?: FloatFilter<"TenantConfig"> | number
    createdAt?: DateTimeFilter<"TenantConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TenantConfig"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    parameter?: XOR<GlobalParameterScalarRelationFilter, GlobalParameterWhereInput>
  }

  export type TenantConfigOrderByWithRelationInput = {
    tenantId?: SortOrder
    parameterId?: SortOrder
    porcInteresCobranza?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    parameter?: GlobalParameterOrderByWithRelationInput
  }

  export type TenantConfigWhereUniqueInput = Prisma.AtLeast<{
    tenantId_parameterId?: TenantConfigTenantIdParameterIdCompoundUniqueInput
    AND?: TenantConfigWhereInput | TenantConfigWhereInput[]
    OR?: TenantConfigWhereInput[]
    NOT?: TenantConfigWhereInput | TenantConfigWhereInput[]
    tenantId?: StringFilter<"TenantConfig"> | string
    parameterId?: StringFilter<"TenantConfig"> | string
    porcInteresCobranza?: FloatFilter<"TenantConfig"> | number
    createdAt?: DateTimeFilter<"TenantConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TenantConfig"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    parameter?: XOR<GlobalParameterScalarRelationFilter, GlobalParameterWhereInput>
  }, "tenantId_parameterId">

  export type TenantConfigOrderByWithAggregationInput = {
    tenantId?: SortOrder
    parameterId?: SortOrder
    porcInteresCobranza?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantConfigCountOrderByAggregateInput
    _avg?: TenantConfigAvgOrderByAggregateInput
    _max?: TenantConfigMaxOrderByAggregateInput
    _min?: TenantConfigMinOrderByAggregateInput
    _sum?: TenantConfigSumOrderByAggregateInput
  }

  export type TenantConfigScalarWhereWithAggregatesInput = {
    AND?: TenantConfigScalarWhereWithAggregatesInput | TenantConfigScalarWhereWithAggregatesInput[]
    OR?: TenantConfigScalarWhereWithAggregatesInput[]
    NOT?: TenantConfigScalarWhereWithAggregatesInput | TenantConfigScalarWhereWithAggregatesInput[]
    tenantId?: StringWithAggregatesFilter<"TenantConfig"> | string
    parameterId?: StringWithAggregatesFilter<"TenantConfig"> | string
    porcInteresCobranza?: FloatWithAggregatesFilter<"TenantConfig"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TenantConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TenantConfig"> | Date | string
  }

  export type AccountsReceivableWhereInput = {
    AND?: AccountsReceivableWhereInput | AccountsReceivableWhereInput[]
    OR?: AccountsReceivableWhereInput[]
    NOT?: AccountsReceivableWhereInput | AccountsReceivableWhereInput[]
    id?: StringFilter<"AccountsReceivable"> | string
    tenantId?: StringFilter<"AccountsReceivable"> | string
    invoiceNumber?: StringFilter<"AccountsReceivable"> | string
    issueDate?: DateTimeFilter<"AccountsReceivable"> | Date | string
    dueDate?: DateTimeFilter<"AccountsReceivable"> | Date | string
    customerName?: StringFilter<"AccountsReceivable"> | string
    customerAddress?: StringFilter<"AccountsReceivable"> | string
    customerEmail?: StringFilter<"AccountsReceivable"> | string
    customerPhone?: StringFilter<"AccountsReceivable"> | string
    invoiceAmount?: FloatFilter<"AccountsReceivable"> | number
    amountPaid?: FloatFilter<"AccountsReceivable"> | number
    outstandingBalance?: FloatFilter<"AccountsReceivable"> | number
    receivableStatus?: StringFilter<"AccountsReceivable"> | string
    collectionStatus?: StringNullableFilter<"AccountsReceivable"> | string | null
    notes?: StringNullableFilter<"AccountsReceivable"> | string | null
    debtorId?: StringNullableFilter<"AccountsReceivable"> | string | null
    createdAt?: DateTimeFilter<"AccountsReceivable"> | Date | string
    updatedAt?: DateTimeFilter<"AccountsReceivable"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    paymentDetail?: PaymentDetailListRelationFilter
    debtor?: XOR<DebtorNullableScalarRelationFilter, DebtorWhereInput> | null
  }

  export type AccountsReceivableOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    customerName?: SortOrder
    customerAddress?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    invoiceAmount?: SortOrder
    amountPaid?: SortOrder
    outstandingBalance?: SortOrder
    receivableStatus?: SortOrder
    collectionStatus?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    debtorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    paymentDetail?: PaymentDetailOrderByRelationAggregateInput
    debtor?: DebtorOrderByWithRelationInput
  }

  export type AccountsReceivableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: AccountsReceivableWhereInput | AccountsReceivableWhereInput[]
    OR?: AccountsReceivableWhereInput[]
    NOT?: AccountsReceivableWhereInput | AccountsReceivableWhereInput[]
    tenantId?: StringFilter<"AccountsReceivable"> | string
    issueDate?: DateTimeFilter<"AccountsReceivable"> | Date | string
    dueDate?: DateTimeFilter<"AccountsReceivable"> | Date | string
    customerName?: StringFilter<"AccountsReceivable"> | string
    customerAddress?: StringFilter<"AccountsReceivable"> | string
    customerEmail?: StringFilter<"AccountsReceivable"> | string
    customerPhone?: StringFilter<"AccountsReceivable"> | string
    invoiceAmount?: FloatFilter<"AccountsReceivable"> | number
    amountPaid?: FloatFilter<"AccountsReceivable"> | number
    outstandingBalance?: FloatFilter<"AccountsReceivable"> | number
    receivableStatus?: StringFilter<"AccountsReceivable"> | string
    collectionStatus?: StringNullableFilter<"AccountsReceivable"> | string | null
    notes?: StringNullableFilter<"AccountsReceivable"> | string | null
    debtorId?: StringNullableFilter<"AccountsReceivable"> | string | null
    createdAt?: DateTimeFilter<"AccountsReceivable"> | Date | string
    updatedAt?: DateTimeFilter<"AccountsReceivable"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    paymentDetail?: PaymentDetailListRelationFilter
    debtor?: XOR<DebtorNullableScalarRelationFilter, DebtorWhereInput> | null
  }, "id" | "invoiceNumber">

  export type AccountsReceivableOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    customerName?: SortOrder
    customerAddress?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    invoiceAmount?: SortOrder
    amountPaid?: SortOrder
    outstandingBalance?: SortOrder
    receivableStatus?: SortOrder
    collectionStatus?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    debtorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountsReceivableCountOrderByAggregateInput
    _avg?: AccountsReceivableAvgOrderByAggregateInput
    _max?: AccountsReceivableMaxOrderByAggregateInput
    _min?: AccountsReceivableMinOrderByAggregateInput
    _sum?: AccountsReceivableSumOrderByAggregateInput
  }

  export type AccountsReceivableScalarWhereWithAggregatesInput = {
    AND?: AccountsReceivableScalarWhereWithAggregatesInput | AccountsReceivableScalarWhereWithAggregatesInput[]
    OR?: AccountsReceivableScalarWhereWithAggregatesInput[]
    NOT?: AccountsReceivableScalarWhereWithAggregatesInput | AccountsReceivableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    tenantId?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    invoiceNumber?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    issueDate?: DateTimeWithAggregatesFilter<"AccountsReceivable"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"AccountsReceivable"> | Date | string
    customerName?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    customerAddress?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    customerEmail?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    customerPhone?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    invoiceAmount?: FloatWithAggregatesFilter<"AccountsReceivable"> | number
    amountPaid?: FloatWithAggregatesFilter<"AccountsReceivable"> | number
    outstandingBalance?: FloatWithAggregatesFilter<"AccountsReceivable"> | number
    receivableStatus?: StringWithAggregatesFilter<"AccountsReceivable"> | string
    collectionStatus?: StringNullableWithAggregatesFilter<"AccountsReceivable"> | string | null
    notes?: StringNullableWithAggregatesFilter<"AccountsReceivable"> | string | null
    debtorId?: StringNullableWithAggregatesFilter<"AccountsReceivable"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AccountsReceivable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountsReceivable"> | Date | string
  }

  export type PaymentDetailWhereInput = {
    AND?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    OR?: PaymentDetailWhereInput[]
    NOT?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    id?: StringFilter<"PaymentDetail"> | string
    accountsReceivableId?: StringFilter<"PaymentDetail"> | string
    paymentDate?: DateTimeFilter<"PaymentDetail"> | Date | string
    paymentAmount?: FloatFilter<"PaymentDetail"> | number
    paymentMethod?: StringFilter<"PaymentDetail"> | string
    referenceNumber?: StringNullableFilter<"PaymentDetail"> | string | null
    notes?: StringNullableFilter<"PaymentDetail"> | string | null
    createdAt?: DateTimeFilter<"PaymentDetail"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentDetail"> | Date | string
    accountsReceivable?: XOR<AccountsReceivableScalarRelationFilter, AccountsReceivableWhereInput>
  }

  export type PaymentDetailOrderByWithRelationInput = {
    id?: SortOrder
    accountsReceivableId?: SortOrder
    paymentDate?: SortOrder
    paymentAmount?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountsReceivable?: AccountsReceivableOrderByWithRelationInput
  }

  export type PaymentDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    OR?: PaymentDetailWhereInput[]
    NOT?: PaymentDetailWhereInput | PaymentDetailWhereInput[]
    accountsReceivableId?: StringFilter<"PaymentDetail"> | string
    paymentDate?: DateTimeFilter<"PaymentDetail"> | Date | string
    paymentAmount?: FloatFilter<"PaymentDetail"> | number
    paymentMethod?: StringFilter<"PaymentDetail"> | string
    referenceNumber?: StringNullableFilter<"PaymentDetail"> | string | null
    notes?: StringNullableFilter<"PaymentDetail"> | string | null
    createdAt?: DateTimeFilter<"PaymentDetail"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentDetail"> | Date | string
    accountsReceivable?: XOR<AccountsReceivableScalarRelationFilter, AccountsReceivableWhereInput>
  }, "id">

  export type PaymentDetailOrderByWithAggregationInput = {
    id?: SortOrder
    accountsReceivableId?: SortOrder
    paymentDate?: SortOrder
    paymentAmount?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentDetailCountOrderByAggregateInput
    _avg?: PaymentDetailAvgOrderByAggregateInput
    _max?: PaymentDetailMaxOrderByAggregateInput
    _min?: PaymentDetailMinOrderByAggregateInput
    _sum?: PaymentDetailSumOrderByAggregateInput
  }

  export type PaymentDetailScalarWhereWithAggregatesInput = {
    AND?: PaymentDetailScalarWhereWithAggregatesInput | PaymentDetailScalarWhereWithAggregatesInput[]
    OR?: PaymentDetailScalarWhereWithAggregatesInput[]
    NOT?: PaymentDetailScalarWhereWithAggregatesInput | PaymentDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentDetail"> | string
    accountsReceivableId?: StringWithAggregatesFilter<"PaymentDetail"> | string
    paymentDate?: DateTimeWithAggregatesFilter<"PaymentDetail"> | Date | string
    paymentAmount?: FloatWithAggregatesFilter<"PaymentDetail"> | number
    paymentMethod?: StringWithAggregatesFilter<"PaymentDetail"> | string
    referenceNumber?: StringNullableWithAggregatesFilter<"PaymentDetail"> | string | null
    notes?: StringNullableWithAggregatesFilter<"PaymentDetail"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentDetail"> | Date | string
  }

  export type DebtorWhereInput = {
    AND?: DebtorWhereInput | DebtorWhereInput[]
    OR?: DebtorWhereInput[]
    NOT?: DebtorWhereInput | DebtorWhereInput[]
    id?: StringFilter<"Debtor"> | string
    tenantId?: StringFilter<"Debtor"> | string
    userId?: StringNullableFilter<"Debtor"> | string | null
    fullname?: StringFilter<"Debtor"> | string
    email?: StringFilter<"Debtor"> | string
    phone?: StringNullableFilter<"Debtor"> | string | null
    address?: StringNullableFilter<"Debtor"> | string | null
    identification?: StringNullableFilter<"Debtor"> | string | null
    employeeId?: StringNullableFilter<"Debtor"> | string | null
    createdAt?: DateTimeFilter<"Debtor"> | Date | string
    updatedAt?: DateTimeFilter<"Debtor"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    accountsReceivable?: AccountsReceivableListRelationFilter
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type DebtorOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrderInput | SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    identification?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    accountsReceivable?: AccountsReceivableOrderByRelationAggregateInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type DebtorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_email?: DebtorTenantIdEmailCompoundUniqueInput
    tenantId_identification?: DebtorTenantIdIdentificationCompoundUniqueInput
    AND?: DebtorWhereInput | DebtorWhereInput[]
    OR?: DebtorWhereInput[]
    NOT?: DebtorWhereInput | DebtorWhereInput[]
    tenantId?: StringFilter<"Debtor"> | string
    userId?: StringNullableFilter<"Debtor"> | string | null
    fullname?: StringFilter<"Debtor"> | string
    email?: StringFilter<"Debtor"> | string
    phone?: StringNullableFilter<"Debtor"> | string | null
    address?: StringNullableFilter<"Debtor"> | string | null
    identification?: StringNullableFilter<"Debtor"> | string | null
    employeeId?: StringNullableFilter<"Debtor"> | string | null
    createdAt?: DateTimeFilter<"Debtor"> | Date | string
    updatedAt?: DateTimeFilter<"Debtor"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    accountsReceivable?: AccountsReceivableListRelationFilter
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id" | "tenantId_email" | "tenantId_identification">

  export type DebtorOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrderInput | SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    identification?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DebtorCountOrderByAggregateInput
    _max?: DebtorMaxOrderByAggregateInput
    _min?: DebtorMinOrderByAggregateInput
  }

  export type DebtorScalarWhereWithAggregatesInput = {
    AND?: DebtorScalarWhereWithAggregatesInput | DebtorScalarWhereWithAggregatesInput[]
    OR?: DebtorScalarWhereWithAggregatesInput[]
    NOT?: DebtorScalarWhereWithAggregatesInput | DebtorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Debtor"> | string
    tenantId?: StringWithAggregatesFilter<"Debtor"> | string
    userId?: StringNullableWithAggregatesFilter<"Debtor"> | string | null
    fullname?: StringWithAggregatesFilter<"Debtor"> | string
    email?: StringWithAggregatesFilter<"Debtor"> | string
    phone?: StringNullableWithAggregatesFilter<"Debtor"> | string | null
    address?: StringNullableWithAggregatesFilter<"Debtor"> | string | null
    identification?: StringNullableWithAggregatesFilter<"Debtor"> | string | null
    employeeId?: StringNullableWithAggregatesFilter<"Debtor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Debtor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Debtor"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    tenantId?: StringFilter<"Employee"> | string
    fullname?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    debtors?: DebtorListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    debtors?: DebtorOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    tenantId_email?: EmployeeTenantIdEmailCompoundUniqueInput
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    tenantId?: StringFilter<"Employee"> | string
    fullname?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    debtors?: DebtorListRelationFilter
  }, "id" | "email" | "tenantId_email">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    tenantId?: StringWithAggregatesFilter<"Employee"> | string
    fullname?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    position?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutTenantInput
    users?: UserCreateNestedManyWithoutTenantInput
    tenantConfigs?: TenantConfigCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableCreateNestedManyWithoutTenantInput
    debtors?: DebtorCreateNestedManyWithoutTenantInput
    employees?: EmployeeCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    subdomain: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    tenantConfigs?: TenantConfigUncheckedCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableUncheckedCreateNestedManyWithoutTenantInput
    debtors?: DebtorUncheckedCreateNestedManyWithoutTenantInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutTenantNestedInput
    users?: UserUpdateManyWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUncheckedUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUncheckedUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUncheckedUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    subdomain: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    type: string
    name: string
    kvk: string
    contactEmail: string
    numberOfEmployees: string
    country: string
    address: string
    termsAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantCreateNestedOneWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    type: string
    name: string
    kvk: string
    contactEmail: string
    numberOfEmployees: string
    country: string
    address: string
    termsAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant?: TenantUncheckedCreateNestedOneWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kvk?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    numberOfEmployees?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kvk?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    numberOfEmployees?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUncheckedUpdateOneWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    type: string
    name: string
    kvk: string
    contactEmail: string
    numberOfEmployees: string
    country: string
    address: string
    termsAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kvk?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    numberOfEmployees?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kvk?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    numberOfEmployees?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    tenant: TenantCreateNestedOneWithoutUsersInput
    invitedBy?: UserCreateNestedOneWithoutInvitationsInput
    invitations?: UserCreateNestedManyWithoutInvitedByInput
    debtors?: DebtorCreateNestedManyWithoutUserInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    tenantId: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    invitedById?: string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    roleId: string
    invitations?: UserUncheckedCreateNestedManyWithoutInvitedByInput
    debtors?: DebtorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    invitedBy?: UserUpdateOneWithoutInvitationsNestedInput
    invitations?: UserUpdateManyWithoutInvitedByNestedInput
    debtors?: DebtorUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    invitations?: UserUncheckedUpdateManyWithoutInvitedByNestedInput
    debtors?: DebtorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    tenantId: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    invitedById?: string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    roleId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type GlobalParameterCreateInput = {
    id?: string
    porcCobranza?: number
    porcAbb?: number
    diasPlazoEmpresaAanmaning?: number
    diasPlazoConsumidorAanmaning?: number
    diasPlazoEmpresaSommatie?: number
    diasPlazoConsumidorSommatie?: number
    precioEmpresaPequena?: number
    contribucionEmpresaPequenaPfc?: number
    precioEmpresaGrande?: number
    contribucionEmpresaGrandePfc?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantConfigs?: TenantConfigCreateNestedManyWithoutParameterInput
  }

  export type GlobalParameterUncheckedCreateInput = {
    id?: string
    porcCobranza?: number
    porcAbb?: number
    diasPlazoEmpresaAanmaning?: number
    diasPlazoConsumidorAanmaning?: number
    diasPlazoEmpresaSommatie?: number
    diasPlazoConsumidorSommatie?: number
    precioEmpresaPequena?: number
    contribucionEmpresaPequenaPfc?: number
    precioEmpresaGrande?: number
    contribucionEmpresaGrandePfc?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantConfigs?: TenantConfigUncheckedCreateNestedManyWithoutParameterInput
  }

  export type GlobalParameterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    porcCobranza?: FloatFieldUpdateOperationsInput | number
    porcAbb?: FloatFieldUpdateOperationsInput | number
    diasPlazoEmpresaAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoEmpresaSommatie?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorSommatie?: IntFieldUpdateOperationsInput | number
    precioEmpresaPequena?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaPequenaPfc?: FloatFieldUpdateOperationsInput | number
    precioEmpresaGrande?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaGrandePfc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantConfigs?: TenantConfigUpdateManyWithoutParameterNestedInput
  }

  export type GlobalParameterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    porcCobranza?: FloatFieldUpdateOperationsInput | number
    porcAbb?: FloatFieldUpdateOperationsInput | number
    diasPlazoEmpresaAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoEmpresaSommatie?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorSommatie?: IntFieldUpdateOperationsInput | number
    precioEmpresaPequena?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaPequenaPfc?: FloatFieldUpdateOperationsInput | number
    precioEmpresaGrande?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaGrandePfc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantConfigs?: TenantConfigUncheckedUpdateManyWithoutParameterNestedInput
  }

  export type GlobalParameterCreateManyInput = {
    id?: string
    porcCobranza?: number
    porcAbb?: number
    diasPlazoEmpresaAanmaning?: number
    diasPlazoConsumidorAanmaning?: number
    diasPlazoEmpresaSommatie?: number
    diasPlazoConsumidorSommatie?: number
    precioEmpresaPequena?: number
    contribucionEmpresaPequenaPfc?: number
    precioEmpresaGrande?: number
    contribucionEmpresaGrandePfc?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalParameterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    porcCobranza?: FloatFieldUpdateOperationsInput | number
    porcAbb?: FloatFieldUpdateOperationsInput | number
    diasPlazoEmpresaAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoEmpresaSommatie?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorSommatie?: IntFieldUpdateOperationsInput | number
    precioEmpresaPequena?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaPequenaPfc?: FloatFieldUpdateOperationsInput | number
    precioEmpresaGrande?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaGrandePfc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalParameterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    porcCobranza?: FloatFieldUpdateOperationsInput | number
    porcAbb?: FloatFieldUpdateOperationsInput | number
    diasPlazoEmpresaAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoEmpresaSommatie?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorSommatie?: IntFieldUpdateOperationsInput | number
    precioEmpresaPequena?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaPequenaPfc?: FloatFieldUpdateOperationsInput | number
    precioEmpresaGrande?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaGrandePfc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantConfigCreateInput = {
    porcInteresCobranza?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutTenantConfigsInput
    parameter: GlobalParameterCreateNestedOneWithoutTenantConfigsInput
  }

  export type TenantConfigUncheckedCreateInput = {
    tenantId: string
    parameterId: string
    porcInteresCobranza?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantConfigUpdateInput = {
    porcInteresCobranza?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTenantConfigsNestedInput
    parameter?: GlobalParameterUpdateOneRequiredWithoutTenantConfigsNestedInput
  }

  export type TenantConfigUncheckedUpdateInput = {
    tenantId?: StringFieldUpdateOperationsInput | string
    parameterId?: StringFieldUpdateOperationsInput | string
    porcInteresCobranza?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantConfigCreateManyInput = {
    tenantId: string
    parameterId: string
    porcInteresCobranza?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantConfigUpdateManyMutationInput = {
    porcInteresCobranza?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantConfigUncheckedUpdateManyInput = {
    tenantId?: StringFieldUpdateOperationsInput | string
    parameterId?: StringFieldUpdateOperationsInput | string
    porcInteresCobranza?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsReceivableCreateInput = {
    id?: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAccountsReceivableInput
    paymentDetail?: PaymentDetailCreateNestedManyWithoutAccountsReceivableInput
    debtor?: DebtorCreateNestedOneWithoutAccountsReceivableInput
  }

  export type AccountsReceivableUncheckedCreateInput = {
    id?: string
    tenantId: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    debtorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentDetail?: PaymentDetailUncheckedCreateNestedManyWithoutAccountsReceivableInput
  }

  export type AccountsReceivableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAccountsReceivableNestedInput
    paymentDetail?: PaymentDetailUpdateManyWithoutAccountsReceivableNestedInput
    debtor?: DebtorUpdateOneWithoutAccountsReceivableNestedInput
  }

  export type AccountsReceivableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    debtorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDetail?: PaymentDetailUncheckedUpdateManyWithoutAccountsReceivableNestedInput
  }

  export type AccountsReceivableCreateManyInput = {
    id?: string
    tenantId: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    debtorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsReceivableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsReceivableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    debtorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailCreateInput = {
    id?: string
    paymentDate: Date | string
    paymentAmount: number
    paymentMethod: string
    referenceNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountsReceivable: AccountsReceivableCreateNestedOneWithoutPaymentDetailInput
  }

  export type PaymentDetailUncheckedCreateInput = {
    id?: string
    accountsReceivableId: string
    paymentDate: Date | string
    paymentAmount: number
    paymentMethod: string
    referenceNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountsReceivable?: AccountsReceivableUpdateOneRequiredWithoutPaymentDetailNestedInput
  }

  export type PaymentDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountsReceivableId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailCreateManyInput = {
    id?: string
    accountsReceivableId: string
    paymentDate: Date | string
    paymentAmount: number
    paymentMethod: string
    referenceNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountsReceivableId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtorCreateInput = {
    id?: string
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutDebtorsInput
    user?: UserCreateNestedOneWithoutDebtorsInput
    accountsReceivable?: AccountsReceivableCreateNestedManyWithoutDebtorInput
    employee?: EmployeeCreateNestedOneWithoutDebtorsInput
  }

  export type DebtorUncheckedCreateInput = {
    id?: string
    tenantId: string
    userId?: string | null
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountsReceivable?: AccountsReceivableUncheckedCreateNestedManyWithoutDebtorInput
  }

  export type DebtorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutDebtorsNestedInput
    user?: UserUpdateOneWithoutDebtorsNestedInput
    accountsReceivable?: AccountsReceivableUpdateManyWithoutDebtorNestedInput
    employee?: EmployeeUpdateOneWithoutDebtorsNestedInput
  }

  export type DebtorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountsReceivable?: AccountsReceivableUncheckedUpdateManyWithoutDebtorNestedInput
  }

  export type DebtorCreateManyInput = {
    id?: string
    tenantId: string
    userId?: string | null
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    fullname: string
    email: string
    phone?: string | null
    position?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutEmployeesInput
    debtors?: DebtorCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    tenantId: string
    fullname: string
    email: string
    phone?: string | null
    position?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    debtors?: DebtorUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutEmployeesNestedInput
    debtors?: DebtorUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debtors?: DebtorUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    tenantId: string
    fullname: string
    email: string
    phone?: string | null
    position?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TenantConfigListRelationFilter = {
    every?: TenantConfigWhereInput
    some?: TenantConfigWhereInput
    none?: TenantConfigWhereInput
  }

  export type AccountsReceivableListRelationFilter = {
    every?: AccountsReceivableWhereInput
    some?: AccountsReceivableWhereInput
    none?: AccountsReceivableWhereInput
  }

  export type DebtorListRelationFilter = {
    every?: DebtorWhereInput
    some?: DebtorWhereInput
    none?: DebtorWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsReceivableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebtorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    subdomain?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    subdomain?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    subdomain?: SortOrder
    clientId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TenantNullableScalarRelationFilter = {
    is?: TenantWhereInput | null
    isNot?: TenantWhereInput | null
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    kvk?: SortOrder
    contactEmail?: SortOrder
    numberOfEmployees?: SortOrder
    country?: SortOrder
    address?: SortOrder
    termsAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    kvk?: SortOrder
    contactEmail?: SortOrder
    numberOfEmployees?: SortOrder
    country?: SortOrder
    address?: SortOrder
    termsAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    kvk?: SortOrder
    contactEmail?: SortOrder
    numberOfEmployees?: SortOrder
    country?: SortOrder
    address?: SortOrder
    termsAccepted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    typeIdentification?: SortOrder
    identification?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordToken?: SortOrder
    joined?: SortOrder
    invitedById?: SortOrder
    lastActive?: SortOrder
    status?: SortOrder
    invitationToken?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    typeIdentification?: SortOrder
    identification?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordToken?: SortOrder
    joined?: SortOrder
    invitedById?: SortOrder
    lastActive?: SortOrder
    status?: SortOrder
    invitationToken?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    typeIdentification?: SortOrder
    identification?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordToken?: SortOrder
    joined?: SortOrder
    invitedById?: SortOrder
    lastActive?: SortOrder
    status?: SortOrder
    invitationToken?: SortOrder
    roleId?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GlobalParameterCountOrderByAggregateInput = {
    id?: SortOrder
    porcCobranza?: SortOrder
    porcAbb?: SortOrder
    diasPlazoEmpresaAanmaning?: SortOrder
    diasPlazoConsumidorAanmaning?: SortOrder
    diasPlazoEmpresaSommatie?: SortOrder
    diasPlazoConsumidorSommatie?: SortOrder
    precioEmpresaPequena?: SortOrder
    contribucionEmpresaPequenaPfc?: SortOrder
    precioEmpresaGrande?: SortOrder
    contribucionEmpresaGrandePfc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalParameterAvgOrderByAggregateInput = {
    porcCobranza?: SortOrder
    porcAbb?: SortOrder
    diasPlazoEmpresaAanmaning?: SortOrder
    diasPlazoConsumidorAanmaning?: SortOrder
    diasPlazoEmpresaSommatie?: SortOrder
    diasPlazoConsumidorSommatie?: SortOrder
    precioEmpresaPequena?: SortOrder
    contribucionEmpresaPequenaPfc?: SortOrder
    precioEmpresaGrande?: SortOrder
    contribucionEmpresaGrandePfc?: SortOrder
  }

  export type GlobalParameterMaxOrderByAggregateInput = {
    id?: SortOrder
    porcCobranza?: SortOrder
    porcAbb?: SortOrder
    diasPlazoEmpresaAanmaning?: SortOrder
    diasPlazoConsumidorAanmaning?: SortOrder
    diasPlazoEmpresaSommatie?: SortOrder
    diasPlazoConsumidorSommatie?: SortOrder
    precioEmpresaPequena?: SortOrder
    contribucionEmpresaPequenaPfc?: SortOrder
    precioEmpresaGrande?: SortOrder
    contribucionEmpresaGrandePfc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalParameterMinOrderByAggregateInput = {
    id?: SortOrder
    porcCobranza?: SortOrder
    porcAbb?: SortOrder
    diasPlazoEmpresaAanmaning?: SortOrder
    diasPlazoConsumidorAanmaning?: SortOrder
    diasPlazoEmpresaSommatie?: SortOrder
    diasPlazoConsumidorSommatie?: SortOrder
    precioEmpresaPequena?: SortOrder
    contribucionEmpresaPequenaPfc?: SortOrder
    precioEmpresaGrande?: SortOrder
    contribucionEmpresaGrandePfc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalParameterSumOrderByAggregateInput = {
    porcCobranza?: SortOrder
    porcAbb?: SortOrder
    diasPlazoEmpresaAanmaning?: SortOrder
    diasPlazoConsumidorAanmaning?: SortOrder
    diasPlazoEmpresaSommatie?: SortOrder
    diasPlazoConsumidorSommatie?: SortOrder
    precioEmpresaPequena?: SortOrder
    contribucionEmpresaPequenaPfc?: SortOrder
    precioEmpresaGrande?: SortOrder
    contribucionEmpresaGrandePfc?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type GlobalParameterScalarRelationFilter = {
    is?: GlobalParameterWhereInput
    isNot?: GlobalParameterWhereInput
  }

  export type TenantConfigTenantIdParameterIdCompoundUniqueInput = {
    tenantId: string
    parameterId: string
  }

  export type TenantConfigCountOrderByAggregateInput = {
    tenantId?: SortOrder
    parameterId?: SortOrder
    porcInteresCobranza?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantConfigAvgOrderByAggregateInput = {
    porcInteresCobranza?: SortOrder
  }

  export type TenantConfigMaxOrderByAggregateInput = {
    tenantId?: SortOrder
    parameterId?: SortOrder
    porcInteresCobranza?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantConfigMinOrderByAggregateInput = {
    tenantId?: SortOrder
    parameterId?: SortOrder
    porcInteresCobranza?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantConfigSumOrderByAggregateInput = {
    porcInteresCobranza?: SortOrder
  }

  export type PaymentDetailListRelationFilter = {
    every?: PaymentDetailWhereInput
    some?: PaymentDetailWhereInput
    none?: PaymentDetailWhereInput
  }

  export type DebtorNullableScalarRelationFilter = {
    is?: DebtorWhereInput | null
    isNot?: DebtorWhereInput | null
  }

  export type PaymentDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsReceivableCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    customerName?: SortOrder
    customerAddress?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    invoiceAmount?: SortOrder
    amountPaid?: SortOrder
    outstandingBalance?: SortOrder
    receivableStatus?: SortOrder
    collectionStatus?: SortOrder
    notes?: SortOrder
    debtorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsReceivableAvgOrderByAggregateInput = {
    invoiceAmount?: SortOrder
    amountPaid?: SortOrder
    outstandingBalance?: SortOrder
  }

  export type AccountsReceivableMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    customerName?: SortOrder
    customerAddress?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    invoiceAmount?: SortOrder
    amountPaid?: SortOrder
    outstandingBalance?: SortOrder
    receivableStatus?: SortOrder
    collectionStatus?: SortOrder
    notes?: SortOrder
    debtorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsReceivableMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    customerName?: SortOrder
    customerAddress?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    invoiceAmount?: SortOrder
    amountPaid?: SortOrder
    outstandingBalance?: SortOrder
    receivableStatus?: SortOrder
    collectionStatus?: SortOrder
    notes?: SortOrder
    debtorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountsReceivableSumOrderByAggregateInput = {
    invoiceAmount?: SortOrder
    amountPaid?: SortOrder
    outstandingBalance?: SortOrder
  }

  export type AccountsReceivableScalarRelationFilter = {
    is?: AccountsReceivableWhereInput
    isNot?: AccountsReceivableWhereInput
  }

  export type PaymentDetailCountOrderByAggregateInput = {
    id?: SortOrder
    accountsReceivableId?: SortOrder
    paymentDate?: SortOrder
    paymentAmount?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentDetailAvgOrderByAggregateInput = {
    paymentAmount?: SortOrder
  }

  export type PaymentDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    accountsReceivableId?: SortOrder
    paymentDate?: SortOrder
    paymentAmount?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentDetailMinOrderByAggregateInput = {
    id?: SortOrder
    accountsReceivableId?: SortOrder
    paymentDate?: SortOrder
    paymentAmount?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentDetailSumOrderByAggregateInput = {
    paymentAmount?: SortOrder
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type DebtorTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type DebtorTenantIdIdentificationCompoundUniqueInput = {
    tenantId: string
    identification: string
  }

  export type DebtorCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    identification?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtorMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    identification?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebtorMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    identification?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientCreateNestedOneWithoutTenantInput = {
    create?: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTenantInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TenantConfigCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenantConfigCreateWithoutTenantInput, TenantConfigUncheckedCreateWithoutTenantInput> | TenantConfigCreateWithoutTenantInput[] | TenantConfigUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantConfigCreateOrConnectWithoutTenantInput | TenantConfigCreateOrConnectWithoutTenantInput[]
    createMany?: TenantConfigCreateManyTenantInputEnvelope
    connect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
  }

  export type AccountsReceivableCreateNestedManyWithoutTenantInput = {
    create?: XOR<AccountsReceivableCreateWithoutTenantInput, AccountsReceivableUncheckedCreateWithoutTenantInput> | AccountsReceivableCreateWithoutTenantInput[] | AccountsReceivableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AccountsReceivableCreateOrConnectWithoutTenantInput | AccountsReceivableCreateOrConnectWithoutTenantInput[]
    createMany?: AccountsReceivableCreateManyTenantInputEnvelope
    connect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
  }

  export type DebtorCreateNestedManyWithoutTenantInput = {
    create?: XOR<DebtorCreateWithoutTenantInput, DebtorUncheckedCreateWithoutTenantInput> | DebtorCreateWithoutTenantInput[] | DebtorUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutTenantInput | DebtorCreateOrConnectWithoutTenantInput[]
    createMany?: DebtorCreateManyTenantInputEnvelope
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutTenantInput = {
    create?: XOR<EmployeeCreateWithoutTenantInput, EmployeeUncheckedCreateWithoutTenantInput> | EmployeeCreateWithoutTenantInput[] | EmployeeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutTenantInput | EmployeeCreateOrConnectWithoutTenantInput[]
    createMany?: EmployeeCreateManyTenantInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TenantConfigUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenantConfigCreateWithoutTenantInput, TenantConfigUncheckedCreateWithoutTenantInput> | TenantConfigCreateWithoutTenantInput[] | TenantConfigUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantConfigCreateOrConnectWithoutTenantInput | TenantConfigCreateOrConnectWithoutTenantInput[]
    createMany?: TenantConfigCreateManyTenantInputEnvelope
    connect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
  }

  export type AccountsReceivableUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AccountsReceivableCreateWithoutTenantInput, AccountsReceivableUncheckedCreateWithoutTenantInput> | AccountsReceivableCreateWithoutTenantInput[] | AccountsReceivableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AccountsReceivableCreateOrConnectWithoutTenantInput | AccountsReceivableCreateOrConnectWithoutTenantInput[]
    createMany?: AccountsReceivableCreateManyTenantInputEnvelope
    connect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
  }

  export type DebtorUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<DebtorCreateWithoutTenantInput, DebtorUncheckedCreateWithoutTenantInput> | DebtorCreateWithoutTenantInput[] | DebtorUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutTenantInput | DebtorCreateOrConnectWithoutTenantInput[]
    createMany?: DebtorCreateManyTenantInputEnvelope
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<EmployeeCreateWithoutTenantInput, EmployeeUncheckedCreateWithoutTenantInput> | EmployeeCreateWithoutTenantInput[] | EmployeeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutTenantInput | EmployeeCreateOrConnectWithoutTenantInput[]
    createMany?: EmployeeCreateManyTenantInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateOneRequiredWithoutTenantNestedInput = {
    create?: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTenantInput
    upsert?: ClientUpsertWithoutTenantInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTenantInput, ClientUpdateWithoutTenantInput>, ClientUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TenantConfigUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenantConfigCreateWithoutTenantInput, TenantConfigUncheckedCreateWithoutTenantInput> | TenantConfigCreateWithoutTenantInput[] | TenantConfigUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantConfigCreateOrConnectWithoutTenantInput | TenantConfigCreateOrConnectWithoutTenantInput[]
    upsert?: TenantConfigUpsertWithWhereUniqueWithoutTenantInput | TenantConfigUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenantConfigCreateManyTenantInputEnvelope
    set?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    disconnect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    delete?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    connect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    update?: TenantConfigUpdateWithWhereUniqueWithoutTenantInput | TenantConfigUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenantConfigUpdateManyWithWhereWithoutTenantInput | TenantConfigUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenantConfigScalarWhereInput | TenantConfigScalarWhereInput[]
  }

  export type AccountsReceivableUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AccountsReceivableCreateWithoutTenantInput, AccountsReceivableUncheckedCreateWithoutTenantInput> | AccountsReceivableCreateWithoutTenantInput[] | AccountsReceivableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AccountsReceivableCreateOrConnectWithoutTenantInput | AccountsReceivableCreateOrConnectWithoutTenantInput[]
    upsert?: AccountsReceivableUpsertWithWhereUniqueWithoutTenantInput | AccountsReceivableUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AccountsReceivableCreateManyTenantInputEnvelope
    set?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    disconnect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    delete?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    connect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    update?: AccountsReceivableUpdateWithWhereUniqueWithoutTenantInput | AccountsReceivableUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AccountsReceivableUpdateManyWithWhereWithoutTenantInput | AccountsReceivableUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AccountsReceivableScalarWhereInput | AccountsReceivableScalarWhereInput[]
  }

  export type DebtorUpdateManyWithoutTenantNestedInput = {
    create?: XOR<DebtorCreateWithoutTenantInput, DebtorUncheckedCreateWithoutTenantInput> | DebtorCreateWithoutTenantInput[] | DebtorUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutTenantInput | DebtorCreateOrConnectWithoutTenantInput[]
    upsert?: DebtorUpsertWithWhereUniqueWithoutTenantInput | DebtorUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: DebtorCreateManyTenantInputEnvelope
    set?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    disconnect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    delete?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    update?: DebtorUpdateWithWhereUniqueWithoutTenantInput | DebtorUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: DebtorUpdateManyWithWhereWithoutTenantInput | DebtorUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: DebtorScalarWhereInput | DebtorScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutTenantNestedInput = {
    create?: XOR<EmployeeCreateWithoutTenantInput, EmployeeUncheckedCreateWithoutTenantInput> | EmployeeCreateWithoutTenantInput[] | EmployeeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutTenantInput | EmployeeCreateOrConnectWithoutTenantInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutTenantInput | EmployeeUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: EmployeeCreateManyTenantInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutTenantInput | EmployeeUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutTenantInput | EmployeeUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TenantConfigUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenantConfigCreateWithoutTenantInput, TenantConfigUncheckedCreateWithoutTenantInput> | TenantConfigCreateWithoutTenantInput[] | TenantConfigUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantConfigCreateOrConnectWithoutTenantInput | TenantConfigCreateOrConnectWithoutTenantInput[]
    upsert?: TenantConfigUpsertWithWhereUniqueWithoutTenantInput | TenantConfigUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenantConfigCreateManyTenantInputEnvelope
    set?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    disconnect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    delete?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    connect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    update?: TenantConfigUpdateWithWhereUniqueWithoutTenantInput | TenantConfigUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenantConfigUpdateManyWithWhereWithoutTenantInput | TenantConfigUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenantConfigScalarWhereInput | TenantConfigScalarWhereInput[]
  }

  export type AccountsReceivableUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AccountsReceivableCreateWithoutTenantInput, AccountsReceivableUncheckedCreateWithoutTenantInput> | AccountsReceivableCreateWithoutTenantInput[] | AccountsReceivableUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AccountsReceivableCreateOrConnectWithoutTenantInput | AccountsReceivableCreateOrConnectWithoutTenantInput[]
    upsert?: AccountsReceivableUpsertWithWhereUniqueWithoutTenantInput | AccountsReceivableUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AccountsReceivableCreateManyTenantInputEnvelope
    set?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    disconnect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    delete?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    connect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    update?: AccountsReceivableUpdateWithWhereUniqueWithoutTenantInput | AccountsReceivableUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AccountsReceivableUpdateManyWithWhereWithoutTenantInput | AccountsReceivableUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AccountsReceivableScalarWhereInput | AccountsReceivableScalarWhereInput[]
  }

  export type DebtorUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<DebtorCreateWithoutTenantInput, DebtorUncheckedCreateWithoutTenantInput> | DebtorCreateWithoutTenantInput[] | DebtorUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutTenantInput | DebtorCreateOrConnectWithoutTenantInput[]
    upsert?: DebtorUpsertWithWhereUniqueWithoutTenantInput | DebtorUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: DebtorCreateManyTenantInputEnvelope
    set?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    disconnect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    delete?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    update?: DebtorUpdateWithWhereUniqueWithoutTenantInput | DebtorUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: DebtorUpdateManyWithWhereWithoutTenantInput | DebtorUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: DebtorScalarWhereInput | DebtorScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<EmployeeCreateWithoutTenantInput, EmployeeUncheckedCreateWithoutTenantInput> | EmployeeCreateWithoutTenantInput[] | EmployeeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutTenantInput | EmployeeCreateOrConnectWithoutTenantInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutTenantInput | EmployeeUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: EmployeeCreateManyTenantInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutTenantInput | EmployeeUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutTenantInput | EmployeeUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutClientInput = {
    create?: XOR<TenantCreateWithoutClientInput, TenantUncheckedCreateWithoutClientInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClientInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUncheckedCreateNestedOneWithoutClientInput = {
    create?: XOR<TenantCreateWithoutClientInput, TenantUncheckedCreateWithoutClientInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClientInput
    connect?: TenantWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TenantUpdateOneWithoutClientNestedInput = {
    create?: XOR<TenantCreateWithoutClientInput, TenantUncheckedCreateWithoutClientInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClientInput
    upsert?: TenantUpsertWithoutClientInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutClientInput, TenantUpdateWithoutClientInput>, TenantUncheckedUpdateWithoutClientInput>
  }

  export type TenantUncheckedUpdateOneWithoutClientNestedInput = {
    create?: XOR<TenantCreateWithoutClientInput, TenantUncheckedCreateWithoutClientInput>
    connectOrCreate?: TenantCreateOrConnectWithoutClientInput
    upsert?: TenantUpsertWithoutClientInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutClientInput, TenantUpdateWithoutClientInput>, TenantUncheckedUpdateWithoutClientInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<UserCreateWithoutInvitedByInput, UserUncheckedCreateWithoutInvitedByInput> | UserCreateWithoutInvitedByInput[] | UserUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInvitedByInput | UserCreateOrConnectWithoutInvitedByInput[]
    createMany?: UserCreateManyInvitedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DebtorCreateNestedManyWithoutUserInput = {
    create?: XOR<DebtorCreateWithoutUserInput, DebtorUncheckedCreateWithoutUserInput> | DebtorCreateWithoutUserInput[] | DebtorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutUserInput | DebtorCreateOrConnectWithoutUserInput[]
    createMany?: DebtorCreateManyUserInputEnvelope
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<UserCreateWithoutInvitedByInput, UserUncheckedCreateWithoutInvitedByInput> | UserCreateWithoutInvitedByInput[] | UserUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInvitedByInput | UserCreateOrConnectWithoutInvitedByInput[]
    createMany?: UserCreateManyInvitedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DebtorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DebtorCreateWithoutUserInput, DebtorUncheckedCreateWithoutUserInput> | DebtorCreateWithoutUserInput[] | DebtorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutUserInput | DebtorCreateOrConnectWithoutUserInput[]
    createMany?: DebtorCreateManyUserInputEnvelope
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    upsert?: UserUpsertWithoutInvitationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsInput, UserUpdateWithoutInvitationsInput>, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<UserCreateWithoutInvitedByInput, UserUncheckedCreateWithoutInvitedByInput> | UserCreateWithoutInvitedByInput[] | UserUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInvitedByInput | UserCreateOrConnectWithoutInvitedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInvitedByInput | UserUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: UserCreateManyInvitedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInvitedByInput | UserUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInvitedByInput | UserUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DebtorUpdateManyWithoutUserNestedInput = {
    create?: XOR<DebtorCreateWithoutUserInput, DebtorUncheckedCreateWithoutUserInput> | DebtorCreateWithoutUserInput[] | DebtorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutUserInput | DebtorCreateOrConnectWithoutUserInput[]
    upsert?: DebtorUpsertWithWhereUniqueWithoutUserInput | DebtorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DebtorCreateManyUserInputEnvelope
    set?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    disconnect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    delete?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    update?: DebtorUpdateWithWhereUniqueWithoutUserInput | DebtorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DebtorUpdateManyWithWhereWithoutUserInput | DebtorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DebtorScalarWhereInput | DebtorScalarWhereInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<UserCreateWithoutInvitedByInput, UserUncheckedCreateWithoutInvitedByInput> | UserCreateWithoutInvitedByInput[] | UserUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInvitedByInput | UserCreateOrConnectWithoutInvitedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInvitedByInput | UserUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: UserCreateManyInvitedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInvitedByInput | UserUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInvitedByInput | UserUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DebtorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DebtorCreateWithoutUserInput, DebtorUncheckedCreateWithoutUserInput> | DebtorCreateWithoutUserInput[] | DebtorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutUserInput | DebtorCreateOrConnectWithoutUserInput[]
    upsert?: DebtorUpsertWithWhereUniqueWithoutUserInput | DebtorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DebtorCreateManyUserInputEnvelope
    set?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    disconnect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    delete?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    update?: DebtorUpdateWithWhereUniqueWithoutUserInput | DebtorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DebtorUpdateManyWithWhereWithoutUserInput | DebtorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DebtorScalarWhereInput | DebtorScalarWhereInput[]
  }

  export type TenantConfigCreateNestedManyWithoutParameterInput = {
    create?: XOR<TenantConfigCreateWithoutParameterInput, TenantConfigUncheckedCreateWithoutParameterInput> | TenantConfigCreateWithoutParameterInput[] | TenantConfigUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: TenantConfigCreateOrConnectWithoutParameterInput | TenantConfigCreateOrConnectWithoutParameterInput[]
    createMany?: TenantConfigCreateManyParameterInputEnvelope
    connect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
  }

  export type TenantConfigUncheckedCreateNestedManyWithoutParameterInput = {
    create?: XOR<TenantConfigCreateWithoutParameterInput, TenantConfigUncheckedCreateWithoutParameterInput> | TenantConfigCreateWithoutParameterInput[] | TenantConfigUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: TenantConfigCreateOrConnectWithoutParameterInput | TenantConfigCreateOrConnectWithoutParameterInput[]
    createMany?: TenantConfigCreateManyParameterInputEnvelope
    connect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantConfigUpdateManyWithoutParameterNestedInput = {
    create?: XOR<TenantConfigCreateWithoutParameterInput, TenantConfigUncheckedCreateWithoutParameterInput> | TenantConfigCreateWithoutParameterInput[] | TenantConfigUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: TenantConfigCreateOrConnectWithoutParameterInput | TenantConfigCreateOrConnectWithoutParameterInput[]
    upsert?: TenantConfigUpsertWithWhereUniqueWithoutParameterInput | TenantConfigUpsertWithWhereUniqueWithoutParameterInput[]
    createMany?: TenantConfigCreateManyParameterInputEnvelope
    set?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    disconnect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    delete?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    connect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    update?: TenantConfigUpdateWithWhereUniqueWithoutParameterInput | TenantConfigUpdateWithWhereUniqueWithoutParameterInput[]
    updateMany?: TenantConfigUpdateManyWithWhereWithoutParameterInput | TenantConfigUpdateManyWithWhereWithoutParameterInput[]
    deleteMany?: TenantConfigScalarWhereInput | TenantConfigScalarWhereInput[]
  }

  export type TenantConfigUncheckedUpdateManyWithoutParameterNestedInput = {
    create?: XOR<TenantConfigCreateWithoutParameterInput, TenantConfigUncheckedCreateWithoutParameterInput> | TenantConfigCreateWithoutParameterInput[] | TenantConfigUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: TenantConfigCreateOrConnectWithoutParameterInput | TenantConfigCreateOrConnectWithoutParameterInput[]
    upsert?: TenantConfigUpsertWithWhereUniqueWithoutParameterInput | TenantConfigUpsertWithWhereUniqueWithoutParameterInput[]
    createMany?: TenantConfigCreateManyParameterInputEnvelope
    set?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    disconnect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    delete?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    connect?: TenantConfigWhereUniqueInput | TenantConfigWhereUniqueInput[]
    update?: TenantConfigUpdateWithWhereUniqueWithoutParameterInput | TenantConfigUpdateWithWhereUniqueWithoutParameterInput[]
    updateMany?: TenantConfigUpdateManyWithWhereWithoutParameterInput | TenantConfigUpdateManyWithWhereWithoutParameterInput[]
    deleteMany?: TenantConfigScalarWhereInput | TenantConfigScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutTenantConfigsInput = {
    create?: XOR<TenantCreateWithoutTenantConfigsInput, TenantUncheckedCreateWithoutTenantConfigsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTenantConfigsInput
    connect?: TenantWhereUniqueInput
  }

  export type GlobalParameterCreateNestedOneWithoutTenantConfigsInput = {
    create?: XOR<GlobalParameterCreateWithoutTenantConfigsInput, GlobalParameterUncheckedCreateWithoutTenantConfigsInput>
    connectOrCreate?: GlobalParameterCreateOrConnectWithoutTenantConfigsInput
    connect?: GlobalParameterWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutTenantConfigsNestedInput = {
    create?: XOR<TenantCreateWithoutTenantConfigsInput, TenantUncheckedCreateWithoutTenantConfigsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTenantConfigsInput
    upsert?: TenantUpsertWithoutTenantConfigsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutTenantConfigsInput, TenantUpdateWithoutTenantConfigsInput>, TenantUncheckedUpdateWithoutTenantConfigsInput>
  }

  export type GlobalParameterUpdateOneRequiredWithoutTenantConfigsNestedInput = {
    create?: XOR<GlobalParameterCreateWithoutTenantConfigsInput, GlobalParameterUncheckedCreateWithoutTenantConfigsInput>
    connectOrCreate?: GlobalParameterCreateOrConnectWithoutTenantConfigsInput
    upsert?: GlobalParameterUpsertWithoutTenantConfigsInput
    connect?: GlobalParameterWhereUniqueInput
    update?: XOR<XOR<GlobalParameterUpdateToOneWithWhereWithoutTenantConfigsInput, GlobalParameterUpdateWithoutTenantConfigsInput>, GlobalParameterUncheckedUpdateWithoutTenantConfigsInput>
  }

  export type TenantCreateNestedOneWithoutAccountsReceivableInput = {
    create?: XOR<TenantCreateWithoutAccountsReceivableInput, TenantUncheckedCreateWithoutAccountsReceivableInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAccountsReceivableInput
    connect?: TenantWhereUniqueInput
  }

  export type PaymentDetailCreateNestedManyWithoutAccountsReceivableInput = {
    create?: XOR<PaymentDetailCreateWithoutAccountsReceivableInput, PaymentDetailUncheckedCreateWithoutAccountsReceivableInput> | PaymentDetailCreateWithoutAccountsReceivableInput[] | PaymentDetailUncheckedCreateWithoutAccountsReceivableInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutAccountsReceivableInput | PaymentDetailCreateOrConnectWithoutAccountsReceivableInput[]
    createMany?: PaymentDetailCreateManyAccountsReceivableInputEnvelope
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
  }

  export type DebtorCreateNestedOneWithoutAccountsReceivableInput = {
    create?: XOR<DebtorCreateWithoutAccountsReceivableInput, DebtorUncheckedCreateWithoutAccountsReceivableInput>
    connectOrCreate?: DebtorCreateOrConnectWithoutAccountsReceivableInput
    connect?: DebtorWhereUniqueInput
  }

  export type PaymentDetailUncheckedCreateNestedManyWithoutAccountsReceivableInput = {
    create?: XOR<PaymentDetailCreateWithoutAccountsReceivableInput, PaymentDetailUncheckedCreateWithoutAccountsReceivableInput> | PaymentDetailCreateWithoutAccountsReceivableInput[] | PaymentDetailUncheckedCreateWithoutAccountsReceivableInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutAccountsReceivableInput | PaymentDetailCreateOrConnectWithoutAccountsReceivableInput[]
    createMany?: PaymentDetailCreateManyAccountsReceivableInputEnvelope
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutAccountsReceivableNestedInput = {
    create?: XOR<TenantCreateWithoutAccountsReceivableInput, TenantUncheckedCreateWithoutAccountsReceivableInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAccountsReceivableInput
    upsert?: TenantUpsertWithoutAccountsReceivableInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAccountsReceivableInput, TenantUpdateWithoutAccountsReceivableInput>, TenantUncheckedUpdateWithoutAccountsReceivableInput>
  }

  export type PaymentDetailUpdateManyWithoutAccountsReceivableNestedInput = {
    create?: XOR<PaymentDetailCreateWithoutAccountsReceivableInput, PaymentDetailUncheckedCreateWithoutAccountsReceivableInput> | PaymentDetailCreateWithoutAccountsReceivableInput[] | PaymentDetailUncheckedCreateWithoutAccountsReceivableInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutAccountsReceivableInput | PaymentDetailCreateOrConnectWithoutAccountsReceivableInput[]
    upsert?: PaymentDetailUpsertWithWhereUniqueWithoutAccountsReceivableInput | PaymentDetailUpsertWithWhereUniqueWithoutAccountsReceivableInput[]
    createMany?: PaymentDetailCreateManyAccountsReceivableInputEnvelope
    set?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    disconnect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    delete?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    update?: PaymentDetailUpdateWithWhereUniqueWithoutAccountsReceivableInput | PaymentDetailUpdateWithWhereUniqueWithoutAccountsReceivableInput[]
    updateMany?: PaymentDetailUpdateManyWithWhereWithoutAccountsReceivableInput | PaymentDetailUpdateManyWithWhereWithoutAccountsReceivableInput[]
    deleteMany?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
  }

  export type DebtorUpdateOneWithoutAccountsReceivableNestedInput = {
    create?: XOR<DebtorCreateWithoutAccountsReceivableInput, DebtorUncheckedCreateWithoutAccountsReceivableInput>
    connectOrCreate?: DebtorCreateOrConnectWithoutAccountsReceivableInput
    upsert?: DebtorUpsertWithoutAccountsReceivableInput
    disconnect?: DebtorWhereInput | boolean
    delete?: DebtorWhereInput | boolean
    connect?: DebtorWhereUniqueInput
    update?: XOR<XOR<DebtorUpdateToOneWithWhereWithoutAccountsReceivableInput, DebtorUpdateWithoutAccountsReceivableInput>, DebtorUncheckedUpdateWithoutAccountsReceivableInput>
  }

  export type PaymentDetailUncheckedUpdateManyWithoutAccountsReceivableNestedInput = {
    create?: XOR<PaymentDetailCreateWithoutAccountsReceivableInput, PaymentDetailUncheckedCreateWithoutAccountsReceivableInput> | PaymentDetailCreateWithoutAccountsReceivableInput[] | PaymentDetailUncheckedCreateWithoutAccountsReceivableInput[]
    connectOrCreate?: PaymentDetailCreateOrConnectWithoutAccountsReceivableInput | PaymentDetailCreateOrConnectWithoutAccountsReceivableInput[]
    upsert?: PaymentDetailUpsertWithWhereUniqueWithoutAccountsReceivableInput | PaymentDetailUpsertWithWhereUniqueWithoutAccountsReceivableInput[]
    createMany?: PaymentDetailCreateManyAccountsReceivableInputEnvelope
    set?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    disconnect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    delete?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    connect?: PaymentDetailWhereUniqueInput | PaymentDetailWhereUniqueInput[]
    update?: PaymentDetailUpdateWithWhereUniqueWithoutAccountsReceivableInput | PaymentDetailUpdateWithWhereUniqueWithoutAccountsReceivableInput[]
    updateMany?: PaymentDetailUpdateManyWithWhereWithoutAccountsReceivableInput | PaymentDetailUpdateManyWithWhereWithoutAccountsReceivableInput[]
    deleteMany?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
  }

  export type AccountsReceivableCreateNestedOneWithoutPaymentDetailInput = {
    create?: XOR<AccountsReceivableCreateWithoutPaymentDetailInput, AccountsReceivableUncheckedCreateWithoutPaymentDetailInput>
    connectOrCreate?: AccountsReceivableCreateOrConnectWithoutPaymentDetailInput
    connect?: AccountsReceivableWhereUniqueInput
  }

  export type AccountsReceivableUpdateOneRequiredWithoutPaymentDetailNestedInput = {
    create?: XOR<AccountsReceivableCreateWithoutPaymentDetailInput, AccountsReceivableUncheckedCreateWithoutPaymentDetailInput>
    connectOrCreate?: AccountsReceivableCreateOrConnectWithoutPaymentDetailInput
    upsert?: AccountsReceivableUpsertWithoutPaymentDetailInput
    connect?: AccountsReceivableWhereUniqueInput
    update?: XOR<XOR<AccountsReceivableUpdateToOneWithWhereWithoutPaymentDetailInput, AccountsReceivableUpdateWithoutPaymentDetailInput>, AccountsReceivableUncheckedUpdateWithoutPaymentDetailInput>
  }

  export type TenantCreateNestedOneWithoutDebtorsInput = {
    create?: XOR<TenantCreateWithoutDebtorsInput, TenantUncheckedCreateWithoutDebtorsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDebtorsInput
    connect?: TenantWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDebtorsInput = {
    create?: XOR<UserCreateWithoutDebtorsInput, UserUncheckedCreateWithoutDebtorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDebtorsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountsReceivableCreateNestedManyWithoutDebtorInput = {
    create?: XOR<AccountsReceivableCreateWithoutDebtorInput, AccountsReceivableUncheckedCreateWithoutDebtorInput> | AccountsReceivableCreateWithoutDebtorInput[] | AccountsReceivableUncheckedCreateWithoutDebtorInput[]
    connectOrCreate?: AccountsReceivableCreateOrConnectWithoutDebtorInput | AccountsReceivableCreateOrConnectWithoutDebtorInput[]
    createMany?: AccountsReceivableCreateManyDebtorInputEnvelope
    connect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
  }

  export type EmployeeCreateNestedOneWithoutDebtorsInput = {
    create?: XOR<EmployeeCreateWithoutDebtorsInput, EmployeeUncheckedCreateWithoutDebtorsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDebtorsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type AccountsReceivableUncheckedCreateNestedManyWithoutDebtorInput = {
    create?: XOR<AccountsReceivableCreateWithoutDebtorInput, AccountsReceivableUncheckedCreateWithoutDebtorInput> | AccountsReceivableCreateWithoutDebtorInput[] | AccountsReceivableUncheckedCreateWithoutDebtorInput[]
    connectOrCreate?: AccountsReceivableCreateOrConnectWithoutDebtorInput | AccountsReceivableCreateOrConnectWithoutDebtorInput[]
    createMany?: AccountsReceivableCreateManyDebtorInputEnvelope
    connect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutDebtorsNestedInput = {
    create?: XOR<TenantCreateWithoutDebtorsInput, TenantUncheckedCreateWithoutDebtorsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDebtorsInput
    upsert?: TenantUpsertWithoutDebtorsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutDebtorsInput, TenantUpdateWithoutDebtorsInput>, TenantUncheckedUpdateWithoutDebtorsInput>
  }

  export type UserUpdateOneWithoutDebtorsNestedInput = {
    create?: XOR<UserCreateWithoutDebtorsInput, UserUncheckedCreateWithoutDebtorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDebtorsInput
    upsert?: UserUpsertWithoutDebtorsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDebtorsInput, UserUpdateWithoutDebtorsInput>, UserUncheckedUpdateWithoutDebtorsInput>
  }

  export type AccountsReceivableUpdateManyWithoutDebtorNestedInput = {
    create?: XOR<AccountsReceivableCreateWithoutDebtorInput, AccountsReceivableUncheckedCreateWithoutDebtorInput> | AccountsReceivableCreateWithoutDebtorInput[] | AccountsReceivableUncheckedCreateWithoutDebtorInput[]
    connectOrCreate?: AccountsReceivableCreateOrConnectWithoutDebtorInput | AccountsReceivableCreateOrConnectWithoutDebtorInput[]
    upsert?: AccountsReceivableUpsertWithWhereUniqueWithoutDebtorInput | AccountsReceivableUpsertWithWhereUniqueWithoutDebtorInput[]
    createMany?: AccountsReceivableCreateManyDebtorInputEnvelope
    set?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    disconnect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    delete?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    connect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    update?: AccountsReceivableUpdateWithWhereUniqueWithoutDebtorInput | AccountsReceivableUpdateWithWhereUniqueWithoutDebtorInput[]
    updateMany?: AccountsReceivableUpdateManyWithWhereWithoutDebtorInput | AccountsReceivableUpdateManyWithWhereWithoutDebtorInput[]
    deleteMany?: AccountsReceivableScalarWhereInput | AccountsReceivableScalarWhereInput[]
  }

  export type EmployeeUpdateOneWithoutDebtorsNestedInput = {
    create?: XOR<EmployeeCreateWithoutDebtorsInput, EmployeeUncheckedCreateWithoutDebtorsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDebtorsInput
    upsert?: EmployeeUpsertWithoutDebtorsInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutDebtorsInput, EmployeeUpdateWithoutDebtorsInput>, EmployeeUncheckedUpdateWithoutDebtorsInput>
  }

  export type AccountsReceivableUncheckedUpdateManyWithoutDebtorNestedInput = {
    create?: XOR<AccountsReceivableCreateWithoutDebtorInput, AccountsReceivableUncheckedCreateWithoutDebtorInput> | AccountsReceivableCreateWithoutDebtorInput[] | AccountsReceivableUncheckedCreateWithoutDebtorInput[]
    connectOrCreate?: AccountsReceivableCreateOrConnectWithoutDebtorInput | AccountsReceivableCreateOrConnectWithoutDebtorInput[]
    upsert?: AccountsReceivableUpsertWithWhereUniqueWithoutDebtorInput | AccountsReceivableUpsertWithWhereUniqueWithoutDebtorInput[]
    createMany?: AccountsReceivableCreateManyDebtorInputEnvelope
    set?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    disconnect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    delete?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    connect?: AccountsReceivableWhereUniqueInput | AccountsReceivableWhereUniqueInput[]
    update?: AccountsReceivableUpdateWithWhereUniqueWithoutDebtorInput | AccountsReceivableUpdateWithWhereUniqueWithoutDebtorInput[]
    updateMany?: AccountsReceivableUpdateManyWithWhereWithoutDebtorInput | AccountsReceivableUpdateManyWithWhereWithoutDebtorInput[]
    deleteMany?: AccountsReceivableScalarWhereInput | AccountsReceivableScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<TenantCreateWithoutEmployeesInput, TenantUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutEmployeesInput
    connect?: TenantWhereUniqueInput
  }

  export type DebtorCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<DebtorCreateWithoutEmployeeInput, DebtorUncheckedCreateWithoutEmployeeInput> | DebtorCreateWithoutEmployeeInput[] | DebtorUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutEmployeeInput | DebtorCreateOrConnectWithoutEmployeeInput[]
    createMany?: DebtorCreateManyEmployeeInputEnvelope
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
  }

  export type DebtorUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<DebtorCreateWithoutEmployeeInput, DebtorUncheckedCreateWithoutEmployeeInput> | DebtorCreateWithoutEmployeeInput[] | DebtorUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutEmployeeInput | DebtorCreateOrConnectWithoutEmployeeInput[]
    createMany?: DebtorCreateManyEmployeeInputEnvelope
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<TenantCreateWithoutEmployeesInput, TenantUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutEmployeesInput
    upsert?: TenantUpsertWithoutEmployeesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutEmployeesInput, TenantUpdateWithoutEmployeesInput>, TenantUncheckedUpdateWithoutEmployeesInput>
  }

  export type DebtorUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<DebtorCreateWithoutEmployeeInput, DebtorUncheckedCreateWithoutEmployeeInput> | DebtorCreateWithoutEmployeeInput[] | DebtorUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutEmployeeInput | DebtorCreateOrConnectWithoutEmployeeInput[]
    upsert?: DebtorUpsertWithWhereUniqueWithoutEmployeeInput | DebtorUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: DebtorCreateManyEmployeeInputEnvelope
    set?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    disconnect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    delete?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    update?: DebtorUpdateWithWhereUniqueWithoutEmployeeInput | DebtorUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: DebtorUpdateManyWithWhereWithoutEmployeeInput | DebtorUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: DebtorScalarWhereInput | DebtorScalarWhereInput[]
  }

  export type DebtorUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<DebtorCreateWithoutEmployeeInput, DebtorUncheckedCreateWithoutEmployeeInput> | DebtorCreateWithoutEmployeeInput[] | DebtorUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: DebtorCreateOrConnectWithoutEmployeeInput | DebtorCreateOrConnectWithoutEmployeeInput[]
    upsert?: DebtorUpsertWithWhereUniqueWithoutEmployeeInput | DebtorUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: DebtorCreateManyEmployeeInputEnvelope
    set?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    disconnect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    delete?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    connect?: DebtorWhereUniqueInput | DebtorWhereUniqueInput[]
    update?: DebtorUpdateWithWhereUniqueWithoutEmployeeInput | DebtorUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: DebtorUpdateManyWithWhereWithoutEmployeeInput | DebtorUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: DebtorScalarWhereInput | DebtorScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ClientCreateWithoutTenantInput = {
    id?: string
    type: string
    name: string
    kvk: string
    contactEmail: string
    numberOfEmployees: string
    country: string
    address: string
    termsAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutTenantInput = {
    id?: string
    type: string
    name: string
    kvk: string
    contactEmail: string
    numberOfEmployees: string
    country: string
    address: string
    termsAccepted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutTenantInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    invitedBy?: UserCreateNestedOneWithoutInvitationsInput
    invitations?: UserCreateNestedManyWithoutInvitedByInput
    debtors?: DebtorCreateNestedManyWithoutUserInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    invitedById?: string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    roleId: string
    invitations?: UserUncheckedCreateNestedManyWithoutInvitedByInput
    debtors?: DebtorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type TenantConfigCreateWithoutTenantInput = {
    porcInteresCobranza?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parameter: GlobalParameterCreateNestedOneWithoutTenantConfigsInput
  }

  export type TenantConfigUncheckedCreateWithoutTenantInput = {
    parameterId: string
    porcInteresCobranza?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantConfigCreateOrConnectWithoutTenantInput = {
    where: TenantConfigWhereUniqueInput
    create: XOR<TenantConfigCreateWithoutTenantInput, TenantConfigUncheckedCreateWithoutTenantInput>
  }

  export type TenantConfigCreateManyTenantInputEnvelope = {
    data: TenantConfigCreateManyTenantInput | TenantConfigCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type AccountsReceivableCreateWithoutTenantInput = {
    id?: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentDetail?: PaymentDetailCreateNestedManyWithoutAccountsReceivableInput
    debtor?: DebtorCreateNestedOneWithoutAccountsReceivableInput
  }

  export type AccountsReceivableUncheckedCreateWithoutTenantInput = {
    id?: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    debtorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentDetail?: PaymentDetailUncheckedCreateNestedManyWithoutAccountsReceivableInput
  }

  export type AccountsReceivableCreateOrConnectWithoutTenantInput = {
    where: AccountsReceivableWhereUniqueInput
    create: XOR<AccountsReceivableCreateWithoutTenantInput, AccountsReceivableUncheckedCreateWithoutTenantInput>
  }

  export type AccountsReceivableCreateManyTenantInputEnvelope = {
    data: AccountsReceivableCreateManyTenantInput | AccountsReceivableCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type DebtorCreateWithoutTenantInput = {
    id?: string
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutDebtorsInput
    accountsReceivable?: AccountsReceivableCreateNestedManyWithoutDebtorInput
    employee?: EmployeeCreateNestedOneWithoutDebtorsInput
  }

  export type DebtorUncheckedCreateWithoutTenantInput = {
    id?: string
    userId?: string | null
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountsReceivable?: AccountsReceivableUncheckedCreateNestedManyWithoutDebtorInput
  }

  export type DebtorCreateOrConnectWithoutTenantInput = {
    where: DebtorWhereUniqueInput
    create: XOR<DebtorCreateWithoutTenantInput, DebtorUncheckedCreateWithoutTenantInput>
  }

  export type DebtorCreateManyTenantInputEnvelope = {
    data: DebtorCreateManyTenantInput | DebtorCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutTenantInput = {
    id?: string
    fullname: string
    email: string
    phone?: string | null
    position?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    debtors?: DebtorCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutTenantInput = {
    id?: string
    fullname: string
    email: string
    phone?: string | null
    position?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    debtors?: DebtorUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutTenantInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTenantInput, EmployeeUncheckedCreateWithoutTenantInput>
  }

  export type EmployeeCreateManyTenantInputEnvelope = {
    data: EmployeeCreateManyTenantInput | EmployeeCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutTenantInput = {
    update: XOR<ClientUpdateWithoutTenantInput, ClientUncheckedUpdateWithoutTenantInput>
    create: XOR<ClientCreateWithoutTenantInput, ClientUncheckedCreateWithoutTenantInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutTenantInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutTenantInput, ClientUncheckedUpdateWithoutTenantInput>
  }

  export type ClientUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kvk?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    numberOfEmployees?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    kvk?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    numberOfEmployees?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    termsAccepted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullname?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    typeIdentification?: StringNullableFilter<"User"> | string | null
    identification?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    joined?: DateTimeNullableFilter<"User"> | Date | string | null
    invitedById?: StringNullableFilter<"User"> | string | null
    lastActive?: DateTimeNullableFilter<"User"> | Date | string | null
    status?: StringFilter<"User"> | string
    invitationToken?: StringNullableFilter<"User"> | string | null
    roleId?: StringFilter<"User"> | string
  }

  export type TenantConfigUpsertWithWhereUniqueWithoutTenantInput = {
    where: TenantConfigWhereUniqueInput
    update: XOR<TenantConfigUpdateWithoutTenantInput, TenantConfigUncheckedUpdateWithoutTenantInput>
    create: XOR<TenantConfigCreateWithoutTenantInput, TenantConfigUncheckedCreateWithoutTenantInput>
  }

  export type TenantConfigUpdateWithWhereUniqueWithoutTenantInput = {
    where: TenantConfigWhereUniqueInput
    data: XOR<TenantConfigUpdateWithoutTenantInput, TenantConfigUncheckedUpdateWithoutTenantInput>
  }

  export type TenantConfigUpdateManyWithWhereWithoutTenantInput = {
    where: TenantConfigScalarWhereInput
    data: XOR<TenantConfigUpdateManyMutationInput, TenantConfigUncheckedUpdateManyWithoutTenantInput>
  }

  export type TenantConfigScalarWhereInput = {
    AND?: TenantConfigScalarWhereInput | TenantConfigScalarWhereInput[]
    OR?: TenantConfigScalarWhereInput[]
    NOT?: TenantConfigScalarWhereInput | TenantConfigScalarWhereInput[]
    tenantId?: StringFilter<"TenantConfig"> | string
    parameterId?: StringFilter<"TenantConfig"> | string
    porcInteresCobranza?: FloatFilter<"TenantConfig"> | number
    createdAt?: DateTimeFilter<"TenantConfig"> | Date | string
    updatedAt?: DateTimeFilter<"TenantConfig"> | Date | string
  }

  export type AccountsReceivableUpsertWithWhereUniqueWithoutTenantInput = {
    where: AccountsReceivableWhereUniqueInput
    update: XOR<AccountsReceivableUpdateWithoutTenantInput, AccountsReceivableUncheckedUpdateWithoutTenantInput>
    create: XOR<AccountsReceivableCreateWithoutTenantInput, AccountsReceivableUncheckedCreateWithoutTenantInput>
  }

  export type AccountsReceivableUpdateWithWhereUniqueWithoutTenantInput = {
    where: AccountsReceivableWhereUniqueInput
    data: XOR<AccountsReceivableUpdateWithoutTenantInput, AccountsReceivableUncheckedUpdateWithoutTenantInput>
  }

  export type AccountsReceivableUpdateManyWithWhereWithoutTenantInput = {
    where: AccountsReceivableScalarWhereInput
    data: XOR<AccountsReceivableUpdateManyMutationInput, AccountsReceivableUncheckedUpdateManyWithoutTenantInput>
  }

  export type AccountsReceivableScalarWhereInput = {
    AND?: AccountsReceivableScalarWhereInput | AccountsReceivableScalarWhereInput[]
    OR?: AccountsReceivableScalarWhereInput[]
    NOT?: AccountsReceivableScalarWhereInput | AccountsReceivableScalarWhereInput[]
    id?: StringFilter<"AccountsReceivable"> | string
    tenantId?: StringFilter<"AccountsReceivable"> | string
    invoiceNumber?: StringFilter<"AccountsReceivable"> | string
    issueDate?: DateTimeFilter<"AccountsReceivable"> | Date | string
    dueDate?: DateTimeFilter<"AccountsReceivable"> | Date | string
    customerName?: StringFilter<"AccountsReceivable"> | string
    customerAddress?: StringFilter<"AccountsReceivable"> | string
    customerEmail?: StringFilter<"AccountsReceivable"> | string
    customerPhone?: StringFilter<"AccountsReceivable"> | string
    invoiceAmount?: FloatFilter<"AccountsReceivable"> | number
    amountPaid?: FloatFilter<"AccountsReceivable"> | number
    outstandingBalance?: FloatFilter<"AccountsReceivable"> | number
    receivableStatus?: StringFilter<"AccountsReceivable"> | string
    collectionStatus?: StringNullableFilter<"AccountsReceivable"> | string | null
    notes?: StringNullableFilter<"AccountsReceivable"> | string | null
    debtorId?: StringNullableFilter<"AccountsReceivable"> | string | null
    createdAt?: DateTimeFilter<"AccountsReceivable"> | Date | string
    updatedAt?: DateTimeFilter<"AccountsReceivable"> | Date | string
  }

  export type DebtorUpsertWithWhereUniqueWithoutTenantInput = {
    where: DebtorWhereUniqueInput
    update: XOR<DebtorUpdateWithoutTenantInput, DebtorUncheckedUpdateWithoutTenantInput>
    create: XOR<DebtorCreateWithoutTenantInput, DebtorUncheckedCreateWithoutTenantInput>
  }

  export type DebtorUpdateWithWhereUniqueWithoutTenantInput = {
    where: DebtorWhereUniqueInput
    data: XOR<DebtorUpdateWithoutTenantInput, DebtorUncheckedUpdateWithoutTenantInput>
  }

  export type DebtorUpdateManyWithWhereWithoutTenantInput = {
    where: DebtorScalarWhereInput
    data: XOR<DebtorUpdateManyMutationInput, DebtorUncheckedUpdateManyWithoutTenantInput>
  }

  export type DebtorScalarWhereInput = {
    AND?: DebtorScalarWhereInput | DebtorScalarWhereInput[]
    OR?: DebtorScalarWhereInput[]
    NOT?: DebtorScalarWhereInput | DebtorScalarWhereInput[]
    id?: StringFilter<"Debtor"> | string
    tenantId?: StringFilter<"Debtor"> | string
    userId?: StringNullableFilter<"Debtor"> | string | null
    fullname?: StringFilter<"Debtor"> | string
    email?: StringFilter<"Debtor"> | string
    phone?: StringNullableFilter<"Debtor"> | string | null
    address?: StringNullableFilter<"Debtor"> | string | null
    identification?: StringNullableFilter<"Debtor"> | string | null
    employeeId?: StringNullableFilter<"Debtor"> | string | null
    createdAt?: DateTimeFilter<"Debtor"> | Date | string
    updatedAt?: DateTimeFilter<"Debtor"> | Date | string
  }

  export type EmployeeUpsertWithWhereUniqueWithoutTenantInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutTenantInput, EmployeeUncheckedUpdateWithoutTenantInput>
    create: XOR<EmployeeCreateWithoutTenantInput, EmployeeUncheckedCreateWithoutTenantInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutTenantInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutTenantInput, EmployeeUncheckedUpdateWithoutTenantInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutTenantInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutTenantInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    tenantId?: StringFilter<"Employee"> | string
    fullname?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    phone?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type TenantCreateWithoutClientInput = {
    id?: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    tenantConfigs?: TenantConfigCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableCreateNestedManyWithoutTenantInput
    debtors?: DebtorCreateNestedManyWithoutTenantInput
    employees?: EmployeeCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutClientInput = {
    id?: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    tenantConfigs?: TenantConfigUncheckedCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableUncheckedCreateNestedManyWithoutTenantInput
    debtors?: DebtorUncheckedCreateNestedManyWithoutTenantInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutClientInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutClientInput, TenantUncheckedCreateWithoutClientInput>
  }

  export type TenantUpsertWithoutClientInput = {
    update: XOR<TenantUpdateWithoutClientInput, TenantUncheckedUpdateWithoutClientInput>
    create: XOR<TenantCreateWithoutClientInput, TenantUncheckedCreateWithoutClientInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutClientInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutClientInput, TenantUncheckedUpdateWithoutClientInput>
  }

  export type TenantUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUncheckedUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUncheckedUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUncheckedUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    tenant: TenantCreateNestedOneWithoutUsersInput
    invitedBy?: UserCreateNestedOneWithoutInvitationsInput
    invitations?: UserCreateNestedManyWithoutInvitedByInput
    debtors?: DebtorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    tenantId: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    invitedById?: string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    invitations?: UserUncheckedCreateNestedManyWithoutInvitedByInput
    debtors?: DebtorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutTenantInput
    tenantConfigs?: TenantConfigCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableCreateNestedManyWithoutTenantInput
    debtors?: DebtorCreateNestedManyWithoutTenantInput
    employees?: EmployeeCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    subdomain: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantConfigs?: TenantConfigUncheckedCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableUncheckedCreateNestedManyWithoutTenantInput
    debtors?: DebtorUncheckedCreateNestedManyWithoutTenantInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutInvitationsInput = {
    id?: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    tenant: TenantCreateNestedOneWithoutUsersInput
    invitedBy?: UserCreateNestedOneWithoutInvitationsInput
    debtors?: DebtorCreateNestedManyWithoutUserInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutInvitationsInput = {
    id?: string
    tenantId: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    invitedById?: string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    roleId: string
    debtors?: DebtorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutInvitedByInput = {
    id?: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    tenant: TenantCreateNestedOneWithoutUsersInput
    invitations?: UserCreateNestedManyWithoutInvitedByInput
    debtors?: DebtorCreateNestedManyWithoutUserInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutInvitedByInput = {
    id?: string
    tenantId: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    roleId: string
    invitations?: UserUncheckedCreateNestedManyWithoutInvitedByInput
    debtors?: DebtorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitedByInput, UserUncheckedCreateWithoutInvitedByInput>
  }

  export type UserCreateManyInvitedByInputEnvelope = {
    data: UserCreateManyInvitedByInput | UserCreateManyInvitedByInput[]
    skipDuplicates?: boolean
  }

  export type DebtorCreateWithoutUserInput = {
    id?: string
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutDebtorsInput
    accountsReceivable?: AccountsReceivableCreateNestedManyWithoutDebtorInput
    employee?: EmployeeCreateNestedOneWithoutDebtorsInput
  }

  export type DebtorUncheckedCreateWithoutUserInput = {
    id?: string
    tenantId: string
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountsReceivable?: AccountsReceivableUncheckedCreateNestedManyWithoutDebtorInput
  }

  export type DebtorCreateOrConnectWithoutUserInput = {
    where: DebtorWhereUniqueInput
    create: XOR<DebtorCreateWithoutUserInput, DebtorUncheckedCreateWithoutUserInput>
  }

  export type DebtorCreateManyUserInputEnvelope = {
    data: DebtorCreateManyUserInput | DebtorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantConfigs?: TenantConfigUncheckedUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUncheckedUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUncheckedUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserUpsertWithoutInvitationsInput = {
    update: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    invitedBy?: UserUpdateOneWithoutInvitationsNestedInput
    debtors?: DebtorUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    debtors?: DebtorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutInvitedByInput, UserUncheckedUpdateWithoutInvitedByInput>
    create: XOR<UserCreateWithoutInvitedByInput, UserUncheckedCreateWithoutInvitedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutInvitedByInput, UserUncheckedUpdateWithoutInvitedByInput>
  }

  export type UserUpdateManyWithWhereWithoutInvitedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutInvitedByInput>
  }

  export type DebtorUpsertWithWhereUniqueWithoutUserInput = {
    where: DebtorWhereUniqueInput
    update: XOR<DebtorUpdateWithoutUserInput, DebtorUncheckedUpdateWithoutUserInput>
    create: XOR<DebtorCreateWithoutUserInput, DebtorUncheckedCreateWithoutUserInput>
  }

  export type DebtorUpdateWithWhereUniqueWithoutUserInput = {
    where: DebtorWhereUniqueInput
    data: XOR<DebtorUpdateWithoutUserInput, DebtorUncheckedUpdateWithoutUserInput>
  }

  export type DebtorUpdateManyWithWhereWithoutUserInput = {
    where: DebtorScalarWhereInput
    data: XOR<DebtorUpdateManyMutationInput, DebtorUncheckedUpdateManyWithoutUserInput>
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantConfigCreateWithoutParameterInput = {
    porcInteresCobranza?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutTenantConfigsInput
  }

  export type TenantConfigUncheckedCreateWithoutParameterInput = {
    tenantId: string
    porcInteresCobranza?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantConfigCreateOrConnectWithoutParameterInput = {
    where: TenantConfigWhereUniqueInput
    create: XOR<TenantConfigCreateWithoutParameterInput, TenantConfigUncheckedCreateWithoutParameterInput>
  }

  export type TenantConfigCreateManyParameterInputEnvelope = {
    data: TenantConfigCreateManyParameterInput | TenantConfigCreateManyParameterInput[]
    skipDuplicates?: boolean
  }

  export type TenantConfigUpsertWithWhereUniqueWithoutParameterInput = {
    where: TenantConfigWhereUniqueInput
    update: XOR<TenantConfigUpdateWithoutParameterInput, TenantConfigUncheckedUpdateWithoutParameterInput>
    create: XOR<TenantConfigCreateWithoutParameterInput, TenantConfigUncheckedCreateWithoutParameterInput>
  }

  export type TenantConfigUpdateWithWhereUniqueWithoutParameterInput = {
    where: TenantConfigWhereUniqueInput
    data: XOR<TenantConfigUpdateWithoutParameterInput, TenantConfigUncheckedUpdateWithoutParameterInput>
  }

  export type TenantConfigUpdateManyWithWhereWithoutParameterInput = {
    where: TenantConfigScalarWhereInput
    data: XOR<TenantConfigUpdateManyMutationInput, TenantConfigUncheckedUpdateManyWithoutParameterInput>
  }

  export type TenantCreateWithoutTenantConfigsInput = {
    id?: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutTenantInput
    users?: UserCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableCreateNestedManyWithoutTenantInput
    debtors?: DebtorCreateNestedManyWithoutTenantInput
    employees?: EmployeeCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutTenantConfigsInput = {
    id?: string
    subdomain: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableUncheckedCreateNestedManyWithoutTenantInput
    debtors?: DebtorUncheckedCreateNestedManyWithoutTenantInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutTenantConfigsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutTenantConfigsInput, TenantUncheckedCreateWithoutTenantConfigsInput>
  }

  export type GlobalParameterCreateWithoutTenantConfigsInput = {
    id?: string
    porcCobranza?: number
    porcAbb?: number
    diasPlazoEmpresaAanmaning?: number
    diasPlazoConsumidorAanmaning?: number
    diasPlazoEmpresaSommatie?: number
    diasPlazoConsumidorSommatie?: number
    precioEmpresaPequena?: number
    contribucionEmpresaPequenaPfc?: number
    precioEmpresaGrande?: number
    contribucionEmpresaGrandePfc?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalParameterUncheckedCreateWithoutTenantConfigsInput = {
    id?: string
    porcCobranza?: number
    porcAbb?: number
    diasPlazoEmpresaAanmaning?: number
    diasPlazoConsumidorAanmaning?: number
    diasPlazoEmpresaSommatie?: number
    diasPlazoConsumidorSommatie?: number
    precioEmpresaPequena?: number
    contribucionEmpresaPequenaPfc?: number
    precioEmpresaGrande?: number
    contribucionEmpresaGrandePfc?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GlobalParameterCreateOrConnectWithoutTenantConfigsInput = {
    where: GlobalParameterWhereUniqueInput
    create: XOR<GlobalParameterCreateWithoutTenantConfigsInput, GlobalParameterUncheckedCreateWithoutTenantConfigsInput>
  }

  export type TenantUpsertWithoutTenantConfigsInput = {
    update: XOR<TenantUpdateWithoutTenantConfigsInput, TenantUncheckedUpdateWithoutTenantConfigsInput>
    create: XOR<TenantCreateWithoutTenantConfigsInput, TenantUncheckedCreateWithoutTenantConfigsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutTenantConfigsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutTenantConfigsInput, TenantUncheckedUpdateWithoutTenantConfigsInput>
  }

  export type TenantUpdateWithoutTenantConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutTenantNestedInput
    users?: UserUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutTenantConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUncheckedUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUncheckedUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type GlobalParameterUpsertWithoutTenantConfigsInput = {
    update: XOR<GlobalParameterUpdateWithoutTenantConfigsInput, GlobalParameterUncheckedUpdateWithoutTenantConfigsInput>
    create: XOR<GlobalParameterCreateWithoutTenantConfigsInput, GlobalParameterUncheckedCreateWithoutTenantConfigsInput>
    where?: GlobalParameterWhereInput
  }

  export type GlobalParameterUpdateToOneWithWhereWithoutTenantConfigsInput = {
    where?: GlobalParameterWhereInput
    data: XOR<GlobalParameterUpdateWithoutTenantConfigsInput, GlobalParameterUncheckedUpdateWithoutTenantConfigsInput>
  }

  export type GlobalParameterUpdateWithoutTenantConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    porcCobranza?: FloatFieldUpdateOperationsInput | number
    porcAbb?: FloatFieldUpdateOperationsInput | number
    diasPlazoEmpresaAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoEmpresaSommatie?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorSommatie?: IntFieldUpdateOperationsInput | number
    precioEmpresaPequena?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaPequenaPfc?: FloatFieldUpdateOperationsInput | number
    precioEmpresaGrande?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaGrandePfc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalParameterUncheckedUpdateWithoutTenantConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    porcCobranza?: FloatFieldUpdateOperationsInput | number
    porcAbb?: FloatFieldUpdateOperationsInput | number
    diasPlazoEmpresaAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorAanmaning?: IntFieldUpdateOperationsInput | number
    diasPlazoEmpresaSommatie?: IntFieldUpdateOperationsInput | number
    diasPlazoConsumidorSommatie?: IntFieldUpdateOperationsInput | number
    precioEmpresaPequena?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaPequenaPfc?: FloatFieldUpdateOperationsInput | number
    precioEmpresaGrande?: FloatFieldUpdateOperationsInput | number
    contribucionEmpresaGrandePfc?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateWithoutAccountsReceivableInput = {
    id?: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutTenantInput
    users?: UserCreateNestedManyWithoutTenantInput
    tenantConfigs?: TenantConfigCreateNestedManyWithoutTenantInput
    debtors?: DebtorCreateNestedManyWithoutTenantInput
    employees?: EmployeeCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutAccountsReceivableInput = {
    id?: string
    subdomain: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    tenantConfigs?: TenantConfigUncheckedCreateNestedManyWithoutTenantInput
    debtors?: DebtorUncheckedCreateNestedManyWithoutTenantInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutAccountsReceivableInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutAccountsReceivableInput, TenantUncheckedCreateWithoutAccountsReceivableInput>
  }

  export type PaymentDetailCreateWithoutAccountsReceivableInput = {
    id?: string
    paymentDate: Date | string
    paymentAmount: number
    paymentMethod: string
    referenceNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailUncheckedCreateWithoutAccountsReceivableInput = {
    id?: string
    paymentDate: Date | string
    paymentAmount: number
    paymentMethod: string
    referenceNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailCreateOrConnectWithoutAccountsReceivableInput = {
    where: PaymentDetailWhereUniqueInput
    create: XOR<PaymentDetailCreateWithoutAccountsReceivableInput, PaymentDetailUncheckedCreateWithoutAccountsReceivableInput>
  }

  export type PaymentDetailCreateManyAccountsReceivableInputEnvelope = {
    data: PaymentDetailCreateManyAccountsReceivableInput | PaymentDetailCreateManyAccountsReceivableInput[]
    skipDuplicates?: boolean
  }

  export type DebtorCreateWithoutAccountsReceivableInput = {
    id?: string
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutDebtorsInput
    user?: UserCreateNestedOneWithoutDebtorsInput
    employee?: EmployeeCreateNestedOneWithoutDebtorsInput
  }

  export type DebtorUncheckedCreateWithoutAccountsReceivableInput = {
    id?: string
    tenantId: string
    userId?: string | null
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtorCreateOrConnectWithoutAccountsReceivableInput = {
    where: DebtorWhereUniqueInput
    create: XOR<DebtorCreateWithoutAccountsReceivableInput, DebtorUncheckedCreateWithoutAccountsReceivableInput>
  }

  export type TenantUpsertWithoutAccountsReceivableInput = {
    update: XOR<TenantUpdateWithoutAccountsReceivableInput, TenantUncheckedUpdateWithoutAccountsReceivableInput>
    create: XOR<TenantCreateWithoutAccountsReceivableInput, TenantUncheckedCreateWithoutAccountsReceivableInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutAccountsReceivableInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutAccountsReceivableInput, TenantUncheckedUpdateWithoutAccountsReceivableInput>
  }

  export type TenantUpdateWithoutAccountsReceivableInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutTenantNestedInput
    users?: UserUpdateManyWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutAccountsReceivableInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUncheckedUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUncheckedUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PaymentDetailUpsertWithWhereUniqueWithoutAccountsReceivableInput = {
    where: PaymentDetailWhereUniqueInput
    update: XOR<PaymentDetailUpdateWithoutAccountsReceivableInput, PaymentDetailUncheckedUpdateWithoutAccountsReceivableInput>
    create: XOR<PaymentDetailCreateWithoutAccountsReceivableInput, PaymentDetailUncheckedCreateWithoutAccountsReceivableInput>
  }

  export type PaymentDetailUpdateWithWhereUniqueWithoutAccountsReceivableInput = {
    where: PaymentDetailWhereUniqueInput
    data: XOR<PaymentDetailUpdateWithoutAccountsReceivableInput, PaymentDetailUncheckedUpdateWithoutAccountsReceivableInput>
  }

  export type PaymentDetailUpdateManyWithWhereWithoutAccountsReceivableInput = {
    where: PaymentDetailScalarWhereInput
    data: XOR<PaymentDetailUpdateManyMutationInput, PaymentDetailUncheckedUpdateManyWithoutAccountsReceivableInput>
  }

  export type PaymentDetailScalarWhereInput = {
    AND?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
    OR?: PaymentDetailScalarWhereInput[]
    NOT?: PaymentDetailScalarWhereInput | PaymentDetailScalarWhereInput[]
    id?: StringFilter<"PaymentDetail"> | string
    accountsReceivableId?: StringFilter<"PaymentDetail"> | string
    paymentDate?: DateTimeFilter<"PaymentDetail"> | Date | string
    paymentAmount?: FloatFilter<"PaymentDetail"> | number
    paymentMethod?: StringFilter<"PaymentDetail"> | string
    referenceNumber?: StringNullableFilter<"PaymentDetail"> | string | null
    notes?: StringNullableFilter<"PaymentDetail"> | string | null
    createdAt?: DateTimeFilter<"PaymentDetail"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentDetail"> | Date | string
  }

  export type DebtorUpsertWithoutAccountsReceivableInput = {
    update: XOR<DebtorUpdateWithoutAccountsReceivableInput, DebtorUncheckedUpdateWithoutAccountsReceivableInput>
    create: XOR<DebtorCreateWithoutAccountsReceivableInput, DebtorUncheckedCreateWithoutAccountsReceivableInput>
    where?: DebtorWhereInput
  }

  export type DebtorUpdateToOneWithWhereWithoutAccountsReceivableInput = {
    where?: DebtorWhereInput
    data: XOR<DebtorUpdateWithoutAccountsReceivableInput, DebtorUncheckedUpdateWithoutAccountsReceivableInput>
  }

  export type DebtorUpdateWithoutAccountsReceivableInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutDebtorsNestedInput
    user?: UserUpdateOneWithoutDebtorsNestedInput
    employee?: EmployeeUpdateOneWithoutDebtorsNestedInput
  }

  export type DebtorUncheckedUpdateWithoutAccountsReceivableInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsReceivableCreateWithoutPaymentDetailInput = {
    id?: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAccountsReceivableInput
    debtor?: DebtorCreateNestedOneWithoutAccountsReceivableInput
  }

  export type AccountsReceivableUncheckedCreateWithoutPaymentDetailInput = {
    id?: string
    tenantId: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    debtorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsReceivableCreateOrConnectWithoutPaymentDetailInput = {
    where: AccountsReceivableWhereUniqueInput
    create: XOR<AccountsReceivableCreateWithoutPaymentDetailInput, AccountsReceivableUncheckedCreateWithoutPaymentDetailInput>
  }

  export type AccountsReceivableUpsertWithoutPaymentDetailInput = {
    update: XOR<AccountsReceivableUpdateWithoutPaymentDetailInput, AccountsReceivableUncheckedUpdateWithoutPaymentDetailInput>
    create: XOR<AccountsReceivableCreateWithoutPaymentDetailInput, AccountsReceivableUncheckedCreateWithoutPaymentDetailInput>
    where?: AccountsReceivableWhereInput
  }

  export type AccountsReceivableUpdateToOneWithWhereWithoutPaymentDetailInput = {
    where?: AccountsReceivableWhereInput
    data: XOR<AccountsReceivableUpdateWithoutPaymentDetailInput, AccountsReceivableUncheckedUpdateWithoutPaymentDetailInput>
  }

  export type AccountsReceivableUpdateWithoutPaymentDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAccountsReceivableNestedInput
    debtor?: DebtorUpdateOneWithoutAccountsReceivableNestedInput
  }

  export type AccountsReceivableUncheckedUpdateWithoutPaymentDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    debtorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateWithoutDebtorsInput = {
    id?: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutTenantInput
    users?: UserCreateNestedManyWithoutTenantInput
    tenantConfigs?: TenantConfigCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableCreateNestedManyWithoutTenantInput
    employees?: EmployeeCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutDebtorsInput = {
    id?: string
    subdomain: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    tenantConfigs?: TenantConfigUncheckedCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableUncheckedCreateNestedManyWithoutTenantInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutDebtorsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutDebtorsInput, TenantUncheckedCreateWithoutDebtorsInput>
  }

  export type UserCreateWithoutDebtorsInput = {
    id?: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    tenant: TenantCreateNestedOneWithoutUsersInput
    invitedBy?: UserCreateNestedOneWithoutInvitationsInput
    invitations?: UserCreateNestedManyWithoutInvitedByInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDebtorsInput = {
    id?: string
    tenantId: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    invitedById?: string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    roleId: string
    invitations?: UserUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutDebtorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDebtorsInput, UserUncheckedCreateWithoutDebtorsInput>
  }

  export type AccountsReceivableCreateWithoutDebtorInput = {
    id?: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAccountsReceivableInput
    paymentDetail?: PaymentDetailCreateNestedManyWithoutAccountsReceivableInput
  }

  export type AccountsReceivableUncheckedCreateWithoutDebtorInput = {
    id?: string
    tenantId: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentDetail?: PaymentDetailUncheckedCreateNestedManyWithoutAccountsReceivableInput
  }

  export type AccountsReceivableCreateOrConnectWithoutDebtorInput = {
    where: AccountsReceivableWhereUniqueInput
    create: XOR<AccountsReceivableCreateWithoutDebtorInput, AccountsReceivableUncheckedCreateWithoutDebtorInput>
  }

  export type AccountsReceivableCreateManyDebtorInputEnvelope = {
    data: AccountsReceivableCreateManyDebtorInput | AccountsReceivableCreateManyDebtorInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutDebtorsInput = {
    id?: string
    fullname: string
    email: string
    phone?: string | null
    position?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutDebtorsInput = {
    id?: string
    tenantId: string
    fullname: string
    email: string
    phone?: string | null
    position?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutDebtorsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDebtorsInput, EmployeeUncheckedCreateWithoutDebtorsInput>
  }

  export type TenantUpsertWithoutDebtorsInput = {
    update: XOR<TenantUpdateWithoutDebtorsInput, TenantUncheckedUpdateWithoutDebtorsInput>
    create: XOR<TenantCreateWithoutDebtorsInput, TenantUncheckedCreateWithoutDebtorsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutDebtorsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutDebtorsInput, TenantUncheckedUpdateWithoutDebtorsInput>
  }

  export type TenantUpdateWithoutDebtorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutTenantNestedInput
    users?: UserUpdateManyWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutDebtorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUncheckedUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUncheckedUpdateManyWithoutTenantNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserUpsertWithoutDebtorsInput = {
    update: XOR<UserUpdateWithoutDebtorsInput, UserUncheckedUpdateWithoutDebtorsInput>
    create: XOR<UserCreateWithoutDebtorsInput, UserUncheckedCreateWithoutDebtorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDebtorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDebtorsInput, UserUncheckedUpdateWithoutDebtorsInput>
  }

  export type UserUpdateWithoutDebtorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    invitedBy?: UserUpdateOneWithoutInvitationsNestedInput
    invitations?: UserUpdateManyWithoutInvitedByNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDebtorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    invitations?: UserUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type AccountsReceivableUpsertWithWhereUniqueWithoutDebtorInput = {
    where: AccountsReceivableWhereUniqueInput
    update: XOR<AccountsReceivableUpdateWithoutDebtorInput, AccountsReceivableUncheckedUpdateWithoutDebtorInput>
    create: XOR<AccountsReceivableCreateWithoutDebtorInput, AccountsReceivableUncheckedCreateWithoutDebtorInput>
  }

  export type AccountsReceivableUpdateWithWhereUniqueWithoutDebtorInput = {
    where: AccountsReceivableWhereUniqueInput
    data: XOR<AccountsReceivableUpdateWithoutDebtorInput, AccountsReceivableUncheckedUpdateWithoutDebtorInput>
  }

  export type AccountsReceivableUpdateManyWithWhereWithoutDebtorInput = {
    where: AccountsReceivableScalarWhereInput
    data: XOR<AccountsReceivableUpdateManyMutationInput, AccountsReceivableUncheckedUpdateManyWithoutDebtorInput>
  }

  export type EmployeeUpsertWithoutDebtorsInput = {
    update: XOR<EmployeeUpdateWithoutDebtorsInput, EmployeeUncheckedUpdateWithoutDebtorsInput>
    create: XOR<EmployeeCreateWithoutDebtorsInput, EmployeeUncheckedCreateWithoutDebtorsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutDebtorsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutDebtorsInput, EmployeeUncheckedUpdateWithoutDebtorsInput>
  }

  export type EmployeeUpdateWithoutDebtorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDebtorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateWithoutEmployeesInput = {
    id?: string
    subdomain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutTenantInput
    users?: UserCreateNestedManyWithoutTenantInput
    tenantConfigs?: TenantConfigCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableCreateNestedManyWithoutTenantInput
    debtors?: DebtorCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutEmployeesInput = {
    id?: string
    subdomain: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    tenantConfigs?: TenantConfigUncheckedCreateNestedManyWithoutTenantInput
    accountsReceivable?: AccountsReceivableUncheckedCreateNestedManyWithoutTenantInput
    debtors?: DebtorUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutEmployeesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutEmployeesInput, TenantUncheckedCreateWithoutEmployeesInput>
  }

  export type DebtorCreateWithoutEmployeeInput = {
    id?: string
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutDebtorsInput
    user?: UserCreateNestedOneWithoutDebtorsInput
    accountsReceivable?: AccountsReceivableCreateNestedManyWithoutDebtorInput
  }

  export type DebtorUncheckedCreateWithoutEmployeeInput = {
    id?: string
    tenantId: string
    userId?: string | null
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountsReceivable?: AccountsReceivableUncheckedCreateNestedManyWithoutDebtorInput
  }

  export type DebtorCreateOrConnectWithoutEmployeeInput = {
    where: DebtorWhereUniqueInput
    create: XOR<DebtorCreateWithoutEmployeeInput, DebtorUncheckedCreateWithoutEmployeeInput>
  }

  export type DebtorCreateManyEmployeeInputEnvelope = {
    data: DebtorCreateManyEmployeeInput | DebtorCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutEmployeesInput = {
    update: XOR<TenantUpdateWithoutEmployeesInput, TenantUncheckedUpdateWithoutEmployeesInput>
    create: XOR<TenantCreateWithoutEmployeesInput, TenantUncheckedCreateWithoutEmployeesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutEmployeesInput, TenantUncheckedUpdateWithoutEmployeesInput>
  }

  export type TenantUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutTenantNestedInput
    users?: UserUpdateManyWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    subdomain?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    tenantConfigs?: TenantConfigUncheckedUpdateManyWithoutTenantNestedInput
    accountsReceivable?: AccountsReceivableUncheckedUpdateManyWithoutTenantNestedInput
    debtors?: DebtorUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type DebtorUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: DebtorWhereUniqueInput
    update: XOR<DebtorUpdateWithoutEmployeeInput, DebtorUncheckedUpdateWithoutEmployeeInput>
    create: XOR<DebtorCreateWithoutEmployeeInput, DebtorUncheckedCreateWithoutEmployeeInput>
  }

  export type DebtorUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: DebtorWhereUniqueInput
    data: XOR<DebtorUpdateWithoutEmployeeInput, DebtorUncheckedUpdateWithoutEmployeeInput>
  }

  export type DebtorUpdateManyWithWhereWithoutEmployeeInput = {
    where: DebtorScalarWhereInput
    data: XOR<DebtorUpdateManyMutationInput, DebtorUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type UserCreateManyTenantInput = {
    id?: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    invitedById?: string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    roleId: string
  }

  export type TenantConfigCreateManyTenantInput = {
    parameterId: string
    porcInteresCobranza?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsReceivableCreateManyTenantInput = {
    id?: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    debtorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtorCreateManyTenantInput = {
    id?: string
    userId?: string | null
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateManyTenantInput = {
    id?: string
    fullname: string
    email: string
    phone?: string | null
    position?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    invitedBy?: UserUpdateOneWithoutInvitationsNestedInput
    invitations?: UserUpdateManyWithoutInvitedByNestedInput
    debtors?: DebtorUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    invitations?: UserUncheckedUpdateManyWithoutInvitedByNestedInput
    debtors?: DebtorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type TenantConfigUpdateWithoutTenantInput = {
    porcInteresCobranza?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parameter?: GlobalParameterUpdateOneRequiredWithoutTenantConfigsNestedInput
  }

  export type TenantConfigUncheckedUpdateWithoutTenantInput = {
    parameterId?: StringFieldUpdateOperationsInput | string
    porcInteresCobranza?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantConfigUncheckedUpdateManyWithoutTenantInput = {
    parameterId?: StringFieldUpdateOperationsInput | string
    porcInteresCobranza?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsReceivableUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDetail?: PaymentDetailUpdateManyWithoutAccountsReceivableNestedInput
    debtor?: DebtorUpdateOneWithoutAccountsReceivableNestedInput
  }

  export type AccountsReceivableUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    debtorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDetail?: PaymentDetailUncheckedUpdateManyWithoutAccountsReceivableNestedInput
  }

  export type AccountsReceivableUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    debtorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtorUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutDebtorsNestedInput
    accountsReceivable?: AccountsReceivableUpdateManyWithoutDebtorNestedInput
    employee?: EmployeeUpdateOneWithoutDebtorsNestedInput
  }

  export type DebtorUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountsReceivable?: AccountsReceivableUncheckedUpdateManyWithoutDebtorNestedInput
  }

  export type DebtorUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debtors?: DebtorUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debtors?: DebtorUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    tenantId: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    invitedById?: string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    invitedBy?: UserUpdateOneWithoutInvitationsNestedInput
    invitations?: UserUpdateManyWithoutInvitedByNestedInput
    debtors?: DebtorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    invitations?: UserUncheckedUpdateManyWithoutInvitedByNestedInput
    debtors?: DebtorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedById?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInvitedByInput = {
    id?: string
    tenantId: string
    email: string
    fullname?: string | null
    password?: string | null
    country?: string | null
    phone?: string | null
    typeIdentification?: string | null
    identification?: string | null
    emailVerified?: boolean
    verificationToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordToken?: string | null
    joined?: Date | string | null
    lastActive?: Date | string | null
    status?: string
    invitationToken?: string | null
    roleId: string
  }

  export type DebtorCreateManyUserInput = {
    id?: string
    tenantId: string
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    invitations?: UserUpdateManyWithoutInvitedByNestedInput
    debtors?: DebtorUpdateManyWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    invitations?: UserUncheckedUpdateManyWithoutInvitedByNestedInput
    debtors?: DebtorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    typeIdentification?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    joined?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    invitationToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type DebtorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutDebtorsNestedInput
    accountsReceivable?: AccountsReceivableUpdateManyWithoutDebtorNestedInput
    employee?: EmployeeUpdateOneWithoutDebtorsNestedInput
  }

  export type DebtorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountsReceivable?: AccountsReceivableUncheckedUpdateManyWithoutDebtorNestedInput
  }

  export type DebtorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantConfigCreateManyParameterInput = {
    tenantId: string
    porcInteresCobranza?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantConfigUpdateWithoutParameterInput = {
    porcInteresCobranza?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTenantConfigsNestedInput
  }

  export type TenantConfigUncheckedUpdateWithoutParameterInput = {
    tenantId?: StringFieldUpdateOperationsInput | string
    porcInteresCobranza?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantConfigUncheckedUpdateManyWithoutParameterInput = {
    tenantId?: StringFieldUpdateOperationsInput | string
    porcInteresCobranza?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailCreateManyAccountsReceivableInput = {
    id?: string
    paymentDate: Date | string
    paymentAmount: number
    paymentMethod: string
    referenceNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailUpdateWithoutAccountsReceivableInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailUncheckedUpdateWithoutAccountsReceivableInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailUncheckedUpdateManyWithoutAccountsReceivableInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountsReceivableCreateManyDebtorInput = {
    id?: string
    tenantId: string
    invoiceNumber: string
    issueDate: Date | string
    dueDate: Date | string
    customerName: string
    customerAddress: string
    customerEmail: string
    customerPhone: string
    invoiceAmount: number
    amountPaid?: number
    outstandingBalance?: number
    receivableStatus: string
    collectionStatus?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountsReceivableUpdateWithoutDebtorInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAccountsReceivableNestedInput
    paymentDetail?: PaymentDetailUpdateManyWithoutAccountsReceivableNestedInput
  }

  export type AccountsReceivableUncheckedUpdateWithoutDebtorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDetail?: PaymentDetailUncheckedUpdateManyWithoutAccountsReceivableNestedInput
  }

  export type AccountsReceivableUncheckedUpdateManyWithoutDebtorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    invoiceAmount?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    outstandingBalance?: FloatFieldUpdateOperationsInput | number
    receivableStatus?: StringFieldUpdateOperationsInput | string
    collectionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebtorCreateManyEmployeeInput = {
    id?: string
    tenantId: string
    userId?: string | null
    fullname: string
    email: string
    phone?: string | null
    address?: string | null
    identification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebtorUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutDebtorsNestedInput
    user?: UserUpdateOneWithoutDebtorsNestedInput
    accountsReceivable?: AccountsReceivableUpdateManyWithoutDebtorNestedInput
  }

  export type DebtorUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountsReceivable?: AccountsReceivableUncheckedUpdateManyWithoutDebtorNestedInput
  }

  export type DebtorUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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