Day 17 Readme:


In this assignment, I built a simple React app to demonstrate how to navigate between multiple pages using React Router DOM. The app is designed like a basic feature management dashboard and includes three main pages: Home, About, and Dashboard. I used React Router DOM to make sure users can move between these pages smoothly without the page reloading.

To get started, I wrapped the app in the BrowserRouter component inside the main.jsx file. This allowed me to define different routes in the App.jsx file using the Routes and Route components. I also added navigation links using the Link component so users can click and move from one page to another easily.

A key part of this assignment was implementing dynamic routing. On the Dashboard page, I used the useParams hook to grab the id value from the URL. This made it possible to display different content depending on the ID in the route. For example, if someone visits /dashboard/123, the app shows a message like “Feature data for ID: 123”.

On the Home page, I created a list of links that each go to a different dashboard page using different IDs. This helped me show how navigation can work using dynamic values like user or feature IDs, which is very useful in real-world applications.

To run this assignment on my local machine, I first created a new Vite React app using the command:
npm create vite@latest react-router-demo --template react
Then I moved into the folder by running:
cd react-router-demo
Next, I installed the project dependencies using:
npm install
I also installed React Router DOM with:
npm install react-router-dom
Finally, I started the development server using:
npm run dev

This assignment helped me understand how to build a multi-page application using React. I learned how to set up routing, handle dynamic URLs, and organize navigation. It also improved my confidence in creating clean and simple layouts using basic CSS.