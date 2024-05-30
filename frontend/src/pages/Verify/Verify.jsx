import React, { useContext, useEffect, useState } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const order = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, order });
            console.log('Verification response:', response.data); // Logging response for debugging
            if (response.data.success) {
                console.log("Payment successful, navigating to /myorders");
                navigate("/");
            } else {
                console.log("Payment not successful, navigating to /error");
                navigate("/error"); // Navigate to an error page or handle the error appropriately
            }
        } catch (error) {
            console.error("Error verifying payment:", error); // Logging error for debugging
            navigate("/error"); // Navigate to an error page or handle the error appropriately
        } finally {
            setLoading(false); // Ensure loading is set to false once the verification is complete
        }
    };

    useEffect(() => {
        verifyPayment();
    }, []);

    return (
        <div className='verify'>
            {loading ? <div className="spinner"></div> : <p>Verification complete. Redirecting...</p>}
        </div>
    );
};

export default Verify;
