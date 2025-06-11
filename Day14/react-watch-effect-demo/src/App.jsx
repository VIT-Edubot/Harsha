import React from 'react';
import './styles.css';
import NameForm from './NameForm';
import WatchEffect from './WatchEffect';
import WatchInput from './WatchInput';
import FocusInput from './FocusInput';

export default function App() {
  return (
    <div className="container">
      <h1>React Watch Effect Demo</h1>
      <section className="section">
        <h2>1. Persistent Input with useRef</h2>
        <NameForm />
      </section>
      <section className="section">
        <h2>2. useEffect Watch Effect</h2>
        <WatchEffect />
      </section>
      <section className="section">
        <h2>3. Custom useWatch Hook</h2>
        <WatchInput />
      </section>
      <section className="section">
        <h2>4. Focus Input using useRef</h2>
        <FocusInput />
      </section>
    </div>
  );
}
