// Write your code here

import './index.css'

const TabItem = props => {
  const {itemDetails, onUpdateId, isActive} = props
  const {displayText, tabId} = itemDetails

  const onUpdate = () => {
    onUpdateId(tabId)
  }

  const hilightButton = isActive ? 'hilight' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        onClick={onUpdate}
        className={`tab-btn ${hilightButton}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
