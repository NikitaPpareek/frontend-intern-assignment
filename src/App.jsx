
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Products from "./components/Products";
import Modal from "./components/Modal";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    sort: "",
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(filters.search.toLowerCase())
    )
    .filter((p) =>
      filters.category === "all" ? true : p.category === filters.category
    )
    .sort((a, b) => {
      if (filters.sort === "low-high") return a.price - b.price;
      if (filters.sort === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <Header />

      <div style={{ width: "100%", padding: "20px" }}>
        <Controls
          categories={[
            "all",
            ...new Set(products.map((p) => p.category)),
          ]}
          onChange={(updatedFilters) =>
            setFilters({
              search: updatedFilters.query,
              category: updatedFilters.category,
              sort: updatedFilters.sort,
            })
          }
        />
      </div>

      <Products
        products={filteredProducts}
        loading={loading}
        onProductClick={setSelectedProduct}
      />

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
