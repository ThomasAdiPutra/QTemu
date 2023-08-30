import React from 'react'
import Card from '../../moleculs/card'
import ContainerHeader from '../../moleculs/container-header'

export default function NextMeetup({ title, date, desc }) {
  return (
    <div>
      <ContainerHeader title={'Next Meetup'} seeAll={true} />
      <div className="ps-5">
        <Card>
          <p className='font-bold'>{ title }</p>
          <p className='text-gray-400 my-1'>{ date }</p>
          <p className='font-medium'>{ desc }</p>
        </Card>
      </div>
    </div>
  )
}
