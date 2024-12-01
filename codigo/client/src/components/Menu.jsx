import { List, ListItem, ListItemText } from '@mui/material';

const Menu = () => {
    return (
        <div style={{color: 'black'}}>
            <h2>Livros por Genero</h2>
            <List>
                <ListItem button>
                    <ListItemText primary="Todos os Genêros" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Negocios" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Ciência" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Ficção" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Bibliografia" />
                </ListItem>
            </List>
        </div>
    );
};

export default Menu;
