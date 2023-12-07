import Layout from "../../components/shared/layout/Layout"; 
function NewAdvertPage() {
    return (
        <div>
            <form>
                {/* Campo para el nombre */}
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" /><br /><br />

                {/* Campo para el precio */}
                <label htmlFor="precio">Precio:</label>
                <input type="number" id="precio" name="precio" /><br /><br />

                {/* Campo para determinar si es de venta */}
                <label htmlFor="sale">Venta:</label>
                <select id="sale" name="sale">
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select><br /><br />

                {/* Campo para los tags */}
                <label htmlFor="tags">Tags:</label>
                <select multiple id="tags" name="tags">
                    <option value="lifestyle">lifestyle</option>
                    <option value="mobile">mobile</option>
                    <option value="motor">motor</option>
                    <option value="work">work</option>
                </select><br /><br />

                {/* Botón para enviar el formulario */}
                <input type="submit" value="Crear Anuncio" />
            </form>
        </div>
    );
}
export default NewAdvertPage;