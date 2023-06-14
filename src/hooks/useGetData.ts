import { ref, get } from "firebase/database";

import { database } from "../services/firebase";

// Função feita para englobar a execução de gets pelo firebase
async function useGetData<T>(
  path: string,
  action: (data: T) => void,
  callback?: (error: Error) => void
) {
  const dataRef = ref(database, path);

  // Usando await em preferencia ao then para resolução da promise
  const snapshot = await get(dataRef);

  const roomsData = snapshot.val();
  if (!roomsData) {
    callback && callback(new Error("Empty data"));
  }
  // Convertendo o formato vindo do realtime em array para facilitar formatações
  // Isso está sendo feito aqui para evitar acoplamento
  action(Object.values(roomsData) as T);
}

export { useGetData };
