import React, { useState } from 'react';
import {
    IntroContainer,
    IntroBg,
    IntroVid,
    IntroContent,
    IntroH1,
    IntroP,
    IntroBtnWrp,
    ArrowForward,
    ArrowRight
} from "./IntroElements"
import Video from '../../videos/video.mp4'
import { Button } from '../Button'




const IntroSection = (props) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <IntroContainer >
            <IntroBg>
                <IntroVid src={Video} type='video/mp4' loop autoPlay muted />
            </IntroBg>

            <IntroContent>
                <IntroH1>Part Social</IntroH1>
                <IntroH1>Part You</IntroH1>
                <IntroH1>All Nizell</IntroH1>

                <IntroP>Sign up Today and receive a complimentary buddy pass</IntroP>

                <IntroBtnWrp>
                    <Button to='/register'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        // opacity='true'
                        primary='true'
                    // dark='true'
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </IntroBtnWrp>

            </IntroContent>
        </IntroContainer>
    )
}
export default IntroSection;