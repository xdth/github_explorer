import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/12601116?s=460&u=a654dd1ff2aa806f44650c70871b0b614b99d64f&v=4"
            alt="xdth"
          />
          <div>
            <strong>xdth/xxxx</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>878</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>2</strong>
            <span>Opened issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="ssss">
          <div>
            <strong>gfdgsdf</strong>
            <p>fffgfg</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
