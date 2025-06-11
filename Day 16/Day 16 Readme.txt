Day 16 Readme:

# ShadCN Modal Integration Assignment – LaunchDarkly

In this assignment, I integrated ShadCN components into a React + TypeScript project to build a user interface for a feature management dashboard. The main goal was to enhance user interaction by adding a modal dialog triggered by a button click. This implementation focused on using accessible, pre-styled components from ShadCN along with Tailwind CSS for layout and customization.

To start, I created a new Vite project using the TypeScript template. I initialized the project using `npm create vite@latest` with the `react-ts` option. After setting up the project structure, I installed all necessary dependencies, including ShadCN (`@shadcn/ui`) and Tailwind CSS along with its build tools (`tailwindcss`, `postcss`, and `autoprefixer`). Tailwind was configured by adding the necessary `@tailwind` directives to `index.css` and specifying the content paths in `tailwind.config.js`.

I then implemented the modal component using ShadCN’s `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`, and `DialogFooter` components. A button was used to toggle the modal open, and the state of the modal was managed using React’s `useState` hook. The modal includes a title, a message body, and two buttons—“Cancel” to close the modal, and “Confirm” to trigger an alert and then close it. I ensured that the modal also closed on clicking outside or pressing the escape key, handling all expected interactions gracefully.

For styling, I used Tailwind CSS utility classes to adjust the modal’s appearance. I changed the modal background to a darker shade using `bg-gray-800`, added padding for spacing, and used `rounded-lg` to create smooth rounded corners. I also applied spacing and text color enhancements to improve readability and aesthetics.

This assignment helped me gain hands-on experience with integrating ShadCN into a React project, using its components effectively to create responsive and interactive UI features. I also became more comfortable with Tailwind CSS styling and managing component states with React hooks. Overall, this exercise demonstrated how pre-built UI libraries like ShadCN can significantly speed up development while maintaining accessibility and design consistency.
