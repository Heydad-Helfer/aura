# 🌌 Project PRD: Aura (Mental Health Tracker & Ecosystem)
## Product Overview
Aura is a self-contained, multi-platform mental health ecosystem designed to help users pause, evaluate their immediate mental state, engage in brief therapeutic exercises, and track emotional trends over time.

The core philosophy of Aura is low-friction engagement. The mobile client acts as an immediate touchpoint for quick logging and action, while the desktop web client provides a reflective space for long-term analytics.

## Target Audience & Core Value
**The User**: Individuals seeking a private, streamlined tool to manage daily stress, anxiety, or mental fatigue without heavy, overly complex logging requirements.

**The Value**: Closing the loop between data collection and immediate relief. Aura doesn't just track how stressed a user is; it instantly provides a behavioral exercise to address that state.

## System Architecture (High-Level)
Aura is structured as a TypeScript monorepo to maximize type safety, code sharing, and development velocity across three primary runtime components.

```mermaid
graph TD
    %% Define Clean Styles
    classDef client fill:#e0f2fe,stroke:#0369a1,stroke-width:2px,color:#0f172a;
    classDef backend fill:#f0fdf4,stroke:#15803d,stroke-width:2px,color:#0f172a;
    classDef database fill:#fef3c7,stroke:#b45309,stroke-width:2px,color:#0f172a;

    %% Nodes
    Web["Web Dashboard <br> (TanStack Start)"]:::client
    Mobile["Mobile App <br> (React Native / Expo)"]:::client
    API["Backend API <br> (NestJS Core)"]:::backend
    DB[("Database <br> (Relational / Prisma)")]:::database

    %% Unidirectional/Bidirectional Layout Logic
    Web -- "Queries Aggregated Analytics <br> (Server Functions / HTTP)" --> API
    
    API -- "Dispatches Exercises" --> Mobile
    Mobile -- "Logs Stress & Compliance <br> (REST / JSON)" --> API
    
    API -- "Read / Write" --> DB
```

   
_Component Breakdown_
**Mobile App**: Built using React Native (Expo). Optimized for fast execution, native notifications, and a responsive single-screen flow.

**Backend API**: Built using NestJS. Serves as the centralized brain handling state storage, user identity, telemetry aggregation, and exercise dispatch logic.

**Web Dashboard**: Built using TanStack Start. A desktop-first web application specializing in analytical rendering, deep-dive reporting, and historical trend views.

## MVP Functional Scope (Version 1.0)
The objective of the MVP is to prove the end-to-end data pipeline across all three runtimes using deterministic, high-performance logic.

### Mobile Client Features
**Quick Check-In**: A primary interactive controller allowing the user to select a numerical stress score from 1 to 10.

**Static Exercise Delivery**: Upon submitting a stress score, the app instantly renders a specific therapeutic activity card (title, description, duration) fetched from the backend.

**Completion Logging**: A clear action button confirming the exercise was completed, which locks the event into history.

### Backend API Features
**Ingestion Endpoints**: Secure endpoints to receive stress logs, fetch tailored exercises, and record execution compliance.

**Deterministic Matching Engine**: A static rule matrix that evaluates incoming numerical stress values and immediately maps them to the correct structural category of exercise.

**Data Aggregation**: Aggregates telemetry records partitioned by time chunks to feed the web dashboard efficiently.

### Web Dashboard Features
**Authentication & Access**: A protected web space mapped to the corresponding user data profile.

**Trend Visualization**: High-impact metric widgets showing average stress levels, exercise completion compliance ratios, and historical line charts tracking stress deltas over weeks or months.

## Future Roadmap (Version 2.0+)
Once the core multi-platform sync engine is stable, Aura will expand to include qualitative telemetry and autonomous contextual logic.

**The Mood Cloud (Qualitative Data)**: Introducing a multi-tag select interface ("Calm", "Focused", "Anxious", "Tired") alongside the numerical slider during mobile check-ins to capture granular emotional context.

**Agentic AI Engine**: Transitioning from the deterministic matching engine to an LLM-powered agent framework within NestJS. The agent will consume the user's explicit score, qualitative tags, and historical exercise compliance to generate fully customized, context-aware exercises on the fly.

**Intelligent Reminders**: Native background notifications driven by scheduling patterns or anomalies in tracking history to nudge users toward proactive exercises.

**Advanced Web Analytics**: Cross-referencing qualitative data strings against quantitative stress scores to surface hidden emotional drivers (e.g., correlations between specific mood tags and stress peaks).

## Non-Functional & Technical Requirements
**Type Safety**: Absolute shared typing across the API payloads, mobile data structures, and web components utilizing a internal workspace package.

**Performance**: Mobile API requests must respond within acceptable network limits to preserve low-friction user psychology.

**Data Privacy**: Strict isolation of health-adjacent user logs at the database level.

**Local Simulation Capacity**: The entire ecosystem must be capable of running smoothly in a local development environment (Docker/Localhost) to ensure rapid developer iteration.