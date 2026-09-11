# Infinite Notes Admin

I want you to build a modern, production-quality Admin Panel UI using Next.js.

I will upload screenshots/images of my admin panel UI that I created using Google Stitch. These uploaded images are the primary design reference. Your task is to reproduce the design as accurately as possible while making the implementation clean, responsive, and maintainable.

Project Context

This is an admin panel for a music/song content platform called Infinite Notes.

The admin panel will be used to manage song-related content that will later be displayed on the public website.

For this task, focus on building the Admin Panel UI only.

Technology Requirements

Use Next.js with the App Router

Use TypeScript

Use Tailwind CSS for styling

Use reusable React components

Use a clean and scalable folder structure

Use responsive layouts

Use modern form components, tables, cards, modals, dropdowns, and navigation

Keep the code easy to extend with backend APIs later

Most Important Design Instruction

Use my uploaded Google Stitch screenshots as the source of truth for the visual design.

Please carefully follow:

Overall layout

Sidebar design

Header design

Page spacing

Typography

Font sizes and weights

Colors

Background colors

Borders

Border radius

Shadows

Buttons

Input fields

Tables

Cards

Icons

Empty states

Modal layouts

Dark mode and light mode, if shown in the references

Responsive behavior

Do not replace the design with a generic admin dashboard template.

If something is not clearly visible in the screenshots, make a reasonable design decision that matches the existing visual style instead of introducing an unrelated design.

Admin Panel Pages

Build the following admin pages and UI flows.

1. Admin Dashboard

Create a dashboard matching the uploaded design.

Include the elements shown in the reference, such as:

Sidebar navigation

Top header

Dashboard summary cards

Song statistics

Recently added songs

Quick actions

Any charts, lists, or sections visible in the screenshot

Use realistic mock data for now.

2. Songs Listing Page

Create a page to display all songs.

Include:

Page title

Search input

Filters if shown in the reference

Add Song button

Songs table or card layout based on the screenshot

Song name

Artist name

Artist image or thumbnail, if shown

Status

Created date, if shown

Edit action

Delete action

View action, if shown

Pagination if shown

Use mock data.

3. Add Song Page

Create a form for adding a new song.

Include fields based on the UI reference and the platform requirements:

Song name

Artist name

Artist image

Song cover image, if applicable

Lyrics/content

Status

Any other fields visible in the reference

The form should have:

Proper labels

Input validation UI

Required field indicators where appropriate

Upload UI for images

Save/Create button

Cancel button

Clean spacing and error states

For now, the form can use mock submission behavior. Do not require a real backend.

4. Edit Song Page

Create an edit page using the same design language as the Add Song page.

Include:

Pre-filled mock song data

Editable fields

Image preview

Save changes button

Cancel button

Delete option if shown in the design

5. Song Details Page

Create a detailed view for an individual song.

Display the information in a clean, readable layout matching the reference design.

Include:

Song name

Artist name

Artist image

Song content/lyrics preview

Status

Other available metadata

Edit button

Back button

6. Admin Settings Page

If the uploaded design includes settings, build the settings page accordingly.

Include only the sections that fit the existing design, such as:

Profile settings

Appearance settings

Theme toggle

Account settings

Do not add unnecessary settings that are not relevant to the design.

Navigation

Create a reusable admin layout with:

Sidebar

Header

Navigation links

Active navigation state

Responsive mobile navigation

Theme support if shown in the screenshots

The sidebar and header should remain consistent across all admin pages.

Components

Create reusable components wherever appropriate, such as:

AdminSidebar

AdminHeader

PageHeader

StatCard

DataTable

SearchBar

FilterDropdown

SongForm

ImageUpload

StatusBadge

ConfirmationModal

EmptyState

LoadingState

Do not duplicate the same UI code unnecessarily.

Data and Functionality

For now:

Use mock data or local state

No real database is required

No real authentication is required unless the reference specifically includes a login screen

No real file upload service is required

Buttons and navigation should work as UI interactions

Add, edit, delete, search, and filter interactions can use mock/local state

Structure the code so that real APIs and a database can be integrated later without rebuilding the UI.

Responsive Design

The admin panel must work well on:

Desktop

Laptop

Tablet

Mobile

On smaller screens:

Sidebar should collapse or become a mobile drawer

Tables should remain usable through responsive layouts or horizontal scrolling

Forms should stack properly

Buttons and spacing should remain usable

Code Quality

Use TypeScript properly

Avoid unnecessary complexity

Avoid hardcoded repeated UI

Use meaningful component and variable names

Keep styling consistent

Ensure there are no TypeScript or build errors

Ensure all pages are connected through navigation

Use accessible buttons, labels, inputs, and interactive elements

Final Instruction

First analyze the uploaded screenshots carefully.

Then implement the Admin Panel UI to match them as closely as possible.

Do not create a generic dashboard. Reproduce my provided design and extend it consistently to the missing pages.

Focus on delivering a polished, responsive, visually consistent Next.js admin panel that is ready for future backend integration.

1. https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzAwMDY1YjMyYWM1YWU3OGYwMzM4NTg5OWNmMmUwZWEwEgoSBhCF0NqRZBgBkgEjCgpwcm9qZWN0X2lkEhVCEzU3MjE0NTA5NzUwODg3NDMyMTc&filename=&opi=89354086
2. https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzAwMDY1YjMyYmU1MmYwYjUwMWVlNjYyMDczMzMwMzk1EgoSBhCF0NqRZBgBkgEjCgpwcm9qZWN0X2lkEhVCEzU3MjE0NTA5NzUwODg3NDMyMTc&filename=&opi=89354086
3. https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzAwMDY1YjMyYmU2MWI5NWMwMmQzZmMwNjNkMDg5MWRjEgoSBhCF0NqRZBgBkgEjCgpwcm9qZWN0X2lkEhVCEzU3MjE0NTA5NzUwODg3NDMyMTc&filename=&opi=89354086
4. https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzAwMDY1YjMyYmU2ZDc0YWYwMmQzZDFhYzRjMjljZmU1EgoSBhCF0NqRZBgBkgEjCgpwcm9qZWN0X2lkEhVCEzU3MjE0NTA5NzUwODg3NDMyMTc&filename=&opi=89354086

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d1841629-6bc7-4266-8349-6467eba5e9f1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
