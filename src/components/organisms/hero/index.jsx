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
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/12 font-bold">Location</div>
            <div className="w-full md:w-10/12">{location}</div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/12 font-bold">Members</div>
            <div className="w-full md:w-10/12">{members}</div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/12 font-bold">Organizer</div>
            <div className="w-full md:w-10/12">{organizer}</div>
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
