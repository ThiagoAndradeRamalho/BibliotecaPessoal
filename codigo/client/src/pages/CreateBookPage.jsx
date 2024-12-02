import { useState } from 'react'; 
import { Grid, TextField, Button, Select, MenuItem, Typography, Card, CardContent } from '@mui/material';
import Header from '../components/Header';
import LivroService from '../services/BookService.jsx'; 
import AutorService from '../services/AutorService.jsx';
import UsuarioService from '../services/UsuarioService.jsx';

const CreateBookPage = () => {
    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        categoria: '',
        imagem: '', 
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, imagem: e.target.value }); 
    };

    const handleSubmit = async () => {
        const usuarioId = 1; 
        
        setLoading(true);
        setError(null);
    
        try {
            await AutorService.create({usuarioId});
    
            const bookData = {
                titulo: formData.titulo,
                descricao: formData.descricao,
                categoria: formData.categoria,
                imagem: formData.imagem,
                autorId: usuarioId, 
            };
            
            await LivroService.create(bookData);
            alert('Livro criado com sucesso!');
    
            setFormData({
                titulo: '',
                descricao: '',
                categoria: '',
                imagem: '',
            });
        } catch (error) {
            setError('Erro ao criar o autor ou o livro. Tente novamente.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div style={{ width: '90vw', padding: '2rem', backgroundColor: '#fff', marginTop: '10rem', color: 'black', borderRadius: '8px' }}>
                <Typography variant="h4" gutterBottom>Adicionar Novo Livro</Typography>
                <Grid container spacing={4} style={{ marginTop: '2rem' }}>
                    <Grid item xs={12} md={8}>
                        <Card style={{ padding: '1.5rem', borderRadius: '8px' }}>
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Título"
                                            name="titulo"
                                            value={formData.titulo}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Descrição"
                                            name="descricao"
                                            value={formData.descricao}
                                            onChange={handleInputChange}
                                            multiline
                                            rows={4}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Select
                                            fullWidth
                                            name="categoria"
                                            value={formData.categoria}
                                            onChange={handleInputChange}
                                            displayEmpty
                                            required
                                        >
                                            <MenuItem value="" disabled>Selecione a Categoria</MenuItem>
                                            <MenuItem value="Drama">Drama</MenuItem>
                                            <MenuItem value="Suspense">Suspense</MenuItem>
                                            <MenuItem value="Comedi">Comédia</MenuItem>
                                            <MenuItem value="Romance">Romance</MenuItem>                                               
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="URL da Imagem"
                                            name="imagem"
                                            value={formData.imagem}
                                            onChange={handleImageChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSubmit}
                                            style={{ marginTop: '1rem' }}
                                            disabled={loading}
                                        >
                                            {loading ? 'Criando...' : 'Criar Livro'}
                                        </Button>
                                        {error && <Typography color="error" style={{ marginTop: '1rem' }}>{error}</Typography>}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default CreateBookPage;
