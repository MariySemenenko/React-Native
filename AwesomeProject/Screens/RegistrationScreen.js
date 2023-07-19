import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require("./images/photo-bg.png")}
      style={styles.imageScreen}
    >
      <KeyboardAvoidingView style={styles.containerKey}>
        <View style={styles.containerForm}>
          <Image
            style={styles.image}
            source={require("./images/rectangle.png")}
          />
          <Text style={styles.text}>Реєстрація</Text>

          <TextInput
            style={styles.input}
            placeholder={"Логін"}
            // value={}
          />
          <TextInput
            style={styles.input}
            placeholder={"Адреса електронної пошти"}
            // value={}
          />

          <View>
            <TextInput
              style={styles.input}
              placeholder={"Пароль"}
              secureTextEntry={true}
              // value={}
            />
            <TouchableOpacity style={styles.passwordShow}></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
          <Text style={styles.textLogin}>
            Вже є акаунт?
            </Text>
            <Text style={styles.textLogin}>Увійти</Text>
          
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageScreen: {
    width: "100%",
    height: "100%",
    flex: 1,
    
  },
  containerKey: {
   flex: 1,
     justifyContent: "flex-end",
   },

  containerForm: {
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  input: {
    padding: 16,
    marginTop: 18,
    borderColor: "#F6F6F6",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    width: 343,
    height: 50,
    borderRadius: 10,
  },
  text: {
    marginBottom: 25,
    fontWeight: 500,
    fontSize: 30,
    marginTop: 20,
    fontFamily: "Inter-Black",
    lineHeight: 35,
  },
  btn: {
    marginTop: 50,
    marginBottom: 16,
    width: 343,
    height: 51,
    borderRadius: 100,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
  },
  textBtn: {
    color: "#FFFFFF",
  },
  image: {
    width: 132,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  textLogin: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Inter-Black",
    lineHeight: 19,
  },
  passwordShow: {
    position: "absolute",
    top: 15,
    right: 65,
    transform: [{ translateX: 50 }, { translateY: 17 }],
    fontFamily: "Inter-Black",
  },
});
