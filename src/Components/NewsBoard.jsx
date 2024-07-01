import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({catagory}) => {

    const [articles,setArticle] = useState([]);

    useEffect(()=>{

        let apiKey = import.meta.env.VITE_API_KEY;
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=${apiKey}`;
        fetch(url).then(Response=> Response.json()).then(data=> setArticle(data.articles));
        console.log(articles);
    },[catagory])

  return (
    <div>
        <h2 className="text-center my-4 fs-1">Latest<span className="badge bg-danger mx-2">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
       
    </div>
  )
}

export default NewsBoard