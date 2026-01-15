/*
  # Legal Portal Database Schema

  1. New Tables
    - `blogs`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `content` (text, not null)
      - `author` (text, not null)
      - `image_url` (text, optional)
      - `published` (boolean, default false)
      - `created_at` (timestamptz, default now)
      - `updated_at` (timestamptz, default now)
    
    - `events`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `description` (text, not null)
      - `event_date` (timestamptz, not null)
      - `location` (text, not null)
      - `created_at` (timestamptz, default now)
    
    - `judgments`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `court` (text, not null)
      - `judgment_date` (date, not null)
      - `case_number` (text, not null)
      - `link` (text, optional)
      - `created_at` (timestamptz, default now)
  
  2. Security
    - Enable RLS on all tables
    - Public read access for published content
    - Authenticated users can manage content (admin panel)
*/

CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  image_url text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date timestamptz NOT NULL,
  location text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS judgments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  court text NOT NULL,
  judgment_date date NOT NULL,
  case_number text NOT NULL,
  link text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE judgments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blogs"
  ON blogs FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can view all blogs"
  ON blogs FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert blogs"
  ON blogs FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blogs"
  ON blogs FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blogs"
  ON blogs FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert events"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view judgments"
  ON judgments FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert judgments"
  ON judgments FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update judgments"
  ON judgments FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete judgments"
  ON judgments FOR DELETE
  TO authenticated
  USING (true);