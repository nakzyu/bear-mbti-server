import { ObjectId } from "mongodb";
export default class Result {
  constructor(
    public mbti: string,
    public type: string,
    public date: Date,
    public _id?: ObjectId
  ) {}
}
