import styled from '@emotion/native';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../constants/colors';

export const PageContainer = styled(View)`
  display: flex;
  flex-direction: column;
  max-width: 820px;
`;

export const BattleSection = styled(ScrollView)`
  display: flex;
`;

interface ButtonProps {
  disabled: boolean;
}

export const StartBattleButton = styled(Button)`
  background-color: ${({ disabled }: ButtonProps) =>
    disabled ? colors.lightGreen : colors.darkGreen};
  border-radius: 5px;
  height: 56px;
  display: flex;
  justify-content: center;
`;
