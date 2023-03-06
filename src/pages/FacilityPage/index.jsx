import Testimonials from "../../components/testimonials"
import WelcomeSection from "../../components/welcomeSection"
import FacilityImg from "../../components/facility";
import PageDescription from "../../components/page_description";

let p1 = 'images/p1.png'
let p2= 'images/p2.png'
let p3 = 'images/p3.png'
let p4 = 'images/p4.png'
let p5 = 'images/p5.png'
let p6 = 'images/p6.png'


const Facilities = ({background}) => {
    let facility_arr = [p1, p2, p3, p4, p5, p6]
    let detail = {
        'title': 'FACILITIES',
        'description': "We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so" +
        "that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure" +
        "and our modern luxury resort facilities will help you enjoy the best of all.  "
    }
    return(
        <>
            <WelcomeSection background_img={background}/>
            <PageDescription detail={detail}/>
            {
                facility_arr.map((img, index) => {
                    return (
                        <div key={index}>
                            <FacilityImg img={img} />
                        </div>
                    )
                })
            }
            <Testimonials />
        </>
    )
}

export default Facilities