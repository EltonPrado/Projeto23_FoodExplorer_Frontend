import { api } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { IngredientItem } from "../../components/IngredientItem";
import { Textarea } from "../../components/Textarea";

import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { Container, Content, ButtonBack, Form, SectionIngredients, InputWrapper } from "./styles";

export function Edit() {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await api.get(`/foods/${params.id}`);
        const { title, category, description, price, ingredients } = response.data;
        setTitle(title);
        setCategory(category);
        setDescription(description);
        setPrice(price);
        setIngredients(ingredients.map((ingredient) => ingredient.name));
      } catch (error) {
        console.error('Erro ao buscar informações do prato:', error);
      }
    }

    fetchFood();
  }, [params.id]);

  function handleBack() {
    navigate(-1);
  }

  function handleAddIngredient() {
    if (newIngredient.trim() === '') return;

    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient('');
  }

  function handleRemoveIngredient(deletedIngredient) {
    setIngredients((prevState) => prevState.filter((ingredient) => ingredient !== deletedIngredient));
    setNewIngredient('');
  }

  function handleAddImage(e) {
    const file = e.target.files[0];
    setImageFile(file);
  }

  async function handleUpdateFood() {
    try {
      if (!title || !category || !description || !price) {
        throw new Error('Preencha todos os campos!');
      }

      if (newIngredient) {
        throw new Error(
          'Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.'
        );
      }

      if (ingredients.length < 1) {
        throw new Error('Adicione pelo menos 1 ingrediente!');
      }

      setLoading(true);
      const updatedFoodData = {
        title,
        category,
        description,
        price,
        ingredients,
      };

      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);

        await api.patch(`/foods/${params.id}`, formData);
      }
    
      await api.put(`/foods/${params.id}`, updatedFoodData);
      alert('Prato atualizado com sucesso');
      navigate(-1);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleRemoveFood() {
    const confirmDelete = window.confirm('Deseja realmente remover esse prato?');

    if (confirmDelete) {
      try {
        await api.delete(`/foods/${params.id}`);
        navigate('/');
      } catch (error) {
        console.error('Erro ao remover prato:', error);
      }
    }
  }

  return (
    <Container>
      <Header />
      
      {user.isAdmin === 1 && (
        <Content>
          <ButtonBack onClick={handleBack}>
            <span><FiChevronLeft size={32}/>Voltar</span>
          </ButtonBack>

          <Form>
            <header>
              <legend>Editar prato</legend>
            </header>

            <InputWrapper>
              <div className="smallBox">
                <label id="file" htmlFor="image">
                  <span>Imagem do prato</span>
                  
                  <div>
                    <FiUpload size={24}/>
                    <span>Selecione a imagem</span>
                    <input id="image" type="file" onChange={handleAddImage}/>
                  </div>
                </label>
              </div>

              <Input 
                label="name" 
                title="Nome do prato" 
                type="text" 
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
                value={title}
              />

              <Input
                label="category"
                title="Categoria"
                type="text"
                placeholder="pratos principais"
                onChange={e => setCategory(e.target.value)}
                value={category} 
              />
            </InputWrapper>

            <InputWrapper>
              <SectionIngredients>
                <span className="ingredients">Ingredientes</span>

                <div className="ingredientsFormBox">
                  {ingredients.map((ingredient, index) => (
                      <IngredientItem 
                        key={ingredient} 
                        onChange={(e) => setNewIngredient(e.target.value)}
                        onClick={() => handleRemoveIngredient(ingredient)}
                        value={ingredient}
                      />
                    ))
                  }
                  
                  <IngredientItem 
                    isNew 
                    placeholder="Adicionar"
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                    value={newIngredient}
                  />
                </div>
              </SectionIngredients>

              <div className="smallBox">
                <Input 
                  label="price" 
                  title="Preço" 
                  type="text"
                  placeholder="R$ 00,00"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price} 
                />
              </div>
            </InputWrapper>
            
            <Textarea 
              label="description" 
              title="Descrição" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />

            <div className="buttons">
              <button
                id="delete"
                type="button"
                onClick={handleRemoveFood}
                disabled={loading}
              >
                {loading ? "Excluindo prato" : "Excluir prato"}
              </button>

              <button
                id="save"
                type="button"
                onClick={handleUpdateFood}
                disabled={loading}
              >
                {loading ? "Salvando alterações" : "Salvar alterações"}
              </button>
            </div>
          </Form>
        </Content>
      )}

      <Footer />
    </Container>
  )
}