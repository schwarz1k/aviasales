import React from 'react'

import SortFiltersItem from '../SortFiltersItem/SortFiltersItem.jsx'

import sortFilterStyles from './SortFilters.module.scss'

const SortFilters = () => {
  return (
    <ul className={sortFilterStyles['sort-list']}>
      <SortFiltersItem
        id="1"
        text="Самый дешевый"
        isSelected={true}
        onClick={() => console.log('Клик по кнопке')}
      ></SortFiltersItem>
      <SortFiltersItem
        id="2"
        text="Самый быстрый"
        isSelected={false}
        onClick={() => console.log('Клик по кнопке')}
      ></SortFiltersItem>
      <SortFiltersItem
        id="3"
        text="Оптимальный"
        isSelected={false}
        onClick={() => console.log('Клик по кнопке')}
      ></SortFiltersItem>
    </ul>
  )
}

export default SortFilters
