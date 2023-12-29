import React, { useEffect, useState } from "react";
import "./AdvertsPage.css";
import { getLatestAdverts } from "./service";
import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";
import TagsSelect from "../../components/shared/TagsSelect"; 

function AdvertsPage() {
  const [adverts, setAdverts] = useState([]);
  const [filters, setFilters] = useState({ name: '', price: null, tags: [], sale: null });

  useEffect(() => {
    getLatestAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  const handleTagsChange = (selectedTags) => {
    setFilters({ ...filters, tags: selectedTags });
  };

  const filteredAdverts = adverts.filter((advert) => {
    return (filters.name ? advert.name.toLowerCase().includes(filters.name.toLowerCase()) : true) &&
           (filters.price ? advert.price <= filters.price : true) &&
           (filters.tags.length === 0 || filters.tags.some(tag => advert.tags.includes(tag))) &&
           (filters.sale !== null ? advert.sale === (filters.sale === 'venta') : true);
  });

  return (
    <div className="advertsPage">
      <div className="filters">
        <input
          type="text"
          name="name"
          placeholder="Nombre del anuncio"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio máximo"
          onChange={handleFilterChange}
        />
        <TagsSelect onTagsChange={handleTagsChange} /> 
        <select name="sale" onChange={handleFilterChange}>
          <option value="">Todos</option>
          <option value="venta">Venta</option>
          <option value="compra">Compra</option>
        </select>
      </div>
      {filteredAdverts.length ? (
        <ul style={{ listStyle: "none", border: "1px solid blue" }}>
          {filteredAdverts.map((advert) => (
            <li key={advert.id}>
              <Link to={"/adverts/" + advert.id}>
                {advert.name}
                <b>
                  <br />
                  Precio:
                </b>
                {advert.price}€
                <b>
                  <br />
                  Tags:
                </b>
                {advert.tags.map((tag, index) => (
                  <span key={index} className="tag-span">
                    {" "}
                    {tag}{" "}
                  </span>
                ))}
                <b>
                  <br />
                  Tipo:
                </b>
                {advert.sale ? "Venta" : "Compra"}
                <br />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Button variant="primary">Da de alta el tuyo</Button>
      )}
    </div>
  );
}

export default AdvertsPage;
