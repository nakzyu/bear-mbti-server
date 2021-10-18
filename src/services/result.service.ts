import Result from "../models/result";
import { collections } from "./db.service";

let freqs: [string, number][] = [];

const postOne = () => {};

const gather = async () => {
  const results = (await collections.result?.find().toArray()) as Result[];
  if (!results.length) return;
  const acc: Record<string, number> = {};
  results.forEach((result) => {
    if (!acc[result.type]) acc[result.type] = 0;
    acc[result.type] += 1;
  });
  const res = Object.entries(acc);
  res.sort((a, b) => b[1] - a[1]);
  return res;
};

const updateRatio = async () => {
  const res = await gather();
  if (res) freqs = res;
};

updateRatio();

setInterval(() => {
  updateRatio();
}, 1000 * 60 * 60);
