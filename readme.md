# hyj-better-scroll-react

## install

use `npm i hyj-better-scroll-react -S` to install

## dependencies && versions

1. react: 15+
2. better-scroll: 1.13.2

## api

```javascript
import Scrollbars from 'hyj-better-scroll-react'

const scroll = ({children, pullingDownFunc, pullingUpFunc, className, initOptions})=>{
  const ScrollbarsProps = {
    className: className || 'commonScrollCardBoxContainer',
    pullingDownFunc,
    pullingUpFunc,
    initOptions
  }
  return (
    <div className='commonScrollCardBoxPoor'>
      <Scrollbars {...ScrollbarsProps}>
        {children}
      </Scrollbars>
    </div>
  )
}
```

> 说明：目前只实现了下拉刷新和下拉加载2个可选功能，传入的 className 用于控制容器宽高
