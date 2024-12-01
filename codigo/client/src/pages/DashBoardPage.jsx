import Header from '../components/Header';
import Menu from '../components/Menu';  // Componente do Menu Lateral
import BookRender from '../components/BookRender';  // Componente do BookRender
import { ToastContainer } from 'react-toastify'; // Importação do toastify
import 'react-toastify/dist/ReactToastify.css'; // Estilo do Toastify

const DashboardPage = () => {


    return (
        <>
            <Header />

            <div style={{ display: 'flex', marginTop: '80px' }}>
                <div style={{ width: '20%', padding: '20px' }}>
                    <Menu />
                </div>

                <div style={{ width: '80%', padding: '20px' }}>
                    <BookRender title="Recomendados:" />
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default DashboardPage;
