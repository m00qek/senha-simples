port module Password exposing (from, generateRandomSeed, newSeed)

import Diceware
import Dict
import Models exposing (Alphabet, Password, Seed)


port generateRandomSeed : Int -> Cmd msg


port newSeed : (Seed -> msg) -> Sub msg


traverse : List (Maybe a) -> Maybe (List a)
traverse =
    List.foldr (Maybe.map2 (::)) (Just [])


from : Alphabet -> Seed -> Maybe Password
from { size, symbols } seed =
    seed
        |> List.map (modBy size)
        |> List.map (\key -> Dict.get key symbols)
        |> traverse
