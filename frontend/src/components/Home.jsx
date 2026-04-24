import React from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-16">

      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
          Write freely. Share openly.
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          A simple and powerful platform to publish your ideas and connect with readers.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => navigate("/register")}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
          >
            Start Writing
          </button>

          <button
            onClick={() => navigate("/user-profile")}
            className="border px-6 py-3 rounded-md hover:bg-gray-100"
          >
            Explore Blogs
          </button>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="grid sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg">Simple Editor</h3>
          <p className="text-sm text-gray-600 mt-2">
            Focus on writing without distractions.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg">Community</h3>
          <p className="text-sm text-gray-600 mt-2">
            Discover and follow great authors.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg">Growth</h3>
          <p className="text-sm text-gray-600 mt-2">
            Build your presence with consistent writing.
          </p>
        </div>
      </section>

      {/* CONTENT PREVIEW */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border rounded-lg p-5 hover:shadow-md hover:-translate-y-1 transition duration-200"
            >
              <h3 className="font-semibold text-lg mb-2">
                Sample Article {item}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                A short preview of the article content...
              </p>

              <button className="text-sm font-medium text-black hover:underline">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;