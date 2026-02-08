import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/Products";

const Home = () => {
  const products = getProducts();

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">From zero ideas to real products.</h1>
        <p className="home-subtitle">
          Zero To Store is a simple online shop built for people who value
          quality, clarity, and ease.
        </p>
      </div>

      <div className="container">
        <h2 className="page-title">Our Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
