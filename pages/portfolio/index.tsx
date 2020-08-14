import React from 'react';
import Link from 'next/link';

import { Container, Project, Text } from '../../styles/portfolio/styles';
import Button from '../../components/Button';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <p>Experiência</p>
      <strong>
        - Graduação:
        <span> Graduando em Engenharia de Redes de Comunicações na UnB</span>
      </strong>
      <strong>
        - Bootcamp:
        <span> Sou formado no Bootcamp GoStack da Rocketseat</span>
      </strong>
      <strong>
        - Estágio:
        <span>
          {' '}
          6 meses de experiência em desenvolvimento mobile com React Native
        </span>
      </strong>
      <strong>
        - Freelancer:
        <span>
          {' '}
          Atuo como desenvolvedor fullstack freelancer desde junho de 2020
        </span>
      </strong>

      <p>Projetos</p>

      <Project>
        <img src="/assets/bossabox.jpeg" alt="BossaBox" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Fullstack</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              Estou disponível como freelancer na plataforma Bossabox.
            </span>
          </strong>

          <Button link="https://app.bossabox.com/u/daniel-bergholz">
            Ver mais
          </Button>
        </Text>
      </Project>

      <Project>
        <img src="/assets/upwork.png" alt="Upwork" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Fullstack</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span> Estou disponível como freelancer na plataforma Upwork.</span>
          </strong>

          <Button link="https://www.upwork.com/o/profiles/users/~01d7d71fa714d6ce9d/">
            Ver mais
          </Button>
        </Text>
      </Project>

      <Project>
        <img src="/assets/rocketseat.png" alt="Rocketseat logo" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Fullstack</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              Bootcamp GoStack. Abordou os seguintes temas: ReactJS, React
              Native e NodeJS com Typescript.
            </span>
          </strong>

          <Button link="http://app.rocketseat.com.br/api/certificates/pdf/6b76d8c5-fe76-4322-9c0d-bbf6d11662ed">
            Ver mais
          </Button>
        </Text>
      </Project>

      <Project>
        <img src="/assets/astro_muri.png" alt="Astro Muri" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Frontend</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              Ricardo Muri é um astrólogo famoso e influencer, e “Astro Muri” é
              um aplicativo mobile híbrido que faz streaming do seu conteúdo. Eu
              desenvolvi tudo relacionado à tela de login, o processo de
              pagamento (usando o pagseguro), e conectei todas as páginas ao
              backend (firebase).
            </span>
          </strong>
          <Link href="/portfolio/astromuri">
            <a>
              <Button>Ver mais</Button>
            </a>
          </Link>
        </Text>
      </Project>

      <Project>
        <img src="/assets/berg.png" alt="BERG" />
        <Text>
          <strong>
            - Função:
            <span> Desenvolvedor Frontend, Designer</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span>
              {' '}
              bergdaniel.com.br é o site que você está acessando. Eu o criei do
              completo zero, desde a concepção da arquitetura e navegação de
              páginas no whimsical e o design no Figma até o desenvolvimento com
              NextJS.
            </span>
          </strong>
          <Link href="/portfolio/bergdaniel">
            <a>
              <Button>Ver mais</Button>
            </a>
          </Link>
        </Text>
      </Project>

      <Project>
        <img src="/assets/logo_bg_roxo.png" alt="BERG" />
        <Text>
          <strong>
            - Função:
            <span> Fundador, Desenvolvedor Fullstack</span>
          </strong>
          <br />
          <strong>
            - Descrição:
            <span> Mais detalhes em breve</span>
          </strong>
        </Text>
      </Project>
    </Container>
  );
};

export default Portfolio;
