import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Carditems } from "../../components/card-item";

export function Products() {
  const [products, setProducts] = useState([]);

  const getProductsPrices = async () => {
    const { data: data } = await api.get(`prices`).then((data) => data);

    return data.data.map((item) => {
      if (item.active) {
        return {
          id_price: item.id,
          amount: item.unit_amount,
          product_id: item.product,
        };
      }
    });
  };

  const getProductsFormatted = async (item) => {
    const { data } = await api
      .get(`products/${item.product_id}`)
      .then((data) => data);
    return {
      id: item.product_id,
      currency: "BRL",
      price_id: item.id_price,
      name: data.name,
      price: (item.amount/100).toLocaleString('pt-br', {minimumFractionDigits: 2}),
      image: data.images[0],
      description: data.description
    };
  };

  const handlerProducts = async () => {
    let promises = [];
    const result = await getProductsPrices();
    result.map((product) => {
      promises.push(getProductsFormatted(product));
    });
    const teste = await Promise.all(promises);
    console.log(teste);
    setProducts(teste);
  };

  useEffect(() => {
    handlerProducts();
  }, []);

  return (
    <div className="w-full bg-blend-color">
      {products.map((item) => (
        <Carditems item={item}/>
      ))}
    </div>
  );
}
