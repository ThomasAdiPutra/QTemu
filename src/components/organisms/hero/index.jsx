import React from 'react'
import Card from '../../moleculs/card'
import Avatar from '../../atoms/avatar'
import Button from '../../atoms/button'

export default function Hero({ title, location, members, organizer }) {
  return (
    <Card className='mt-4'>
      <div className='flex flex-col md:flex-row'>
        <div className="flex-1 md:flex-none flex justify-center">
          <Avatar
            size={180}
            border={true}
          />
        </div>
        <div className='flex flex-col flex-1 space-y-1 mt-2 md:mt-0 md:space-y-0 md:ms-5 justify-between'>
          <p className='text-lg font-bold'>{title}</p>
          <div className="flex flex-col md:flex-row">
            <div className="w-4/12 md:w-3/12 lg:w-2/12 xl:w-1/12 font-bold">Location</div>
            <div className="w-10/12">{location}</div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-4/12 md:w-3/12 lg:w-2/12 xl:w-1/12 font-bold">Members</div>
            <div className="w-10/12">{members}</div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-4/12 md:w-3/12 lg:w-2/12 xl:w-1/12 font-bold">Organizer</div>
            <div className="w-10/12">{organizer}</div>
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
