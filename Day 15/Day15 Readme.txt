Day15 Readme:

# Tailwind CSS React Assignment – LaunchDarkly

In this assignment, I created a responsive web page using Tailwind CSS within a React application. The objective was to demonstrate the use of Tailwind’s utility-first classes for styling components such as headers, navigation bars, main content, buttons, and footers. The layout adapts to different screen sizes using responsive design techniques provided by Tailwind.

To begin, I set up the assignment using Vite by running the command `npm create vite@latest react-tailwind-demo --template react`. After initializing the assignment, I installed the required dependencies for Tailwind CSS, which include `tailwindcss`, `postcss`, and `autoprefixer` and changed the version of Tailwind to ver 3. I then initialized Tailwind using `npx tailwindcss init -p`, which generated the necessary configuration files.

I configured Tailwind by updating the `tailwind.config.js` file to include the paths to all JSX and HTML files so that unused styles could be purged. I also imported Tailwind’s base, components, and utilities directives into the `index.css` file to enable Tailwind’s styles throughout the app.

For the styling, I designed a header section that includes a logo and a navigation bar. On smaller screens, the navigation links stack vertically under the logo, while on larger screens, they appear horizontally beside it. The logo and navigation were given distinct background colors using Tailwind’s color utility classes. The main content section includes a heading, a paragraph, and a styled button that changes color on hover. Finally, I added a simple footer with centered text.

Throughout the assignment, I used Tailwind’s utility classes such as `flex`, `p-4`, `bg-gray-800`, `text-white`, `rounded-md`, `hover:bg-blue-600`, and responsive variants like `sm:flex-row` to handle layout, spacing, colors, and interactivity efficiently. This assignment helped me get hands-on experience with Tailwind CSS and understand how it can speed up front-end development by using utility classes instead of custom CSS.
