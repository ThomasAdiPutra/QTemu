import React from 'react'
import CardHeader from '../../atoms/card-header'
import CardBody from '../../atoms/card-body'

export default function Card({ title, className = '', children }) {
  return (
    <div className={`bg-gray-300 px-6 pt-3 pb-5 ${className}`}>
      { title && <CardHeader title={title}/> }
      <CardBody>
        { children }
      </CardBody>
    </div>
  )
}
