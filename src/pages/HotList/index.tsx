import ArticleList from '@/components/ArticleList'
import React from 'react'

export default function HotListPage() {
  return (
    <ArticleList start={20} top={5}/>
  )
}
