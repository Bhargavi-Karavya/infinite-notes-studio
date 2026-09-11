# Infinite Notes Admin Panel

## Goal
Build the complete song-management admin experience at `/`, faithfully extending the supplied Google Stitch references into a responsive, production-quality interface.

## Visual direction
- Preserve the reference system: deep navy surfaces, cyan-to-pink accent gradient, Hanken Grotesk typography, compact uppercase labels, subtle borders, restrained glow, and rose destructive states.
- Reproduce the 256px desktop sidebar, 80px sticky header, spacious content area, rounded bordered panels, dense controls, and modal treatment.
- Use the supplied Infinite Notes identity image and cohesive generated/local music artwork where the reference requires real imagery.
- On tablet/mobile, convert the sidebar to a drawer, simplify header actions, stack forms, and keep tables horizontally usable.

## Pages and navigation
- **Dashboard `/`**: summary metrics, catalog activity chart, publishing breakdown, recent songs, and quick actions.
- **Songs `/songs`**: searchable/filterable catalog table, status filter, pagination, row actions, and functional deletion confirmation.
- **Add song `/songs/new`**: reusable song form with identity, artist, album, status, lyrics, artwork upload preview, validation, cancel, and mock save feedback.
- **Song details `/songs/$songId`**: artwork, metadata, status, lyrics preview, publishing information, edit and back actions.
- **Edit song `/songs/$songId/edit`**: pre-filled reusable song form, artwork preview, save feedback, and delete flow.
- **Settings `/settings`**: profile, catalog defaults, appearance, and account controls consistent with the references.

## Reusable interface
- Shared admin shell with responsive sidebar, sticky header, breadcrumbs, active navigation, profile footer, and mobile drawer.
- Reusable buttons, page headers, stat cards, status badges, chart/list panels, search/filter controls, artwork upload, song form, confirmation modal, empty state, and pagination.
- Central typed mock catalog so listing, detail, and edit screens stay consistent.
- Local interactions for search, filters, pagination, dialogs, uploads, form validation, theme preference, and success notifications.

## Technical details
- The project runtime is TanStack Start with React 19 rather than Next.js; implement the requested App Router-style page structure using its native file routing, TypeScript, and Tailwind CSS without replacing the fixed framework.
- Define all colors, typography, shadows, and radii as semantic tokens in the global design system.
- Add unique metadata for every content page, accessible labels/focus states, and reduced-motion support.
- Verify the result at desktop and mobile sizes, check interactions, and resolve all preview/build errors.
