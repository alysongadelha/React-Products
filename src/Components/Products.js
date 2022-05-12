import React from "react";
import styles from "./Products.module.css";
import Head from "./Head";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fecthProducts(url) {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
      } catch (err) {
        setError("Erro ao carregar a API");
      } finally {
        setLoading(false);
      }
    }

    fecthProducts("https://ranekapi.origamid.dev/json/api/produto");
  }, []);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (products == null) return null;
  return (
    <section className={`${styles.products} animationLeft`}>
      <Head title="DrLysn" description="Website description" />
      {products.map((product) => (
        <Link to={`product/${product.id}`} key={product.id}>
          <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          <h1 className={styles.name}>{product.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Products;
