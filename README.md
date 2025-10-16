# React Native Product App

This is a small React Native (Expo) application that demonstrates a solid project structure and best practices for building a scalable mobile app. It includes a product list, product detail screen, and local state management for user favorites.

## Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd rn-product-app
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the app**:
    *   To run on iOS:
        ```bash
        npm run ios
        ```
    *   To run on Android:
        ```bash
        npm run android
        ```
    *   To run on the web:
        ```bash
        npm run web
        ```

## Features

*   **Product List Screen**: Displays a grid of products fetched from a mock API, with a clean, card-based design.
*   **Product Detail Screen**: Shows detailed information for a selected product, with a polished layout and an easy-to-use favorite button.
*   **Favorites Screen**: A dedicated tab that lists all products the user has marked as a favorite.
*   **Modern UI**: A visually appealing and professional user interface with a custom floating tab bar and consistent styling.
*   **Expo Router Navigation**: Seamless navigation between screens powered by Expo Router.
*   **Centralized Networking**: All API calls are managed through a pre-configured `AxiosProvider`.
*   **State Management**:
    *   **React Query**: For efficient server state management, including caching and automatic error handling.
    *   **Zustand**: For lightweight local state management of user favorites.
*   **Theming & Localization**: A consistent and maintainable codebase with theme tokens and a localization context for all text.

## Technical Decisions & Trade-offs

*   **Expo Router**: Chosen for its file-based routing, which simplifies navigation and keeps the codebase organized.
*   **AxiosProvider**: An `AxiosProvider` was implemented to ensure a single, consistent Axios instance is used throughout the app. This avoids ad-hoc calls and makes it easy to add interceptors for things like authentication in the future.
*   **React Query**: Selected for its powerful server state management capabilities. It handles caching, background refetching, and error handling out of the box, which significantly reduces boilerplate code. A global `onError` handler was configured to provide consistent error feedback via toasts.
*   **Zustand**: Chosen over React Context for local state management due to its simplicity and minimal boilerplate. It's a lightweight solution that is perfect for managing the user's favorite products.
*   **Styling Tokens**: Instead of hardcoding values, the app uses theme tokens for colors, spacing, and typography. This makes the UI consistent and easy to update.
*   **Localization**: All user-facing strings are managed through `i18next` to support multiple languages and avoid hardcoded text in the components.
*   **Mock API**: The app uses the [Fake Store API](https://fakestoreapi.com/) for product data. This allows for a realistic demonstration of data fetching and state management without needing a custom backend.
