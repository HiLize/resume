import React from 'react';
import PropTypes from 'prop-types'; //react 15.x后propTypes使用独立插件
import { Divider } from 'antd';

class TableList extends React.Component {
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
    	console.log(this.props.data)
    	const {data} = this.props
	    return (
	      <div style={{width: '100%', margin: 'auto', minHeight: '20%'}}>
	      	<Divider orientation="left" style={{fontSize: '20px'}}>{data.title}</Divider>
			<table style={{width: '100%', textAlign: 'left', tableLayout:'fixed'}}>
	  			<tbody>
	  				{data.info.map(function (info, index) {
	  					var td = []
	  					for (let i = 0; i < info.length; i++) {
	  						td.push(<td key={i}>{info[i]}</td>)
	  					}
	  					return <tr key={index}>{td}</tr>
	  				})}
	      		</tbody>
	      	</table>
	      </div>
	    );
   }
}

export default TableList;