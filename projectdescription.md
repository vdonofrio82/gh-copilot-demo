# Project Description

## Overview

This repository serves as a comprehensive demonstration environment for **GitHub Copilot** capabilities. It showcases how GitHub Copilot can assist developers in building, maintaining, and enhancing modern full-stack applications through AI-powered code suggestions and completions.

The project is based on the [Azure Container Apps: Dapr Albums Sample](https://github.com/Azure-Samples/containerapps-dapralbums) and has been adapted specifically to demonstrate various GitHub Copilot features across different programming languages, frameworks, and development scenarios.

## Purpose

The primary purpose of this repository is to:

- **Demonstrate GitHub Copilot capabilities** across multiple programming languages and frameworks
- **Provide hands-on learning scenarios** for developers exploring GitHub Copilot
- **Showcase real-world development patterns** including API development, frontend applications, testing, and deployment
- **Serve as a training resource** for developers learning to leverage AI-assisted coding

For a comprehensive tutorial on GitHub Copilot, visit [The Ultimate GitHub Copilot Tutorial on MOAW](https://aka.ms/github-copilot-hol).

## Architecture

The solution follows a modern microservices architecture with two primary services:

1. **Albums API** - Backend service for managing album data
2. **Album Viewer** - Frontend application for displaying and interacting with albums

These services communicate via RESTful HTTP endpoints and can be deployed as containerized applications to cloud platforms like Azure Container Apps.

## Technologies & Stack

### Backend (Albums API)
- **.NET 8** - Modern C# minimal Web API
- **ASP.NET Core** - Web framework with built-in dependency injection
- **Swagger/OpenAPI** - API documentation and testing interface
- **In-memory data storage** - Simple data persistence for demonstration purposes

### Frontend (Album Viewer)
- **Vue.js 3** - Progressive JavaScript framework using Composition API
- **TypeScript** - Static type checking and enhanced developer experience
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API communication
- **CSS3** - Modern styling with Grid, Flexbox, and animations

### Infrastructure & DevOps
- **Docker** - Containerization for both services
- **GitHub Actions** - CI/CD pipeline for automated builds and deployments
- **Azure Bicep** - Infrastructure as Code for Azure deployments
- **Terraform** - Alternative IaC solution for multi-cloud deployments
- **GitHub Container Registry (GHCR)** - Container image storage

### Development Environment
- **GitHub Codespaces** - Cloud-based development environment
- **Dev Containers** - Consistent local development experience
- **Visual Studio Code** - Recommended IDE with integrated debugging
- **Multiple debugging configurations** - Individual and compound launch configurations

### Legacy System Integration
- **COBOL** - Legacy albums management code demonstrating modernization scenarios

## Repository Structure

```
gh-copilot-demo/
├── albums-api/              # .NET 8 Web API backend
│   ├── Controllers/         # API endpoint controllers
│   ├── Models/              # Data models and entities
│   ├── Program.cs           # Application entry point
│   └── albums-api.csproj    # .NET project configuration
│
├── album-viewer/            # Vue.js 3 + TypeScript frontend
│   ├── src/
│   │   ├── components/      # Vue components
│   │   ├── types/           # TypeScript type definitions
│   │   ├── App.vue          # Main application component
│   │   └── main.ts          # Application entry point
│   ├── vite.config.ts       # Vite configuration
│   └── tsconfig.json        # TypeScript configuration
│
├── iac/                     # Infrastructure as Code
│   ├── bicep/               # Azure Bicep templates
│   └── terraform/           # Terraform configurations
│
├── legacy/                  # Legacy system code
│   └── albums.cbl           # COBOL albums management
│
├── .github/
│   ├── workflows/           # CI/CD pipeline definitions
│   ├── prompts/             # GitHub Copilot demo prompts
│   └── copilot-instructions.md
│
├── .devcontainer/           # Dev container configuration
├── .vscode/                 # VS Code settings and launch configs
└── assets/                  # Documentation assets
```

## Key Features

### Albums API Features
- RESTful API endpoints for album management (CRUD operations)
- Swagger UI for interactive API documentation
- CORS support for cross-origin requests
- Minimal API design pattern
- In-memory album collection with sample data
- Environment-based configuration

### Album Viewer Features
- Modern, responsive grid layout for album display
- Album cards with cover images and hover effects
- Price display and album metadata
- Add to cart and preview functionality
- Mobile-friendly responsive design
- Loading states and error handling
- TypeScript type safety throughout
- Vue 3 Composition API with `<script setup>` syntax

### Development Features
- Integrated debugging in VS Code
- Hot reload for both frontend and backend
- Compound launch configurations to run all services simultaneously
- Individual service debugging support
- TypeScript type checking and IntelliSense
- Comprehensive build and test scripts

## GitHub Copilot Demo Scenarios

The repository includes several prompt files demonstrating GitHub Copilot capabilities:

1. **API Creation** - Building a Node.js API from scratch with sample data and tests
2. **Feature Addition** - Adding cart management functionality to the application
3. **Testing** - Generating Playwright tests for end-to-end scenarios
4. **Security Review** - Securing REST APIs with authentication and validation

These scenarios are located in `.github/prompts/` and serve as templates for exploring GitHub Copilot's capabilities.

## Getting Started

### Prerequisites
- .NET 8 SDK
- Node.js (version 16 or higher)
- Visual Studio Code (recommended)
- Docker (optional, for containerized deployment)

### Quick Start

#### Option 1: VS Code Debug Panel (Recommended)
1. Open the repository in Visual Studio Code
2. Open the Debug panel (Ctrl+Shift+D / Cmd+Shift+D)
3. Select "All services" from the dropdown
4. Press F5 to start both services

#### Option 2: Command Line
```bash
# Terminal 1 - Start the Albums API
cd albums-api
dotnet restore
dotnet run

# Terminal 2 - Start the Album Viewer
cd album-viewer
npm install
npm run dev
```

#### Option 3: GitHub Codespaces
Open this repository in GitHub Codespaces for an instant, fully-configured development environment.

### Service Endpoints
- **Albums API**: http://localhost:3000
- **API Documentation**: http://localhost:3000/swagger
- **Album Viewer**: http://localhost:3001

## CI/CD Pipeline

The repository includes a comprehensive GitHub Actions workflow that:

1. **Builds both services** (Albums API and Album Viewer)
2. **Creates Docker images** with proper tags and labels
3. **Pushes images** to GitHub Container Registry
4. **Deploys to Azure** using Bicep templates (when configured)

The pipeline is triggered on:
- Push to main branch
- Semantic version tags (v*.*.*)
- Manual workflow dispatch

## Contributing

This repository serves as a demonstration platform for GitHub Copilot. Contributions that enhance the learning experience or add new demonstration scenarios are welcome.

## License

Please refer to the repository's LICENSE file for licensing information.

## Additional Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [The Ultimate GitHub Copilot Tutorial on MOAW](https://aka.ms/github-copilot-hol)
- [Azure Container Apps Documentation](https://docs.microsoft.com/en-us/azure/container-apps/)
- [Vue.js 3 Documentation](https://vuejs.org/)
- [.NET 8 Documentation](https://docs.microsoft.com/en-us/dotnet/)

## Architecture Diagram

An architecture diagram is available in the `assets/` directory that visualizes the solution's structure and component interactions.
