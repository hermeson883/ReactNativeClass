import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { flexStyleLogin, globalColors, textStyle } from './styles'
import { AppleLogo, GoogleLogo } from 'phosphor-react-native';

/* 
  Breve resumo do React Native
    View === div 
    Button === button 
    Text === p
    TouchableOpacity === Botão estilizavel <- que desgraça

*/

export default function App() {
  return (
    <View style={flexStyleLogin.flexStyleContainer}>
      <View style={flexStyleLogin.formStyle}>
        <Text style={[textStyle.bigSize, globalColors.black]}>Explore Agora</Text>
        <Text style={textStyle.mediumSize}>Junte-se HOJE.</Text>
        <View>
          <TouchableOpacity style={flexStyleLogin.loginButtons}>
            <Text style={flexStyleLogin.textButtons}>
              <GoogleLogo /> Log com o Google
            </Text>
          </TouchableOpacity>

        </View>
        <View>
          <TouchableOpacity style={flexStyleLogin.loginButtons}>
            <Text style={flexStyleLogin.textButtons}>
              <AppleLogo style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center' }} /> Log com a Apple
            </Text>
          </TouchableOpacity>

        </View>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, backgroundColor: "red" }} />
        <Text style={[textStyle.mediumSize, globalColors.black]}>Cadastre-se / Log</Text>

        <View style={flexStyleLogin.inputContainer}>
          <TextInput style={flexStyleLogin.inputs} placeholder='Coloque seu email' />
          <TextInput style={flexStyleLogin.inputs} placeholder='Crie sua senha' />
          <TouchableOpacity style={[flexStyleLogin.loginButtons, globalColors.blueBlackground]}>
            <Text style={[globalColors.white, flexStyleLogin.textButtons]}>
              Criar conta
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, backgroundColor: "red" }} />
        <View style={flexStyleLogin.inputContainer}>
          <TouchableOpacity style={flexStyleLogin.loginButtons}>
            <Text style={[globalColors.blue, flexStyleLogin.textButtons]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}