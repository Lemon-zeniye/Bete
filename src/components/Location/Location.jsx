import { LocContainer , LocH1, Imgmap, InfoCon, Info, InCon, Icon, Footer, FImg} from "./LocationStyle";
import map from "../../images/map1.png";
import Ins from "../../images/instagram.png";
import Tik from "../../images/tik-tok.png";
import Fac from "../../images/facebook.png";
import Loc from "../../images/pin.png";
import Pho from "../../images/phone-call.png";
import Ema from "../../images/email.png";

const Location = ({night}) => {
    return(
        <>
        <LocContainer id="LOCATION" night={night}>
            <LocH1>Contact-Us</LocH1>
            <InfoCon>
                <Info>
                    <InCon>
                        <Icon src={Loc} />
                        <h3>Location</h3>
                        <p>Addis Ababa Goro Square</p>
                    </InCon>
                    <InCon>
                        <Icon src={Pho} />
                        <h3>Call Us</h3>
                        <p>0913923591</p>
                        <p>0923983099</p>
                    </InCon>
                    <InCon>
                        <Icon src={Ema} />
                        <h3>Email Us</h3>
                        <p>eMe777Be @gmail.com</p>
                    </InCon>
                </Info>
                <Imgmap src={map} /> 
            </InfoCon>
        </LocContainer>
        <Footer night={night} >
            <FImg src={Tik} />
            <FImg src={Ins} />
            <FImg src={Fac} />
        </Footer>
        </>
    )
}
export default Location;
