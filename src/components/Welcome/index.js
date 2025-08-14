import React from 'react';
import { Card, Col, Row } from 'antd';
import './index.less';
import Sidebar from "../Sidebar";
import Footer from "../Footer";

/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {

  render() {
    console.log('Welcome component is rendering');
    return (
      <div className="ant-layout-base">
        <Sidebar />
        <div id="main-content-div" className={this.props.collapse ? 'ant-layout-main-collapse' : 'ant-layout-main'}>
          <div>

            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" variant="borderless">
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" variant="borderless">
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" variant="borderless">
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Welcome;
