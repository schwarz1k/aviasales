import React from 'react'

import ticketCardStyles from './TicketCard.module.scss'

const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price) + ' Р'
}

const formatTime = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
}

const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}ч ${mins}м`
}

const formatStops = (stops) => {
  if (stops.length === 0) return 'без пересадок'
  if (stops.length === 1) return '1 пересадка'
  return `${stops.length} пересадки`
}

const TicketCard = ({ ticket }) => {
  const [toSegment, backSegment] = ticket.segments

  return (
    <li className={ticketCardStyles['ticket']}>
      <div className={ticketCardStyles['ticket__card']}>
        <div className={ticketCardStyles['ticket__price']}>
          <p>{formatPrice(ticket.price)}</p>
          <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt={`Логотип ${ticket.carrier}`} />
        </div>
        <div className={ticketCardStyles['ticket__segments']}>
          <div className={ticketCardStyles['ticket__segment']}>
            <div className={ticketCardStyles['ticket__route']}>
              <p>{`${toSegment.origin} - ${toSegment.destination}`}</p>
              <time>
                {`${formatTime(toSegment.date)} - ${formatTime(
                  new Date(new Date(toSegment.date).getTime() + toSegment.duration * 60000)
                )}`}
              </time>
            </div>
            <div className={ticketCardStyles['ticket__duration']}>
              <p>В пути</p>
              <p>{formatDuration(toSegment.duration)}</p>
            </div>
            <div className={ticketCardStyles['ticket__stops']}>
              <p>{formatStops(toSegment.stops)}</p>
              <p>{toSegment.stops.join(', ')}</p>
            </div>
          </div>
          <div className={ticketCardStyles['ticket__segment']}>
            <div className={ticketCardStyles['ticket__route']}>
              <p>{`${backSegment.origin} - ${backSegment.destination}`}</p>
              <time>
                {`${formatTime(backSegment.date)} - ${formatTime(
                  new Date(new Date(backSegment.date).getTime() + backSegment.duration * 60000)
                )}`}
              </time>
            </div>
            <div className={ticketCardStyles['ticket__duration']}>
              <p>В пути</p>
              <p>{formatDuration(backSegment.duration)}</p>
            </div>
            <div className={ticketCardStyles['ticket__stops']}>
              <p>{formatStops(backSegment.stops)}</p>
              <p>{backSegment.stops.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TicketCard
