import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import BookRender from '../components/BookRender';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashboardPage = () => {
    const [livros, setLivros] = useState([]);

    const fetchLivros = async () => {
        try {
            const response = await fetch('http://localhost:5000/livro');
            if (!response.ok) {
                throw new Error('Erro ao buscar livros');
            }
            const data = await response.json();
            setLivros(data);
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
            toast.error('Erro ao carregar os livros.');
        }
    };

    useEffect(() => {
        fetchLivros();
    }, []);

    return (
        <>
            <Header />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '120px', 
                    height: 'calc(100vh - 120px)',
                }}
            >
                <div
                    style={{
                        width: '20%',
                        minWidth: '250px',
                        padding: '20px',
                        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#f9f9f9',
                        marginTop: '5%', 
                    }}
                >
                    <Menu />
                </div>

                <div
                    style={{
                        flex: 1,
                        padding: '20px',
                        overflowY: 'auto',
                        marginTop: '5%', 
                    }}
                >
                    <BookRender title="Recomendados:" livros={livros} />
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default DashboardPage;
