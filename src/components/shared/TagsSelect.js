import React, { useState, useEffect } from "react";
import { getTags } from "../../pages/adverts/service"; // Asegúrate de que la ruta sea correcta

const TagsSelect = () => {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    getTags()
      .then((data) => {
        setTags(data);
      })
      .catch((error) => {
        console.error("Error al obtener las etiquetas:", error);
      });
  }, []);

  const handleChange = (event) => {
    // Obtiene todas las opciones seleccionadas
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value,
    );
    setSelectedTags(selectedOptions);
  };

  return (
    <div>
      <label htmlFor="tags-select">Elige etiquetas:</label>
      <select
        multiple
        id="tags-select"
        value={selectedTags}
        onChange={handleChange}
      >
        <option value="">--Por favor elige una opción--</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagsSelect;
