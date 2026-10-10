# Portfolio – Josias Ketchankeu Andoyo

Persönliches Portfolio, online unter **https://josiasketcha.github.io/**.

Reines HTML, CSS und JavaScript, ohne Framework und ohne Build-Schritt.

## Struktur

| Datei | Inhalt |
|---|---|
| `index.html` | Seitenstruktur und deutsche Texte |
| `style.css` | Gestaltung: Farben und Schriften in `:root`, Layout, responsive Regeln |
| `script.js` | Sprachumschaltung DE/EN/FR (Objekt `T`), Uhr, Animationen, SVG-Schema |
| `images/portrait.jpg` | Profilfoto |

## Texte ändern

- Deutsch: direkt in `index.html`.
- Englisch und Französisch: in `script.js` im Objekt `T` unter `en` bzw. `fr`.
  Jeder Text hat einen Schlüssel, der zum Attribut `data-i18n="…"` in `index.html` passt.

Änderungen werden nach einem Commit auf `main` in ein bis zwei Minuten live.
