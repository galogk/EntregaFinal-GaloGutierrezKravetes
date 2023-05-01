import { BsFillCartFill } from "react-icons/bs";

function cartwidget({cuenta}) {
  return (
    <div>
        <BsFillCartFill/>
        {cuenta}
    </div>
    
  )
}

export default cartwidget