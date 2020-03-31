/**
 * 0 - Obter um usuario
 * 1 - Obter o numero de telefone de um usuario a partir de seu Is
 * 2 - Obter o endereco do usuario pelo Id
 */

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date(),
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            telefone: '1199002',
            ddd: 11,
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0,
        })
    }, 2000)
}

obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('DEU RUIM em USUARIO', error)
        return
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('DEU RUIM em TELEFONE', error1)
            return
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('DEU RUIM em ENDEREÇO', error2)
                return
            }
            console.log(`
             Nome: ${usuario.nome},
             Endereço: ${endereco.rua} Nº${endereco.numero}
             Telefone: (${telefone.ddd}) ${telefone.telefone}
            `);
        })
    })
})