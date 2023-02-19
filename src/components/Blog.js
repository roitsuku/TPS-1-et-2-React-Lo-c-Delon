import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import Article from './Article';


const Blog = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/articles')
          .then(res => {
            console.log(res.data);
            setArticles(res.data)
          })
      }, []);

    return (
        <div>
            <div>
            {articles.map(article =>
                <div id="container">
                    <Article props={article} />
                </div>
            )}
            </div>
        </div>
    );
};

export default Blog;