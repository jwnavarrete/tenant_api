## Documentación de la API

Tenant-API es una API RESTful desarrollada utilizando Node.js, Express, Typescript, Prisma y una base de datos PostgreSQL. 

La API maneja la seguridad de las rutas y la autenticación de usuarios utilizando JSON Web Tokens (JWT). Se validan varios aspectos de seguridad, incluyendo la creación de usuarios, restablecimiento de contraseñas, y la invitación a más usuarios. Todo esto es necesario para implementar un sistema multi-tenant robusto y seguro, asegurando que cada inquilino tenga acceso aislado y seguro a sus propios datos y funcionalidades.

Este repositorio contiene el código fuente y los Endpoints de las rutas.
## Tabla de Contenidos

- [Visión General](#1-visión-general)
- [Inicio Rápido](#2-inicio-rápido)
    - [Instalando Dependencias](#21-instalando-dependencias)
    - [Variables de Entorno](#22-variables-de-entorno)
    - [Docker Postgres](#23-Levantar-Docker-de-Postgres)
    - [Migraciones](#24-migraciones)
    - [Ejecutando la API](#25-ejecutando-la-api)
    
---

## 1. Visión General
Visión general del proyecto, un poco de las tecnologías usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)

URL base de la aplicación: http://localhost:8000

---

## 2. Inicio rápido
[ Volver al inicio ](#documentación-de-la-api)

### 2.1. Instalando dependencias

Clona el proyecto en tu máquina e instala las dependencias con el comando:

```
git clone https://github.com/jwnavarrete/tenant_api.git
```

Utilizando npm

```
npm install
```

### 2.2. Variables de Entorno
A continuación, crea un archivo **.env**, copiando el formato del archivo **.env.example**:

```
cp .env.example .env
```

Configura tus variables de entorno con tus credenciales de Postgres y una nueva base de datos de tu elección.

### 2.3. Levantar Docker de Postgres
Ejecutar el comando **make postgres-up**, configurado en el archivo **Makefile**:

```
make postgres-up
```

Si no tienes instalado make, debes instalarlo segun tu sistema operativo.


### 2.4. Migraciones

Ejecuta las migraciones con el comando:

```
pnpm prisma migrate dev --name init
```

### 2.5. Ejecutando la API

Para ejecutar la API localmente usa el comando:

```
pnpm dev
```

## Autor

- [@jwnavarrete](https://github.com/jwnavarrete)
