import React from 'react'

import Filters from '../Filters/Filters.jsx'
import SortFilters from '../SortFilters/SortFilters.jsx'
import TicketList from '../TicketList/TicketList.jsx'

import appStyles from './App.module.scss'

const App = () => {
  return (
    <section className={appStyles.app}>
      <img className={appStyles.app__logo} src="/src/assets/icons/Logo.svg" alt="Логотип компании" />
      <div className={appStyles.app__container}>
        <Filters />
        <div className={appStyles.app__wrapper}>
          <SortFilters />
          <TicketList />
        </div>
      </div>
    </section>
  )
}

export default App
