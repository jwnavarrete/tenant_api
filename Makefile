
postgres-up:
	docker-compose up -d postgres

migrate:
	pnpm prisma migrate dev --name init

generate:
	pnpm prisma generate

migrate-deploy:
	pnpm prisma migrate deploy

studio:
	pnpm prisma studio

migrate-reset:
	pnpm prisma migrate reset --force

dev:
	pnpm dev