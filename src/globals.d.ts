declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB: Database;
      MICROCMS_API_KEY: string;
    }
  }
}

declare module "*.md" {
  const value: string;
  export default value;
}
