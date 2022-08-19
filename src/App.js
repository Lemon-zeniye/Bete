import { useState } from "react";
import { SideB, BigDiv, SmallDiv,A } from "./AppStyle";
import Drink from "./components/Drink/Drink";
import Food from "./components/Food/Food";
import Home from "./components/Home/Home";
import Navbar from "./components/Nav/Nav";
import Location from "./components/Location/Location";
const App = () => {
    const [active, setActive] = useState(false);
    const [night, setNight] = useState(false);
    return(
        <BigDiv>
            <SideB active={active}  >
               <ul>
                   <li onClick={() => setActive(!active)} ><A href="#HOME">Home</A></li>
                   <li onClick={() => setActive(!active)} ><A href="#DRINK">Drink Menu</A></li>
                   <li onClick={() => setActive(!active)} ><A href="#FOOD">Food Menu</A></li>
                   <li onClick={() => setActive(!active)} ><A href="#LOCATION">Location</A></li>
               </ul>
            </SideB>
            <SmallDiv>
                <Navbar   night={night} setNight={setNight}  active={active} setActive={setActive} />
                <Home  night={night} setNight={setNight}  active={active} setActive={setActive}/>
                <Drink  night={night} setNight={setNight} />
                <Food   night={night} setNight={setNight} />
                <Location   night={night} setNight={setNight} />
           </SmallDiv>
        </BigDiv>
    )
}
export default App; 