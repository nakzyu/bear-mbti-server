import Result from "../models/result";
import { collections } from "./db.service";

let freqs: [string, number][] = [];

export const getAll = async (): Promise<Result[]> => {
  try {
    const results = (await collections.result?.find().toArray()) as Result[];
    return results;
  } catch (e) {
    return Promise.reject();
  }
};

export const getTypeFreqs = (): [string, number][] => freqs;

export const postOne = async (result: Result): Promise<string> => {
  try {
    const posted = await collections.result?.insertOne(new Result(result.type));
    if (posted?.insertedId) {
      return posted?.insertedId.toString();
    }
    return Promise.reject();
  } catch (e) {
    return Promise.reject();
  }
};

const gather = async () => {
  const results = (await collections.result?.find().toArray()) as Result[];
  console.log(results);
  if (!results || !results.length) return;
  const acc: Record<string, number> = {};
  results.forEach((result) => {
    if (!acc[result.type]) acc[result.type] = 0;
    acc[result.type] += 1;
  });
  const res = Object.entries(acc);
  res.sort((a, b) => b[1] - a[1]);
  return res;
};

export const updateRatio = async (): Promise<void> => {
  const res = await gather();
  if (res) freqs = res;
  return;
};

setInterval(() => {
  updateRatio();
}, 1000 * 60 * 60);
