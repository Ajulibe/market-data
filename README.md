---
![Logo](./public/logo.png)
---

# Market Data Dashboard

Welcome to the Market Data Dashboard! This project is designed to provide real-time and efficient access to various market data through a user-friendly interface. Below you'll find detailed documentation on the project's architecture, the technologies used, and how to get started.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Project Architecture](#project-architecture)
6. [API Endpoints](#api-endpoints)
7. [Key Decisions](#key-decisions)

## Introduction

The Market Data Dashboard is built to display real-time market data from Binance, including ticker information, 24-hour ticker statistics, and recent trades. The application leverages modern web technologies to ensure a smooth and responsive user experience, even with large datasets.

## Features

* **Real-time Data Fetching**: Uses React Query to fetch and update data seamlessly.
* **Suspense and Error Boundaries**: Provides smooth UI updates and error handling.
* **Optimized Table Rendering**: Uses React Table to efficiently handle and display large datasets.
* **Styled Components**: Ensures a clean and maintainable styling approach.

## Technologies Used

* **React/Nextjs**: For building the user interface.
* **React Query**: For data fetching.
* **React Table**: For rendering data tables efficiently.
* **Styled Components**: For styling the components.
* **Binance API**: For fetching market data.

## Setup Instructions

### Prerequisites

* Node.js (v14 or later)
* npm

### Installation

```js
  git clone https://github.com/Ajulibe/market-data.git   
  cd market-data
  npm install
  npm start
```



## Project Architecture

The project is structured as follows:
* **src/__tests__**: Contains unit tests.
* **src/components**: Contains reusable UI components.
* **src/layout**: Contains API root layout for the app and necessary providers.
* **src/lib**: Contains styled component setup
* **src/pages**: Contains page components.
* **src/services**: Contains API service functions.
* **src/shared**: Contains shared block/functions.
* **src/styles**: Contains styled-components for styling.
* **src/types**: Contains global types for the app.
* **src/utils**: Contains utility functions.


## API Endpoints

The application consumes the following Binance API endpoints:

1. **Ticker**: Provides the latest price for a symbol.
2. **24hr Ticker**: Provides 24-hour price change statistics.
3. **Recent Trades**: Provides a list of the most recent trades.

## Key Decisions

### React Query

* **Why**: React Query was chosen for its ability to manage server-state efficiently, provide out-of-the-box support for features like caching, background updates, and synchronization with the server.
* **Fetch on Window Focus**: Opted into this feature to ensure the data is always fresh when the user focuses back on the tab.
* **Suspense and Error Boundaries**: Used to handle loading states and errors gracefully without causing a "waterfall" effect, where each component waits for the previous one to load.

### React Table

* **Why**: React Table is highly optimized for performance and provides an easy-to-use API for features like sorting, pagination, and custom cell rendering. This makes it ideal for handling large datasets efficiently.

### Styled Components

* **Why**: Styled Components allow for scoped CSS, which helps avoid style conflicts and makes components more modular and maintainable.