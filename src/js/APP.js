import React from 'react';
import PropTypes from 'prop-types'; //react 15.x后propTypes使用独立插件
import '../css/index.css'
import { Layout, Menu, Icon, Timeline, Avatar, Divider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
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
    render(){
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
          <div style={{width: '80%', height: '100%', margin: 'auto'}}>
          	<div style={{height: '15%'}}>
	          	<Divider orientation="left" style={{fontSize: '20px'}}>基本信息</Divider>
				<table style={{width: '100%', textAlign: 'left', tableLayout:'fixed'}}>
	      			<tbody>
		      			<tr>
		      				<td>现居：南京</td>
		      				<td>籍贯：山东</td>
		      				<td>年龄：26</td>
		      			</tr>
		      		</tbody>
		      	</table>
          	</div>
          	<div style={{height: '30%'}}>
	          	<Divider orientation="right" style={{fontSize: '20px'}}>教育背景</Divider>
	      		<table style={{width: '100%', textAlign: 'left', tableLayout:'fixed'}}>
	      			<tbody>
		      			<tr>
		      				<td>华北理工大学</td>
		      				<td>本科</td>
		      				<td>2014.9--2016.6</td>
		      			</tr>
		      			<tr>
		      				<td>华北理工大学 迁安学院</td>
		      				<td>专科</td>
		      				<td>2011.9--2014.6</td>
		      			</tr>
	      			</tbody>
	      		</table>
      		</div>
      		<div style={{height: '30%'}}>
      			<Divider orientation="left" style={{fontSize: '20px'}}>工作经历</Divider>
	      		<table style={{width: '100%', textAlign: 'left', tableLayout:'fixed'}}>
	      			<tbody>
		      			<tr>
		      				<td>南京创网网络技术有限公司</td>
		      				<td>WEB前端工程师</td>
		      				<td>2016.7--2018.6</td>
		      			</tr>
		      			<tr>
		      				<td>南京振古技术有限公司</td>
		      				<td>WEB前端工程师</td>
		      				<td>2016.2--2016.5</td>
		      			</tr>
	      			</tbody>
	      		</table>
      		</div>
          </div>
        </div>
      </Content>
    </Layout>
  </Layout>
    );
   }
}

export default App;