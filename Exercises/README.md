# React Exercises

## Setup

1. `cd Exercises/exercises-app`
2. `npm i`
3. `npm start`

---

## Exercise 1: Components, Props, and Layout

**Goal:** Learn how to create functional components, pass data via props, render dynamic content, and compose components using a layout pattern.

### Steps

1. **Create the Homepage component**
   - Open `src/components/Homepage/Homepage.jsx`
   - Create a functional component called `Homepage` that accepts `props` as a parameter
   - Export the component using a default export

2. **Create the Navbar component**
   - Create a new file `src/components/Navbar/Navbar.jsx`
   - Create a functional component called `Navbar`
   - Add placeholder content (e.g., site title or navigation links)
   - Export the component using a default export

3. **Create the Footer component**
   - Create a new file `src/components/Footer/Footer.jsx`
   - Create a functional component called `Footer`
   - Add placeholder content (e.g., copyright text)
   - Export the component using a default export

4. **Create the Layout component**
   - Open `src/components/Layout.jsx`
   - Create a functional component called `Layout` that accepts `children` as a prop
   - Import and render the `<Navbar />` at the top
   - Render `{children}` in the middle
   - Import and render the `<Footer />` at the bottom

5. **Import mock data**
   - Open `src/App.jsx`
   - Import the user data from `./mockUser.json`

6. **Compose the app**
   - In `App.jsx`, import the `Layout` and `Homepage` components
   - Wrap `<Homepage />` inside `<Layout>` as a child
   - Pass the imported user object as a prop to Homepage (e.g., `user={mockUser}`)

7. **Display a welcome message**
   - In `Homepage.jsx`, use the props to display a personalized greeting
   - Example output: "Greetings, John"

### Hints

- To import JSON: `import mockUser from './mockUser.json'`
- Access props in the component: `props.user.firstName`
- You can destructure props: `function Homepage({ user })`
- The `children` prop is a special React prop that contains nested elements

### Expected Result

When you run the app, you should see:

- A Navbar at the top
- A welcome message displaying the user's first name from the mock data
- A Footer at the bottom

---

## Exercise 2: State and Form Handling

**Goal:** Learn how to manage component state with `useState`, handle form inputs with `onChange`, and process form submissions with `onSubmit`.

### Steps

1. **Create the ContactForm component**
   - Create a new file `src/components/ContactForm/ContactForm.jsx`
   - Import `useState` from React
   - Create a functional component called `ContactForm`
   - Export the component using a default export

2. **Set up state for form fields**
   - Inside `ContactForm`, create state variables for:
     - `name` (string, initially empty)
     - `email` (string, initially empty)
     - `message` (string, initially empty)
   - Example: `const [name, setName] = useState('')`

3. **Build the form JSX**
   - Return a `<form>` element containing:
     - A text input for name with a label
     - An email input for email with a label
     - A textarea for message with a label
     - A submit button

4. **Connect inputs to state with onChange**
   - Add a `value` attribute to each input, bound to its corresponding state variable
   - Add an `onChange` handler to each input that updates the state

5. **Handle form submission**
   - Create a `handleSubmit` function that:
     - Accepts the event as a parameter
     - Calls `e.preventDefault()` to stop the page from refreshing
     - Logs the form data to the console: `{ name, email, message }`
     - Optionally clears the form by resetting all state values to empty strings
   - Attach this function to the form's `onSubmit` attribute

6. **Add the form to your app**
   - In `App.jsx`, import the `ContactForm` component
   - Render `<ContactForm />` inside the `<Layout>` component (below or instead of Homepage)

7. **Test your form**
   - Fill out all fields and click submit
   - Check the browser console to see the logged form data
   - Verify that the form clears after submission (if you implemented that)

### Hints

- Import useState: `import { useState } from 'react'`
- Controlled inputs require both `value` and `onChange`
- Always call `e.preventDefault()` in form submit handlers to prevent page reload
- You can create a single state object instead of separate variables:
  ```jsx
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  ```

### Expected Result

When you run the app, you should see:

- A form with name, email, and message fields
- Typing in any field updates the displayed value in real-time
- Clicking submit logs the form data to the console and optionally clears the form

---

## Exercise 3: Routing

**Goal:** Learn how to set up client-side routing with `react-router-dom`, create navigation links, and render different components based on the URL.

### Setup

First, install react-router-dom:

```bash
npm install react-router-dom
```

### Steps

1. **Set up the Router in App.jsx**
   - Open `src/App.jsx`
   - Import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`
   - Wrap your entire app in `<BrowserRouter>`
   - Inside the `<App>` component, use `<Routes>` to define your route configuration

2. **Create route definitions**
   - Add a `<Route>` for the homepage at path `"/"`
   - Add a `<Route>` for the contact form at path `"/contact"`
   - Each route should render its corresponding component using the `element` prop
   - Example: `<Route path="/" element={<Homepage user={mockUser} />} />`

3. **Update the Navbar with Link components**
   - Open `src/components/Navbar/Navbar.jsx`
   - Import `Link` from `react-router-dom`
   - Replace any `<a>` tags with `<Link>` components
   - Use the `to` prop instead of `href`
   - Example: `<Link to="/">Home</Link>`

4. **Add navigation links using Link**
   - Create a link to Home: `<Link to="/">Home</Link>`
   - Create a link to Contact: `<Link to="/contact">Contact</Link>`

5. **Test your routes**
   - Click the navigation links and verify the URL changes
   - Verify the correct component renders for each route
   - Try manually typing URLs in the browser address bar

6. **Create a button that navigates using Link**
   - In the `Homepage` component, add a button that links to the contact page
   - Wrap a `<button>` element inside a `<Link>` component
   - Alternatively, style the `Link` itself to look like a button using CSS

7. **Upgrade to NavLink for active styling in Navbar**
   - Replace `Link` with `NavLink` in your imports
   - Replace `<Link>` components with `<NavLink>` components
   - `NavLink` automatically adds an "active" class when the link matches the current URL
   - Add CSS to style the active state:

8. **Customize NavLink active behavior (optional)**
   - Use the `className` prop with a function to apply custom classes
   - Alternatively, use the `style` prop with a function for inline styles:

### Hints

- `BrowserRouter` must wrap everything that uses routing
- `Routes` is a container for all your `Route` definitions
- Each `Route` needs a `path` and an `element` prop
- Use `Link` instead of `<a>` tags to prevent full page reloads
- The `to` prop on both `Link` and `NavLink` works like `href` on anchor tags
- `NavLink` is like `Link` but adds automatic "active" class when the route matches
- `NavLink` accepts `className` and `style` as functions that receive `{ isActive }`

### Expected Result

When you run the app, you should see:

- A Navbar with clickable links for Home and Contact
- Clicking "Home" navigates to `/` and shows the Homepage component
- Clicking "Contact" navigates to `/contact` and shows the ContactForm component
- The URL in the browser updates without a full page reload
- The Navbar and Footer remain visible on all pages (they're in the Layout)
- If using `NavLink`, the current page's link should have the "active" class applied

---

## Exercise 4: Fetching Data from an API

**Goal:** Learn how to fetch data from an external API using `useEffect` and `useState`, display a list of items, and handle navigation to show individual item details.

### API Reference

We'll use the Star Wars API (SWAPI):

- **Base URL:** `https://swapi.info/api/people`
- This endpoint returns an array of Star Wars characters with properties like `name`, `height`, `mass`, `birth_year`, etc.

### Steps

1. **Create the CharacterList component**
   - Create a new file `src/components/CharacterList/CharacterList.jsx`
   - Import `useState` and `useEffect` from React
   - Create a functional component called `CharacterList`
   - Export the component using a default export

2. **Set up state for characters and loading**
   - Create state for `characters` (array, initially empty)
   - Create state for `loading` (boolean, initially `true`)
   - Create state for `error` (string or null, initially `null`)

3. **Fetch characters on component mount**
   - Use `useEffect` with an empty dependency array `[]` to fetch data once on mount
   - Inside the effect, create an async function to fetch from `https://swapi.info/api/people`
   - Parse the JSON response and update the `characters` state
   - Set `loading` to `false` when done
   - Handle errors by setting the `error` state

4. **Render the character list**
   - If `loading` is true, display a loading message
   - If `error` is set, display the error message
   - Otherwise, map over `characters` and display each character's name
   - Each character should be clickable (we'll add navigation in a later step)

5. **Create the CharacterDetail component**
   - Create a new file `src/components/CharacterDetail/CharacterDetail.jsx`
   - Import `useState`, `useEffect` from React
   - Import `useParams` and `Link` from `react-router-dom`
   - Create a functional component called `CharacterDetail`

6. **Fetch individual character data**
   - Use `useParams()` to get the character ID from the URL
   - Use `useEffect` to fetch character data from `https://swapi.info/api/people/{id}`
   - Store the character data in state and handle loading/error states

7. **Display character details**
   - Show the character's name as a heading
   - Display additional information:
     - Height
     - Mass
     - Hair color
     - Eye color
     - Birth year
     - Gender
   - Add a "Back to Characters" link using `<Link to="/characters">`

8. **Set up routes for characters**
   - In `App.jsx`, import the new components
   - Add a route for the character list: `<Route path="/characters" element={<CharacterList />} />`
   - Add a route for character details: `<Route path="/characters/:id" element={<CharacterDetail />} />`

9. **Make character names clickable**
   - In `CharacterList`, import `Link` from `react-router-dom`
   - Wrap each character name in a `<Link>` that navigates to `/characters/{id}`
   - Extract the ID from the character's `url` property (the last segment of the URL)

10. **Add Characters link to Navbar**
    - In `Navbar.jsx`, add a new `<NavLink>` to `/characters`

### Hints

- Fetch pattern with useEffect:

  ```jsx
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://swapi.info/api/people");
        const data = await response.json();
        setCharacters(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch characters");
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);
  ```

- Extract ID from SWAPI URL:

  ```jsx
  const getIdFromUrl = (url) => {
    const segments = url.split("/");
    return segments[segments.length - 1] || segments[segments.length - 2];
  };
  ```

- Using useParams:

  ```jsx
  const { id } = useParams();
  // Then fetch from: `https://swapi.info/api/people/${id}`
  ```

- Conditional rendering pattern:
  ```jsx
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <div>{/* your content */}</div>;
  ```

### Expected Result

When you run the app, you should see:

- A "Characters" link in the Navbar
- Clicking "Characters" shows a list of Star Wars character names
- A loading message appears while fetching data
- Clicking on a character name navigates to `/characters/{id}`
- The detail page shows full character information (name, height, mass, etc.)
- A "Back to Characters" link returns to the list
- Error handling displays a message if the API request fails

---

## Exercise 5: useContext

**Goal:** Learn how to share state across multiple components without prop drilling using React's Context API. You'll create a character context to store fetched data globally and a favorites system to track user selections across the app.

### Part A: Character Context (Store API Data Globally)

**Goal:** Move the character fetching logic into a context so multiple components can access the character data without re-fetching or prop drilling.

#### Steps

1. **Create the context folder and file**
   - Create a new folder `src/context`
   - Create a new file `src/context/CharacterContext.jsx`
   - Import `createContext`, `useState`, `useEffect`, and `useContext` from React

2. **Create and export the context**
   - Use `createContext()` to create a new context
   - Export it as a named export called `CharacterContext`

3. **Create the CharacterProvider component**
   - Create a functional component called `CharacterProvider` that accepts `children` as a prop
   - Inside, set up state for `characters` (array, initially empty)
   - Set up state for `loading` (boolean, initially `true`)
   - Set up state for `error` (string or null, initially `null`)

4. **Move the fetch logic into the provider**
   - Add a `useEffect` hook with an empty dependency array
   - Inside, fetch characters from `https://swapi.info/api/people`
   - Update the `characters` state with the fetched data
   - Set `loading` to `false` when done
   - Handle errors by setting the `error` state

5. **Return the Provider with values**
   - Return `<CharacterContext.Provider>` wrapping `{children}`
   - Pass an object to the `value` prop containing `characters`, `loading`, and `error`
   - Export the `CharacterProvider` component

6. **Create a custom hook for consuming the context**
   - In the same file, create a function called `useCharacters`
   - Inside, call `useContext(CharacterContext)` and store the result
   - Add a check: if the context is undefined, throw an error with a helpful message
   - Return the context value
   - Export the hook

7. **Wrap your app with the CharacterProvider**
   - Open `App.jsx`
   - Import `CharacterProvider` from the context file
   - Wrap your existing content (inside `BrowserRouter`) with `<CharacterProvider>`

8. **Refactor CharacterList to use context**
   - Open `CharacterList.jsx`
   - Remove all the local state variables (`characters`, `loading`, `error`)
   - Remove the `useEffect` that fetches data
   - Import and call the `useCharacters` hook
   - Destructure `characters`, `loading`, and `error` from the hook's return value
   - The rest of your JSX should work without changes

9. **Display character count in the Navbar**
   - Open `Navbar.jsx`
   - Import the `useCharacters` hook
   - Call the hook and destructure `characters`
   - Update the Characters link text to include the count (e.g., "Characters (82)")

### Part B: Favorites Context (User Interactions)

**Goal:** Create a favorites system that allows users to save their favorite characters, accessible from any component.

#### Steps

1. **Create the FavoritesContext file**
   - Create a new file `src/context/FavoritesContext.jsx`
   - Import `createContext`, `useState`, and `useContext` from React

2. **Create and export the context**
   - Use `createContext()` to create a new context
   - Export it as `FavoritesContext`

3. **Create the FavoritesProvider component**
   - Create a functional component called `FavoritesProvider` that accepts `children`
   - Set up state for `favorites` (array, initially empty)

4. **Create the addFavorite function**
   - Create a function that accepts a character object
   - Use the state setter to add the character to the favorites array
   - Use the spread operator to preserve existing favorites

5. **Create the removeFavorite function**
   - Create a function that accepts a character ID
   - Use the state setter with `filter` to remove the character with that ID

6. **Create the isFavorite function**
   - Create a function that accepts a character ID
   - Use the `some` array method to check if any favorite has that ID
   - Return `true` or `false`

7. **Create the toggleFavorite function**
   - Create a function that accepts a character object
   - Check if the character is already a favorite using `isFavorite`
   - If yes, call `removeFavorite`; if no, call `addFavorite`

8. **Return the Provider with all values**
   - Return `<FavoritesContext.Provider>` wrapping `{children}`
   - Pass an object to `value` containing: `favorites`, `addFavorite`, `removeFavorite`, `isFavorite`, and `toggleFavorite`
   - Export the component

9. **Create the useFavorites custom hook**
   - Create a function called `useFavorites`
   - Call `useContext(FavoritesContext)` and add error handling
   - Export the hook

10. **Add FavoritesProvider to your app**
    - Open `App.jsx`
    - Import `FavoritesProvider`
    - Nest it inside `CharacterProvider` (providers can be nested)

11. **Add favorite button to CharacterList**
    - Open `CharacterList.jsx`
    - Import the `useFavorites` hook
    - Destructure `toggleFavorite` and `isFavorite` from the hook
    - Inside your character map, add a button next to each character
    - Set the button's `onClick` to call `toggleFavorite` with the character's id and name
    - Use `isFavorite` to conditionally show different text (e.g., filled star vs empty star)

12. **Add favorite button to CharacterDetail**
    - Open `CharacterDetail.jsx`
    - Import and use the `useFavorites` hook
    - Add a favorite toggle button that works the same way as in the list

13. **Create a Favorites page component**
    - Create a new file `src/components/Favorites/Favorites.jsx`
    - Import `Link` from `react-router-dom`
    - Import the `useFavorites` hook
    - Create a functional component that displays all favorited characters
    - Map over the favorites array and show each character's name as a link to their detail page
    - Add a "Remove" button for each that calls `removeFavorite`
    - Handle the empty state with a message like "No favorites yet"

14. **Add the Favorites route**
    - Open `App.jsx`
    - Import the `Favorites` component
    - Add a new Route with path `/favorites` that renders the Favorites component

15. **Add Favorites link to Navbar**
    - Open `Navbar.jsx`
    - Import the `useFavorites` hook
    - Destructure `favorites` from the hook
    - Add a new NavLink to `/favorites`
    - Display the favorites count in the link text (e.g., "Favorites (3)")

### Part C: Theme Context (Bonus Challenge)

**Goal:** Implement a dark/light theme toggle using context.

#### Steps

1. **Create the ThemeContext file**
   - Create a new file `src/context/ThemeContext.jsx`
   - Import `createContext`, `useState`, and `useContext` from React

2. **Create the ThemeProvider component**
   - Create the context with `createContext()`
   - Create a `ThemeProvider` component with `children` prop
   - Set up state for `theme` (string, initially `'light'`)

3. **Create the toggleTheme function**
   - Create a function that toggles the theme value
   - If current theme is `'light'`, set it to `'dark'`
   - If current theme is `'dark'`, set it to `'light'`

4. **Set up the Provider and custom hook**
   - Return the Provider with `theme` and `toggleTheme` in the value
   - Create and export a `useTheme` custom hook

5. **Add ThemeProvider to your app**
   - In `App.jsx`, import and wrap your app with `ThemeProvider`
   - You can nest it with the other providers

6. **Apply theme class to Layout**
   - Open `Layout.jsx`
   - Import and use the `useTheme` hook
   - Add a class to the root element based on the current theme
   - Use a ternary: if theme is `'dark'`, use `'dark-theme'`, otherwise `'light-theme'`

7. **Add theme CSS variables**
   - Open your main CSS file (e.g., `App.css` or `index.css`)
   - Define CSS variables for `.light-theme` (light background, dark text)
   - Define CSS variables for `.dark-theme` (dark background, light text)
   - Apply these variables to your body or main container styles

8. **Add a theme toggle button**
   - In `Navbar.jsx`, import the `useTheme` hook
   - Destructure `theme` and `toggleTheme`
   - Add a button that calls `toggleTheme` when clicked
   - Display text or an icon indicating the current theme

### Hints

- Creating context: `const MyContext = createContext()`
- Provider syntax: `<MyContext.Provider value={{ data, functions }}>{children}</MyContext.Provider>`
- Consuming context: `const value = useContext(MyContext)`
- Custom hooks should start with "use" and can add error handling for when context is missing
- You can nest multiple providers - each provides different data to its children
- The `value` prop accepts any JavaScript value (object, array, function, etc.)
- Use the spread operator to add items: `setItems(prev => [...prev, newItem])`
- Use `filter` to remove items: `setItems(prev => prev.filter(item => item.id !== idToRemove))`
- Use `some` to check existence: `items.some(item => item.id === targetId)`

### Expected Result

When you run the app, you should see:

**Part A:**

- Character data is fetched once when the app loads
- The Navbar shows the character count (e.g., "Characters (82)")
- CharacterList displays characters without its own fetch logic
- No duplicate API calls when navigating between pages

**Part B:**

- Each character in the list has a favorite button
- Clicking the button toggles between filled and empty star
- Character detail page also has a working favorite button
- Navigating to `/favorites` shows all saved favorites
- The Navbar shows the favorites count
- Favorites persist when navigating between pages (but reset on page refresh)

**Part C (Bonus):**

- A theme toggle button appears in the Navbar
- Clicking it switches the entire app between light and dark themes
- The theme applies consistently across all pages

---

## Exercise 6: useRef and Refs as Props

**Goal:** Learn how to use `useRef` for accessing DOM elements directly, storing mutable values that persist across renders, and passing refs to child components as props (React 19+ approach).

### Part A: Focus Management with useRef

**Goal:** Use `useRef` to manage focus on form inputs, implementing auto-focus and programmatic focus control.

#### Steps

1. **Enhance the ContactForm with auto-focus**
   - Open `src/components/ContactForm/ContactForm.jsx`
   - Import `useRef` and `useEffect` from React
   - Create a ref for the name input using `useRef(null)`

2. **Attach the ref to the input**
   - Add the `ref` attribute to the name input field
   - Set it to your created ref variable

3. **Implement auto-focus on mount**
   - Use `useEffect` with an empty dependency array
   - Inside the effect, call `yourRef.current.focus()` to focus the input when the component mounts
   - Add a check to ensure `yourRef.current` exists before calling focus

4. **Add a "Clear & Refocus" button**
   - Add a button that clears all form fields and refocuses on the name input
   - Create a handler function that:
     - Resets all state values to empty strings
     - Calls `yourRef.current.focus()` to return focus to the name input

5. **Add focus cycling for invalid fields**
   - Create refs for the email and message inputs as well
   - Modify the form submission to validate fields
   - If a field is empty, focus on that field instead of submitting
   - Show a validation message near the focused field

### Part B: Stopwatch with useRef (Storing Mutable Values)

**Goal:** Create a stopwatch component that uses `useRef` to store the interval ID, demonstrating how refs can hold values that persist across renders without causing re-renders.

#### Steps

1. **Create the Stopwatch component**
   - Create a new file `src/components/Stopwatch/Stopwatch.jsx`
   - Import `useState` and `useRef` from React
   - Create a functional component called `Stopwatch`
   - Export the component using a default export

2. **Set up state for time display**
   - Create state for `time` (number, initially `0`) - this represents milliseconds
   - Create state for `isRunning` (boolean, initially `false`)

3. **Create a ref to store the interval ID**
   - Use `useRef(null)` to create a ref called `intervalRef`
   - This will hold the interval ID without causing re-renders when updated

4. **Implement the start function**
   - Create a `start` function that:
     - Sets `isRunning` to `true`
     - Uses `setInterval` to increment `time` every 10 milliseconds
     - Stores the interval ID in `intervalRef.current`
     - Only starts if not already running (check `intervalRef.current`)

5. **Implement the stop function**
   - Create a `stop` function that:
     - Sets `isRunning` to `false`
     - Calls `clearInterval(intervalRef.current)` to stop the timer
     - Sets `intervalRef.current` to `null`

6. **Implement the reset function**
   - Create a `reset` function that:
     - Calls `stop()` to clear any running interval
     - Sets `time` back to `0`

7. **Format the time for display**
   - Create a helper function to format milliseconds into `MM:SS.ms` format
   - Calculate minutes, seconds, and centiseconds from the total milliseconds

8. **Build the UI**
   - Display the formatted time in a large font
   - Add Start, Stop, and Reset buttons
   - Disable Start when running, disable Stop when not running

9. **Clean up the interval on unmount**
   - Add a `useEffect` that returns a cleanup function
   - The cleanup function should call `clearInterval(intervalRef.current)` if it exists
   - This prevents memory leaks when the component unmounts

10. **Add the Stopwatch to your app**
    - In `App.jsx`, import the `Stopwatch` component
    - Add a new route for the stopwatch: `<Route path="/stopwatch" element={<Stopwatch />} />`
    - Add a link to the Navbar

### Part C: Custom Input Component with Ref as Prop

**Goal:** Create a reusable custom input component that can receive refs from parent components, enabling focus management from outside the component. In React 19+, refs are passed as regular props instead of using `forwardRef`.

#### Steps

1. **Create the CustomInput component**
   - Create a new file `src/components/CustomInput/CustomInput.jsx`
   - Create a regular functional component (no special imports needed for refs)

2. **Define the component with ref as a prop**
   - Destructure props including `ref`: `{ label, error, ref, ...rest }`
   - In React 19+, `ref` is just a regular prop like any other
   - No wrapper function or special syntax needed

3. **Build the input UI**
   - Return a wrapper div containing:
     - A label element
     - An input element that receives the `ref` and `{...rest}` props
     - A conditional error message when `error` prop is provided
   - Add appropriate styling classes

4. **Create a SearchForm component to test the ref prop**
   - Create a new file `src/components/SearchForm/SearchForm.jsx`
   - Import `useRef` and `useEffect` from React
   - Import the `CustomInput` component

5. **Use the custom input with a ref**
   - Create a ref using `useRef(null)`
   - Pass the ref to `CustomInput` using the `ref` prop
   - Use `useEffect` to auto-focus the input on mount

6. **Add search functionality**
   - Create state for the search query
   - Create state for search results (can be mock data)
   - Add a submit handler that searches and clears the input
   - Add a button that focuses the search input when clicked

7. **Add the SearchForm to your app**
   - In `App.jsx`, import the `SearchForm` component
   - Add a new route: `<Route path="/search" element={<SearchForm />} />`
   - Add a link to the Navbar

### Part D: Modal with Focus Trap (Advanced Challenge)

**Goal:** Create a modal component that traps focus inside it for accessibility, using refs to manage focus when opening and closing.

#### Steps

1. **Create the Modal component**
   - Create a new file `src/components/Modal/Modal.jsx`
   - Import `useRef` and `useEffect` from React
   - The Modal should accept `isOpen`, `onClose`, `title`, and `children` props

2. **Create refs for focus management**
   - Create a ref for the modal container
   - Create a ref to store the previously focused element (before modal opened)

3. **Save focus position when modal opens**
   - In a `useEffect` that runs when `isOpen` changes:
     - When opening, save `document.activeElement` to your "previous focus" ref
     - Focus the modal container or first focusable element inside

4. **Restore focus when modal closes**
   - In the same `useEffect`, return a cleanup function
   - When the modal closes, restore focus to the previously focused element

5. **Implement focus trapping**
   - Get all focusable elements inside the modal (buttons, inputs, links)
   - Add a keydown event listener for the Tab key
   - If Shift+Tab on first element, move focus to last element
   - If Tab on last element, move focus to first element

6. **Handle Escape key**
   - Add a keydown event listener for the Escape key
   - Call `onClose` when Escape is pressed

7. **Build the modal UI**
   - Render nothing if `isOpen` is false
   - Return a backdrop div with click-to-close functionality
   - Inside, render a modal container with:
     - A header with title and close button
     - A content area rendering `children`
     - A footer with action buttons

8. **Create a page to demonstrate the modal**
   - Create `src/components/ModalDemo/ModalDemo.jsx`
   - Add state to control modal visibility
   - Add buttons to open different modals
   - Show how focus returns to the trigger button when modal closes

9. **Add the ModalDemo to your app**
   - Add a new route for `/modal-demo`
   - Add a link to the Navbar

### Hints

- **useRef basics:**

  ```jsx
  const inputRef = useRef(null);
  // Access the DOM element: inputRef.current
  // Focus an input: inputRef.current.focus()
  ```

- **Ref as prop (React 19+):**

  ```jsx
  function CustomInput({ ref, ...props }) {
    return <input ref={ref} {...props} />;
  }
  ```

- **Legacy forwardRef syntax (React 18 and earlier):**

  ```jsx
  const CustomInput = forwardRef((props, ref) => {
    return <input ref={ref} {...props} />;
  });
  CustomInput.displayName = "CustomInput";
  ```

- **Storing interval IDs in refs:**

  ```jsx
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  ```

- **Cleanup on unmount:**

  ```jsx
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  ```

- **Getting focusable elements in a modal:**

  ```jsx
  const focusableElements = modalRef.current.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  ```

- **Saving and restoring focus:**

  ```jsx
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement;
      // Focus first element in modal
    }
    return () => {
      previouslyFocusedRef.current?.focus();
    };
  }, [isOpen]);
  ```

- **Time formatting helper:**
  ```jsx
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
  };
  ```

### Expected Result

When you run the app, you should see:

**Part A:**

- The name input is automatically focused when ContactForm loads
- A "Clear & Refocus" button clears the form and returns focus to the name input
- Validation focuses on the first empty required field

**Part B:**

- A working stopwatch with Start, Stop, and Reset buttons
- Time displays in `MM:SS.ms` format
- The timer keeps running while navigating away (but stops if unmounted)
- No memory leaks from orphaned intervals

**Part C:**

- A CustomInput component that accepts refs from parent components
- The SearchForm auto-focuses the search input on mount
- A "Focus Search" button programmatically focuses the input
- The custom input properly passes through all standard input props

**Part D (Advanced):**

- A modal that focuses its content when opened
- Tab key cycles only through focusable elements inside the modal
- Pressing Escape closes the modal
- When the modal closes, focus returns to the button that opened it

---

## Exercise 7: Custom Hooks

**Goal:** Learn how to extract reusable stateful logic into custom hooks, enabling code reuse across components and cleaner separation of concerns.

### Part A: useFetch - Extracting Data Fetching Logic

**Goal:** Create a reusable hook for fetching data with loading and error states.

#### Steps

1. **Create the hooks folder and file**
   - Create a new folder `src/hooks`
   - Create a new file `src/hooks/useFetch.js`
   - Import `useState` and `useEffect` from React

2. **Define the useFetch hook**
   - Create a function called `useFetch` that accepts a `url` parameter
   - Export the function as the default export

3. **Set up state inside the hook**
   - Create state for `data` (initially `null`)
   - Create state for `loading` (initially `true`)
   - Create state for `error` (initially `null`)

4. **Implement the fetch logic**
   - Use `useEffect` with `url` in the dependency array
   - Inside the effect, create an async function to fetch data
   - Update `data` with the parsed JSON response
   - Set `loading` to `false` when done
   - Catch errors and set the `error` state

5. **Add a refetch function**
   - Create a `refetch` function that resets loading state and fetches again
   - Use `useCallback` to memoize the function if desired

6. **Return the hook values**
   - Return an object containing `{ data, loading, error, refetch }`

7. **Create a PlanetList component to test the hook**
   - Create a new file `src/components/PlanetList/PlanetList.jsx`
   - Import and use `useFetch` with `https://swapi.info/api/planets`
   - Display loading, error, or planet names based on the hook's return values

8. **Refactor CharacterContext to use useFetch**
   - Open `src/context/CharacterContext.jsx`
   - Import `useFetch` from your hooks folder
   - Replace the local state and useEffect with a call to `useFetch`
   - Pass the returned `data` as `characters` in the context value

9. **Add routes and navigation**
   - Add a route for `/planets` in `App.jsx`
   - Add a "Planets" link to the Navbar

### Part B: useLocalStorage - Persistent State

**Goal:** Create a hook that syncs state with localStorage, allowing data to persist across page refreshes.

#### Steps

1. **Create the useLocalStorage hook file**
   - Create a new file `src/hooks/useLocalStorage.js`
   - Import `useState` and `useEffect` from React

2. **Define the hook signature**
   - Create a function called `useLocalStorage` that accepts `key` and `initialValue` parameters
   - Export the function

3. **Initialize state from localStorage**
   - Use `useState` with an initializer function (lazy initialization)
   - Inside the initializer, try to get the value from `localStorage.getItem(key)`
   - If a value exists, parse it with `JSON.parse` and return it
   - If no value exists or parsing fails, return `initialValue`
   - Wrap in try/catch to handle JSON parse errors

4. **Sync state changes to localStorage**
   - Use `useEffect` with `key` and `value` in the dependency array
   - Inside the effect, call `localStorage.setItem(key, JSON.stringify(value))`
   - Wrap in try/catch to handle storage quota errors

5. **Return the state and setter**
   - Return `[value, setValue]` like the standard `useState` hook
   - This maintains API compatibility with `useState`

6. **Refactor FavoritesContext to use useLocalStorage**
   - Open `src/context/FavoritesContext.jsx`
   - Import `useLocalStorage` from your hooks folder
   - Replace `useState([])` with `useLocalStorage('favorites', [])`
   - The rest of the context logic remains the same

7. **Test persistence**
   - Add some characters to favorites
   - Refresh the page
   - Verify favorites are still displayed

### Part C: useStopwatch - Extracting Component Logic

**Goal:** Extract the stopwatch timer logic into a reusable hook, separating logic from presentation.

#### Steps

1. **Create the useStopwatch hook file**
   - Create a new file `src/hooks/useStopwatch.js`
   - Import `useState`, `useRef`, and `useEffect` from React

2. **Move state and refs into the hook**
   - Create state for `time` (number, initially `0`)
   - Create state for `isRunning` (boolean, initially `false`)
   - Create a ref `intervalRef` using `useRef(null)`

3. **Implement the start function**
   - Create a `start` function inside the hook
   - Check if already running (return early if `intervalRef.current` exists)
   - Set `isRunning` to `true`
   - Use `setInterval` to increment `time` every 10ms
   - Store the interval ID in `intervalRef.current`

4. **Implement the stop function**
   - Create a `stop` function
   - Check if not running (return early if no `intervalRef.current`)
   - Set `isRunning` to `false`
   - Call `clearInterval(intervalRef.current)`
   - Set `intervalRef.current` to `null`

5. **Implement the reset function**
   - Create a `reset` function
   - Call `stop()` first
   - Set `time` back to `0`

6. **Add the formatTime helper**
   - Create a `formatTime` function that converts milliseconds to `MM:SS.ms` format
   - Calculate minutes, seconds, and centiseconds

7. **Add cleanup on unmount**
   - Use `useEffect` to return a cleanup function
   - Clear the interval if it exists when the component unmounts

8. **Return the hook values**
   - Return `{ time, isRunning, start, stop, reset, formattedTime: formatTime(time) }`

9. **Refactor Stopwatch component**
   - Open `src/components/Stopwatch/Stopwatch.jsx`
   - Import `useStopwatch` from your hooks folder
   - Remove all local state, refs, and functions
   - Call `useStopwatch()` and destructure the returned values
   - The component now only handles rendering

10. **Create a CountdownTimer component (optional)**
    - Create a new file `src/components/CountdownTimer/CountdownTimer.jsx`
    - Create a similar `useCountdown` hook that counts down from a starting value
    - Demonstrate how the pattern can be adapted for different use cases

### Part D: useForm - Form State Management

**Goal:** Create a generic form handling hook that reduces boilerplate for form state management.

#### Steps

1. **Create the useForm hook file**
   - Create a new file `src/hooks/useForm.js`
   - Import `useState` from React

2. **Define the hook signature**
   - Create a function called `useForm` that accepts:
     - `initialValues` (object with field names as keys)
     - `validate` (optional function that returns an errors object)
   - Export the function

3. **Set up state for values and errors**
   - Create state for `values` initialized with `initialValues`
   - Create state for `errors` initialized as an empty object
   - Create state for `touched` to track which fields have been interacted with

4. **Create the handleChange function**
   - Create a function that accepts an event
   - Extract `name` and `value` from `event.target`
   - Update `values` state with the new value for that field
   - Use computed property syntax: `{ ...values, [name]: value }`

5. **Create the handleBlur function**
   - Create a function that accepts an event
   - Extract `name` from `event.target`
   - Mark the field as touched in the `touched` state
   - Optionally run validation for that field

6. **Create the handleSubmit function**
   - Create a function that accepts a callback and returns an event handler
   - The returned handler should:
     - Call `e.preventDefault()`
     - Run validation if a `validate` function was provided
     - If there are errors, set them in state and return
     - If no errors, call the callback with `values`

7. **Create the reset function**
   - Create a function that resets `values` to `initialValues`
   - Clear `errors` and `touched` states

8. **Create the setFieldValue function**
   - Create a function that accepts a field name and value
   - Update just that field in `values`
   - Useful for programmatic updates

9. **Return the hook values**
   - Return `{ values, errors, touched, handleChange, handleBlur, handleSubmit, reset, setFieldValue }`

10. **Refactor ContactForm to use useForm**
    - Open `src/components/ContactForm/ContactForm.jsx`
    - Import `useForm` from your hooks folder
    - Replace individual `useState` calls with a single `useForm` call
    - Create a validation function that checks required fields
    - Update the JSX to use `handleChange` and `values.fieldName`

11. **Create a LoginForm component**
    - Create a new file `src/components/LoginForm/LoginForm.jsx`
    - Use `useForm` with fields for `email` and `password`
    - Add validation for required fields and email format
    - Add a route and Navbar link

### Part E: useDebounce (Bonus Challenge)

**Goal:** Create a hook that debounces a value, useful for optimizing search inputs and reducing API calls.

#### Steps

1. **Create the useDebounce hook file**
   - Create a new file `src/hooks/useDebounce.js`
   - Import `useState` and `useEffect` from React

2. **Define the hook signature**
   - Create a function called `useDebounce` that accepts:
     - `value` (the value to debounce)
     - `delay` (milliseconds to wait, default 500)
   - Export the function

3. **Set up debounced state**
   - Create state for `debouncedValue` initialized with `value`

4. **Implement the debounce effect**
   - Use `useEffect` with `value` and `delay` in the dependency array
   - Inside the effect, use `setTimeout` to update `debouncedValue` after the delay
   - Return a cleanup function that calls `clearTimeout`

5. **Return the debounced value**
   - Return `debouncedValue`

6. **Create a live search feature**
   - Open `src/components/SearchForm/SearchForm.jsx` or create a new component
   - Import `useDebounce` and `useCharacters` from their respective files
   - Create state for the search query
   - Pass the search query to `useDebounce` with a 300ms delay
   - Use `useEffect` to filter characters when the debounced value changes
   - Display filtered results as the user types

7. **Test the debounce**
   - Type quickly in the search input
   - Observe that filtering only happens after you stop typing
   - Check the console to verify reduced function calls

### Hints

- Custom hooks must start with "use" (e.g., `useFetch`, `useLocalStorage`)
- Custom hooks can use other hooks (including other custom hooks)
- Custom hooks share stateful logic, not state itself - each component using a hook gets its own state
- Return values can be arrays (like `useState`) or objects (like multiple values)

- **useFetch pattern:**

  ```jsx
  function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(url);
          if (!response.ok) throw new Error("Fetch failed");
          const json = await response.json();
          setData(json);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [url]);

    return { data, loading, error };
  }
  ```

- **useLocalStorage pattern:**

  ```jsx
  function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch {
        return initialValue;
      }
    });

    useEffect(() => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.error("Failed to save to localStorage:", err);
      }
    }, [key, value]);

    return [value, setValue];
  }
  ```

- **useDebounce pattern:**

  ```jsx
  function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
  }
  ```

- **useForm pattern:**

  ```jsx
  function useForm(initialValues, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (callback) => (e) => {
      e.preventDefault();
      const validationErrors = validate ? validate(values) : {};
      if (Object.keys(validationErrors).length === 0) {
        callback(values);
      } else {
        setErrors(validationErrors);
      }
    };

    const reset = () => {
      setValues(initialValues);
      setErrors({});
    };

    return { values, errors, handleChange, handleSubmit, reset };
  }
  ```

### Expected Result

When you run the app, you should see:

**Part A:**

- A reusable `useFetch` hook that works with any URL
- A PlanetList component fetching and displaying planets
- CharacterContext simplified by using `useFetch` internally
- No duplicate fetching logic across components

**Part B:**

- Favorites persist across page refreshes
- Opening the app in a new tab shows previously saved favorites
- The `useLocalStorage` hook works like `useState` but syncs with browser storage

**Part C:**

- Stopwatch component is now purely presentational
- All timer logic is encapsulated in `useStopwatch`
- The hook could be reused for other timing features
- Proper cleanup prevents memory leaks

**Part D:**

- ContactForm uses a single `useForm` hook instead of multiple `useState` calls
- Form validation is centralized in a validate function
- The same hook powers multiple forms (ContactForm, LoginForm)
- Consistent form handling patterns across the app

**Part E (Bonus):**

- Live search filters characters as you type
- Search only triggers after you stop typing (debounced)
- No excessive re-renders or function calls during rapid typing
- Better performance and user experience

---

## Exercise 8: Performance Optimization

**Goal:** Learn how to optimize React applications using `React.memo`, `useCallback`, and `useMemo` to prevent unnecessary re-renders and expensive recalculations.

### Concepts Overview

Before diving into the exercises, understand what causes re-renders in React:

1. **State changes** - When a component's state updates, it re-renders
2. **Prop changes** - When a component receives new props, it re-renders
3. **Parent re-renders** - When a parent component re-renders, all its children re-render by default
4. **Context changes** - When context value changes, all consuming components re-render

The performance tools we'll learn:

- **`React.memo`** - Prevents a component from re-rendering if its props haven't changed
- **`useCallback`** - Memoizes functions so they maintain the same reference between renders
- **`useMemo`** - Memoizes computed values so expensive calculations aren't repeated unnecessarily

### Part A: Understanding Re-renders with React.memo

**Goal:** Learn how `React.memo` prevents unnecessary re-renders of child components.

#### Steps

1. **Create a PerformanceDemo component**
   - Create a new file `src/components/PerformanceDemo/PerformanceDemo.jsx`
   - Import `useState` from React
   - Create a functional component called `PerformanceDemo`
   - Export the component using a default export

2. **Set up parent state**
   - Create state for `count` (number, initially `0`)
   - Create state for `text` (string, initially empty)
   - Add a button to increment `count`
   - Add an input field to update `text`

3. **Create a ChildComponent without memo**
   - In the same file or a separate file, create a `ChildComponent` that accepts a `name` prop
   - Add a `console.log` inside the component: `console.log('ChildComponent rendered:', name)`
   - Render the `ChildComponent` inside `PerformanceDemo` with a static name prop

4. **Observe unnecessary re-renders**
   - Open the browser console
   - Type in the text input or click the increment button
   - Notice that `ChildComponent` re-renders even though its `name` prop never changes

5. **Wrap ChildComponent with React.memo**
   - Import `memo` from React
   - Wrap the component: `const ChildComponent = memo(function ChildComponent({ name }) { ... })`
   - Alternatively: `export default memo(ChildComponent)`

6. **Verify memo prevents re-renders**
   - Test again - type in the input and increment the counter
   - The child component should no longer log re-renders
   - Only changes to the `name` prop will cause it to re-render

7. **Add the route and navigation**
   - In `App.jsx`, import the `PerformanceDemo` component
   - Add a route for `/performance`
   - Add a link to the Navbar

### Part B: useCallback - Memoizing Functions

**Goal:** Learn how `useCallback` preserves function references to work effectively with `React.memo`.

#### Steps

1. **Expose the memo limitation with functions**
   - In `PerformanceDemo`, create a function `handleClick` that logs "Button clicked"
   - Pass this function as a prop to `ChildComponent`: `<ChildComponent name="Alice" onClick={handleClick} />`
   - Update `ChildComponent` to accept and use the `onClick` prop
   - Keep `React.memo` on the child component

2. **Observe memo failing with function props**
   - Type in the text input or increment the counter
   - Notice that `ChildComponent` re-renders again despite using `memo`
   - This happens because `handleClick` is recreated on every render (new reference)

3. **Add console.log to demonstrate the issue**
   - Add a `useEffect` in `ChildComponent` that logs when `onClick` changes:
     ```jsx
     useEffect(() => {
       console.log('onClick reference changed');
     }, [onClick]);
     ```
   - You'll see this logs on every parent re-render

4. **Wrap the function with useCallback**
   - Import `useCallback` from React
   - Wrap `handleClick` with `useCallback`:
     ```jsx
     const handleClick = useCallback(() => {
       console.log('Button clicked');
     }, []);
     ```
   - The empty dependency array means this function is created once and never changes

5. **Verify the fix**
   - Test again - the child component should no longer re-render when typing or incrementing
   - The `useEffect` logging should only run once on mount

6. **Practice with dependencies**
   - Create a new function `handleClickWithCount` that logs the current count
   - Wrap it with `useCallback` and include `count` in the dependency array:
     ```jsx
     const handleClickWithCount = useCallback(() => {
       console.log('Count is:', count);
     }, [count]);
     ```
   - Pass this to a second child component
   - Observe that this child only re-renders when `count` changes, not when `text` changes

7. **Create a practical example: Filtered List**
   - Create state for `items` (array of objects with `id` and `name`)
   - Create state for `filter` (string)
   - Create a `handleRemove` function that removes an item by id
   - Wrap `handleRemove` with `useCallback`
   - Create a memoized `ListItem` component that receives `item` and `onRemove` props
   - Verify that removing one item doesn't cause all other items to re-render

### Part C: useMemo - Memoizing Computed Values

**Goal:** Learn how `useMemo` prevents expensive recalculations on every render.

#### Steps

1. **Create an expensive computation scenario**
   - In `PerformanceDemo`, create an array of 10,000 numbers
   - Create a function that filters this array based on a search term and calculates statistics
   - This simulates an expensive computation

2. **Implement without useMemo first**
   - Create state for `searchTerm` (string)
   - Create a computed value that filters and processes the large array:
     ```jsx
     const filteredData = numbers
       .filter(n => n.toString().includes(searchTerm))
       .map(n => ({ value: n, squared: n * n }));
     
     const sum = filteredData.reduce((acc, item) => acc + item.value, 0);
     ```
   - Add a console.log with `console.time`/`console.timeEnd` to measure computation time

3. **Observe the performance issue**
   - Add an unrelated piece of state (like a counter)
   - Click the counter button and watch the console
   - Notice the expensive computation runs on every render, even when `searchTerm` hasn't changed

4. **Wrap with useMemo**
   - Import `useMemo` from React
   - Wrap the expensive computation:
     ```jsx
     const { filteredData, sum } = useMemo(() => {
       console.time('Expensive calculation');
       const filtered = numbers
         .filter(n => n.toString().includes(searchTerm))
         .map(n => ({ value: n, squared: n * n }));
       const total = filtered.reduce((acc, item) => acc + item.value, 0);
       console.timeEnd('Expensive calculation');
       return { filteredData: filtered, sum: total };
     }, [searchTerm, numbers]);
     ```

5. **Verify the optimization**
   - Click the counter button
   - The expensive calculation should NOT run (no console.time output)
   - Change the search term
   - The calculation should run only when `searchTerm` changes

6. **Create a derived state example**
   - Using the character data from context, create a component that:
     - Sorts characters alphabetically
     - Groups them by first letter
     - Calculates statistics (count per letter, tallest character, etc.)
   - Wrap these computations with `useMemo`

7. **Memoize complex objects passed as props**
   - Create an options object that's passed to a child component:
     ```jsx
     const chartOptions = useMemo(() => ({
       color: theme === 'dark' ? '#fff' : '#000',
       showGrid: true,
       data: processedData
     }), [theme, processedData]);
     ```
   - This prevents the child from re-rendering due to new object references

### Part D: Combining All Three - Building an Optimized Component

**Goal:** Apply `memo`, `useCallback`, and `useMemo` together in a realistic scenario.

#### Steps

1. **Create a CharacterSearch component**
   - Create a new file `src/components/CharacterSearch/CharacterSearch.jsx`
   - Import `useState`, `useMemo`, `useCallback`, and `memo` from React
   - Import the `useCharacters` hook from context

2. **Set up the component state**
   - Create state for `searchTerm` (string)
   - Create state for `sortBy` (string: 'name', 'height', 'mass')
   - Create state for `sortOrder` (string: 'asc', 'desc')
   - Create state for `selectedIds` (Set or array of selected character IDs)

3. **Create memoized filtered and sorted data**
   - Use `useMemo` to filter characters by search term
   - Use another `useMemo` (or combine) to sort the filtered results
   - Add console.log to verify computations only run when dependencies change:
     ```jsx
     const filteredCharacters = useMemo(() => {
       console.log('Filtering characters...');
       return characters.filter(char =>
         char.name.toLowerCase().includes(searchTerm.toLowerCase())
       );
     }, [characters, searchTerm]);

     const sortedCharacters = useMemo(() => {
       console.log('Sorting characters...');
       return [...filteredCharacters].sort((a, b) => {
         // sorting logic based on sortBy and sortOrder
       });
     }, [filteredCharacters, sortBy, sortOrder]);
     ```

4. **Create memoized event handlers**
   - Use `useCallback` for the search input handler
   - Use `useCallback` for sort change handlers
   - Use `useCallback` for the selection toggle handler:
     ```jsx
     const handleToggleSelect = useCallback((id) => {
       setSelectedIds(prev => {
         const newSet = new Set(prev);
         if (newSet.has(id)) {
           newSet.delete(id);
         } else {
           newSet.add(id);
         }
         return newSet;
       });
     }, []);
     ```

5. **Create a memoized CharacterCard component**
   - Create a `CharacterCard` component in a separate file
   - Wrap it with `memo`
   - Accept props: `character`, `isSelected`, `onToggleSelect`
   - Add console.log to track renders

6. **Create memoized statistics**
   - Use `useMemo` to calculate statistics from selected characters:
     ```jsx
     const selectionStats = useMemo(() => {
       const selected = characters.filter(c => selectedIds.has(c.id));
       return {
         count: selected.length,
         avgHeight: selected.reduce((acc, c) => acc + Number(c.height) || 0, 0) / selected.length || 0,
         avgMass: selected.reduce((acc, c) => acc + Number(c.mass) || 0, 0) / selected.length || 0
       };
     }, [characters, selectedIds]);
     ```

7. **Build the UI**
   - Render a search input bound to `searchTerm`
   - Render sort controls (select dropdowns for `sortBy` and `sortOrder`)
   - Map over `sortedCharacters` and render `CharacterCard` for each
   - Display selection statistics

8. **Add the route**
   - Add a route for `/character-search` in `App.jsx`
   - Add a link to the Navbar

9. **Test and verify optimizations**
   - Open React DevTools Profiler (install React Developer Tools extension)
   - Record interactions and verify:
     - Typing in search only triggers filter/sort recalculations
     - Changing sort only triggers sort recalculation
     - Selecting a character only re-renders that specific card
     - Other cards don't re-render when one is selected

### Part E: When NOT to Optimize (Important!)

**Goal:** Understand when performance optimizations are unnecessary or even harmful.

#### Guidelines

1. **Don't optimize prematurely**
   - Only optimize when you've identified an actual performance problem
   - Use React DevTools Profiler to measure before and after
   - Simple components re-rendering is usually not a problem

2. **Costs of optimization**
   - `useMemo` and `useCallback` have memory overhead (storing cached values)
   - They add complexity to your code
   - Incorrect dependency arrays cause subtle bugs

3. **When memo is unnecessary**
   - Components that always receive different props
   - Components that are very cheap to render
   - Components with few children

4. **When useCallback is unnecessary**
   - Functions not passed to memoized children
   - Functions not used in dependency arrays of other hooks
   - Event handlers for non-memoized elements

5. **When useMemo is unnecessary**
   - Simple calculations (basic math, string concatenation)
   - Values that change on every render anyway
   - Creating new arrays/objects that are immediately destructured

6. **Create comparison examples**
   - In `PerformanceDemo`, create two versions of the same feature:
     - One with all optimizations
     - One without optimizations
   - Add a toggle to switch between them
   - Use React DevTools to compare actual performance
   - Document when the optimization made a meaningful difference

### Hints

- **React.memo syntax:**

  ```jsx
  // Named function with memo
  const MyComponent = memo(function MyComponent({ prop1, prop2 }) {
    return <div>{prop1}</div>;
  });

  // Or with arrow function
  const MyComponent = memo(({ prop1, prop2 }) => {
    return <div>{prop1}</div>;
  });

  // With custom comparison function
  const MyComponent = memo(
    function MyComponent({ data }) {
      return <div>{data.name}</div>;
    },
    (prevProps, nextProps) => {
      // Return true if props are equal (skip re-render)
      return prevProps.data.id === nextProps.data.id;
    }
  );
  ```

- **useCallback syntax:**

  ```jsx
  // Basic usage
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  // With dependencies
  const handleClick = useCallback(() => {
    console.log('Count:', count);
    setCount(count + 1);
  }, [count]);

  // Using functional updates to avoid dependencies
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1); // No need for count in deps
  }, []);
  ```

- **useMemo syntax:**

  ```jsx
  // Basic usage
  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]);

  // Memoizing an object
  const config = useMemo(() => ({
    theme: darkMode ? 'dark' : 'light',
    fontSize: 14,
  }), [darkMode]);

  // Memoizing a filtered array
  const filteredItems = useMemo(() => {
    return items.filter(item => item.active);
  }, [items]);
  ```

- **Debugging re-renders:**

  ```jsx
  // Add this to any component to track renders
  const renderCount = useRef(0);
  renderCount.current += 1;
  console.log(`Component rendered ${renderCount.current} times`);

  // Or use useEffect to track prop changes
  useEffect(() => {
    console.log('Prop changed:', someProp);
  }, [someProp]);
  ```

- **Using React DevTools Profiler:**
  1. Install React Developer Tools browser extension
  2. Open DevTools and go to "Profiler" tab
  3. Click "Record" and interact with your app
  4. Stop recording and analyze the flame graph
  5. Look for components that re-render unnecessarily

- **Referential equality matters:**

  ```jsx
  // These are NOT equal (new object each render)
  const options = { color: 'blue' };
  
  // But with useMemo, they ARE equal across renders
  const options = useMemo(() => ({ color: 'blue' }), []);
  ```

### Expected Result

When you run the app, you should see:

**Part A:**

- A demo showing how `React.memo` prevents child re-renders
- Console logs proving the child only renders when its props change
- Understanding of the difference between memoized and non-memoized components

**Part B:**

- Functions wrapped in `useCallback` maintain stable references
- Memoized child components don't re-render when callbacks are stable
- Understanding of dependency arrays and when functions need to update

**Part C:**

- Expensive computations only run when their dependencies change
- Console timing shows dramatic performance improvements
- Derived state calculations are properly memoized

**Part D:**

- A fully optimized character search with filtering, sorting, and selection
- Only affected components re-render on user interactions
- React DevTools Profiler shows efficient rendering patterns

**Part E:**

- Understanding of when optimizations are worthwhile
- Ability to measure and compare performance
- Knowledge of the trade-offs involved in premature optimization

### Common Mistakes to Avoid

1. **Forgetting dependency arrays**
   ```jsx
   // BAD - runs on every render
   const value = useMemo(() => expensive());
   
   // GOOD - only runs when deps change
   const value = useMemo(() => expensive(x), [x]);
   ```

2. **Incorrect dependencies**
   ```jsx
   // BAD - stale closure
   const handleClick = useCallback(() => {
     console.log(count); // Always logs initial count
   }, []);
   
   // GOOD - fresh value
   const handleClick = useCallback(() => {
     console.log(count);
   }, [count]);
   ```

3. **Memoizing without memo on children**
   ```jsx
   // useCallback is pointless if child isn't memoized
   const handleClick = useCallback(() => {}, []);
   return <Child onClick={handleClick} />; // Child still re-renders!
   
   // Both are needed together
   const MemoChild = memo(Child);
   const handleClick = useCallback(() => {}, []);
   return <MemoChild onClick={handleClick} />; // Now it works!
   ```

4. **Over-memoizing simple values**
   ```jsx
   // UNNECESSARY - simple calculation
   const doubled = useMemo(() => count * 2, [count]);
   
   // JUST DO THIS
   const doubled = count * 2;
   ```