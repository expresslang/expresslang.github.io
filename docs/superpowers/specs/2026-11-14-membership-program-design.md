# ELF Membership Program & Site Restructuring — Design

**Date:** 2026-11-14
**Status:** Approved design, pending implementation plan
**Driver:** ISO/TC 184/SC 4 Category A liaison application review flagged two eligibility criteria as insufficiently evidenced:

- **Criterion 3** — "is membership-based and open to members worldwide or over a broad region": the site lists founders and "supporters"; the reviewer noted supporters do not qualify as members and the roster appears almost all US-based.
- **Criterion 5** — "has a process for stakeholder engagement and consensus decision-making": public review is documented (ELF 101), but consensus decision-making in technical committees is not exposed.

All supporter organizations and founders/leadership have agreed to join as inaugural members, so the site can truthfully label them as members once the program launches.

## 1. Membership program

### 1.1 Categories and fees (revenue-band model)

| Category | Annual fee | Eligibility |
|---|---|---|
| Founding | By Board invitation | Inaugural members designated by the Board |
| Corporate — revenue < $10M | $3,000 | For-profit organizations |
| Corporate — revenue $10–100M | $6,000 | For-profit organizations |
| Corporate — revenue > $100M | $12,000 | For-profit organizations |
| Small business | $2,000 | For-profit, ≤50 employees (self-certified; threshold subject to Board adoption like the fees) |
| Non-profit / Government | $1,200 | Registered non-profits, government bodies |
| University | $550 | Accredited academic institutions |
| Individual | $550 | Natural persons |

- Fee table on `/membership` carries the note "fee schedule subject to adoption by Board resolution" until the Board formally adopts it.
- Benchmarked against Khronos ($22k contributor, $220/employee bounded ≤100 staff), W3C (revenue bands €1,950–€68,000), OGC (engagement levels, country-income pricing), Unicode ($50k/$20k/$5k/$75), Ecma (CHF 70k/35k/17.5k/3.5k), OASIS ($70k/$13.5k/$1,975), OMG ($75k/$37.5k).

### 1.2 Rights model (501(c)(3)-compliant)

Corporate governance and technical governance are strictly separated:

- **Board of Directors** (3 directors: Ronald Tse as Secretary, Thomas Thurman as President, Hiroshi Murayama as Vice-President) holds all corporate governance: budget, legal, bylaws, final appeal. Members have **no** board-level voting rights (bylaws §3.02 non-voting membership stays intact — required by 501(c)(3) status).
- **Technical governance** is delegated by Board resolution to the TCC/TC system. Every paid member, regardless of category, participates in Technical Committees with **one vote per member** (organizations appoint one delegate; individuals vote directly). Never per-employee.
- Member rights: participate and vote in any TC, propose new TCs, chair TCs. Representation at the TCC flows through TC chairs (CalConnect model).
- Dues fund the exempt purpose (standards development, education); non-technical benefits stay de minimis and non-exclusive. Membership page states dues are not charitable-contribution deductions where benefits are received (W3C practice).

### 1.3 Join flow

Category chosen → membership agreement (email/DocuSign to info@expresslang.org) → Board approval (bylaws §3.01) → invoice & payment → listed on `/members`.

## 2. Governance model (criterion 5 answer)

Three layers, published on `/governance`:

```
Board of Directors            corporate governance — budget, legal, bylaws, final appeal
  │  delegates technical authority (Board resolution)
Technical Coordination        chairs of active TCs + Board representative;
Committee (TCC)               approves new TCs, charters, and publication of
                              TC documents after Last Call; meets regularly
  │
Technical Committees          members participate and vote;
                              decisions by consensus; fallback supermajority
                              vote (one member = one vote);
                              formal objections escalate TC → TCC → Board (final)
```

Published consensus mechanics: all drafts publicly reviewed (ELF 101), comment dispositions published, non-members may comment via public channels, meeting minutes public once accepted (bylaws §11.05). Governance documents linked: Articles of Incorporation, Bylaws, ELF directives (ELF 101 etc.), Board resolution.

## 3. Technical Committees

Five TCs, no standing/chartered differentiation shown, **no chairs named at this point**:

| TC | Scope |
|---|---|
| TC EXPRESS | EXPRESS modelling language: definition, maintenance and evolution (ISO 10303-11); schema lifecycle standards (schema manifest, changes model); language extensions — mapping language, EXPRESS-Q; Annotated EXPRESS and pretty-print; SUMA publication framework for ISO 10303 resources; open-source toolchain (parser, validation, conformance) |
| TC EXPRESS-G | EXPRESS-G graphical notation: definition, maintenance, and visualization practice |
| TC EXPRESS-I | Implementation methods: Part 21 exchange structure, Part 28 XML representation, SDAI bindings, data interchange practice |
| TC OpenCDD | OpenCDD: EXPRESS schemas for the IEC Common Data Dictionary (IEC 61360 / IEC 62656), open model libraries, and supporting tooling |
| TC Education | Education and community: tutorials, courses, modelling best practices, documentation, and user-community support |

- ISO/SC 4 WG alignment (WG 11 / WG 12 / WG 21 / JWG 24) noted lightly on TC cards as standardization targets — factual, no personnel commitments.
- MECE coverage: every ELF artifact from the liaison application (ELF 5001, 5002, 5004, 5005, 5006, 5007, OpenCDD schemas/libraries/tooling, SUMA, education) lands in exactly one TC.
- CDDAL is excluded from the OpenCDD charter.

## 4. Site IA (MECE — one question per page)

| Page | Question | Content |
|---|---|---|
| `/about` | What is ELF? | Mission, purpose, 501(c)(3) status, international character; pointers only to governance/TCs/members. Governance, membership, technical-work prose moves out. |
| `/governance` (new) | How does ELF make decisions? | Three-layer model above, consensus mechanics, public review, appeals, governance documents. |
| `/technical-committees` (new) | What are ELF's TCs? | Five TC cards: name, scope, standardization alignment, status. |
| `/members` (new, replaces `/supporters`) | Who are ELF's members? | Roster: Founding member orgs (8) + individual members (12), country tag + category badge each, plus an interactive world map showing where members are represented from. |
| `/membership` | How do I join? | Categories, fee table with adoption note, rights matrix, join steps, contact. No roster. |
| `/leadership` | Who leads ELF? | Officers + founders (roles), country tags on cards. |

- `/supporters` is retired: its URL redirects to `/members`; the supporter framing (which the ISO reviewer rejected) does not carry over.
- Nav **About** submenu: About ELF · Governance · Technical Committees · Members · Membership · Leadership.
- A person may appear on both `/leadership` (role facet) and `/members` (member facet); each page links to the other and to `/people/*` profiles.
- Countries rendered as text names, never flags (W3C/OGC practice; avoids political sensitivities).
- Interactive map on `/members`: jsvectormap (SVG, no tile server) with regions highlighted per member country. ISO 3166-1 alpha-2 codes are **derived from the country names** at build/render time via `i18n-iso-countries` — never stored in a parallel hand-maintained table. A contract test fails if any country name does not resolve. Map ships an SSR text legend (country → member count/names) as the accessible fallback.

## 5. Data model

**`src/data/members.yaml`** (new) — single source of truth for `/members`:

```yaml
- name: Boeing
  logo: /images/supporters/supporter-boeing.svg   # existing assets reused
  url: https://www.boeing.com
  country: United States
  category: founding          # founding | corporate | small | nonprofit | university | individual
  joined: 2022
  desc: Associate Technical Fellows contributing to ISO TC 184/SC 4 working groups…
```

- 8 organizations (Boeing, General Electric, NIST, PDES Inc., STEP Tools, Jotne EPM Technology, AFNeT Services, Ribose Limited) as Founding members. Country per user-confirmed list: Boeing/GE/NIST/PDES/STEP Tools = United States, Jotne = Norway, AFNeT = France, Ribose Limited = United Kingdom (UK entity).
- **McDonnell Douglas is NOT a member** — the company no longer exists (merged into Boeing, 1997). Its EXPRESS-birthplace role stays in historical contexts only: the homepage "Heritage" logo strip, the 1982 timeline entry, and Douglas Schenck's profile.
- 12 individuals (the founders/officers roster) as Individual members, cross-linked to `/people/*`.

**`src/data/committees.yaml`** (new) — source of truth for `/technical-committees`:

```yaml
- id: tc-express
  name: TC EXPRESS
  scope: >-
    Definition, maintenance and evolution of the EXPRESS modelling language…
  standardization: ISO/TC 184/SC 4 WG 11
  status: active
```

**`src/data/people.yaml`** — add `country: <text name>` per person (US, France, Norway, Japan, United Kingdom, …).

Component work: new `MemberCard.astro` (logo/name, country, category badge), new `CommitteeCard.astro` (name, scope, alignment, status); `PersonCard.astro` gains a country line.

## 6. Deliverables beyond the website

1. **Board resolution outline** — (a) delegates technical authority to the TCC/TC system; (b) defines member participation and one-member-one-vote in TCs ("except as determined by the Board", bylaws §3.02); (c) adopts the fee schedule; (d) designates Founding Members.
2. **Liaison-form replacement text** for criteria 3 and 5 citing the published membership program (worldwide, fee-based, categorized), `/governance`, `/technical-committees`, and ELF directives.
3. **Draft reply** to the ISO reviewer and Ron's fee email referencing the changes.

## 7. Testing

- `npm run build` succeeds; `npm run preview` renders all six pages (light + dark), nav submenu, `/supporters` → `/members` redirect.
- Country/category data renders for all 20 members (8 organizations + 12 individuals) and 12 people.
- Lychee link check passes on `dist/`.

## Out of scope (deferred)

- Fee calculator widget, member directory filters, application form page (Approach B extras — pointless at 20 members).
- Publishing TC chair names (explicitly deferred by user).
- Formal adoption of the fee schedule (Board decision; site copy is ready for the moment it passes).
