import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import BookRender from '../components/BookRender';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LibraryPage = () => {
    const [livrosUsuario, setLivrosUsuario] = useState([]);
    const [livrosPostados, setLivrosPostados] = useState([]);

    const fetchLivros = async () => {
        try {
            const response = await fetch('http://localhost:5000/livros');
            if (!response.ok) {
                throw new Error('Erro ao buscar livros');
            }
            const data = await response.json();

            const livrosDoUsuario = data.filter(livro => livro.pertenceAoUsuario);
            const livrosQuePostou = data.filter(livro => livro.postadoPeloUsuario);

            setLivrosUsuario(livrosDoUsuario);
            setLivrosPostados(livrosQuePostou);
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
                        flex: 1,
                        padding: '20px',
                        overflowY: 'auto'
                        
                    }}
                >
                    <h2>Biblioteca</h2>
                    <div style={{ marginBottom: '30px' }}>
                        <BookRender title="Livros que você tem:" livros={livrosUsuario} />
                    </div>
                    <div>
                        <BookRender title="Livros que você postou:" livros={livrosPostados} />
                    </div>
                </div>
            <ToastContainer />
        </>
    );
};

export default LibraryPage;
