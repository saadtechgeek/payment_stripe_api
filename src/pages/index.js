import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const promise = loadStripe("pk_test_51Hw43jD4nu4HBHFEwBBKxLhHvcjwQ9ctapobZRK4yFvrzTkZCRYMUkUcSnskbxXJSIpvwWtAsEsKJQ43UtmZE3d200R8PsbCQW");

export default function Home() {
    return <div>
        <Elements stripe={promise}>
            <CheckoutForm />
        </Elements>
    </div>
}