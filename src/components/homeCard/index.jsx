import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


import style from './style.module.scss'

const HomeCard = ({detail, images}) => {
  return (
    <Container>
    <Card className={style['home-card']}>
      <Card.Img variant="top" src={images.img} className={style['home-card-img']}/>
      <Card.Body>
        <Card.Title className={style['home-card-title']}>{detail.title}</Card.Title>
        <Card.Text className={style['home-card-text']}>
          {detail.description}
        </Card.Text>
        <Button className={style['hotel-btn']}>Explore</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default HomeCard;