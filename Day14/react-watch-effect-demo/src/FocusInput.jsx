import React, { useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={styles.container}>
      <input ref={inputRef} placeholder="Click button to focus" style={styles.input} />
      <button onClick={handleFocus} style={styles.button}>Focus Input</button>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: '20px' },
  input: { padding: '10px', fontSize: '16px', width: '300px', marginBottom: '10px' },
  button: { padding: '8px 16px', fontSize: '16px' },
};
