import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import useOutside from '../hooks/useOutside'

import arrowDown from '../assets/images/icon-arrow-down.svg'

export default function Dropdown(props) {
  const wrapperRef = useRef(null)
  useOutside(wrapperRef, props.isExpanded, props.toggle)

  return (
    <div className="relative h-full" ref={wrapperRef}>
      <button
        className="h-full font-bold text-body-s tablet:text-[1.125rem] flex items-center px-4 tablet:px-[1.625rem] border-r-gray-2 border-r-[1px]"
        onClick={props.toggle}
        aria-expanded={props.isExpanded}
      >
        <span className="mr-4">{props.currentFont}</span>
        <img src={arrowDown} alt="Arrow down" aria-hidden="true" className="w-[12px]" />
      </button>

      <CSSTransition in={props.isExpanded} timeout={200} unmountOnExit classNames="select-box-body">
        <ul className="select-box-body absolute p-6 font-bold shadow-dropdown dark:shadow-dropdown-dark rounded-2xl min-w-[183px] mt-[0.625rem] right-0 flex flex-col gap-4 bg-white dark:bg-black-2">
          {props.children}
        </ul>
      </CSSTransition>
    </div>
  )
}
