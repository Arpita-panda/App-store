import './index.css'

const TabItem = props => {
  const {eachTab, onTabChange, onActiveTab} = props
  const {displayText, tabId} = eachTab
  const onTabClick = () => {
    onTabChange(tabId)
  }
  const classNameText = onActiveTab ? 'active' : null
  return (
    <li>
      <button
        type="button"
        className={`tab ${classNameText}`}
        onClick={onTabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
