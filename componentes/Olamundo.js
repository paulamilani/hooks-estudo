import react from "react";
import { Text, View } from "react-native";
import Estilo from '../estilos/Estilo';

export default function(props){
    return(
        <View style={Estilo.text}>
            <Text>Olá</Text>
            <Text>{props.nome}</Text>
        </View>
    )
}
