import React from 'react'
import * as S from './Progressbar.styled'

type ProgressProps = {
    width: string;
    title: string
}

function ProgressBar({ width, title }: ProgressProps) {
    return (
                <React.Fragment>
                    <S.ProgressBarTitle>{title}</S.ProgressBarTitle>
                    <S.ProgressBarContainer >
                        <S.ProgressBar width={width} />
                    </S.ProgressBarContainer>
                </React.Fragment>
            )
}

export default ProgressBar