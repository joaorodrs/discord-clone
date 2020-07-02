import styled from 'styled-components'

import { Props } from '.'

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: ${props => props.isHome ? '16px' : '50%'};
    margin-bottom: 8px;
    background-color: ${(props) =>
        props.isHome ? '#7289DA' : 'var(--primary)'};

    position: relative;
    cursor: pointer;

    > img {
        width: 35px;
        height: 35px;
    }

    &::before {
        width: 9px;
        height: 9px;
        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);
        background-color: #FFF;
        border-radius: 50%;
        content: '';
        display: ${props => props.hasNotifications ? 'inline' : 'none'}
    }

    &::after {
        background-color: var(--notification);
        width: auto;
        height: 16px;
        padding: 0 4px;
        position: absolute;
        bottom: -4px;
        right: -4px;
        border-radius: 12px;
        border: 4px solid var(--quaternary);
        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: #FFF;

        content: '${props => props.hasMention && props.hasMention}';

        display: ${props => props.hasMention && props.hasMention > 0 ? 'inline' : 'none'}
    }

    transition: border-radius .2s, background-color .2s, box-shadow .5s;

    &.active,
    &:hover {
        border-radius: 16px;
        background-color: ${(props) =>
            props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
        box-shadow: ${props => props.isHome && '0 0 20px #555'};
    }
`