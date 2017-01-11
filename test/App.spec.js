/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const { shallow, mount } = require('enzyme')
const ShowCard = require('../js/ShowCard')
const { shows } = require('../public/data.json')

describe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })

  it('should render all the showCards', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter given new state', () => {
    // shallow doesnt allow for interaction
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    // or can use ShowCard as above instead of class name, this type of jquery type find only 
    // avaliable with full mount
    expect(wrapper.find('.show-card').length).to.equal(2)
  })

})