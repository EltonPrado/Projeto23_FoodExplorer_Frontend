import { api } from '../../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useFavorite } from '../../hooks/favorite';
import { useCart } from '../../hooks/cart';

import { PiPencilSimpleBold } from 'react-icons/pi'
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa'

import heart from '../../assets/heart.svg';
import heartFill from '../../assets/heart_fill.svg';

import { Button } from '../Button';
import { Container } from './styles';

export function Card({data, ...rest}) {
  const [quantity, setQuantity] = useState(1);

  const { user } = useAuth();
  const { favorites, addFoodToFavorite, removeFoodFromFavorite } = useFavorite()
  const { handleAddFoodToCart } = useCart();
  
  const isFavorite = favorites.some((food) => food.title === data.title)

  const navigate = useNavigate();

  const imageURL = `${api.defaults.baseURL}/files/${data.image}`;

  function handleAddQuantity() {
    const isGreater10 = quantity >= 9;
    if(isGreater10) {
      return
    }

    setQuantity(quantity + 1);
  }

  function handleRemoveQuantity() {
    const isLess0 = quantity <= 1;
    if (isLess0) {
      return
    }
    
    setQuantity(quantity - 1);
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleEditFood(id) {
    navigate(`/edit/${id}`);
  }

  return (
    <Container {...rest}>
      {
        user.isAdmin ? 
        <button onClick={() => handleEditFood(data.id)}>
          <PiPencilSimpleBold size={25}/>
        </button>
        :
        <button type='button' onClick={() => isFavorite ? removeFoodFromFavorite(data) : addFoodToFavorite(data)}> 
          <img src={isFavorite ?  heartFill : heart} alt="heart" />  
        </button>
      }
      
      <div>
        <img src={imageURL} alt={data.title} />
      </div>

      <a type='button' onClick={() => handleDetails(data.id)}>
        <h3>{data.title} <FaAngleRight /></h3>
      </a>

      <p>{data.description}</p>
      <strong>R$ {data.price}</strong>

      {
        user.isAdmin ?
        <div></div>
        :
        <div>
          <button className="btn" onClick={handleRemoveQuantity}>
            <FiMinus size={25}/>
          </button>
          
          <span>0{quantity}</span>
          
          <button className="btn" onClick={handleAddQuantity}>
            <FiPlus size={25}/>
          </button>

          <Button title="incluir" onClick={() => handleAddFoodToCart(data, quantity, imageURL)} />
        </div>
      } 
    </Container>
  )
}