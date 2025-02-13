INSERT INTO
    public.role
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