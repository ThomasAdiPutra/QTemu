import React from 'react'
import Card from '../../moleculs/card'
import Button from '../../atoms/button'
import ContainerHeader from '../../moleculs/container-header'

export default function PastMeetup({ data }) {
  return (
    <div id='past-meetup'>
      <ContainerHeader title={'Past Meetup'} seeAll={true}/>
      <div className="flex justify-between ps-5 lg:space-x-6 flex-wrap ">
      {data?.map((item, index) => (
        <Card key={index} title={ item.title } className='flex-1 md:me-2 sm:my-2 me-1'>
          <p className='font-bold'>{ item.body }</p>
          <div className='my-5'>
            <span>{item.count}</span> &nbsp;
            <span className='text-gray-400'>went</span>
          </div>
          <Button>View</Button>
        </Card>
      ))}
    </div>
    </div>
  )
}
