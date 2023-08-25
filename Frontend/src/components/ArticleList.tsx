import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import parse, { HTMLReactParserOptions, Element, domToReact } from 'html-react-parser'
import React from 'react';
import { Avatar, List, Space,Tag } from 'antd';
import {useModel} from 'umi'
import { SystemColors } from '@/constants';
import styles from './ArticleList.less'

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

interface P{
  start:number
  top:number
}
const ArticleList: React.FC<P> = (props) => {

  const { articleList} = useModel('article');
  const options: HTMLReactParserOptions = {
    replace: domNode => {

        if (domNode instanceof Element) {
            const tagName = domNode.tagName.toLowerCase();
            const attribs = domNode.attribs;
            //统一字体
            if (attribs.style) {
                attribs.style = attribs.style.replaceAll(/font-family\s*?:(([^";<>]*?"[^";<>]*?")|(\s*[^";<>\s]*))*;?/g, "")
            }
            //图片预览
            if (domNode.tagName == "img") {
                
            }

            // 超链处理
            if (tagName == 'a' && domNode.attribs?.href && !domNode.attribs.href.startsWith('/') && !domNode.attribs.href.startsWith('http')) {

            }
        }
    }
};

  return <List
    itemLayout="vertical"
    size="large"
    pagination={props.top<6 ? undefined : {
      onChange: (page) => {
        
      },
      pageSize: 5,
    }}
    dataSource={articleList.slice(props.start,props.top+props.start)}
    // footer={
    //   <span>马上有码 - 倾情奉献</span>
    // }
    renderItem={(item) => (
      <List.Item
        key={item.id}
        actions={[
          <IconText icon={StarOutlined} text={item.followers+''} key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text={Math.ceil(Math.random()*10000)+''} key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text={Math.ceil(Math.random()*100)+''} key="list-vertical-message" />,
        ]}
        extra={
          <div className={styles.list_extra}>
            <Tag color="#108ee9">{item.language}</Tag>
            <div>{new Date(item.repo.repository.updated_at).toLocaleString()}</div>
          </div>
        }
      >
        <List.Item.Meta
          avatar={<Avatar style={{ backgroundColor:SystemColors[item.hl_name[0].charCodeAt(0)].color, color: "#fff" }}>{item.hl_name[0].toUpperCase()}</Avatar>}
          title={<a target='_blank' href={`https://github.com/${item.repo.repository.owner_login}/${item.repo.repository.name}`}>{parse(item.hl_name,options)}</a>}
          description={parse(item.hl_trunc_description,options)}
        />
        <Space wrap>
          {item.topics.map(t=><Tag  key={t}>{t}</Tag>)}
        </Space>
      </List.Item>
    )}
  />
}

export default ArticleList