import React, { useRef } from 'react';

function ChangeColor2() {
  const divRef = useRef(null);

  const handleChangeColor = () => {
    if (divRef.current) {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      divRef.current.style.backgroundColor = randomColor;
    }
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
      >
        Color Box
      </div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default ChangeColor2;

