module Main exposing (Msg(..), main, update, view)

import Browser
import Html exposing (Html, button, h1, li, ol, text)
import Html.Events exposing (onClick)
import Model exposing (Model)


main : Program () Model Msg
main =
    Browser.document
        { init = \_ -> ( Model.init, Cmd.none )
        , view = \model -> { title = "Senha Simples", body = view model }
        , update = update
        , subscriptions = \_ -> Sub.none
        }


type Msg
    = NewPassword


update : Msg -> Model -> ( Model, Cmd Msg )
update _ model =
    ( model, Cmd.none )


view : Model -> List (Html Msg)
view { password } =
    case password of
        Just words ->
            [ h1 [] [ text "Sua senha:" ]
            , ol [] <| List.map (\word -> li [] [ text word ]) words
            , button [] [ text "gerar" ]
            ]

        Nothing ->
            []
