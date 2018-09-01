module Model exposing (Model, init)

import Diceware


type alias Model =
    { wordlist : List Diceware.Word
    , password : Maybe (List Diceware.Word)
    }


init : Model
init =
    { wordlist = Diceware.wordlist
    , password = Just (List.take 8 Diceware.wordlist)
    }
