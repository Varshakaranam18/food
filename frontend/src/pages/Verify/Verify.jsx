import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'
const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const order = searchParams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

   
    const verifyPayment = async ()=>{
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, order });
            console.log('Verification response:', response.data); // Logging response for debugging
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Error verifying payment:", error); // Logging error for debugging
            navigate("/error");
        }

    }
    useEffect(()=>{
        verifyPayment();
    },[])

  return (
    <div className='verify'>
       <div className="spinner">

       </div>

    </div>
  )
}

export default Verify