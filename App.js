import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
// import { Dimensions } from 'react-native';
import { useEffect } from 'react';
import { Pressable } from 'react-native';


export default function App() {

const [text, setText] = useState("0");



const [num1, setNum1] = useState("35"); 
const [num2, setNum2] = useState("35"); 
const [equacion, setEquacion] = useState("35");
const [result, setResult] = useState(0);

  const cambiar = (num) =>{ 
    // completo = 0;
    // if(text == 0){
    //   completo = num;
    //   setText(completo);
    // }else if(equacion == 1){
    //   completo = text+""+num;
    //   setText(completo);
    // }else if(equacion == 2){
    //   completo = text+""+num;
    //   setText(completo);
    // }else if(equacion == 3){
    //   completo = text+""+num;
    //   setText(completo);
    // }else if(op == 4){
    //   completo = text+""+num;
    //   setText(completo);
    // }else{
    //   completo = text+""+num;
    //   setText(completo);
    // }
    if(num1 == "35"){
      setText(num);
      setNum1(num);
    }else{
      setText(num);
      setNum2(num);
    }
      
  }

  const operacion = (op) => {
    setEquacion(op);

    // if(num1 == "35"){
    //   setNum1(text);
    // }
    
    if(op == 1){
      setText("+");
    }else if(op == 2){
      setText("-");
    }else if(op == 3){
      setText("x");
    }else if(op == 4){
      setText("/");
    }
  }

  const igual = () => {
    // setNum2(text);

    if(equacion == 1){
      setText(num1 + num2);
    }else if(equacion == 2){
      setText(num1 - num2);
    }else if(equacion == 3){
      setText(num1 * num2);
    }else if(equacion == 4){
      setText(num1 / num2);
    }else if(equacion == "35"){
      setText("No hay ninguna operacion");
    }
  }

  const borrar = () => {
    setText("0");
    setNum1("35");
    setNum2("35");
    setEquacion("35");
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 100,
      justifyContent: 'center',
    },
    texto: {
      border: 1,
      flex: 1,
      fontSize: 200,
    },
    botones:{
      flex: 3,
    },
    numeros1:{
      // flex:2,
      flexDirection: 'row',
    },
    numeros2:{
      // flex:2,
      flexDirection: 'row',  
    },

    numeros3:{
      // flex:2,
      flexDirection: 'row',
    },

    numeros4:{
      // flex:2,
      flexDirection: 'row',
    },

    boton: {
      margin: 5,
      // height: 20,
      backgroundColor: '#73959A',
      borderRadius: 5,
      paddingTop: 5,
    },
    num:{
      fontSize: 20,
      margin: 10,
      border: 1,
      color: 'white',
    },
    operaciones:{
      margin: 5,
      // height: 20,
      backgroundColor: '#4798C6',
      borderRadius: 5,
      paddingTop: 5,
    }
  });

  return (
    <View style={styles.container}>
        <View style={styles.texto}>
          <Text>{text}</Text>
        </View>
        <View style={styles.botones}>
          <View style={styles.numeros1}>
            <Pressable
                style={styles.boton}
                onPress={() => cambiar(1)} 
              >
                <Text style={styles.num}>1</Text>
            </Pressable>
            <Pressable
                style={styles.boton}
                onPress={() => cambiar(2)} 
              >
                <Text style={styles.num}>2</Text>
            </Pressable>
            <Pressable
                style={styles.boton}
                onPress={() => cambiar(3)} 
              >
                <Text style={styles.num}>3</Text>
            </Pressable>
            <Pressable
                style={styles.operaciones}
                onPress={() => operacion(1)} 
              >
                <Text style={styles.num}>+</Text>
            </Pressable>
            </View>

            <View style={styles.numeros2}>
            <Pressable
                style={styles.boton}
                onPress={() => cambiar(4)} 
              >
                <Text style={styles.num}>4</Text>
            </Pressable>
            <Pressable
                style={styles.boton}
                onPress={() => cambiar(5)} 
              >
                <Text style={styles.num}>5</Text>
            </Pressable>
            <Pressable
                style={styles.boton}
                onPress={() => cambiar(6)} 
              >
                <Text style={styles.num}>6</Text>
            </Pressable>
            <Pressable
                style={styles.operaciones}
                onPress={() => operacion(2)} 
              >
                <Text style={styles.num}>-</Text>
            </Pressable>
            </View>

            <View style={styles.numeros3}>
            <Pressable
                style={styles.boton}
                onPress={() => cambiar(7)} 
              >
                <Text style={styles.num}>7</Text>
            </Pressable>
            <Pressable
                style={styles.boton}
                onPress={() => cambiar(8)} 
              >
                <Text style={styles.num}>8</Text>
            </Pressable>
            <Pressable
                style={styles.boton}
                onPress={() => cambiar(9)} 
              >
                <Text style={styles.num}>9</Text>
            </Pressable>
            <Pressable
                style={styles.operaciones}
                onPress={() => operacion(3)} 
              >
                <Text style={styles.num}>X</Text>
            </Pressable>
            </View>

            <View style={styles.numeros4}>
            <Pressable
                style={styles.operaciones}
                onPress={() => borrar()} 
              >
                <Text style={styles.num}>C</Text>
            </Pressable>
            <Pressable
                style={styles.boton}
                onPress={() => cambiar(0)} 
              >
                <Text style={styles.num}>0</Text>
            </Pressable>
            <Pressable
                style={styles.operaciones}
                onPress={() => igual()} 
              >
                <Text style={styles.num}>=</Text>
            </Pressable>
            <Pressable
                style={styles.operaciones}
                onPress={() => operacion(4)} 
              >
                <Text style={styles.num}>/</Text>
            </Pressable>
          </View>
        </View>
    </View>
  );
}