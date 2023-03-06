import { Container } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";

import style from './style.module.scss'


const Footer = () => {
    return (
        <div className={style['footer']}>
            <Container>
                <div className={style['footer-container']}>
                    <div>
                        <p className={style['hotel-name']}>LUXURY</p>
                        <p className={style['hotel-sub-name']}>HOTELS</p>
                        <p className={style['hotel-description']}>
                            497 Evergreen Rd. Roseville, CA 95673
                        </p>
                        <p className={style['hotel-description']}>
                            +44 345 678 903
                        </p>
                        <p className={style['hotel-description']}>
                            luxury_hotels@gmail.com
                        </p>
                    </div>
                    <div className={style['about-hotel']}>
                        <a>About</a>
                        <Link to={'contact'} className={style['footer-links']}>Contact</Link>
                        <a>Terms & Conditions</a>
                    </div>
                    <div className={style['hotel-socials']}>
                        <a className={style['hotel-social-link']}>
                            <img src='images/fb.png' className={style['social-img']}/>
                            Facebook
                        </a>
                        <a className={style['hotel-social-link']}>
                            <img src='images/tw.png' className={style['social-img']}/>
                            Twitter
                        </a>
                        <a className={style['hotel-social-link']}>
                            <img src='images/ins.png' className={style['social-img']}/>
                            Instagram
                        </a>
                    </div>
                    <div>
                        <p className={style['hotel-newsletter']}>Subscribe to our newsletter</p>
                        <InputGroup className={style['newsletter-form']}>
                            <Form.Control
                                className={style['newsletter-form-input']}
                                placeholder="Email Address"
                                aria-label="Email Address   "
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2" className={style['newsletter-form-ok']}>OK</InputGroup.Text>
                        </InputGroup>
                    </div>

                </div>
            </Container>

        </div>
    )
}

export default Footer