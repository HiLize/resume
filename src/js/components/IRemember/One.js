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
		// this.setTime = setInterval(() => {
			// clearTimeout(this.setTime)
			this.click(true)
		// }, 0)
	}
	componentWillUnmount () {
		clearTimeout(this.setTime)
		// clearInterval(this.setTime)
	}
	click (isfirst) {
		clearTimeout(this.setTime)
		var timeout = 4000
		if (this.state.index === 1 && !isfirst) {
			timeout = 0
		}
		this.setTime = setTimeout(() => {
			let div = this.refs.slide
			let x = 1
			let dur = 0
			if (this.state.index < 5) {
				x =  this.state.index + 1
				dur = 2
			}
			console.log(this.state.index, timeout, dur)
			
			div.style.transform = `translate(-${x * 665}px, 0)`
			div.style.transition = `transform ${dur}s`
			this.setState({
				index: x
			})
			this.click(false)
		}, timeout)
		
	}
    render(){
    	const {data} = this.props
	    return (
	      <div style={{position: 'relative',background: '#fff', height: '100%', width: '100%', overflow: 'hidden'}}>
	      	<div ref='slide' className='slideContent'>
	      		<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#f00000'}}>04</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#ff0000'}}>01</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#fff000'}}>02</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#ffff00'}}>03</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#fffff0'}}>14</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#ff0000'}}>11</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#fffeee'}}>12</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#ffffee'}}>13</div>
	        	<div style={{display: 'inline-block',height: '500px', width: '665px',border: '1px solid #eee',backgroundColor: '#fffffe'}}>24</div>
        	</div>
        </div>
	    );
   }
}

export default OneNote;