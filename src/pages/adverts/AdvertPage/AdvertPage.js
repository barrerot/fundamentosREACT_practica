import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Content from "../../../components/shared/layout/Content";
import { getAdvert, deleteAdvert } from "../service";
import ConfirmModal from "../../../components/shared/ConfirmModal ";
import Button from "../../../components/shared/Button";

function AdvertPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [advert, setAdvert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAdvert(params.advertId)
      .then((advert) => setAdvert(advert))
      .catch((error) => {
        if (error.status === 404) {
          navigate("/404");
        }
      });
  }, [navigate, params.advertId]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = () => {
    deleteAdvert(params.advertId)
      .then(() => {
        navigate("/adverts");
      })
      .catch((error) => {
        console.error("Error al borrar el anuncio", error);
      });
  };

  return (
    <Content title="Advert Detail">
      <div>
        {advert && (
          <div>
            <img
              src={advert.photo}
              alt={advert.name}
              width={150}
              height={200}
            />
            <br />
            <b>Nombre del articulo:</b> <h2>{advert.name}</h2>
            <b>Precio del articulo:</b> {advert.price}€<br />
            <b>tipo:</b> {advert.sale ? "es de venta" : "es de compra"}
            <br />
            <b>tags:</b>
            {advert.tags.map((tag, index) => (
              <span key={index} className="tag-span">
                {" "}
                {tag}{" "}
              </span>
            ))}
            <br />
            <Button onClick={openModal}>Borrar Anuncio</Button>
            <ConfirmModal
              isOpen={isModalOpen}
              onClose={closeModal}
              onConfirm={() => {
                handleDelete();
                closeModal();
              }}
            >
              <p>¿Estás seguro de que quieres borrar este anuncio?</p>
            </ConfirmModal>
          </div>
        )}
      </div>
    </Content>
  );
}

export default AdvertPage;
