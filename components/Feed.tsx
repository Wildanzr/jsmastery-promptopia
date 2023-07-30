'use client'

import { useState, useEffect } from 'react'
import { PromptCard } from '.'
import { fetcher } from '@/utils/fetch'

const PromptCardList = ({ data, handleTagClick }: PromptCardListProps) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          //@ts-ignore
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [post, setPost] = useState<Post[]>([])

  const handleSearchChange = () => {}

  useEffect(() => {
    const fetchPrompt = async () => {
      const res = await fetcher('/api/prompt')
      setPost(res)
    }

    fetchPrompt()
  }, [])
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={post} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed
