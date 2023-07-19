
import { StyleSheet, View } from 'react-native';

//import { RegistrationScreen } from './Screens/RegistrationScreen';
import 'react-native-gesture-handler';
import { Navigation } from './Screens/navigatoin';


export default function App() {
  return (
    <View style={styles.container}>
     
      
      

     
     <Navigation />

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
