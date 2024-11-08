# React User Select Component

This project is a custom, efficient, and user-friendly **Select component** built with React, designed to handle large datasets with **infinite scroll** and **virtualized rendering**. The component loads user data from an API in batches of 50 and provides smooth navigation through both mouse and keyboard.

## Features

- **Lazy Loading with Infinite Scroll**: Automatically loads 50 users at a time as you scroll, using a simulated API.
- **Virtualized List**: Renders only visible items to enhance performance, even with large datasets (up to 5000 users).
- **Keyboard Navigation**: Navigate through the list using arrow keys, with automatic scrolling to keep highlighted items in view.
- **Text Overflow Handling**: Long names are truncated with ellipsis (`...`) and display the full name on hover.
- **Accessible and Responsive**: Optimized for both desktop and mobile users.

## Setup and Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Bloodw1n/alanbase-test.git
    cd react-user-select
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the App**:
    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view the component in the browser.

## Usage

The `Select` component displays a dropdown with a list of users. You can:
- Click to open the dropdown.
- Scroll to load more users as you reach the bottom of the list.
- Navigate with the arrow keys, with the highlighted user auto-scrolling into view.
- Hover over truncated text to view the full user information.
