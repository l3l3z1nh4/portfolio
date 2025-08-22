import {
  FooterStyled,
  Email,
  EmailContent,
  Social,
  SocialContent,
} from './styles'

export function Footer() {
  return (
    <>
      <FooterStyled> 
        <EmailContent> 
          <Email>
            <p>EMAIL:</p>
            <p>LETICIA.FRONTDEV@GMAIL.COM</p>
          </Email>
        </EmailContent>
        <SocialContent> 
          <Social>
            <a target="blank" href="https://github.com/l3l3z1nh4">
              <img src="/assets/git_hub_icon.png" alt="github" />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/let%C3%ADcia-pessotti/"
            >
              <img src="/assets/linkedin_icon.png" alt="linkedin" />
            </a>
          </Social>
        </SocialContent>
      </FooterStyled>
    </>
  )
}