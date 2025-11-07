# FormGuardian

> A sleek, privacy-minded project that **flags risky web forms** before you hand over sensitive data.  
> This README showcases the project vision, feature design, and tech stack.  
> **Note:** The codebase is **not** promoted for reuse or redistribution.

---

## Project Overview

**FormGuardian** is a lightweight **Chrome extension** with a simple purpose:  
help people avoid unsafe or suspicious forms online by surfacing **clear, instant warnings**.

The public site presents the concept and benefits in a clean, accessible way:
- **Fast checking** — scans for HTTPS before submission.  
- **High precision** — flags sensitive fields (e.g., passwords/IDs) proactively.  
- **Private & secure** — warns locally when a form could put data at risk. :contentReference[oaicite:0]{index=0}

---

## Technology Stack (at a glance)

- **Browser Extension:**  
  - **JavaScript**, **HTML**, **CSS**  
  - Content/DOM scanning to evaluate form risk heuristics
- **Frontend site / marketing page:**  
  - Hosted on **Vercel** at `form-guardian.vercel.app` for a fast, minimal landing page. :contentReference[oaicite:1]{index=1}
- **Repository languages:** ~90% JavaScript, ~6.5% CSS, ~3.3% HTML (GitHub stats). :contentReference[oaicite:2]{index=2}

> This README intentionally omits setup instructions. The repository serves the live project and documentation context; it is **not** intended as a starter template.

---

## What It Does (Feature Design)

- **Connection safety checks**  
  FormGuardian looks for **secure submission (HTTPS)** and highlights risks up-front so users don’t have to guess. :contentReference[oaicite:3]{index=3}

- **Sensitive-field awareness**  
  Detects fields that typically carry risk (e.g., **passwords or IDs**) and surfaces clear prompts before you type. :contentReference[oaicite:4]{index=4}

- **Lightweight + local**  
  The experience favors **speed and privacy**, avoiding friction while keeping the UX calm and non-intrusive. :contentReference[oaicite:5]{index=5}

---

## Design Highlights

- **Clarity first** — short copy and obvious calls-to-action so non-technical users understand the value quickly. :contentReference[oaicite:6]{index=6}  
- **Trust signals** — language and layout emphasize safety, privacy, and user control. :contentReference[oaicite:7]{index=7}  
- **Minimal footprint** — lean assets and a focused color system keep the interface quick and distraction-free.

---

## Information Architecture (Repo & Site)

- **Extension logic** — form scanning & warnings (JavaScript + DOM analysis).
- **Public site** — concise landing page explaining *what*, *why*, and *how it helps*, with a clear primary CTA. :contentReference[oaicite:8]{index=8}

> Directory names may include a site folder (e.g., `frontend/`) and app content (e.g., `app/`), reflecting a separation between **extension** and **marketing site** concerns. Exact structure can evolve as the project grows. :contentReference[oaicite:9]{index=9}

---

## Accessibility & UX Considerations

- **Readable contrast** and **semantic structure** to support assistive tech.  
- **Subtle motion** (or none) to avoid cognitive overload.  
- **Clear risk copy** — warnings that are human-readable, not technical jargon.

---

## Project Status & Intended Use

This project is **live for its intended purpose** as a privacy-minded helper for forms.  
The repository exists for transparency and documentation.

> **Disclaimer:** The maintainers **do not encourage reuse, copying, or redistribution** of the codebase. Please respect the brand, design, and implementation choices.

---

## Credits

- **Project:** **FormGuardian**  
- **Repository:** `@ViniciusBerger` — FormGuardian  
- **Site:** `form-guardian.vercel.app` (public landing page)

---

### License

This repository is provided **as is** for viewing and reference of the project only.  
No license is granted for reuse of the code, assets, or branding.
