import { useState } from "react";
import Layout from "../../components/shared/layout/Layout"; 

function NewAdvertPage(event) {
    const[name,setName]=useState('');
    const[sale,setSale]=useState(true);
    const[price,setPrice]=useState(0);
    const[tags,setTags]=useState('');
    const[photo,setPhoto]=useState('');
    const handleNameChange=() =>{
setName(event.target.value);
    }
    const handleSaleChange=(event) =>{
        setSale(event.target.value);
            }
            const handlePriceChange=(event) =>{
                setPrice(event.target.value);
                    }
                    const handleTagsChange=(event) =>{
                        setTags(event.target.value);
                            }
                            const handlePhotoChange=(event) =>{
                                setPhoto(event.target.value);
                                    }
    return (
        <div>
            <form>
                {/* Campo para el nombre */}
                <label htmlFor="nombre">Nombre:</label>
                <input value={name} onChange={handleNameChange} type="text" id="nombre" name="nombre" /><br /><br />

                {/* Campo para el precio */}
                <label htmlFor="precio">Precio:</label>
                <input value={price} onChange={handlePriceChange} type="number" id="precio" name="precio" /><br /><br />

                {/* Campo para determinar si es de venta */}
                <label htmlFor="sale">Venta:</label>
                <select id="sale" name="sale" value={sale} onChange={handleSaleChange}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select><br /><br />

                {/* Campo para los tags */}
                <label htmlFor="tags">Tags:</label>
                <select multiple id="tags" name="tags" value={tags} onChange={handleTagsChange}>
                    <option value="lifestyle">lifestyle</option>
                    <option value="mobile">mobile</option>
                    <option value="motor">motor</option>
                    <option value="work">work</option>
                </select><br /><br />

                {/* Campo para seleccionar la foto del anuncio */}
                <label htmlFor="photo">Foto del Anuncio:</label>
                <input type="file" id="photo" name="photo" value={photo} onChange={handlePhotoChange} /><br /><br />

                {/* Botón para enviar el formulario */}
                <input type="submit" value="Crear Anuncio" />
            </form>
        </div>
    );
}

export default NewAdvertPage;
