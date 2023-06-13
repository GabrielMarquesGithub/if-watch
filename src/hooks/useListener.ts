import { useEffect } from "react";
import { DataSnapshot, ref, off } from "firebase/database";

import { database } from "../services/firebase";
import { Query, Unsubscribe, EventType } from "firebase/database";

function useListener<T>(
  path: string,
  eventType: EventType,
  listener: (
    query: Query,
    callback: (
      snapshot: DataSnapshot,
      previousChildName?: string | null
    ) => unknown,
    cancelCallback?: ((error: Error) => unknown) | undefined
  ) => Unsubscribe,
  action: (data: T) => void,
  callback?: (error: Error) => void,
  onChange?: unknown
) {
  useEffect(() => {
    const dataRef = ref(database, path);

    // listener do firebase para eventos de mudança em uma única sala
    listener(
      dataRef,
      (snapshot) => {
        const data: T = snapshot.val();
        if (eventType === "value") {
        }
        if (data) {
          action(data);
        } else {
          if (callback) {
            callback(new Error("Empty data"));
          }
        }
      },
      (error) => {
        if (callback) {
          callback(error);
        }
      }
    );

    return () => {
      // Remover os listener quando o componente for desmontado
      off(dataRef, eventType);
    };
  }, [onChange]);
}

export { useListener };
