import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Search(props) {
  const [queryParams, setQueryParams] = useSearchParams()
  const initialInput = queryParams.get('word') ?? 'keyboard'

  const [input, setInput] = useState('')
  const [isValid, setIsValid] = useState(true)

  const invalidClass = !isValid ? 'border-[1px] border-red' : ''

  useEffect(() => {
    setInput(initialInput)
    props.fetchData(initialInput)
  }, [initialInput])

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (input.length < 1) {
      setIsValid(false)
      return
    }
    setIsValid(true)
    setQueryParams({ word: input })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={`w-full bg-gray-3 dark:bg-black-2 leading-[1.25rem] rounded-2xl py-[0.875rem] pl-6 pr-14 tablet:py-5 tablet:pl-6
        tablet:pr-18 text-default tablet:text-20 font-bold bg-search bg-no-repeat bg-right-4 placeholder:text-gray outline-none  focus:outline-purple ${invalidClass}`}
        value={input}
        onChange={handleChange}
        placeholder="Search for any word…"
      />
      {!isValid && <div className="text-red mt-2">Whoops, can’t be empty…</div>}
    </form>
  )
}
