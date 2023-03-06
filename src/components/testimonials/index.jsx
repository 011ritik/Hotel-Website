import Carousel from 'react-bootstrap/Carousel';

import style from './style.module.scss'
import styles from './style.css'

function Testimonials() {
  return (
    <>
      <p className={style['testiomonials-title']}>Testimonials</p>
      <Carousel variant="dark" className={style['testimonials-body']}>



        <Carousel.Item>
          <Carousel.Caption className={style['testimonials-item-caption']}>
            <h5>"Calm, Serene, Retro – What a way to relax and enjoy"</h5>
            <p> Mr. and Mrs. Baxter, UK</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption className={style['testimonials-item-caption']}>
            <h5>"Calm, Serene, Retro – What a way to relax and enjoy"</h5>
            <p> Mr. and Mrs. Baxter, UK</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption className={style['testimonials-item-caption']}>
            <h5>"Calm, Serene, Retro – What a way to relax and enjoy"</h5>
            <p> Mr. and Mrs. Baxter, UK</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
}

export default Testimonials;