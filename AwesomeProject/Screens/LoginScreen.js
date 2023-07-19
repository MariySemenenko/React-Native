
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    
    TouchableWithoutFeedback,
 
    ImageBackground,
  } from "react-native";
  
  export const LoginScreen = () => {
  
    return (
      <ImageBackground
        source={require("./images/photo-bg.png")}
        style={styles.imageScreen}
      >
        <TouchableWithoutFeedback >
          <KeyboardAvoidingView
            style={styles.containerKey}
           
          >
            <View style={styles.containerForm}>
              <Text style={styles.text}>Увійти</Text>
  
              <TextInput
                style={styles.input}
                placeholder={"Адреса електронної пошти"}
              />
              <TextInput
                style={styles.input}
                placeholder={"Пароль"}
              />
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>Увійти</Text>
              </TouchableOpacity>
              <Text style={styles.textLog}>
                Немає акаунту?
                <Text
                  style={styles.textLogin}
                >
                  Зареєструватися
                </Text>
              </Text>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    containerKey: {
      flex: 1,
      justifyContent: "flex-end",
    },
    imageScreen: {
      width: "100%",
      height: "100%",
      position: "absolute",
    },
    containerForm: {
      paddingTop: 32,
      paddingBottom: 144,
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
    //   fontFamily: "Inter-Black",
      fontWeight: 500,
      fontSize: 30,
      lineHeight: 35,
    },
    btn: {
      marginTop: 40,
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
    textLogin: {
      color: "#1B4371",
      fontSize: 16,
      textAlign: "center",
      fontFamily: "Inter-Black",
      textDecorationLine: "underline",
    },
    textLog: {
      color: "#1B4371",
      fontSize: 16,
      textAlign: "center",
      fontFamily: "Inter-Black",
    },
  });