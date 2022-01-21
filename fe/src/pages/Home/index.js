import React, { useEffect, useState } from 'react';

import useErrors from '../../hooks/useErrors';
import formatCelular from '../../utils/formatCelular';

import { Container, Main, Form } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Home() {
  const [nome, setNome] = useState('');
  const [profissao, setProfissao] = useState('');
  const [celular, setCelular] = useState('');
  const [meuIP, setMeuIP] = useState('');
  const [pessoa, setPessoa] = useState({});

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  const formIsValid = (nome && errors.length === 0);

  const dataLocalStorage = JSON.parse(localStorage.getItem('pessoa'));

  function handleChangeNome(event) {
    setNome(event.target.value);

    if (!event.target.value) {
      setError({ field: 'nome', message: 'Nome é obrigatório.' });
    } else {
      removeError('nome');
    }

    if (
      event.target.value.length > 0
      && (event.target.value.length < 3
      || event.target.value.length > 255)
    ) {
      setError({ field: 'nomeValid', message: 'Nome precisa ter entre 3 e 255 caracteres.' });
    } else {
      removeError('nomeValid');
    }
  }

  function handleChangeProfissao(event) {
    setProfissao(event.target.value);
  }

  function handleChangeCelular(event) {
    setCelular(formatCelular(event.target.value));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  function handlePessoaStore() {
    if (!meuIP) {
      setError({ field: 'meuIP', message: 'IP é obrigatório.' });
    } else {
      setPessoa((
        {
          nome,
          profissao,
          celular,
          meuIP,
        }
      ));
    }
  }

  function handleFormClear() {
    setNome('');
    setProfissao('');
    setCelular('');
    setMeuIP('');
    removeError('nome');
    removeError('nomeValid');
    localStorage.removeItem('pessoa');
  }

  async function handleGetIP() {
    const data = await fetch('https://api.ipify.org/?format=json').then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText());
    })
      .catch((err) => {
        console.log('Erro de carregamento de conteúdo', err);
      });

    const { ip } = data;
    setMeuIP(ip);
    removeError('meuIP');
  }

  useEffect(() => {
    if (dataLocalStorage) {
      setNome(dataLocalStorage.nome);
      setProfissao(dataLocalStorage.profissao);
      setCelular(dataLocalStorage.celular);
      setMeuIP(dataLocalStorage.meuIP);
    }
  }, []);

  useEffect(() => {
    if (JSON.stringify(pessoa) !== '{}') {
      localStorage.setItem('pessoa', JSON.stringify(pessoa));
    }
  }, [pessoa]);

  return (
    <Container>
      <Main>
        <Form onSubmit={handleFormSubmit}>
          <div className="div-nome">
            <span>Nome</span>
            <Input
              value={nome}
              type="text"
              onChange={handleChangeNome}
            />
            <small>{getErrorMessageByFieldName('nome')}</small>
            <small>{getErrorMessageByFieldName('nomeValid')}</small>
          </div>

          <div className="div-profissao-cell">
            <div>
              <span>Profissão</span>
              <Input
                value={profissao}
                type="text"
                onChange={handleChangeProfissao}
              />
            </div>
            <div>
              <span>Celular</span>
              <Input
                value={celular}
                type="text"
                onChange={handleChangeCelular}
              />
            </div>
          </div>

          <div className="div-ip">
            <span>Meu IP</span>
            <div className="ip-input-button">
              <div className="ip-input">
                <Input
                  value={meuIP}
                  type="text"
                  onChange={(e) => e.preventDefault()}
                />
              </div>
              <div className="ip-button">
                <Button
                  onClick={handleGetIP}
                  type="button"
                >
                  ENCONTRAR IP
                </Button>
              </div>
              <small>{getErrorMessageByFieldName('meuIP')}</small>
            </div>
          </div>

          <div className="buttons-save-clean">
            <span>
              <Button
                type="submit"
                disabled={!formIsValid}
                onClick={handlePessoaStore}
              >
                SALVAR

              </Button>
            </span>
            <span>
              <Button
                type="button"
                onClick={handleFormClear}
              >
                LIMPAR
              </Button>
            </span>
          </div>
        </Form>
      </Main>
    </Container>
  );
}
