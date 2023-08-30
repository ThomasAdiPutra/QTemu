import React from 'react'
import Card from '../../moleculs/card'
import ContainerHeader from '../../moleculs/container-header'
import Avatar from '../../atoms/avatar'

export default function Members({ title, name }) {
  return (
    <div id='members'>
      <ContainerHeader title={'Members'} seeAll={true} />
      <div className="ps-5">
        <Card>
          <div className="flex">
            <Avatar
              rounded={true}
              bgColor={'bg-gray-500'}
            />
            <div className='flex flex-col justify-evenly ms-6'>
              <p>{ title }</p>
              <p>{ name }</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
