import { P } from '../../components/Paragrafo/styles'
import Titulo from '../../components/Titulo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={1.2}>Sobre mim</Titulo>
    <P>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quo quaerat
      natus doloremque sunt quidem porro officiis similique facere sit cum,
      autem aliquam laudantium, accusamus minima commodi explicabo praesentium!
      Cumque.
    </P>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=l3l3z1nh4&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=l3l3z1nh4&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
