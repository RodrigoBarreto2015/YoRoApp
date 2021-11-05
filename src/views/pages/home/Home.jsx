import React from "react";
import { Container, Divider} from 'semantic-ui-react';
import "./Home.css";
import 'semantic-ui-css/semantic.min.css';

function Home() {

    let imgUrlBase = "https://drive.google.com/uc?export=view&id=";

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
            <div className="Space"></div>
            <div className="Images">
                <div>
                    <img alt="imagem 1" src={imgUrlBase + "12bD7Z-upMTH3mtt69rgA7AU5t6N6wHil"} />
                </div>
                <div>
                    <img alt="imagem 2" src={imgUrlBase + "12bb758261I1KqkiwUADVyjuV3slEsRyv"} />
                </div>
                <div>
                    <img alt="imagem 3" src={imgUrlBase + "1HAbr_osdRjqczZh9uSD8HPwXN2u5ha4q"} />
                </div>
                <div>
                    <img alt="imagem 4" src={imgUrlBase + "1FpxtLBHcuHrucfpqKpd04oZj0RKKxpmd"} />
                </div>
                <div>
                    <img alt="imagem 5" src={imgUrlBase + "1wP9N1SMhQko94i8NHqxKA-rTwftF0yq2"} />
                </div>
                <div>
                    <img alt="imagem 6" src={imgUrlBase + "1Ob74wIMpwyorswDfiOxiaA34NQpyoUu4"} />
                </div>
                <div>
                    <img alt="imagem 7" src={imgUrlBase + "1ihPnu5WLOwm_71_89tqVo8M4ISoJtGG8"} />
                </div>
                <div>
                    <img alt="imagem 8" src={imgUrlBase + "1Jbx67rKI7Cf6lIMccNF8_Y6fEl-q37cg"} />
                </div>
                <div>
                    <img alt="imagem 9" src={imgUrlBase + "1L0Tc1H0a9DY5SwWZCD42TmRUZ7mq2O7N"} />
                </div>
            </div>
        </div>
    )
}
export default Home;