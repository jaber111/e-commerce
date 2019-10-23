import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton =( {price} )=>{
    const  priceForStripe = price * 100;
    const publishableKey = 'pk_test_ZNEYoAipRZhUIzyrYEgNNsBJ00KK8IG94r';
   const onToken = token =>{
        console.log(token);
        alert('payment Successful')
    };
    return(
        <div style={{top:"400px",position:"absolute",right:"10px"}}>
        <StripeCheckout
            label='Pay Now'
            name={'Bay Clothing Lost.'}
            billingAddress
            shippingAddress
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>
        </div>
    )
};
export default StripeCheckoutButton;