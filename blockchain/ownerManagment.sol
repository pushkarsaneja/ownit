// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OwnerManagment{
    struct Product{
        string name;
        string brand;
        bool theft;
        string description;
        string hash;
        string category;
        address[] customers;
        address owner;
    }

    struct user{
        string name;
        address wallet;
        string role;
    }

    struct transaction{
        address sender;
        address reciever;
        string productHash; 
    }


    // this map is to get the details of the product that is associated with the product
    mapping (string=>Product) productMap;
    // this map is to basically get the details of the product owned by a particular user
    mapping (address=>string []) CurrentlyOwns;
    //adress user ka hashvalue product ki int 
    
    // this map is to basically get the details of user
    mapping(address=>user) userDetails;

    transaction[] history; 


    //Assuming that only manufacturer is adding the product on the portal
    modifier onlyManufacturer{
        require(compareStrings(userDetails[msg.sender].role,"manufacturer"),"Only manufacturer can add the product");
        _;
    }
    


    //compare string function
    function compareStrings(string memory a, string memory b) private pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function addProduct(string memory name,string memory hash, string memory brand, string memory description, string memory category) public onlyManufacturer {
        Product storage currProduct = productMap[hash];
        currProduct.name = name;
        currProduct.hash = hash;
        currProduct.brand = brand;
        currProduct.description = description;
        currProduct.category = category;
        currProduct.customers.push(msg.sender);
        currProduct.owner = msg.sender;
        CurrentlyOwns[msg.sender].push(hash);
    }

    function TransferOwnerShip(address newOwner,string memory hash)public returns(bool){
        // check is current user is holding the ownership or not
        require(msg.sender==productMap[hash].owner,"You are not the right owner of this Product");
        // pass the owner ship to this new owner
        productMap[hash].owner = newOwner;
        // add this owner to maintain the history of owners of this product
        productMap[hash].customers.push(newOwner);
        // add this product to the portfolia of the user

        CurrentlyOwns[newOwner].push(hash);

        // remove from the previous owner
        remove(CurrentlyOwns[msg.sender],hash);

        
        history.push(transaction(msg.sender,newOwner,hash));


         return true;

    }

    function remove(string[] storage array,string memory hash)  internal returns(bool){
        uint length = array.length;
       
        for(uint i=0;i<length-1;i++){
            if(compareStrings(hash,array[i])){
                array[i] = array[i+1];
                array[i+1] = hash;
            }
        }
        delete(array[length-1]);
        return true;
    }


    function reportStolen(string memory productHash) public {
        require(msg.sender==productMap[productHash].owner,"You are not the right owner");
        productMap[productHash].theft = true;
        remove(CurrentlyOwns[msg.sender],productHash);
    }

    function addUser(string memory name,string memory role) public {
        user storage currUser = userDetails[msg.sender];
        currUser.name = name;
        currUser.wallet = msg.sender;
        currUser.role = role;
    }


    function getProductDetails(string memory hash) public view returns(Product memory){
         return productMap[hash];
    }

    function getUserDetails()public view returns(user memory){
        return userDetails[msg.sender];
    }

    function getUserPortFolio() public view returns(string[] memory){
        require(CurrentlyOwns[msg.sender].length>0,"You don't own any product");
        return CurrentlyOwns[msg.sender];
    }

    function returnHistory() public view returns(transaction[] memory){
        return history;
    }


}

