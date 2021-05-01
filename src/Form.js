/** @format */

import React from "react";

const Form = ({ handleChange, handleSubmit, text, handleClick }) => {
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} action="/stickers">
        <input
          className="input"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search.. "
        />
        <button type="submit" onClick={handleClick}>
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
