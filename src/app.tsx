// 运行时配置
import { RuntimeConfig ,Link} from 'umi';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '访客' };
}

export const layout:RuntimeConfig['layout']  = () => {
  return {
    logo: '/logo.jpg',
    layout:"top",
    primaryColor:"#ff9201",
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
    menu: {
      locale: false,
    },
  };
};
