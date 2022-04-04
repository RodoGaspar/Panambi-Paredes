import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

export const CartProd = (i) => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={i.foto} />
        <Card.Body>
            <Card.Title>{i.size}</Card.Title>
            <Card.Text>
            Precio unitario  ${i.precio}
            </Card.Text>
            <Card.Text>
            Cantidad {i.quant} unidades
            </Card.Text>
            <Card.Text>
            Precio Total ${i.precio * i.quant}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    )
}