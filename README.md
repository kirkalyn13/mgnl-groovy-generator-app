# Magnolia Groovy Generator

A RAG-powered web app for generating Magnolia CMS Groovy scripts using natural language prompts.

Live Site: [mgnl-groovy-generator-app](https://mgnl-groovy-generator-app.vercel.app/)

![Demo](./src/assets/app-demo.gif)
[▶ Watch Demo](https://drive.google.com/file/d/1pTJBK1EGd-dfmM8mIvov_rrAEOrY8xE7/view?usp=sharing)

## Overview

Magnolia Groovy Generator is a full-stack portfolio project that combines a FastAPI backend with a React + Vite frontend to generate context-aware Groovy scripts for Magnolia CMS. It uses Retrieval-Augmented Generation (RAG) to ground script generation on a curated set of example scripts, ensuring outputs are accurate and idiomatic.


## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, Tailwind CSS |
| Backend | FastAPI, Python |
| LLM & Embeddings | Ollama (`mistral`, `nomic-embed-text`, `qwen3.5`) |
| Vector Store | Qdrant |
| RAG Framework | LlamaIndex |
| CMS Integration | Magnolia CMS |
| Observability | LangFuse |
| Memory | Redis |

## Architecture

```mermaid
flowchart RL

    subgraph CLIENTS["Clients"]
        direction TB
        REACT["⚛️   React + Vite UI"]
        MAGNOLIA["📝 Magnolia CMS
        Custom Action"]
    end

    subgraph SESSION["Session Store"]
        direction TB
        REDIS["🔴 Redis
        (if REDIS_URL is set)"]
        MEMORY["🧠 In-Memory
        (fallback)"]
    end

    CLIENTS -->|"HTTP Request"| REST["🌐 REST API
    POST /v1/generate
    POST /v1/ingest"]
    REST --> FASTAPI["⚡ FastAPI Server"]
    FASTAPI --> OLLAMA["🦙 Ollama LLM
    mistral · nomic-embed-text"]
    FASTAPI <--> QDRANT["🗄️ Qdrant
    Vector Store"]
    OLLAMA --> QDRANT
    FASTAPI -->|"JSON Response"| CLIENTS
    FASTAPI -->|"Traces & Metrics"| LANGFUSE["📊 Langfuse
    Observability"]
    FASTAPI <-->|"Read / Write Session"| SESSION

    style REACT fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#000000
    style MAGNOLIA fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#000000
    style CLIENTS fill:#ffffff,stroke:#16a34a,stroke-width:1px,stroke-dasharray:5,color:#000000
    style REST fill:#f9fafb,stroke:#6b7280,stroke-width:2px,color:#000000
    style FASTAPI fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#000000
    style OLLAMA fill:#fefce8,stroke:#ca8a04,stroke-width:2px,color:#000000
    style QDRANT fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#000000
    style LANGFUSE fill:#fdf4ff,stroke:#a855f7,stroke-width:2px,color:#000000
    style REDIS fill:#fff1f2,stroke:#e11d48,stroke-width:2px,color:#000000
    style MEMORY fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#000000
    style SESSION fill:#ffffff,stroke:#e11d48,stroke-width:1px,stroke-dasharray:5,color:#000000
```

## Features

- Natural language to Groovy script generation
- RAG pipeline grounded on example Magnolia CMS scripts
- Expected properties input — tag-based field to guide script output
- Input guard rails — blocks non-Groovy and modification requests, if disabled (default)
- Output guard rails — validates and sanitizes generated scripts
- Retry logic — automatically retries if output contains unwanted content
- Rate limiting — 1 request per second per client
- Fully local — runs entirely on your machine with no cloud API required
- Session Memory - remembers session requests to refine succeeding queries



## Prerequisites

- Python 3.11+
- Node.js 18+
- [Ollama](https://ollama.com) installed and running



## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kirkalyn13/mgnl-groovy-generator-app
cd mgnl-groovy-generator-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env`:

```env
API_URL="http://localhost:8000"
API_DOCS_PATH="/docs"
```

### 3. Start the frontend

```bash
cd mgnl-groovy-generator-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Run with Docker

```bash
docker build -t magnolia-rag-frontend .
docker run -p 5173:5173 magnolia-rag-frontend
```

## Authors

- [Engr. Kirk Alyn Santos](https://github.com/kirkalyn13)

## License

MIT