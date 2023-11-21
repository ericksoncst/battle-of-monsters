export interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface MonsterBattleResponse {
  winner: {
    id: string;
    name: string;
    attack: number;
    defense: number;
    speed: number;
    hp: number;
    type: string;
    imageUrl: string
  },
  tie: boolean
}


export interface MonsterBattleRequest {
  monster1Id: string | undefined ;
  monster2Id: string | undefined ;
}