/* eslint-disable react/prop-types */
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { Grid, CardMedia, Typography, Card, CardContent, Rating, Button } from '@mui/material';
import livro from '../assets/livro.webp';

const booksMock = [
    {
        id: 1,
        title: "Livro 1",
        author: "Autor 1",
        rating: 4.5,
        votes: 150,
        description: "Descrição do Livro 1.",
        image: livro
    },
    {
        id: 2,
        title: "Livro 2",
        author: "Autor 2",
        rating: 3.8,
        votes: 98,
        description: "Descrição do Livro 2.",
        image: livro
    },
    {
        id: 3,
        title: "Livro 3",
        author: "Autor 3",
        rating: 4.0,
        votes: 200,
        description: "Descrição do Livro 3.",
        image: livro
    }
];

const BookPage = () => {
    const { bookId } = useParams();

    const book = booksMock.find(book => book.id === parseInt(bookId));

    if (!book) {
        return <Typography variant="h5" align="center">Livro não encontrado</Typography>;
    }

    return (
        <>
            <Header />

            <div style={{ width: '90vw', borderRadius: '8px', padding: '2rem', backgroundColor: '#fff', marginTop: '10rem', color: 'black' }}>

                <Grid container spacing={4} style={{ marginTop: '2rem' }}>
                    {/* Seção principal */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={2}>
                            {/* Imagem do livro */}
                            <Grid item xs={12} sm={6}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={book.image}
                                    alt={book.title}
                                    style={{ objectFit: 'contain', borderRadius: '8px' }}
                                />
                            </Grid>

                            {/* Detalhes do livro */}
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h4" gutterBottom>{book.title}</Typography>
                                <Typography variant="subtitle1" gutterBottom>By {book.author}</Typography>
                                <Rating value={book.rating} readOnly />
                                <Typography variant="body2" color="textSecondary">{book.votes} votes</Typography>
                                <Typography variant="body1" paragraph style={{ marginTop: '1rem' }}>{book.description}</Typography>
                                <Grid container spacing={2} style={{ marginTop: '2rem' }}>
                                    <Grid item>
                                        <Button variant="contained" style={{ margin: '1rem' }} color="primary">Buy Now</Button>
                                        <Button variant="contained" style={{ margin: '1rem' }} color="primary">Read Book</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Informações adicionais */}
                        <div style={{ marginTop: '3rem', marginLeft: '6vw' }}>
                            <Typography variant="h6">Sinopsis</Typography>
                            <Typography variant="body2" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nisl sed sit aliquet nullam pretium.
                            </Typography>

                            <Typography variant="h6">Informações Adicionais</Typography>
                            <Typography variant="body2" paragraph>
                                Gênero: Ficção / Romance<br />
                                Publicado em: 1 Julho 2016<br />
                                Idioma: Português
                            </Typography>
                        </div>
                    </Grid>

                    {/* Seção lateral */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" gutterBottom>Cerita Serupa</Typography>
                        {booksMock.filter(b => b.id !== book.id).map(similarBook => (
                            <Card key={similarBook.id} style={{ display: 'flex', marginBottom: '1rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
                                <CardMedia
                                    component="img"
                                    image={similarBook.image}
                                    alt={similarBook.title}
                                    style={{ width: '100px', objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>{similarBook.title}</Typography>
                                    <Typography variant="body2">By {similarBook.author}</Typography>
                                    <Rating value={similarBook.rating} readOnly size="small" />
                                    <Typography variant="caption" color="textSecondary">{similarBook.votes} votes</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default BookPage;
