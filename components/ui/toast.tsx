'use client';

import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Viewport>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>>(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        'fixed top-4 right-4 z-50 flex max-h-screen w-full max-w-sm flex-col gap-3',
        className
      )}
      {...props}
    />
  )
);
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-start justify-between rounded-2xl border border-white/15 bg-black/80 p-4 text-white shadow-lg backdrop-blur transition-all',
  {
    variants: {
      variant: {
        default: 'border-white/20',
        destructive: 'border-red-500 text-red-100'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

const Toast = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Root>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>>(
  ({ className, variant, ...props }, ref) => (
    <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
  )
);
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastClose = ToastPrimitives.Close;
const ToastTitle = ToastPrimitives.Title;
const ToastDescription = ToastPrimitives.Description;

const ToastAction = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>>(
  ({ className, ...props }, ref) => (
    <ToastPrimitives.Action
      ref={ref}
      className={cn('inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs', className)}
      {...props}
    />
  )
);
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastCloseIcon = () => (
  <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
    <X size={16} />
  </span>
);

export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, ToastCloseIcon };
