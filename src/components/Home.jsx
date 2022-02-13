import styled from 'styled-components';
import Section from './Section';

const Container = styled.div`
    height: 100vh;
`;


const Home = () => {
    return ( 
        <div>
           <Container>
               <Section />
           </Container>
        </div>
     );
}
 
export default Home;