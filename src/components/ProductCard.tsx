import { IProduct } from "../types";
import { useState } from "preact/hooks";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [details, setDetails] = useState(false);

  const toggle = () => setDetails((prev) => !prev);

  return (
    <div className="border rounded mb-2 p-3">
      <h2 className="lext-lg">{product.title}</h2>
      <p className="font-bold">{product.price}</p>
      <div class="p-1.5 bg-red-400 rounded-md w-28 hover:bg-red-300 m-1.5">
        <a href={`/product/${product.id}`}>Open product</a>
      </div>
      <button
        onClick={toggle}
        className="border py-2 px-4 bg-red-200 rounded-md hover:bg-red-100 m-1.5"
      >
        Toggle Description
      </button>
      {details && <p>{product.description}</p>}
    </div>
  );
}
