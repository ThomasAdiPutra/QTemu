import React from 'react'
import Card from '../../moleculs/card'
import Avatar from '../../atoms/avatar'
import Button from '../../atoms/button'

export default function Hero({ title, location, members, organizer }) {
  return (
    <Card className='mt-4'>
      <div className='flex'>
        <Avatar
          size={180}
          border={true}
        />
        <div className='flex flex-col flex-1 ms-5 justify-between'>
          <p className='text-lg font-bold'>{title}</p>
          <div className="flex flex-row">
            <div className="w-4/12 md:w-3/12 lg:w-1/12 font-bold">Locations</div>
            <div className="sm:w-10/12">{location}</div>
          </div>

          <div className="flex flex-row">
            <div className="w-4/12 md:w-3/12 lg:w-1/12 font-bold">Members</div>
            <div className="sm:w-10/12">{members}</div>
          </div>

          <div className="flex flex-row">
            <div className="w-4/12 md:w-3/12 lg:w-1/12 font-bold">Organizer</div>
            <div className="sm:w-10/12">{organizer}</div>
          </div>

          <div>
            <Button>
              <p className='px-6'>Join Us</p>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
