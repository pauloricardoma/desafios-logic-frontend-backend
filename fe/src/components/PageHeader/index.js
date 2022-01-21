import React from 'react';

import { Header } from './styles';

import logo from '../../assets/images/cowala-software.png';

export default function PageHeader() {
  return (
    <Header>
      <img
        src={logo}
        alt="Logo + Cowala Software"
      />
    </Header>
  );
}
