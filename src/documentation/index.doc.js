import { Router } from "express";
import swaggerUi from "swagger-ui-express";

const docrouter = Router();

const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    title: "Clebut APIs documentation",
    version: "1.0.0",
    description: "Clebut APIs documentation",
  },
  tags: [
    { name: "System Authontication", description: "System Authontication" },
    { name: "Users", description: "Users" },
    { name: "Companies", description: "Companies" },
    { name: "Service", description: "service" },
    { name: "Contact Messages", description: "Contact Messages" },
    { name: "faqs", description: "faqs" },
    { name: "project", description: "project" },
    { name: "social medias", description: "social medias" },
    { name: "testimonials", description: "testimonials" },
    { name: "partners", description: "partners" },
  ],
  paths: {
    "/api/v1/auth/login": {
      post: {
        tags: ["System Authontication"],
        summary: "Login a user",
        description: "Login a user",
        operationId: "loginUser",
        security: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              example: {
                email: "viateur@clebut.com",
                password: "1234",
              },
            },
            required: true,
          },
        },
        responses: {
          200: {
            description: "User logged in successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          500: {
            description: "Something went wrong",
          },
        },
      },
    },
    "/api/v1/users": {
      get: {
        tags: ["Users"],
        summary: "Get all users",
        responses: {
          200: {
            description: "List of users",
          },
        },
      },
      post: {
        tags: ["Users"],
        summary: "Create a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  firstname: { type: "string" },
                  lastname: { type: "string" },
                  email: { type: "string" },
                  password: { type: "string" },
                  phone: { type: "string" },
                  gender: { type: "string" },
                  role: { type: "string" },
                },
                required: ["firstname", "lastname", "email", "password", "role"],
              },
            },
          },
        },
        responses: {
          201: {
            description: "User created",
          },
        },
      },
    },
    "/api/v1/users/{id}": {
      get: {
        tags: ["Users"],
        summary: "Get a user by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "User details",
          },
        },
      },
      put: {
        tags: ["Users"],
        summary: "Update a user",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  firstname: { type: "string" },
                  lastname: { type: "string" },
                  phone: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "User updated",
          },
        },
      },
      delete: {
        tags: ["Users"],
        summary: "Delete a user",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "User deleted",
          },
        },
      },
    },
    "/api/v1/companies": {
      post: {
        tags: ["Companies"],
        summary: "Create company",
        responses: { 201: { description: "Company created" } },
      },
      get: {
        tags: ["Companies"],
        summary: "Get all companies",
        responses: { 200: { description: "Success" } },
      },
    },
    "/api/v1/companies/{id}": {
      get: {
        tags: ["Companies"],
        summary: "Get company by ID",
        parameters: [{ name: "id", in: "path", required: true }],
        responses: { 200: { description: "Success" } },
      },
      put: {
        tags: ["Companies"],
        summary: "Update company",
        parameters: [{ name: "id", in: "path", required: true }],
        responses: { 200: { description: "Updated" } },
      },
      delete: {
        tags: ["Companies"],
        summary: "Delete company",
        parameters: [{ name: "id", in: "path", required: true }],
        responses: { 200: { description: "Deleted" } },
      },
    },
    "/api/v1/contact-messages": {
  post: {
    tags: ["Contact Messages"],
    summary: "Create a contact message",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              companyId: { type: "integer" },
              name: { type: "string" },
              email: { type: "string" },
              subject: { type: "string" },
              message: { type: "string" }
            },
            required: ["companyId", "name", "email", "subject", "message"]
          },
          example: {
            companyId: 1,
            name: "John Doe",
            email: "john@example.com",
            subject: "Inquiry",
            message: "I'd like to know more about your services."
          }
        }
      }
    },
    responses: {
      201: {
        description: "Message created successfully"
      },
      500: {
        description: "Server error"
      }
    }
  },
  get: {
    tags: ["Contact Messages"],
    summary: "Get all contact messages",
    responses: {
      200: {
        description: "List of all messages"
      },
      500: {
        description: "Server error"
      }
    }
  }
},
"/api/v1/contact-messages/{id}": {
  get: {
    tags: ["Contact Messages"],
    summary: "Get a single contact message by ID",
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: { type: "integer" }
      }
    ],
    responses: {
      200: { description: "Message found" },
      404: { description: "Message not found" }
    }
  },
  put: {
    tags: ["Contact Messages"],
    summary: "Update a contact message",
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: { type: "integer" }
      }
    ],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: { type: "string" },
              email: { type: "string" },
              subject: { type: "string" },
              message: { type: "string" }
            }
          }
        }
      }
    },
    responses: {
      200: { description: "Message updated successfully" },
      404: { description: "Message not found" }
    }
  },
  delete: {
    tags: ["Contact Messages"],
    summary: "Delete a contact message",
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: { type: "integer" }
      }
    ],
    responses: {
      200: { description: "Message deleted successfully" },
      404: { description: "Message not found" }
    }
  }
}


  
  

  },
  
  components: {
    schemas: {
      User: {
        type: "object",
    properties: {
      companyId: {
        type: "integer",
        description: "ID of the company the user belongs to",
      },
      firstname: {
        type: "string",
        description: "User's firstname",
      },
      lastname: {
        type: "string",
        description: "User's lastname",
      },
      gender: {
        type: "string",
        description: "User's gender",
      },
      phone: {
        type: "string",
        description: "User's phone number",
      },
      role: {
        type: "string",
        enum: ["member", "system_admin", "company_admin"],
        description: "User's role",
      },
      email: {
        type: "string",
        description: "User's email",
      },
      password: {
        type: "string",
        description: "User's password",
      },
      code: {
        type: "string",
        description: "Verification or invitation code",
      },
      status: {
        type: "string",
        description: "Account status (e.g., active, inactive)",
      },
      image: {
        type: "string",
        description: "User's profile image",
        format: "binary",
      },
      title: {
        type: "string",
        description: "User's job title",
      },
      bio: {
        type: "string",
        description: "User's biography",
      }
        },
      },
   
  
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

docrouter.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default docrouter;
