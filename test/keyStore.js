
require('chai').should();

const cosmos = require('../index.js');

const ADDRESS    = 'lambda163q4m634nq8les4nuvdvz49tk6aeh926t0ccsc';
const BYTES_HEX  = 'd4415dea35980ffcc2b3e31ac154abb6bb9b955a';
const BYTES32_HEX = BYTES_HEX + Buffer.alloc(12).toString('hex');
const PUBLIC_KEY  = '03c5c007170a8b46d7e8ffcaec26a27cf26f7e4fe94ab7f813b98133bc95f3d651';
const bench32Publikey='lambdapub1addwnpepq0zuqpchp295d4lgll9wcf4z0nex7lj0a99t07qnhxqn80y470t9zhrhpn6'

const MNEMONIC    = 'soccer sort make soon family buyer merry dash major winner emerge peace zone drastic yellow sound razor void angry weasel vehicle afford toe sing';
const PRIVATE_KEY = 'd95debc02958f4174a0dd105bfe078ce0961ae0b3a3d5b9d1b51e7d70b3a8ae1';

var password='123456',name='test';
describe('lib/keyStore', () => {
    let bytes;
    let bytes32;
    var keys = cosmos.crypto.getKeysFromMnemonic(MNEMONIC);

    const value = cosmos.keyStore.toJson(keys,password,name);

    var _privateKey = cosmos.keyStore.checkJson(value,password);

    it('Should checkjson and to json name', () => {
        value.name.should.be.equal(name);

    });

    it('Should checkjson and to json ADDRESS', () => {
        value.address.should.be.equal(ADDRESS);
    });



    it('Should checkjson and to json bench32Publikey', () => {
        
        value.publicKey.should.be.equal(bench32Publikey);
       
    });
    it('Should checkjson and to json privateKey', () => {   
        keys.privateKey.toString('base64').should.be.equal(_privateKey.toString('base64'));
    });

    

});