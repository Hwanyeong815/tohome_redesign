// Checkbox.jsx
import React from 'react';

const Checkbox = ({ checked, onChange, label, disabled }) => {
    return (
        <label>
            <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
            {label && <span>{label}</span>}
        </label>
    );
};

export default Checkbox;
// 수정필요

/*// App.jsx
import React, { useState } from 'react';
import Checkbox from './Checkbox';

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        label="동의합니다"
      />
    </div>
  );
};

export default App;
*/
