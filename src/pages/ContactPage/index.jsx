import { Row, Col, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import style from './style.module.scss'

const Contact = () => {
    return (
        <>
            <div className={style['contact-head']}>
                CONTACT-US
            </div>
            <div className={style['contact-body']}>
                <Container>
                    <div>
                        <p className={style['contact-body-description-head']}>WE ARE HERE FOR YOU</p>
                        <p className={style['contact-body-description']}>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
                            please forward it to our support desk and we will get back to you as soon as possible.
                        </p>
                    </div>
                    <Row>
                        <Col sm={12} md={12} lg={6}>

                            <p className={style['contact-body-addresss']}>497 Evergreen Rd. Roseville,
                                CA 95673
                            </p>
                            <p className={style['contact-body-map']}>
                                View map
                                <img src='images/arrow.png' className={style['arrow']}/>
                            </p>
                            <p className={style['contact-body-phone']}>Phone: +44 345 678 903</p>
                            <p className={style['contact-body-email']}>Email: luxury_hotels@gmail.com</p>


                        </Col>

                        <Col sm={12} md={12} lg={6}>
                            <Form>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={7} />
                            </Form.Group>


                            <Button variant="primary" type="submit" className={style['contact-btn']}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>

        </>
    )
}

export default Contact