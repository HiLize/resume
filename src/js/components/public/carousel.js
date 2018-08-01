import React from 'react';
import PropTypes from 'prop-types'; //react 15.x后propTypes使用独立插件
import '../../../css/index.css'
const colors = ['red', 'pink', 'purple', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow']

class Carousel extends React.Component {
	// propTypes 和 defaultProps 都需要static声明，不然会报错
	static propTypes = {
		data: PropTypes.array
	};
	static defaultProps = {
    	data: ['01', '02', '03', '04']
	};
	constructor (props) {
		super(props)
		this.state = {
			index: 0
		}
	}
	componentDidMount () {
		var container = this.refs.container.getBoundingClientRect()
		var width = (this.props.data.length + 1) * container.width
		this.setState({
			singleWidth: container.width,
			width: width
		})
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
			
			div.style.transform = `translate(-${x * this.state.singleWidth}px, 0)`
			div.style.transition = `transform ${dur}s`
			this.setState({
				index: x
			})
			this.click(false)
		}, timeout)
		
	}
    render(){
    	const {data} = this.props
    	const {width, singleWidth} = this.state
    	var style = {
			display: 'inline-block',
			height: '100%',
			width: `${singleWidth}px`,
			backgroundColor: colors[0],
			boxSizing: 'border-box'
    	}
	    return (
	    	<div ref='container' style={{width: '100%', height: '100%'}}>
		    	<div ref='slide' className='slideContent' style={{width: width + 'px'}}>
		    		{data.map(function(info, index) {
		    			return <div
		    			style={Object.assign({}, style, {backgroundColor: colors[index]})}
		    			key={index}>
		    				{info}
		    			</div>
		    		})}
		    		<div style={style}>{data[0]}</div>
	        	</div>
        	</div>
	    );
   }
}

export default Carousel;