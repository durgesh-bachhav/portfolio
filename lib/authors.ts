export interface Author {
  name: string;
  position: string;
  avatar: string;
}

export const authors: Record<string, Author> = {
  durgesh: {
    name: "Durgesh Bachhav",
    position: "Software Engineer",
    avatar: "https://avatars.githubusercontent.com/u/117353561?v=4",
  },
} as const;

export type AuthorKey = keyof typeof authors;

export function getAuthor(key: AuthorKey): Author {
  return authors[key];
}

export function isValidAuthor(key: string): key is AuthorKey {
  return key in authors;
}
