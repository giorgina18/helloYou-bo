
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function start_game() {
  rl.question('Wat is je naam? ', function (naam) {
    console.log(`Welkom, ${naam}! Het spel begint. Je krijgt elke ronde een input van (0, 1, 2). Elke waarde doet een actie.`);
    console.log('Je zit in een zombie-apocalyps met je beste vriend. Welke kant gaan jullie op? [0] Naar het bos, [1] Naar de stad of [2] Naar het park.');

    rl.question('Wat ga je doen? [0] Naar het bos, [1] Naar de stad of [2] Naar het park? ', function (keuze_1) {
      if (keuze_1 == 0) {
        console.log('Jullie zitten in een bos en komen een man tegen of je ziet een meer en een grot. Welke kies je? [0] Is man, [1] Is grot.',);

        rl.question('Welke kies je? [0] Is man, [1] Is grot? ', function (keuze_2) {
          if (keuze_2 == 0) {
            console.log('De man was een zombie en jullie gingen dood.');
            console.log('GAME OVER!');
            askToPlayAgain(false);

          } else {
            console.log('Jullie gaan overnachten in de grot.');
            console.log('Waar gaan jullie nu naartoe? [0] Blijven bij de grot of [1] Jullie gaan naar de stad.');

            rl.question('[0] Blijven bij de grot. [1] Jullie gaan naar de stad? ', function (keuze_3) {
              if (keuze_3 == 0) {
                console.log('Jullie gaan dood van honger, want jullie hebben geen verstand van overlevingstechnieken.');
                console.log('GAME OVER!');
                askToPlayAgain(false);

              } else {
                console.log('Jullie komen een mooi huis tegen en er is veel eten in dat huis.');
                console.log('Waar gaan jullie nu naartoe? [0] Verder op avontuur of [1] Jullie blijven in dat huis.');

                rl.question('[0] Verder op avontuur. [1] Jullie blijven in dat huis. ', function (keuze_4) {
                  if (keuze_4 == 1) {
                    console.log('er kwam ineens een zombie het huis binnen en jullie gingen dood.');
                    console.log('GAME OVER!')
                    askToPlayAgain(false);

                  } else {
                    console.log('Je gaat verder op avontuur.');
                    console.log('je komt een kind tegen, wat gaan jullie doen [0] jullie helpen dat kind of [1] jullie negeren dat kind')


                    rl.question('[0]jullie helpen dat kind of [1] jullie negeren dat kind.', function (keuze_5) {
                      if (keuze_5 == 0) {
                        console.log('jullie helpen de kind en gaan verder op avontuur met zijn drieën')
                        console.log('THE END!')
                        askToPlayAgain(true);
                      }

                      else {
                        console.log('jullie lopen verder en komen een winkel tegen met wapens en pakken wapens')
                        console.log('THE END!')
                        askToPlayAgain(true);
                      }
                    }

                    )
                  }
                });
              }
            });
          }
        });
      }



      if (keuze_1 == 1) {
        console.log('jullie zitten in een stad en ziet een winkel met eten of je ziet een wapen winkel, naar welke ga je naartoe [0] gaat naar wapen winkel [1] gaat naar eet winkel')

        rl.question('welke kies je [0] gaat naar wapen winkel of [1] gaat naar eet winkel', function (keuze_6) {
          if (keuze_6 == 1) {
            console.log('er zitten te veel zombies voor de winkel met eten dus moesten iets anders verzinnen.')
            
            rl.question('[1]je gebruikt je vriend als afleiding of [0] gaan heel zachtjes lopen in hoop je red het', function (keuze_7) {

              if (keuze_7 == 1) {
                console.log('je vriend rende weg en zombies gingen erachteraan,je kwam winkel binnen pakte eten en ging er vandoor ( slechte vriend ben je :c)')
                console.log('je verloor je beste vriend en was zo verdrietig dat je dood ging')
                console.log('GAME OVER!')
                askToPlayAgain(false);

              }
              else if (keuze_7 == 0) {
                console.log('zombies zijn niet zo slim dus jullie kwamen binnen')
                rl.question('[0]jullie gaan magezijn in of [1] jullie gaan gewoon in winkel kijken', function (keuze_9) {
                  if (keuze_9 == 0) {

                    console.log('jullie kiezen het magazijn maar er zat een zombie in! jullie werden opgegeten')
                    console.log('GAME OVER!');
                    askToPlayAgain(false);

                  } else if (keuze_9 == 1) {
                    console.log("jullie vonden eten in blik en ginger er weer vandoor met het eten... jullie vonden later een goeie plek om te blijven en bleven daar tot dat jullie dood gingen van ouderdom")
                    console.log('THE END!')
                    askToPlayAgain(true);
                  }

                })
              }


            })

          }
          else if (keuze_6 == 0) {
            console.log('er zitten veel zombies voor de winkel maar verzinnen een manier om erin te gaan')
            rl.question('[0] je gooit een metalen pijp in de verte of  [1] je gaat parkouren', function (keuze_10) {
              if (keuze_10 == 0) {

                console.log('jullie rennen snel winkel binnen net op tijd, jullie pakte wapens en gingen derna op avontuur of er meer mensen nog leefde')
                console.log('THE END!')
                askToPlayAgain(true);

              } else if (keuze_10 == 1) {
                console.log("jullie parkouren over daken heen op de dak van wapen winkel en komen binnen, jullie pakte wapens en gingen ervandoor op zoek of er nog overlevende waren")
                console.log("THE END!")
                askToPlayAgain(true);


              }

            })

          }
        })
      }
      if (keuze_1 == 2){
        console.log('jullie zitten in een park en ziet een bosje. je verstopt daar of je rent weg van park?')
        rl.question('[0] is jullie verstoppen in het bosje of [1] je rent weg uit de park', function(keuze_11){
          if(keuze_11 == 0){
            console.log('je rent de bosje in maar maakte te veel laawaai. de zombies hoorde je, je werd opgegeten')
            console.log('GAME OVER!')
            askToPlayAgain(false);
          } else if(keuze_11 == 1){
            console.log('tijdens het rennen valt je vriend, je probeert hem te helpen maar word gepakt door kudde zombies(niet zo slim hé ;)')
            console.log('GAME OVER!')
            askToPlayAgain(false);  
          }
        })
    }})
    
      

    }

  )}
     

function askToPlayAgain(success) {
  const message = success ? 'lekker bezig! ' : 'heelaas :(';
  console.log(message);
  rl.question('Wil je opnieuw spelen ? [0] Nee [1] Ja: ', function (opnieuw) {
    if (opnieuw == '1') {
      start_game();
    } else {
      console.log('Bedankt voor het spelen!');
      rl.close();
    }
  });
}


start_game();

