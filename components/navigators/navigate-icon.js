import { useRef } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'

const styles = css`
  .tooltip {
    background-color: #454545;
  }
`

const NavigateIcon = (props) => {
  const ref = useRef(null)

  const handleMouseEnter = () => {
    if (!ref.current) return;

    ref.current.style.opacity = 1
    ref.current.style.marginLeft = '20px'
  }

  const handleMouseLeave = () => {
    if (!ref.current) return;

    ref.current.style.opacity = 0
    ref.current.style.marginLeft = '10px'
  }

  return (
    <>
      <style jsx>{styles}</style>
      <div
        className='relative flex items-center'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="tooltip absolute whitespace-nowrap text-white px-4 py-2 rounded flex items-center transition-all duration-150"
          style={{left: '100%', opacity: 0}}
          ref={ref}
        >
          <div
            className='tooltip h-3 w-3 absolute'
            style={{ left: '-6px', transform: 'rotate(45deg)'}}
          />
          {props.text}
        </div>
        {props.children}
      </div>
    </>
  )
}

NavigateIcon.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
}

export default NavigateIcon
