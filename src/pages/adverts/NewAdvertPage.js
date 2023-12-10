import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TagsSelect from "../../components/shared/TagsSelect";
import { createAdvert } from "./service";

function NewAdvertPage() {
  const [name, setName] = useState("");
  const [sale, setSale] = useState(true);
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);
  const [photo, setPhoto] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSaleChange = (event) => {
    setSale(event.target.value === "true");
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTagsChange = (selectedTags) => {
    setTags(selectedTags);
  };

  const handlePhotoChange = (event) => {
    // Aquí  lógica para manejar el cambio de la foto
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const advert = await createAdvert({ name, sale, price, tags });
      navigate("/adverts/" + advert.id);
    } catch (error) {
      // Manejo del error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          id="nombre"
          name="nombre"
        />
        <br />
        <br />

        <label htmlFor="precio">Precio:</label>
        <input
          value={price}
          onChange={handlePriceChange}
          type="number"
          id="precio"
          name="precio"
        />
        <br />
        <br />

        <label htmlFor="sale">Venta:</label>
        <select id="sale" name="sale" value={sale} onChange={handleSaleChange}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <br />
        <br />

        <TagsSelect onTagsChange={handleTagsChange} />
        <br />
        <br />

        <label htmlFor="photo">Foto del Anuncio:</label>
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={handlePhotoChange}
        />
        <br />
        <br />

        <input type="submit" value="Crear Anuncio" />
      </form>
    </div>
  );
}

export default NewAdvertPage;
