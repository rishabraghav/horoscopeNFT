pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Greetings {
    string greetings;

    constructor(string memory _greetings) {
        greetings = _greetings;
        console.log("your greeting msg is ",greetings);
    }

    function getGreet() public view returns (string memory){
        return greetings;
    }

    function setGreet(string memory _greetings) public {
        greetings = _greetings;
    }
}