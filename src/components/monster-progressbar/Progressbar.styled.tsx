import styled from '@emotion/native';
import { colors } from '../../constants/colors';
import { Text , View } from 'react-native'

export const ProgressBarContainer = styled(View)`
  background-color: ${colors.progressBarBackground};
  width: 235px;
  height: 7px;
  margin-bottom: 8px;
`

export const ProgressBar = styled(View)<{width: string}>`
  background-color: ${colors.progressColor};
  width: ${props => props.width}%;
  height: 7px;
`

export const ProgressBarTitle = styled(Text)`
  color:  ${colors.black};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 4px;
`
