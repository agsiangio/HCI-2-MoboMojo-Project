/*
  # PC Builder Database Schema

  ## New Tables
  
  ### `profiles`
  - `id` (uuid, primary key, references auth.users)
  - `username` (text, unique)
  - `email` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### `builds`
  - `id` (uuid, primary key)
  - `user_id` (uuid, foreign key to profiles)
  - `name` (text)
  - `cpu` (text)
  - `gpu` (text)
  - `motherboard` (text)
  - `ram` (text)
  - `psu` (text)
  - `storage` (text)
  - `case` (text)
  - `cooler` (text)
  - `estimated_price` (numeric)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### `wishlist_items`
  - `id` (uuid, primary key)
  - `user_id` (uuid, foreign key to profiles)
  - `item_name` (text)
  - `item_type` (text)
  - `price` (numeric)
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Users can only read/write their own data
  - All policies check authentication and ownership
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE NOT NULL,
  email text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create builds table
CREATE TABLE IF NOT EXISTS builds (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  name text NOT NULL DEFAULT 'Untitled Build',
  cpu text DEFAULT '',
  gpu text DEFAULT '',
  motherboard text DEFAULT '',
  ram text DEFAULT '',
  psu text DEFAULT '',
  storage text DEFAULT '',
  case_name text DEFAULT '',
  cooler text DEFAULT '',
  estimated_price numeric DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE builds ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own builds"
  ON builds FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own builds"
  ON builds FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own builds"
  ON builds FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own builds"
  ON builds FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create wishlist_items table
CREATE TABLE IF NOT EXISTS wishlist_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  item_name text NOT NULL,
  item_type text DEFAULT '',
  price numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE wishlist_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own wishlist"
  ON wishlist_items FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own wishlist items"
  ON wishlist_items FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own wishlist items"
  ON wishlist_items FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_builds_user_id ON builds(user_id);
CREATE INDEX IF NOT EXISTS idx_wishlist_user_id ON wishlist_items(user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_profiles_updated_at'
  ) THEN
    CREATE TRIGGER update_profiles_updated_at
      BEFORE UPDATE ON profiles
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_builds_updated_at'
  ) THEN
    CREATE TRIGGER update_builds_updated_at
      BEFORE UPDATE ON builds
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;