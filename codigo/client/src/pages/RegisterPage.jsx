import React from 'react';
import Register from '../components/Register';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UsuarioService.jsx';
import { toast, ToastContainer } from 'react-toastify'; // Ajuste aqui

const RegisterPage = () => {
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const handleRegister = async (formData) => {
        setLoading(true);

        if (formData.senha !== formData.confirmSenha) {
            toast.error('As senhas não coincidem!');
            setLoading(false);
            return;
        }

        try {
            await UserService.create    (formData);
            toast.success('Usuário registrado com sucesso!');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            toast.error('Erro ao registrar usuário. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Register
                logo={logo}
                loading={loading}
                onFinish={handleRegister}
            />
            <ToastContainer /> {/* Ajuste aqui */}
        </div>
    );
};

export default RegisterPage;
