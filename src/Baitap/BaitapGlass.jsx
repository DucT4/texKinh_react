import React, { Component } from 'react'

const arrGlass = [
  { id: 1, img: './img/v1.png', name: 'GUCCI G8850U', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
  { id: 2, img: './img/v2.png', name: 'GUCCI G8759H', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
  { id: 3, img: './img/v3.png', name: 'DIOR D6700HQ', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
  { id: 4, img: './img/v4.png', name: 'DIOR D6005U', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
  { id: 5, img: './img/v5.png', name: 'PRADA P8750', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
  { id: 6, img: './img/v6.png', name: 'PRADA P9700', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
  { id: 7, img: './img/v7.png', name: 'FENDI F8750', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
  { id: 8, img: './img/v8.png', name: 'FENDI F8500', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
  { id: 9, img: './img/v9.png', name: 'FENDI F4300', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
]
export default class BaitapGlass extends Component {

  state = {
    glassProduct: {
      id: 1,
      name: 'GUCCI G8850U',
      desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
      img: './img/v1.png'
    }
  }


  renderGlass = () => {
    let output = arrGlass.map((glass) => {
      return <div key={glass.index} className='col' >
        <button onClick={() => {
          this.setState({
            glassProduct: glass
          })
        }} >
          <img src={glass.img} alt="..." width={120} height={51} />
        </button>
      </div>
    });
    return output;
  }


  render() {
    const { img, id, desc, name } = this.state.glassProduct;
    return (
      <div className=' glass'>
        <div className='header'>
          <h3>TRY GLASSES APP ONLINE</h3>
        </div>
        <div className=' row'>
          <div className='col-6'>
            <img src="./img/model.jpg" alt="./img/model.jpg" className='model' />
            <img src="./img/v1.png" alt="..." className='glassEx' />

            <div className='content'>
              <h3>GUCCI G8850U</h3>
              <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
            </div>
          </div>
          <div className='col-6 hienThi'>
            <img src="./img/model.jpg" alt="./img/model.jpg" className=' model model2' />
            <img src={img} alt="..." className='glassHienthi' />

            <div className='content'>
              <h3>{name}</h3>
              <p>Light pink square lenses define these <br /> sunglasses, ending with amother of pearl <br /> effect tip.</p>
            </div>
          </div>
        </div>
        <div className='row round'>
            {this.renderGlass()}
        </div>
      </div>
    )
  }
}
