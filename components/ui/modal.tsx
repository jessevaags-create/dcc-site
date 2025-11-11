'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

export interface ModalProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Modal({ trigger, title, description, children }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-white/10 bg-black/90 p-8">
          <div className="flex items-center justify-between gap-4">
            <Dialog.Title className="font-serif text-3xl">{title}</Dialog.Title>
            <Dialog.Close className="rounded-full border border-white/20 p-2" aria-label="Sluit">
              <X size={18} />
            </Dialog.Close>
          </div>
          {description ? <Dialog.Description className="mt-2 text-sm text-white/70">{description}</Dialog.Description> : null}
          <div className="mt-6">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
