import React from 'react'
import ReactDOM from 'react-dom'
import Scroll from './index'

let initOptions = {
	scrollBars: true
}

ReactDOM.render(<Scroll initOptions = {initOptions}>
		<div>hello world</div>
	</Scroll>, document.body)