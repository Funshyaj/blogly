# Blogly

#### Project summary 
This is my submission for the task. In the web application I consumed the given API and displayed it statically to the page routes with Next JS.
I used [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) function which is built into Nextjs to fetch the data from the Api before rendering and I used the [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths) built in function to generate paths for rendering each post page.


## How to run Locally

Clone the project

```bash
  git clone https://github.com/funshyaj/blogly
```

Go to the project directory

```bash
  cd blogly
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Note

You will need to be connected to the internet before running dev to avoid errors