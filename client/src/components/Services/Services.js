import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesImg, ServicesH2, ServicesP } from "./ServiceElements";
import { default as Img1 } from '../../images/finance.svg'
import { default as Img2 } from '../../images/movies.svg'
import { default as Img3 } from '../../images/tasks.svg'


const Services = (props) => {


    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                    <ServicesImg src={Img1} />
                    <ServicesH2>Expense Management</ServicesH2>
                    <ServicesP>Let us help you in organizing your monthly and yearly expenses, so you dont have to.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesImg src={Img2} />
                    <ServicesH2>On Demand Analysts</ServicesH2>
                    <ServicesP>Looking for help in planning your future? Let our team of skilled Finacial Analysts help you. Whenever, Wherever.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesImg src={Img3} />
                    <ServicesH2>Reminders and Errands</ServicesH2>
                    <ServicesP>We can keep track of all your upcoming events, or things that need to get done, in one place.</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;