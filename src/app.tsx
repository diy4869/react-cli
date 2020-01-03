/*
 * @Author: last order
 * @Date: 2019-08-18 20:59:06
 * @LastEditTime : 2020-01-03 18:15:20
 */
import { Input, Row, Col } from 'antd'
import React from 'react'

const { Search } = Input

var obj = {}

obj?.test1?.test2 ?? 1

interface State {
  value: string,
  list: [object]
}
class App extends React.Component<{}, State> {
  constructor (props: any) {
    super(props)
    this.state = {
      value: '',
      list: [{
        name: '1'
      }]
    }

    this.Search = this.Search.bind(this)
  }

  // 在组件已经被渲染到 DOM 中后运行
  componentDidMount () {

  }
  // 组件销毁的时候，可以解除事件绑定等
  componentWillUnmount() {
  }

  Search (value: String): void {
    console.log(this)
    this.state.list.push({
      name: value
    })
    this.setState({
      list: this.state.list
    })
  }

  render () {
    return (
      <React.Fragment>
        <Row justify="center">
          <Col span={12}>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onSearch={this.Search}
            />
          </Col>
        </Row>
        <ul>
          {
            this.state.list.map((item: any, index: number) => {
            return <li key={index}>{item.name}</li>
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default App
