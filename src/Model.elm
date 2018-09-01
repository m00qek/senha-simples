module Model exposing (Model, init)

import Diceware


type alias Model =
    { wordlist : List Diceware.Word
    }


init : Model
init =
    { wordlist = Diceware.wordlist }
