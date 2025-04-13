"use client";

const TermsPage = () => {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-12 space-y-20">
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Oakflix Terms of Service
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          These terms govern your use of Oakflix — your gateway to the natural
          world on screen.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By using Oakflix, you agree to comply with and be bound by these Terms
          of Service and our Privacy Policy. If you don’t agree, please don’t
          use the platform.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">2. Eligibility</h2>
        <p>
          You must be at least 13 years old (or the minimum age in your country)
          to use Oakflix. If you're under 18, your use must be supervised by a
          parent or guardian.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">3. Account & Access</h2>
        <p>
          You're responsible for keeping your account secure. Don't share your
          credentials. Oakflix isn’t liable for losses resulting from
          unauthorized use of your account.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">4. Content & Usage</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Oakflix content is for personal, non-commercial use only.</li>
          <li>
            You may not copy, distribute, or publicly display content without
            permission.
          </li>
          <li>
            We reserve the right to remove or limit access to any content
            without notice.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">5. Subscriptions & Payments</h2>
        <p>
          If you subscribe to a paid plan, billing is recurring unless canceled
          before the renewal date. All prices are subject to change, and we'll
          notify you in advance.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">6. Termination</h2>
        <p>
          You may delete your account at any time. We reserve the right to
          suspend or terminate your access if you violate these terms.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">7. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of Oakflix
          after changes means you accept the new terms.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">8. Legal Stuff</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Oakflix is provided “as is” without warranties of any kind.</li>
          <li>
            We’re not liable for damages related to your use or inability to use
            Oakflix.
          </li>
          <li>
            Any disputes will be handled in accordance with the laws of your
            country or region.
          </li>
        </ul>
      </section>

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold">Need clarification?</h2>
        <p>
          Contact our team at{" "}
          <a
            href="mailto:support@oakflix.com"
            className="underline hover:text-green-600"
          >
            support@oakflix.com
          </a>{" "}
          and we’ll help you out.
        </p>
      </section>
    </main>
  );
};

export default TermsPage;
