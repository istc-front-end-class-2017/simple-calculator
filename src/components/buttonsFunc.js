import React from 'react';

const Buttons = () => {
  const but = ["/","*","C","-","7","8","9","+","4","5","6","1","2","3","=","0",".",];
  let i = 0;
  for (i in but){
    return(<button value={but[i]} onClick={this.clicked}>{but[i]}</button>);
  }
}
export default Buttons;
