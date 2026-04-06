import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zorvyn Finance API",
      version: "1.0.0",

      description: `
        Finance Dashboard Backend API with RBAC

        This API provides secure endpoints for managing financial records and analytics with role-based access control (RBAC).

        🔑 Test Credentials:

          Admin:
          email: admin@test.com  
          password: admin123  

          Analyst:
          email: analyst@test.com  
          password: analyst123  

          Viewer:
          email: viewer@test.com  
          password: viewer123 

        🔐 Authentication Guide (Read Before Testing):
        1. Use the /api/auth/register or /api/auth/login endpoint to authenticate with your credentials.
        2. Copy the JWT token returned in the response.
        3. Click the "Authorize" button at the top right of this page.
        4. Enter your token in the format:  <your_token>   and do not include extra quotes when pasting
        5. Once authorized, you can access all protected endpoints such as /api/records and /api/dashboard.

        ⚠️ Note:
        - Authentication is required for all protected routes.
        - Ensure the token is valid and not expired.
        - Do not include extra quotes or extra symbols when pasting the token.
       `,
    },
    servers: [
      {
        url: "https://finance-dashboard-api-7bkv.onrender.com",
      },
    ],

    tags: [
      { name: "Auth", description: "Authentication APIs" },
      { name: "Records", description: "Financial Records APIs" },
      { name: "Dashboard", description: "Analytics APIs" },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJSDoc(options);
