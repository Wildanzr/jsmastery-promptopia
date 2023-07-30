'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Profile } from '@/components'

import { fetcher } from '@/utils/fetch'

const ProfilePage = () => {
  const { data: session } = useSession()
  const [posts, setPosts] = useState<Post[]>([])

  const handleEdit = () => {}
  const handleDelete = async () => {}

  useEffect(() => {
    const fetchPrompts = async () => {
      //@ts-ignore
      const res = await fetcher(`/api/users/${session?.user?.id}/posts`)
      setPosts(res)
    }

    //@ts-ignore
    if (session?.user?.id) fetchPrompts()
  }, [])

  return (
    <Profile
      name="My"
      desc="Welcome to your personal profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default ProfilePage
