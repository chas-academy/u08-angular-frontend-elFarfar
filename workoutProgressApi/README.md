# Workout Tracker

En enkel Angular-applikation där användare kan registrera sig, logga in och logga sina träningspass. Projektet är kopplat till ett externt REST API för lagring och hantering av träningsdata.

## Funktioner
- Regristrera konto
- Logga in
- Skapa & redigera träningspass
- Se lista över alla skapade pass
- API-intergration med autentisering

# Kom igång: 

1. Klona projektet: git clone https://github.com/chas-academy/u08-angular-frontend-elFarfar.git  --> cd workoutProgressApi
2. Installerings krav: 'npm install'
3. starta projektet: 'npm start' --> besök http://localhost:4200 i webben 

# API
Projektet är kopplat till:
https://u05-api.onrender.com/api/v1/workouts

För att skapa träningspass måste användaren vara inloggad (JWT-token skickas automatiskt med i headers).

## Tester
Testfil för workout-form finns i src/app/components/workout-form/workout-form-component.spec.ts
- För att köra test: 'ng test'


### Projektet är skapat av

Alex Öhlin
FOS24
