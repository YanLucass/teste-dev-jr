import { DataSource } from "typeorm";
export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "postgres",
        host: process.env.DATABASE_HOST,
        port: 5433,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: ["dist/**/*.entity.js"],
        synchronize: true,
        logging: true,
        // ssl: false,
        // extra: {
        //   ssl: {
        //     rejectUnauthorized: false,
        //   },
        // },
      });

      return dataSource.initialize();
    },
  },
];
