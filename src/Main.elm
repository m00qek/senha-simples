module Main exposing (main, update)

import Browser
import Diceware
import Models exposing (Message(..), Model)
import Password
import Views


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    case message of
        NewPassword ->
            ( model, Password.generateRandomSeed 8 )

        NewSeed seed ->
            ( { model | password = Password.from model.alphabet seed }
            , Cmd.none
            )


subscriptions : Model -> Sub Message
subscriptions _ =
    Password.newSeed NewSeed


init : flags -> ( Model, Cmd Message )
init _ =
    update NewPassword { alphabet = Diceware.alphabet, password = Nothing }


main : Program () Model Message
main =
    Browser.document
        { init = init
        , view = Views.page
        , update = update
        , subscriptions = subscriptions
        }
