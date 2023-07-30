// index.d.ts

export { }

declare global {
    interface Creator {
        email: string
        username: string
        image: string
    }
    interface Post {
        prompt: string
        tag: string
        creator: Creator
    }
}