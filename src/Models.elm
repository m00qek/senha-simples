module Models exposing (Alphabet, Message(..), Model, Password, Seed)

import Dict exposing (Dict)


type alias Seed =
    List Int


type alias Password =
    List String


type alias Alphabet =
    { size : Int
    , symbols : Dict Int String
    }


type Message
    = NewPassword
    | NewSeed Seed


type alias Model =
    { alphabet : Alphabet
    , password : Maybe Password
    }
