// Importando a função do loadStripe

import { getStripeJs } from "../../utils/stripe";

 export async function checkout() {
    const stripe = await getStripeJs();

    if(cartItem.length === 0){
      alert("Adicione ao menos 1 item ao carrinho")
      return
    }

    stripe?.redirectToCheckout({
      lineItems: formattedProductsForStripeRedirectCheckout(),
      mode: "payment",
      successUrl: "http://localhost:3000", // Defina uma página para apresentar sucesso no pagamento
      cancelUrl: "http://localhost:3000", // Defina uma página para apresentar erro no pagamento
    });
  }

  function formattedProductsForStripeRedirectCheckout() {
    const id_price = cartItem.map((value) => value.price);

    return id_price.reduce((acc, item) => {
      if (item) {
        return [...acc, {
          price: item,
          quantity: 1,
        }]
      }

      return acc;
    }, []);
  }
