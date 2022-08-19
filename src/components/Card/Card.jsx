import {CardContainer, Img, TitleCon, ImgCon} from "./CardStyle";
const Card = ({img, name, price, amharic}) => {
    return(
        <CardContainer>
            <ImgCon>
                <Img src={img} ></Img>
            </ImgCon>
            <TitleCon>
                <h3>{name} ({amharic})</h3>
                <h4>{price} Birr</h4>
            </TitleCon>
        </CardContainer>
    )
}
export default Card;