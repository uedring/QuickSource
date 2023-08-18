import { Col, Layout, Row, Space, Tag, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';
import { Languages, SystemColors } from '@/constants';

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <Row style={{flexDirection:"column",alignItems:"center"}}>

        <Typography.Title level={1} className={styles.title}>
          欢迎来到 - <strong>{name}</strong> 
        </Typography.Title>

        <p>专业的源码分享平台</p>
        <Space wrap size='large' align='center' style={{padding:150,justifyContent:'center'}}>
          {Languages.map((item,index)=>{
            const tag = <Tag className={styles.language_box} key={index} color={SystemColors[index+30].color}>{item}</Tag>;
            return tag;
          })}
        </Space>
      </Row>
  );
};

export default Guide;
