# Legal Portal India - Next.js

A comprehensive legal information portal built with Next.js 14, providing access to Supreme Court, High Courts, RTI, Bare Acts, Law Dictionary, Judgments, and legal resources across India.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (PostgreSQL)
- **Icons:** Lucide React
- **Authentication:** Supabase Auth

## ✨ Features

### Public Pages
- 🏛️ **Supreme Court** - Display board, live proceedings, case status, daily orders
- ⚖️ **High Courts** - Complete directory of 25 High Courts across India
- 📋 **RTI Portal** - Right to Information resources and guidelines
- 📜 **Bare Acts** - Searchable database of 25+ Indian legislation
- 📅 **Court Calendar** - Cause lists and important dates
- 📰 **Legal Blogs** - Articles and insights on Indian law
- 📖 **Law Dictionary** - Comprehensive searchable legal terminology
- 👥 **Bar Associations** - Directory of 15+ bar associations
- ⚖️ **Recent Judgments** - Latest court judgments and case decisions
- 🎯 **Legal Events** - Upcoming conferences and seminars

### Admin Features
- 🔐 **Authentication** - Secure login/signup with Supabase
- ✍️ **Blog Management** - Create, publish, and delete blog posts
- 📅 **Event Management** - Add and manage legal events
- ⚖️ **Judgment Management** - Add recent court judgments

## 📁 Project Structure

```
pg1/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with Navbar
│   ├── page.tsx                  # Home page
│   ├── admin/                    # Admin panel (protected)
│   ├── supreme-court/            # Supreme Court page
│   ├── high-courts/              # High Courts directory
│   ├── rti/                      # RTI resources
│   ├── bare-acts/                # Bare acts database
│   ├── calendar/                 # Court calendar
│   ├── blogs/                    # Legal blogs
│   ├── law-dictionary/           # Law dictionary
│   ├── bar-associations/         # Bar associations
│   ├── judgments/                # Recent judgments
│   ├── events/                   # Legal events
│   └── globals.css               # Global styles (Tailwind)
├── components/
│   └── Navbar.tsx                # Navigation component
├── lib/
│   └── supabase.ts               # Supabase client configuration
├── types/
│   └── index.ts                  # TypeScript type definitions
└── public/                       # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for database features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pg1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
   
   Get these credentials from your [Supabase Dashboard](https://app.supabase.com)

4. **Set up Supabase Database**
   
   Create the following tables in Supabase:

   **blogs** table:
   ```sql
   create table blogs (
     id uuid default uuid_generate_v4() primary key,
     title text not null,
     content text not null,
     author text not null,
     image_url text,
     published boolean default false,
     created_at timestamp with time zone default now(),
     updated_at timestamp with time zone default now()
   );
   ```

   **events** table:
   ```sql
   create table events (
     id uuid default uuid_generate_v4() primary key,
     title text not null,
     description text not null,
     event_date timestamp with time zone not null,
     location text not null,
     created_at timestamp with time zone default now()
   );
   ```

   **judgments** table:
   ```sql
   create table judgments (
     id uuid default uuid_generate_v4() primary key,
     title text not null,
     court text not null,
     judgment_date date not null,
     case_number text not null,
     link text,
     created_at timestamp with time zone default now()
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🔑 Key Routes

| Route | Description | Type |
|-------|-------------|------|
| `/` | Home page with feature cards | Public |
| `/supreme-court` | Supreme Court information | Public |
| `/high-courts` | High Courts directory | Public |
| `/rti` | RTI resources | Public |
| `/bare-acts` | Searchable bare acts | Public |
| `/calendar` | Court calendars | Public |
| `/blogs` | Legal blog posts | Public |
| `/law-dictionary` | Legal terminology | Public |
| `/bar-associations` | Bar associations directory | Public |
| `/judgments` | Recent court judgments | Public |
| `/events` | Upcoming legal events | Public |
| `/admin` | Admin dashboard | Protected |

## 🎨 Styling

This project uses **Tailwind CSS v4** with the following configuration:

- **CSS File:** `app/globals.css` uses `@import "tailwindcss"`
- **PostCSS:** Configured with `@tailwindcss/postcss` plugin
- **Auto-detection:** Tailwind automatically detects classes in all `app/` and `components/` files

### Color Palette

- **Primary:** Slate (Navigation, Headers)
- **Accent:** Amber (CTAs, Active states)
- **Page Themes:** 
  - Blue (Supreme Court, Law Dictionary)
  - Green (High Courts)
  - Purple (RTI)
  - Red (Bare Acts)
  - Orange (Calendar)
  - Teal (Blogs)
  - Pink (Bar Associations)
  - Cyan (Judgments)
  - Yellow (Events)

## 🔐 Authentication & Admin

The admin panel (`/admin`) uses Supabase Authentication:

1. **Sign Up:** Create an account via the admin login page
2. **Email Confirmation:** Check your email for confirmation link
3. **Login:** Access the admin dashboard
4. **Manage Content:** Add/edit/delete blogs, events, and judgments

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
# Or use Vercel CLI
vercel
```

### Build Production Bundle

```bash
npm run build
npm start
```

## 📝 TypeScript Types

All types are defined in `types/index.ts`:

- `Blog` - Blog post structure
- `Event` - Legal event structure
- `Judgment` - Court judgment structure
- `HighCourt` - High court information
- `BareAct` - Bare act details
- `BarAssociation` - Bar association info

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Supabase for backend infrastructure
- Lucide for beautiful icons
- Tailwind CSS for styling system

## 📞 Support

For issues, questions, or contributions, please open an issue on GitHub.

---

**Built with ❤️ for the Indian Legal Community**
