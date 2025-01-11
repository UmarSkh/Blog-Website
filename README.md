# **Blog Website**

## **1. Introduction**
**Evergreen Diary** is a blogging platform where users can read, write, and share insightful posts on a variety of topics. The website allows users to explore different articles ranging from lifestyle and technology to personal development. It's built using **Node.js**, **Express**, **MongoDB**, and **EJS**.

### **Access the Deployed App**
Click [here](https://blog-website-production-92e8.up.railway.app/) to access the live application.

---

## **2. Features**
- **Home Page**: Displays a list of blog posts with an introduction to the platform.
- **About Page**: Provides information about the website and its mission.
- **Contact Page**: Allows users to reach out with feedback or inquiries.
- **Compose Page**: Users can create and submit new blog posts.
- **Post Detail Page**: Displays the full content of a blog post when clicked.

---

## **3. Technology Stack**
The app is built using the following technologies:
- **Frontend**: EJS, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)

---

## **4. How to Use**

### **I. Access the App**
- For production: Use the deployed URL [here](https://blog-website-production-92e8.up.railway.app/).
- For development: Open `http://localhost:3000` in your browser.

### **II. Explore Blogs**
- Browse various blogs from the homepage.

### **IV. Write a Blog (Authorised Users)**
- To write your own blog, to /compose route button.
- Enter a title, and content.
- Click "Publish" to make your blog live.

---  

## **5. API Endpoints**

### **Public Endpoints**
| Method | Endpoint          | Description                       |
|--------|--------------------|-----------------------------------|
| `GET`  | `/`                | Render the home page.            |
| `GET`  | `/about`           | Render the about page.           |
| `GET`  | `/contact`        | Render the contact page.    |
| `GET`  | `/posts/:postId`        | Render specific post page.    |

### **Protected Endpoints**
| Method | Endpoint           | Description                              |
|--------|--------------------|------------------------------------------|
| `GET`  | `/compose`        | Render the compose page.    |
| `POST` | `/compose`          | Submit a new blog post.                    |

---

## **6. Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes and submit a pull request.

---

## **7. Contact**
For any queries or feedback, feel free to reach out:
- **Email**: `umar040903@gmail.com`
- **LinkedIn**: [Mohammad Umar Shaikh](https://www.linkedin.com/in/mohammad-umar-shaikh-b914a3227/)

---