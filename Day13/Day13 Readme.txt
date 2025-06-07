Day13 Readme

This React assignment demonstrates how to optimize component performance and manage global state using useContext, useMemo, and useCallback. The application includes a dashboard that allows users to toggle between light and dark themes, search through a list of users efficiently, and avoid unnecessary re-renders in child components.

To manage the theme across the application, i used the useContext hook. A global ThemeContext was created using createContext, and the state for the theme (light or dark) was handled using useState. This context was provided to all components using a ThemeProvider. Inside the UserList component, i accessed the context using a custom useTheme hook, which allows us to toggle the theme using a button. This approach ensures that the theme is consistent across all parts of the application without prop drilling.

The user list filtering functionality is optimized using the useMemo hook. Instead of recalculating the filtered list on every render, we use useMemo to recalculate it only when the user list or the search term changes. This significantly improves performance, especially when working with large datasets, by preventing unnecessary computations on every keystroke or render.

I also used the useCallback hook to memoize the event handler responsible for updating the search input. The handleSearchChange function is wrapped in useCallback so that it is not recreated on every render. This helps in optimizing child components that depend on this handler, ensuring they don’t re-render unless necessary.

Overall, this assignment demonstrates efficient state management and performance optimization in a React application using modern React hooks.

