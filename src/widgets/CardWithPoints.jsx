import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './CardWithPoints.css';
import TollIcon from '@mui/icons-material/Toll';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CardWithPoints(props) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/store');
  }
  

  return (
    <>
      <Box sx={{ minWidth: 800, maxWidth: 820  }}>
        <Card variant="outlined">
          <CardContent>
            <div className="CardBody">
            <div className="left">
            <Typography variant="h5" component="div">
              {props.heading}
            </Typography>
            <Typography variant="body2">{props.subheading}</Typography>
            </div>
            <div className="right">
               <div className="right-container">
                <div className="coin">
                <TollIcon style={{color:'goldenrod', fontSize:'1.3rem'}} />
                <Typography variant="body2" style={{marginLeft:'4px'}}>{props.coins}</Typography>
                </div>
                <Tooltip title="Points Shop">
                <IconButton onClick={handleCartClick}>
                <ShoppingCartIcon style={{color:'darkslategray', fontSize:'1.3rem'}}/>
                </IconButton>
                </Tooltip>
               </div>
            </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default CardWithPoints;
