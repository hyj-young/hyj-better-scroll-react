/*
 * better-scroll 的 react 实现
 * designer: heyunjiang
 * time: 2018.11.02
 * update: 2018.11.05
 */
import React from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'

class scroll extends React.Component {
  constructor(props) {
    super(props)
    this.scrollElement = null;
    this.scrollObj = null;
    this.initScroll = this.initScroll.bind(this);
    this.destory = this.destory.bind(this);
  }
  componentDidMount() {
    this.initScroll();
  }
  componentWillUnmount() {
    this.destory();
  }
  initScroll() {
    if(!this.scrollObj) {
      this.scrollObj = new BScroll(this.scrollElement, {
        pullDownRefresh: true,
        pullUpLoad: true
      })

      if(this.props.pullingDownFunc) {
        this.scrollObj.on('pullingDown', () => {
          this.props.pullingDownFunc(() => {
            this.scrollObj.refresh();
            this.scrollObj.finishPullDown();
          });
        })
      }
      if(this.props.pullingUpFunc) {
        this.scrollObj.on('pullingUp', () => {
          this.props.pullingUpFunc(() => {
            this.scrollObj.refresh();
            this.scrollObj.finishPullUp();
          });
        })
      }
    }
  }
  destory() {
    if(this.scrollObj) {
      this.scrollObj.destroy()
    }
  }

  render() {
    return (<div 
      ref={(scrollElement) => { this.scrollElement = scrollElement; }}
      className={this.props.className||'scrollDefaultBox'}>
        {this.props.children}
      </div>)
  }
}

scroll.propTypes = {
  children: PropTypes.element.isRequired,
  pullingDownFunc: PropTypes.func,
  pullingUpFunc: PropTypes.func,
  className: PropTypes.string
}
export default scroll