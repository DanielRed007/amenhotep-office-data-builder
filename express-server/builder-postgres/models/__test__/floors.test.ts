// src/models/Building.test.ts
import { Sequelize } from 'sequelize-typescript';
import Floor from '../floor.model';

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

    sequelize.addModels([Floor]);
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should create a floor', async () => {
    const floor = await Floor.create({
        "id": "3489",
        "building_id": "32",
        "floor_number": 37,
        "floor_section": "Section 21",
        "nickname": "Floor 21 F",
        "desks": 1,
        "meeting_rooms": 2
    });

    expect(floor).toBeDefined();
    expect(floor?.floor_number).toBe(37);
    expect(floor?.desks).toBe(1);
  });

  it('should retrieve a floor by id', async () => {
    const floor = await Floor.findByPk("3489");

    expect(floor).toBeDefined();
    expect(floor?.nickname).toBe("Floor 21 F");
  });

  it('should retrieve a list of floors', async () => {
    await Floor.bulkCreate([
        {
            "id": "38",
            "building_id": "38",
            "floor_number": 21,
            "floor_section": "Section F",
            "nickname": "Floor 21F",
            "desks": 2,
            "meeting_rooms": 1
        },
        {
            "id": "144",
            "building_id": "144",
            "floor_number": 72,
            "floor_section": "Section A",
            "nickname": "Floor 72A",
            "desks": 20,
            "meeting_rooms": 2
        }
    ]);

    const floors = await Floor.findAll();

    expect(floors).toBeDefined();
    expect(floors).toHaveLength(3);
    expect(floors[1]?.nickname).toBe("Floor 21F");
    expect(floors[2]?.nickname).toBe("Floor 72A");
  });

  it('should update a floor by id', async () => {
    const id = "144";
    const building = await Floor.findByPk(id);

    expect(building).toBeDefined();
    expect(building?.floor_number).toBe(72);

    const updated = await Floor.update(
        { nickname: "Earthworm Jim" },
        { where: { id: id } }
    );

    expect(updated).toHaveLength(1);

    const updatedFloor = await Floor.findByPk(id);
    expect(updatedFloor?.nickname).toBe("Earthworm Jim");
    expect(updatedFloor?.meeting_rooms).toBe(2);
  });

  it('should delete a building', async () => {
    const id = "38";
    
    const deleted = await Floor.destroy({ where: { id: id } });

    expect(deleted).toBe(1);
  });

});
