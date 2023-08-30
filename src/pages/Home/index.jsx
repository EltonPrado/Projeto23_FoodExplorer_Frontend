import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useFavorite } from '../../hooks/favorite';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import coverPhoto from '../../assets/cover.png';

import { Container, Content, Banner } from './styles';

export function Home() {
  const [foods, setFoods] = useState([])
  const [search, setSearch] = useState("")

  const { favorites } = useFavorite();
  
  function handleFavorites(favor) {
    if (favor.length === 0) {
      return
    }
  
    setFoods(favorites);
  }

  useEffect(() => {
    async function fetchFoods() {
      const response = await api.get(`/foods?title=${search}`);
      setFoods(response.data);
    }

    fetchFoods();
  }, [search, favorites.length === 0])

  return (
    <Container>
      <Header search={setSearch} functionButton={() => handleFavorites(favorites)}/>

      <Content>
        <Banner>
          <img className="bannerImg" src={coverPhoto} alt="Imagem de macarons do banner" />

          <div className="bannerText">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Banner>

        {
          foods.filter(food => food.category == "Refeições").length > 0 &&
          <Section title="Refeições">
            {
              foods.filter(food => food.category == "Refeições").map(food => (
                <Card
                  key={String(food.id)}
                  data={food} 
                />
              ))
            }
          </Section>
        }

        {
          foods.filter(food => food.category == "Sobremesas").length > 0 &&  
          <Section title="Sobremesas">
            {
              foods.filter(food => food.category == "Sobremesas").map(food => (
                <Card
                  key={String(food.id)}
                  data={food} 
                />
              ))
            }
          </Section>
        }  

        { 
          foods.filter(food => food.category == "Bebidas").length > 0 &&
          <Section title="Bebidas">
            { 
              foods.filter(food => food.category == "Bebidas").map(food => (
                <Card
                  key={String(food.id)}
                  data={food} 
                />
              ))
            }
          </Section>
        }
      </Content>

      <Footer />
    </Container>
  )
}