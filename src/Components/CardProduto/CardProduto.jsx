import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Produto from '../Produto/Produto';

const CardProduto = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProdutos = async () => {
    try {
      const response = await fetch('https://65439d5501b5e279de20aa31.mockapi.io/api/produto');
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const truncateInfo = (text, maxLength) => {
    if(text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    } else {
      return text;
    }
  }

  return (
    <div className='container'>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Erro ao carregar os produtos: {error.message}</p>
      ) : (
        <div className="row">
          {produtos.map((produto, index) => (
            <div key={produto.id} className="col-lg-4 col-md-6 mb-4">
              <Produto 
                produto={produto}
                truncatedInfo={truncateInfo(produto.infoadicionais, 100)} // Definindo o tamanho máximo para o texto de infoadicionais 
              />
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default CardProduto;
