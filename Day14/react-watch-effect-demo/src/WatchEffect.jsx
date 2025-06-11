import React, { useEffect, useState } from 'react';

export default function WatchEffect() {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value) console.log('Value changed:', value);
  }, [value]);

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={styles.input}
      />
      <p>Current value: {value}</p>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: '20px' },
  input: { padding: '10px', fontSize: '16px', width: '300px' },
};
