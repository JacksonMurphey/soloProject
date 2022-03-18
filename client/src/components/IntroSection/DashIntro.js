import { useState } from "react";
import { IntroContainer, IntroBg, IntroVid, IntroContent, IntroH1, IntroP, AltIntroContainer } from "./IntroElements";
import Video from '../../videos/dashVideo.mp4'


const DashIntro = (props) => {
    // document.querySelector('video').playbackRate = 0.4;

    return (
        <AltIntroContainer>
            <IntroBg>
                <IntroVid src={Video} type='video/mp4' loop autoPlay muted />
            </IntroBg>

            <IntroContent>
                <IntroH1>Nizell</IntroH1>
                <IntroH1>is a Work </IntroH1>
                <IntroH1>in Progress</IntroH1>
                <IntroP>We look to offer you the best in class finacial Service. Below you will find your expenses. These can be filterd by year and graphed out for you by month. There is more to come, so be on the lookout.</IntroP>


            </IntroContent>
        </AltIntroContainer>
    )
}

export default DashIntro