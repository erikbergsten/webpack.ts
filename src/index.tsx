import * as ReactDOM from 'react-dom/client';

export function foo(): number {
  return 123;
}

function App() {
  return (
    <p> hello app of doom </p>
  );
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app!);

root.render(<App />);
