import React from 'react';
import ReactDOM from 'react-dom';

import Items from './component/items.js';
import Colors from './component/colors.js';
import SvgDrawArea from './component/svgdrawarea.js';

class App extends React.Component {
  makeImg(){

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
      <Items stepUpdate="stepUpdate"></Items>
      <SvgDrawArea ref="svgDrawArea" setcolor="selectedcolor" svgsrc="loadedsvg"></SvgDrawArea>
      <Colors selectedColor="selectedColor"></Colors>
      <div id="makebox" className="step2" onClick={this.makeImg}>
      <span id="make" className="btn">
      <img src="img/thankyou_saveBtn.png" alt="決定する" />
      </span>
      </div>
      <footer>
      <span>Copyright &copy; example.com All Rights Reserved.</span>
      </footer>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.querySelector('#app'));
