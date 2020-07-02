import React from 'react';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    hasMention?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    hasMention
}) => {
  return (
      <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        hasMention={hasMention}
        className={selected ? 'active' : ''}
      >
          {isHome && <img src={require('../../assets/discord-logo-white.png')} alt="Rocketseat" />}
      </Button>
  )
}

export default ServerButton