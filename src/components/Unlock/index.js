// Write your code here
import {useState} from 'react'

import {MainContainer, Image, Paragraph, Button} from './styledComponents'

const lockImage = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

const unlockImage = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [lock, setLock] = useState(false)

  const changeLockAndUnlock = () => {
    setLock(prevState => !prevState)
  }
  console.log(lock)
  return (
    <MainContainer>
      <Image
        src={lock ? unlockImage : lockImage}
        alt={lock ? 'unlock' : 'lock'}
      />
      <Paragraph>
        {lock ? 'Your Device is Unlocked' : 'Your Device is Locked'}
      </Paragraph>
      <Button
        type="button"
        className="lock-button"
        onClick={changeLockAndUnlock}
      >
        {lock ? 'Lock' : 'Unlock'}
      </Button>
    </MainContainer>
  )
}

export default Unlock
