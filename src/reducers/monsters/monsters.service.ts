import API_URL from '../../constants/env';
import { Monster, MonsterBattleRequest, MonsterBattleResponse } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then(response => response.json());



  const postBattle = async (data: MonsterBattleRequest): Promise<MonsterBattleResponse> => {

    const response = await fetch(`${API_URL}/battle`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.json())
    return response;
  } 

export const MonsterService = {
  getAll,
  postBattle
};
