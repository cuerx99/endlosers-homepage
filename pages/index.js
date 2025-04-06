export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to EndLosers.com 🚀</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Helping everyday people become better versions of themselves... with tech, tools, comedy, and zero fluff.
      </p>
      <a
        href="/lead-magnet.pdf"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Get the Free Guide
      </a>
    </main>
  );
}
