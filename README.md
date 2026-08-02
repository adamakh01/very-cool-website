# Hi, I'm Adam 👋

This is the source for my personal portfolio site — a place to show off what I'm building, what I'm learning, and a bit about who I am outside of code.

I'm a Computer Science major, currently a junior at Cal State Fullerton (CSUF), an aspiring Software Engineer, and a Math Supplemental Instruction Leader on campus.

- 🔗 [LinkedIn](https://www.linkedin.com/in/adam-ho-a65786202)
- 💻 [GitHub](https://github.com/adamakh01)
- 📸 [Instagram](https://www.instagram.com/farmerakh/)

## What I used to build this

This site is built with [SvelteKit](https://svelte.dev/docs/kit) and deployed on [Vercel](https://vercel.com/).

- **Framework:** SvelteKit 2 + Svelte 5
- **Build tool:** Vite 7
- **Deployment:** Vercel (`@sveltejs/adapter-vercel`)
- **Effects:** [Typed.js](https://github.com/mattboldt/typed.js/) for the typing animation on the landing page
- **CI/CD:** GitHub Actions for build checks, and Dependabot with auto-merge to keep dependencies patched and secure

The site includes a home page, an about page, a projects page, and a legacy `v1` version of the site kept around for posterity.

## My tech stack

VS Code, Android Studio, Java, Python, C++, HTML, CSS, JavaScript, Svelte, Dart, and Firebase.

## Some things I've built

| Project | Stack | About |
| --- | --- | --- |
| Math Tic-Tac-Toe | React, CSS, HTML, Firebase, Figma | A Kahoot!-style, real-time math review game for SI sessions — an SI leader builds a Tic-Tac-Toe board of math problems and hosts a live session while students join from their own devices to race and claim squares. |
| Stay Consistent | Dart, Flutter, Figma, Firebase, iOS, Android | An app for creating and tracking one or more goals, with daily reminders to keep you consistent. |
| [OSS-Stats](https://github.com/acmcsufoss/oss-stats) | Python, CLI, GitHub API | A CLI tool that pulls stats — commits, issues, PRs, stars — from the acmcsufoss GitHub org and its repos. |
| HappyChild for Autism | Python, TKinter, Justinmind | A senior project presented at Liberty High School (Hillsboro, OR) combining ideas from Proloquo2Go, Birdhouse for Autism, and Social Story Creator into one unified communication and learning app. |
| [Grade Calculator](https://github.com/FarmerAKH/Grade-Calculator) | HTML, CSS, JavaScript | An AP CS Principles performance task where users add assignments and weights to calculate a final grade, with full edit/delete support. |

More detail on each of these lives on the projects page of the live site.

## Running this locally

```bash
npm install
npm run dev
```

Build for production with:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
