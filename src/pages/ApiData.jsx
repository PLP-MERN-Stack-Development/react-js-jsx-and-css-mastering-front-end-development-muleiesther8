import { useEffect, useState } from "react";
import Card from "../components/Card";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600 mt-10">Loading products...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        🛒 Product Listings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <Card key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              {product.description.slice(0, 70)}...
            </p>
            <p className="text-blue-500 font-bold">${product.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ApiData;
