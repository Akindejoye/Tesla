import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';

const Container = styled.div`
    min-height: 6rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 44;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 1.4rem;
`;
const Menu = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        font-weight: 500;
        text-transform: uppercase;
        padding: 0 1rem;
        flex-wrap: nowrap;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 500;
        text-transform: uppercase;
        margin-right: 1rem;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 30rem;
    z-index: 999;
    list-style: none;
    padding-top: 2rem;
    padding-left: 4rem;
    display: flex;
    flex-direction: column;
    text-align: start;
    min-height: 100vh;
    overflow-y: auto;
    transform: ${props => props.show ? 'translateY(0)': 'translateY(-100%)'};
    transition: transform 0.5s ease-in;

    li {
        padding: 1.5rem 0;
    }

    a {
        font-size: 1.5rem;
        font-weight: 400;
    }
`;
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 2rem;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    font-size: 3rem !important;
    `


const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return ( 
        <Container>
            <a>
                <img src="/images/logo.svg" alt="Logo" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
            </BurgerNav>
        </Container>
     );
}
 
export default Header;