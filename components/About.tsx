import { Link } from "react-router-dom";
import { GITHUB_URL } from "../config";

const FEATURES = [
  {
    title: "Grounded in real scripts",
    body: "Every script is generated from a curated library of Magnolia examples, so the output follows the patterns your CMS actually expects.",
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </>
    ),
  },
  {
    title: "Ingest your own examples",
    body: "Load scripts from local files or pull them straight from Magnolia REST Delivery to teach the generator your conventions.",
    icon: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </>
    ),
  },
  {
    title: "Steer with expected properties",
    body: "Tag the fields you need and the generated script is guided to include them.",
    icon: (
      <>
        <line x1="4" x2="4" y1="21" y2="14" />
        <line x1="4" x2="4" y1="10" y2="3" />
        <line x1="12" x2="12" y1="21" y2="12" />
        <line x1="12" x2="12" y1="8" y2="3" />
        <line x1="20" x2="20" y1="21" y2="16" />
        <line x1="20" x2="20" y1="12" y2="3" />
        <line x1="2" x2="6" y1="14" y2="14" />
        <line x1="10" x2="14" y1="8" y2="8" />
        <line x1="18" x2="22" y1="16" y2="16" />
      </>
    ),
  },
  {
    title: "Remembers your session",
    body: "Follow-up prompts build on earlier requests, so you can refine a script instead of starting over.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    title: "Guard rails on both ends",
    body: "Input checks keep requests on topic, output checks validate and sanitize the script, and bad results are retried automatically.",
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Your choice of model",
    body: "Run locally with Ollama or connect Gemini. Other providers can be added through the LLM_MODE switch.",
    icon: (
      <>
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
      </>
    ),
  },
];

const STEPS = [
  {
    title: "Describe the task",
    body: "Write what you need in plain English, such as listing every page under a section.",
  },
  {
    title: "Retrieve matching examples",
    body: "The generator finds the closest Magnolia scripts in its library to use as context.",
  },
  {
    title: "Copy a validated script",
    body: "Get clean Groovy that has passed output checks, ready to run in the Magnolia Groovy app.",
  },
];

const SAMPLE_PROMPT = "List all pages under /travel and print their paths";

const SAMPLE_SCRIPT = `def result = session.workspace.queryManager
    .createQuery("SELECT * FROM [mgnl:page] WHERE ISDESCENDANTNODE('/travel')", "JCR-SQL2")
    .execute()

result.nodes.each { println it.path }`;

const STACK = [
  "React + Vite",
  "FastAPI",
  "LlamaIndex",
  "Qdrant",
  "Ollama",
  "Gemini",
  "Redis",
  "LangFuse",
];

const About = () => {
  return (
    <div className="bg-gray-950 text-gray-100">
      <section className="relative overflow-hidden bg-gray-900 border-b border-gray-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(75,85,99,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.25)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-green-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl"
        />

        <div className="relative px-4 sm:px-6 lg:w-10/12 lg:mx-auto lg:px-0 py-12 sm:py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              RAG-powered · Ollama &amp; Gemini
            </span>

            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              Describe the task.{" "}
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                Get the Groovy script.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              Magnolia Groovy Generator turns plain-language requests into working Magnolia CMS scripts, grounded in real examples instead of guesswork.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center rounded-md bg-green-500 px-6 py-3 font-semibold text-gray-950 shadow-lg shadow-green-500/25 transition hover:-translate-y-0.5 hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Generate a script
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-gray-700 bg-gray-900/60 px-6 py-3 font-semibold text-gray-200 transition hover:-translate-y-0.5 hover:border-gray-500 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                View on Github
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-green-400/40 via-transparent to-emerald-500/30 blur-xl"
            />
            <div className="relative rounded-xl border border-gray-700 bg-gray-950 shadow-2xl shadow-black/60 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-900 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs font-medium text-gray-500">groovy-generator</span>
              </div>

              <div className="px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Prompt</p>
                <p className="mt-2 flex gap-2 text-gray-100">
                  <span className="text-green-400" aria-hidden="true">&gt;</span>
                  <span>{SAMPLE_PROMPT}</span>
                </p>
              </div>

              <div className="flex items-center gap-3 px-5" aria-hidden="true">
                <div className="h-px flex-1 bg-gray-800" />
                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-300">
                  retrieve · generate · validate
                </span>
                <div className="h-px flex-1 bg-gray-800" />
              </div>

              <div className="px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Generated Groovy</p>
                <pre className="mt-2 overflow-x-auto text-sm leading-relaxed text-green-400">
                  <code>{SAMPLE_SCRIPT}</code>
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-green-400" aria-hidden="true" />
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:w-10/12 lg:mx-auto lg:px-0 py-12 sm:py-16 text-center sm:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white">From request to script in three steps</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="border-t-2 border-green-500 pt-4 text-center sm:text-left">
              <p className="text-sm font-semibold text-green-400">Step {index + 1}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-gray-400 leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative overflow-hidden bg-gray-900 border-y border-gray-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(107,114,128,0.22)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-56 w-2/3 -translate-x-1/2 rounded-full bg-green-500/5 blur-3xl"
        />

        <div className="relative px-4 sm:px-6 lg:w-10/12 lg:mx-auto lg:px-0 py-12 sm:py-16 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">Features</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white max-w-2xl">
            Built for Magnolia developers who would rather ship than search
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 sm:mx-0" />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-gray-800 bg-gray-950/60 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-gray-950 hover:shadow-lg hover:shadow-green-500/5 sm:text-left"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 text-green-400 transition duration-300 group-hover:border-green-400/60 group-hover:bg-green-500/20 sm:mx-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:w-10/12 lg:mx-auto lg:px-0 py-12 sm:py-16 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="min-w-0 text-center sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white">Run it locally or in the cloud</h2>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
            Keep everything on your machine with Ollama, or connect Gemini for hosted models. Requests are rate limited to protect shared API quotas, and every run is traced in LangFuse.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
            {STACK.map((item) => (
              <li
                key={item}
                className="rounded-full border border-gray-700 bg-gray-900 px-4 py-1.5 text-sm font-medium text-gray-300"
              >
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-3xl font-bold tracking-tight text-white">Integrate into Magnolia CMS</h2>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
            Teams can also trigger the generator from inside Magnolia through a custom action, so scripts are one click away from the authoring environment.
          </p>
          <a
            href="https://github.com/kirkalyn13/mgnl-groovy-generator/blob/main/integrations/magnolia/INTEGRATION.md"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-md border border-gray-700 bg-transparent px-6 py-3 font-semibold text-gray-200 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            Read integration docs
          </a>
        </div>

        <div className="min-w-0">
          <img
            src="/mgnl-demo.gif"
            alt="Magnolia custom action demo"
            className="rounded-xl border border-gray-700 shadow-lg shadow-black/40 w-full h-auto"
          />
        </div>
      </section>

      <section className="bg-green-950 border-t border-green-900">
        <div className="px-4 sm:px-6 lg:w-10/12 lg:mx-auto lg:px-0 py-12 sm:py-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12 lg:gap-16 text-center sm:text-left">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Write your first script now</h2>
            <p className="mt-2 text-green-200">Describe what you need and copy the result.</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-green-500 px-6 py-3 font-semibold text-gray-950 hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-green-950"
          >
            Open the generator
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;