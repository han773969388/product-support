import React from 'react';
import {Icon} from 'antd';

// 定义某个表的dataSchema, 结构跟querySchema很相似, 见下面的例子
// 注意: 所有的key不能重复

// 这个配置不只决定了table的schema, 也包括用于新增/删除的表单的schema

module.exports = [
  {
    key: 'id',
    title: 'ID',
    dataType: 'int',
    primary: true,
    showType: 'normal',
    showInTable: true,
    disabled: false,
    render: (text, record) => text,
  },
  {
    key: 'source_id',
    title: 'Product Id',
    dataType: 'int',
  },
  {
    key: 'item_id',
    title: 'Item Id',
    dataType: 'int',
  },
  {
    key: 'site_id',
    title: 'Site Id',
    dataType: 'int',
  },
  {
    key: 'managed',
    title: 'managed',
    dataType: 'boolean',
  },
  {
    key: 'created_at',
    title: 'created_at',
    dataType: 'varchar',
  },
  {
    key: 'start_time',
    title: 'start_time',
    dataType: 'varchar',
  },
  {
    key: 'end_time',
    title: 'end_time',
    dataType: 'varchar',
  },
  {
    key: 'historical_item_ids',
    title: 'historical_item_ids',
    dataType: 'varchar',
  },
  {
    key: 'selected_at',
    title: 'selected_at',
    dataType: 'varchar',
  },
  {
    key: 'user_id',
    title: 'user_id',
    dataType: 'int',
  },
];
