/* eslint-disable react/prop-types */
import { Container, Grid, Typography, Box, TextField, Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/login.css';

const Register = ({ logo, loading, onFinish }) => {
    const [formData, setFormData] = useState({ nome: '', email: '', senha: '', confirmSenha: '' });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <Container
            maxWidth="md"
            className="login-container"
        >
            <Grid container spacing={2} style={{ height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} md={6} style={{ textAlign: 'center', backgroundColor: "#ebb764", height: '100%' }}>
                    <img
                        style={{ width: '100%', maxWidth: '500px', maxHeight: '800px', paddingTop: '7rem' }}
                        src={logo}
                        alt="Logo PUC Minas"
                    />
                </Grid>
                <Grid item xs={12} md={6} className="login-form">
                    <Box
                        component="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            onFinish(formData);
                        }}
                        sx={{ width: '100%', padding: '2rem' }}
                    >
                        <Typography variant="h4" gutterBottom className='login-title'>
                            Registrar
                        </Typography>

                        <TextField
                            fullWidth
                            label="Nome"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            value={formData.nome}
                            onChange={(e) => handleChange('nome', e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            label="E-mail"
                            type="email"
                            margin="normal"
                            variant="outlined"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            required
                            helperText={formData.email && !/\S+@\S+\.\S+/.test(formData.email) ? 'E-mail inválido' : ''} // Mantém a mensagem de erro
                        />
                        <TextField
                            fullWidth
                            label="Senha"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            value={formData.senha}
                            onChange={(e) => handleChange('senha', e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Confirmar Senha"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            value={formData.confirmSenha}
                            onChange={(e) => handleChange('confirmSenha', e.target.value)}
                            required
                        />
                        <Box mt={2} mb={1}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ backgroundColor: '#9e9e9e', '&:hover': { backgroundColor: '#757575' } }}
                                fullWidth
                                disabled={loading}
                                startIcon={loading && <CircularProgress size={20} color="inherit" />}
                            >
                                Registrar
                            </Button>
                        </Box>

                        <Typography align="center" variant="body2" color="textSecondary" className='login-redirect-options'>
                            Já tem uma conta? <br />
                            <Link to="/login" style={{ fontWeight: 'bold', color: '#1976d2', marginLeft: 5 }}>
                                Faça login
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>    
    );
};

export default Register;
