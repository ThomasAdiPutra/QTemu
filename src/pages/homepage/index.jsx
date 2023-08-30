import React from 'react'
import Guest from '../../components/template/guest'

export default function HomePage() {
  const hero = {
    title: 'Hacktiv8 Meetup',
    location: 'Jakarta, Indonesia',
    members: 1078,
    organizer: 'Adhy Wiranata',
  }

  const nextMeetup = {
    title: 'Awesome meetup and event',
    date: '25 January 2019',
    desc: (
      <span>
        Hello, Javascript & Node.js Ninjas! <br /> 
        Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! <br />
        The meetup format will contain some short stories and technical talks. <br />
        If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. <br /><br />
        Remember to bring a photo ID to get through building security. <br /><br />
        ----- <br /><br />
        See you there! <br /><br />
        Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
      </span>
    ),
  };

  const pastMeetup = [
    {
      title: '27 November 2017',
      body: '#39 JakartaJS April Meetup with kumparan',
      count: 139,
    },
    {
      title: '27 Oktober 2017',
      body: '#38 JakartaJS April Meetup with Blibli',
      count: 113,
    },
    {
      title: '27 September 2017',
      body: '#37 JakartaJS April Meetup with Hacktiv8',
      count: 110,
    },
  ];
  return (
    <div>
      <Guest
        hero={hero}
        nextMeetup={nextMeetup}
        member={{ title: 'Organizer', name: 'Adhy Wiranata' }}
        pastMeetup={pastMeetup}
      />
    </div>
  )
}
