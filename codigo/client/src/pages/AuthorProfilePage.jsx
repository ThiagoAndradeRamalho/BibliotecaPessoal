/* eslint-disable react/prop-types */
import { CardMedia, Grid, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import avatarPlaceholder from '../assets/avatar-placeholder.png'; // Placeholder for author avatar
import BookRender from '../components/BookRender'; // Componente do BookRender

const authorsMock = [
    {
        id: 1,
        name: "Charles Deo",
        bio: "UI/UX Designer passionate about creating intuitive and beautiful user experiences.",
        dob: "June 26, 1980",
        address: "2239 Hog Camp Road, Schaumburg",
        email: "charles5182@ummoh.com",
        phone: "33757005467",
        avatar: avatarPlaceholder,
        posts: [
            {
                id: 1,
                title: "New Blazer out here... $500!",
                image: avatarPlaceholder,
                likes: 1498,
                comments: 3000
            }
        ]
    }
];

const AuthorProfilePage = () => {
    const { authorId } = useParams();
    const author = authorsMock.find(author => author.id === parseInt(authorId));

    if (!author) {
        return <Typography variant="h5" align="center">Author not found</Typography>;
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', overflowX: 'hidden' }}>
            <div style={{ width: '100vw', paddingTop: '5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ebb764', marginBottom: '2rem' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <CardMedia
                            component="img"
                            image={author.avatar}
                            alt={author.name}
                            style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto', objectFit: 'cover', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        />
                        <Typography variant="h4" gutterBottom style={{ marginTop: '1rem' }}>{author.name}</Typography>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: 'white', color: 'black', margin: '1rem' }} // Cor de fundo e do texto
                        >
                            Seguir
                        </Button>
                    </Grid>

                </Grid>
            </div>
            <div style={{ width: '100vw', padding: '0 1rem', overflowY: 'auto', boxSizing: 'border-box' }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12}>
                        <BookRender title="Lançamentos:" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AuthorProfilePage;
