import { DrinkCon, Dh1, Img, DrinkCardCon } from "./DrinkStyle";
import imgB from "../../images/gggg.jpg";
import CardD from "../CardD/CardD.jsx";
import cone from "../../images/cone.png";
import ctwo from "../../images/milk.png";
import cthree from "../../images/tea.png";
import cfour from "../../images/cseven.png";
import cfive from "../../images/ceight.png";
import csix from "../../images/cthree.png";

const Drink = ({night}) => {
  const  drinkDatas = [
        {
            img: cone,
            name: "Coffe",
            price: "15",
        },
        {
            img: ctwo,
            name: "Milk",
            price: "20",
        },
        {
            img: cthree,
            name: "Tea",
            price: "10",
        },
        {
            img: cfour,
            name: "Cappuccino",
            price: "20",
        },
        {
            img: cfive,
            name: "Maccchiato",
            price: "20",
        },
        {
            img: csix,
            name: "Black Coffe",
            price: "15",
        }
    ]
    return(
        <DrinkCon id="DRINK" night={night} >
           {night ? <Img src={imgB} /> : <></> } 
            <Dh1>Drinks Menu</Dh1>
            <DrinkCardCon>
                {
                    drinkDatas.map(data => (
                        <CardD img={data.img} name={data.name} price={data.price} />
                    ))
                }
            </DrinkCardCon>
        </DrinkCon>
    )
}
export default Drink;