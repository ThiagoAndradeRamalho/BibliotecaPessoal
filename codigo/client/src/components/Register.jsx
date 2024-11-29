import { Container, Grid, Typography, Box, TextField, Button, CircularProgress, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/image.png';
import '../styles/Register.css';
import { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Register = ({ formData = {}, handleChange, cursos = [] }) => {
    const navigate = useNavigate(); // Usando o hook useNavigate no lugar do useHistory
    const [isLoading, setIsLoading] = useState(false); // Estado de carregamento para o envio
    const [errorMessage, setErrorMessage] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null);  // Limpa a mensagem de erro

        try {
            // AlunoService.createAluno(formData);  // Descomente se implementar o serviço
            navigate('/login');
        } catch (error) {
            console.error('Erro ao cadastrar aluno', error);
            setErrorMessage('Erro ao realizar cadastro. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    // Enquanto os dados não estiverem carregados, mostra uma tela de loading
    if (isLoading) {
        return <Typography>Carregando...</Typography>;
    }

    return (
        <Container maxWidth="md" className="register-container">
            <Grid container spacing={2} style={{ height: '85vh' }}>
                <Grid item xs={12} md={6} className="login-image-logo-container">
                    <img src={logo} alt="Logo PUC Minas" />
                </Grid>
                <Grid item xs={12} md={6} className="register-form" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h4" className="register-title" gutterBottom>
                        Cadastro
                    </Typography>

                    <Box component="form" onSubmit={handleRegister} sx={{ width: '100%' }}>
                        <Grid container spacing={1} sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Nome"
                                    margin="normal"
                                    variant="outlined"
                                    value={formData.nome || ''}
                                    onChange={(e) => handleChange('nome', e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="E-mail"
                                    type="email"
                                    margin="normal"
                                    variant="outlined"
                                    value={formData.email || ''}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputMask
                                    mask="999.999.999-99"
                                    value={formData.cpf || ''}
                                    onChange={(e) => handleChange('cpf', e.target.value)}
                                >
                                    {(inputProps) => (
                                        <TextField
                                            {...inputProps}
                                            fullWidth
                                            label="CPF"
                                            margin="normal"
                                            variant="outlined"
                                            required
                                        />
                                    )}
                                </InputMask>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="RG"
                                    margin="normal"
                                    variant="outlined"
                                    value={formData.rg || ''}
                                    onChange={(e) => handleChange('rg', e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Endereço"
                                    margin="normal"
                                    variant="outlined"
                                    value={formData.endereco || ''}
                                    onChange={(e) => handleChange('endereco', e.target.value)}
                                    required
                                />
                            </Grid>

                            {/* Novo campo de autor ou leitor */}
                            <Grid item xs={12} sm={12}>
                                <FormControl fullWidth margin="normal" required>
                                    <InputLabel>Função</InputLabel>
                                    <Select
                                        value={formData.funcao || ''}
                                        onChange={(e) => handleChange('funcao', e.target.value)}
                                    >
                                        <MenuItem value="autor">Autor</MenuItem>
                                        <MenuItem value="leitor">Leitor</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Senha"
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                    value={formData.senha || ''}
                                    onChange={(e) => handleChange('senha', e.target.value)}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Box mt={2} mb={1} style={{ padding: '2rem' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ backgroundColor: '#9e9e9e', '&:hover': { backgroundColor: '#757575' } }} 
                                fullWidth
                                disabled={isLoading}
                                startIcon={isLoading && <CircularProgress size={20} color="inherit" />}
                            >
                                Registrar
                            </Button>
                        </Box>
                        <Typography align="center" variant="body2" color="textSecondary" className="register-redirect-options">
                            Já tem uma conta?
                            <Link to="/login" style={{ fontWeight: 'bold', color: '#1976d2', marginLeft: 5 }}>
                                Faça login
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar
                open={errorMessage}
                autoHideDuration={6000}
                onClose={() => setErrorMessage(null)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setErrorMessage(null)} severity="error" sx={{ width: '100%' }}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Register;
