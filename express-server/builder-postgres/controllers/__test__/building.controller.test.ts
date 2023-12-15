import request from 'supertest';
import { Sequelize } from 'sequelize-typescript';
import{ app } from '../../server';
import Building from '../../models/building.model';
import buildingRepository from '../../repositories/building.repository';

const buildingsListMockData = [
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
    },
    {
        "id": "5",
        "name": "Solaris Research Center",
        "nickname": "Clarke Plaza",
        "floors": [
            "Floor 1",
            "Floor 2",
            "Floor 3"
        ],
        "status": "Private",
        "type": "Research",
        "address": "1977 Karellen Street",
        "city": "Euriale",
        "country": "Japeto"
    }
]

describe('Building Model', () => {
  
    beforeAll(async () => {
    });
  
    afterAll(async () => {
    });
  
    it('should create a building', async () => {  
    });
  
    it('should retrieve a building by id', async () => {
    });
  
    it('should retrieve a list of buildings', async () => {
    });
  
    it('should update a building by id', async () => {
    });
  
    it('should delete a building', async () => {
    });
  
  });
