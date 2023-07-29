'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Form } from '@/components'

const CreatePrompt = () => {
  const { data: session } = useSession()
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [post, setPost] = useState<Post>({
    prompt: '',
    tag: '',
  })

  const router = useRouter()

  const createPrompt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user?.email, // TODO: Change to session?.user?.id
          tag: post.tag,
        }),
      })

        if (response.ok) {
            router.push('/')
        }
    } catch (error) {
        console.log(error)
    } finally {
        setSubmitting(false)
    }
  }
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt
