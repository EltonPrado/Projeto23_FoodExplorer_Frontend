import { api } from '../../services/api';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { IngredientItem } from "../../components/IngredientItem";
import { Footer } from "../../components/Footer";

import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { Container, Content, ButtonBack, Form, SectionIngredients, InputWrapper } from "./styles";

export function New() {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Escolha a categoria");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  };

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) => prevState.filter((ingredient) => ingredient !== deleted));
  };

  function handleAddImage(event) {
    const file = event.target.files[0]
    setImageFile(file)
  };

  async function handleNewFood() {
    if (!imageFile) {
      return alert("Adicione uma imagem para o prato")
    }

    if (!title || !description || !category || !price) {
      return alert("Preencha todos os campos!")
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    if (ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente")
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    await api.post("/foods", formData);
    alert("Prato cadastrado com sucesso");
    navigate("/")

    setLoading(false);
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
              <legend>Adicionar prato</legend>
            </header>

            <InputWrapper>
              <div className="smallBox">
                <label id="file" htmlFor="image">
                  <span>Imagem do prato</span>
                  <div>
                    <FiUpload size={24}/>
                    Selecione a imagem

                    <input 
                      id="image" 
                      type="file"
                      onChange={handleAddImage}
                    />
                  </div>
                </label>
              </div>

              <Input 
                label="name" 
                title="Nome do prato" 
                type="text" 
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
              />

              <div className="selectBox">
                <label htmlFor="category">Categoria</label>
                <select id="category" onChange={e => setCategory(e.target.value)}>
                  <option select disabled value="">Selecione a categoria:</option>
                  <option value="Refeições">Refeições</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
                </select>
              </div>
            </InputWrapper>

            <InputWrapper>
              <SectionIngredients>
                <span>Ingredientes</span>
                
                <div className="ingredientsFormBox">
                  {
                    ingredients.map((ingredient, index) => (
                      <IngredientItem 
                        key={String(index)} 
                        value={ingredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                        onClick={() => handleRemoveIngredient(ingredient)} 
                      />
                    ))
                  }
                  
                  <IngredientItem 
                    isNew 
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                  />
                </div>
              </SectionIngredients>

              <div className="smallBox">
                <Input
                  className="priceInput"
                  label="price" 
                  title="Preço" 
                  type="text" 
                  placeholder="R$ 00,00"
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </InputWrapper>

            <Textarea 
              label="Description" 
              title="Descrição" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              type="button"
              onClick={handleNewFood}
              disabled={loading}
            >
              {loading ? "Adicionando prato" : "Adicionar prato"}
            </button>
          </Form>
        </Content>
      )}

      <Footer />
    </Container>
  )
}