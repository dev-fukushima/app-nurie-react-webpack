import React from 'react';

class SvgDrawArea extends React.Component {
  constructor(props,context){
    super(props,context);
    this.states ={
      response:'',
      selected_path_object:null,
      svgsrc:props.svgsrc
    }
    this.refDom = React.createRef();
    this.loadstart_svg = this.loadstart_svg.bind(this);
  }
  loadstart_svg(){
    let _this = this;
    fetch(this.states.svgsrc)
    .then(response => response.text())
      .then(function(response){
        _this.states.response = response;
        _this.refDom.current.innerHTML = '';
        _this.refDom.current.insertAdjacentHTML('beforeend',_this.states.response);
        _this.resizeSvg();
        _this.setPathClickEvent();
      });
  }
  fillColorSvgPath(_color){
    if(this.states.selected_path_object) this.states.selected_path_object.setAttribute('fill',_color);
  }
  resizeSvg(){
    let _width = window.outerWidth,
    _svg = this.refDom.current.getElementsByTagName('svg')[0];
    this.refDom.current.style.minHeight = _width;
    _svg.style.width = _width;
    _svg.style.height = _width;
  }
  setPathClickEvent(){
    let _pathObj = document.querySelectorAll('path,circle,polygon'),
    _this = this,
    pathClickEvent = function(e){
      _this.states.selected_path_object = e.currentTarget;
      _pathObj.forEach(function(t){
        t.removeAttribute('class');
      })
      _this.states.selected_path_object.classList.add('selectedpath');
    };
    _pathObj.forEach(function(t){
      t.removeEventListener('click',pathClickEvent);
      t.addEventListener('click',pathClickEvent,false);
    })
  }
  render(){
    return (
      <div className="drawArea">
      <div className="fukidashi step4">
        <img src="img/think_fukidashi.png" alt="画像を長押しして保存してください" />
      </div>
        <div id='dom' className="domArea col-12 step2" ref={this.refDom}></div>
      </div>
    )
  }
}

export default SvgDrawArea;
