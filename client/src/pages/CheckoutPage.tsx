import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Checkout from '../components/Checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LmLicGzVySvS8uEC8mSAtESE4twBHyydvu1dTxNmTglyZXGledvw6rpIyr35SINJBMASc3AejFmPVRQU2twSWx500vz0kdYJi');

export default function CheckoutPage() {

  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};