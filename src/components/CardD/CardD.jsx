import { Container, CImg,CardTitle, CardText } from "./CardDStyle";

const CardD = ({img, name, price}) => {
    return(
        <Container>
            <CImg src={img} />
            <CardTitle>
            </CardTitle>
            <CardText>
                <p>{name}</p>
                <h4>{price} Birr</h4>
            </CardText>
        </Container>
    )
}
export default CardD;