import {React} from 'react'
import { Icon } from 'semantic-ui-react'

import './style.css'
const Card =()=>{
    return(<div className="card-box">
        <p><img src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png" alt="logo" width="25" height="25"/></p>
        <span><img src="https://i1.fnp.com/images/pr/l/v20210323125806/black-forest-cake-half-kg_1.jpg" alt="img" width="180" height="180"/></span>
        <p><h2>Cake</h2></p>
        <p><h3>Rs 1500</h3></p>
        <p><Icon name="plus" className="plus-sign" size="large"/></p>
    </div>)
}
export default Card