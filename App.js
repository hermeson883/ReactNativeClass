import {View, Text, TouchableOpacity } from 'react-native';
import {flexStyleLogin, globalColors,textStyle} from './styles'
// import { AppleLogo, GoogleLogo } from 'phosphor-react-native';

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
          <Text style={textStyle.mediumSize }>Junte-se HOJE.</Text>
          <View>
            <TouchableOpacity style={flexStyleLogin.loginButtons}>
              <Text style={flexStyleLogin.textButtons}> 
               Log com o Google
              </Text>
            </TouchableOpacity>
        
          </View>
          <View>
            <TouchableOpacity style={flexStyleLogin.loginButtons }>
              <Text style={flexStyleLogin.textButtons}> 
                 Log com a Apple
              </Text>
            </TouchableOpacity>
        
          </View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, backgroundColor:"red"}} />
        </View>
        <View>
          
        </View>
    </View>
    
  );
}