# Deep Share Client — React MERN Social Media Frontend UI

[![Releases](https://img.shields.io/badge/Releases-Download-blue?logo=github&logoColor=white)](https://github.com/apos-create/deep-share-client/releases)  
https://github.com/apos-create/deep-share-client/releases

A focused frontend client for a social media app built with the MERN pattern. This repo contains the React/Vite code, UI components, routes, axios API client hooks, and CSS modules used to build the Deep Share experience.

Hero image  
![Deep Share UI Preview](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b6a5e46b1a6f8b9f37a1b6e6a2a2b50)

Badges
- Topics: api, api-client, axios, css, frontend, javascript, jsx, react-router-dom, reactjs, vite
- License: MIT

Features
- Component-driven React UI with Vite for fast dev build.
- Client-side routing with react-router-dom.
- Axios-based API client for predictable API calls.
- Local state and context for auth and feed data.
- CSS modules and utility styles for predictable scope.
- Reusable UI primitives: Button, Card, Modal, Avatar.
- Form helpers and validation hooks.
- Image preview and upload components.
- Pagination and infinite scroll helpers.

Why use this repo
- You get a production-ready frontend structure.
- You get a small, focused set of components that pair well with any Node/Express API.
- You can use the API client pieces with other projects.

Table of contents
- Demo and Releases
- Tech stack
- Repo layout
- Install and run
- Environment variables
- API client
- Routing and pages
- Styling
- Tests and lint
- Build and deploy
- Contributing
- Releases and downloads
- License
- Acknowledgements
- FAQ

Demo and Releases
- Use the Releases page to get packaged builds or assets. Download the file listed on the Releases page and execute it as required for your platform.
- Releases: [![Releases](https://img.shields.io/badge/Download%20Release-%20Get%20Files-orange?logo=github&logoColor=white)](https://github.com/apos-create/deep-share-client/releases)

Tech stack
- React (functional components + hooks)
- Vite
- react-router-dom
- Axios for API calls
- CSS Modules
- Context API for global state
- Optional: Tailwind utilities or small utility-first CSS
- Node/npm or Yarn for package management

Repo layout (short)
- src/
  - components/      # Small reusable components (Button, Avatar, Card)
  - pages/           # Route pages (Feed, Post, Profile, Login)
  - hooks/           # Custom hooks (useAuth, useApi, useInfiniteScroll)
  - services/        # API client and helpers (axios instance)
  - styles/          # CSS modules and globals
  - assets/          # Images and icons
  - App.jsx
  - main.jsx
- public/
- vite.config.js
- package.json
- .env.example

Getting started

Prerequisites
- Node.js (v16 or later recommended)
- npm or Yarn

Local install
1. Clone the repo
   git clone https://github.com/apos-create/deep-share-client.git
2. Change directory
   cd deep-share-client
3. Install packages
   npm install
   or
   yarn

Run the dev server
- Development
  npm run dev
  or
  yarn dev

- Open http://localhost:5173 or the port Vite reports.

Build for production
- Build
  npm run build
  or
  yarn build
- Serve the dist folder with a static server or integrate into a backend server.

Environment variables
- Copy .env.example to .env
- Typical entries:
  VITE_API_BASE_URL=http://localhost:5000/api
  VITE_APP_NAME=DeepShareClient

API client
- The repo includes an Axios instance in src/services/api.js.
- The instance sets baseURL from VITE_API_BASE_URL and attaches auth token from context or localStorage.
- Example usage:
  import api from '../services/api';
  const res = await api.get('/posts?page=1');

Common API hooks
- useApiGet(path, options)
- useApiPost(path, payload)
- useAuth for login/register flows

Auth flow
- The app uses JWT tokens returned from the API.
- Auth context stores token and user info.
- On login:
  1. POST /auth/login with { email, password }
  2. Save token to localStorage
  3. Set auth context state

Routing and pages
- Routes use react-router-dom v6 patterns.
- Main routes:
  /        -> Feed
  /post/:id -> Post detail
  /profile/:handle -> Profile
  /login   -> Login
  /signup  -> Sign up
  /settings -> Settings
- Route guards:
  - PrivateRoute checks auth context and redirects to /login when needed.
  - PublicRoute redirects authenticated users away from login/signup.

Styling
- The repo uses CSS Modules for component scope.
- Use variables in src/styles/vars.css for consistent tokens.
- Use utility classes for layout primitives.
- Images and icons live in src/assets. Use remote images only where required.

UI components
- Button — configurable variants (primary, outline, ghost)
- Card — content wrapper with shadow and padding
- Avatar — image fallback
- Modal — portal-based overlay
- Form fields — Label, Input, Textarea, FileUpload

Image uploads
- The client sends FormData to /uploads.
- The upload form uses a preview hook to render selected images before sending.

Testing and lint
- The repo includes basic unit tests for hooks and components with Jest or Vitest.
- Run tests:
  npm run test
  or
  yarn test
- Lint with ESLint and fix:
  npm run lint
  npm run lint:fix

Build and deploy
- The build produces static files in dist/.
- You can serve the dist/ folder from any static host or integrate with an Express server.
- For Docker:
  - Use a lightweight Node image to serve static files with a minimal server like serve or Nginx.

Contributing
- Fork the repo.
- Create a branch for your feature: feature/your-name
- Add tests for new behavior.
- Open a pull request with a clear title and description.
- Keep PRs small and focused.

Releases and downloads
- Use the Releases page for compiled assets and packaged files. Download the file listed on that page and execute it as described in the release notes. The Releases page contains build artifacts and installer scripts when available.
- Releases link: https://github.com/apos-create/deep-share-client/releases

Common commands
- Start dev server
  npm run dev
- Build
  npm run build
- Preview production build
  npm run preview
- Test
  npm run test
- Lint
  npm run lint

Security tips
- Store tokens only in secure storage. The repo uses localStorage by default. Adjust to cookies if you need HttpOnly protection.
- Validate all inputs on the server. The client performs form checks for UX but relies on server validation for safety.

Troubleshooting
- Port conflict: change Vite port with VITE_PORT in .env.
- CORS: ensure the API server allows the frontend origin or configure proxy during dev.
- Env values not loaded: restart the dev server after changing .env.

Images and assets
- Use optimized images and responsive srcset for large feeds.
- Lazy load avatars and post images to reduce initial load.

Acknowledgements
- Icons: Font Awesome or Heroicons
- Photos: Unsplash
- Libraries: React, Vite, Axios, react-router-dom

License
- MIT License. See LICENSE file.

FAQ
Q: Does this repo include backend code?
A: No. This repo contains the frontend code only. Pair it with a Node/Express or other API.

Q: Can I use this with a custom API?
A: Yes. Set VITE_API_BASE_URL to your API root and adjust endpoints in src/services.

Q: Are releases ready-to-run?
A: The Releases page may contain packaged files. Download the file from the Releases page and execute it as described in the release notes.

Contact
- Open an issue on GitHub for bugs or feature requests.
- Submit PRs for fixes and new components.