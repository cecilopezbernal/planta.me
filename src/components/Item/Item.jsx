import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, text, precio, img }) => {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Subtitle>{precio} €</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
                <Link to={`/item/${id}`}><Button variant="primary"> más info </Button></Link> 
            </Card.Body>
        </Card>

    );
}

export default Item
