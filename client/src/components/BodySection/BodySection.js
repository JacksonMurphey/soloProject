import { Button } from "../Button";
import { BodyContainer, BodyWrapper, BodyRow, Column1, TextWrap, Topper, Heading, SubTitle, BtnWrap, Column2, ImgWrap, Img } from "./BodyElements";


const BodySection = (props) => {

    const { id, lightBg, lightText, topLine, headline, description, buttonLabel, startImg, img, alt, dark, primary, darkText } = props

    return (
        <>
            <BodyContainer lightBg={lightBg} id={id}>
                <BodyWrapper>

                    <BodyRow startImg={startImg}>

                        <Column1>
                            <TextWrap>
                                <Topper>{topLine}</Topper>
                                <Heading lightText={lightText}>
                                    {headline}</Heading>
                                <SubTitle darkText={darkText}>
                                    {description}</SubTitle>
                                <BtnWrap>
                                    <Button to='register'
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        smooth='true' // was wrapped {}
                                        duration={500}
                                        spy='true' //was wrapped {}
                                        exact='true'
                                        offset={-80}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrap>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>

                    </BodyRow>

                </BodyWrapper>
            </BodyContainer>
        </>
    )
}
export default BodySection;