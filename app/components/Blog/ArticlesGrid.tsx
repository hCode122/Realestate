'use client'

import { useState, useEffect } from "react"
import { useGetArticlesQuery, useGetArticlesByCatQuery } from "@/lib/redux/api/mainApi"
import { Article } from "@/app/types"
import ArticleCard from "./ArticleCard"

const ArticlesGrid = ({catId} : {catId:number | null}) => {
    
    const {
        data: allArticlesData,
        isLoading: allArticlesLoading,
        error: allArticlesError
      } = useGetArticlesQuery(undefined, {
        skip: catId != null // Skip if catId exists
      });
      
      const {
        data: catArticlesData,
        isLoading: catArticlesLoading,
        error: catArticlesError
      } = useGetArticlesByCatQuery(catId!, {
        skip: catId == null // Skip if catId doesn't exist
      });
      
      // Determine which result to use
      const data = catId != null ? catArticlesData : allArticlesData;
      const isLoading = catId != null ? catArticlesLoading : allArticlesLoading;
      const error = catId != null ? catArticlesError : allArticlesError;

   
    return (
        <div className="grid grid-cols-2 gap-16 justify-center px-24 mt-4 mb-4 pb-16 min-h-[100%]">
            {
                data && data.data.data.map((article : Article, index : number) => (
                    <ArticleCard article={article} />
                ))
            }
        </div>
    )
}

export default ArticlesGrid