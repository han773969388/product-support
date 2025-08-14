// 定义某个表的querySchema
// schema的结构和含义参考下面的例子
// 注意: 所有的key不能重复

module.exports = [
  {
    key: 'productId',  // 传递给后端的字段名
    title: 'productId',  // 前端显示的名称
    placeholder: '请输入productId',  // 提示语, 可选
    dataType: 'varchar',
    showType: 'normal',
  },
];
