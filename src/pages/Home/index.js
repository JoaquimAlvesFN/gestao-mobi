import React from 'react';

import Template from '../../components/Template';
import './index.css';

export default function Home() {
  return (
    <Template>
        <div className="home_cards">
            <div className="home_card">
                <span>Informações de contratos e unidades</span>
                <div className="home_infocard">
                    <div className="home_contentcard">
                        <p>15</p>
                        <span>Contratos Ativos</span>
                    </div>
                    <div className="home_contentcard">
                        <p>5</p>
                        <span>Contaros à vencer no mês</span>
                    </div>
                    <div className="home_contentcard">
                        <p>8</p>
                        <span>Contratos Vencidos</span>
                    </div>
                    <div className="home_contentcard">
                        <p>4</p>
                        <span>Unidades desocupadas</span>
                    </div>
                </div>
            </div>
            <div className="home_card">
                <span>Informações financeiras</span>
                <div className="home_infocard">
                    <div className="home_contentcard">
                        <p>2</p>
                        <span>Inquilinos inadimplentes</span>
                    </div>
                    <div className="home_contentcard">
                        <span>R$ 15.000</span>
                        <span>À receber no mês</span>
                    </div>
                    <div className="home_contentcard">
                        <span>R$ 8.000</span>
                        <span>Recebidos dno mês</span>
                    </div>
                    <div className="home_contentcard">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </Template>
  );
}
