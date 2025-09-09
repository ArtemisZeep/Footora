// Утилиты для работы с Google Analytics и Yandex Metrika

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    ym: (id: number, method: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics события
export const GA_TRACKING_ID = 'G-4XYF0R04SD';

export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Yandex Metrika события
export const YM_TRACKING_ID = 104088996;

export const ymReachGoal = (target: string, params?: any) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YM_TRACKING_ID, 'reachGoal', target, params);
  }
};

// Общие события для отслеживания
export const trackPageView = (url: string) => {
  gtag('config', GA_TRACKING_ID, {
    page_location: url,
  });
  
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YM_TRACKING_ID, 'hit', url);
  }
};

export const trackServiceClick = (serviceName: string) => {
  trackEvent('click', 'service', serviceName);
  ymReachGoal('service_click', { service: serviceName });
};

export const trackBookingClick = () => {
  trackEvent('click', 'booking', 'online_booking_button');
  ymReachGoal('booking_click');
};

export const trackPhoneClick = () => {
  trackEvent('click', 'contact', 'phone');
  ymReachGoal('phone_click');
};

export const trackEmailClick = () => {
  trackEvent('click', 'contact', 'email');
  ymReachGoal('email_click');
}; 