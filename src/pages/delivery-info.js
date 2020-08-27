import React from 'react'
import Layout from '../components/layout/layout';

const DeliveryInfo = () => {
    return (
        <Layout>
            <div className="content-container">
                <h2 className="heading-first">Delivery Info</h2>
                <p>Muffin's Plants is a e-commerce demo site made by <a href="https://nancyhuynh.com">Nancy Huynh</a></p>
                <p>It is built with Gatsby.js</p>
                <p>Sorry you can't buy any of the plants on this site</p>
            </div>
        </Layout>
    )
}

export { DeliveryInfo as default };