# Checklist

Test the finished app as a user. The list must show items from state, not hardcoded text.

The expected values below use the items in `src/data/data.js`. Start the user test with a fresh page load.

## What to build

- [ ] Import `initialList` from `./data/data.js`.
- [ ] Add state for the packing list using `Object.values(initialList)`.
- [ ] Render one `ItemComponent` per item, with `key={item.id}`.
- [ ] Make the add-item input controlled with its own text state.
- [ ] On Submit, prevent the page reload and add an item with a unique id, the entered text, and `done: false`.
- [ ] Pass add, check, and delete handlers through props.
- [ ] Make each checkbox controlled by its item's `done` value.
- [ ] On checkbox change, update the item in list state with `map` using `e.target.checked`.
- [ ] On Delete, remove the item from list state with `filter`.
- [ ] Keep all list updates immutable.

## User test

- [ ] Open the app. Three items: Passport, Phone charger, Toothbrush.
- [ ] Passport and Phone charger are checked. Toothbrush is unchecked.
- [ ] Type `Socks` in the input and click Submit. A fourth item, `Socks`, appears unchecked.
- [ ] Replace the input text with `Jacket` and press Enter. `Jacket` appears unchecked without reloading the page.
- [ ] Check Toothbrush. It becomes checked, and the other checkboxes do not change.
- [ ] Uncheck Passport. It becomes unchecked, and the other checkboxes do not change.
- [ ] Click Delete beside Phone charger. Only Phone charger disappears.
- [ ] After these updates, Passport is still unchecked and Toothbrush is still checked.
- [ ] Add another `Socks`. Both Socks items appear as separate rows.
- [ ] Check one Socks item. The other Socks item stays unchecked.
- [ ] Delete the checked Socks item. The other Socks item remains unchecked.
- [ ] Delete every remaining item. The app shows an empty list and does not crash.
- [ ] Add `Water bottle` to the empty list. It appears unchecked and can be checked and deleted.
- [ ] The browser console shows no errors or key warnings.
