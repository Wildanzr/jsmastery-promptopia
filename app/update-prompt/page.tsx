'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { fetcher } from '@/utils/fetch'
import Form from '@/components/Form'

const UpdatePrompPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const promptId = searchParams.get('id')

  const [submitting, setIsSubmitting] = useState<boolean>(false)
  const [post, setPost] = useState<Post>({ prompt: '', tag: '' })

  const updatePrompt = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!promptId) return alert('Prompt ID is required')

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetcher(`/api/prompt/${promptId}`)

      setPost({
        prompt: res.prompt,
        tag: res.tag,
      })
    }

    if (promptId) fetchPrompts()
  }, [promptId])

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  )
}

export default UpdatePrompPage
