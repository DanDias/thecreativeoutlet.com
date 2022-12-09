import { Box, Drawer, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

const Sidebar = ({categories, open, handleSidebar}) => {
  return (<Drawer
        anchor='left'
        open={open}
    >
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleSidebar}
            onKeyDown={handleSidebar}
            >
{/*             <div id="dismiss sidebar" onClick={handleSidebar}>
                <i className="fa fa-arrow-left"></i>
            </div> */}

            <List>
                <ListItem>
                    <Link to='/'><h2>Home</h2></Link>
                </ListItem>
                <CategoryList categories={categories} />
            </List>
        </Box>
    </Drawer>)
}

export default Sidebar;