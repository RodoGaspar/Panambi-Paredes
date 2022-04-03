import {Item} from "./Item";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ItemList = ({prods}) => {
    return(
        <Container>
            <Row
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alingnItems: 'center',
                }}
            >
                {prods.map((producto) => (
                    <Col s={12} md={6} lg={4}>
                        <Item {...producto} key={producto.id}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};