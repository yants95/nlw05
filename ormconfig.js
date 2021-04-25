module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  migrations: ['./src/database/migrations/**.ts'],
  entities: ['./src/entities/**.ts'],
  cli: {
    migrationsDir: './src/database/migrations'
  }
}
