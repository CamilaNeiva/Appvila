import { BaseCard, Icone, IconeContainer, Titulo, Texto } from "./style";

export const Card = ({ icone, titulo, texto }) => {
  return (
    <BaseCard>
      <IconeContainer>
        <Icone icon={icone} />
      </IconeContainer>
      <Titulo>{titulo}</Titulo>
      <Texto>{texto}</Texto>
    </BaseCard>
  );
};
