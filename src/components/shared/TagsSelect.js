import React, { useState, useEffect } from "react";
import { getTags } from "../../pages/adverts/service";

const TagsSelect = ({ onTagsChange }) => {
  const [tags, setTags] = useState([]);

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
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value,
    );
    onTagsChange(selectedOptions);
  };

  return (
    <div>
      <label htmlFor="tags-select">Elige tags:</label>
      <select multiple id="tags-select" onChange={handleChange}>
        <option value="">--Por favor elige los tags--</option>
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
