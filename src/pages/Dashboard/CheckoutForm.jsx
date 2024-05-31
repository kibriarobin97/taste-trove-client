import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {

    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const { user } = useAuth()
    const navigate = useNavigate()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)

                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'Pending'
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log(res.data)
                refetch()
                if(res.data?.paymentResult?.insertedId){
                    toast.success('Payment successful')
                    navigate('/dashboard/payment-history')
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-1/2 my-10 mx-auto">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit"
                disabled={!stripe || !clientSecret}
                className="btn bg-[#D1A054] btn-sm btn-ghost font-semibold text-white mt-5">
                Payment
            </button>
            <p className="text-red-500">{error}</p>
            {
                transactionId && <p className="text-green-600">Your transaction Id: {transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;