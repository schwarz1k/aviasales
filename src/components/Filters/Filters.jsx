import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toggleAll, toggleStop, selectSelectedStops, selectIsAllSelected } from '../../redux/slices/filterSlice.js'

import filtersStyles from './Filters.module.scss'

const Filters = () => {
  const dispatch = useDispatch()
  const selectedStops = useSelector(selectSelectedStops)
  const isAllSelected = useSelector(selectIsAllSelected)

  const handleAll = () => {
    dispatch(toggleAll())
  }

  const handleStop = (stop) => {
    dispatch(toggleStop(stop))
  }

  const stopLabels = {
    0: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
  }

  return (
    <div className={filtersStyles.filters}>
      <p className={filtersStyles.filters__title}>Количество пересадок</p>
      <div className={filtersStyles.filters__wrapper}>
        <label className={filtersStyles.filters__label}>
          <input
            key="1"
            type="checkbox"
            checked={isAllSelected}
            onChange={handleAll}
            className={filtersStyles.filters__checkbox}
          />
          <span>Все</span>
        </label>
        {[0, 1, 2, 3].map((stop) => (
          <label key={stop + 2} className={filtersStyles.filters__label}>
            <input
              type="checkbox"
              checked={selectedStops.includes(stop)}
              onChange={() => handleStop(stop)}
              className={filtersStyles.filters__checkbox}
            />
            <span>{stopLabels[stop]}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default Filters
