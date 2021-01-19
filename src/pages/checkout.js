import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "../components/checkout-form/checkout-form"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Checkout = ({ location }) => {
  const promise = loadStripe(process.env.STRIPE_PUBLIC_KEY);
console.log(promise)
  return (
    <Layout location={location}>
      <SEO title="Checkout" />
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Layout>
  )
}

export { Checkout as default }
