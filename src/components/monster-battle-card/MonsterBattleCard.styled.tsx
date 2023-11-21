import styled from '@emotion/native';
import { Card, Title } from 'react-native-paper';
import { colors } from '../../constants/colors';
import { Image , View } from 'react-native'

export const BattleMonsterCard = styled(Card)`
  padding: 10px 10px 10px 10px;
  width: 255px;
  height: 355px;
  background: ${colors.white};
  border-radius: 7px;
  border: 0.5px solid #dddddd;
  flex-direction: column;
  display: flex;
  margin-right: 16px;
  margin-bottom: 16px;
  elevation: 5;
`;


export const BattleMonsterTitle = styled(Title)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: ${colors.black};
`;

export const BattleMosterImage = styled(Image)`
  width: 100%;
  height: 148px;
  border-radius: 7px;
  margin-bottom: 13px
` 

export const BattleMonsterSeparator = styled(View)`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.10);
  margin-bottom: 8px;
`
