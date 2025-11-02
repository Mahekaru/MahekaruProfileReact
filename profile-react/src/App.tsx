import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { Skill } from './hooks/useSkills';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
export interface ProfileQuery {
  skills: Skill | null;
}

function App() {
  const [count, setCount] = useState(0)
  const [profileQuery, setProfileQuery] = useState<ProfileQuery>({} as ProfileQuery);

  return (
    <>
      <div>
        <Skills/>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
    </>
  )
}

export default App
