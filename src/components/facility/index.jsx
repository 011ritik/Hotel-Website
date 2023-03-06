import { Container } from "react-bootstrap";
import style from './style.module.scss'

const FacilityImg = ({img}) => {
    return (
        <Container>
        <img src={img} className={style['image']}/>
        </Container>
    )
}

export default FacilityImg