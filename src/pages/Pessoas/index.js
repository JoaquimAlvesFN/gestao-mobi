import React from 'react';
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom';

import Template from '../../components/Template';
import './index.css';

export default function Pessoas() {
  return (
    <Template>
        <div style={{ padding: 20}}>
            <span>Pessoas</span>
            <div className="pessoas_filtro">
                <input placeholder="Nome da pessoa"/>
                <input placeholder="CPF/CNPJ" />
                <input placeholder="Tipo Pessoa" />
                <button>Buscar</button>
            </div>
            <div className="pessoas_botoes">
                <div className="pessoas_btn_crud">
                    <Link to="/pessoas/new">Novo</Link>
                    <Link>Alterar</Link>
                    <Link>Excluir</Link>
                </div>
                <div className="pessoas_btn_crt">
                    <Link>Checar Pessoa</Link>
                    <Link>Gerar Contrato</Link>
                </div>
            </div>
            <div className="pessoas_lista">
                <div className="pessoas_tabela">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nome da Pessoa</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>Tipo Pessoa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Joaquim Alves Ferreira Neto</td>
                                <td>jafn92@gmail.com</td>
                                <td>(85) 9 8651.6133</td>
                                <td>Locador</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nome</td>
                                <td>email</td>
                                <td>telefone</td>
                                <td>tipo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Template>
  );
}
