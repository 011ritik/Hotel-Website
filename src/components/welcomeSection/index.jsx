
import style from './style.module.scss'

const WelcomeSection = (props) => {
    return(
        <>
            <div>
                <img src={props.background_img} alt='image' className={style['backgrond-image']}/>
                <div className={style['welcome-text']}>
                    <p className={style['welcome-head']}>WELCOME TO</p>
                    <p className={style['hotel-name']}>LUXURY</p>
                    <p className={style['hotel-sub-name']}>HOTELS</p>
                    <p className={style['hotel-des']}>
                        Book your stay and enjoy Luxury <br />
                        redefined at the most affordable rates.
                    </p>
                    
                </div>
                {/* <div className={style['book-now-div']}> */}
                    {/* <img src='images/Book now.png' alt='book now' className={style['book-now']}/> */}
                {/* </div> */}
            </div>
        
        </>
    )
}

export default WelcomeSection