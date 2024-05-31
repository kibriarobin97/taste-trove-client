import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payments = {} } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })

    console.log(payments)

    return (
        <div>
            <SectionTitle heading={'PAYMENT HISTORY'} subHeading={'At a Glance!'}></SectionTitle>
            <h3>Total Payment: {payments?.length}</h3>
        </div>
    );
};

export default PaymentHistory;