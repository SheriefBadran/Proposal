# Proposal
## Ändrade filer med kommentarer i
* App.js med en förälderkontroller och en ny route som heter myattractions
* LoginCtrl.js där jag ändrat $location.path till /attractions så att man kan se alla attractions när man är inloggad, men att man
  också kan utföra ditt UC att endast se attractions skapade av sig själv om man i gränssnittets top meny väljer my attractions. 
* user-attraction-list.html med ng-if på update och remove.
* CRUDCtrl.js med flaggan isLoggedIn.
* index.html där jag sätter förälderkontrollern och gör den tillgänglig för applikationen, förälderkontrollern är implementerad 
i App.js enligt punkt 1.
* menu.html, där jag talar om att menyvalet My Attractions endast ska visas om man är inloggad, detta görs med hjälp av angulars
  ng-if direktiv som sätts deklarativt på rad 7. ng-if anropar funktionen isLoggedIn() som är implementerad i förälderkontrollen 
  enligt punkt 1.

