// Adapted from shadcn/ui
import * as React from 'react';

type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: 'default' | 'destructive';
};

const listeners: Array<(toast: ToasterToast) => void> = [];
const TOAST_LIMIT = 1;

function dispatch(toast: ToasterToast) {
  listeners.forEach((listener) => listener(toast));
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  React.useEffect(() => {
    const listener = (toast: ToasterToast) => {
      setToasts((currentToasts) => {
        const next = [toast, ...currentToasts].slice(0, TOAST_LIMIT);
        return next;
      });
    };
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    toasts,
    dismiss: (id: string) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }
  };
}

export function toast({ title, description, action, variant }: Omit<ToasterToast, 'id'>) {
  const id = crypto.randomUUID();
  dispatch({ id, title, description, action, variant });
  return id;
}
