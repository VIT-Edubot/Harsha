import React, { useState } from 'react';
import useWatch from './useWatch';

export default function WatchInput() {
  const [input, setInput] = useState('');
  const watched = useWatch(input);

  return (
    <div style={styles.container}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Watch this input"
        style={styles.input}
      />
      <p>Watched Value: {watched}</p>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: '20px' },
  input: { padding: '10px', fontSize: '16px', width: '300px' },
};
