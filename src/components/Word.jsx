import { useEffect, useRef } from 'react'

import Meaning from './Meaning'
import playIcon from '../assets/images/icon-play.svg'
import newWindowIcon from '../assets/images/icon-new-window.svg'

export default function Word({ data, isError }) {
  const validPhonetics = data.phonetics?.find(phonetics => phonetics.text && phonetics.audio)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio(validPhonetics?.audio)
  }, [data])

  function playAudio() {
    audioRef.current.play()
  }

  const meanings = data.meanings.map((meaning, index) => <Meaning key={index} meaning={meaning} />)

  if (isError) {
    return (
      <main className="my-20 tablet:my-[8.25rem] text-center">
        <div className="text-heading-l">😕</div>
        <h5 className="font-bold mt-5 tablet:mt-11">No Definitions Found</h5>
        <p className="mt-3 tablet:mt-6">
          Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at
          later time or head to the web instead.
        </p>
      </main>
    )
  }

  return (
    <main className="mt-10 mb-[5.25rem] tablet:mt-11 tablet:mb-[7.75rem]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-mobile-heading-l tablet:text-heading-l tablet:leading-heading-l font-bold tablet:mb-2">
            {data.word}
          </h1>
          <p className="text-purple text-body-m leading-body-m tablet:text-heading-m tablet:leading-heading-m">
            {validPhonetics?.text}
          </p>
        </div>
        {validPhonetics?.audio && (
          <button aria-label="Play" onClick={playAudio}>
            <img src={playIcon} aria-hidden="true" alt="Play icon" className="w-[48px] tablet:w-[75px]" />
          </button>
        )}
      </div>
      {meanings}
      <div className="pt-6 border-t-1 border-t-gray-2 text-body-s leading-body-s tablet:flex items-center">
        <div className="text-gray mb-2 underline tablet:mr-5 tablet:mb-0">Source</div>
        <div className="flex">
          <a href={data.sourceUrls[0]} className="underline mr-2" target="_blank">
            {data.sourceUrls[0]}
          </a>
          <img src={newWindowIcon} alt="External link" />
        </div>
      </div>
    </main>
  )
}
