import React from 'react'
import { mount } from 'enzyme'
import { Badge } from './Badge'

describe('<Badge />', () => {
  it('should render a simple badge', () => {
    const wrapper = mount(
      <Badge
        label={6}
        backgroundColor='#1A2B3C'
        color='#1A293C'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a spinning badge', () => {
    const wrapper = mount(
      <Badge
        label={6}
        backgroundColor='#1A2B3C'
        color='#1A293C'
        pending
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
