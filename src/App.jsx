import { useEffect, useState } from 'react'

import Header from './components/Header'
import Search from './components/Search'
import fontNames from './utils/font-names'
import Word from './components/Word'
import useFetch from './hooks/useFetch'

function App() {
  const [currentFont, setCurrentFont] = useState(localStorage.getItem('current-font') ?? 'Serif')
  const [word, setWord] = useState({})
  const [isError, setIsError] = useState(false)

  const fontClass = fontNames[currentFont]
  const hasWord = Object.keys(word).length > 0

  useEffect(() => {
    localStorage.setItem('current-font', currentFont)
  }, [currentFont])

  async function fetchData(input) {
    useFetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
      data => {
        setWord(data[0])
      },
      setIsError
    )
  }

  return (
    <div className={`${fontClass} desktop:container px-6 tablet:px-10 text-black-3 dark:text-white text-body-m`}>
      <Header currentFont={currentFont} applyFont={setCurrentFont} />
      <Search fetchData={fetchData} />
      {hasWord && <Word data={word} isError={isError} />}
    </div>
  )
}

export default App
