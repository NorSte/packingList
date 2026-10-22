# Packing List

Exam coding challenge: a small React + Vite app that adds, checks off, and deletes packing list items.

## Task

Complete the packing list in `src/App.jsx` using the data in `src/data/data.js`:

- `initialList`: an object whose values are `{ id, text, done }` items used to fill the packing list.

#### Requirements

1. Render one `ItemComponent` per item in the list, using the item's text instead of hardcoded text.
2. On load, show Passport and Phone charger as checked, and Toothbrush as unchecked.
3. Make the add-item input controlled.
4. Submitting the form adds an item with the entered text, a unique id, and `done: false`.
5. Submitting with the Submit button or Enter must not reload the page.
6. Each checkbox reflects its item's `done` value.
7. Checking or unchecking an item updates that item's `done` value in the list state.
8. Clicking Delete removes only that item.
9. Adding, checking, or deleting an item must not change the other items.

### Hints

- Keep the packing list in state with `useState`.
- Use `Object.values(initialList)` to convert the initial object into an array.
- Keep the add-item input text in its own state, with `value` and `onChange`.
- Pass event handlers from `App` to the child components through props.
- Call `preventDefault()` when submitting the form.
- Use the existing `nextId` counter to give new items unique ids.
- Use `key={item.id}` when rendering items.
- Use `checked` and `onChange` for checkboxes. Read the new value from `e.target.checked`.
- Update state immutably: spread to add, `map` to update, and `filter` to delete.

Use [CHECKLIST.md](./CHECKLIST.md) to test the finished app.

## Getting started

```sh
npm install
npm run dev
```

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the dev server         |
| `npm run build`   | Production build             |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Lint with Oxlint             |

## Project structure

```text
src/
  App.jsx        Packing list, AddItem, PackingList and ItemComponent
  App.css        App styles
  data/data.js   Initial packing list
  index.css      Global styles
  main.jsx       Entry point
```

## Branches

- `main`: starter code for the exercise.
- `solution`: saved solution code.

## Stack

React 19, Vite, Oxlint.
