🛠️ Drag & Drop Landing Page Builder
====================================

This is a test assignment for Mailerlite, a VueJS Drag and Drop Landing Page Builder.

Build a simple drag & drop landing page builder using any of Vue.js, Angular, React. Extra points for using Vue.js. This project includes a **frontend** built with Vue.js and a **backend** using Laravel, leveraging Mailerlite's existing tech stack.

* * * * *

🎥 Video Demo
-------------

[Click here to watch the demo!](https://drive.google.com/file/d/1PWCxw7oSDbciZrmykDEw7kfnQy_tqHMC/view?usp=sharing)

* * * * *

🚀 Initial Requirements
------------------------------

### **Task Overview**

The goal of the project was to create a **drag & drop landing page builder** with the following requirements:

-   Create **two draggable blocks**:
    1.  Text Block (editable content).
    2.  Image Block (allows selecting from 3-4 predefined images).
-   **Rearrange, duplicate, and delete blocks**.
-   Export landing page data (e.g., text content, links to images, block order) to JSON format on clicking the **Save** button.
-   Style the application using **CSS** or a **CSS framework** (used: Tailwind CSS).
-   Ensure the application is **responsive**.
-   Implement **test cases** for functionality (optional but included as a bonus).

View the full requirements [here](https://docs.google.com/document/d/17hm1U0C__-QTJ1lXqs0SfI8r6_YoPdeRJsqHTI-22oM/edit?tab=t.0)

* * * * *

🧰 Prerequisites
----------------
This was intended to be a frontend assessment, backend functionality was added as a bonus using Laravel and PostgreSQL.
Ensure you have the following installed:

### **Frontend**

-   **Node.js** (LTS version recommended)
-   **npm**

### **Backend**

-   **PHP** (8.0 or later)
-   **Composer**
-   **PostgreSQL**

If you don't run the backend, the frontend should still run as specified in the requirements, allowing you to drag and drop elements to a canvas and parse element details to JSON on the console when saving. Error messages regarding API endpoints not found can be safely ignored. Functionality that breaks in this scenario includes: 
- listing saved pages on dashboard
- deleting saved pages on dashboard and
- saving JSON to database.

* * * * *

⚙️ Setup Instructions
----------------
1. Clone the Repository
   ```
   git clone https://github.com/your-username/landing-page-builder.git](https://github.com/fxsegura/drag-drop-vuejs.git
   cd drag-drop-vuejs
2. Frontend Setup
   1. Navigate to the frontend directory
      ```
      cd landing-page-builder
   2. Configure env file
      - An example is provided. Copy and paste it with the name .env and edit the API URL, ensuring you're using the correct port
        ```
        VITE_API_BASE_URL=http://127.0.0.1:8000/api
 
   3. Install dependencies
      ```
      npm install
   4. Start dev server
      ```
      npm run start
   5. Open in browser
3. Backend Setup
   1. Navigate to the frontend directory
      ```
      cd landing-page-backend
   2. Create a new database called landing-pages in PSQL. 
   3. Configure env file
      - An example is provided. Copy and paste it with the name .env and edit the database parameters, ensuring you're using the correct port username, password, etc.
        ```
        DB_CONNECTION=pgsql
        DB_HOST=127.0.0.1
        DB_PORT=5432
        DB_DATABASE=landing_pages
        DB_USERNAME=postgres
        DB_PASSWORD=postgres
    4. Install dependencies
        ```
        composer install
    5. Run Database migrations
        ```
        php artisan migrate
    6. Start the dev server
        ```
        php artisan serve

* * * * *

✨ Features / Explanation
------------------------
### **Frontend**
- **Basic Figma Design**
    -  To start, inspiration was taken from the Mailerlite site to implement something similar, easily recognizable to the user.
    -  You can find the link to the figma [HERE](https://www.figma.com/design/ywG9E3jZ4nvgLxx5kMMrbY/Untitled?node-id=2-38&t=WhU95VB4JTPXqj4l-1)
- Implemented with VueJS, Javascript, TailwindCSS, trying to emulate the company's tech stack.
- Root page is a dashboard, which includes a basic table that renders stored landing pages when connected to backend. Also adds option to delete or create new.
- The builder page is the core of the application and includes:  
  -   **Drag & Drop Functionality**:
      -   Drag text or image blocks from the toolbar to the canvas. Show a preview when placing elements
      -   Rearrange, duplicate, or delete blocks directly on the canvas.
  -   **Text Blocks**:
      -   Editable inline text content.
  -   **Image Blocks**:
      -   Select an image from predefined options using an intuitive overlay picker.
  -   **Save Button**:
      -   Parses the landing page as a JSON structure. Displays structure in console as well as saves to db if backend is set up. Includes id and content including text or img path. Elements are already ordered as displayed on canvas. 
  -   **Responsive Design**:
      -   Fully optimized for various screen sizes using **Tailwind CSS** as specified in the requirements.
  -   **Includes basic unit tests**

### **Backend**
Backend functionality was added as a bonus. It's implemented with Larvel as that is part of the Mailerlite tech stack and PSQL for a database becuause that had already been installed
-   **API Endpoints**:
    -   Save landing pages (`POST /api/landing-pages`).
    -   Fetch landing pages (`GET /api/landing-pages`).
    -   Fetch a specific landing page (`GET /api/landing-pages/{id}`).
    -   Delete landing pages (`DELETE /api/landing-pages/{id}`).
-   **PostgreSQL Integration**:
    -   Persist landing page data (name, content) in a database. Includes timestamp. 

* * * * *
