import { Sections } from "./types";

export const findObjectByType = <T>({ list, type }: {
  list: Sections<T>[],
  type: string
}) => {
  for (const obj of list) {
    if (String(obj.type) === type) {
      return obj;
    }
  }
  return null;
};