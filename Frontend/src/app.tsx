// 运行时配置
import { RuntimeConfig, Link } from 'umi';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '访客' };
}

export const layout: RuntimeConfig['layout'] = () => {
  return {
    logo: '/logo.jpg',
    layout: "top",
    primaryColor: "#ff9201",
    menuItemRender(menuItemProps, defaultDom, menuProps) {
      if (menuItemProps.isUrl || !menuItemProps.path) {
        return defaultDom;
      }

      return <Link to={menuItemProps.path}>
        {menuItemProps.pro_layout_parentKeys &&
          menuItemProps.pro_layout_parentKeys.length > 0 &&
          menuItemProps.icon}
        {defaultDom}
      </Link>;
    },
    footerRender(props, defaultDom) {
      return <div className='footer'>
        <p>Copyright © 2023 Quick Source. All Rights Reserved. 马上有码 版权所有</p>
        <p className='beian-link'>
          <a href="http://beian.miit.gov.cn/" target='_blank'>
            <img src='/icp.gov.png' />
            沪ICP备2023021708号-1</a>
          <span>|</span>
          <a href="https://www.beian.gov.cn/" target='_blank'>
            <img src='/beian.gov.png' />

            赣公网安备36072702000173号</a>
        </p>

      </div>
    },
    menu: {
      locale: false,
    },
  };
};
