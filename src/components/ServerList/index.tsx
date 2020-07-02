import React from 'react';

import ServerButton from '../ServerButton'

import {
    Container,
    Separator
} from './styles'

const ServerList: React.FC = () => {
  return (
    <Container>
        <ServerButton isHome />
        <Separator />

        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton hasNotifications hasMention={3} />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton hasNotifications />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications hasMention={2} />
    </Container>
  )
}

export default ServerList