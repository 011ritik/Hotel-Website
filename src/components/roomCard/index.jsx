import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

import style from "./style.module.scss";

const RoomCard = ({ room }) => {
    return (
        <>
            <Container>
                <Card className={style["room-card"]}>
                    <Card.Img
                        variant="top"
                        src={room.img}
                        className={style["room-card-img"]}
                    />
                    <Card.Body className={style["room-card-body"]}>
                        <Card.Title className={style["room-card-title"]}>
                            {room.room}
                        </Card.Title>
                        <Card.Text className={style["room-card-des"]}>
                            <div>
                                <p className={style["room-card-view"]}>
                                    <img
                                        src='images/add.png'
                                        className={style["room-card-add"]}
                                    />
                                    VIEW ROOM DETAILS
                                </p>
                            </div>
                            <div>
                                <Button className={style['room-btn']}>{room.price}</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default RoomCard;
