const Votacion = artifacts.require('Votacion');

let instance;
const b32arr = [web3.utils.asciiToHex('Carolina'), web3.utils.asciiToHex('Mario'), web3.utils.asciiToHex('Leonardo'), web3.utils.asciiToHex('Joaquin')];

beforeEach (async() => {
    instance = await Votacion.new(b32arr);
});

contract('Votacion', accounts => {

    it('should have available candidates', async() => {
        
        // let candidatoUno = await instance.candidateList([0]);
        // let candidatoDos = await instance.candidateList([1]);
        // let candidatoTres = await instance.candidateList([2]);
        // let candidatoCuatro = await instance.candidateList([3]);

        // assert.equal(candidatoUno, web3.utils.asciiToHex('Carolina'));

        let candidato = await instance.candidateList([0]);
        console.log("Primer candidato es " + web3.utils.hexToAscii(candidato));

        let cantidad = await instance.getTotalCandidatesList();
        console.log("cantidad de la propiedad obtenida es: " + cantidad);

        // let total = await instance.candidateList(0).length;
        // console.log("total candidatos: " + total)

        // let candidatos = await instance.candidateList(0);
        // console.log(candidatos[0]);

    });

    it('should add vote to candidate', async() => { 

        await instance.voteForCandidate(web3.utils.asciiToHex('Carolina'), { from: accounts[1] });

        let voteOne = await instance.votesReceived(web3.utils.asciiToHex('Carolina'));
        //console.log("Carolina tiene " + voteOne + " voto/s ");

        assert.equal(voteOne, 1);

    });

    it('should not add vote if the candidate not exist in the list', async() => {

        try{
            await instance.voteForCandidate(web3.utils.asciiToHex('Carlos'), { from: accounts[1] });
        }catch(e) {return;}

        assert.fail();

    });

})