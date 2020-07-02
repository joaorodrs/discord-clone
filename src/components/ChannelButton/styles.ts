import styled from 'styled-components'
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;
    background-color: transparent;
    transition: background-color 0.2s;

    > div {
        display: flex;
        align-items: center;
    }

    > div span {
        margin-left: 5px;
        color: var(--senary);
    }

    div:nth-of-type(2) {
        display: none;
        justify-content: space-between;
        width: 40px;
    }

    &.active, &:hover {
        background-color: var(--quinary);

        div:nth-of-type(2) {
            display: flex;
        }

        > div span {
            transition: color 0.8s;
            color: #FFF;
        }
    }
`

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
`

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;
    color: var(--symbol);
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
        color: #FFF;
    }
`

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;
    color: var(--symbol);
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
        color: #FFF;
    }
`