import React, { useState } from 'react'; import { StyleSheet, Text, View, Button } from 'react-native';

const Calculator = () => { const [num1, setNum1] = useState(0); const [num2, setNum2] = useState(0); const [result, setResult] = useState(0);

const add = () => { setResult(num1 + num2); };

const subtract = () => { setResult(num1 - num2); };

const multiply = () => { setResult(num1 * num2); };

const divide = () => { setResult(num1 / num2); };

return ( Calculadora <TextInput style={styles.textInput} placeholder="Número 1" keyboardType="numeric" onChangeText={(text) => setNum1(parseInt(text))} /> <TextInput style={styles.textInput} placeholder="Número 2" keyboardType="numeric" onChangeText={(text) => setNum2(parseInt(text))} /> Resultado: {result} ); };