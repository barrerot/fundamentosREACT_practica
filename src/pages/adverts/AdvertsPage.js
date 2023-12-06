import { useEffect, useState } from 'react';
import'./AdvertsPage.css';
import { getLatestAdverts } from './service';
import Button from"../../components/shared/Button";
import Layout from "../../components/shared/layout/Layout"; 
import { logout } from '../auth/service';

function AdvertsPage(props){
  const[adverts,setAdverts]=useState([]);
    useEffect(() => {
      getLatestAdverts().then(adverts=>setAdverts(adverts));

    },[]);
      
   
    return (
      <Layout tittle="Los anuncios que hay.."{...props}>
    <div className="advertsPage">
      {/*<Button onClick={handleLogout}>Logout</Button>*/}
      {adverts.length?
        <ul style={{ listStyle: 'none', border: '1px solid blue'}}>
            {
                adverts.map((advert )=><li >{advert.name}</li>)
            }
        
        </ul>:<Button varuant="primary">Da de alta el tuyo</Button>}
    </div> 
    </Layout>
    );

}
export default AdvertsPage;