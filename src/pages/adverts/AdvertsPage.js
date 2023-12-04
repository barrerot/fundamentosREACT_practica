import { useEffect, useState } from 'react';
import'./AdvertsPage.css';
import { getLatestAdverts } from './service';
import Button from"../../components/shared/Button";
import { logout } from '../auth/service';

function AdvertsPage({onLogout}){
  const[adverts,setAdverts]=useState([]);
    useEffect(() => {
      getLatestAdverts().then(adverts=>setAdverts(adverts));

    },[]);
      
    const handleLogout=async()=>{
      await logout();
      onLogout();
    }
    return (
    <div className="advertsPage">
      <Button onClick={handleLogout}>Logout</Button>
        <ul style={{ listStyle: 'none', border: '1px solid blue'}}>
            {
                adverts.map((advert )=><li >{advert.name}</li>)
            }
        
        </ul>
    </div> 
    );

}
export default AdvertsPage;