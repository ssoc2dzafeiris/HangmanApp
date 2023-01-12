var app = angular.module ('HangmaApp', []);

app.controller ('GameController', [
  '$scope',
  '$timeout',
  function ($scope, $timeout) {
    var words = ['rat', 'cat', 'bat', 'mat'];
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen = [];
    $scope.guesses = 6;
    $scope.displayWord = '';
    $scope.input = {
      letter: '',
    };

    $scope.selectRandomWord = function () {
      var index = Math.round (Math.random () * words.length);
      return words[index];
    };
    $scope.newGame = function () {
      $scope.incorrectLettersChosen = [];
      $scope.correctLettersChosen = [];
      $scope.guesses = 6;
      $scope.displayWord = '';
      selectedWord = selectedRandomWord ();
      console.log (selectedWord);
      var tempDisplayWorld = '';
      for (var i = 0; i < selectedWords.length; i++) {
        tempDisplayWorld += '*';
      }
      $scope.displayWord = tempDisplayWorld;
    };

    $scope.letterChosen = function () {
      console.log ('letterChosen calling');

      for (var i = 0; i < $scope.correctLetterChosen.length; i++) {
        if (
          $scope.correctLetterChosen[i].toLowerCase () == $scope.input.letter
        ) {
          $scope.input.letter = '';
          return;
        }
      }
      for (var i = 0; i < $scope.incorrectLetterChosen.length; i++) {
        if (
          $scope.incorrectLetterChosen[i].toLowerCase () == $scope.input.letter
        ) {
          $scope.input.letter = '';
          return;
        }
      }

      var correct = false;
      for (var i = 0; i < selectedWord.length; i++) {
        if (
          selectedWord[i].toLowerCase () == $scope.input.letter.toLowerCase ()
        ) {
          $scope.displayWord =
            $scope.displayWord.slice (0, i) +
            $scope.input.letter.toLowerCase () +
            $scope.displayWord.slice (i + 1);
          correct = true;
        }
      }
      if (correct) {
        $scope.correctLetterChosen = push ($scope.input.letter.toLowerCase ());
      } else {
        $scope.guesses--;
        $scope.incorrectLetterChosen = push (
          $scope.input.letter.toLowerCase ()
        );
      }
      $scope.input.letter = '';
      if ($scope.guesses == 0) {
        $timeout (function () {
          newGame ();
        }, 500);
      }
      if ($scope.displayWord.indexOf ('*') == -1) {
        $timeout (function () {
          newGame ();
        }, 500);
      }
    };
  },
]);
