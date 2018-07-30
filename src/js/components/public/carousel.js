import React from 'react';
import PropTypes from 'prop-types'; //react 15.x后propTypes使用独立插件
import '../../../css/index.css'

class Carousel extends React.Component {
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
	componentDidMount () {
		this.click(true)
	}
	componentWillUnmount () {
		clearTimeout(this.setTime)
	}
	click (isfirst) {
		clearTimeout(this.setTime)
		var timeout = 4000
		if (this.state.index === 0 && !isfirst) {
			timeout = 0
		}
		this.setTime = setTimeout(() => {
			let div = this.refs.slide
			let x = 0
			let dur = 0
			if (this.state.index < 4) {
				x =  this.state.index + 1
				dur = 2
			}
			
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
	    	<div ref='slide' className='slideContent'>
	        	<div style={{display: 'inline-block',height: '100%', width: '665px',border: '1px solid #eee',backgroundColor: '#ff0000'}}>01</div>
	        	<div style={{display: 'inline-block',height: '100%', width: '665px',border: '1px solid #eee',backgroundColor: '#00ff00'}}>02</div>
	        	<div style={{display: 'inline-block',height: '100%', width: '665px',border: '1px solid #eee',backgroundColor: '#0000ff'}}>03</div>
	        	<div style={{display: 'inline-block',height: '100%', width: '665px',border: '1px solid #eee',backgroundColor: '#eeeeee'}}>04</div>
	        	<div style={{display: 'inline-block',height: '100%', width: '665px',border: '1px solid #eee',backgroundColor: '#ff0000'}}>11</div>
        	</div>
	    );
   }
}

export default Carousel;