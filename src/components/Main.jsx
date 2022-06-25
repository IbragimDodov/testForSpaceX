import React from 'react'

function Main() {
  return (
    <main>
      <div className="left-side">
        <h1 className='main__title'>Путешествие</h1>
        <h5 className='main__subtitle'>на красную планету</h5>
        <button className='left-side__btn'>Начать путешествие</button>
      </div>
      <div className="right-side">
        <div className="right-side__block right-side__block--1">
          <span className='right-side__block-info-sup'>мы</span>
          <h2 className='right-side__block-count'>1</h2>
          <span className='right-side__block-info-sub'>на рынке</span>
        </div>
        <div className="right-side__block right-side__block--2">
          <span className='right-side__block-info-sup'>гарантируем</span>
          <h2 className='right-side__block-count'>50%</h2>
          <span className='right-side__block-info-sub'>безопасность</span>
        </div>
        <div className="right-side__block right-side__block--3">
          <span className='right-side__block-info-sup'>календарик за</span>
          <h2 className='right-side__block-count'>2001</h2>
          <span className='right-side__block-info-sub'>в подарок</span>
        </div>
        <div className="right-side__block right-side__block--4">
          <span className='right-side__block-info-sup'>путешествие</span>
          <h2 className='right-side__block-count'>597</h2>
          <span className='right-side__block-info-sub'>дней</span>
        </div>
      </div>
    </main>
  )
}

export default Main