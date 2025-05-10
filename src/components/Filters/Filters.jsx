import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  setAll,
  setNonStop,
  setOneStop,
  setTwoStop,
  setThreeStop,
  selectAll,
  selectNonStop,
  selectOneStop,
  selectTwoStop,
  selectThreeStop,
} from '../../redux/slices/filterSlice.js'

import filtersStyles from './Filters.module.scss'

const Filters = () => {
  const dispatch = useDispatch()
  const all = useSelector(selectAll)
  const nonStops = useSelector(selectNonStop)
  const oneStops = useSelector(selectOneStop)
  const twoStops = useSelector(selectTwoStop)
  const threeStops = useSelector(selectThreeStop)

  const handleAll = () => {
    dispatch(setAll())
  }

  const handleNonStop = () => {
    dispatch(setNonStop())
  }

  const handleOneStop = () => {
    dispatch(setOneStop())
  }

  const handleTwoStop = () => {
    dispatch(setTwoStop())
  }

  const handleThreeStop = () => {
    dispatch(setThreeStop())
  }

  return (
    <div className={filtersStyles.filters}>
      <p className={filtersStyles.filters__title}>Количество пересадок</p>
      <div className={filtersStyles.filters__wrapper}>
        <label className={filtersStyles.filters__label}>
          <input
            key="1"
            type="checkbox"
            checked={all}
            onChange={handleAll}
            className={filtersStyles.filters__checkbox}
          />
          <span>Все</span>
        </label>
        <label className={filtersStyles.filters__label}>
          <input
            key="2"
            type="checkbox"
            checked={nonStops}
            onChange={handleNonStop}
            className={filtersStyles.filters__checkbox}
          />
          <span>Без пересадок</span>
        </label>
        <label className={filtersStyles.filters__label}>
          <input
            key="3"
            type="checkbox"
            checked={oneStops}
            onChange={handleOneStop}
            className={filtersStyles.filters__checkbox}
          />
          <span>1 пересадка</span>
        </label>
        <label className={filtersStyles.filters__label}>
          <input
            key="4"
            type="checkbox"
            checked={twoStops}
            onChange={handleTwoStop}
            className={filtersStyles.filters__checkbox}
          />
          <span>2 пересадки</span>
        </label>
        <label className={filtersStyles.filters__label}>
          <input
            key="5"
            type="checkbox"
            checked={threeStops}
            onChange={handleThreeStop}
            className={filtersStyles.filters__checkbox}
          />
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}

export default Filters
