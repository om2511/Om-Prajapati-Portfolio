# Phase 6 Product Polish

## Goal

Make the active portfolio project feel like a finished professional product instead of a migration artifact.

## Scope

Update the active React frontend design and content where needed.

Improve perceived quality through stronger layout, motion, hierarchy, and section flow.

Update `README.md` so it reads like a professional project overview instead of migration notes.

Remove files that are clearly unnecessary to the active application.

## Planned Work

[x] Audit active frontend components and content structure.
[x] Remove obvious unused or generated files from the active repo path.
[x] Upgrade the visual system for stronger hierarchy, polish, and responsiveness.
[x] Add any missing portfolio content sections that materially improve credibility.
[x] Rebuild and validate the frontend after the polish pass.
[x] Fix footer closeout copy and add a professional copyright row.
[x] Correct hero image frame decoration so it does not collapse into the image corner.
[x] Fix active navbar state and the small-screen header control layout.
[x] Add the new PlantCare AI project card once asset and link details are provided.
[x] Tighten the theme-toggle and menu-button spacing on small screens after the first mobile header pass still felt too loose.
[x] Fix the project grid so cards revealed by `Show More` actually become visible.
[ ] Update `Talk.md` with the exact changes and next actions.

## Result

The active frontend was reworked to present the portfolio as a stronger product-facing site instead of a migration artifact.

The old `LinksSection` was removed and replaced with a more credible `ApproachSection`.

The content model now includes stronger focus areas, stack groupings, project highlights, process steps, and resume highlights.

The visual system was upgraded with improved typography hierarchy, a stronger color system, motion-based reveal behavior, mobile navigation, and a more polished footer.

The hero role animation was corrected after the first fade-only version still allowed layout reflow. The rotating text now lives in a fixed-height shell below the main heading so longer phrases cannot push the hero copy into the image area or make the page jump.

The footer now has a proper copyright row, the hero image frame uses a cleaner full inset treatment, and the navbar state logic was strengthened so section highlighting is more reliable.

The PlantCare AI project was added with the real GitHub URL, live URL, and the image asset provided in `frontend/public`.

The mobile header controls were regrouped so the theme toggle and menu button stay visually adjacent, and the projects section now forces newly added cards visible after `Show More` instead of leaving them hidden behind the one-time reveal observer.

The final mobile header spacing was then relaxed again to a slightly wider value so the two control buttons do not look cramped while still staying grouped as one control cluster.


The following unnecessary active-path files were removed:

- `scrollreveal.min.js`
- `frontend/public/qrcode.png`
- `legacy-static/`
- `frontend/.vite/`
