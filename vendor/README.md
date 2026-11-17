# Vendored files

- `motion.min.js`: Motion 12.43.0 (formerly Framer Motion), UMD build `dist/motion.js` from the `motion` npm package. Exposes `window.Motion` (`animate`, `inView`, `hover`, `stagger`). MIT, see `motion-LICENSE.md`.
- Fonts in `../assets/fonts/`: Inter and JetBrains Mono variable woff2 (latin + latin-ext) from `@fontsource-variable/*` 5.3.0. SIL OFL 1.1, licenses alongside.

Served locally so the site does not depend on a third-party CDN at runtime.

Used by `codex.html`:
- `gsap.min.js`, `ScrollTrigger.min.js`: GSAP 3.15.0 from `greensock/GSAP` `dist/` (vendored 2026-10-16). https://gsap.com/standard-license
- `lenis.min.js`: Lenis 1.3.27 from the `lenis` npm package, `dist/lenis.min.js`. MIT, see `lenis-LICENSE`.
- Cormorant Garamond variable woff2 (normal + italic, latin + latin-ext) in `../assets/fonts/`, `@fontsource-variable/cormorant-garamond` 5.3.0. SIL OFL 1.1.
