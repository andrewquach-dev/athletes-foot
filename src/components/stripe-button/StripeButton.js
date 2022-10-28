import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ly0UiCuzKM0m6wo4Pcta1z98tCNTRYd6KzbB0RYCp5zeg8EUg4iEBQ6Uh7hddqMmkqCx5le6sl7o3kbmsgHMaTe00tdCDk6aY';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Athletes Foot'
            billingAddress
            shippingAddress
            image='https://www.svgrepo.com/show/373017/foot.svg'
            description={`Your total is $ {price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;