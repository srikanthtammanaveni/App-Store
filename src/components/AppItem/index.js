// Write your code here
import './index.css'

const AppItem = props => {
  const {itemDetails} = props
  const {imageUrl, appName} = itemDetails
  return (
    <li className="app-container">
      <img alt={appName} src={imageUrl} className="app-icon" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
