# Threat Insight Lab

An interactive cybersecurity platform providing real-time threat analytics, comprehensive learning resources, and security awareness tools.

## Features

- **Real-time Threat Intelligence**: Monitor global cybersecurity trends and attack patterns
- **Interactive Learning Hub**: Master cybersecurity fundamentals with hands-on tutorials
- **Live Threat Alerts**: Stay informed about the latest security vulnerabilities
- **Cybersecurity Dictionary**: Learn essential terms with clear definitions and examples
- **Modern UI**: Dark tech aesthetic with electric accents and professional layout

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom cybersecurity theme
- **UI Components**: shadcn/ui with Radix UI primitives
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Charts**: Recharts (for future data visualizations)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd threat-insight-lab
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.tsx   # Main navigation
│   ├── HeroSection.tsx # Landing page hero
│   ├── DashboardPreview.tsx # Analytics dashboard
│   ├── KnowledgeHub.tsx # Learning resources
│   ├── ThreatAlerts.tsx # Security alerts
│   ├── CyberTerms.tsx  # Terminology dictionary
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## Customization

The project uses a custom cybersecurity theme with:

- **Color Palette**: Dark backgrounds with electric blue, purple, and green accents
- **Animations**: Glow effects, data streams, and smooth transitions
- **Typography**: Professional, readable fonts optimized for technical content
- **Components**: Fully customizable UI components using shadcn/ui

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Google Maps Setup (Optional)

The Global Threat Map uses Google Maps API for interactive visualization:

1. **Get Google Maps API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable "Maps JavaScript API"
   - Create credentials (API Key)

2. **Configure Environment Variables**:
   - Add to your `.env.local` file:
   ```env
   VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key-here
   ```

3. **Restrict API Key** (Recommended):
   - In Google Cloud Console, restrict the API key to your domain
   - Add HTTP referrers for security

**Note**: Without the API key, the threat map will show a placeholder message.

## Supabase Setup (Required for Authentication)

This project requires Supabase for authentication functionality:

1. **Create a Supabase Project**:
   - Go to [supabase.com](https://supabase.com)
   - Create a new project or use an existing one

2. **Get Your Credentials**:
   - Go to Settings > API in your Supabase dashboard
   - Copy your Project URL and anon/public key

3. **Configure Environment Variables**:
   - Create a `.env.local` file in the project root
   - Add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

4. **Enable Authentication**:
   - In Supabase dashboard, go to Authentication > Settings
   - Enable email authentication
   - Configure your site URL (e.g., `http://localhost:8080` for development)

5. **Test Authentication**:
   - Click "Login" or "Get Started" in the navigation
   - Create an account with your email and password
   - Sign in with your credentials

**Note**: Supabase is now required for authentication. The app will not work without proper Supabase configuration.
