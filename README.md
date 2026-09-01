# Texas State Roleplay — Official Rules & Codes

Interactive rules website for the **Texas State Roleplay** ER:LC community.

**Live site:** Enable GitHub Pages on this repository (Settings → Pages → Source: Deploy from branch → `main` / root).

---

## Features

- **Three main sections:** In-Game Rules · Discord Rules · LEO Radio Codes
- **Expandable rule cards** — click any rule to see:
  - What it means
  - How to follow it
  - When it applies
  - Examples of what is / isn’t allowed
  - Exceptions & notes
- **Search** on every section
- **LEO Codes** with 10-codes, response codes, signals, phonetic alphabet, and notes
- **Easy to edit** — all content lives in one file

---

## How to edit rules

1. Open **`data.js`**
2. Find the section you want:
   - `inGameRules` — array of in-game rules
   - `discordRules` — array of Discord rules
   - `leoCodes` — 10-codes, response codes, signals, phonetic
   - `leoNotes` — important notes
   - `siteConfig` — title, subtitle, tagline, values
3. Add, remove, or change entries using the existing format.
4. Save and refresh the page (or push to GitHub if using Pages).

### Rule object format

```js
{
  id: "ig-1",           // unique id
  number: 1,            // display number
  title: "Stay In Character",
  short: "Remain IC during active RP.",
  meaning: "...",
  howToFollow: "...",
  whenApplies: "...",
  examplesAllowed: ["...", "..."],
  examplesNotAllowed: ["...", "..."],
  exceptions: "..."
}
```

---

## Local preview

Open `index.html` in a browser, or run a simple server:

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

Then visit `http://localhost:8080`.

---

## Deploy to GitHub Pages

1. Create a new repository (or use an existing one).
2. Upload / push all files in this folder to the root (or a `docs/` folder).
3. Go to **Settings → Pages**.
4. Set source to the branch and folder you used.
5. Save — your site will be live at `https://<user>.github.io/<repo>/`.

---

## Philosophy

> *Quality RP comes before winning.*  
> Professional · Fair · Realistic · Community Driven

---

*Compiled for Texas State Roleplay. Rules content is community-managed.*
