/*
 * @Author: 若泉
 * @Date: 2021-10-13 20:26:05
 * @LastEditors: your name
 * @Description:
 */
import { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>输入框的确认按钮没有变成”搜索“</Text>
        <Input
          confirmType='search'
          placeholder='请输入'
        />
      </View>
    )
  }
}
