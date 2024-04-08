import React, { useState } from "react";
import { SafeAreaView, View, Text, Button, TextInput } from "react-native";
import { styles } from "./assets/styles/main";

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [showCupom, setShowCupom] = useState(false);

  const handleVerifyLogin = async () => {
    setStatus('');
    setShowCupom(false);

    if(email != '' && password != '') {
      const req = await fetch("https://api.b7web.com.br/loginsimples/", {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await req.json();

      if(json.status == 'ok') {
        setStatus('Acesso LIBERADO!');
        setShowCupom(true);
      } else {
        setStatus('Acesso NEGADO!');
        setShowCupom(false);
      }
    } else {
      alert('Preencha os campos.');
    }
    
  }

  return  (

    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>DESCONTO PIZZARIA</Text>

      <TextInput 
        style={styles.input}
        placeholder="Digite seu e-email"
        value={email} 
        onChangeText={t=>setEmail(t)}
        keyboardType="email-address"
      />

      <TextInput 
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={t=>setPassword(t)}
        secureTextEntry={true}
      />

      <Button title="Verificar" onPress={handleVerifyLogin}/> 

      <Text style={styles.status}>{status}</Text>

      {showCupom && 
        <View style={styles.cupomArea}>
          <Text style={styles.cupomTitle}>Código de Cupom:</Text>
          <Text style={styles.cupomCode}>LKH4RAS12</Text>
        </View>
      }

      
    </SafeAreaView>
  );
}

export default App;