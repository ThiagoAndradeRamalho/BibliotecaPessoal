/* eslint-disable react/prop-types */
import { Container, Grid, Typography, Box, TextField, Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = ({ logo, formData, handleChange, loading, onFinish }) => {
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
                            onFinish();  // Chama onFinish sem passar formData, pois já é passado por props
                        }}
                        sx={{ width: '100%', padding: '2rem' }}
                    >
                        <Typography variant="h4" gutterBottom className='login-title'>
                            Login
                        </Typography>

                        <TextField
                            fullWidth
                            label="E-mail"
                            type="email"
                            margin="normal"
                            variant="outlined"
                            value={formData.email}  // Utiliza formData do componente pai
                            onChange={(e) => handleChange('email', e.target.value)}  // Atualiza formData
                            required
                        />
                        <TextField
                            fullWidth
                            label="Senha"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            value={formData.senha}  // Utiliza formData do componente pai
                            onChange={(e) => handleChange('senha', e.target.value)}  // Atualiza formData
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
                                Entrar
                            </Button>
                        </Box>

                        <Typography align="center" variant="body2" color="textSecondary" className='login-redirect-options'>
                            Ainda não tem cadastro? <br />
                            <Link to="/register" style={{ fontWeight: 'bold', color: '#1976d2', marginLeft: 5 }}>
                                Cadastre-se
                            </Link> |
                            <Link to="/recover-password" style={{ color: '#FF743C', fontWeight: 'bold', marginLeft: 5 }}>
                                Esqueceu sua senha?
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
