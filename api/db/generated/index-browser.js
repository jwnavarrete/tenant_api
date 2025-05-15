
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.1
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.1",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TenantScalarFieldEnum = {
  id: 'id',
  subdomain: 'subdomain',
  clientId: 'clientId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientScalarFieldEnum = {
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

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.GlobalParameterScalarFieldEnum = {
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

exports.Prisma.TenantConfigScalarFieldEnum = {
  tenantId: 'tenantId',
  parameterId: 'parameterId',
  porcInteresCobranza: 'porcInteresCobranza',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentAgreementScalarFieldEnum = {
  id: 'id',
  accountsReceivableId: 'accountsReceivableId',
  initialPayment: 'initialPayment',
  remainingBalance: 'remainingBalance',
  totalAmount: 'totalAmount',
  numberOfInstallments: 'numberOfInstallments',
  paymentStatus: 'paymentStatus',
  lastPaymentDate: 'lastPaymentDate',
  initialPaymentStatus: 'initialPaymentStatus',
  totalPaid: 'totalPaid',
  isFullyPaid: 'isFullyPaid',
  accumulatedInterest: 'accumulatedInterest',
  initialPaymentDeadline: 'initialPaymentDeadline',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  previousInterestAmount: 'previousInterestAmount'
};

exports.Prisma.InstallmentScalarFieldEnum = {
  id: 'id',
  paymentAgreementId: 'paymentAgreementId',
  installmentNumber: 'installmentNumber',
  dueDate: 'dueDate',
  originalAmount: 'originalAmount',
  amountPaid: 'amountPaid',
  remainingAmount: 'remainingAmount',
  paid: 'paid',
  paidAt: 'paidAt',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccountsReceivableScalarFieldEnum = {
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
  remainingBalance: 'remainingBalance',
  totalDueToday: 'totalDueToday',
  receivableStatus: 'receivableStatus',
  collectionStatus: 'collectionStatus',
  clientCollectionPercentage: 'clientCollectionPercentage',
  clientCollectionAmount: 'clientCollectionAmount',
  clientAbbPercentage: 'clientAbbPercentage',
  clientAbbAmount: 'clientAbbAmount',
  adminCollectionPercentage: 'adminCollectionPercentage',
  adminCollectionAmount: 'adminCollectionAmount',
  adminAbbPercentage: 'adminAbbPercentage',
  adminAbbAmount: 'adminAbbAmount',
  notifiedAt: 'notifiedAt',
  previousInterestAmount: 'previousInterestAmount',
  interestStartDate: 'interestStartDate',
  interestFrozenAt: 'interestFrozenAt',
  interestFrozenAmount: 'interestFrozenAmount',
  interestFrozenPercentage: 'interestFrozenPercentage',
  lastPaymentDate: 'lastPaymentDate',
  debtorId: 'debtorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hasPaymentAgreement: 'hasPaymentAgreement',
  paymentAgreementId: 'paymentAgreementId',
  notes: 'notes'
};

exports.Prisma.PaymentDetailScalarFieldEnum = {
  id: 'id',
  accountsReceivableId: 'accountsReceivableId',
  paymentDate: 'paymentDate',
  paymentAmount: 'paymentAmount',
  paymentMethod: 'paymentMethod',
  referenceNumber: 'referenceNumber',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  paymentAgreementId: 'paymentAgreementId'
};

exports.Prisma.PaymentApplicationScalarFieldEnum = {
  id: 'id',
  paymentDetailId: 'paymentDetailId',
  accountsReceivableId: 'accountsReceivableId',
  amountApplied: 'amountApplied',
  appliedTo: 'appliedTo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DebtorScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  userId: 'userId',
  fullname: 'fullname',
  email: 'email',
  phone: 'phone',
  address: 'address',
  personType: 'personType',
  identificationType: 'identificationType',
  identification: 'identification',
  employeeId: 'employeeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  id: 'id',
  tenantId: 'tenantId',
  fullname: 'fullname',
  email: 'email',
  phone: 'phone',
  position: 'position',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.PaymentApplicationType = exports.$Enums.PaymentApplicationType = {
  CAPITAL: 'CAPITAL',
  INTEREST: 'INTEREST',
  TAX: 'TAX',
  CLIENT_COLLECTION_FEE: 'CLIENT_COLLECTION_FEE',
  CLIENT_ABB_FEE: 'CLIENT_ABB_FEE',
  ADMIN_COLLECTION_FEE: 'ADMIN_COLLECTION_FEE',
  ADMIN_ABB_FEE: 'ADMIN_ABB_FEE'
};

exports.Prisma.ModelName = {
  Tenant: 'Tenant',
  Client: 'Client',
  Role: 'Role',
  User: 'User',
  GlobalParameter: 'GlobalParameter',
  TenantConfig: 'TenantConfig',
  PaymentAgreement: 'PaymentAgreement',
  Installment: 'Installment',
  AccountsReceivable: 'AccountsReceivable',
  PaymentDetail: 'PaymentDetail',
  PaymentApplication: 'PaymentApplication',
  Debtor: 'Debtor',
  Employee: 'Employee'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
