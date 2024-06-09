import React from 'react';

class MouseClicker extends React.Component {
  handleButtonClick = (event) => {
    console.log(event.target.name);
  };

  handleImageClick = (event) => {
    console.log(event.target.src);
    event.stopPropagation(); 
  };

  render() {
    return (
      <button name={this.props.name} onClick={this.handleButtonClick}>
        <img src={this.props.imageSrc} onClick={this.handleImageClick} alt="Click Me" />
      </button>
    );
  }
}

export default MouseClicker;




