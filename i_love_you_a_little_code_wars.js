/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the 
following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

*/

const howMuchILoveYou = (nbPetals) => {
    const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    let index = nbPetals;
    if(nbPetals > phrases.length) {
      index = (index % 6) - 1;
      console.log(index);
      if(index < 0) {
        index = 0;
      }
    } else {
      index = nbPetals - 1;
    }
    if(phrases[index] === undefined) {
      return phrases[0];
    }
    return phrases[index];
  }