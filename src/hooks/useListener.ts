import { useEffect, DependencyList } from "react";
import {
  ref,
  off,
  onChildChanged,
  onChildAdded,
  onValue,
  EventType,
  onChildRemoved,
} from "firebase/database";

import { database } from "../services/firebase";

interface IUseListenerConfig {
  path?: string;
  eventType: keyof typeof listeners;
  useEffectTrigger?: DependencyList;
  addListener?: boolean;
}

const listeners = {
  child_added: onChildAdded,
  child_changed: onChildChanged,
  child_removed: onChildRemoved,
  changed: onValue,
};

const events: { [key: string]: EventType } = {
  child_added: "child_added",
  child_changed: "child_changed",
  child_removed: "child_removed",
  changed: "value",
};

// Hook criado baseando-se no sistema de listeners oferecidos pelo firebase
// O foco principal é encasular a logica relacionado ao emprego de ouvintes
function useListener<T>(
  { path, eventType, useEffectTrigger, addListener }: IUseListenerConfig,
  action: (data: T) => void,
  callback: (error: Error) => void
): void {
  try {
    useEffect(() => {
      if (!addListener && addListener !== undefined) return;

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
    }, useEffectTrigger ?? []);
  } catch (err) {
    return callback && callback(err as Error);
  }
}

export { useListener };
