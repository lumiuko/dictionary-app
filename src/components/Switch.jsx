export default function Switch(props) {
  return (
    <label className="ml-4 tablet:ml-[1.625rem] relative inline-block w-[40px] h-[20px]" aria-label="Dark mode">
      <input className="peer opacity-0 w-0 h-0" type="checkbox" checked={props.checked} onChange={props.toggle} />
      <span className="absolute cursor-pointer inset-0 rounded-[10px] bg-gray dark:bg-purple before:absolute before:content-[''] before:h-[14px] before:w-[14px] before:rounded-full before:left-[3px] before:bottom-[3px] before:bg-white peer-focus-visible:bg-violet-500 peer-checked:before:translate-x-[20px] before:transition-all"></span>
    </label>
  )
}
