port module Password exposing (from, generateRandomSeed, newSeed)

import Diceware
import Dict
import Models exposing (Message, Password, Seed)


port generateRandomSeed : Int -> Cmd msg


port newSeed : (List Int -> msg) -> Sub msg


bla =
    Diceware.wordlist
        |> List.indexedMap (\index word -> ( index, word ))
        |> Dict.fromList


asd sera words =
    case sera of
        Just word ->
            word :: words

        Nothing ->
            words


from : Seed -> Password
from seed =
    let
        len =
            List.length Diceware.wordlist
    in
    seed
        |> List.map (modBy len)
        |> List.map (\key -> Dict.get key bla)
        |> List.foldr asd []
