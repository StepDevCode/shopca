import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '../../../../shared/assets/icons/search.svg'
import CloseIcon from '../../../../shared/assets/icons/close.svg'
import { DropdownSearchItem } from '../dropdownSearchItem/dropdownSearchItem'
import {
  selectSearch,
  selectSearchLoading,
  selectSearchError,
  fetchSearch,
} from '../../index'
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/store'
import { useDebounce } from '../../../../shared/lib/debounce'

import s from './Search.module.scss'

export const Search = () => {
  const [inputValue, setInputValue] = useState('')

  const goods = useAppSelector(selectSearch)
  const loading = useAppSelector(selectSearchLoading)
  const error = useAppSelector(selectSearchError)
  const debouncedSearch = useDebounce(inputValue, 1000)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (debouncedSearch.trim()) {
      dispatch(fetchSearch({ searchStr: debouncedSearch }))
    }
  }, [debouncedSearch, dispatch])

  const onChangeSearch = (e) => {
    const searchStr = e.target.value
    setInputValue(searchStr)
  }

  // if (loading) return <div className="loading">Loading...</div>
  // if (error) return <div className="error">Error!!!</div>

  return (
    <>
      <form className={s.form}>
        <img className={s.img} src={SearchIcon} alt="Search" />
        <input
          className={s.input}
          type="text"
          placeholder="Search for products..."
          value={inputValue}
          onChange={onChangeSearch}
        />
      </form>
      {inputValue && (
        <ul className={s.list}>
          <img
            className={s.close}
            src={CloseIcon}
            onClick={() => setInputValue('')}
            alt="Close"
          />
          <p className={s.text}>Результаты поиска: </p>
          {goods?.map((item) => (
            <DropdownSearchItem key={item.id} {...item} />
          ))}
          <Link className={s.link} to={'/catalog'}>
            View all
          </Link>
        </ul>
      )}
    </>
  )
}
