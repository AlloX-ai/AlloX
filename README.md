# AlloX

AlloX is an AI-powered capital allocation platform that transforms market narratives into diversified, risk-managed portfolios, bridging TradFi and DeFi.

This repository contains the frontend: the landing site, documentation, blog and the app interface.

Website: https://allox.ai

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- React Router 7
- TypeScript (TSX) and JSX
- shadcn/ui and Radix UI
- Recharts
- ESLint

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- Yarn

### Installation

```bash
git clone https://github.com/AlloX-ai/AlloX.git
cd AlloX
yarn install
```

### Available scripts

```bash
yarn dev       # start the development server
yarn build     # create a production build
yarn preview   # preview the production build locally
yarn lint      # run ESLint
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
├── public/              # Static assets (including the whitepaper)
├── src/
│   ├── assets/          # Images and logos
│   ├── components/      # Shared components
│   │   └── ui/          # shadcn/ui components
│   ├── pages/           # Application pages
│   ├── styles/          # Global styles
│   ├── App.jsx
│   └── main.jsx         # Entry point
├── index.html
└── vite.config.js
```
