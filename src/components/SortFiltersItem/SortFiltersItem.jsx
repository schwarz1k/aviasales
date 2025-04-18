import React from 'react'
import PropTypes from 'prop-types'

import sortFiltersItemStyles from './SortFiltersItem.module.scss'

const SortFiltersItem = (props) => {
  return (
    <li>
      <button
        type="primary"
        className={`${sortFiltersItemStyles['sort-list__btn']} ${props.isSelected ? sortFiltersItemStyles['sort-list__btn--selected'] : ''}`}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </li>
  )
}

SortFiltersItem.propTypes = {
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

SortFiltersItem.defaultProps = {
  isSelected: false,
}

export default SortFiltersItem
