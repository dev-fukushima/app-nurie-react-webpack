import React from 'react';

class Colors extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      colors:[
        {'color':'#a7dbd1'},
        {'color':'#c4e6be'},
        {'color':'#b5cfe0'},
        {'color':'#cebed4'},
        {'color':'#d9d0c9'},
        {'color':'#efd25c'},
        {'color':'#62afa0'},
        {'color':'#50946c'},
        {'color':'#3d6c8b'},
        {'color':'#906d9f'},
        {'color':'#5f4f43'},
        {'color':'#e59b27'},
        {'color':'#42746a'},
        {'color':'#225c3a'},
        {'color':'#1c4057'},
        {'color':'#553562'},
        {'color':'#412e1f'},
        {'color':'#7d5d2b'},
        {'color':'#e0b173'},
        {'color':'#eaa1ba'},
        {'color':'#ec9f97'},
        {'color':'#FFFFFF'},
        /*{'color':''},
        {'color':''},*/
        {'color':'#d68148'},
        {'color':'#ce547f'},
        {'color':'#c1554a'},
        {'color':'#d4d5d5'},
        /*{'color':''},
        {'color':''},*/
        {'color':'#a6541e'},
        {'color':'#923455'},
        {'color':'#923c33'},
        {'color':'#4d5556'},
        /*{'color':''},
        {'color':''}*/
        ]
    }
    this.selectColor = this.selectColor.bind(this);
  }
  selectColor(e){
    let _target = e.currentTarget,
    _selectColor = _target.getAttribute('data-color');
    //this.$emit('selectedColor',_selectColor);
    
    this.props.onColorUpdate(_selectColor);
  }
  render(){
    return (
      <div className="step2">
        <div className="step2_text">
          <img src="img/thankyou_img05.png" alt="2,エリアをタップして塗る" />
        </div>
        <div className="colorboxWrap">
          <div className="colorbox" id="colorbox">
            <div id="colorBtnArea">
              <ul className="cf">
              {
                this.state.colors.map((item,index)=>{
                  return <li key={index}>
                  <span onClick={this.selectColor} data-color={item.color} style={{background:item.color}}> </span>
                      </li>
                    }
                )
              }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Colors;
