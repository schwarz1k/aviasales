import React from 'react'

import TicketCard from '../TicketCard/TicketCard.jsx'

import ticketListStyles from './TicketList.module.scss'

const TicketList = () => {
  return (
    <ul className={ticketListStyles['ticket-list']}>
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </ul>
  )
}

export default TicketList
