// 全局共享数据示例
import { initArticleList } from '@/constants';
import { useState } from 'react';

export interface ArticleComment{
  date:Date,
  user:string,
  content:string
}

export interface Repository{
  id: number,
  name: string,
  owner_id: number,
  owner_login: string,
  updated_at: string,
  has_issues: boolean
}

export interface Article{
  id: string,
  archived: boolean,
  color: string,
  followers: number,
  has_funding_file: boolean,
  hl_name: string,
  hl_trunc_description: string,
  language: string,
  mirror: boolean,
  owned_by_organization: boolean,
  public: boolean,
  repo:{repository:Repository},
  sponsorable:boolean,
  topics:string[],
  type: string,
  help_wanted_issues_count: number,
  good_first_issue_issues_count: number,
  starred_by_current_user: boolean
  comments?:ArticleComment[],
}


const useArticle = () => {
  const [articleList, setArticleList] = useState<Article[]>(initArticleList);
  return {
    articleList,
    setArticleList
  };
};


export default useArticle;
