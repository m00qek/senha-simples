module Main exposing (main, update)

import Browser
import Diceware
import Models exposing (Message(..), Model)
import Views


main : Program () Model Message
main =
    Browser.document
        { init = \_ -> ( Models.init, Cmd.none )
        , view = Views.page
        , update = update
        , subscriptions = \_ -> Sub.none
        }


update : Message -> Model -> ( Model, Cmd Message )
update msg model =
    case msg of
        NewPassword ->
            ( { model | password = Just (List.take 3 Diceware.wordlist) }
            , Cmd.none
            )
