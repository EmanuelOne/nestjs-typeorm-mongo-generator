import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mongodb',
        url: 'mongodb+srv://emanuelone:85740014@cluster0.ogcs0.gcp.mongodb.net/bookmark-api?authSource=admin&replicaSet=atlas-ytp1to-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
  },
];
