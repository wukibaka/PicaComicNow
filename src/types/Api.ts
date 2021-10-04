import { FileThumb } from './File'

export interface ApiResponseCommon {
  code: number
  message: string
}

export interface Category {
  title: string
  thumb: FileThumb
  isWeb: boolean
  active: boolean
  link: string
}
export type ApiResponseCategories = {
  body: Category[]
} & ApiResponseCommon

export interface Comic {
  _id: string
  title: string
  author: string
  totalViews: number
  totalLikes: number
  pagesCount: number
  epsCount: number
  finished: boolean
  categories: string[]
  thumb: {
    fileServer: string
    path: string
    originalName: string
    fileUrl: string
  }
  id: string
  likesCount: number
}

export type ApiResponseComics = {
  body: {
    docs: Comic[]
    total: number
    limit: 20
    page: number
    pages: number
  }
} & ApiResponseCommon

export interface UserProfile {
  _id: string
  birthday: string
  email: string
  gender: string
  name: string
  title: string
  verified: boolean
  exp: number
  level: number
  characters: any[]
  created_at: string
  isPunched: boolean
}

export type ApiResponseUserProfile = {
  body: { user: UserProfile }
} & ApiResponseCommon