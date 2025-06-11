import React, { useRef, useState } from 'react';

export default function NameForm() {
  const inputRef = useRef(null);
  const initialValueRef = useRef('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!initialValueRef.current) {
      initialValueRef.current = inputRef.current.value;
    }
    setSubmittedName(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input ref={inputRef} placeholder="Enter your name" style={styles.input} />
      <button type="submit" style={styles.button}>Submit</button>
      <p>Initial Name: {initialValueRef.current}</p>
      <p>Submitted Name: {submittedName}</p>
    </form>
  );
}

const styles = {
  form: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' },
  input: { padding: '10px', fontSize: '16px', width: '300px' },
  button: { padding: '8px 16px', fontSize: '16px' },
};
