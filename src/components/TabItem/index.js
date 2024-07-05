// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {tabId, displayText} = tabDetails

  const tabItemClassName = isActive ? 'tab-item active' : 'tab-item'

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="item-container">
      <button type="button" className={tabItemClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
