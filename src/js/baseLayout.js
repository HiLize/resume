import React from 'react';
import PropTypes from 'prop-types'; //react 15.x后propTypes使用独立插件
import '../css/index.css'
import { Layout, Avatar } from 'antd';
const { Header, Content, Sider } = Layout;

import TableList from './components/tableList'

const baseInfo = [
	{
		title: '基本信息',
		info: [
			['现居：南京', '籍贯：山东', '年龄：26']
		]
	},
	{
		title: '教育背景',
		info: [
			['华北理工大学', '本科', '2014.9--2016.6'],
			['华北理工大学迁安学院', '专科', '2011.9--2014.6']
		] 
	},
	{
		title: '工作经历',
		info: [
			['南京创网网络技术有限公司', 'WEB前端工程师', '2016.7--2018.6'],
			['南京振古技术有限公司', 'WEB前端工程师', '2016.2--2016.5']
		]
	}
]
class BaseLayout extends React.Component {
	// propTypes 和 defaultProps 都需要static声明，不然会报错
	static propTypes = {
		onClick: PropTypes.string
	};
	static defaultProps = {
    	 onClick: '123'
	};
	constructor (props) {
		super(props)
		this.state = {}
	}
    render (){
    	var breakpoin = {
		  xs: '480px',
		  sm: '576px',
		  md: '768px',
		  lg: '992px',
		  xl: '1200px',
		  xxl: '1600px',
		}
	    return (
		   <Layout>
		    <Sider width='18%' breakpoin={breakpoin}>
		      <div style={{width: '100%', textAlign: 'center', margin: '15% auto'}}>
		      	{/* 图片路径用require引用才能打包出来。为什么？？？ */}
		      	<Avatar size='large' src={require('../images/image.jpg')} />
		      </div>
		      <div style={{color: '#fff', textAlign: 'center', marginTop: '50%'}}>
		      	<div style={{fontSize: '28px'}}>李泽</div>
		      	<div className='baseInfoDivStyle'>前端工程师</div>
		      	<div className='baseInfoDivStyle'>18305155754</div>
		      	<div className='baseInfoDivStyle'>hi_lize@163.com</div>
		      </div>
		    </Sider>
		    <Layout style={{height: '100vh' }}>
		      <Content style={{height: '100%', position: 'relative' }}>
		        <div style={{ background: '#fff', height: '100%', width: '100%', overflow: 'hidden'}}>
		        	<div style={{height: '100%', width: '80%', overflow: 'auto', margin: 'auto'}}>
			      		{baseInfo.map(function (data, index) {
			      			return <TableList key={index} data={data} />
			      		})}
		      		</div>
		        </div>
		      </Content>
		    </Layout>
		  </Layout>
	    );
   }
}

export default BaseLayout;