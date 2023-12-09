import { useNavigate, useParams } from "react-router-dom";
import Content from "../../../components/shared/layout/Content";
import { useEffect, useState } from "react";
import{getAdvert}from "../service";
function AdvertPage(){
    const params =useParams();
    const navigate=useNavigate();
    const[advert,setAdvert]=useState(null)
    useEffect(() =>{
        getAdvert(params.advertId).then(advert=>setAdvert(advert)).catch(error=>{
            if(error.status==404){
                navigate("/404");
            }
        });
    },[]);
    return<Content title="Advert Detail">
        <div>Advert Detail{params.advertId} goes here..
        {advert&& <code>{JSON.stringify(advert)}</code>}
        </div>
    </Content>
}
export default AdvertPage;