import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploying to <username>.github.io means the site lives at the domain
// root, so base stays '/'. (If this were a project page instead, e.g.
// username.github.io/reponame, base would need to be '/reponame/'.)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
