import React from 'react';
import PropTypes from 'prop-types'; //react 15.x后propTypes使用独立插件
import '../../../css/index.css'

import Carousel from '../public/carousel'
class OneNote extends React.Component {
	static setTime;
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
	componentDidMount () {
	}
	componentWillUnmount () {
	}
    render(){
    	const {data} = this.props
	    return (
	      <div style={{position: 'relative',background: '#fff', height: '100%', width: '100%', overflow: 'hidden'}}>
	      	<Carousel />
        </div>
	    );
   }
}

export default OneNote;