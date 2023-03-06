import Testimonials from "../../components/testimonials"
import WelcomeSection from "../../components/welcomeSection"
import PageDescription from "../../components/page_description";
import RoomCard from "../../components/roomCard";


const Room = ({background}) => {

    let detail = {
        'title': 'ROOMS AND RATES',
        'description': "Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes," + 
                        "comfort isn't our only objective, we also value good design, sleek contemporary furnishing complemented "+
                            "by the rich tones of nature\s palette as visible from our rooms' sea-view windows and terraces. "
    }
    let rooms = [
        {'room':'SINGLE ROOM','price':"$147 Avg/Night", 'img':'images/single.png'},
        {'room':'DOUBLE ROOM','price':"$55 Avg/Night", 'img':'images/double.png'},
        {'room':'TWIN ROOM','price':"$155 Avg/Night", 'img':'images/twin.png'},
      ]
    return(
        <>
            <WelcomeSection background_img={background}/>
            <PageDescription detail = {detail}/>
            {
                rooms.map((room, index)=>{
                    return (
                        <div key={index}>
                            <RoomCard room ={room}  />
                        </div>
                    )
                })
            }
            <Testimonials />
        </>
    )
}

export default Room