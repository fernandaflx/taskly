import { db } from '@/lib/firebase'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'

export async function saveUserToFirestore(user: {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
}) {
  const userRef = doc(db, 'users', user.uid)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      createdAt: serverTimestamp(),
      themeMode: 'light',
    })
  }
}
