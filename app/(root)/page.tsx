'use client'
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
const page = () => {
  const router = useRouter()
  const {data:session,status} = useSession()
  useEffect(()=>{
    if(status === 'unauthenticated'){
      router.push('/login')
    }
  },[session])
  return (
    <div>
      Home
    </div>
  )
}

export default page
