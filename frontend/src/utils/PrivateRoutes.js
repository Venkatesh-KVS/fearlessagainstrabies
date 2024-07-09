import axios from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BASE_URL from '../apis/index';

const PrivateRoutes = ({ auth, setAuth, setDoctorId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const doctorToken = localStorage.getItem('doctorToken');

    // If doctorToken is not found in localStorage, navigate to login
    if (!doctorToken) {
      navigate('/login');
      return;
    }

    axios.get(`${BASE_URL}/doctors/verify-token`, {
      headers: {
        Authorization: `Bearer ${doctorToken}`
      }
    }).then((res) => {
      if (res.data.Status === "ok") {
        setAuth(true);
        setDoctorId(res.data.doctorId);
      } else {
        setAuth(false);
        navigate('/login');
      }
    })
      .catch((err) => {
        console.log("e1 catched!");
      })
  }, [setAuth, setDoctorId, navigate]);

  return (<Outlet />)
}

export default PrivateRoutes;