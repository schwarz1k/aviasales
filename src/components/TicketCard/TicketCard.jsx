import React from 'react'

import ticketCardStyles from './TicketCard.module.scss'

const TicketCard = () => {
  return (
    <li className={ticketCardStyles['ticket']}>
      <div className={ticketCardStyles['ticket__card']} role="button" aria-label="Выбрать билет">
        <div className={ticketCardStyles['ticket__price']}>
          <p>13 400 Р</p>
          <img src="/src/assets/CardLogo.png" alt="Логотип авиакомпании перевозчика" />
        </div>
        <div className={ticketCardStyles['ticket__segments']}>
          <div className={ticketCardStyles['ticket__segment']}>
            <div className={ticketCardStyles['ticket__route']}>
              <p>MOW - HKT</p>
              <time>10:45 - 08:00</time>
            </div>
            <div className={ticketCardStyles['ticket__duration']}>
              <p>В пути</p>
              <p>21ч 15м</p>
            </div>
            <div className={ticketCardStyles['ticket__stops']}>
              <p>2 пересадки</p>
              <p>HKG, JNB</p>
            </div>
          </div>
          <div className={ticketCardStyles['ticket__segment']}>
            <div className={ticketCardStyles['ticket__route']}>
              <p>MOW - HKT</p>
              <time>11:20 - 00:50</time>
            </div>
            <div className={ticketCardStyles['ticket__duration']}>
              <p>В пути</p>
              <p>13ч 30м</p>
            </div>
            <div className={ticketCardStyles['ticket__stops']}>
              <p>1 пересадка</p>
              <p>HKG</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TicketCard
