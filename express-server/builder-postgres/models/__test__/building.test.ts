// src/models/Building.test.ts
import { Sequelize } from 'sequelize-typescript';
import Building from '../building.model';

describe('Building Model', () => {
  let sequelize: Sequelize;

  beforeAll(async () => {
    sequelize = new Sequelize({
      dialect: 'postgres',
      database: 'buildings',
      username: 'thfgolden',
      password: 'thfgolden',
      logging: false,
    });

    sequelize.addModels([Building]);
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should create a building', async () => {
    const building = await Building.create({
        "id": "3434",
        "name": "Test Building",
        "nickname": "Second Plaza",
        "floors": [
            "Floor 1",
            "Floor 2",
            "Floor 3"
        ],
        "status": "Inactive",
        "type": "Retail",
        "address": "456 Elm Street",
        "city": "Smalltown",
        "country": "United States"
    });

    expect(building.id).toBeDefined();
    expect(building.name).toBe('Test Building');
  });

  it('should retrieve a building by id', async () => {
    const building = await Building.findByPk("3434");

    expect(building).toBeDefined();
    expect(building?.name).toBe('Test Building');
  });

});
