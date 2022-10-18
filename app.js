const { GoogleSpreadsheet } = require('google-spreadsheet');
const axios = require('axios').default;
const express = require("express")
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

 async function log(logtype,message,pipe){
    var timedate = new Date()
    var urlLog = 'https://logsapi-production.up.railway.app/'
    var dataLog = JSON.stringify({"logtype": logtype,"message": message,"pipe": pipe,"timedate": timedate
    });
    var sendlog = {method: 'post',url:urlLog,headers: { 'Content-Type': 'application/json'},
        data : dataLog
    };
    axios(sendlog)
    }

const credenciais = require('./credentials.json');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

app.get('/', async (req, res) => {
  res.render("index")
})

app.post('/', async (req, res) => {

  res.send("ok")

const getDoc = async () => {
    const doc = new GoogleSpreadsheet("1yQje7pEE246KJP13Bm-R_qhWKgW2FyIzj8wAB7suPWY");
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}

getDoc().then(async doc => {
    const sheet = doc.sheetsByIndex[0]; 
    const rows = await sheet.getRows();

    for(var i=0;i<10;i++){

    var fullname = rows[i]._rawData[0]
    var firstname = rows[i]._rawData[1]
    var lastname = rows[i]._rawData[2]
    var pet = rows[i]._rawData[3]
    var date_paciente = rows[i]._rawData[4]
    var cpfPaciente = rows[i]._rawData[5]
    var rgPaciente = rows[i]._rawData[6]
    var docPaciente = rows[i]._rawData[7]
    var motivoPaciente = rows[i]._rawData[8]
    var motivoPaciente2 = rows[i]._rawData[9]
    var motivoPaciente3 = rows[i]._rawData[10]
    var receita_medica = rows[i]._rawData[11]
    var laudo = rows[i]._rawData[12]
    var laudo2 = rows[i]._rawData[13]
    var celular = rows[i]._rawData[14]
    var telefone = rows[i]._rawData[15]
    var email = rows[i]._rawData[16]
    var firstnameResponsavel = rows[i]._rawData[17]
    var lastnameResponsavel = rows[i]._rawData[18]
    var genero = rows[i]._rawData[19]
    var genero2 = rows[i]._rawData[20]
    var cpfResponsavel = rows[i]._rawData[21]
    var docPessoal = rows[i]._rawData[22]
    var rgResponsavel = rows[i]._rawData[23]
    var rua = rows[i]._rawData[24]
    var numero = rows[0]._rawData[25]
    var complemento = rows[i]._rawData[26]
    var bairro = rows[i]._rawData[27]
    var cidade = rows[i]._rawData[28]
    var estado = rows[i]._rawData[29]
    var cep = rows[i]._rawData[30]
    var compEndereco = rows[i]._rawData[31]
    var enderecoComplicado = rows[i]._rawData[32]
    var observacoes = rows[i]._rawData[33]
    var ligaCan = rows[i]._rawData[34]
    var conhece = rows[i]._rawData[35]
    var codigo = rows[i]._rawData[36]
    var titulo = rows[i]._rawData[37]
    var status = rows[i]._rawData[38]
    var criador = rows[i]._rawData[39]
    var finalizado = rows[i]._rawData[40]
    var criado = rows[i]._rawData[41]
    var atualizado = rows[i]._rawData[42]
    var expirado = rows[i]._rawData[43]
    var vencido = rows[i]._rawData[44]

      //if(pet == ""){pet = null}

    var options = {
      method: 'POST',
      url: 'https://api.pipefy.com/graphql',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDE5OTU2ODEsImVtYWlsIjoiZmVsaXBlcm9zZW5la0BnbWFpbC5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMTQyMDIwfX0.JugAF92MqbUV_fLVKEcF5jUI3G4G2hlAmLeBJ-dEfsEIlX3gdKO1IfbQRUYvHvAk569vuD9K_zCrKylY6R6agw',
        'Content-Type': 'application/json'
      },
      data: {
        query: 'mutation{ createTableRecord( input: { table_id:302758300 title: "Sync", fields_attributes: [, { field_id: "nome_completo_do_paciente", field_value: "'+fullname+'"}, { field_id: "primeiro_nome_do_paciente", field_value: "'+firstname+'"}, { field_id: "sobrenome_do_paciente", field_value: "'+lastname+'"}, { field_id: "telefone_celular", field_value: "'+celular+'"}, { field_id: "email", field_value: "'+email+'"}, { field_id: "cpf_do_respons_vel", field_value: "'+cpfResponsavel+'"}, { field_id: "o_paciente_pet", field_value: null}, { field_id: "data_de_nascimento_do_paciente", field_value: "'+date_paciente+'"}, { field_id: "cpf_do_paciente", field_value: "'+cpfPaciente+'"}, { field_id: "rg_do_paciente", field_value: "'+rgPaciente+'"}, { field_id: "documentos_pessoais_do_paciente", field_value: "'+docPaciente+'"}, { field_id: "motivo_principal_do_tratamento", field_value: "'+motivoPaciente+'"}, { field_id: "segundo_motivo_do_tratamento", field_value: "'+motivoPaciente+'"}, { field_id: "outros_motivos_do_tratamento", field_value: "'+motivoPaciente+'"}, { field_id: "arquivo_receita_m_dica", field_value: "'+receita_medica+'"}, { field_id: "arquivo_laudo_m_dico", field_value: "'+laudo+'"}, { field_id: "telefone_secund_rio", field_value: "'+telefone+'"}, { field_id: "primeiro_nome_do_respons_vel", field_value: "'+firstnameResponsavel+'"}, { field_id: "sobrenome_do_respons_vel", field_value: "'+lastnameResponsavel+'"}, { field_id: "identidade_de_g_nero", field_value: "'+genero+'"}, { field_id: "g_nero_que_se_identifica", field_value: "'+genero2+'"}, { field_id: "documentos_pessoais_do_respons_vel", field_value: "'+docPessoal+'"}, { field_id: "rg_do_respons_vel", field_value: "'+rgResponsavel+'"}, { field_id: "rua", field_value: "'+rua+'"}, { field_id: "n_mero", field_value: "'+numero+'"}, { field_id: "complemento", field_value: "'+complemento+'"}, { field_id: "bairro", field_value: "'+bairro+'"}, { field_id: "cidade", field_value: "'+cidade+'"}, { field_id: "estado", field_value: null}, { field_id: "cep", field_value: "null"}, { field_id: "comprovante_de_endere_o", field_value: "'+compEndereco+'"}, { field_id: "endere_o_compilado", field_value: "'+enderecoComplicado+'"}, { field_id: "observa_es", field_value: "'+observacoes+'"}, { field_id: "como_voce_conheceu_a_liga_cannabica", field_value: "'+ligaCan+'"}, { field_id: "de_qual_outra_forma_voc_nos_conheceu", field_value: "'+conhece+'"}, { field_id: "contrato", field_value:null} ] } ) { clientMutationId } }'
      }
    };
    
    await axios
      .request(options)
      .then(await delay(300))
      .then(function (response){ 
       
        if(response.data.data.createTableRecord == null){
        console.log("Erro ao cadastrar: "+fullname+ " || "+response.data.errors[0].message);    
          console.log(" ")
       log("error","Erro ao cadastrar: "+fullname+ " || "+response.data.errors[0].message,"Pipefy Importer") 

        }else{
        console.log(fullname+" -> cadastrado com sucesso!");    
          log("sucess",fullname+" -> cadastrado com sucesso!","Pipefy Importer")  
        }
      })
   


}


});

})

app.listen(3000)