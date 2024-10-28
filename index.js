import React ,{useState} from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [isVisible,setVisible] = useState(false)
  return (
    <div style={styles.container}>
      <button onClick={()=>{setVisible(!isVisible)}}>{isVisible ?'Hide': 'Show'} Element Below</button>
      {isVisible && <p>Toggle Challenge</p>}
    </div>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  paragraph: {},
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
