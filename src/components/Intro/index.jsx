import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import phone from '../../imgs/phone.png'
import {
  Coluna,
  Titulo,
  Texto,
  ButtonWrapper,
  ButtonApple,
  ButtonGoogle,
  Icone,
  Imagem,
  TextColumn,
  ImageColumn,
  StyledContainer
} from './style'

import { Section } from '../Section'
import { PATHS } from '../../constants/paths'

export const Intro = () => {
  return (
    <Section id={PATHS.home} pt={200}>
      <StyledContainer>
        <TextColumn>
          <Titulo>A Powerful App For Your Business.</Titulo>
          <Texto>
            From open source to pro services, Piqes helps you to build, deploy,
            test, and monitor apps.
          </Texto>
          <ButtonWrapper>
            <ButtonApple href="#">
              <Icone icon={faApple} />
              <span>App Store</span>
            </ButtonApple>
            <ButtonGoogle href="#">
              <Icone icon={faGooglePlay} />
              <span>Google Play</span>
            </ButtonGoogle>
          </ButtonWrapper>
        </TextColumn>
        <ImageColumn>
          <Imagem src={phone}></Imagem>
        </ImageColumn>
      </StyledContainer>
    </Section>
  )
}
