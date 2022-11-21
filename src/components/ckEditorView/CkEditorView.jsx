import React, { Component } from 'react';
import styles from './CkEditorView.css';
import { ScrollSync, ScrollSyncNode } from 'scroll-sync-react';

class CkEditorView extends Component {
  constructor(props) {
    super(props);
    this.refMinimap = React.createRef();
    this.refMainView = React.createRef();
    this.refMinimaphighlighter = React.createRef(); //TODO: add a highlighter window
    this.state = {
      scrollPercent: 0,
      windowScroll: 0,
      windowWidth: document.documentElement.clientWidth,
      startX: 0,
      scrollLeft: 0,
      mouseDown: false,
      topPosition: 0,
    };
  }

  renderPage = (isLeft) => (
    <>
      <h1>Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae <span style={{color:(isLeft ? 'red': '')}}> quas vel sint commodi </span>
        repudiandae consequuntur
        voluptatum {(isLeft ? '': <span style={{color:'green'}}> laborum numquam blanditiis harum quisquam </span>)} eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>
      <p className="pcolor-orange">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>
      <p className="pcolor-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>
      <p className="pcolor-magenta">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>
      <p className="pcolor-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>
      <p className="pcolor-orange">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>
      <p className="pcolor-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>
      <p className="pcolor-magenta">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>
      <p className="pcolor-orange">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>
      <p className="pcolor-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
        amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
        temporibus enim commodi iusto libero magni deleniti quod quam
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
        labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
        ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
        aliquam numquam totam ratione voluptas quod exercitationem fuga.
        Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
      </p>
    </>
  );

  computePreviewStyle = () => {
    //const { windowWidth } = this.state;
    //const { width } = this.props;
    //const scale = width / windowWidth;
    console.log('minimap width = ', this.refMinimap.current.clientWidth);
    return { transform: `scale(${scale || 1})` };
  };

  computeMinimapStyle = () => {
    const { width, height } = this.props;
    return { width, height };
  };

  handleClickEvent = (e) => {
    const currentTop = e.target.getBoundingClientRect().top;
    document.getElementById('minimapWindow').scrollTop = Math.round(currentTop);
  };

  render() {
    //const previewStyle = this.computePreviewStyle();

    return (
      <div className="container" id="container-view">
        <div className="split-view">
          <ScrollSync>
            <div className="minimap-root">
              <div
                className="content"
                style={{ display: 'flex', position: 'relative', height: 700 }}
              >
                <ScrollSyncNode>
                  <div style={{ overflow: 'auto' }}>
                    <section style={{ height: 1000 }}>
                      <div className="main-view" id="main-view" ref={this.refMainView}>
                        {this.renderPage(true)}
                      </div>
                    </section>
                  </div>
                </ScrollSyncNode>
                <ScrollSyncNode>
                  <div style={{ overflow: 'auto' }}>
                    <section style={{ height: 1000 }}>
                      <div className="main-view" id="main-view1">
                        {this.renderPage(false)}
                      </div>
                    </section>
                  </div>
                </ScrollSyncNode>
              </div>

              <div className="minimap-view">
                <ScrollSyncNode>
                  <div
                    className="minimapWindow"
                    id="minimapWindow"
                    ref={this.refMinimap}
                    onClick={this.handleClickEvent}
                  >
                    {this.renderPage(false)}
                  </div>
                  
                </ScrollSyncNode>
              </div>
            </div>
          </ScrollSync>
        </div>
      </div>
    );
  }
}

export default CkEditorView;
