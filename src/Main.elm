module Main exposing (main, update)

import Browser
import Diceware
import Models exposing (Message(..), Model)
import Password
import Views


main : Program () Model Message
main =
    Browser.document
        { init = \_ -> ( Models.init, Cmd.none )
        , view = Views.page
        , update = update
        , subscriptions = \_ -> Password.newSeed NewSeed
        }


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    case message of
        NewPassword ->
            ( model, Password.generateRandomSeed 8 )

        NewSeed seed ->
            ( { model | password = Just <| Password.from seed }
            , Cmd.none
            )
