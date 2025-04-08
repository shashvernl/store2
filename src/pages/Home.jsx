import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { cart } from '../helpers/data';
import axios from 'axios';

export default function main() {
  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post(`http://localhost:5000/cart/add/${productId}`);
      
      console.log('Товар добавлен:', response.data);
    } catch (error) {
      console.error('Ошибка при добавлении в корзину:', error);
    }
  };
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
     {cart.map((product) => (
      <Card key={product.id} sx={{ maxWidth: 345, margin: "10px" }}>
       <CardMedia
        sx={{height: 300, width: 300 }}
        image={product.image}
        title={product.name}
       />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.price} руб.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.name}
        </Typography>
       </CardContent>
       <CardActions>
        <Button size="small" onClick={() => handleAddToCart(product.id)}>
          В корзину
        </Button>
       </CardActions>
       </Card>      
     ))}
    </div>
  )
}