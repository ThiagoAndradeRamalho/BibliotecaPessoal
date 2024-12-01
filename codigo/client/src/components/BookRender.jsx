/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const books = [
    { id: 1, title: 'All The Light We Cannot See', author: 'Anthony Doerr', img: 'book1.jpg' },
    { id: 2, title: 'Rich People Problems', author: 'Kevin Kwan', img: 'book2.jpg' },
    { id: 3, title: 'Where The Crawdads Sing', author: 'Delia Owens', img: 'book3.jpg' },
    { id: 4, title: 'Crazy Rich Asians', author: 'Kevin Kwan', img: 'book4.jpg' }
];

const BookRender = ({ title }) => {
    const navigate = useNavigate();

    const handleBookClick = (id) => {
        navigate(`/book/${id}`);
    };

    return (
        <div style={{ margin: '3rem' }}>
            <h2 style={{ color: 'black' }}>{title}</h2>
            <Grid container spacing={3}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={3} key={book.id}>
                        <Card
                            style={{ padding: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', cursor: 'pointer', height: '50vh' }}
                            onClick={() => handleBookClick(book.id)}
                        >
                            <CardMedia
                                component="img"
                                height="250"
                                image={book.img}
                                alt={book.title}
                                style={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {book.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    By {book.author}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default BookRender;
