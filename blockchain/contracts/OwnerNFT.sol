//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract OwnerNFT is ERC721URIStorage{

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    constructor() ERC721("OwnerNFT","OFT"){

    }

    function createToken(string memory tokenURI) public payable returns(uint){
        _tokenIds.increment();
        uint currentTokenId = _tokenIds.current();
        _safeMint(msg.sender, currentTokenId);
        _setTokenURI(currentTokenId, tokenURI);

        return currentTokenId;
    }

    function transferNFT(address from, address to,uint256 tokenId) public payable {
        require(ownerOf(tokenId)==from,"You are not the right owner");
        safeTransferFrom(from, to, tokenId);
    }

    
}
