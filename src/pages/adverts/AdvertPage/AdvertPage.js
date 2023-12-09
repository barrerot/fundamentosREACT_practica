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
    },[navigate,params.advertId]);
    return<Content title="Advert Detail">
        <div>Advert Detail{params.advertId} goes here..
        {advert&& <div>{/*JSON.stringify(advert)*/}<img src={advert.photo}width={150} height={200}></img><br/><b>Nombre del articulo:</b><h2>{advert.name}</h2><b>Precio del articulo:</b>{advert.price}€<br/><b>tipo:</b>{advert.sale ? "es de venta" : "es de compra"}<br/><b>tags</b>
        {advert.tags.map((tag, index) => (
                  <span key={index} className='tag-span'> {tag} </span>
                ))}</div>}
        </div>
    </Content>
}
export default AdvertPage;