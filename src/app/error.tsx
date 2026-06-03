"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-10 text-white bg-red-900 min-h-screen z-[9999] relative">
      <h1 className="text-3xl font-bold">Erro de Renderização</h1>
      <pre className="mt-4 p-4 bg-black rounded text-red-300 whitespace-pre-wrap">{error.message}</pre>
      <pre className="mt-4 p-4 bg-black/50 rounded text-red-200 text-xs whitespace-pre-wrap">{error.stack}</pre>
      <button onClick={reset} className="mt-4 px-4 py-2 bg-white text-black font-bold">Tentar Novamente</button>
    </div>
  );
}
