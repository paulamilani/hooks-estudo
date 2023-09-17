import {createDrawerNavigator, createAppContainer } from 'react-native'
import Olamundo from './Olamundo'

const DrawerNavigator = createDrawerNavigator(
    {
        DimensoesFixas: DimensoesFixas,
        Evento: Evento,
        Olamundo: Olamundo,
        UsuarioGithub: UsuarioGithub,
        ChecaNumero: () => <ChecaNumero numero ={3}/>
    },
    {
        hideStatusBar: true,
        drawerBackgroundColor: 'rgb (255, 255, 255, .9)',
        overlayColor: '#6b52ae',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroudColor: '#6b52ae',
        },
    }
);

const App = createAppContainer(DrawerNavigator);