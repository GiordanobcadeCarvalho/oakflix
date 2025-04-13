"use client";

const PrivacyPage = () => {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-12 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Your Privacy Matters at Oakflix
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We’re committed to protecting your personal data while bringing you
          closer to nature’s best stories.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">What We Collect</h2>
        <p>
          To provide and improve Oakflix, we may collect the following
          information:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Account details: email, name, password (hashed)</li>
          <li>Subscription data: plan type, status, renewal info</li>
          <li>Viewing preferences and watch history</li>
          <li>IP address and device/browser metadata</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
        <p>Your data is used to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Personalize your viewing experience</li>
          <li>Manage your subscription securely</li>
          <li>Communicate updates and new features</li>
          <li>Analyze how Oakflix is used to improve the platform</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">We Never Sell Your Data</h2>
        <p>
          We do not sell your personal information. We may share limited data
          with trusted service providers like Stripe (for payments) or Firebase
          (for authentication), strictly for operational needs.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Cookies & Tracking</h2>
        <p>
          Oakflix uses cookies to remember your preferences and help us
          understand how users interact with our content. You can disable
          cookies in your browser settings, though some features may be
          affected.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Access the data we store about you</li>
          <li>Request deletion of your account and data</li>
          <li>Opt out of marketing communications</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Policy Updates</h2>
        <p>
          This privacy policy may be updated from time to time. We’ll notify
          users of significant changes through email or in-app notifications.
        </p>
      </section>

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold">Questions?</h2>
        <p>
          Contact our team anytime at{" "}
          <a
            href="mailto:support@oakflix.com"
            className="underline hover:text-green-600"
          >
            support@oakflix.com
          </a>
        </p>
      </section>
    </main>
  );
};

export default PrivacyPage;
