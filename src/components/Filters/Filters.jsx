import React, { useState } from 'react'
import { Checkbox, ConfigProvider } from 'antd'
const CheckboxGroup = Checkbox.Group

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
const defaultCheckedList = ['Без пересадок', '1 пересадка', '2 пересадки']

import filtersStyles from './Filters.module.scss'

const Filters = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList)
  const checkAll = plainOptions.length === checkedList.length
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length

  const onChange = (list) => {
    setCheckedList(list)
  }

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : [])
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: '#2196f3',
          colorPrimary: '#2196f3',
          colorBorder: '#9abbce',
          borderRadius: 2,
          controlInteractiveSize: 20,
          colorWhite: '#2196f3',
        },
      }}
    >
      <div className={filtersStyles.filters}>
        <p className={filtersStyles.filters__title}>Количество пересадок</p>
        <div className={filtersStyles.filters__wrapper}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
            className={filtersStyles['filters__wrapper-checkbox']}
          >
            Все
          </Checkbox>
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
            className={filtersStyles['filters__wrapper-checkbox__group']}
          />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Filters
