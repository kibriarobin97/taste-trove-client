import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminHome = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })
    console.log(stats)

    return (
        <div>
            <h3 className="text-2xl font-medium mt-5 text-center">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </h3>
            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats?.revenue}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Customers</div>
                    <div className="stat-value">{stats?.users}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total Menu</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats?.orders}</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;