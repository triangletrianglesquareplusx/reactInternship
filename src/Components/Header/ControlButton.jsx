
export default function ControlButton({name, className}) {
  return (
    <button className={`${className}, m-2 p-3`}>{name}</button>
  )
}
