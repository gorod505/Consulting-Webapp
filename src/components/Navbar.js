import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Navbar() {
    const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);

    const handleServicesEnter = (event) => {
        setServicesAnchorEl(event.currentTarget);
    };

    const handleServicesLeave = () => {
        setServicesAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'darkgreen', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                    <img src="path/to/your/logo.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
                    IT Consulting
                </Typography>
                <div
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                    sx={{ position: 'relative' }}
                >
                    <Button color="inherit" sx={{ color: 'darkgreen', fontWeight: 'bold' }}>
                        Services
                    </Button>
                    <Menu
                        anchorEl={servicesAnchorEl}
                        open={Boolean(servicesAnchorEl)}
                        onClose={handleServicesLeave}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        getContentAnchorEl={null}
                        elevation={0}
                        //sx={{ backgroundColor: 'black', color: 'darkgreen', '& .MuiMenuItem-root': { color: 'darkgreen' } }}
                    >
                        <MenuItem component={Link} to="/services/cloud-transformation" onClick={handleServicesLeave}>Cloud Transformation</MenuItem>
                        <MenuItem component={Link} to="/services/data-science-ai" onClick={handleServicesLeave}>Data Science & AI</MenuItem>
                        <MenuItem component={Link} to="/services/data-engineering" onClick={handleServicesLeave}>Data Engineering</MenuItem>
                        <MenuItem component={Link} to="/services/full-stack-development" onClick={handleServicesLeave}>Full-Stack Development</MenuItem>
                    </Menu>
                </div>
                <Button color="inherit" component={Link} to="/about" sx={{ color: 'darkgreen', fontWeight: 'bold' }}>
                    About
                </Button>
                <Button color="inherit" component={Link} to="/insight" sx={{ color: 'darkgreen', fontWeight: 'bold' }}>
                    Insight
                </Button>
                <Button color="inherit" component={Link} to="/careers" sx={{ color: 'darkgreen', fontWeight: 'bold' }}>
                    Careers
                </Button>
                <Button color="inherit" sx={{ color: 'darkgreen', fontWeight: 'bold' }}>
                    <PhoneIcon />
                </Button>
            </Toolbar>
        </AppBar>
    );
}
