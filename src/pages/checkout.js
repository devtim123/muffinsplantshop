import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "../components/checkout-form/checkout-form"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Checkout = ({ location }) => {
  const promise = loadStripe(
    "pk_test_51IBQUiLURbzVqlUIXy5j7hwOhIxlxCZQXqxFGRDZlJqjRvgOa5UY6LYuN5BuZL6JuKW5sEB0jm2jHMKLzrc1NQYM00MclV8fTy"
  )
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
