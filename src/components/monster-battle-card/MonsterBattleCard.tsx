import React from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import * as S from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <S.BattleMonsterCard>
      <S.BattleMosterImage source={{uri: monster?.imageUrl}}  />
      <S.BattleMonsterTitle>{title}</S.BattleMonsterTitle>
      <S.BattleMonsterSeparator />
    </S.BattleMonsterCard>
  );
};

export { MonsterBattleCard };
