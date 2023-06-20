import { ref, get } from "firebase/database";

import { database } from "../services/firebase";

// Função feita para englobar a execução de gets pelo firebase
function useGetData<T>(
  path: string,
  action: (data: T) => void,
  callback: (error: Error) => void
) {
  try {
    const dataRef = ref(database, path);

    if (!dataRef) {
      return callback && callback(new Error("Empty location reference"));
    }

    get(dataRef).then((snapshot) => {
      const roomsData = snapshot.val();

      if (!roomsData) {
        return callback && callback(new Error("Empty data"));
      }
      // Convertendo o formato vindo do realtime em array para facilitar formatações
      // Isso está sendo feito aqui para evitar acoplamento
      action(Object.values(roomsData) as T);
    });
  } catch (err) {
    return callback && callback(err as Error);
  }
}

export { useGetData };
