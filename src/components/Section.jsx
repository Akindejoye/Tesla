import styled from 'styled-components';

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`;
const ItemText = styled.div`
    padding: 15vh;
    text-align: center;
`;
const Header1 = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 4px;
`
const Header2 = styled.p`
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 2px;
`
const Buttons = styled.div`
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 3rem;

    @media screen and (max-width: 760px) {
        flex-direction: column;
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

const Section = () => {
    return ( 
        <Wrap>
           <ItemText>
               <Header1>
                 Model S
               </Header1>
               <Header2>
                 Order Online for Touchless Delivery
               </Header2>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        Custom Order
                    </LeftButton>
                    <RightButton>
                        Existing Inventory
                    </RightButton>
                </ButtonGroup>
                <DownArrowCentered>
                    <DownArrow src='/images/down-arrow.svg' />
                </DownArrowCentered>
            </Buttons>
        </Wrap>
     );
}
 
export default Section;