import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Product.module.css";

const Product = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fechProduct(url) {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (err) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fechProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (product == null) return null;
  return (
    <section className={`${styles.product} animationLeft`}>
      <Head
        title={`DrLysn | ${product.nome}`}
        description={`DrLysn | It's a product: ${product.nome}`}
      />
      <div>
        {product.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{product.nome}</h1>
        <span className={styles.price}>R$ {product.preco}</span>
        <p className={styles.description}>{product.descricao}</p>
      </div>
    </section>
  );
};

export default Product;
