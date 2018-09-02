module Models exposing (Message(..), Model, Password, Seed, init)

import Diceware


type alias Seed =
    List Int


type alias Password =
    List String


type Message
    = NewPassword
    | NewSeed Seed


type alias Model =
    { wordlist : Password
    , password : Maybe (List Diceware.Word)
    }


init : Model
init =
    { wordlist = Diceware.wordlist
    , password = Nothing
    }
