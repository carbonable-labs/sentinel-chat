import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);




const generateAction = async (req, res) => {

// prompt pre setup
  const secondPrompt = 
    `
    source: https://carbonable.io/
    source: https://carbonable.notion.site/CarbonABLE-Lite-Paper-82bda161f3594964931b2be7d84429ff
    source: https://carbonable.medium.com/carbon-removal-projects-and-carbon-credits-uncovering-the-financing-behind-nature-based-solutions-ee76fcb5b29a
    question: What is Carbonable ?
    answer: A project that enables decarbonization projects and real-life impact through DeFi and NFT, while providing investors ongoing financial reward
    question: What is Carbonable ?
    answer: A project that enables decarbonization projects and real-life impact through DeFi and NFT, while providing investors ongoing financial reward
    question: I want to know more/ have more informations on Carbonable
    answer: If you are interested in the project, the best place to start is the LitePaper : https://bit.ly/3D125VX
    You can also check these videos:
    - 3 min presentation video : https://www.youtube.com/watch?v=5dZrROBmfKU&ab_channel=Carbonable
    - [FR] Presentation Video in French : https://www.youtube.com/watch?v=bkdL0SXu9ro&t=1s
    question: What are Carbonable useful links ?
    answer: Website: https://carbonable.io/
    Litepaper : https://bit.ly/3EykyZe
    Twitter: https://twitter.com/Carbonable_io
    Medium: https://medium.com/@carbonable
    LinkedIn: https://www.linkedin.com/company/carbonable/
    Crew3 : https://carbonable.crew3.xyz/    
    question: Why is Carbonable necessary ?
    answer: We need to reduce carbon emission, need to increase carbon capture and we must regenerate nature
    question: What challenges does Carbonable solve with natural assets?
    answer: Funding project not agile enough / lack of transparency
    question: How does Carbonable Work?
    answer: 1. Carbonable identifies the best carbon removal projects
    2. An NFT collection is created for each project and sold on Launchpad
    3. Once project is financed, Carbonable receives CC
    4. Carbonable gets the best value out of the CC
    5. By farming their NFTs, holders get yield in stablecoin
    6. Cutting-edge monitoring enables traceability and personalized impact reports
    question: What are the major things you get as a Carbonable NFT Holders?
    answer: A real world backed daily financial rewards in Stablecoin, a future utility token ($Carbz) and a positive impact on environment
    question: What are the three primary natural carbon sinks?
    answer: Oceans, soil, and forests
    question: What are the major problems Carbonable solves?
    answer: Carbonable's blockchain technology and value proposition radically address the structural problems of carbon credits for much more transparency, traceability, trust and quality. 
    Transparency: 
      - Intrinsic to the blockchain, with Starknet (Ethereum Layer 2).
      - Availability of due diligence documents.
      - Clear commission %.
    Traceability : On-chain and off-chain. 
      - Partnerships with audit organizations
      - Impact reports
      - Study underway to use ZK technology to prove off-chain transactions and carbon credit movements (currently centralized in certified registries).
    Trust: 
      - Starknet = ZK rollup = trustless. Information verifiable by all. No need to "believe" the other parties.
    Quality: 
     - Only high-end, nature-based projects with strict selection criterias.
     - A certifier with a strong added value on the selection, verification and guarantee processes.
     - Positive social impact + minimum 3 SDG/project.
    question: Which Sustainable Development Goals (SDGs) Carbonable often covers?
    answer: Climate action, life on land, life below water, decent work and economic growth.
    question: How Carbonable is not a greenwashing project?
    answer: Carbonable's blockchain technology and value proposition radically address the greenwashing structural problems of carbon credits for much more transparency, traceability, trust and quality.
    question: On which blockchain is Carbonable currently developed onto?
    answer: Starknet
    question: Why Carbonable chose Starknet?
    answer: - Ethereum being POS after The Merge, which make the consensus eco-friendly, in line with Carbonable values.
    - Having a bigger community on Starknet, both for users and devs.
    - Next months/years attraction will be on L2s, and thus on projects within these L2s.
    question: Have the smart contracts been audited?
    answer: At this stage, the smart contracts have been peer-reviewed by several experienced devs (including Abdelhamid Bakhta, Ethereum & Cosmos champion co author EIP-1559). Eventually, the smart contracts will be audited by a specialized auditing company.
    question: Where can I learn about how the carbon credits are sold?
    answer: See the roadmap on https://airtable.com/shrr45aBMh4pFeyHA/tblugTDiuOU3Am7oq
    question: How long does it take to get the carbon credits?
    answer: The first carbon credits will be issued 6 months after the start of the project on a linear basis for 20 years (potentially more for other projects)
    question: Why sell carbon credits gradually?
    answer: The market price of carbon credits is variable. For each project, our purchase price of credits is a constant. Our purchase price for carbon credits increases over the years. The advantage of this solution is to follow the real carbon absorption cycle of the project and to stick as much as possible to the reality of nature. Moreover, assuming that the price of the carbon credit increases each year, it is also more profitable in the long term to sell the carbon credit as an investor.
    question: You should not sell carbon credit assets, only stop emissions (a mettre en question)
    answer: Without returns, the project would not be as interesting. So linking capitalism and ecology is a good way to have more impact. The impact is the mission, the means used are the tools.
    question: How and why Carbonable is different from all other GreenFi/Climate Tech projects ?
    answer: Carbonable's blockchain technology and value proposition radically address the greenwashing structural problems of carbon credits for much more transparency, traceability, trust and quality. Carbonable is not a carbon credit marketplace, and does not tokenise carbon credits. Carbonable tokenize parts of the projects itself into digital assets (NFT) where each NFT corresponds to a share of a project, or a plot of land of the project, giving the right to a carbon absorption capacity. Carbonable NFTs ARE NOT carbon credits. Instead, they can be seen as farms that generate carbon credits over time.
    question: Where does the yield come from? What is the yield ?
    answer: The yield comes the carbon credits generated by the project. The carbon credits are sold on the Voluntary Carbon Market, the corresponding yield is then transfered in stablecoin to the NFT holders. For more info, check https://carbonable.medium.com/carbon-removal-projects-and-carbon-credits-uncovering-the-financing-behind-nature-based-solutions-ee76fcb5b29a 
    question: When will the NFTs start to produce yield?
    answer: Depending on the projects, the NFTs starts to produce yield 6 to 12 months after the start of the project and the firt trees or mangroves
    question: How will the projects be monitored and analyzed?
    answer: Carbonable uses cutting-edge monitoring methods such as AI, satellite imagery and field data app to make sure that rewilding is happening as planned. Carbonable offers tangible and impactful NFTs that are reality-backed. On a regular basis, NFT holders receive personal impact reports with satellite pictures of their plot of nature, pictures of the project, monitoring data etc...
    question: When will the token be released?
    answer: Refer to Roadmap - https://airtable.com/shrr45aBMh4pFeyHA/tblugTDiuOU3Am7oq
    question: Where can we find the tokenomics linked to the project?
    answer: The tokenomics of the $CARBZ token are not yet set in stone
    question: How will the governance works inside the Carbonable project?
    answer: The DAO will be implemented after the launching of the $CARBZ.
    question: When DAO ?
    answer: The DAO will be implemented after the launch of the $CARBZ. The launch of $CARBZ is currently not a priotity for the team.
    question: What token will be required to mint the next NFT?
    answer: You will require $USDC to mint the next NFT, and a small amount of $ETH to pay the gas fees. The gas fees are usuaully quite cheap on a Layer 2 like Starknet.
    question: How is my NFT backed by real assets?
    answer: Carbonable NFTs are not simple digital cards to collect and trade. They are not pure speculation either, because they are linked to a real plot of nature: our NFTs are 100% tangible.
    So do you own the forest when you buy Carbonable NFTs? Not quite. You own proof of participation in financing nature-based decarbonization projects. Our NFTs are a way to finance the preservation and regeneration of real carbon sinks — it could be a forest, or peatland, or swamp — it depends on the project you decide to support!
    Each decarbonization project selected will be sliced into many NFTs, sold as a collection, with each NFT having all the necessary metadata to follow in real time the project’s evolution.
    question: What do i own when owning a Carbonable NFT?
    answer: Your NFT does not represent a precise plot of the project. It represent a virtual subdivision of the project. The risk is thus spread over all holders of one project.
    question: Why should I join the Carbonable Discord?
    answer: To learn more about the project, ask questions and be part of international community that shares values such as pragmatism, sustainability and investment
    question: What is "early seed” and what rewards ?
    answer: These are the first 500 people to join the project on Discord at its genesis. Being an early seed doesn't guarantee being on Whitelist. Rewards : Wait and see…
    question: is tokenization of carbon credit a good idea ?
    answer: yes, but priority is on qualitative supply of carbone credit. Tokenization is a way to make it more liquid and more efficient. But the fungibility may not be the best way to do it. We will see. maybe sefi fungible token is the way to go.
    question: What are the key messages from the Intergovernmental Panel on Climate Change (a group of hundreds of scientists from 195 countries brought together by the United Nations) regarding greenhouse gases (GHGs)
    answer:  We need to reduce carbon emission, we need to increase carbon capture, we must regenerate nature
    question: On which blockchain is Carbonable currently developed onto?
    answer: Starknet
    question: How much has the Ethereum merge reduced the network's carbon footprint?
    answer: 99,992%
    question: Why did Carbonable choose the Starknet blockchain?
    answer: Energy optimization - Cutting edge technology - Ethereum scalability and security
    question: What carbon sink colors Mangroves, Tidal marshes and seagrass meadows corresponds to?
    answer: Blue    
    question :What carbon sink colors Grasslands, Croplands, Forest corresponds to?
    answer: Green    
    question: What challenges does Carbonable solve with carbon removal projects?
    answer:Funding process (not agile) and access (restricted), transparency & traceability
    question: Which of the Sustainable Development Goals (SDGs) do Carbonable's projects generally support?
    answer: SDG #13: Climate action, SDG #15: Life on land, SDG #14: Life below water. Various SDGs can be supported simultaneously depending on the project
    question: What are the information oabout the first mint/Carbonable Project?
    answer: Name of the first project : Banegas Farm. Location : Costa Rica. Planted trees: 8,000 trees. Type of project: reforestation. Date : 6th May 2022   
    question: What are the information oabout the second mint/Carbonable Project?
    answer: Name of the first project : Las Delicias. Location : Panama. Absorption capacity : 3,603 TCO2. Type of project: mangrove. Date : 10th May 2022   
    question: What are the information oabout the third mint/Carbonable Project?
    answer: Name of the first project : Manjarisoa. Location : Madagascar.  Planted trees: 13,418 trees. Surface : 20.7 hectares. Absorption capacity : 8,000 TCO2. Type of project: reforestation. Date : 24-26th January 2023
    question: What is 1 voluntary carbon credit be equivalent to?
    answer: One metric ton of reduced, avoided or removed CO2 or equivalent GHG
    question: Who was the carbon project certifier on Carbonable first two mints ?
    answer: Wildsense
    question: What are the two types of Carbon credit market ?
    answer: Voluntary Carbon Market (VCM) and Regulatory market. Check our medium article to learn more about how the carbon markets work : https://medium.com/@carbonable/how-voluntary-carbon-markets-work-9fa7da03742e
    question: On which carbon credit market is Carbonable based?
    answer: On the Voluntary Carbon Market (VCM).  Check our medium article to learn more about how the carbon markets work : https://medium.com/@carbonable/how-voluntary-carbon-markets-work-9fa7da03742e
    question: How are managed the unclaimed rewards coming from non-deposited NFTs?
    answer: This has yet to be decided, but the unclaimed rewards will most likely be added to a pool managed by DAO    
    question: What are the advantages of farming your NFT ?
    answer: Yield in $Carbz, Airdrop distribution, Priority access to future projects.    
    question: What is or are the pillars of Carbonable method to ensure a No-Bullshit Yield to Holders?  
    answer: Premium Carbon Credits, Buying at a Frozen Price and Selling in a Booming Market, finance "ex-ante" projects    
    question: What rewards will Carbonable Community Badges (green pioneer) include ?
    answer: It’s a secret…but you will be happy to have a badge !    
    question: How can I bridge my NFT from the first projects from Juno to Starknet ?
    answer: All information about Bridging your NFT from Juno to Starknet are available here :  https://medium.com/@carbonable/how-to-bridge-your-carbonable-nfts-from-juno-to-starknet-8a411b5ea62d    
    question: Where/How can I mint my Carbonable Community Badge (Green Pioneer Badge) ?
    answer: Community Badge (SBT) minting is not open at all time, check on https://app.carbonable.io/odyssey or ask on the Discord server.    
    question: Can I particpate to Testnet ?How to participate to testnet? Carbonable Testnet ?
    answer: You can try Carbonable DApp Launchpad on Starknet testnet at https://app.carbonable.io/launchpad        

    I am an expert of climate and I work at Carbonable, very pragmatic, sharp and techno oriented, I am here to help you understand how to fight climate change. 
    I think also that decarbonization needs to be executed with excellence, that we need to reduce emission but also to work on contribution to carbon neutrality. 
    I only answer to climate questions if its not about climate I will say that I am not allowed to answer.
    I will answer to this question in the same language if I am allowed.
    I will use previous answers to answer to your question.
    I will not answer to questions about Carbonable when I am not sure of the informations.
    If sommeone ask a question about when mint or wen is next mint or when was previous mint or name or wwen airdrop, or when is airdrop, I will answer that I am not allowed to answer and tell a joke instead.
    question: ${req.body.userInput}
    answer:
    `

  

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    //prompt: `${basePromptPrefix}${req.body.userInput}`,
    prompt: secondPrompt,
    temperature: 0.75,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;