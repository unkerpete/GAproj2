import React from 'react';
import Button from './Button';

const SearchSection = (props) => {
  return (
    <div className='search-section'>
      <input
        name='search'
        type='text'
        onChange={props.handleInput}
        placeholder={props.placeHolder}
      />
      <br />
      <Button onClick={props.handleClickAPI} btnTxt='Search' />
    </div>
  );
};

export default SearchSection;
