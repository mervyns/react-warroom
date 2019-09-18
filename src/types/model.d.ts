interface Repository {
  id: number;
  name: string;
  full_name: string;
  owner: Owner;
  description: string;
  url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  open_issues_count: number;
  forks_count: number;
}

interface Owner {
  login: string;
  id: 69631;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
