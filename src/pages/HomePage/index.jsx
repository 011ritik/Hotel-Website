import HomeCard from "../../components/homeCard"
import Testimonials from "../../components/testimonials"
import WelcomeSection from "../../components/welcomeSection"

const HomePage = ({ background }) => {

    let details = [
        { 'title': 'Luxury redefined', 'description': 'Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.' },
        { 'title': 'Leave your worries in the sand', 'description': 'We love life at the beach. Being closeto the ocean with access to endless sandybeach ensures a relaxed state of mind. It seems like time stands still watching the ocean. ' }
    ]

    let images = [
        {img:'images/st.png'},
        {img:'images/bg3.png'},

    ]
    return (
        <>
            <WelcomeSection background_img={background} />
            <p style={{ textAlign: 'center', fontSize: '36px', padding: '2rem' }}>All our room types are including complementary breakfast</p>
            {
                details.map( (detail, index) => {
                    return (
                        <div key={index}>
                            <HomeCard detail={detail} images={images[index]}/>
                        </div>
                    )
                })
            }
            <Testimonials />
        </>
    )
}

export default HomePage