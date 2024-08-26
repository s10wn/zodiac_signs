interface TelegramWebApp {
  initDataUnsafe?: {
    lang?: string;
    // Добавьте другие свойства, которые вам могут быть нужны
  };
}

interface Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
}
