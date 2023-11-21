import React from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import * as S from './MonsterBattleCard.styled';
import ProgressBar from '../monster-progressbar/Progressbar';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <S.BattleMonsterCard>
      {monster?.id ? <S.BattleMosterImage source={{uri: monster?.imageUrl}}  />: null}
      <S.BattleMonsterTitle>{title}</S.BattleMonsterTitle>
      {
        monster?.id ? <>
      <S.BattleMonsterSeparator />
      <ProgressBar title='HP' width={String(monster?.hp)} />
      <ProgressBar title='Attack' width={String(monster?.attack)} />
      <ProgressBar title='Defense' width={String(monster?.defense)} />
      <ProgressBar title='Speed' width={String(monster?.speed)} />
      </> : null
      }
    </S.BattleMonsterCard>
  );
};

export { MonsterBattleCard };
