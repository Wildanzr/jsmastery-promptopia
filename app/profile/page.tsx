'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Profile } from '@/components'

import { fetcher } from '@/utils/fetch'

const ProfilePage = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])

  const handleEdit = (post: Post) => {
    //@ts-ignore
    router.push(`/update-prompt?id=${post._id}`)
  }
  const handleDelete = async (post: Post) => {
    const confirm = window.confirm('Are you sure you want to delete this post?')

    if (confirm) {
      try {
        //@ts-ignore
        await fetch(`/api/prompt/${post._id}`, {
          method: 'DELETE',
        })

        //@ts-ignore
        const filteredPosts = posts.filter((p) => p._id !== post._id)
        console.log(filteredPosts)
        setPosts(filteredPosts)
      } catch (error) {}
    }
  }

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
