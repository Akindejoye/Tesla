import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

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
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
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
    margin-right: 7px;
`


const Header = ({ handleClick, burgerStatus }) => {

    const cars = useSelector(selectCars);

    return ( 
        <Container>
            <a href='http://localhost:3000/'>
                <img src="/images/logo.svg" alt="Logo" />
            </a>
            <Menu>
                {
                    cars && cars.map((car, index) => (
                        <a key={index} href='http://localhost:3000/'>{car}</a>
                    ))
                }
            </Menu>
            <RightMenu>
                <a href='http://localhost:3000/'>Shop</a>
                <a href='http://localhost:3000/'>Account</a>
                <CustomMenu onClick={handleClick} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={handleClick} />
                </CloseWrapper>
                {
                    cars && cars.map((car, index) => (
                        <li key={index}><a href="http://localhost:3000/">{car}</a></li>
                    ))
                }
                <li><a href="http://localhost:3000/">Existing Inventory</a></li>
                <li><a href="http://localhost:3000/">Used Inventory</a></li>
                <li><a href="http://localhost:3000/">Trade-In</a></li>
                <li><a href="http://localhost:3000/">Test Drive</a></li>
                <li><a href="http://localhost:3000/">Cybertruck</a></li>
                <li><a href="http://localhost:3000/">Roadster</a></li>
                <li><a href="http://localhost:3000/">Semi</a></li>
                <li><a href="http://localhost:3000/">Charging</a></li>
                <li><a href="http://localhost:3000/">Powerwall</a></li>
                <li><a href="http://localhost:3000/">Commercial Energy</a></li>
                <li><a href="http://localhost:3000/">Utilities</a></li>
                <li><a href="http://localhost:3000/">Find Us</a></li>
                <li><a href="http://localhost:3000/">Support</a></li>
                <li><a href="http://localhost:3000/">Investor Relations</a></li>
            </BurgerNav>
        </Container>
     );
}
 
export default Header;