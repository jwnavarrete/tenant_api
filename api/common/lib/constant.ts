const CLIENT_STATUS = {
  PENDING: "pending",
  ACTIVE: "active",
  INACTIVE: "inactive",
};

const TOKEN_TYPES = {
  INVITE_USER: "invite_user",
  RESET_PASSWORD: "reset_password",
  VERIFY_EMAIL: "verify_email",
};

const ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  TENANT_ADMIN: "TENANT_ADMIN",
  COLLECTIONS_EXECUTIVE: "COLLECTIONS_EXECUTIVE",
  DEBTOR: "DEBTOR",
  BAILIFF: "BAILIFF",
};

export { CLIENT_STATUS, TOKEN_TYPES, ROLES };
