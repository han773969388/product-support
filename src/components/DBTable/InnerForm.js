import React from 'react';
import {Button, Col, Icon, Row} from 'antd';
import FormSchemaUtils from './InnerFormSchemaUtils';
import Utils from '../../utils';

/**
 * 内部表单组件
 */
class InnerForm extends React.PureComponent {

  // 什么情况会导致InnerForm re-render?
  // 1. 这个组件没有状态
  // 2. 只有props会导致re-render, 但由于这个组件是pure的, 所以只有表名变化时才会re-render

  componentDidMount() {
    this.processQueryParams();
  }

  componentDidUpdate() {
    this.processQueryParams();
  }

  /**
   * 处理url参数, 填入表单
   */
  processQueryParams() {
    const params = Utils.getAllQueryParams();
    if (Object.keys(params).length > 0) {
      this.formComponent.setFieldsValue(params);
    }
  }


  /**
   * 处理表单提交
   *
   * @param e
   */
  handleSubmit = (e) => {
    // e.preventDefault();
    // 这种用法是非官方的, 直接从代码里扒出来的...
    // this.formComponent是通过ref方式获取到的一个react组件
    const oldObj = this.formComponent.getFieldsValue();
    // 还是要交给上层组件处理, 因为要触发table组件的状态变化...
    this.props.parentHandleSubmit(oldObj);
  };

  render() {
    const { tableName, schema} = this.props;

    // 根据当前的tableName, 获取对应的表单组件
    const FormComponent = FormSchemaUtils.getForm(tableName, schema);

    // 表单的前面是一堆输入框, 最后一行是按钮
    return (
      <div className="ant-advanced-search-form">
        <Row>
          <FormComponent ref={(input) => { this.formComponent = input; }} />
          <Col span={12} offset={12} style={{ textAlign: 'right' }}>
            <Button type="primary" onClick={this.handleSubmit}><Icon type="search" />查询</Button>
          </Col>
        </Row>
      </div>
    );
  }

}

export default InnerForm;
