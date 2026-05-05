interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly API_URL: string;
  readonly API_DOCS_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}