import { Text, StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
   <View>
      <Text style={styles.tituloApp}>App Meu Perfil</Text>
        <View style={styles.containerImagem}> 
          <Image
            source={{ uri: 'https://pps.whatsapp.net/v/t61.24694-24/186284269_3020512121538815_7929911417710441617_n.jpg?ccb=11-4&oh=01_AdSGoKE2-tfDIIRPbOX0lFAEvxsVsIiBgATLpstKgmKM4A&oe=64F37817&_nc_cat=101'}}
            style={styles.imagem}
          />
          <Image
            source={{ uri: 'https://pps.whatsapp.net/v/t61.24694-24/315780162_146768414814939_7741490831767363923_n.jpg?ccb=11-4&oh=01_AdS_hhSF-uklDMtZO0oG2y9paiR11T0XVE4WQf9AaDCyFw&oe=64F385B5&_nc_cat=104'}}
            style={styles.imagem}
          />
          <Image
            source={{ uri: 'https://pps.whatsapp.net/v/t61.24694-24/357705095_1281903009103986_3067488585589852832_n.jpg?ccb=11-4&oh=01_AdRWer-aX9c7BDiNwUIvEjoLP6tju6b5qkALznt6EU3nlA&oe=64F356C4&_nc_cat=108'}}
            style={styles.imagem}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.titulo}>Dados Pessoais:</Text>
            <Text>
              <Text style={styles.nome}>Nome: </Text>
                   Tassiana Sgarbi Frazão da Silva {'\n'}
                {/*Idade: 35 anos {'\n'}
                Estado Civil: Namorando {'\n'}
                {'\n'}*/}

              <Text style={styles.nome}>Nome: </Text>
                   Alexandra Aparecida da Costa {'\n'}
                {/*Idade: 47 anos {'\n'}
                Estado Civil: Solteira {'\n'}*/}

              <Text style={styles.nome}>Nome: </Text>
                   Isabella Cruz de Oliveira {'\n'}
                {/*Idade: 19 anos {'\n'}
                Estado Civil: Solteira {'\n'}*/}
            
            {'\n'}
            </Text>

          <Text style={styles.titulo}>Formacao:</Text>
            <Text>
                  - Graduando em Analise e Desenvolvimento de Sistemas {'\n'}
              {'\n'}       
            </Text>
            
          <Text style={styles.titulo}>Experiencia:</Text>
            <Text>
                - Atua na area Tributaria e Societaria há certa de 17 anos. {'\n'}
                - Atua no setor publico na Area Administrativa e RH há 10 anos. {'\n'}
                - Atua na área de Desenvolvimento Web a 11 meses. {'\n'}
            {'\n'}
            </Text>
            
          <Text style={styles.titulo}>Projetos:</Text>
            <Text> 
                - Implantação de sistemas contábeis com diversos programas como: TOTVS Protheus e Sankhya. {'\n'}
                - Implementação de um sitema de Gerencimaneto de Usinas de Asflato na cidade de Santos. {'\n'}
                  - Criação de um E-commerce fictício. {'\n'}

            </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  tituloApp: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    overflow: 'auto'
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imagem: {
    width: 50,
    height: 50
  }, 
  containerImagem: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  nome: {
    fontWeight: 'bold'
  }
});
