export default function Meaning({ meaning }) {
  const definitions = meaning.definitions.map((definition, index) => (
    <li className="mt-[0.875rem]" key={index}>
      <p>{definition.definition}</p>
      {definition.example && <p className="text-gray mt-3">"{definition.example}"</p>}
    </li>
  ))

  const synonyms = meaning.synonyms.map((synonym, index) => <li key={index}>{synonym}</li>)

  return (
    <section className="mt-8 tablet:mt-10 text-default tablet:text-body-m">
      <div className="flex items-center mb-8 tablet:mb-10">
        <h2 className="font-bold italic mr-4 tablet:text-heading-m tablet:leading-heading-m">{meaning.partOfSpeech}</h2>
        <hr className="w-full border-gray-2 dark:border-black-4" />
      </div>

      <p className="text-gray tablet:text-heading-s tablet:leading-heading-s">Meaning</p>
      <ul className="list-disc mx-4 mt-4 marker:text-purple marker:text-[15px]">{definitions}</ul>
      {meaning.synonyms.length > 0 && (
        <div className="flex items-center mt-6 tablet:mt-10 gap-6">
          <p className="text-gray">Synonyms</p>
          <ul className="flex flex-wrap gap-x-6 text-purple font-bold">{synonyms}</ul>
        </div>
      )}
    </section>
  )
}
