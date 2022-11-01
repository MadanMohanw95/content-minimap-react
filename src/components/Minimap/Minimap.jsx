import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

class Minimap extends Component {
  constructor(props) {
    super(props);
    this.refMinimap = React.createRef();
    this.state = {
      scrollPercent: 0,
      windowScroll: 0,
      windowWidth: document.documentElement.clientWidth,
    };
  }

  componentDidMount() {
    document
      .getElementById('main-view')
      .addEventListener('scroll', this.updateScrollPercent);
    document
      .getElementById('main-view')
      .addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    document
      .getElementById('main-view')
      .removeEventListener('scroll', this.updateScrollPercent);
    document
      .getElementById('main-view')
      .removeEventListener('resize', this.updateWidth);
  }

  updateWidth = () => {
    this.setState(() => ({
      windowWidth: document.getElementById('main-view').clientWidth,
    }));
  };

  updateScrollPercent = () => {
    const winScroll =
      document.getElementById('main-view').scrollTop ||
      document.getElementById('main-view').scrollTop;

    const height =
      document.getElementById('main-view').scrollHeight -
      document.getElementById('main-view').clientHeight;

    // console.table({
    //   winScroll,
    //   height,
    //   scrollHeight: document.documentElement.scrollHeight,
    //   clientHeight: document.documentElement.clientHeight,
    // });

    const scrolled = winScroll / height;
    this.scrollToPercent();
    this.setState(() => ({
      scrollPercent: scrolled,
    }));
  };

  scrollToPercent = () => {
    const { scrollPercent } = this.state;
    const minimap = this.refMinimap.current;

    const minimapHeight = minimap.clientHeight;
    const scrollHeight = minimap.scrollHeight;

    const height = scrollHeight - minimapHeight;

    minimap.scrollTo(0, height * scrollPercent);
  };

  computePreviewStyle = () => {
    const { windowWidth } = this.state;
    const { width } = this.props;
    const scale = width / windowWidth;
    return { transform: `scale(${scale || 1})` };
  };

  computeMinimapStyle = () => {
    const { width, height } = this.props;
    return { width, height };
  };

  handleClickEvent = (e) => {
    console.dir(e);
    console.log(e.target.getBoundingClientRect());
    // console.log(' this.refMinimap.current.pageYOffset', e.target.offsetTop);
    const currentoffsetTop = e.target.offsetTop;
    console.log('currentoffsetTop', currentoffsetTop);
    const geigt = e.target.getBoundingClientRect().top;
    console.log('geigt', geigt);
    const minimap = this.refMinimap.current;

    const sum = currentoffsetTop + geigt;
    console.log('sum', sum);
    // document.getElementById('scrolling_div').scrollTop = topPos;
    document.getElementById('main-view').scrollTop = sum;
    //  console.table({
    //   clientY: e.clientY,
    //   scrollHeigh: e.target.scrollHeight,
    //   clientHeigh: e.target.clientHeight,
    //   pageY: e.pageY,
    // });
  };

  render() {
    const { of } = this.props;
    const previewStyle = this.computePreviewStyle();
    const minimapStyle = this.computeMinimapStyle();

    return (
      <div className="minimapWindow" style={minimapStyle} ref={this.refMinimap}>
        <div
          className="minimapWindow__preview"
          style={previewStyle}
          onClick={this.handleClickEvent}
        >
          {of}
        </div>
      </div>
    );
  }
}

Minimap.propTypes = {
  of: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Minimap.defaultProps = {
  width: 145,
  height: 300,
};

export default Minimap;
