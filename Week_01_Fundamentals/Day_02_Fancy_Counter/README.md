# Fancy Counter

## React Learning Journey - Day 2

Welcome to my React project! This is my second day learning React, and I'm documenting my progress here.

### What I Built

I created a simple counter app using React. The main features include:

- A display showing the current count.
- Buttons to increase and decrease the count.
- A reset button to set the count back to zero.
- The counter locks at 5 and cannot go higher.
- You can also increase the count by pressing the spacebar (up to the limit).

### What I Learned and Used

- **React Functional Components**: I split the UI into reusable components like `Card`, `Count`, `CountButton`, `ResetButton`, `ButtonContainer`, and `Title`.
- **useState Hook**: Used to manage the counter state.
- **useEffect Hook**: Used to add a keyboard event listener for the spacebar, and to clean up the listener when the component unmounts or updates.
- **Props**: Passed data and functions between components to control behavior and display.
- **Conditional Rendering & Styling**: The card changes style when the counter is locked at its maximum value.

### Next Steps

- Add more features (like a minimum limit or animations).
- Improve the UI/UX.
- Learn about more advanced React concepts.

---

This project is helping me understand the basics of React, component structure, and state management. I'm excited to keep learning and building!
