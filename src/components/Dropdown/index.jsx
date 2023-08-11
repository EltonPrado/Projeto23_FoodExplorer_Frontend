import { useState } from 'react';
import { Container } from './styles';

import { FiChevronDown } from 'react-icons/fi';

export function Dropdown ({category, setCategory}) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Refeições', 'Sobremesas', 'Bebidas']

  return(
    <Container>
      <div className="selectMenu">
        <span>Categoria</span>

        <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
          {category}
          <FiChevronDown size={24}/>
        </div>

        {isActive && (
          <div className="dropdown-content">
            {options.map(option => (
              <div 
                className="dropdown-item" 
                onClick={(e) => { setCategory(option); setIsActive(false);}}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}
