import {ArrowBackOutlined} from '@material-ui/icons'
import "./watch.scss"

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video
            className="video"
            autoPlay
            progress
            controls
            src="https://caspian9.asset.aparat.com/aparat-video/71d866bcaa1720735ea6bcc3614b21c254841374-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjNhMjVkNzJmZTViYTc5YzZmM2E1YzA2MThjNDg0ZjgxIiwiZXhwIjoxNzAzNDU3NDcwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.z6yTqx4E3otT6dIJ4B48M1DD-uFOaD1yww6DVSu9Zv4"
        />    
    </div>
  )
}

export default Watch