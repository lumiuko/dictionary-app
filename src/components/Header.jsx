import { useEffect } from 'react'
import Dropdown from './Dropdown'
import Switch from './Switch'

import logo from '../assets/images/logo.svg'
import moonIcon from '../assets/images/icon-moon.svg'
import moonIconDark from '../assets/images/icon-moon-purple.svg'
import useToggler from '../hooks/useToggler'
import fontNames from '../utils/font-names'

export default function Header(props) {
  const [isDarkTheme, toggleTheme] = useToggler(localStorage.getItem('theme-color') === 'dark')
  const [isDropdownExpanded, toggleDropdown] = useToggler(false)

  useEffect(() => {
    document.documentElement.className = isDarkTheme ? 'dark' : ''
    localStorage.setItem('theme-color', isDarkTheme ? 'dark' : 'light')
  }, [isDarkTheme])

  function selectItem(value) {
    props.applyFont(value)
    toggleDropdown()
  }

  const listItems = Object.entries(fontNames).map(([key, value]) => (
    <li key={key} className={`${value} cursor-pointer hover:text-purple`} onClick={() => selectItem(key)}>
      <button>{key}</button>
    </li>
  ))

  return (
    <header className="flex justify-between mt-6 mb-6 tablet:mt-[3.625rem] tablet:mb-[3.25rem]">
      <img src={logo} alt="App logo" className="w-[28px] tablet:w-[32px]" />
      <div className="flex">
        <Dropdown
          applyFont={props.applyFont}
          currentFont={props.currentFont}
          toggle={toggleDropdown}
          isExpanded={isDropdownExpanded}
        >
          {listItems}
        </Dropdown>

        <div className="flex items-center">
          <Switch checked={isDarkTheme} toggle={toggleTheme} />
          <img
            src={isDarkTheme ? moonIconDark : moonIcon}
            aria-hidden="true"
            className="ml-3 tablet:ml-5"
            alt="Moon icon"
          />
        </div>
      </div>
    </header>
  )
}
