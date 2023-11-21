import { useEffect, useState } from 'react';
import { TextStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { PageTitle } from '../../components/title/Title';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import { colors } from '../../constants/colors';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  PageContainer,
  BattleSection,
  StartBattleButton,
  StartButtonStyles,
} from './BattleOfMonsters.styled';
import { Monster } from '../../models/interfaces/monster.interface';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const [ computerMonster, setComputerMonster ] = useState<Monster>()
  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const availableMonsters: any = []

  useEffect(() => {
    dispatch(fetchMonstersData());
    if(selectedMonster?.id) {
      monsters.filter(monster => {
        if(monster.id !== selectedMonster.id) {
          availableMonsters.push(monster)
        }
      })

      const machineMonster = availableMonsters[availableMonsters.length * Math.random() | 0]
     setComputerMonster(machineMonster)
    }
  }, [selectedMonster?.id]);

  const handleStartBattleClick = () => {
    // Fight!
  };

  return (
    <PageContainer>
      <PageTitle>Battle of Monsters</PageTitle>

      <MonstersList monsters={monsters} />

      <BattleSection horizontal>
        <MonsterBattleCard title={selectedMonster?.name || 'Player'} monster={selectedMonster} />
        <MonsterBattleCard title="Computer" monster={computerMonster} />
      </BattleSection>

      <StartBattleButton
        color={colors.white}
        dark={false}
        testID="start-battle-button"
        disabled={selectedMonster === null}
        labelStyle={StartButtonStyles as TextStyle}
        uppercase={false}
        onPress={handleStartBattleClick}>
        Start Battle
      </StartBattleButton>
    </PageContainer>
  );
};

export default BattleOfMonsters;
