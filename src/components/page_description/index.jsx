import { Container } from 'react-bootstrap'

import style from './style.module.scss'

const PageDescription = ({detail}) => {
    console.log(detail.title)
    return (
        <Container>
            <p className={style['page-description-title']}>{detail.title}</p>
            <p className={style['page-description-body']}>
                {detail.description}
            </p>
        </Container>
    )
}

export default PageDescription