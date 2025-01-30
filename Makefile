
postgres-up:
	docker-compose up -d postgres

migrate:
	npx prisma migrate dev --name init

generate:
	npx prisma generate

studio:
	npx prisma studio

migrate-reset:
	npx prisma migrate reset --force

dev:
	pnpm dev