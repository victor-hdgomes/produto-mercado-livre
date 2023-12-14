import React from "react";

import { Container, Row, Panel, Column, Gallery, Section, Description } from "./styles";

import tshirtImage from '../../assets/tshirt.png';

import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

const Procuct: React.FC = () => {
    return (
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>

            <Panel>
                <Column>
                    <Gallery>
                        <img src={tshirtImage} alt="T-shirt" />
                    </Gallery>

                    <Info />
                </Column>

                <Column>
                    <ProductAction />
                    <SellerInfo />

                    <WarrantySection />
                    <WarrantySection />
                    <WarrantySection />
                </Column>
            </Panel>
        </Container>
    )
};

const WarrantySection = () => (
    <Section>
        <h4>Garantia</h4>

        <div>
            <span>
                <p className="title">Compras garantida com o Lorem Ipsum</p>
                <p className="description">Receba o produto que você está esperando ou devolvemos o seu dinheiro</p>
            </span>
            <span>
                <p className="title">Garantia do vendedor</p>
                <p className="description">Sem garantia</p>
            </span>
        </div>

        <a href="#">Saiba mais sobre garantia</a>
    </Section>
)

const Info = () => (
    <Description>
        <h2>Descrição</h2>

        <p>
            It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English.
            <br />
            <br />
            Itens inclusos: <br />
            - 1x LED <br />
            - 1x LED <br />
            - 1x LED <br />
            - 1x LED <br />
            - 1x LED <br />
            <br />
            It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English. It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English.
        </p>
    </Description>
)

export default Procuct;
