module Main exposing (Msg(..), main, update, view)

import Browser
import Html exposing (Html, li, text, ul)
import Html.Events exposing (onClick)
import Model exposing (Model)


main : Program () Model Msg
main =
    Browser.document
        { init = \_ -> ( Model.init, Cmd.none )
        , view = \model -> { title = "Senha Simples", body = [ view model ] }
        , update = update
        , subscriptions = \_ -> Sub.none
        }


type Msg
    = NewPassword


update : Msg -> Model -> ( Model, Cmd Msg )
update _ model =
    ( model, Cmd.none )


view : Model -> Html Msg
view { wordlist } =
    ul [] <| List.map (\word -> ul [] [ text word ]) wordlist
