import React from 'react'
import { LikeOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import styles from './about.less';

import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

export default function About() {
    const notifyList = [
        {
            title: "什么是马上有码",
            link: "https://wwww.baidu.com"
        }, {
            title: "什么是马上有码",
            link: "https://wwww.baidu.com"
        }, {
            title: "什么是马上有码",
            link: "https://wwww.baidu.com"
        }, {
            title: "什么是马上有码",
            link: "https://wwww.baidu.com"
        }, {
            title: "什么是马上有码",
            link: "https://wwww.baidu.com"
        },
    ];

    const toggleSiderBar = (e: any) => {
        const mainBody = document.getElementById("mainBody")!;
        if (mainBody.classList.contains("hiddenSider")) {
            mainBody.classList.remove("hiddenSider");
        } else {
            mainBody.classList.add("hiddenSider");

        }
    }
    return (
        <div style={{ overflow: "hidden" }}>

            <div className={styles.mainBody + ' hiddenSider'} id='mainBody'>
                <div className={styles.mask} onClick={toggleSiderBar}></div>
                <Button icon={<MenuFoldOutlined />} className={styles.toggleOn} onClick={toggleSiderBar}></Button>

                <div className={styles.body}>
                    <h3>“天青色”为什么要“等烟雨”，周董青花瓷到底有多细节？</h3>
                    <p>
                        说起周杰伦，大家肯定想到的是他那首万人空巷的经典神曲——《青花瓷》，他是由周杰伦的老朋友方文山作词，自己作曲，发行于2007年11月，第二年便由央视邀请，周杰伦在春节晚会上现场演唱了这首歌，这首歌不仅体现出了中国传统青花瓷的传世之美，同时也刻画了一段婉约的爱情故事。

                    </p>
                    <img src="https://pic4.zhimg.com/80/v2-baa659cd23c0804ce4489d9c7cd227a3_720w.webp" alt="" />
                    <p></p>
                    <p>

                        那么“天青色”为什么要“等烟雨”呢？其实是有两种解释的，一、天青色这种颜色在天空中是无法自然出现的，它必须耐心等待一场不知何时会降临的雨，才能够在积云散去的郎郎情空，以天青的颜色出现。二、正上品的汝窑，他只有一种颜色，那就是天青色，但这个天青色并不是说来就来，有句诗说“雨过天青云破处，这般颜色做将来”，只有等待一场不知何时能降临的雨，湿度和温度刚刚好，才可以烧出天青色的正上品汝窑。
                    </p>
                    <img src="https://pic1.zhimg.com/80/v2-3f5be407b1d0740ff367467deda342ac_720w.webp" alt="" />
                </div>
                <div className={styles.siderBar}>

                    <div>
                        <h1>通知</h1>
                        <div className={styles.itemBox}>
                            {
                                notifyList.map((item, index) => (
                                    <a className={styles.link} href={item.link} key={index} target='_blank'>
                                        <span>{item.title}</span>
                                        <span>&gt;</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <h1>通知</h1>
                        <div className={styles.itemBox}>
                            {
                                notifyList.map((item, index) => (
                                    <a className={styles.link} href={item.link} key={index} target='_blank'>
                                        <span>{item.title}</span>
                                        <span>&gt;</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <h1>通知</h1>
                        <div className={styles.itemBox}>
                            {
                                notifyList.map((item, index) => (
                                    <a className={styles.link} href={item.link} key={index} target='_blank'>
                                        <span>{item.title}</span>
                                        <span>&gt;</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <Button icon={<MenuUnfoldOutlined />} className={styles.toggleBtn} onClick={toggleSiderBar}></Button>

                </div>

            </div>
        </div>
    )
}
