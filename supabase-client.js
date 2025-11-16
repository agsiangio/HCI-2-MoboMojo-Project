const SUPABASE_URL = 'https://lgtetaxufxazhjnxmxju.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxndGV0YXh1ZnhhemhqbnhteGp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyNjA1NTYsImV4cCI6MjA3ODgzNjU1Nn0.sCqg2IRPubY-lfvzJ8mliqh6v8CNusN4XbecxJxN_Xs';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

async function signUp(email, password, username) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  if (data.user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          id: data.user.id,
          username,
          email,
        },
      ]);

    if (profileError) throw profileError;
  }

  return data;
}

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();

  if (error) throw error;
  return data;
}

async function updateProfile(userId, updates) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId);

  if (error) throw error;
  return data;
}

async function getBuilds(userId) {
  const { data, error } = await supabase
    .from('builds')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

async function saveBuild(userId, buildData) {
  const { data, error } = await supabase
    .from('builds')
    .insert([
      {
        user_id: userId,
        ...buildData,
      },
    ])
    .select();

  if (error) throw error;
  return data;
}

async function updateBuild(buildId, buildData) {
  const { data, error } = await supabase
    .from('builds')
    .update(buildData)
    .eq('id', buildId)
    .select();

  if (error) throw error;
  return data;
}

async function deleteBuild(buildId) {
  const { error } = await supabase
    .from('builds')
    .delete()
    .eq('id', buildId);

  if (error) throw error;
}

async function getWishlist(userId) {
  const { data, error } = await supabase
    .from('wishlist_items')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

async function addToWishlist(userId, itemData) {
  const { data, error } = await supabase
    .from('wishlist_items')
    .insert([
      {
        user_id: userId,
        ...itemData,
      },
    ])
    .select();

  if (error) throw error;
  return data;
}

async function removeFromWishlist(itemId) {
  const { error } = await supabase
    .from('wishlist_items')
    .delete()
    .eq('id', itemId);

  if (error) throw error;
}
