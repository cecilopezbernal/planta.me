import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ nombre, text, precio, img }) => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Subtitle>{precio} €</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary"> más info </Button>
            </Card.Body>
        </Card>

    );
}

export default Item
