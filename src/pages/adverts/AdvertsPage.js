import React, { useEffect, useState } from 'react';
import './AdvertsPage.css';
import { getLatestAdverts } from './service';
import Button from "../../components/shared/Button";
import { Link } from 'react-router-dom';

function AdvertsPage() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getLatestAdverts().then(adverts => setAdverts(adverts));
  }, []);

  return (
    <div className="advertsPage">
      {adverts.length ?
        <ul style={{ listStyle: 'none', border: '1px solid blue' }}>
          {adverts.map((advert) => (
            <li key={advert.id}>
              <Link to={"/adverts/" + advert.id}>
                {advert.name}
                <b><br/>precio:</b>{advert.price}€ 
                <b><br/>tags:</b>
                {advert.tags.map((tag, index) => (
                  <span key={index} className='tag-span'> {tag} </span>
                ))}
                <b><br/>tipo:</b>{advert.sale ? "es de venta" : "es de compra"}
                <br/>
              </Link>
            </li>
          ))}
        </ul>
        : <Button variant="primary">Da de alta el tuyo</Button>
      }
    </div>
  );
}

export default AdvertsPage;
