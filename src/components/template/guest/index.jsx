import React from 'react'
import Header from '../../organisms/header'
import PastMeetup from '../../organisms/past-meetup'
import Members from '../../organisms/members'
import About from '../../organisms/about-meetup'
import NextMeetup from '../../organisms/next-meetup'
import Hero from '../../organisms/hero'
import Footer from '../../organisms/footer'

export default function Guest({ hero, nextMeetup, member, pastMeetup }) {
  return (
    <div>
      <Header />
      <div className="px-10 space-y-6">
        <Hero
          title={hero.title}
          location={hero.location}
          members={hero.members}
          organizer={hero.organizer}
        />
        <NextMeetup 
          title={nextMeetup.title} 
          date={nextMeetup.date} 
          desc={nextMeetup.desc}
        />
        <About />
        <Members 
          title={ member.title }
          name={ member.name } 
        /> 
        <PastMeetup 
          data={ pastMeetup }
        />
        <Footer />
      </div>
    </div>
  )
}
