pragma solidity ^0.5.17;

import "./ERC1820Client.sol";


contract ExampleClient is ERC1820Client {

    address private owner;

    constructor() public {
        setInterfaceImplementation("ExampleClient", address(this));
        owner = msg.sender;
    }

    function delegateManager() public {
        require(owner == msg.sender, "Not the owner");
        delegateManagement(msg.sender);
    }

}
