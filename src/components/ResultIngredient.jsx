import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from './Modal';

const ResultIngredient = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState({});

  async function insertInfo() {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.idDrink}`
      );
      const json = await res.json();
      console.log('api calling'); // shows that this api gets called twice for each result. WHY???
      setInfo(json.drinks[0]);
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    insertInfo();
  }, []);

  const handleImgClicked = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='results'>
      <h4>{props.strDrink}</h4>
      <img
        className='results-img'
        src={props.strDrinkThumb}
        alt={props.strDrink}
        onClick={handleImgClicked}
      />
      {showModal && <Modal closeModal={closeModal} {...props} {...info} />}
    </div>
  );
};

export default ResultIngredient;
