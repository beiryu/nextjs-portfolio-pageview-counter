# Personal Portfolio

<div align="center">

[View Live Demo](https://portfolio.pagedaisy.app/)

</div>

## 📌 Overview

This is my personal portfolio website, showcasing my projects and skills. It's built with modern web technologies to provide a fast, responsive, and visually appealing experience.

### 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Contentlayer](https://www.contentlayer.dev/) - Content SDK for developers
- [Vercel](https://vercel.com/) - Platform for deploying and hosting
- [MDX](https://mdxjs.com/) - Markdown for components
- [Upstash](https://upstash.com/) - Redis-compatible in-memory data store

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or later)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/beiryu/nextjs-portfolio-pageview-counter.git
   cd nextjs-portfolio-pageview-counter
   ```

2. Install dependencies

   ```sh
   pnpm install
   ```

3. Create a `.env` file in the root directory and add necessary environment variables (refer to `.env.example`)

4. Start the development server

   ```sh
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Configuration

Customize the portfolio by modifying the following files:

- `config/site.ts`: Site metadata and general configuration
- `data/`: Add your projects, skills, and other content here
- `public/`: Store your images and other static assets

## 📂 Project Structure

```
├── components/     # Reusable UI components
├── config/         # Configuration files
├── data/           # Content data (projects, skills, etc.)
├── lib/            # Utility functions and helpers
├── pages/          # Next.js pages
├── public/         # Static assets
├── styles/         # Global styles and Tailwind config
└── types/          # TypeScript type definitions
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

This portfolio is inspired by and adapted from [chronark's portfolio](https://github.com/chronark/chronark.com). Many thanks to the original creator for the inspiration and foundation.
