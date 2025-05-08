# Material Dashboard with Blue Mountain Wicks

A modern Material Design dashboard built with React, TypeScript, and Vite. This project includes a complete admin panel for the Blue Mountain Wicks candle e-commerce business, originally scaffolded using [Anima](https://animaapp.com/).

📱 **Live Demo:** [View on Netlify](https://materialdashboard.netlify.app)

![Material Dashboard Screenshot](https://github.com/DrunkOnJava/MaterialMDashboardClean/blob/main/screenshot.png)

## Features

- Material Design UI components based on Shadcn UI
- Responsive dashboard with multiple screens
- Data visualization with Chart.js
- E-commerce management for Blue Mountain Wicks
- Product, inventory, and order management
- Customer analytics and reporting
- Website preview integration

## Getting started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

### Installation

To get started with your project, you'll first need to install the dependencies:

```
npm install
```

### Development

Run a development version of the project with:

```
npm run dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:5173/](http://localhost:5173/)

### Production Build

Build the project for release with:

```
npm run build
```

## Deploy Your Own

You can deploy this project to Netlify in one click:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DrunkOnJava/MaterialMDashboardClean)

## Manual Deployment to Netlify

For detailed deployment instructions, see [NETLIFY-DEPLOY.md](NETLIFY-DEPLOY.md).

### From GitHub (Recommended)

1. Fork this repository to your GitHub account
2. Sign up/login to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select GitHub and authorize Netlify
5. Choose your forked repository
6. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

### Using Netlify CLI

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Install Netlify CLI if you don't have it
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy your site
netlify init
netlify deploy --prod
```

## Project Structure

- `/src/components/ui/`: Reusable UI components based on Shadcn UI
- `/src/screens/`: Page components organized by feature
  - `/Dashboard/`: Main dashboard view with analytics
  - `/BlueMountainWicks/`: Blue Mountain Wicks e-commerce management
  - `/Buttons/`: Button variants showcase
  - `/Forms/`: Form components and examples
  - `/Components/`: UI component demos
  - `/Charts/`: Data visualization examples
- `/src/hooks/`: Custom React hooks
- `/src/lib/`: Utility functions

## Technology Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- Shadcn UI
- Chart.js/react-chartjs-2
- React Router
- React Hook Form
