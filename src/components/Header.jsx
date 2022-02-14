import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

const Container = styled.div`
    min-height: 6rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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

const Header = () => {
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
                <CustomMenu />
            </RightMenu>
        </Container>
     );
}
 
export default Header;