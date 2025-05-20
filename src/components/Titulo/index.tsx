import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
  marginBottom?: number
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize} marginBottom={props.marginBottom}>
    {props.children}
  </TituloEstilo>
)

export default Titulo
