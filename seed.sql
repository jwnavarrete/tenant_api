INSERT INTO
    role
    (id, name, description, "createdAt", "updatedAt")
VALUES
    -- Super Admin
    (
        '550e8400-e29b-41d4-a716-446655440000', -- ID (UUID generado)
        'SUPER_ADMIN', -- Nombre del rol
        'Super Admin', -- Descripción
        NOW (), -- Fecha de creación
        NOW () -- Fecha de actualización
    ),
    -- Tenant Admin
    (
        '550e8400-e29b-41d4-a716-446655440001', -- ID (UUID generado)
        'TENANT_ADMIN', -- Nombre del rol
        'Administrator', -- Descripción
        NOW (), -- Fecha de creación
        NOW () -- Fecha de actualización
    ),
    -- Collections Executive
    (
        '550e8400-e29b-41d4-a716-446655440002', -- ID (UUID generado)
        'COLLECTIONS_EXECUTIVE', -- Nombre del rol
        'Collections Ejecutive', -- Descripción
        NOW (), -- Fecha de creación
        NOW () -- Fecha de actualización
    ),
    -- Debtor
    (
        '550e8400-e29b-41d4-a716-446655440003', -- ID (UUID generado)
        'DEBTOR', -- Nombre del rol
        'Debotor', -- Descripción
        NOW (), -- Fecha de creación
        NOW () -- Fecha de actualización
    ),
    -- Bailiff
    (
        '550e8400-e29b-41d4-a716-446655440004', -- ID (UUID generado)
        'BAILIFF', -- Nombre del rol
        'Bailiff', -- Descripción
        NOW (), -- Fecha de creación
        NOW () -- Fecha de actualización
    );



INSERT INTO global_parameters (
    id,
    "porcCobranza",
    "porcAbb",
    "diasPlazoEmpresaAanmaning",
    "diasPlazoConsumidorAanmaning",
    "diasPlazoEmpresaSommatie",
    "diasPlazoConsumidorSommatie",
    "precioEmpresaPequena",
    "contribucionEmpresaPequenaPfc",
    "precioEmpresaGrande",
    "contribucionEmpresaGrandePfc",
    "updatedAt"
) VALUES (
    '67f55fa0-8598-4ec9-9d5e-2fe980d82e6d',
    50,
    20,
    30,
    15,
    45,
    20,
    1000,
    200,
    5000,
    1000,
    NOW()
);

INSERT INTO client (
    id, 
    type, 
    name, 
    kvk, 
    "contactEmail", 
    "numberOfEmployees", 
    country, 
    address, 
    "termsAccepted", 
    "createdAt", 
    "updatedAt"
) VALUES (
    '43a14b9c-3618-4dc9-8d5c-dcf6f7957756', 
    'eenmanszaak', 
    'admin', 
    '1234', 
    'info@incasso.com', 
    '1-5', 
    'aruba', 
    'Bonaire', 
    true, 
    '2025-04-03 01:13:51.914', 
    '2025-04-03 01:13:51.914'
);


INSERT INTO tenant (id, subdomain, "clientId", "createdAt", "updatedAt") 
VALUES ('20efd370-63c5-4455-b39a-20cfc1b1e9bb', 'admin', '43a14b9c-3618-4dc9-8d5c-dcf6f7957756', '2025-04-03 01:13:51.934', '2025-04-03 01:13:51.934');


INSERT INTO users (
    id, 
    "tenantId", 
    email, 
    fullname, 
    password, 
    country, 
    phone, 
    "typeIdentification", 
    identification, 
    "emailVerified", 
    "verificationToken", 
    "createdAt", 
    "updatedAt", 
    "resetPasswordToken", 
    joined, 
    "invitedById", 
    "lastActive", 
    status, 
    "invitationToken", 
    "roleId"
) VALUES (
    'be3df06f-d129-4e11-aa15-94b798073f92', 
    '20efd370-63c5-4455-b39a-20cfc1b1e9bb', 
    'jwnavarretez@gmail.com', 
    'John Navarrete', 
    '$2a$10$KhA5a4gz0vyUjtXgDJeLgegvwB1z5rM0SENtnLZx3ubpi3CeiDMCG', 
    'aruba', 
    '1234', 
    'sedula', 
    '0940528110', 
    true, 
    NULL, 
    '2025-04-03 01:13:52.019', 
    '2025-04-03 01:15:16.514', 
    NULL, 
    '2025-04-03 01:15:16.512', 
    NULL, 
    NULL, 
    'active', 
    NULL, 
    '550e8400-e29b-41d4-a716-446655440000'
);


INSERT INTO tenant_config(
	"tenantId", "parameterId", "porcInteresCobranza", "createdAt", "updatedAt")
VALUES ('20efd370-63c5-4455-b39a-20cfc1b1e9bb', '67f55fa0-8598-4ec9-9d5e-2fe980d82e6d', 0, '2025-04-03 01:13:51.914', '2025-04-03 01:13:51.914');