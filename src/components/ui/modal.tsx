"use client";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  onConfirm?: () => void;
}

export default function Modal({
  isOpen,
  title,
  description,
  onClose,
  onConfirm,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        {description && (
          <p className="mt-3 text-slate-400">
            {description}
          </p>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-700 px-4 py-2"
          >
            Cancel
          </button>

          {onConfirm && (
            <button
              onClick={onConfirm}
              className="rounded-xl bg-red-600 px-4 py-2 hover:bg-red-700"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}