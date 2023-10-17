import { useState } from "react";
import { getStripeJs } from "../../utils/stripe";

export function Carditems({item}) {


    const [cartItem, setCartItem] = useState([])
    const payment = async (item)=>{


        
    const stripe = await getStripeJs();
    stripe?.redirectToCheckout({
      lineItems: [{
        price: item.price_id,
        quantity: 1,
      }],
      mode: "payment",
      successUrl: "http://localhost:3000", // Defina uma página para apresentar sucesso no pagamento
      cancelUrl: "http://localhost:3000", // Defina uma página para apresentar erro no pagamento
    });
    } 

  
   return(
    <div className="w-[12%] h-[350px] flex flex-col items-center text-center bg-gray-300 m-4" >
        <span className="font-bold text-sm m-3">{item.name}</span>
        <img src={item.image} alt="img" className="w-[50%] h-[100px]"/>
        <span className="text-sm text-black m-4">{item.description}</span>
        <span className="font-semibold text-sm text-black p-5">R$ {item.price}</span>
        <button className="w-[50%] h-[40px] bg-green-500 p-1"><span className="font-bold text-white" onClick={() =>payment(item)}>Comprar</span></button>
    </div>
   ) 
}
