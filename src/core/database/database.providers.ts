import { Sequelize } from 'sequelize-typescript';
import { Tasks } from 'src/model/task.entity';
import { Users } from 'src/model/users.entity';
import { databaseConfig } from './database.config';

export const databaseProviders = [{
    provide: 'SEQUELIZE',
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case 'development':
           config = databaseConfig.development;
           break;
        case 'test':
           config = databaseConfig.test;
           break;
        case 'production':
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([Users, Tasks]);
        await sequelize.sync();
        return sequelize;
    },
}];