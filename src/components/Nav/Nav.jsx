import { Nav, H1, Ndiv, Cir} from "./NavStyle.jsx";
import NavIcon from "../../images/nav.svg";
import Close from "../../images/close3.svg";
const Navbar = ({active, setActive, night, setNight}) => {
    const toggleNav = () => {
        setActive(!active);
    }
    return(
        <Nav active={active} night={night}>
            {active ? <img alt="NavLlink" src={Close} onClick={toggleNav} /> : <img alt="NavLlink" src={NavIcon} onClick={toggleNav} /> }
            <H1>Bete Coffee</H1> 
            <Ndiv>
                <Cir night={night} onClick={() => setNight(!night)} ></Cir>
            </Ndiv>
        </Nav>
    )
}
export default Navbar;