import { StyleSheet } from "react-native"

/*Criando as cores que irei mais utilizar no projeto*/
export const globalColors = StyleSheet.create({
    blue: {
        color: '#0098FF',
    },
    black: {
        color: "#000000"
    },
    white: {
        color: "#FFFFFF",
    },
    blueBlackground: {
        backgroundColor: '#0098FF'
    }
    

})

//Padronizando as fontes que irei utilizar
export const textStyle = StyleSheet.create({
    bigSize: {
        fontSize: 42,
        fontWeight: "900"
    },
    mediumSize: {
        fontSize: 21,
        fontWeight:'900'
    }
})

/*Criando os flex container */
export const flexStyleLogin = StyleSheet.create({
    flexStyleContainer: {
        display: "flex",
        flex:1,
        flexDirection: 'column',
        
    },

    formStyle: {
        display: 'flex',
        gap:20,
        // backgroundColor: "red",
        marginVertical: '20%',
        marginHorizontal: 40

    },

    loginButtons: {
        // width: "50%",
        padding: 10,
        borderWidth: 1,
        borderRadius: 8
    },
    
    textButtons: {
        textAlign: "center",
        fontSize: 19,
    },

    inputContainer: {
        display:'flex',
        gap:23,
    },

    inputs: {
        borderWidth: 1,
        borderRadius: 8,
        textAlign:'center',
        height:40
    }
})