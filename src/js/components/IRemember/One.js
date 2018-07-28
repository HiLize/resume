import React from 'react';
import PropTypes from 'prop-types'; //react 15.x后propTypes使用独立插件
import '../../../css/index.css'

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
		this.state = {
			index: 1
		}
	}
	componentDidMount () {
		this.setTime = setInterval(() => {
			// clearTimeout(this.setTime)
			this.click()
		}, 4000)
	}
	componentWillUnmount () {
		clearInterval(this.setTime)
	}
	click () {
		// this.setTime
		// console.log('hello', this.refs.slide, this.state.index)
		var div = this.refs.slide
		var x = 1
		var dur = 0
		if (this.state.index < 5) {
			x =  this.state.index + 1
			dur = 2
		}
		console.log(x * 665, dur, x)
		div.style.transform = `translate(-${x * 665}px, 0)`
		div.style.transition = `transform ${dur}s`
		this.setState({
			index: x
		})
	}
    render(){
    	const {data} = this.props
	    return (
	      <div style={{position: 'relative',background: '#fff', height: '100%', width: '100%', overflow: 'hidden'}}>
	      	<div style={{position: 'absolute', top: '20px', left: '0',color: '#fff', cursor: 'pointer',zIndex: '1000'}} onClick={this.click.bind(this)}>cahnge</div>
	      	<div ref='slide' className='slideContent'>
	      		<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#f00000'}}>04</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#ff0000'}}>01</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#fff000'}}>02</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#ffff00'}}>03</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#fffff0'}}>14</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#ffeeee'}}>11</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#fffeee'}}>12</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#ffffee'}}>13</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#fffffe'}}>24</div>
        	</div>
        </div>
	    );
   }
}

export default OneNote;