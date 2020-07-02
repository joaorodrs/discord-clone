import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>

        <ChannelMessage
          author="Jefferson J."
          date="28/08/2020"
          hasMention
          content={
            <>
              Hello <Mention>@everyone</Mention>!
            </>
          }
        />
        <ChannelMessage
          author="Pedro Schmitz"
          date="28/08/2020"
          content="Hi!"
        />
        <ChannelMessage
          author="João Paulo"
          date="28/08/2020"
          content="Hello!"
        />
        <ChannelMessage
          author="João Paulo"
          date="28/08/2020"
          content={
            <>
              Hey <Mention>@everyone</Mention>, today is my birthday!
            </>
          }
        />
        <ChannelMessage
          author="Michel Deschamps"
          date="28/08/2020"
          content="Oh my holy react!"
        />
        <ChannelMessage
          author="Discord"
          date="28/08/2020"
          isBot
          hasMention
          content={
            <>
              Congrats, <Mention>@JoãoPaulo</Mention>
            </>
          }
        />
        <ChannelMessage
          author="Pedro Schmitz"
          date="28/08/2020"
          hasMention
          content={
            <>
              Happy birthday <Mention>@JoãoPaulo</Mention>
            </>
          }
        />
        <ChannelMessage
          author="Diego Teló"
          date="28/08/2020"
          hasMention
          content={
            <>
              Congratss <Mention>@JoãoPaulo</Mention>!!!
            </>
          }
        />
        <ChannelMessage
          author="Diego Deschamps"
          date="28/08/2020"
          content="Who am I"
        />
        <ChannelMessage
          author="João Paulo"
          date="28/08/2020"
          content="h"
        />
        <ChannelMessage
          author="João Paulo"
          date="28/08/2020"
          hasMention
          content={
            <>
              <Mention>@Someone</Mention>, say hello
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData