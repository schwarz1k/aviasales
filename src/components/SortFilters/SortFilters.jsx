import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectActiveFilter, setCheap, setFast, setOptimal } from '../../redux/slices/sortFilterSlice.js'

import sortFilterStyles from './SortFilters.module.scss'

const SortFilters = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector(selectActiveFilter)

  return (
    <ul className={sortFilterStyles['sort-list']}>
      <li>
        <button
          type="button"
          onClick={() => dispatch(setCheap())}
          className={`${sortFilterStyles['sort-list__btn']} ${
            activeFilter === 'cheap' ? sortFilterStyles['sort-list__btn--selected'] : ''
          }`}
        >
          Самый дешевый
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => dispatch(setFast())}
          className={`${sortFilterStyles['sort-list__btn']} ${
            activeFilter === 'fast' ? sortFilterStyles['sort-list__btn--selected'] : ''
          }`}
        >
          Самый быстрый
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => dispatch(setOptimal())}
          className={`${sortFilterStyles['sort-list__btn']} ${
            activeFilter === 'optimal' ? sortFilterStyles['sort-list__btn--selected'] : ''
          }`}
        >
          Оптимальный
        </button>
      </li>
    </ul>
  )
}

export default SortFilters
