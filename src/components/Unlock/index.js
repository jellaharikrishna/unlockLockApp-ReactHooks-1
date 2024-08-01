import {useState} from 'react'

import {AppContainer, LockImage, LockPara, LockButton} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)

  const onClickLockBtn = () => {
    setLock(prevLock => !prevLock)
  }

  return (
    <AppContainer>
      {isLock ? (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      <LockPara>Your Device is {isLock ? 'Locked' : 'Unlocked'}</LockPara>
      <LockButton type="button" onClick={onClickLockBtn}>
        {isLock ? 'Unlock' : 'Lock'}
      </LockButton>
    </AppContainer>
  )
}

export default Unlock
