import React from 'react'
import { Link } from "react-router-dom";

const Title = () => {
  return (
      <nav>
          <ul>
              <li>
                  <Link to='settings'>Settings</Link>
              </li>
              <li>
                  <Link to='/'>ToDo List</Link>
              </li>
          </ul>
      </nav>
  )
}

export default Title
