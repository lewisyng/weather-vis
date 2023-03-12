import { resolveValue, ToastBar, Toaster } from "react-hot-toast";

export const Toast = () => {
  return (
    <Toaster toastOptions={{ duration: 2000 }}>
      {(t) => (
        <ToastBar toast={t} style={{ padding: 0 }}>
          {({ message }) => (
            <div className="bg-gray-800 text-white px-8 py-4 rounded">
              {message}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};
