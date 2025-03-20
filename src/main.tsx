import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.tsx';

function main() {
    const root = document.getElementById('root');
    if (!root) {
        console.error('root element not found!');

        return;
    }

    createRoot(root).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}

main();
