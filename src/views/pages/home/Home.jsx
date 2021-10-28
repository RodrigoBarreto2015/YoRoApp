import React from "react";
import { Container, Divider } from 'semantic-ui-react';
import "./Home.css";
import 'semantic-ui-css/semantic.min.css';

function Home() {

    return (
        <div className="Container">
            <Container fluid>
                <Container as='h1'>Sejam bem-vindos ao nosso site!</Container>
                <Divider />
                <Container as='h3'>A melhor forma de compartilhar esse momento
                    com vocês é unindo sonhos.</Container>
                <p>
                    Aqui vamos contar à vocês, queridos amigos e familiares, os momentos
                    mais marcantes da nossa história de amor. A contagem regressiva começa,
                    o frio na barriga e toda a ansiedade do dia mais esperado de nossas vidas nos enche de
                    alegria em tê-los ao nosso lado no dia do nosso casamento.
                </p>
            </Container>
        </div>
    )
}
export default Home;