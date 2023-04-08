/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_title, _artist, _year, _royaltyPercentage) {
    const NFT = {
        "title": _title,
        "artist": _artist,
        "year": _year,
        "royaltyPercentage": _royaltyPercentage
    }
    NFTs.push(NFT);
    console.log("Minted: \t\t\t\t" + _title);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t\t\t\t" + (i + 1));
        console.log("Art Title: \t\t\t\t" + NFTs[i].title);
        console.log("Artist: \t\t\t\t" + NFTs[i].artist);
        console.log("Year: \t\t\t\t\t" + NFTs[i].year);
        console.log("Royalty Percentage: \t" + NFTs[i].royaltyPercentage);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Minted NFTs: \t\t" + NFTs.length);
}

// call your functions below this line
mintNFT("Galactic Dreams", "Jane Smith", "2023", "10%");
mintNFT("Surreal Landscape", "John Doe", "2022", "5%");
mintNFT("Abstract Composition", "David Kim", "2023", "15%");
listNFTs();
getTotalSupply();
