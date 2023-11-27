

import { useState } from 'react';
import'./AdvertsPage.css';
import { getLatestAdverts } from './service';

function AdvertsPage(){
  const[adverts,setAdverts] = useState([]);
    const /*adverts=[
        {
          "id": "dcc862fd-5894-4652-bde8-766ecdba5a50",
          "createdAt": "2023-11-19T12:55:11.000Z",
          "name": "cama",
          "sale": true,
          "price": 950,
          "tags": [
            "lifestyle"
          ],
          "photo": "http://localhost:3001/public/1700398511967-534214305.jpg"
        },
        {
          "id": "40381749-3360-46e2-ad3f-d8421440f785",
          "createdAt": "2023-11-19T12:56:27.000Z",
          "name": "iphone13",
          "sale": true,
          "price": 570,
          "tags": [
            "mobile"
          ],
          "photo": "http://localhost:3001/public/1700398587378-347191206.jpg"
        }
      ];*/
      getLatestAdverts().then(adverts=>setAdverts(setAdverts));
    return (
    <div className="advertsPage">
        <ul style={{ listStyle: 'none', border: '1px solid blue'}}>
            {
                adverts.map((advert )=><li >{advert.name}</li>)
            }
        
        </ul>
    </div> 
    );

}
export default AdvertsPage;