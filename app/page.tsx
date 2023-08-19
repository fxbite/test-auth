'use client'

import { auth } from '@/config/firebase'
import { signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth'

export default function Home() {
  const handleGoogle = async(e: any) => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  // const handleTwitter = async(e: any) => {
  //   const provider = new TwitterAuthProvider()
  //   return signInWithPopup(auth, provider)
  // }

  return (
    <section>
      <h2>Test Auth Twitter, Google</h2>
      <button onClick={handleGoogle}>Sign in Google</button>
      {/* <button onClick={handleTwitter}>Sign in Twitter</button> */}
    </section>
  )
}
