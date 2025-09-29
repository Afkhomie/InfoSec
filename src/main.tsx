import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/InfoSec/', // <--- this MUST match your repo name
  plugins: [react()],
});
