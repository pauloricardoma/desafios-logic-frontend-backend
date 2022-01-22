import React from 'react';

import { Header, Container } from './styles';

import logo from '../../assets/images/cowala-software.png';

export default function PageHeader() {
  return (
    <Header>
      <Container>
        <img
          src={logo}
          alt="Logo + Cowala Software"
        />
      </Container>
    </Header>
  );
}
