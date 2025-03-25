# EASI Meet - Video Conference Application

EASI Meet is a React-based video conferencing application that uses ZegoCloud for real-time communication.

## Features

- Create and join video meetings
- User authentication (login/register)
- Real-time video and audio communication
- Screen sharing
- Text chat during meetings

## Technologies Used

- React 19
- TypeScript
- React Router DOM v7
- ZegoCloud for video conferencing
- Vite for bundling and development
- GitHub Actions for automated deployment

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/easi-meet.git
   cd easi-meet
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment

### Automatic Deployment with GitHub Actions

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.

### Manual Deployment

If you prefer to deploy manually, you can use the following commands:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Configuration

- The application uses HashRouter for routing, which works well with GitHub Pages.
- The homepage is configured in `package.json` with the URL where the application will be hosted.
- The base path for assets is dynamically determined from the package.json homepage field.

## License

[Your License Here]

## Contact

[Your Contact Information]
