// require('dotenv').config();
import axios from 'axios'

const key = "0089e4e6de8f91b89448";
const secret = "094a35db81e05fef7fb132148b7c2a252bd1bda4f01de83e5d5262d4f18b507f";

export const uploadJSONToIPFS = async(JSONBody) => {
    
    console.log("Uploading Json to ipfs");
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making axios POST request to Pinata ⬇️
    return axios 
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
               nft:response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

    });
};

// export const uploadFileToIPFS = async(file,formData,tokenNumer) => {
    
//     const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    
//     //making axios POST request to Pinata ⬇️
//     // console.log(file);
//     let data = new FormData();
//     data.append('file', file);
    
//     const metadata = JSON.stringify({
//         name: formData.productName,
//         description: formData.description,
//     });
//     data.append('pinataMetadata', metadata);
//     data.append('tokenNumber',tokenNumer);
    
//     //pinataOptions are optional
//     const pinataOptions = JSON.stringify({
//         cidVersion: 0,
//         customPinPolicy: {
//             regions: [
//                 {
//                     id: 'FRA1',
//                     desiredReplicationCount: 1
//                 },
//                 {
//                     id: 'NYC1',
//                     desiredReplicationCount: 2
//                 }
//             ]
//         }
//     });
//     data.append('pinataOptions', pinataOptions);

//     for (const pair of data.entries()) {
//         console.log(`${pair[0]}, ${pair[1]}`);
//     }
    
//     // console.log()

    
    
//     return axios.post(url, data, {
//             maxBodyLength: 'Infinity',
//             headers: {
//                 'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
//                 pinata_api_key: key,
//                 pinata_secret_api_key: secret,
//             }
//         })
//         .then(function (response) {
//             console.log("image uploaded", response.data.IpfsHash)
//             return {
//                success: true,
//                pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
//                nft:response.data.IpfsHash
//            };
//         })
//         .catch(function (error) {
//             console.log("gere hggfhgbjhv")
//            console.log(error);
//             return {
//                 success: false,
//                 message: error.message,
//             }
//         });
// };