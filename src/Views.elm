module Views exposing (page)

import Browser exposing (Document)
import Html exposing (Html, button, h1, li, ol, text)
import Html.Events exposing (onClick)
import Models exposing (Message(..), Model)


diceware pwd =
    case pwd of
        Just words ->
            ol [] <| List.map (\word -> li [] [ text word ]) words

        Nothing ->
            ol [] []


page : Model -> Document Message
page { password } =
    { title = "Senha Simples"
    , body =
        [ h1 [] [ text "Sua senha:" ]
        , diceware password
        , button [ onClick NewPassword ] [ text "gerar" ]
        ]
    }
