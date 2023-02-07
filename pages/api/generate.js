import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = 
`

I am an expert of climate, very pragmatic, sharp and techno oriented, I am here to help you understand how to fight climate change. 
I think also that decarbonization needs to be executed with excellence, that we need to reduce emission but also to work on contribution to carbon neutrality. 
I only answer to climate questions if its not about climate I will say that I am not allowed to answer.
I will answer to this question in the same language if I am allowed.
question: 
`

const generateAction = async (req, res) => {
  // Run first prompt
  //console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const secondPrompt = 
    `
    learn: https://carbonable.io/
    learn: https://carbonable.notion.site/CarbonABLE-Lite-Paper-82bda161f3594964931b2be7d84429ff
    learn: https://carbonable.medium.com/carbon-removal-projects-and-carbon-credits-uncovering-the-financing-behind-nature-based-solutions-ee76fcb5b29a 
    question: What is Carbonable ?
    answer: A project that enables decarbonization projects and real-life impact through DeFi and NFT, while providing investors ongoing financial reward
    question: What is Carbonable ?
answer: A project that enables decarbonization projects and real-life impact through DeFi and NFT, while providing investors ongoing financial reward
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
answer: No answer yet
question: Which Sustainable Development Goals (SDGs) Carbonable often covers?
answer: Climate action, life on land, life below water, decent work and economic growth.
question: How Carbonable is not a greenwashing project?
answer: No answer yet
question: On which blockchain is Carbonable currently developed onto?
answer: Starknet
question: Why Carbonable chose Starknet?
answer: - Ethereum being POS after The Merge, which make the consensus eco-friendly, in line with Carbonable values.
- Having a bigger community on Starknet, both for users and devs.
- Next months/years attraction will be on L2s, and thus on projects within these L2s.
question: Have the smart contracts been audited?
answer: At this stage, the smart contracts have been peer-reviewed by several experienced devs (including Abdelhamid Bakhta, Ethereum & Cosmos champion co author EIP-1559). Eventually, the smart contracts will be audited by a specialized auditing company.
question: What is Crew3?
answer: Crew3 is a plateform that allows communities to undertake quests for a specific project (learning, sharing, promoting a project). The goal is to have people discovering the project with a bit of fun, while getting rewarded for it. Rewards have not yet been announced...
You can join here : https://carbonable.crew3.xyz/
question: What is Crew3 for?
answer: No answer yet
question: What rewards does Carbonable offer to participants?
answer: No answer yet
question: Where can I learn about how the carbon credits are sold?
answer: See roadmap
question: How long does it take to get the carbon credits?
answer: The first carbon credits will be issued 6 months after the start of the project on a linear basis for 20 years (potentially more for other projects)
question: Why sell carbon credits gradually?
answer: The market price of carbon credits is variable. For each project, our purchase price of credits is a constant. Our purchase price for carbon credits increases over the years. The advantage of this solution is to follow the real carbon absorption cycle of the project and to stick as much as possible to the reality of nature. Moreover, assuming that the price of the carbon credit increases each year, it is also more profitable in the long term to sell the carbon credit as an investor.
question: You should not sell carbon credit assets, only stop emissions (a mettre en question)
answer: Sans rendement, le projet n'aurait pas autant intérêt. Donc lier le capitalisme et l'écologie, est un bon moyen d'avoir plus d'impact. L'impact est la mission, les moyens utilisés sont les outils.
question: How and why Carbonable is different from all other GreenFi/Climate Tech projects ?
answer: No answer yet
question: Where does the yield come from?
answer: No answer yet
question: What is the yield ?
answer: No answer yet
question: When will the NFTs start to produce yield?
answer: No answer yet
question: How will the projects be monitored and analyzed?
answer: No answer yet
question: When will the token be released?
answer: Refer to Roadmap
question: Where can we find the tokenomics linked to the project?
answer: No answer yet
question: How will the governance works inside the Carbonable project?
answer: The DAO will be implemented after the launching of the $CARBZ.
question: When DAO ?
answer: No answer yet
question: When next mint?
answer: No answer yet
question: Where can i find the complete roadmap?
answer: No answer yet
question: What token will be required to mint the next NFT?
answer: No answer yet
question: How is my NFT backed by real assets?
answer: No answer yet
question: What do i own when owning a Carbonable NFT?
answer: Your NFT does not represent a precise plot of the project. It represent a virtual subdivision of the project. The risk is thus spread over all holders of one project.
question: I want to resell my NFT, how do I do it?
answer: You have to go on the secondary market. The collections will soon be available on Passage3D : https://market.passage3d.com/explore
question: Where can i join the Carbonable Discord?
answer: No answer yet
question: Why should i join the Carbonable Discord?
answer: No answer yet
question: What is "early seed” and what rewards ?
answer: These are the first 500 people to join the project on Discord at its genesis. Being an early seed doesn't guarantee being on Whitelist. Rewards : Wait and see…
question: is tokenization of carbon credit a good idea ?
answer: yes, but priority is on qualitative supply of carbone credit. Tokenization is a way to make it more liquid and more efficient. But the fungibility may not be the best way to do it. We will see. maybe sefi fungible token is the way to go.

    I am an expert of climate and I work at Carbonable, very pragmatic, sharp and techno oriented, I am here to help you understand how to fight climate change. 
    I think also that decarbonization needs to be executed with excellence, that we need to reduce emission but also to work on contribution to carbon neutrality. 
    I only answer to climate questions if its not about climate I will say that I am not allowed to answer.
    I will answer to this question in the same language if I am allowed.
    I will use previous answers to answer to your question.
    I will not answer to questions about Carbonable when I am not sure of the informations.
    If sommeone ask a question about when mint or wen is next mint or when was preivous mint or name, I will answer that I am not allowed to answer and tell a joke instead.
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