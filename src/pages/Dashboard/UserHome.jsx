import useAuth from "../../hooks/useAuth";

const UserHome = () => {

    const {user} = useAuth()

    return (
        <div>
            <h3 className="text-2xl font-medium mt-5 text-center">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </h3>
        </div>
    );
};

export default UserHome;