import Link from "next/link";

export default function HomePage() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center px-4 bg-white">
      <h1 className="text-4xl font-bold text-center">Welcome to CT Document</h1>
      <p className="text-center mt-4">
        This is the home page of the CT Document application.
      </p>
      <p className="text-center mt-2">
        Explore the documentation and learn more about our features.
      </p>
      <div className="flex justify-center mt-8">
        <Link
          href="/docs"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Documentation
        </Link>
      </div>
    </div>
  );
}
