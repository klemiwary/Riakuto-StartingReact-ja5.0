import { useRef } from 'react';
import './TextInput.css';

function TextInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="input-item">
      <input type="text" ref={inputRef} />
      <input type="button" value="フォーカス" onClick={handleClick} />
    </div>
  );
}

export default TextInput;
