"use client"
import { News } from "@/components/component/News";
import Image from "next/image";
import "./globals.css";
import { Navbar } from "@/components/component/Navbar";
import { useEffect, useState } from "react";

import axios from "axios";
export default function Home() {
  const [headlines,setheadlines]=useState([]);
  useEffect(()=>{
    const fetchArticles = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9e9a218b1e9f4528ac3f83dc638f7db1");
        const articles = response.data.articles;
        var count=0,i=0;
        var arr=[];
        while(count<=10 && i<articles.length){
          if(articles[i].urlToImage!=null) {
            arr.push(articles[i]);
            count=count+1;
          }
          i=i+1;
        }
        setheadlines(arr);
      } catch (error) {
        console.error("Error fetching the top headlines:", error);
      }
    };
    fetchArticles();

  },[])
  return (
    <>
      <Navbar/>
      <div className="bg-[#F2F8F7] text-[#333] font-sans">
      <main className="container mx-auto py-8 px-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Headlines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {headlines.map((e)=>(
              <News key={e.source.id} author={e.author} date={e.publishedAt.slice(0,10)} readingTime={"3 min"} title={e.title} content={e.description} image={e.urlToImage} url={e.url}/>
            ))}
          </div>
        </section>
      </main>
    </div>

    {/* <div className="bg-[#f5f5f5] text-[#333] font-sans">
      <main className="container mx-auto py-8 px-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {headlines.map((e)=>(
              <News author={e.author} date={e.publishedAt} readingTime={"3 min"} title={e.title} content={e.description} image={e.urlToImage} url={e.url}/>
            ))}
          </div>
        </section>
      </main>
    </div> */}
    </>
  );
}
