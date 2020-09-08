import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './text.module.css'

const Text = ({
  children,
  color = colorTypes[0],
  size = sizeTypes[0],
  weight = weightTypes[0],
  as,
}) => {
  const Comp = as || 'p'

  return (
    <Comp
      className={cx(styles.text, {
        [styles[color]]: color,
        [styles[size]]: size,
        [styles[weight]]: weight,
      })}
    >
      {children}
    </Comp>
  )
}

const reactElType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.node,
  PropTypes.element,
])

export const colorTypes = ['default', 'inherit', 'grey', 'primary', 'secondary']
export const sizeTypes = ['md', 'sm']
export const weightTypes = ['normal', 'bold']

Text.propTypes = {
  as: reactElType,
  children: reactElType,
  color: PropTypes.oneOf(colorTypes),
  size: PropTypes.oneOf(sizeTypes),
  weight: PropTypes.oneOf(weightTypes),
}

export default Text
