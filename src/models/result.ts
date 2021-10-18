import { ObjectId } from "mongodb";
export default class Result {
  constructor(public type: string, public date?: Date, public _id?: ObjectId) {
    if (!date) this.date = new Date();
  }
}
