import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        (req, next) => {
          if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
              const authReq = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` },
              });
              return next(authReq);
            }
          }
          return next(req);
        },
      ])
    ),
  ],
};
