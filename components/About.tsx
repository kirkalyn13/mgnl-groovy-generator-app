import { Link } from "react-router-dom";
import { GITHUB_URL } from "../config";

const FEATURES = [
  {
    title: "Grounded in real scripts",
    body: "Every script is generated from a curated library of Magnolia examples, so the output follows the patterns your CMS actually expects.",
  },
  {
    title: "Ingest your own examples",
    body: "Load scripts from local files or pull them straight from Magnolia REST Delivery to teach the generator your conventions.",
  },
  {
    title: "Steer with expected properties",
    body: "Tag the fields you need and the generated script is guided to include them.",
  },
  {
    title: "Remembers your session",
    body: "Follow-up prompts build on earlier requests, so you can refine a script instead of starting over.",
  },
  {
    title: "Guard rails on both ends",
    body: "Input checks keep requests on topic, output checks validate and sanitize the script, and bad results are retried automatically.",
  },
  {
    title: "Your choice of model",
    body: "Run locally with Ollama or connect Gemini. Other providers can be added through the LLM_MODE switch.",
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
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="px-4 sm:px-6 lg:w-10/12 lg:mx-auto lg:px-0 py-10 sm:py-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-white">
              Describe the task. Get the Groovy script.
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              Magnolia Groovy Generator turns plain-language requests into working Magnolia CMS scripts, grounded in real examples instead of guesswork.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center rounded-md bg-green-500 px-6 py-3 font-semibold text-gray-950 hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Generate a script
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-gray-700 bg-transparent px-6 py-3 font-semibold text-gray-200 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                View on Github
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-950 shadow-lg shadow-black/40 overflow-hidden">
            <div className="border-b border-gray-800 px-5 py-4">
              <p className="text-sm font-medium text-gray-500">Prompt</p>
              <p className="mt-1 text-gray-100">{SAMPLE_PROMPT}</p>
            </div>
            <div className="bg-black/40 px-5 py-4">
              <p className="text-sm font-medium text-gray-500">Generated Groovy</p>
              <pre className="mt-2 overflow-x-auto text-sm leading-relaxed text-green-400">
                <code>{SAMPLE_SCRIPT}</code>
              </pre>
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

      <section className="bg-gray-900 border-y border-gray-800">
        <div className="px-4 sm:px-6 lg:w-10/12 lg:mx-auto lg:px-0 py-12 sm:py-16 text-center sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white max-w-2xl">
            Built for Magnolia developers who would rather ship than search
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-400 leading-relaxed">{feature.body}</p>
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

          <h2 className="mt-12 text-3xl font-bold tracking-tight text-white">Use Magnolia as a custom action</h2>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
            Teams can also trigger the generator from inside Magnolia through a custom action, so scripts are one click away from the authoring environment.
          </p>
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
        <div className="px-4 sm:px-6 lg:w-10/12 lg:mx-auto lg:px-0 py-12 sm:py-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
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