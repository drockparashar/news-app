"use client";
import { News } from "@/components/component/News";
import "../globals.css";
import { Navbar } from "@/components/component/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  source: { id: string | null; name: string };
  author: string ;
  title: string;
  description: string ;
  url: string;
  urlToImage: string ;
  publishedAt: string;
  content: string ;
}

interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category({ params }: CategoryProps) {
  const [headlines, setHeadlines] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
          params: {
            q: params.category,
            apiKey: '9e9a218b1e9f4528ac3f83dc638f7db1',
          },
          headers: {
            'Content-Type': 'application/json',
          },
          httpsAgent: new (require('https').Agent)({  
            rejectUnauthorized: false
          }),
        });
        const articles: Article[] = response.data.articles;
        const filteredArticles = articles.filter(article => article.urlToImage !== null).slice(0, 10);
        setHeadlines(filteredArticles);
      } catch (error) {
        console.error("Error fetching the top headlines:", error);
      }
    };
    fetchArticles();
  }, [params.category]);

  return (
    <>
      <Navbar />
      <div className="bg-[#F2F8F7] text-[#333] font-sans">
        <main className="container mx-auto py-8 px-6">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{params.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {headlines.map((e) => (
                <News
                  key={e.url} // Using URL as the unique key
                  author={e.author}
                  date={e.publishedAt.slice(0, 10)}
                  readingTime={"3 min"}
                  title={e.title}
                  content={e.description}
                  image={e.urlToImage}
                  url={e.url}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
