import { Titulo, Subtitulo, Texto } from './style'

export const Cabecalho = ({ titulo, subtitulo, texto }) => {
  return (
    <>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
      <Texto>{texto}</Texto>
    </>
  )
}
