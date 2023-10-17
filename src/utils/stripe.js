import { loadStripe } from "@stripe/stripe-js";
const configValue = "";
export async function getStripeJs(){
return await loadStripe(configValue)
}
