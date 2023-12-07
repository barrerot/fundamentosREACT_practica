import { useEffect, useState } from 'react';
import'./AdvertsPage.css';
import { getLatestAdverts } from './service';
import Button from"../../components/shared/Button";
import Layout from "../../components/shared/layout/Layout"; 
import { logout } from '../auth/service';
import { Link } from 'react-router-dom';

function AdvertsPage(){
  const[adverts,setAdverts]=useState([]);
    useEffect(() => {
      getLatestAdverts().then(adverts=>setAdverts(adverts));

    },[]);
      
   
    return (
      
    <div className="advertsPage">
      {/*<Button onClick={handleLogout}>Logout</Button>*/}
      {adverts.length?
        <ul style={{ listStyle: 'none', border: '1px solid blue'}}>
            {
                adverts.map(
                  (advert) => 
                  
                     <Link to={"/adverts/"+advert.id}>{advert.name}</Link>
                  
                  
                  
                )
            }
        
        </ul>:<Button variant="primary">Da de alta el tuyo</Button>}
    </div> 
  
    );

}
export default AdvertsPage;