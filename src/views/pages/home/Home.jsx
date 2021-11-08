import React from "react";
import { Container, Divider, Segment, Icon, Label } from 'semantic-ui-react';
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

            <Segment>
                    <div>
                        <img alt="Primeira foto juntos" src={imgUrlBase + "14ieoOYERdyVdLxkeudKoWkQNgB81bhSm"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 05/02/2021
                        </Label>
                        <p><Icon color="olive" name="circle" />Primeira foto juntos.</p>
                    </div>
                </Segment>

                <Segment>
                    <div>
                        <img alt="Comemorando o meu aniversário juntos" src={imgUrlBase + "1B04ruNgXX9EiOQwT4T4YmBuxyqi_7Ib2"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 07/02/2021
                        </Label>
                        <p><Icon color="olive" name="circle" />Comemorando o meu aniversário juntos.</p>
                    </div>
                </Segment>

                <Segment>
                    <div>
                        <img alt="Conheci o melhor amigo dela" src={imgUrlBase + "1Jbx67rKI7Cf6lIMccNF8_Y6fEl-q37cg"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 09/02/2021
                        </Label>
                        <p><Icon color="olive" name="circle" />Conheci o melhor amigo dela.</p>
                    </div>
                </Segment>

                <Segment>
                    <div>
                        <img alt="O dia do pedido de namoro" src={imgUrlBase + "1FpxtLBHcuHrucfpqKpd04oZj0RKKxpmd"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 22/02/2021
                        </Label>
                        <p><Icon color="olive" name="circle" /> O dia do pedido de namoro.</p>
                    </div>
                </Segment>

                <Segment>
                    <div>
                        <img alt="O dia em que ela conheceu meus pais" src={imgUrlBase + "12bb758261I1KqkiwUADVyjuV3slEsRyv"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 24/02/2021
                        </Label>
                        <p><Icon color="olive" name="circle" />O dia em que ela conheceu meus pais.</p>
                    </div>
                </Segment>

                <Segment>
                    <div>
                        <img alt="O dia que conheci os pais dela" src={imgUrlBase + "1HAbr_osdRjqczZh9uSD8HPwXN2u5ha4q"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 01/04/2021
                        </Label>
                        <p><Icon color="olive" name="circle" />O dia que conheci os pais dela.</p>
                    </div>
                </Segment>

                <Segment>
                    <div>
                        <img alt="Primeira viagem juntos" src={imgUrlBase + "1ihPnu5WLOwm_71_89tqVo8M4ISoJtGG8"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 09/04/2021
                        </Label>
                        <p><Icon color="olive" name="circle" /> Primeira viagem juntos.</p>
                    </div>
                </Segment>

                <Segment>
                    <div>
                        <img alt="Dia do pedido de casamento" src={imgUrlBase + "13XjSLBLzBUvi0eOTaa6gmm-if-jrecav"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 17/06/2021
                        </Label>
                        <p><Icon color="olive" name="circle" />Dia do pedido de casamento.</p>
                    </div>
                </Segment>

                <Segment>
                    <div>
                        <img alt="Comemoração de São João" src={imgUrlBase + "1wP9N1SMhQko94i8NHqxKA-rTwftF0yq2"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 28/06/2021
                        </Label>
                        <p><Icon color="olive" name="circle" /> Comemoração de São João.</p>
                    </div>
                </Segment>

                <Segment>
                    <div>
                        <img alt="Primeira viagem com a família" src={imgUrlBase + "1Ob74wIMpwyorswDfiOxiaA34NQpyoUu4"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 03/07/2021
                        </Label>
                        <p><Icon color="olive" name="circle" /> Primeira viagem com a família.</p>
                    </div>
                </Segment>

                <Segment>
                    <div>
                        <img alt="Comemorando o primeiro aniversário dela juntos" src={imgUrlBase + "12bD7Z-upMTH3mtt69rgA7AU5t6N6wHil"} />
                        <Label>
                            <Icon name='calendar alternate outline' /> 08/10/2021
                        </Label>
                        <p><Icon color="olive" name="circle" />Comemorando o primeiro aniversário dela juntos.</p>
                    </div>
                </Segment>
            </div>
        </div>
    )
}
export default Home;