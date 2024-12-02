import React from 'react';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AutoresPage = () => {
    const autores = [
        { id: 1, nome: 'J. K. Rowling', avaliacao: 4.9 },
        { id: 2, nome: 'George R. R. Martin', avaliacao: 4.8 },
        { id: 3, nome: 'J. R. R. Tolkien', avaliacao: 5.0 },
        { id: 4, nome: 'Agatha Christie', avaliacao: 4.7 },
        { id: 5, nome: 'Stephen King', avaliacao: 4.6 },
    ];

    return (
        <>
            <Header />

            <div
                style={{
                    marginTop: '120px',
                    padding: '20px',
                    height: 'calc(100vh - 120px)',
                    overflowY: 'auto',
                    color: 'black', 
                }}
            >
                <h2 style={{ color: 'black' }}>Autores</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {autores.map(autor => (
                        <div
                            key={autor.id}
                            style={{
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '15px',
                                width: 'calc(33.33% - 20px)', 
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#f9f9f9',
                                color: 'black', 
                            }}
                        >
                            <h3 style={{ margin: '0 0 10px', color: 'black' }}>{autor.nome}</h3>
                            <p style={{ margin: 0, color: 'black' }}>Avaliação: {autor.avaliacao} ⭐</p>
                        </div>
                    ))}
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default AutoresPage;
