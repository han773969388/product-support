/**
 * 定义sidebar和header中的菜单项
 *
 * 一些约定:
 * 1.菜单最多3层;
 * 2.只有"叶子"节点才能跳转;
 * 3.所有的key都不能重复;
 */

// 可用的图标见这里: https://ant.design/components/icon-cn/

// 定义siderbar菜单
const sidebarMenu = [
  {
    key: 'productSearch',
    name: 'Product Search',
    icon: 'eye',
  },
  {
    key: 'hello',
    name: 'Hello',
    icon: 'eye',
  },
];

export default sidebarMenu;
