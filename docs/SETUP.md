# 🚀 IdeaVault Development Setup

This guide will help you set up the IdeaVault development environment on your local machine.

## Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **MongoDB** (for database)
- **Redis** (for caching)
- **Git**

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/vinit105/ideavault.git
cd ideavault
```

### 2. Install Dependencies

```bash
# Install root dependencies and all workspace dependencies
npm run install:all
```

### 3. Set Up Environment Variables

#### Backend Environment
```bash
cd backend
cp .env.example .env
```

Edit the `.env` file with your local configuration:
```env
NODE_ENV=development
PORT=3001
MONGODB_URI=mongodb://localhost:27017/ideavault
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d
```

### 4. Start Development Servers

From the root directory:
```bash
# Start both backend and frontend simultaneously
npm run dev
```

Or start them separately:
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend  
npm run dev:frontend
```

### 5. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Health Check**: http://localhost:3001/health

## Project Structure

```
ideavault/
├── backend/              # Node.js/Express API server
│   ├── src/
│   │   └── server.ts    # Main server file
│   ├── package.json
│   └── tsconfig.json
├── frontend/             # React application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main app component
│   │   └── main.tsx     # Entry point
│   ├── package.json
│   └── vite.config.ts
├── docs/                 # Documentation
│   └── idea-license.md  # Custom license template
├── package.json          # Root workspace configuration
└── README.md
```

## Available Scripts

### Root Directory
- `npm run dev` - Start both backend and frontend
- `npm run build` - Build both applications for production
- `npm run install:all` - Install all dependencies

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Database Setup

### MongoDB
1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named `ideavault`
3. Update `MONGODB_URI` in your `.env` file

### Redis
1. Install Redis locally or use a cloud service
2. Update `REDIS_URL` in your `.env` file

## Development Workflow

1. Create a new branch for your feature/fix
2. Make your changes
3. Test locally with `npm run dev`
4. Build to ensure no errors: `npm run build`
5. Create a pull request

## Troubleshooting

### Port Already in Use
If ports 3000 or 3001 are already in use:
- Change `PORT` in backend `.env` file
- Update proxy configuration in `frontend/vite.config.ts`

### Database Connection Issues
- Ensure MongoDB is running locally
- Check connection string in `.env` file
- Verify network connectivity for cloud databases

### Module Not Found Errors
- Run `npm run install:all` to ensure all dependencies are installed
- Delete `node_modules` and reinstall if issues persist

## Next Steps

Once you have the basic setup running:

1. Explore the codebase structure
2. Check out the [Contributing Guidelines](../CONTRIBUTING.md)
3. Look at open issues for ways to contribute
4. Read the [Custom License Documentation](../docs/idea-license.md)

## Need Help?

- Check existing [GitHub Issues](https://github.com/vinit105/ideavault/issues)
- Create a new issue for bugs or feature requests
- Join our Discord community (coming soon)

Happy coding! 🚀
