import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Search from './components/Search'
import fontNames from './utils/font-names'
import Word from './components/Word'
import useFetch from './hooks/useFetch'

function App() {
  const [currentFont, setCurrentFont] = useState(localStorage.getItem('current-font') ?? 'Serif')
  const [word, setWord] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fontClass = fontNames[currentFont]

  useEffect(() => {
    localStorage.setItem('current-font', currentFont)
  }, [currentFont])

  async function fetchData(input) {
    useFetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
      data => {
        setWord(data[0])
      },
      setIsLoading,
      setIsError
    )
  }

  const errorElement = (
    <main className="my-20 tablet:my-[8.25rem] text-center">
      <div className="text-heading-l">😕</div>
      <h5 className="font-bold mt-5 tablet:mt-11">No Definitions Found</h5>
      <p className="mt-3 tablet:mt-6">
        Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later
        time or head to the web instead.
      </p>
    </main>
  )

  return (
    <BrowserRouter>
      <div className={`${fontClass} desktop:container px-6 tablet:px-10 text-black-3 dark:text-white text-body-m`}>
        <Header currentFont={currentFont} applyFont={setCurrentFont} />
        <Search fetchData={fetchData} />
        {isError && errorElement}
        {!isLoading && !isError && <Word data={word} isError={isError} />}
      </div>
    </BrowserRouter>
  )
}

export default App
