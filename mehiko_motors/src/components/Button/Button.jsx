import './Button.css'

export default function Button({ children, ...props }) {
  return (
    <button
    className='btn'
    {...props}
    >
      { children }
    </button>
  )
}