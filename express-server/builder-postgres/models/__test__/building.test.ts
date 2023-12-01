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

  it('should retrieve a list of buildings', async () => {
    await Building.bulkCreate([
      {
          "id": "5",
          "name": "Solaris Research Center",
          "nickname": "Clarke Plaza",
          "floors": [
              "Floor 1",
              "Floor 2",
              "Floor 3"
          ],
          "status": "Active",
          "type": "Research",
          "address": "1977 Karellen Street",
          "city": "Euriale",
          "country": "Japeto"
      },
      {
          "id": "7",
          "name": "Isis Underground Headquarters",
          "nickname": "Asimov Plaza",
          "floors": [
              "Floor 1",
              "Floor 2",
              "Floor 3"
          ],
          "status": "Active",
          "type": "Administrative",
          "address": "456 Elm Street",
          "city": "Smalltown",
          "country": "Ganimedes"
      }
    ]);

    const buildings = await Building.findAll();

    expect(buildings).toBeDefined();
    expect(buildings).toHaveLength(3);
    expect(buildings[1].name).toBe("Solaris Research Center");
    expect(buildings[2].name).toBe("Isis Underground Headquarters");
  });

  it('should update a building by id', async () => {
    const id = "5";
    const building = await Building.findByPk(id);

    expect(building).toBeDefined();
    expect(building?.address).toBe("1977 Karellen Street");

    const updated = await Building.update(
        { status: "Private" },
        { where: { id: id } }
    );

    expect(updated).toHaveLength(1);

    const updatedBuilding = await Building.findByPk(id);
    expect(updatedBuilding?.status).toBe("Private");
    expect(updatedBuilding?.name).toBe("Solaris Research Center");
  });

  it('should delete a building', async () => {
    const id = "3434";
    
    const deleted = await Building.destroy({ where: { id: id } });

    expect(deleted).toBe(1);
  });

});
