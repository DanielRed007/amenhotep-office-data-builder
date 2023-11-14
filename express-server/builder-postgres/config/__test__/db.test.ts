import { Sequelize } from 'sequelize-typescript';

describe('Sequelize Connection', () => {
  it('should establish a connection to the database', async () => {
    let connectionResult = "";

    const sequelize = new Sequelize({
      dialect: 'postgres',
      database: 'buildings',
      username: 'thfgolden',
      password: 'thfgolden',
      logging: false,
    });

    try {
      await sequelize.authenticate();
      connectionResult = 'Connection has been established successfully.';
    } catch (error) {
      connectionResult = 'Unable to connect to the database';
      throw error;
    } finally {
        expect(connectionResult).toBe('Connection has been established successfully.');
      await sequelize.close();
    }
  });

  it('should throw an error, when the connection to the database is invalid', async () => {

    try {
        new Sequelize({
            dialect: 'postgres',
            database: 'buildings',
            username: 'thfgoldens',
            password: 'thfgolden',
            logging: false,
        });

    } catch (error) {
        expect(error).toBeDefined();
        throw error;
    }
  });
});