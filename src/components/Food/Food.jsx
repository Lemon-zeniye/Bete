import { FoodCon,FCon, H1, Div, Btn, Btnn,FoodC, MainDiv} from "./FoodStyle";
import { useState } from "react";

import img1 from "../../images/images (1).jpeg";
import img2 from "../../images/images (3).jpeg";
import img3 from "../../images/images (4).jpeg";
import img4 from "../../images/iii.png";
import img7 from "../../images/images (8).jpeg";
import img8 from "../../images/foll.jpeg";
//leal
import imgg1 from "../../images/tibs.jpeg";
import imgg2 from "../../images/fata3.jpeg";
import imgg3 from "../../images/enkulal.jpeg";
import imgg4 from "../../images/genfo.jpeg";
import imgg5 from "../../images/kinche.jpeg";
import imgg6 from "../../images/sigaFirfir.jpeg";
//background

import Card from "../Card/Card";

const datas = [
    {
        img: img4,
        name: "Rice",
        price: "60",
        amharic: "ሩዝ"
    },
    {
        img: img1,
        name: "Firfir",
        price: "60",
        amharic: "ፍርፍር"
    },
    {
        img: img7,
        name: "Pasta",
        price: "60",
        amharic: "ፓስታ"
    },
    {
        img: img3,
        name: "Tegabino",
        price: "70",
        amharic: "ተጋቢኖ"
    },
    {
        img: img2,
        name: "Shiro",
        price: "60",
        amharic: "ሽሮ"
    },
    {
        img: img8,
        name: "Foll",
        price: "60",
        amharic: "ፉል"
    },
]
const yeDatas = [
    {
        img: imgg1,
        name: "Tibs",
        price: "130",
        amharic: "ጥብስ"
    },
    {
        img: imgg6,
        name: "Siga Firfir",
        price: "100",
        amharic: "ስጋ ፍርፍር"
    },
    {
        img: imgg2,
        name: "Fata",
        price: "70",
        amharic: "ፋታ"
    },
    {
        img: imgg3,
        name: "Enkulal Firfr",
        price: "50",
        amharic: "እንቁላል ፍርፍር",
    },
    {
        img: imgg5,
        name: "Kinche",
        price: "60",
        amharic: "ቂንጬ"
    },
    {
        img: imgg4,
        name: "Genfo",
        price: "70",
        amharic: "ገንፎ"
    }
]
const Food = ({night}) => {
    const [act, setAct] = useState(true);
    return(
        <MainDiv id="FOOD" night={night}>
            <H1>Foods Menu</H1>
            <Div>
                <Btn act={act} onClick={() => setAct(true)}>Ye Tsom</Btn>
                <Btnn act={act} onClick={() => setAct(false)}>Ye Fisg</Btnn>
            </Div>
            <FCon>
                <FoodCon act={act}>
                    {
                        datas.map(data => (
                            <Card img={data.img} name={data.name} price={data.price} amharic={data.amharic} />
                        ))
                    }
                </FoodCon>
                <FoodC act={act}>
                    {
                        yeDatas.map(data => (
                            <Card img={data.img} name={data.name} price={data.price} amharic={data.amharic} />
                        ))
                    }
                </FoodC>
            </FCon>
    </MainDiv>
    )
}
export default Food;