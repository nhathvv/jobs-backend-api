import { ObjectId } from "mongodb"
import { Levels } from "~/constants/enum"

interface CreatorType {
  _id?: ObjectId
  user_id: ObjectId
  skills?: ObjectId[]
  level?: Levels
  description?: string
  rating?: string
  createdAt?: Date
  updatedAt?: Date
}
export class Creator {
  _id?: ObjectId
  user_id: ObjectId
  skills: ObjectId[]
  level?: Levels | null
  rating?: string
  description?: string
  createdAt?: Date
  updatedAt?: Date
  constructor(creator: CreatorType) {
    const date = new Date()
    this._id = creator._id
    this.skills = creator.skills || []
    this.level = creator.level || null
    this.rating = creator.rating || ""
    this.description = creator.description || ""
    this.user_id = creator.user_id
    this.createdAt = creator.createdAt || date
    this.updatedAt = creator.updatedAt || date
  }
}
