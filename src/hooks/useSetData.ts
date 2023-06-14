import { push, ref, set } from "firebase/database";

import { database } from "../services/firebase";

async function useSetData<T>(
  path: string,
  action: (dataRefKey: string) => T,
  callback?: (error: Error) => void
): Promise<void> {
  const dataRef = ref(database, path);
  const newDataRef = push(dataRef);

  if (!dataRef) {
    return callback && callback(new Error("Empty location reference"));
  }
  if (!newDataRef || !newDataRef.key) {
    return callback && callback(new Error("Error creating a new reference"));
  }
  await set(newDataRef, action(newDataRef.key));
}

export { useSetData };
