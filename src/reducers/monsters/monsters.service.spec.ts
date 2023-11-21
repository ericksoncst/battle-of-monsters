import { MonsterService } from './monsters.service';
import monstersData from '../../../server/monsters.json';

describe('Monsters Service', () => {
  it('should return the monsters list empty', async () => {
    jest.spyOn(MonsterService, 'getAll').mockResolvedValue([]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([]);
  });

  it('should return the monsters list with data', async () => {
    jest
      .spyOn(MonsterService, 'getAll')
      .mockResolvedValue([monstersData.monsters[0], monstersData.monsters[1]]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([
      monstersData.monsters[0],
      monstersData.monsters[1],
    ]);
  });

  const mockRequest =  { monster1Id: 'monster-1', monster2Id: 'monster-2' }


  it('should return the winner response', async () => {
    jest
      .spyOn(MonsterService, 'postBattle')
      .mockResolvedValue({ "winner": { "id": "monster-1", "name": "Monster 1", "attack": 60, "defense": 40, "hp": 10, "speed": 80, "type": "Type", "imageUrl": "image url" }, "tie": false });
    const response = await MonsterService.postBattle(mockRequest);
    expect(response).toEqual({ "winner": { "id": "monster-1", "name": "Monster 1", "attack": 60, "defense": 40, "hp": 10, "speed": 80, "type": "Type", "imageUrl": "image url" }, "tie": false });
  });
});
