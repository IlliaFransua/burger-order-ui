# 🍔 buerge-order-ui

This project is a web interface for managing burger orders, wrote with **React (Vite).**

## 📁 Project Structure

This project uses **Feature-Sliced Design (FSD)**.

🔗 [**There is an article in Ukrainian about quick start into FSD**](https://telegra.ph/Feature-Sliced-Design-FSD-12-24)

🔗 [**List of websites people are building with FSD**](https://feature-sliced.design/examples)

🔗 [**FSD Docs**](https://feature-sliced.design/docs)

## 🎥 Video preview

🔗 [You can look at this project in demo video right here](https://youtu.be/QiBsSR0Igzg)

## 🛠️ Quick Start

### 1. Backend Application

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/IlliaFransua/burger-order-api
   cd ./burger-order-api
   ```

2. **Database Configuration:**

   Open the file `src/main/resources/application-dev.properties` and replace the placeholders with your PostgreSQL credentials (give it an empty database that you will have after `CREATE DATABASE burger_order_db_dev`).

   ```bash
   # Example: spring.datasource.url=jdbc:postgresql://localhost:5432/burger_order_db_dev
   spring.datasource.url=DB_URL
   spring.datasource.username=DB_USERNAME
   spring.datasource.password=DB_PASSWORD
   ```

   > Note: The application is configured to use the dev profile by default

3. **Run Tests:**

   ```bash
   mvn test
   ```

4. **Run the Application:**

   ```bash
   mvn spring-boot:run
   ```

### 2. Frontend Application

1. **Clone the Repository:**

   > Note: Burger Order UI it's a separate project. Don't clone it into Backend Application.

   ```bash
   git clone https://github.com/IlliaFransua/burger-order-ui
   cd ./burger-order-ui
   ```

2. **Build the Application:**

   ```bash
   npm run build
   ```

3. **Run the Application:**

   ```bash
   npm run preview -- --port 5173
   ```

4. **Open the link in your browser** 

   ```bash
   http://localhost:5173
   ```

5. **Congratulation 🎄⛄✨**

## 📦 Core Technologies

- **React 19** (Modern Functional Components)
- **Vite 7** (Next Generation Frontend Tooling)
- **React Router 7** (Client-side Routing)
- **Axios** (Promise-based HTTP Client)
- **Material UI (MUI) v7** (Component Library)
- **MUI X Data Grid** (Advanced Data Tables & Pagination)
