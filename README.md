This Project was deployed in (https://sql-editor-mini.netlify.app/).

I have used React to build this project, I have not used any css library for building components.

## Features
1. User have a tab to write down multiple sql queries, provided a button to run query, user can see the results in a output container placed at bottom of editor.
2. User can also click on some predefined queries provided in seperate tab, and also given some available tables where user can query on the given tables.
3. When user click on run query I am calling a method which I created to process the given sql query and provide the actual result of the query.

## Optimisations and performace
1. The page load time is 0.60s(initial load), 0.20s-0.40s(on query rendering).
2. I have implemented Memoization to restrict the rendering of child components.
3. I have also implemented lazy loading of components.
4. If the query results more than 10 tables i will add a infinite-scroll to load tables only when they enter on viewport, instead of rendering all tables.

