const dns = require('dns')
const util = require('util');

const IP_V = 4 // we use IP protocol version 4

const getDns = () => {
  dns.lookup('www.1006.org', IP_V, (error, address) => {
    if (error) {
        console.log('error: could not lookup host');
    } else {
        console.log('IP address = ' + address)
    }
  });
}


// Übung 3: Das Telefonbuch des Internets

// Vielleicht haben Sie einmal die Webseite https://www.webmasters-press.de/ besucht? Dann hat Ihr Computer die so genannte IP-Adresse des Servers (www.webmasters-press.de) herausgefunden.

// Ähnlich wie ein Telefonbuch ordnet das Domain Name System (DNS) jedem Server eine eindeutige IP-Adresse zu, unter der er über das Internet erreichbar ist.

// Die Node.js-API bietet eine Funktion, um Namen im DNS nachzuschlagen: dns.lookup(…).

// So geht's (s.o.)
 ​
// Wenn ich dieses Programm ausführe (der Rechner muss dazu mit dem Internet verbunden sein), erhalte ich die Ausgabe:

// IP address = 54.93.168.85
// Am Callback erkennen Sie, dass dns.lookup(…) genau wie fs.readFile(…) eine asynchrone Funktion ist. Das ist auch gut so, schließlich könnte eine Suche im DNS je nach Internetverbindung länger dauern oder fehlschlagen.

// Die Übung besteht nun darin, obiges Beispiel so umzuschreiben, dass der Aufruf von dns.lookup(…) in eine Wrapper-Funkion verpackt wird. Verwenden Sie dazu util.promisify(…)!