import React, { useState } from 'react'

export const SecHeader = ({ items, onClicksArray }) => {
  const [isShow, setIsShow] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    isShow && (
      <main className='SecHeader'>
        <section className='center'>
          {items.map((v, i) => {
            const className = `menuCell center ${
              currentIndex === i ? 'hightLight' : ''
            }`
            return (
              <div
                key={i}
                className={className}
                onClick={(e) => {
                  setCurrentIndex(i)
                  if (typeof onClicksArray[i] === 'function')
                    onClicksArray[i](e)
                }}
              >
                {v}
              </div>
            )
          })}
        </section>
        <section className='center' onClick={() => setIsShow(false)}>
          HIDE
        </section>
      </main>
    )
  )
}

export default SecHeader