import styled from 'styled-components'
import { Hashtag } from 'styled-icons/heroicons-outline'

export const Container = styled.div`
    grid-area: CI;
    user-select: none;
    display: flex;
    align-items: center;
    padding: 0 17px;
    background-color: var(--primary);
    box-shadow: rgba(0,0,0,0.2) 0 1px 0 0;
    z-index: 2;
`

export const HashtagIcon = styled(Hashtag)`
    width: 24px;
    height: 24px;
    color: var(--symbol);
`

export const Title = styled.h1`
    margin-left: 9px;
    font-size: 16px;
    font-weight: 16x;
    font-weight: bold;
    color: #FFF;
`

export const Separator = styled.div`
    height: 24px;
    width: 1px;
    background-color: #FFF;
    opacity: 0.2;
    margin: 0 13px;
`

export const Description = styled.span`
    font-size: 15px;
    color: var(--gray);
`
