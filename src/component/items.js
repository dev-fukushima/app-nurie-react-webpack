import React from 'react';

class Items extends React.Component {
  constructor(props,context){
    super(props, context)
    this.states ={
      items:[{"btnsrc":"img/btn01.png","svgdata":"svg/01.svg"},
      {"btnsrc":"img/btn02.png","svgdata":"svg/02.svg"},
      {"btnsrc":"img/btn03.png","svgdata":"svg/03.svg"},
      {"btnsrc":"img/btn04.png","svgdata":"svg/04.svg"},
      {"btnsrc":"img/btn05.png","svgdata":"svg/05.svg"},
      {"btnsrc":"img/btn06.png","svgdata":"svg/06.svg"}
      ]
    }
    this.selectItem = this.selectItem.bind(this);
  }
  selectItem(e){
      let _target = e.currentTarget,
      _parent = _target.parentNode,
      _svgPath = _target.getAttribute('data-svg'),
      _btns = document.querySelectorAll('div.itembtn');
      _btns.forEach(function(t){
        t.classList.remove('selectedItem');
      });
      _parent.classList.add('selectedItem');
      
      this.props.onStepUpdate('is-step2',_svgPath);
  }
  render(){
    return (
      <div className="step1 step2" id="itembox">
        <div id="itemArea" className="itemArea">
          {
            this.states.items.map((item,index) =>{
              return <div key={index} className="itembtn">
              <span className="border"></span>
              <span className="item" data-svg={item.svgdata} onClick={this.selectItem}>
              <img src={item.btnsrc} /></span>
              </div>
            })
          }
        </div>
        <ul className="arr">
          <li className="left-arr"><a href="#" className="btn-left"></a></li>
          <li className="right-arr"><a href="#" className="btn-right"></a></li>
        </ul>
      </div>
    )
  }
}

export default Items;
