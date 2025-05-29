Day 11 Readme:

This assignment is about building a basic User Dashboard using React. The main goal was to learn how to use the useState hook to manage changes in the component. The dashboard allows a user to change their name, toggle their account status (active or inactive), and switch between light and dark themes. The theme setting is also saved using localStorage so it stays the same even after refreshing the page.

We used useState to handle three things: the user's name, the account status, and the theme. The name is saved as a string and updated when the user types in the input box. The account status is a true/false value (true means active), and it changes when the user clicks a button. The theme is set based on what was saved in localStorage, or defaults to 'light' if nothing was saved. When the theme changes, we save it back to localStorage and also change the website’s background using a CSS class.

User actions are handled easily with useState. When the user types in the name box, the name gets updated right away. Clicking the status button switches the account from active to inactive or the other way around. If the account is inactive, a message is shown. The theme button switches between light and dark modes, and the website updates its look instantly. A useEffect hook is used to update the theme in both localStorage and the website background.

One small challenge was keeping the theme saved and applied correctly after refreshing the page. We solved this by using a function when setting the theme with useState, which checks localStorage. Another small issue was in the CSS file, where styles were written in the wrong place. After fixing it, everything worked as expected.

In short, this assignment shows how useState and useEffect can be used to make a simple but interactive React component. It helped me understand how state changes work and how to update the UI based on what the user does.