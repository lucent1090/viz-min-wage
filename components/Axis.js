import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { get } from 'lodash'
import * as d3 from 'd3'

import { ELEMENT_TYPE } from '../constants/chart-constants'
import { chartsContent } from '../constants/chartsContent'
import Line from './Line'
import Marker from './Marker'
import Legend from './Legend'

const _ = {
  get,
}

class Axis extends Component {
  constructor(props) {
    super(props)

    this.drawAxis = this.drawAxis.bind(this)
    this.drawElements = this.drawElements.bind(this)

    this.state = {
      line: undefined,
      xScale: undefined,
    }
  }

  componentDidMount() {
    if (this.props.chartKey in chartsContent) {
      this.drawAxis(this.props.painting, this.props.chartKey)
    }
  }

  componentWillReceiveProps(nextProps) {
    d3.selectAll('#AxisX').remove()
    d3.selectAll('#AxisY').remove()
    d3.selectAll('#grid').remove()
    this.setState({ line: undefined, xScale: undefined })

    if (nextProps.chartKey in chartsContent) {
      this.drawAxis(nextProps.painting, nextProps.chartKey)
    }
  }

  drawAxis(painting, chartKey) {
    const { xRange, yRange } = chartsContent[chartKey].range
    const { axisUnit, axisSetting } = chartsContent[chartKey]
    const { svg, width, height } = painting

    const xScale = d3.scaleLinear()
                     .domain(xRange)
                     .range([0, width])
    const yScale = d3.scaleLinear()
                     .domain(yRange)
                     .range([height, 0])
    const line = d3.line()
                   .x(function(d) { return xScale(d.x) })
                   .y(function(d) { return yScale(d.y) })

    this.setState({ line, xScale })

    // draw grid
    svg.append('g')
       .attr('id', 'grid')
       .attr('stroke', '#303030')
       .attr('opacity', '0.8')
       .attr('stroke-width', '1')
       .call(
         d3.axisLeft(yScale)
           .ticks(axisSetting.gridTick)
           .tickSize(-width)
           .tickFormat('')
      )
    // draw axis
    svg.append('g')
       .attr('id', 'AxisX')
       .attr('transform', `translate(0,${height})`)
       .attr('fill', '#303030')
       .attr('opacity', '0.8')
       .call(
         d3.axisBottom(xScale)
           .tickFormat(d3.format('d'))
       )
    svg.append('g')
       .attr('id', 'AxisY')
       .attr('fill', '#303030')
       .attr('opacity', '0.8')
       .call(
         d3.axisLeft(yScale)
           .ticks(axisSetting.axisYTick)
       )

    d3.selectAll('.domain').remove()
    d3.selectAll('#AxisX .tick line').remove()
    d3.selectAll('#AxisY .tick line').remove()

    // add axis unit in last tick position
    const axisXLabels = d3.selectAll('#AxisX .tick text')
    const lastX = axisXLabels.size() - 1
    const that = this
    d3.selectAll('#AxisX .tick text')
      .each(function (data, idx) {
        const sel = d3.select(this)
        if (idx === lastX) {
          sel.text(axisUnit.x)
        }else{
          if (that.props.isMobile && axisSetting.skewWheMobile) {
            sel.attr('dx', '-0.7rem')
               .attr("transform", "rotate(-33)")

          }
        }
      })

    const axisYLabels = d3.selectAll('#AxisY .tick')
    const lastY = axisYLabels.size() - 1
    d3.selectAll('#AxisY .tick')
      .each(function (data, idx) {
        if (idx === lastY) {
          d3.select(this)
            .append('text')
            .text(axisUnit.y)
            .attr('fill', 'black')
            .attr('transform', 'translate(0,-15)')
        }
      })
  }

  drawElements() {
    const arr = []

    if (this.props.chartKey in chartsContent) {
      chartsContent[this.props.chartKey].elements.map((val, idx) => {

        if (val.type === ELEMENT_TYPE.line) {
          arr.push(
            <Line
              key={idx}
              data={val}
              painting={this.props.painting}
              line={this.state.line}
            />
          )
        }

        if (val.type === ELEMENT_TYPE.marker) {
          arr.push(
            <Marker
              key={idx}
              data={val}
              painting={this.props.painting}
              xScale={this.state.xScale}
            />
          )
        }
      })
    }

    return arr
  }

  render() {
    const alreadySetState = ((this.state.line !== undefined)
                         && (this.state.xScale !== undefined))
    return (
      <div>
        <Legend
          chartKey={this.props.chartKey}
          painting={this.props.painting}
        />
        {alreadySetState ? (this.drawElements()) : <div />}
      </div>
    )
  }
}

Axis.propTypes = {
  painting: PropTypes.object,
  chartKey: PropTypes.string,
}

Axis.defaultProps = {
  painting: { svg: undefined, width: 300, height: 500 },
  chartKey: '',
}

function mapStateToProps(state) {
  return ({
    isMobile: _.get(state, 'section.isMobile', true),
  })
}

export default connect(mapStateToProps)(Axis)
