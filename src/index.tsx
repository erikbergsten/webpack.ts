import * as ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <p> hello app of doom </p>
  );
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app!);

root.render(<App />);
