declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB: Database;
      MICROCMS_API_KEY: string;
      NEXT_PUBLIC_PHOTO_URL: string;
      NEXT_PUBLIC_BACKEND_URL: string;
    }
  }
}

declare module "*.md" {
  const value: string;
  export default value;
}

export {};
