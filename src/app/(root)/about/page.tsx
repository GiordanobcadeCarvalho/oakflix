"use client";

import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-12 space-y-24">
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Nature’s Grasp at One Click
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Oakflix is your sanctuary of storytelling — where movies about the
          Earth, for the Earth, come alive.
        </p>
        <Link href="/explore">
          <button
            type="button"
            color="primary"
            className="mt-4 rounded-xl text-white px-6 py-3 text-lg"
          >
            Explore Films
          </button>
        </Link>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-md leading-relaxed">
          At Oakflix, we believe nature isn’t just scenery—it’s the story. We’re
          here to reconnect audiences with the planet through powerful films
          that inform, inspire, and ignite action.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Curated Nature Cinema</h3>
          <p>
            Every title on Oakflix is handpicked to celebrate the natural
            world—documentaries, dramas, adventures, and more.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Support for Creators</h3>
          <p>
            We empower filmmakers and environmental storytellers with tools,
            exposure, and monetization opportunities.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Education & Awareness</h3>
          <p>
            More than entertainment—we’re building a learning space to engage
            the next generation of Earth stewards.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Authenticity:</strong> Real stories, real ecosystems.
          </li>
          <li>
            <strong>Sustainability:</strong> From content to infrastructure, we
            think green.
          </li>
          <li>
            <strong>Community:</strong> We exist to unite nature lovers and
            storytellers globally.
          </li>
        </ul>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Explore the Wild Side of Streaming</h2>
        <p>
          Start your journey with Oakflix and experience the world like never
          before.
        </p>
        <Link href="/">
          <button
            type="button"
            className="rounded-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 cursor-pointer"
          >
            Explore now
          </button>
        </Link>
      </section>
    </main>
  );
};

export default AboutPage;
