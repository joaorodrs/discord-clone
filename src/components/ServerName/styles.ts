import styled from 'styled-components'
import { ExpandMore } from 'styled-icons/material'

export const Container = styled.div`
    grid-area: SN;
    background-color: var(--secondary);
    display: flex;
    user-select: none;
    justify-content: space-between;
    align-items: center;
    padding: 0 11px 0 16px;
    box-shadow: rgba(0,0,0,0.1) 0 2px 0 0;
    z-index: 2;
`

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
`

export const ExpandIcon = styled(ExpandMore)`
    width: 24px;
    height: 24px;
    color: #FFF;
    cursor: pointer;
`