// global.d.ts

export {}

declare global {
  interface ChildrenProps {
    children: React.ReactNode
  }

  interface FormProps {
    type: string
    post: Post
    setPost: React.Dispatch<React.SetStateAction<Post>>
    submitting: boolean
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  }
}
