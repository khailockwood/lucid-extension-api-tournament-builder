import {DocumentProxy, EditorClient, Menu, MenuType, Viewport, PageProxy, BlockProxy, Modal, FileUploadData, ModalConfig, JsonSerializable, TextMarkupNames} from 'lucid-extension-sdk';
const client = new EditorClient();
const menu = new Menu(client);
const viewport = new Viewport(client);
const document = new DocumentProxy(client);


let resultArray=[""];
class CustomBracketModal extends Modal {
    constructor(client: EditorClient) {
        super(client, {
            title: 'Custom Bracket',
            width: 700,
            height: 500,
            url: 'customModal.html',
        });
    }
    protected messageFromFrame(message: []) {
        //console.log(message);
        const stringMessage = JSON.stringify(message);
        //console.log(stringMessage);
        function extractMessageArray(jsonString: string): string[] {
            try {
                const jsonObj = JSON.parse(jsonString);
                if (Array.isArray(jsonObj.messageArray)) {
                    return jsonObj.messageArray;
                } else {
                    throw new Error("The key 'messageArray' is not an array.");
                }
            } catch (error) {
                console.error("Failed to parse JSON string:", error);
                return [];
            }
        }
        resultArray = extractMessageArray(stringMessage);
        //console.log(resultArray);
        if ((JSON.stringify(message)[2]) === "m") {
            this.hide();
           CreateCustomBracket();
    } else if ((JSON.stringify(message)[2]) == "c") {
            this.hide();
            console.log('cancel') 
    }
}
}

async function ShowCustomBracketModal(){
    const modal = new CustomBracketModal(client);
    modal.show();
}


async function CreateCustomBracket () {
    const dataArray=resultArray;
    console.log(dataArray);
    const reorderedArray: any[] = [];

    if (dataArray.length == 128) { // reordering for size 64 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[126], dataArray[127], // 64th seed and team name
            dataArray[62], dataArray[63], // 32nd seed and team name
            dataArray[64], dataArray[65], // 33rd seed and team name
            dataArray[30], dataArray[31], // 16th seed and team name
            dataArray[96], dataArray[97], // 49th seed and team name
            dataArray[32], dataArray[33], // 17th seed and team name
            dataArray[94], dataArray[95], // 48th seed and team name
            dataArray[14], dataArray[15], // 8th seed and team name
            dataArray[112], dataArray[113], // 57th seed and team name
            dataArray[48], dataArray[49], // 25th seed and team name
            dataArray[78], dataArray[79], // 40th seed and team name
            dataArray[16], dataArray[17], // 9th seed and team name
            dataArray[110], dataArray[111], // 56th seed and team name
            dataArray[46], dataArray[47], // 24th seed and team name
            dataArray[80], dataArray[81], // 41st seed and team name
            dataArray[6], dataArray[7], // 4th seed and team name
            dataArray[120], dataArray[121], // 61st seed and team name
            dataArray[56], dataArray[57], // 29th seed and team name
            dataArray[70], dataArray[71], // 36th seed and team name
            dataArray[24], dataArray[25], // 13th seed and team name
            dataArray[102], dataArray[103], // 52nd seed and team name
            dataArray[38], dataArray[39], // 20th seed and team name
            dataArray[88], dataArray[89], // 45th seed and team name
            dataArray[8], dataArray[9], // 5th seed and team name
            dataArray[118], dataArray[119], // 60th seed and team name
            dataArray[54], dataArray[55], // 28th seed and team name
            dataArray[72], dataArray[73], // 37th seed and team name
            dataArray[22], dataArray[23], // 12th seed and team name
            dataArray[104], dataArray[105], // 53rd seed and team name
            dataArray[40], dataArray[41], // 21st seed and team name
            dataArray[86], dataArray[87], // 44nd seed and team name
            dataArray[2], dataArray[3], // 2nd seed and team name
            dataArray[124], dataArray[125], // 63rd seed and team name
            dataArray[60], dataArray[61], // 31st seed and team name
            dataArray[66], dataArray[67], // 34th seed and team name
            dataArray[28], dataArray[29], // 15th seed and team name
            dataArray[98], dataArray[99], // 50th seed and team name
            dataArray[34], dataArray[35], // 18th seed and team name
            dataArray[92], dataArray[93], // 47th seed and team name
            dataArray[12], dataArray[13], // 7th seed and team name
            dataArray[114], dataArray[115], // 58th seed and team name
            dataArray[50], dataArray[51], // 26th seed and team name
            dataArray[76], dataArray[77], // 39th seed and team name
            dataArray[18], dataArray[19], // 10th seed and team name
            dataArray[108], dataArray[109], // 55thseed and team name
            dataArray[44], dataArray[45], // 23rd seed and team name
            dataArray[82], dataArray[83], // 42nd seed and team name
            dataArray[4], dataArray[5], // 3rd seed and team name
            dataArray[122], dataArray[123], // 62nd seed and team name
            dataArray[58], dataArray[59], // 30th seed and team name
            dataArray[68], dataArray[69], // 35th seed and team name
            dataArray[26], dataArray[27], // 14th seed and team name
            dataArray[100], dataArray[101], // 51st seed and team name
            dataArray[36], dataArray[37], // 19th seed and team name
            dataArray[90], dataArray[91], // 46th seed and team name
            dataArray[10], dataArray[11], // 6th seed and team name
            dataArray[58], dataArray[59], // 59th seed and team name
            dataArray[52], dataArray[53], // 27nd seed and team name
            dataArray[74], dataArray[75], // 38th seed and team name
            dataArray[10], dataArray[21], // 11th seed and team name
            dataArray[106], dataArray[107], // 54th seed and team name
            dataArray[42], dataArray[43], // 22nd seed and team name
            dataArray[84], dataArray[85], // 43rd seed and team name
        );
        console.log('size 64');
    }

    if (dataArray.length == 64) { // reordering for size 32 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[62], dataArray[63], // 32nd seed and team name
            dataArray[30], dataArray[31], // 16th seed and team name
            dataArray[32], dataArray[33], // 17th seed and team name
            dataArray[16], dataArray[17], // 9th seed and team name
            dataArray[46], dataArray[47], // 24th seed and team name
            dataArray[14], dataArray[15], // 8th seed and team name
            dataArray[48], dataArray[49], // 25th seed and team name
            dataArray[6], dataArray[7], // 4th seed and team name
            dataArray[56], dataArray[57], // 29th seed and team name
            dataArray[24], dataArray[25], // 13th seed and team name
            dataArray[38], dataArray[39], // 20th seed and team name
            dataArray[22], dataArray[23], // 12th seed and team name
            dataArray[40], dataArray[41], // 21st seed and team name
            dataArray[8], dataArray[9], // 5th seed and team name
            dataArray[54], dataArray[55], // 28th seed and team name
            dataArray[2], dataArray[3], // 2nd seed and team name
            dataArray[60], dataArray[61], // 31th seed and team name
            dataArray[28], dataArray[29], // 15th seed and team name
            dataArray[34], dataArray[35], // 18th seed and team name
            dataArray[18], dataArray[19], // 10th seed and team name
            dataArray[44], dataArray[45], // 23rd seed and team name
            dataArray[12], dataArray[13], // 7th seed and team name
            dataArray[50], dataArray[51], // 26th seed and team name
            dataArray[4], dataArray[5], // 3rd seed and team name
            dataArray[58], dataArray[59], // 30th seed and team name
            dataArray[26], dataArray[27], // 14th seed and team name
            dataArray[36], dataArray[37], // 19th seed and team name
            dataArray[20], dataArray[21], // 11th seed and team name
            dataArray[42], dataArray[43], // 22nd seed and team name
            dataArray[10], dataArray[11], // 6th seed and team name
            dataArray[52], dataArray[53], // 27th seed and team name
        );  
        console.log('size 32');
    }

    if(dataArray.length == 32) {// reordering for size 16 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[30], dataArray[31], // 16th seed and team name
            dataArray[14], dataArray[15], // 8th seed and team name
            dataArray[16], dataArray[17], // 9th seed and team name
            dataArray[8], dataArray[9], // 5th seed and team name
            dataArray[22], dataArray[23], // 12th seed and team name
            dataArray[6], dataArray[7], // 4th seed and team name
            dataArray[24], dataArray[25], // 13th seed and team name
            dataArray[10], dataArray[11], // 6th seed and team name
            dataArray[20], dataArray[21], // 11th seed and team name
            dataArray[4], dataArray[5], // 3rd seed and team name
            dataArray[26], dataArray[27], // 14th seed and team name
            dataArray[12], dataArray[13], // 7th seed and team name
            dataArray[18], dataArray[19], // 10th seed and team name
            dataArray[2], dataArray[3], // 2nd seed and team name
            dataArray[28], dataArray[29] // 15th seed and team name
            ); 
            console.log('size 16');
       }
       if(dataArray.length == 16) {// reordering for size 8 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[14], dataArray[15], // 8th seed and team name
            dataArray[6], dataArray[7], // 4th seed and team name
            dataArray[8], dataArray[9], // 5th seed and team name
            dataArray[4], dataArray[5], // 3rd seed and team name
            dataArray[10], dataArray[11], // 6th seed and team name
            dataArray[2], dataArray[3], // 2th seed and team name
            dataArray[12], dataArray[13], // 7th seed and team name
            ); 
            console.log('size 8');
       }
       if(dataArray.length == 8) {// reordering for size 4 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[6], dataArray[7], // 4th seed and team name
            dataArray[2], dataArray[3], // 2nd seed and team name
            dataArray[4], dataArray[5], // 3rd seed and team name
            ); 
            console.log('size 4');
       }
       if(dataArray.length == 4) {// reordering for size 2 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[2], dataArray[3], // 2nd seed and team name
            ); 
            console.log('size 2');
       }

       // console.log(reorderedArray)

    let yDiff = 0; 
    let size = (reorderedArray.length)/2;
    let numSections = Math.log2(size);
    
        const page = document.addPage({title: 'Bracket'});
        viewport.setCurrentPage(page);
        const {x, y} = viewport.getVisibleRect();
    
        let yOffset: number[], xOffsets: number[], yDiffIncrements: number[];

        
        
        switch(size) {
            case 64:
                yOffset = [0, 90, 200, 480, 940, 2010, 980];
                xOffsets = [0, 400, 800, 1200, 1600, 2000, 2500];
                yDiffIncrements = [110, 300, 680, 1435, 2980, 1000];
                break;
            case 32:
                yOffset = [0, 90, 200, 480, 940, 525];
                xOffsets = [0, 400, 800, 1200, 1600, 2000];
                yDiffIncrements = [110, 300, 680, 1435, 1000];
                break;
            case 16:
                yOffset = [0, 90, 200, 480, 250];
                xOffsets = [0, 400, 800, 1200, 1600];
                yDiffIncrements = [110, 300, 680, 1000];
                break;
            case 8:
                yOffset = [0, 90, 200, 140];
                xOffsets = [0, 400, 800, 1200];
                yDiffIncrements = [110, 300, 680, 1000];
                break;
            case 4:
                yOffset = [0, 90, 45];
                xOffsets = [0, 400, 800];
                yDiffIncrements = [110, 300, 680];
                break;
            case 2:
                yOffset = [0, 45];
                xOffsets = [0, 400];
                yDiffIncrements = [110];
                break;
            default:
                yOffset = [];
                xOffsets = [];
                yDiffIncrements = [];
                break;
        }
        
        const customBlockDef = await client.getCustomShapeDefinition('test', 'first');
        let blockReferences: BlockProxy[]
        blockReferences = [];
                        
        if (customBlockDef) {
            console.log("custom shape loaded")

        }
        if (!customBlockDef) {
            console.log("custom shape not loaded")
            return;

        }
        
        for (let j = 0; j < numSections + 1; j++) {
            let xOffset = xOffsets[j];

            for (let i = 1; i <= size / (2 ** j); i++) {
                const blockText = (j === 0) ? `${reorderedArray[(i-1) * 2]} - ${reorderedArray[(i-1) * 2 + 1]}` : "TBD";

                    customBlockDef.boundingBox.x = x + xOffset;
                    customBlockDef.boundingBox.y = y + yDiff + yOffset[j];
                
                    const customBlock = page.addBlock(customBlockDef);
                    const textAreaName = customBlock.textAreas.keys()[0];
                    customBlock.textAreas.set(textAreaName, blockText);

                    blockReferences.push(customBlock)
                
                if (i % 2 == 0) {
                    yDiff += yDiffIncrements[j];
                } else {
                    yDiff += 80;
                }
            }
            yDiff = yOffset[j];
        } {

        function connectBracketBlocks() {
            let index = 0; // Starting index of the current round in blockReferences
            let totalBlocks = blockReferences.length;
            let numBlocksInCurrentRound = size; 
        
            // Ensure the first round size is valid and calculate total blocks correctly
            while (index + numBlocksInCurrentRound <= totalBlocks) {
                let nextRoundIndex = index + numBlocksInCurrentRound;  // Start index of the next round
                let numBlocksInNextRound = numBlocksInCurrentRound / 2;
        
                // Connect every second block in the current round to one block in the next round
                for (let i = 0; i < numBlocksInCurrentRound; i += 2) {
                    if (index + i + 1 < nextRoundIndex && nextRoundIndex + i / 2 < totalBlocks) {
                        connectBlocks(blockReferences[index + i + 1], blockReferences[nextRoundIndex + i / 2]);
                    }
                }
        
                // Move to the next round
                index = nextRoundIndex;
                numBlocksInCurrentRound = numBlocksInNextRound;
            }
        }
        
        connectBracketBlocks();
} 
}
async function setWinner (block: BlockProxy) {
    for (const ta of block.textAreas.keys()) {
        const oldStyle = block.textStyles.get(ta);
        await block.textStyles.set(ta, {
            [TextMarkupNames.Bold]: !oldStyle[TextMarkupNames.Bold],
        });
    }
}

function connectBlocks(block1: BlockProxy, block2: BlockProxy) {
    block1.getPage().addLine({
        endpoint1: {
            connection: block1,
            linkX: 1, // right side block 1
            linkY: 0,
        },
        endpoint2: {
            connection: block2,
            linkX: 0, // left side block 2
            linkY: 0.5,
        },
    });
}


async function CreateBracketWithCSV (files: FileUploadData[]) {
   // console.log(files);
   let fileString = "";
    for (const file of files) {
        fileString += (file.fileName);
        fileString += (file.text);
    } 
    const lines = fileString.trim().split('\n');


    // Initialize an array to store the data
    const dataArray = [];

    // Loop through each line starting from index 1 to skip the header
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim().split(',');
        const seed = parseInt(line[0]);
        const teamName = line[1];

        // Push seed and team name pairs into the array
        dataArray.push(seed, teamName);
    }
    // console.log(dataArray);
    const reorderedArray: any[] = [];

    if (dataArray.length == 128) { // reordering for size 64 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[126], dataArray[127], // 64th seed and team name
            dataArray[62], dataArray[63], // 32nd seed and team name
            dataArray[64], dataArray[65], // 33rd seed and team name
            dataArray[30], dataArray[31], // 16th seed and team name
            dataArray[96], dataArray[97], // 49th seed and team name
            dataArray[32], dataArray[33], // 17th seed and team name
            dataArray[94], dataArray[95], // 48th seed and team name
            dataArray[14], dataArray[15], // 8th seed and team name
            dataArray[112], dataArray[113], // 57th seed and team name
            dataArray[48], dataArray[49], // 25th seed and team name
            dataArray[78], dataArray[79], // 40th seed and team name
            dataArray[16], dataArray[17], // 9th seed and team name
            dataArray[110], dataArray[111], // 56th seed and team name
            dataArray[46], dataArray[47], // 24th seed and team name
            dataArray[80], dataArray[81], // 41st seed and team name
            dataArray[6], dataArray[7], // 4th seed and team name
            dataArray[120], dataArray[121], // 61st seed and team name
            dataArray[56], dataArray[57], // 29th seed and team name
            dataArray[70], dataArray[71], // 36th seed and team name
            dataArray[24], dataArray[25], // 13th seed and team name
            dataArray[102], dataArray[103], // 52nd seed and team name
            dataArray[38], dataArray[39], // 20th seed and team name
            dataArray[88], dataArray[89], // 45th seed and team name
            dataArray[8], dataArray[9], // 5th seed and team name
            dataArray[118], dataArray[119], // 60th seed and team name
            dataArray[54], dataArray[55], // 28th seed and team name
            dataArray[72], dataArray[73], // 37th seed and team name
            dataArray[22], dataArray[23], // 12th seed and team name
            dataArray[104], dataArray[105], // 53rd seed and team name
            dataArray[40], dataArray[41], // 21st seed and team name
            dataArray[86], dataArray[87], // 44nd seed and team name
            dataArray[2], dataArray[3], // 2nd seed and team name
            dataArray[124], dataArray[125], // 63rd seed and team name
            dataArray[60], dataArray[61], // 31st seed and team name
            dataArray[66], dataArray[67], // 34th seed and team name
            dataArray[28], dataArray[29], // 15th seed and team name
            dataArray[98], dataArray[99], // 50th seed and team name
            dataArray[34], dataArray[35], // 18th seed and team name
            dataArray[92], dataArray[93], // 47th seed and team name
            dataArray[12], dataArray[13], // 7th seed and team name
            dataArray[114], dataArray[115], // 58th seed and team name
            dataArray[50], dataArray[51], // 26th seed and team name
            dataArray[76], dataArray[77], // 39th seed and team name
            dataArray[18], dataArray[19], // 10th seed and team name
            dataArray[108], dataArray[109], // 55thseed and team name
            dataArray[44], dataArray[45], // 23rd seed and team name
            dataArray[82], dataArray[83], // 42nd seed and team name
            dataArray[4], dataArray[5], // 3rd seed and team name
            dataArray[122], dataArray[123], // 62nd seed and team name
            dataArray[58], dataArray[59], // 30th seed and team name
            dataArray[68], dataArray[69], // 35th seed and team name
            dataArray[26], dataArray[27], // 14th seed and team name
            dataArray[100], dataArray[101], // 51st seed and team name
            dataArray[36], dataArray[37], // 19th seed and team name
            dataArray[90], dataArray[91], // 46th seed and team name
            dataArray[10], dataArray[11], // 6th seed and team name
            dataArray[58], dataArray[59], // 59th seed and team name
            dataArray[52], dataArray[53], // 27nd seed and team name
            dataArray[74], dataArray[75], // 38th seed and team name
            dataArray[10], dataArray[21], // 11th seed and team name
            dataArray[106], dataArray[107], // 54th seed and team name
            dataArray[42], dataArray[43], // 22nd seed and team name
            dataArray[84], dataArray[85], // 43rd seed and team name
        );
        console.log('size 64');
    }

    if (dataArray.length == 64) { // reordering for size 32 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[62], dataArray[63], // 32nd seed and team name
            dataArray[30], dataArray[31], // 16th seed and team name
            dataArray[32], dataArray[33], // 17th seed and team name
            dataArray[16], dataArray[17], // 9th seed and team name
            dataArray[46], dataArray[47], // 24th seed and team name
            dataArray[14], dataArray[15], // 8th seed and team name
            dataArray[48], dataArray[49], // 25th seed and team name
            dataArray[6], dataArray[7], // 4th seed and team name
            dataArray[56], dataArray[57], // 29th seed and team name
            dataArray[24], dataArray[25], // 13th seed and team name
            dataArray[38], dataArray[39], // 20th seed and team name
            dataArray[22], dataArray[23], // 12th seed and team name
            dataArray[40], dataArray[41], // 21st seed and team name
            dataArray[8], dataArray[9], // 5th seed and team name
            dataArray[54], dataArray[55], // 28th seed and team name
            dataArray[2], dataArray[3], // 2nd seed and team name
            dataArray[60], dataArray[61], // 31th seed and team name
            dataArray[28], dataArray[29], // 15th seed and team name
            dataArray[34], dataArray[35], // 18th seed and team name
            dataArray[18], dataArray[19], // 10th seed and team name
            dataArray[44], dataArray[45], // 23rd seed and team name
            dataArray[12], dataArray[13], // 7th seed and team name
            dataArray[50], dataArray[51], // 26th seed and team name
            dataArray[4], dataArray[5], // 3rd seed and team name
            dataArray[58], dataArray[59], // 30th seed and team name
            dataArray[26], dataArray[27], // 14th seed and team name
            dataArray[36], dataArray[37], // 19th seed and team name
            dataArray[20], dataArray[21], // 11th seed and team name
            dataArray[42], dataArray[43], // 22nd seed and team name
            dataArray[10], dataArray[11], // 6th seed and team name
            dataArray[52], dataArray[53], // 27th seed and team name
        );  
        console.log('size 32');
    }

    if(dataArray.length == 32) {// reordering for size 16 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[30], dataArray[31], // 16th seed and team name
            dataArray[14], dataArray[15], // 8th seed and team name
            dataArray[16], dataArray[17], // 9th seed and team name
            dataArray[8], dataArray[9], // 5th seed and team name
            dataArray[22], dataArray[23], // 12th seed and team name
            dataArray[6], dataArray[7], // 4th seed and team name
            dataArray[24], dataArray[25], // 13th seed and team name
            dataArray[10], dataArray[11], // 6th seed and team name
            dataArray[20], dataArray[21], // 11th seed and team name
            dataArray[4], dataArray[5], // 3rd seed and team name
            dataArray[26], dataArray[27], // 14th seed and team name
            dataArray[12], dataArray[13], // 7th seed and team name
            dataArray[18], dataArray[19], // 10th seed and team name
            dataArray[2], dataArray[3], // 2nd seed and team name
            dataArray[28], dataArray[29] // 15th seed and team name
            ); 
            console.log('size 16');
       }
       if(dataArray.length == 32) {// reordering for size 8 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[14], dataArray[15], // 8th seed and team name
            dataArray[6], dataArray[7], // 4th seed and team name
            dataArray[8], dataArray[9], // 5th seed and team name
            dataArray[4], dataArray[5], // 3rd seed and team name
            dataArray[10], dataArray[11], // 6th seed and team name
            dataArray[2], dataArray[3], // 2th seed and team name
            dataArray[12], dataArray[13], // 7th seed and team name
            ); 
            console.log('size 8');
       }
       if(dataArray.length == 8) {// reordering for size 4 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[6], dataArray[7], // 4th seed and team name
            dataArray[2], dataArray[3], // 2nd seed and team name
            dataArray[4], dataArray[5], // 3rd seed and team name
            ); 
            console.log('size 4');
       }
       if(dataArray.length == 4) {// reordering for size 2 bracket
        reorderedArray.push(
            dataArray[0], dataArray[1], // 1st seed and team name
            dataArray[2], dataArray[3], // 2nd seed and team name
            ); 
            console.log('size 2');
       }


    console.log(reorderedArray);

    let yDiff = 0; 
    let size = (dataArray.length)/2;
    let numSections = Math.log2(size);
    
    if (await client.confirm(`Bracket size is set to ${size}, do you want to create a new page with a ${size}-team bracket?`, "Bracket Size", 'Yes', 'No')) {
        const page = document.addPage({title: 'Bracket'});
        viewport.setCurrentPage(page);
        const {x, y} = viewport.getVisibleRect();
    
        let yOffset: number[], xOffsets: number[], yDiffIncrements: number[];
        
        switch(size) {
            case 64:
                yOffset = [0, 90, 200, 480, 940, 2010, 980];
                xOffsets = [0, 400, 800, 1200, 1600, 2000, 2500];
                yDiffIncrements = [110, 300, 680, 1435, 2980, 1000];
                break;
            case 32:
                yOffset = [0, 90, 200, 480, 940, 525];
                xOffsets = [0, 400, 800, 1200, 1600, 2000];
                yDiffIncrements = [110, 300, 680, 1435, 1000];
                break;
            case 16:
                yOffset = [0, 90, 200, 480, 250];
                xOffsets = [0, 400, 800, 1200, 1600];
                yDiffIncrements = [110, 300, 680, 1000];
                break;
            case 8:
                yOffset = [0, 90, 200, 140];
                xOffsets = [0, 400, 800, 1200];
                yDiffIncrements = [110, 300, 680, 1000];
                break;
            case 4:
                yOffset = [0, 90, 45];
                xOffsets = [0, 400, 800];
                yDiffIncrements = [110, 300, 680];
                break;
            case 2:
                yOffset = [0, 45];
                xOffsets = [0, 400];
                yDiffIncrements = [110];
                break;
            default:
                yOffset = [];
                xOffsets = [];
                yDiffIncrements = [];
                break;
        }


        
        
        const customBlockDef = await client.getCustomShapeDefinition('test', 'first');
        if (customBlockDef) {
            console.log("custom shape loaded")

        }
        if (!customBlockDef) {
            console.log("custom shape not loaded")
            return;

        }
        let blockReferences: BlockProxy[]
        blockReferences = [];
        
        for (let j = 0; j < numSections + 1; j++) {
            let xOffset = xOffsets[j];

            for (let i = 1; i <= size / (2 ** j); i++) {
                const blockText = (j === 0) ? `${reorderedArray[(i-1) * 2]} - ${reorderedArray[(i-1) * 2 + 1]}` : "TBD";
                
                    customBlockDef.boundingBox.x = x + xOffset;
                    customBlockDef.boundingBox.y = y + yDiff + yOffset[j];
                
                    const customBlock = page.addBlock(customBlockDef);
                    const textAreaName = customBlock.textAreas.keys()[0];
                    customBlock.textAreas.set(textAreaName, blockText);

                    
                    blockReferences.push(customBlock)
                
                if (i % 2 == 0) {
                    yDiff += yDiffIncrements[j];
                } else {
                    yDiff += 80;
                }
            }
            yDiff = yOffset[j];
        } 
        function connectBracketBlocks() {
            let index = 0; // Starting index of the current round in blockReferences
            let totalBlocks = blockReferences.length;
            let numBlocksInCurrentRound = size; // Size of the first round, assumed to be provided
        
            // Ensure the first round size is valid and calculate total blocks correctly
            while (index + numBlocksInCurrentRound <= totalBlocks) {
                let nextRoundIndex = index + numBlocksInCurrentRound;  // Start index of the next round
                let numBlocksInNextRound = numBlocksInCurrentRound / 2;
        
                // Connect every second block in the current round to one block in the next round
                for (let i = 0; i < numBlocksInCurrentRound; i += 2) {
                    if (index + i + 1 < nextRoundIndex && nextRoundIndex + i / 2 < totalBlocks) {
                        connectBlocks(blockReferences[index + i + 1], blockReferences[nextRoundIndex + i / 2]);
                    }
                }
        
                // Move to the next round
                index = nextRoundIndex;
                numBlocksInCurrentRound = numBlocksInNextRound;
            }
        }
        
        connectBracketBlocks();
} 
}

    client.registerAction('custom-bracket', async () => {
        ShowCustomBracketModal();
    });
    client.registerFileUploadAction('create-bracket', async (files: FileUploadData[]) => {
        CreateBracketWithCSV(files);
    });
    


    async function init() {
        const menu = new Menu(client);
        menu.addDropdownMenuItem({
            label: 'Create bracket with CSV file',
            file: {
                action: 'create-bracket',
                accept: 'text/csv',
                singleFileOnly: true,
                binary: true,
            },
        });
        menu.addDropdownMenuItem({
            label: 'Create bracket with user input',
            action: 'custom-bracket',
        });
    }
    init();
