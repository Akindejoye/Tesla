import styled from 'styled-components';
import { Fade } from 'react-reveal';

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background-image: url('/images/model-s.jpg'); */
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`;
const ItemText = styled.div`
    padding: 15vh;
    text-align: center;

    @media screen and (max-width: 400px) {
       /* padding: 5vh; */
       min-width: 100vw;
    }
`;
const Header1 = styled.h1`
    /* font-size: 4rem; */
    font-size: 4vw;
    font-weight: 500;
    letter-spacing: 4px;
    /* color: transparent;
    text-shadow: 0 0 7px black; */

    @media screen and (max-width: 420px) {
        
        font-size: 4rem;
        font-weight: 400;
        min-width: 100vw;
        padding-bottom: 1rem;
    }
`
const Header2 = styled.p`
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 2px;

    @media screen and (max-width: 420px) {
        
        font-size: 1.5rem;
        min-width: 100vw;
    }
`
const Buttons = styled.div`
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 3rem;

    @media screen and (max-width: 760px) {
        flex-direction: column;
    }

    @media screen and (max-width: 400px) {
        margin-bottom: 1rem;
    }
`
const LeftButton = styled.div`
    width: 25.5rem;
    height: 4rem;
    color: #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
    /* opacity: 0.85; */
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 8px;
    background-color: rgba(23, 26, 32, 0.8);
`
const RightButton = styled(LeftButton)`//Reference, this allows us to inherit all the properties of the Refrence component.
    background-color: #fff;
    opacity: 0.65;
    color: #000;
`
const DownArrowCentered = styled.div`
    display: flex;
    justify-content: center;
`
const DownArrow = styled.img`
    height: 4rem;
    margin-top: 2rem;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText, downArrow}) => {
    return ( 
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <Header1>
                        {title}
                    </Header1>
                    <Header2>
                        {description}
                    </Header2>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {
                            rightBtnText && (
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                            )
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrowCentered>
                    {
                        downArrow && (
                            <DownArrow src={`/images/${downArrow}`} />
                        )
                    }
                </DownArrowCentered>
            </Buttons>
        </Wrap>
     );
}
 
export default Section;