import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<mongoose.Connection> => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect(
        'mongodb://admin:01070564@ds251985.mlab.com:51985/resources',
        {
          useMongoClient: true
        }
      );
    }
  }
];
