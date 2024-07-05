// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="image-card">
      <img src={imageUrl} className="card-img" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
