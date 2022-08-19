import {Container} from "./HomeStyle.jsx";

const Home = ({active, setActive,night}) => {
    return( 
        <Container id="HOME" night={night}>
            <h1>Bete Buna</h1>
            <p>we don't make your coffee. We make your day.</p> 
        </Container> 
    )
}
export default Home;