import {
  BaseCard,
  Titulo,
  Texto,
  Valor,
  Link,
  LinkWrapper,
  Subtitulo,
  Item,
  ListaItem,
  Icone,
  CardContainer,
  TextoValor
} from './style'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const PriceCard = ({
  titulo,
  texto,
  valor,
  textoBotao,
  link,
  beneficios
}) => {
  return (
    <BaseCard>
      <CardContainer>
        <Titulo>{titulo}</Titulo>
        <Texto>{texto}</Texto>
        <Valor>{`$${valor}`}</Valor>
        <TextoValor>/mo</TextoValor>
        <LinkWrapper>
          <Link href={link}>{textoBotao}</Link>
        </LinkWrapper>
      </CardContainer>
      <CardContainer>
        <Subtitulo>WHAT'S INCLUDED</Subtitulo>
        <ul>
          {beneficios.map((beneficio, index) => {
            return (
              <ListaItem key={index}>
                <Icone icon={faCheckCircle} />
                <Item>{beneficio}</Item>
              </ListaItem>
            )
          })}
        </ul>
      </CardContainer>
    </BaseCard>
  )
}
