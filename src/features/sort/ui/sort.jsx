import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/store'
import {
  fetchSortedProducts,
  selectSortError,
  selectSortLoading,
} from '../index'
import { SORT_FIELDS } from '../../../shared/consts/sortFields'

import ArrowIcon from '../../../shared/assets/icons/smallArrow.svg'
import s from './sort.module.scss'

export const Sort = () => {
  const [isActiveSort, setIsActiveSort] = useState(false)
  const [activeSort, setActiveSort] = useState(0)

  const loading = useAppSelector(selectSortLoading)
  const error = useAppSelector(selectSortError)
  const dispatch = useAppDispatch()

  const onClickSortItem = (index) => {
    setIsActiveSort(false)
    setActiveSort(index)

    dispatch(fetchSortedProducts(SORT_FIELDS[index].sortOrder))
  }

  useEffect(() => {
    dispatch(fetchSortedProducts(SORT_FIELDS[activeSort].sortOrder))
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!!!</div>

  return (
    <div className={s.sort}>
      <div className={s.sortBox}>
        <p className={s.sortText}>Sort by:</p>
        <div
          className={s.sortActive}
          onClick={() => setIsActiveSort(!isActiveSort)}
        >
          {SORT_FIELDS[activeSort].text}
          <img
            className={!isActiveSort ? s.sortImg : s.sortImgActive}
            src={ArrowIcon}
            alt="Arrow"
          />
        </div>
      </div>
      {isActiveSort && (
        <ul className={s.sortList}>
          {SORT_FIELDS.map((item, index) => (
            <li
              className={
                activeSort === index ? `${s.sortItem} ${s.active}` : s.sortItem
              }
              key={item.id}
              onClick={() => onClickSortItem(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
