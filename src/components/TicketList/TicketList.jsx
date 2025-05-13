import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoAirplaneSharp } from 'react-icons/io5'

import { fetchAllTickets, selectSortedTickets } from '../../redux/slices/ticketSlice'
import { showMoreTickets } from '../../redux/slices/displaySlice'
import TicketCard from '../TicketCard/TicketCard'

import ticketListStyles from './TicketList.module.scss'

const TicketList = () => {
  const dispatch = useDispatch()
  const { initialLoading, loadingMore, error, isComplete } = useSelector((state) => state.tickets)
  const tickets = useSelector(selectSortedTickets)
  const ticketsToShow = useSelector((state) => state.display.ticketsToShow)
  const visibleTickets = tickets.slice(0, ticketsToShow)

  useEffect(() => {
    dispatch(fetchAllTickets())
  }, [dispatch])

  if (initialLoading && tickets.length === 0) {
    return (
      <div className={ticketListStyles['loading-container']}>
        <div className={ticketListStyles['airplane-loader']}>
          <IoAirplaneSharp className={ticketListStyles['airplane-icon']} />
          <div className={ticketListStyles['cloud']}></div>
          <div className={ticketListStyles['cloud']}></div>
          <div className={ticketListStyles['cloud']}></div>
        </div>
        <p className={ticketListStyles['loading-text']}>Загрузка билетов...</p>
      </div>
    )
  }

  if (error)
    return (
      <div className={ticketListStyles['error-container']}>
        <div className={ticketListStyles['error-icon']}>!</div>
        <h3 className={ticketListStyles['error-title']}>Произошла ошибка</h3>
        <p className={ticketListStyles['error-message']}>{error}</p>
        <button onClick={() => dispatch(fetchAllTickets())} className={ticketListStyles['error-retry']}>
          Попробовать снова
        </button>
      </div>
    )
  if (!tickets.length) {
    return (
      <div style={{ color: '#2196F3', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
        Рейсов, подходящих под заданные фильтры, не найдено
      </div>
    )
  }

  return (
    <>
      {!isComplete && loadingMore && (
        <div className={ticketListStyles['globe-loader']}>
          <div className={ticketListStyles['globe']}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={ticketListStyles['route']}></div>
            ))}
          </div>
          <p>Ищем идеальные маршруты...</p>
        </div>
      )}

      <ul className={ticketListStyles['ticket-list']}>
        {visibleTickets.map((ticket) => (
          <TicketCard
            key={`${ticket.price}-${ticket.carrier}-${ticket.segments[0].date}-${ticket.segments[1].date}`}
            ticket={ticket}
          />
        ))}
      </ul>

      {tickets.length > ticketsToShow && (
        <button onClick={() => dispatch(showMoreTickets())} className={ticketListStyles['show-more']}>
          Показать еще 5 билетов!
        </button>
      )}
    </>
  )
}

export default TicketList
