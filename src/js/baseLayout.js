import React from 'react';
import PropTypes from 'prop-types'; //react 15.x后propTypes使用独立插件
import '../css/index.css'
import { Layout, Avatar, Menu, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import BaseFirst from './components/AboutMe/baseFirst'
import OneNote from './components/IRemember/One'

class BaseLayout extends React.Component {
	// propTypes 和 defaultProps 都需要static声明，不然会报错
	static propTypes = {
		onClick: PropTypes.string,
		location: PropTypes.object
	};
	static defaultProps = {
    	 onClick: '123'
	};
	constructor (props) {
		super(props)
		this.state = {
			collapsed: false,
		}
	}

	toggle = () => {
	    this.setState({
	      collapsed: !this.state.collapsed,
	    });
	}

    render (){
	    return (
	       <Router>
		   <Layout>
		    <Sider
	          trigger={null}
	          collapsible
	          collapsed={this.state.collapsed}
	        >
	          <div className="logo" >
	          	<span>李小泽 </span>
	          </div>
	          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
	            <Menu.Item key="1" >
	              <Link to='/' />
	              <Icon type="user" />
	              <span>关于我</span>
	            </Menu.Item>
	            <Menu.Item key="2">
	              <Link to='/note' />
	              <Icon type="file-text" />
	              <span>我记的</span>
	            </Menu.Item>
	            <Menu.Item key="3">
	              <Icon type="video-camera" />
	              <span>来访的</span>
	            </Menu.Item>
	          </Menu>
	        </Sider>
		    <Layout style={{height: '100vh' }}>
		      <Header style={{ background: '#fff', padding: 0 }}>
	            <Icon
	              className="trigger"
	              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
	              onClick={this.toggle}
	            />
	          </Header>
		      <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
	      		<Route
	      			exact
		            path='/'
		            component={() => <BaseFirst />}
		          />
		         <Route
		         	path='/note'
		         	component={() => <OneNote />}
		         />
		      </Content>
		    </Layout>
		  </Layout>
		  </Router>
	    );
   }
}

export default BaseLayout;