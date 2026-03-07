export interface Author {
  name: string;
  position: string;
  avatar: string;
}

export const authors: Record<string, Author> = {
  durgesh: {
    name: "Durgesh Bachhav",
    position: "Software Engineer",
    avatar: "/authors/durgesh.svg",
  },
  arghya: {
    name: "Arghya Das",
    position: "Design System Engineer",
    avatar: "/authors/arghya.png",
  },
} as const;

export type AuthorKey = keyof typeof authors;

export function getAuthor(key: AuthorKey): Author {
  return authors[key];
}

export function isValidAuthor(key: string): key is AuthorKey {
  return key in authors;
}
