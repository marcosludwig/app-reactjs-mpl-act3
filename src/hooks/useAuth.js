import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const useAuth = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfoStorage = localStorage.getItem('userInfo');
    if (userInfoStorage !== null) {
      let userInfo = JSON.parse(userInfoStorage)
      if ('authorization' in userInfo) {
        setUserLogged(true);
      }
      else {
        navigate('/login');
      }
    }
    setLoading(false)

  }, [navigate])

  const loginUser = async (inputValues) => {
    const response = await api.post('/login', inputValues);
    console.log(response);
    if ('authorization' in response) {
      localStorage.setItem('userInfo', JSON.stringify(response));
      navigate('/');
      setUserLogged(true);
    }
    else
      alert("email ou senha inválidos!");
  };

  const logoutUser = () => {
    setUserLogged(false);
    localStorage.clear();
    navigate('/login')
  }

  return { userLogged, loading, loginUser, logoutUser }
}

export default useAuth;