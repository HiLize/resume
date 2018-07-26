import React from 'react';
import PropTypes from 'prop-types'; //react 15.x后propTypes使用独立插件
import '../../../css/index.css'

class OneNote extends React.Component {
	// propTypes 和 defaultProps 都需要static声明，不然会报错
	static propTypes = {
		data: PropTypes.object
	};
	static defaultProps = {
    	data: {}
	};
	constructor (props) {
		super(props)
		this.state = {
			index: 0
		}
	}
	click () {
		console.log('hello', this.refs.slide, this.state.index)
		var div = this.refs.slide
		var x = 0
		if (this.state.index < 3) {
			x =  this.state.index + 1
		}
		div.style.transform = `translate(-${x * 500}px, 0)`
		div.style.transition = 'transform 4s'
		this.setState({
			index: x
		})
	}
    render(){
    	const {data} = this.props
	    return (
	      <div style={{position: 'relative',background: '#fff', height: '100%', width: '100%', overflow: 'hidden'}}>
	      	<div style={{position: 'absolute', top: '20px', left: '0',color: '#fff', cursor: 'pointer',zIndex: '1000'}}>cahnge</div>
	      	<div ref='slide' className='slideContent'>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee'}}>1</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee'}}>2</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee'}}>3</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee'}}>4</div>
        	</div>
        </div>
	    );
   }
}

export default OneNote;