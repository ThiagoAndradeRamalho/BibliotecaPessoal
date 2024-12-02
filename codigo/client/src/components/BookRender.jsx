import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const BookRender = ({ title, livros }) => {
    const navigate = useNavigate();

    const handleBookClick = (id) => {
        navigate(`/book/${id}`);
    };

    return (
        <div>
            <h2 style={{ color: 'black', marginBottom: '20px' }}>{title}</h2>
            <Grid container spacing={2}>
                {livros && livros.length > 0 ? (
                    livros.map((book) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                            <Card
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleBookClick(book.id)}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={book.img || 'default-book.jpg'}
                                    alt={book.titulo}
                                    style={{ objectFit: 'cover' }}
                                />
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        {book.titulo}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" gutterBottom>
                                        By {book.autor?.nome || 'Unknown Author'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1" color="textSecondary" style={{ marginTop: '20px' }}>
                        Nenhum livro encontrado.
                    </Typography>
                )}
            </Grid>
        </div>
    );
};

export default BookRender;
