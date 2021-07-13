import { HeaderStyled } from './styles';

import logoImg from '../../assets/images/logo.png';
import githubImg from '../../assets/images/github.svg';
import linkedinImg from '../../assets/images/linkedin.svg';
import instagramImg from '../../assets/images/instagram.svg';

export function Header() {
  return (
    <HeaderStyled>
      <img src={logoImg} alt="Logo" />
      <div>
        <a href="https://github.com/pedro-henrique-sb/" target="_blank" rel="noreferrer">
          <img src={githubImg} alt="GitHub icon" />
        </a>
        <a href="https://www.linkedin.com/in/pedro-henrique-sb/" target="_blank" rel="noreferrer">
          <img src={linkedinImg} alt="Linkedin icon" />
        </a>
        <a href="https://www.instagram.com/pedro_henrique_silva_b/" target="_blank" rel="noreferrer">
          <img src={instagramImg} alt="Instagram icon" />
        </a>
      </div>
    </HeaderStyled>
  );
}
