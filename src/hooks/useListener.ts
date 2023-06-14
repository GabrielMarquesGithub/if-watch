import { useEffect } from "react";
import {
  ref,
  off,
  onChildChanged,
  onChildAdded,
  onValue,
  EventType,
} from "firebase/database";

import { database } from "../services/firebase";

interface IUseListenerConfig {
  path: string;
  eventType: "changed" | "child_added" | "child_changed";
  useEffectTrigger?: unknown;
}

const listeners = {
  child_added: onChildAdded,
  child_changed: onChildChanged,
  changed: onValue,
};

const events: { [key: string]: EventType } = {
  child_added: "child_added",
  child_changed: "child_changed",
  changed: "value",
};

// Hook criado baseando-se no sistema de listeners oferecidos pelo firebase
// O foco principal é encasular a logica relacionado ao emprego de ouvintes
function useListener<T>(
  { path, eventType, useEffectTrigger }: IUseListenerConfig,
  action: (data: T) => void,
  callback?: (error: Error) => void
): void {
  useEffect(() => {
    const dataRef = ref(database, path);

    // listener do firebase para eventos de mudança em uma única sala
    listeners[eventType](
      dataRef,
      (snapshot) => {
        const data: T = snapshot.val();
        // Se não houver dados é lançado um erro
        if (!data) {
          return callback && callback(new Error("Empty data"));
        }
        action(data);
      },
      (error) => {
        callback && callback(error);
      }
    );

    return () => {
      // Remover os listener quando o componente for desmontado
      off(dataRef, events[eventType]);
    };
  }, [useEffectTrigger]);
}

export { useListener };
