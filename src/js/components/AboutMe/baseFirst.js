import React from 'react';
import PropTypes from 'prop-types'; //react 15.x后propTypes使用独立插件

import TableList from '../public/tableList'

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

class BaseFirst extends React.Component {
	// propTypes 和 defaultProps 都需要static声明，不然会报错
	static propTypes = {
		data: PropTypes.object
	};
	static defaultProps = {
    	data: {}
	};
	constructor (props) {
		super(props)
		this.state = {}
	}
    render(){
    	const {data} = this.props
	    return (
	      <div style={{ background: '#fff', height: '100%', width: '100%', overflow: 'hidden'}}>
        	<div style={{height: '100%', width: '90%', overflow: 'auto', margin: 'auto'}}>
	      		{baseInfo.map(function (data, index) {
					return (<TableList key={index} data={data} />)
	      		})}
      		</div>
        </div>
	    );
   }
}

export default BaseFirst;