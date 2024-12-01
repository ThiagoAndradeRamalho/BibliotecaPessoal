import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import logo from '../assets/logo.png';
import '../styles/login.css';
import AuthService from '../services/AuthService';
import { toast, ToastContainer } from 'react-toastify';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const onFinish = async () => {
        setLoading(true);
        try {
            console.log(formData);
            await AuthService.login(formData.email, formData.senha);
            toast.success('Login bem-sucedido!');
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            toast.error('Credenciais inválidas ou erro ao tentar fazer login');
            console.error('Erro de login:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Login
                logo={logo}
                formData={formData}
                handleChange={handleChange}
                loading={loading}
                onFinish={onFinish}
            />
            <ToastContainer />
        </>
    );
};

export default LoginPage;
