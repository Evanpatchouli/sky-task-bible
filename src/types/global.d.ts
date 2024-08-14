export {};

declare global {
  interface Window {
    sidebar?: {
      addPanel(url: string, title: string, description: string): void;
    };
    external?: {
      AddFavorite(url: string, title: string): void;
    };
  }
}
