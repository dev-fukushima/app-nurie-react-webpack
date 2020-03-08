import React from 'react';
import ReactDOM from 'react-dom';

import Items from './component/items.js';
import Colors from './component/colors.js';
import SvgDrawArea from './component/svgdrawarea.js';

class App extends React.Component {
  constructor(props,context){
    super(props,context);
    this.states = {
      loadedsvg :null,
      selectedcolor:'',
      selectedSvgData:null
    }
    this.svgDrawArea = React.createRef();
    this.stepUpdate = this.stepUpdate.bind(this);
    this.selectedColor = this.selectedColor.bind(this);
    this.makeImg = this.makeImg.bind(this);
  }
  stepUpdate(step,_path){
    let _app = document.querySelectorAll('div.app');
    _app[0].classList.remove('is-step1','is-step2','is-step3','is-step4');
    _app[0].classList.add(step);

    if(_path){
      this.states.loadedsvg = _path;
      this.svgDrawArea.current.states.svgsrc = this.states.loadedsvg;
      this.svgDrawArea.current.loadstart_svg();
    }
  }
  selectedColor(_color){
    this.states.selectedcolor = _color;
    this.svgDrawArea.current.fillColorSvgPath(this.states.selectedcolor);
  }
  imageToBase64(img, mime_type) {
      let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
      canvas.width  = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0,img.width,img.height);
      // To Base64
      return canvas.toDataURL(mime_type);
  }
  makeImg(){
    let _this = this,
    svg = document.getElementsByTagName('svg')[0],
    data = new XMLSerializer().serializeToString(svg),
    url = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(data))),
    //img = $('<img>',{'class':'dlsvg',width:WIDTH,height:HEIGHT});
    img = new Image();
    img.className = 'dlsvg';
    img.width = 640;
    img.height = 640;

    let background = document.querySelectorAll('rect')[0].getAttribute('fill');
    img.onload = function(e){
      let src = _this.imageToBase64(e.currentTarget,'image/png'),
        _drawimg = new Image();
        _drawimg.width = e.currentTarget.width;
        _drawimg.height = e.currentTarget.height;
        _drawimg.className = 'makeimg';
        _drawimg.onload = function(e){
          let _dom = _this.svgDrawArea.current.refDom.current;
            _dom.innerHTML = '';
            let _result = '<a href='+ this.src +' download="' + this.src +'">\
            '+ e.currentTarget +'\
            </a>';
            let _a = document.createElement('a');
            _a.download = this.src;
            _a.appendChild(e.currentTarget);
            _dom.appendChild(_a);
            //_dom.innerHTML = _result;
            _this.stepUpdate('is-step3');
            _dom.getElementsByTagName('img')[0].style.opacity = 1;
              setTimeout(function(){
                document.querySelectorAll('img.makeimg')[0].classList.add('bounceIn','animated');
              },400);
              setTimeout(function(){
                let _fuki = document.querySelectorAll('div.fukidashi')[0];
                _fuki.style.display = 'block';
                _fuki.classList.add('bounceIn','animated');
              },800);
        }
        _drawimg.src = src;
      }
      img.src = url;
  }
  render(){
    return (
      <div className="app is-step1">
      <header className="headerArea">
      <h1>
      <img src="img/thankyou_img01.png" alt="" />
      </h1>
      <div className="txArea Area-01 fireworks">
      <p>好きな色でキャラクターを塗って画像を保存しましょう。</p>
      </div>
      </header>
      <p className="nuriettl">
      <img src="img/thankyou_img03.png" alt="" id="mask" />
      </p>
      <div className="txArea Area-02">
      <div className="exTextArea">
      <p className="tx-01">スマホで遊べるぬりえです。好きな色にぬってオリジナルの動物を作ることができます。作ったぬりえはLINEやFacebookのアイコンにもすることができます。</p>
      </div>
      <p className="tx-02 step1 step2">
      <img src="img/thankyou_img04_ttl.png" alt="1,ぬるキャラを選ぶ" />
      </p>
      </div>
      <Items onStepUpdate={this.stepUpdate}></Items>
      <SvgDrawArea ref={this.svgDrawArea} setcolor={this.states.selectedcolor} svgsrc={this.states.loadedsvg}></SvgDrawArea>
      <Colors onColorUpdate={this.selectedColor}></Colors>
      <div id="makebox" className="step2" onClick={this.makeImg}>
      <span id="make" className="btn">
      <img src="img/thankyou_saveBtn.png" alt="決定する" />
      </span>
      </div>
      <footer>
      <small>Copyright &copy; example.com All Rights Reserved.</small>
      </footer>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.querySelector('#app'));
