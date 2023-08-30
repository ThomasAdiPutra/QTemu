import React from 'react'
import ContainerHeader from '../../moleculs/container-header'

export default function About() {
  return (
    <div>
      <ContainerHeader title={'About Meetup'} />
      <div className="ps-6">
        <p className='mb-2'>Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.</p>
        <p>Twitter: @JakartaJS and we use the hashtag #jakartajs</p>
      </div>
    </div>
  )
}
