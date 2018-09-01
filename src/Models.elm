module Models exposing (Message(..), Model, init)

import Diceware


type Message
    = NewPassword


type alias Model =
    { wordlist : List Diceware.Word
    , password : Maybe (List Diceware.Word)
    }


init : Model
init =
    { wordlist = Diceware.wordlist
    , password = Nothing
    }
