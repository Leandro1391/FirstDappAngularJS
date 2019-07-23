import VotacionContract from "../../build/contracts/Votacion.json";
import contract from "truffle-contract";

export default async(provider) => {
    const votacion = contract(VotacionContract);
    votacion.setProvider(provider);

    let instance = await votacion.deployed();
    return instance;

};