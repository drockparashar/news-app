
## Overview

**News Aggregator** is a modern web application that provides users with up-to-date news headlines from around the world. Developed using React, TypeScript, and Next.js, the application offers a clean, responsive interface for viewing news articles. 

### Key Features

- **Top Headlines**: Fetches and displays the latest headlines from NewsAPI, focusing on specific countries or categories.
- **Dynamic Categories**: View news by category, such as technology, sports, or entertainment.
- **Responsive Design**: Utilizes Tailwind CSS for a mobile-friendly and visually appealing user experience.
- **Type Safety**: Leverages TypeScript for static type checking, enhancing code quality and maintainability.
- **Server-Side Rendering**: Employs Next.js for improved performance and SEO through server-side rendering.
- **Easy Deployment**: Deployed on Vercel, offering seamless deployment and automatic scaling.

### Application Flow

1. **Homepage**: Displays the latest top headlines for a specified country. Articles include images, titles, descriptions, and publication dates.
2. **Category Page**: Allows users to view news based on different categories. Utilizes dynamic routing for category selection.

### Technology Stack

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework with support for server-side rendering and static site generation.
- **TypeScript**: Superset of JavaScript that adds static types, improving development efficiency and code reliability.
- **Axios**: Promise-based HTTP client for API requests.
- **Tailwind CSS**: Utility-first CSS framework for custom designs.
- **Vercel**: Platform for deploying front-end projects, with built-in Next.js support.

### Getting Started

#### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

#### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/news-aggregator.git
   cd news-aggregator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create a `.env.local` file in the root directory and add your NewsAPI key:**

   ```env
   NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key_here
   ```

#### Running the Application

1. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. **Open your browser and visit:**

   ```
   http://localhost:3000
   ```

### Deployment

1. **Push your changes to GitHub.**

2. **Connect your GitHub repository to Vercel and deploy the project.**

### Project Structure

```
.
├── components
│   ├── News.tsx
│   ├── Navbar.tsx
│   └── ...
├── pages
│   ├── index.tsx
│   ├── category.tsx
│   └── ...
├── public
│   └── ...
├── styles
│   ├── globals.css
│   └── ...
├── .env.local
├── package.json
├── tsconfig.json
└── ...
```

### Components

- **News.tsx**: Displays individual news articles.
- **Navbar.tsx**: Navigation bar component.

### Pages

- **index.tsx**: Home page showing top headlines.
- **category.tsx**: Dynamic page for viewing category-based news.

### Usage

Here's an example of how articles are fetched:

```typescript
useEffect(() => {
  const fetchArticles = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: 'in',
          apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const articles: Article[] = response.data.articles;
      const filteredArticles = articles.filter(article => article.urlToImage !== null).slice(0, 10);
      setHeadlines(filteredArticles);
    } catch (error) {
      console.error("Error fetching the top headlines:", error);
    }
  };
  fetchArticles();
}, []);
```

### Environment Variables

- **NEXT_PUBLIC_NEWS_API_KEY**: Your NewsAPI key.

### Contributing

1. **Fork the repository.**

2. **Create your feature branch:**

   ```bash
   git checkout -b feature/my-new-feature
   ```

3. **Commit your changes:**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/my-new-feature
   ```

5. **Submit a pull request.**

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Acknowledgements

- Thanks to [NewsAPI](https://newsapi.org/) for providing the news data.
- Thanks to [Vercel](https://vercel.com/) for providing easy deployment.

---

This README provides a clear and comprehensive guide to setting up, running, and contributing to the News Aggregator project, with a structured format that is easy to follow on GitHub.