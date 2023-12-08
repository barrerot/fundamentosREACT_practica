import { useParams } from "react-router-dom";
import Content from "../../../components/shared/layout/Content";
function AdvertPage(){
    const params =useParams();
    return<Content title="Advert Detail">
        <div>Advert Detail{params.advertId} goes here..</div>
    </Content>
}
export default AdvertPage;