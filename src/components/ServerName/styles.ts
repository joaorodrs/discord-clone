import styled from 'styled-components'
import { ExpandMore } from 'styled-icons/material'

export const Container = styled.div`
    grid-area: SN;
    background-color: var(--secondary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11px 0 16px;
    box-shadow: 0 0 2px 0 2px;
    z-index: 2;
`

export const Title = styled.h1``

export const ExpandIcon = styled(ExpandMore)`
    width: 28px;
    height: 28px;
    cursor: pointer;
`