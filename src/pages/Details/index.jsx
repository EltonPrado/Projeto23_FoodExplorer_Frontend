import { api } from '../../services/api';
import { useCart } from '../../hooks/cart';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Ingredient } from '../../components/Ingredient';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { FiMinus, FiPlus, FiChevronLeft } from 'react-icons/fi';
import { Container, Content, ButtonBack, Main, Ingredients, Info } from './styles';

export function Details(){
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();
  
  const { handleAddFoodToCart } = useCart();

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  function handleBack() {
    navigate(-1);
  }

  function handleEditFood(id) {
    navigate(`/edit/${id}`);
  }
  
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

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }
    
    fetchFood();
  }, []);

  return(
    <Container>
      <Header />

      <Content>
        <ButtonBack onClick={handleBack}>
          <span><FiChevronLeft size={32}/>Voltar</span>
        </ButtonBack>

        {data &&
          <Main>
            <div className="FoodPreview">
              <img src={imageURL} alt="imagem do prato" />
            </div>

            <div className="foodInfo">
              <h1>{data.title}</h1>
              <p>{data.description}</p>

              <Ingredients>
                {data.ingredients.map((ingredient) => (
                    <Ingredient 
                      key={String(ingredient.id)} 
                      ingredient={ingredient.name} 
                    />
                  ))}
              </Ingredients>

              {user.isAdmin === 0 && (
                <Info>
                  <div className="foodEdit">
                    <Button title="Editar Prato" onClick={() => handleEditFood(data.id)} />
                  </div>
                </Info>
              )}

              {user.isAdmin === 1 && (
                <Info>
                  <button className="btn" onClick={handleRemoveQuantity}> 
                      <FiMinus size={25} />
                    </button>
                
                    <span>0{quantity}</span>
                
                    <button className="btn" onClick={handleAddQuantity}>
                      <FiPlus size={25} />
                    </button>
                    
                    <div>
                      <Button 
                        title={`incluir - R$ ${data.price}`}
                        onClick={() => handleAddFoodToCart(data, quantity, imageURL)}
                      />
                    </div>
                </Info>
              )}
            </div>
          </Main>
        }
      </Content>

      <Footer />
    </Container>
  )
}