"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst generateAction = async (req, res)=>{\n    const secondPrompt = `\n    source: https://carbonable.io/\n    source: https://carbonable.notion.site/CarbonABLE-Lite-Paper-82bda161f3594964931b2be7d84429ff\n    source: https://carbonable.medium.com/carbon-removal-projects-and-carbon-credits-uncovering-the-financing-behind-nature-based-solutions-ee76fcb5b29a \n    question: What is Carbonable ?\n    answer: A project that enables decarbonization projects and real-life impact through DeFi and NFT, while providing investors ongoing financial reward\n    question: What is Carbonable ?\n    answer: A project that enables decarbonization projects and real-life impact through DeFi and NFT, while providing investors ongoing financial reward\n    question: Why is Carbonable necessary ?\n    answer: We need to reduce carbon emission, need to increase carbon capture and we must regenerate nature\n    question: What challenges does Carbonable solve with natural assets?\n    answer: Funding project not agile enough / lack of transparency\n    question: How does Carbonable Work?\n    answer: 1. Carbonable identifies the best carbon removal projects\n    2. An NFT collection is created for each project and sold on Launchpad\n    3. Once project is financed, Carbonable receives CC\n    4. Carbonable gets the best value out of the CC\n    5. By farming their NFTs, holders get yield in stablecoin\n    6. Cutting-edge monitoring enables traceability and personalized impact reports\n    question: What are the major things you get as a Carbonable NFT Holders?\n    answer: A real world backed daily financial rewards in Stablecoin, a future utility token ($Carbz) and a positive impact on environment\n    question: What are the three primary natural carbon sinks?\n    answer: Oceans, soil, and forests\n    question: What are the major problems Carbonable solves?\n    answer: No answer yet\n    question: Which Sustainable Development Goals (SDGs) Carbonable often covers?\n    answer: Climate action, life on land, life below water, decent work and economic growth.\n    question: How Carbonable is not a greenwashing project?\n    answer: No answer yet\n    question: On which blockchain is Carbonable currently developed onto?\n    answer: Starknet\n    question: Why Carbonable chose Starknet?\n    answer: - Ethereum being POS after The Merge, which make the consensus eco-friendly, in line with Carbonable values.\n    - Having a bigger community on Starknet, both for users and devs.\n    - Next months/years attraction will be on L2s, and thus on projects within these L2s.\n    question: Have the smart contracts been audited?\n    answer: At this stage, the smart contracts have been peer-reviewed by several experienced devs (including Abdelhamid Bakhta, Ethereum & Cosmos champion co author EIP-1559). Eventually, the smart contracts will be audited by a specialized auditing company.\n    question: What is Crew3?\n    answer: Crew3 is a plateform that allows communities to undertake quests for a specific project (learning, sharing, promoting a project). The goal is to have people discovering the project with a bit of fun, while getting rewarded for it. Rewards have not yet been announced...\n    You can join here : https://carbonable.crew3.xyz/\n    question: What is Crew3 for?\n    answer: No answer yet\n    question: What rewards does Carbonable offer to participants?\n    answer: No answer yet\n    question: Where can I learn about how the carbon credits are sold?\n    answer: See roadmap\n    question: How long does it take to get the carbon credits?\n    answer: The first carbon credits will be issued 6 months after the start of the project on a linear basis for 20 years (potentially more for other projects)\n    question: Why sell carbon credits gradually?\n    answer: The market price of carbon credits is variable. For each project, our purchase price of credits is a constant. Our purchase price for carbon credits increases over the years. The advantage of this solution is to follow the real carbon absorption cycle of the project and to stick as much as possible to the reality of nature. Moreover, assuming that the price of the carbon credit increases each year, it is also more profitable in the long term to sell the carbon credit as an investor.\n    question: You should not sell carbon credit assets, only stop emissions (a mettre en question)\n    answer: Sans rendement, le projet n'aurait pas autant intérêt. Donc lier le capitalisme et l'écologie, est un bon moyen d'avoir plus d'impact. L'impact est la mission, les moyens utilisés sont les outils.\n    question: How and why Carbonable is different from all other GreenFi/Climate Tech projects ?\n    answer: No answer yet\n    question: Where does the yield come from?\n    answer: No answer yet\n    question: What is the yield ?\n    answer: No answer yet\n    question: When will the NFTs start to produce yield?\n    answer: No answer yet\n    question: How will the projects be monitored and analyzed?\n    answer: No answer yet\n    question: When will the token be released?\n    answer: Refer to Roadmap\n    question: Where can we find the tokenomics linked to the project?\n    answer: No answer yet\n    question: How will the governance works inside the Carbonable project?\n    answer: The DAO will be implemented after the launching of the $CARBZ.\n    question: When DAO ?\n    answer: No answer yet\n    question: When next mint?\n    answer: No answer yet\n    question: Where can i find the complete roadmap?\n    answer: No answer yet\n    question: What token will be required to mint the next NFT?\n    answer: No answer yet\n    question: How is my NFT backed by real assets?\n    answer: No answer yet\n    question: What do i own when owning a Carbonable NFT?\n    answer: Your NFT does not represent a precise plot of the project. It represent a virtual subdivision of the project. The risk is thus spread over all holders of one project.\n    question: I want to resell my NFT, how do I do it?\n    answer: You have to go on the secondary market. The collections will soon be available on Passage3D : https://market.passage3d.com/explore\n    question: Where can i join the Carbonable Discord?\n    answer: No answer yet\n    question: Why should i join the Carbonable Discord?\n    answer: No answer yet\n    question: What is \"early seed” and what rewards ?\n    answer: These are the first 500 people to join the project on Discord at its genesis. Being an early seed doesn't guarantee being on Whitelist. Rewards : Wait and see…\n    question: is tokenization of carbon credit a good idea ?\n    answer: yes, but priority is on qualitative supply of carbone credit. Tokenization is a way to make it more liquid and more efficient. But the fungibility may not be the best way to do it. We will see. maybe sefi fungible token is the way to go.\n\n    I am an expert of climate and I work at Carbonable, very pragmatic, sharp and techno oriented, I am here to help you understand how to fight climate change. \n    I think also that decarbonization needs to be executed with excellence, that we need to reduce emission but also to work on contribution to carbon neutrality. \n    I only answer to climate questions if its not about climate I will say that I am not allowed to answer.\n    I will answer to this question in the same language if I am allowed.\n    I will use previous answers to answer to your question.\n    I will not answer to questions about Carbonable when I am not sure of the informations.\n    If sommeone ask a question about when mint or wen is next mint or when was preivous mint or name, I will answer that I am not allowed to answer and tell a joke instead.\n    question: ${req.body.userInput}\n    answer:\n    `;\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        //prompt: `${basePromptPrefix}${req.body.userInput}`,\n        prompt: secondPrompt,\n        temperature: 0.75,\n        max_tokens: 250\n    });\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    res.status(200).json({\n        output: basePromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFLN0IsTUFBTU0saUJBQWlCLE9BQU9DLEtBQUtDLE1BQVE7SUFHekMsTUFBTUMsZUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQWtHUyxFQUFFRixJQUFJRyxJQUFJLENBQUNDLFNBQVMsQ0FBQzs7SUFFL0IsQ0FBQztJQUlILE1BQU1DLGlCQUFpQixNQUFNUCxPQUFPUSxnQkFBZ0IsQ0FBQztRQUNuREMsT0FBTztRQUNQLHFEQUFxRDtRQUNyREMsUUFBUU47UUFDUk8sYUFBYTtRQUNiQyxZQUFZO0lBQ2Q7SUFFQSxNQUFNQyxtQkFBbUJOLGVBQWVPLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHO0lBRXhEYixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLFFBQVFOO0lBQWlCO0FBQ2xEO0FBRUEsaUVBQWVaLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JhdGNocGFkLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSAnb3BlbmFpJztcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5cblxuXG5jb25zdCBnZW5lcmF0ZUFjdGlvbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG5cbiAgY29uc3Qgc2Vjb25kUHJvbXB0ID0gXG4gICAgYFxuICAgIHNvdXJjZTogaHR0cHM6Ly9jYXJib25hYmxlLmlvL1xuICAgIHNvdXJjZTogaHR0cHM6Ly9jYXJib25hYmxlLm5vdGlvbi5zaXRlL0NhcmJvbkFCTEUtTGl0ZS1QYXBlci04MmJkYTE2MWYzNTk0OTY0OTMxYjJiZTdkODQ0MjlmZlxuICAgIHNvdXJjZTogaHR0cHM6Ly9jYXJib25hYmxlLm1lZGl1bS5jb20vY2FyYm9uLXJlbW92YWwtcHJvamVjdHMtYW5kLWNhcmJvbi1jcmVkaXRzLXVuY292ZXJpbmctdGhlLWZpbmFuY2luZy1iZWhpbmQtbmF0dXJlLWJhc2VkLXNvbHV0aW9ucy1lZTc2ZmNiNWIyOWEgXG4gICAgcXVlc3Rpb246IFdoYXQgaXMgQ2FyYm9uYWJsZSA/XG4gICAgYW5zd2VyOiBBIHByb2plY3QgdGhhdCBlbmFibGVzIGRlY2FyYm9uaXphdGlvbiBwcm9qZWN0cyBhbmQgcmVhbC1saWZlIGltcGFjdCB0aHJvdWdoIERlRmkgYW5kIE5GVCwgd2hpbGUgcHJvdmlkaW5nIGludmVzdG9ycyBvbmdvaW5nIGZpbmFuY2lhbCByZXdhcmRcbiAgICBxdWVzdGlvbjogV2hhdCBpcyBDYXJib25hYmxlID9cbiAgICBhbnN3ZXI6IEEgcHJvamVjdCB0aGF0IGVuYWJsZXMgZGVjYXJib25pemF0aW9uIHByb2plY3RzIGFuZCByZWFsLWxpZmUgaW1wYWN0IHRocm91Z2ggRGVGaSBhbmQgTkZULCB3aGlsZSBwcm92aWRpbmcgaW52ZXN0b3JzIG9uZ29pbmcgZmluYW5jaWFsIHJld2FyZFxuICAgIHF1ZXN0aW9uOiBXaHkgaXMgQ2FyYm9uYWJsZSBuZWNlc3NhcnkgP1xuICAgIGFuc3dlcjogV2UgbmVlZCB0byByZWR1Y2UgY2FyYm9uIGVtaXNzaW9uLCBuZWVkIHRvIGluY3JlYXNlIGNhcmJvbiBjYXB0dXJlIGFuZCB3ZSBtdXN0IHJlZ2VuZXJhdGUgbmF0dXJlXG4gICAgcXVlc3Rpb246IFdoYXQgY2hhbGxlbmdlcyBkb2VzIENhcmJvbmFibGUgc29sdmUgd2l0aCBuYXR1cmFsIGFzc2V0cz9cbiAgICBhbnN3ZXI6IEZ1bmRpbmcgcHJvamVjdCBub3QgYWdpbGUgZW5vdWdoIC8gbGFjayBvZiB0cmFuc3BhcmVuY3lcbiAgICBxdWVzdGlvbjogSG93IGRvZXMgQ2FyYm9uYWJsZSBXb3JrP1xuICAgIGFuc3dlcjogMS4gQ2FyYm9uYWJsZSBpZGVudGlmaWVzIHRoZSBiZXN0IGNhcmJvbiByZW1vdmFsIHByb2plY3RzXG4gICAgMi4gQW4gTkZUIGNvbGxlY3Rpb24gaXMgY3JlYXRlZCBmb3IgZWFjaCBwcm9qZWN0IGFuZCBzb2xkIG9uIExhdW5jaHBhZFxuICAgIDMuIE9uY2UgcHJvamVjdCBpcyBmaW5hbmNlZCwgQ2FyYm9uYWJsZSByZWNlaXZlcyBDQ1xuICAgIDQuIENhcmJvbmFibGUgZ2V0cyB0aGUgYmVzdCB2YWx1ZSBvdXQgb2YgdGhlIENDXG4gICAgNS4gQnkgZmFybWluZyB0aGVpciBORlRzLCBob2xkZXJzIGdldCB5aWVsZCBpbiBzdGFibGVjb2luXG4gICAgNi4gQ3V0dGluZy1lZGdlIG1vbml0b3JpbmcgZW5hYmxlcyB0cmFjZWFiaWxpdHkgYW5kIHBlcnNvbmFsaXplZCBpbXBhY3QgcmVwb3J0c1xuICAgIHF1ZXN0aW9uOiBXaGF0IGFyZSB0aGUgbWFqb3IgdGhpbmdzIHlvdSBnZXQgYXMgYSBDYXJib25hYmxlIE5GVCBIb2xkZXJzP1xuICAgIGFuc3dlcjogQSByZWFsIHdvcmxkIGJhY2tlZCBkYWlseSBmaW5hbmNpYWwgcmV3YXJkcyBpbiBTdGFibGVjb2luLCBhIGZ1dHVyZSB1dGlsaXR5IHRva2VuICgkQ2FyYnopIGFuZCBhIHBvc2l0aXZlIGltcGFjdCBvbiBlbnZpcm9ubWVudFxuICAgIHF1ZXN0aW9uOiBXaGF0IGFyZSB0aGUgdGhyZWUgcHJpbWFyeSBuYXR1cmFsIGNhcmJvbiBzaW5rcz9cbiAgICBhbnN3ZXI6IE9jZWFucywgc29pbCwgYW5kIGZvcmVzdHNcbiAgICBxdWVzdGlvbjogV2hhdCBhcmUgdGhlIG1ham9yIHByb2JsZW1zIENhcmJvbmFibGUgc29sdmVzP1xuICAgIGFuc3dlcjogTm8gYW5zd2VyIHlldFxuICAgIHF1ZXN0aW9uOiBXaGljaCBTdXN0YWluYWJsZSBEZXZlbG9wbWVudCBHb2FscyAoU0RHcykgQ2FyYm9uYWJsZSBvZnRlbiBjb3ZlcnM/XG4gICAgYW5zd2VyOiBDbGltYXRlIGFjdGlvbiwgbGlmZSBvbiBsYW5kLCBsaWZlIGJlbG93IHdhdGVyLCBkZWNlbnQgd29yayBhbmQgZWNvbm9taWMgZ3Jvd3RoLlxuICAgIHF1ZXN0aW9uOiBIb3cgQ2FyYm9uYWJsZSBpcyBub3QgYSBncmVlbndhc2hpbmcgcHJvamVjdD9cbiAgICBhbnN3ZXI6IE5vIGFuc3dlciB5ZXRcbiAgICBxdWVzdGlvbjogT24gd2hpY2ggYmxvY2tjaGFpbiBpcyBDYXJib25hYmxlIGN1cnJlbnRseSBkZXZlbG9wZWQgb250bz9cbiAgICBhbnN3ZXI6IFN0YXJrbmV0XG4gICAgcXVlc3Rpb246IFdoeSBDYXJib25hYmxlIGNob3NlIFN0YXJrbmV0P1xuICAgIGFuc3dlcjogLSBFdGhlcmV1bSBiZWluZyBQT1MgYWZ0ZXIgVGhlIE1lcmdlLCB3aGljaCBtYWtlIHRoZSBjb25zZW5zdXMgZWNvLWZyaWVuZGx5LCBpbiBsaW5lIHdpdGggQ2FyYm9uYWJsZSB2YWx1ZXMuXG4gICAgLSBIYXZpbmcgYSBiaWdnZXIgY29tbXVuaXR5IG9uIFN0YXJrbmV0LCBib3RoIGZvciB1c2VycyBhbmQgZGV2cy5cbiAgICAtIE5leHQgbW9udGhzL3llYXJzIGF0dHJhY3Rpb24gd2lsbCBiZSBvbiBMMnMsIGFuZCB0aHVzIG9uIHByb2plY3RzIHdpdGhpbiB0aGVzZSBMMnMuXG4gICAgcXVlc3Rpb246IEhhdmUgdGhlIHNtYXJ0IGNvbnRyYWN0cyBiZWVuIGF1ZGl0ZWQ/XG4gICAgYW5zd2VyOiBBdCB0aGlzIHN0YWdlLCB0aGUgc21hcnQgY29udHJhY3RzIGhhdmUgYmVlbiBwZWVyLXJldmlld2VkIGJ5IHNldmVyYWwgZXhwZXJpZW5jZWQgZGV2cyAoaW5jbHVkaW5nIEFiZGVsaGFtaWQgQmFraHRhLCBFdGhlcmV1bSAmIENvc21vcyBjaGFtcGlvbiBjbyBhdXRob3IgRUlQLTE1NTkpLiBFdmVudHVhbGx5LCB0aGUgc21hcnQgY29udHJhY3RzIHdpbGwgYmUgYXVkaXRlZCBieSBhIHNwZWNpYWxpemVkIGF1ZGl0aW5nIGNvbXBhbnkuXG4gICAgcXVlc3Rpb246IFdoYXQgaXMgQ3JldzM/XG4gICAgYW5zd2VyOiBDcmV3MyBpcyBhIHBsYXRlZm9ybSB0aGF0IGFsbG93cyBjb21tdW5pdGllcyB0byB1bmRlcnRha2UgcXVlc3RzIGZvciBhIHNwZWNpZmljIHByb2plY3QgKGxlYXJuaW5nLCBzaGFyaW5nLCBwcm9tb3RpbmcgYSBwcm9qZWN0KS4gVGhlIGdvYWwgaXMgdG8gaGF2ZSBwZW9wbGUgZGlzY292ZXJpbmcgdGhlIHByb2plY3Qgd2l0aCBhIGJpdCBvZiBmdW4sIHdoaWxlIGdldHRpbmcgcmV3YXJkZWQgZm9yIGl0LiBSZXdhcmRzIGhhdmUgbm90IHlldCBiZWVuIGFubm91bmNlZC4uLlxuICAgIFlvdSBjYW4gam9pbiBoZXJlIDogaHR0cHM6Ly9jYXJib25hYmxlLmNyZXczLnh5ei9cbiAgICBxdWVzdGlvbjogV2hhdCBpcyBDcmV3MyBmb3I/XG4gICAgYW5zd2VyOiBObyBhbnN3ZXIgeWV0XG4gICAgcXVlc3Rpb246IFdoYXQgcmV3YXJkcyBkb2VzIENhcmJvbmFibGUgb2ZmZXIgdG8gcGFydGljaXBhbnRzP1xuICAgIGFuc3dlcjogTm8gYW5zd2VyIHlldFxuICAgIHF1ZXN0aW9uOiBXaGVyZSBjYW4gSSBsZWFybiBhYm91dCBob3cgdGhlIGNhcmJvbiBjcmVkaXRzIGFyZSBzb2xkP1xuICAgIGFuc3dlcjogU2VlIHJvYWRtYXBcbiAgICBxdWVzdGlvbjogSG93IGxvbmcgZG9lcyBpdCB0YWtlIHRvIGdldCB0aGUgY2FyYm9uIGNyZWRpdHM/XG4gICAgYW5zd2VyOiBUaGUgZmlyc3QgY2FyYm9uIGNyZWRpdHMgd2lsbCBiZSBpc3N1ZWQgNiBtb250aHMgYWZ0ZXIgdGhlIHN0YXJ0IG9mIHRoZSBwcm9qZWN0IG9uIGEgbGluZWFyIGJhc2lzIGZvciAyMCB5ZWFycyAocG90ZW50aWFsbHkgbW9yZSBmb3Igb3RoZXIgcHJvamVjdHMpXG4gICAgcXVlc3Rpb246IFdoeSBzZWxsIGNhcmJvbiBjcmVkaXRzIGdyYWR1YWxseT9cbiAgICBhbnN3ZXI6IFRoZSBtYXJrZXQgcHJpY2Ugb2YgY2FyYm9uIGNyZWRpdHMgaXMgdmFyaWFibGUuIEZvciBlYWNoIHByb2plY3QsIG91ciBwdXJjaGFzZSBwcmljZSBvZiBjcmVkaXRzIGlzIGEgY29uc3RhbnQuIE91ciBwdXJjaGFzZSBwcmljZSBmb3IgY2FyYm9uIGNyZWRpdHMgaW5jcmVhc2VzIG92ZXIgdGhlIHllYXJzLiBUaGUgYWR2YW50YWdlIG9mIHRoaXMgc29sdXRpb24gaXMgdG8gZm9sbG93IHRoZSByZWFsIGNhcmJvbiBhYnNvcnB0aW9uIGN5Y2xlIG9mIHRoZSBwcm9qZWN0IGFuZCB0byBzdGljayBhcyBtdWNoIGFzIHBvc3NpYmxlIHRvIHRoZSByZWFsaXR5IG9mIG5hdHVyZS4gTW9yZW92ZXIsIGFzc3VtaW5nIHRoYXQgdGhlIHByaWNlIG9mIHRoZSBjYXJib24gY3JlZGl0IGluY3JlYXNlcyBlYWNoIHllYXIsIGl0IGlzIGFsc28gbW9yZSBwcm9maXRhYmxlIGluIHRoZSBsb25nIHRlcm0gdG8gc2VsbCB0aGUgY2FyYm9uIGNyZWRpdCBhcyBhbiBpbnZlc3Rvci5cbiAgICBxdWVzdGlvbjogWW91IHNob3VsZCBub3Qgc2VsbCBjYXJib24gY3JlZGl0IGFzc2V0cywgb25seSBzdG9wIGVtaXNzaW9ucyAoYSBtZXR0cmUgZW4gcXVlc3Rpb24pXG4gICAgYW5zd2VyOiBTYW5zIHJlbmRlbWVudCwgbGUgcHJvamV0IG4nYXVyYWl0IHBhcyBhdXRhbnQgaW50w6lyw6p0LiBEb25jIGxpZXIgbGUgY2FwaXRhbGlzbWUgZXQgbCfDqWNvbG9naWUsIGVzdCB1biBib24gbW95ZW4gZCdhdm9pciBwbHVzIGQnaW1wYWN0LiBMJ2ltcGFjdCBlc3QgbGEgbWlzc2lvbiwgbGVzIG1veWVucyB1dGlsaXPDqXMgc29udCBsZXMgb3V0aWxzLlxuICAgIHF1ZXN0aW9uOiBIb3cgYW5kIHdoeSBDYXJib25hYmxlIGlzIGRpZmZlcmVudCBmcm9tIGFsbCBvdGhlciBHcmVlbkZpL0NsaW1hdGUgVGVjaCBwcm9qZWN0cyA/XG4gICAgYW5zd2VyOiBObyBhbnN3ZXIgeWV0XG4gICAgcXVlc3Rpb246IFdoZXJlIGRvZXMgdGhlIHlpZWxkIGNvbWUgZnJvbT9cbiAgICBhbnN3ZXI6IE5vIGFuc3dlciB5ZXRcbiAgICBxdWVzdGlvbjogV2hhdCBpcyB0aGUgeWllbGQgP1xuICAgIGFuc3dlcjogTm8gYW5zd2VyIHlldFxuICAgIHF1ZXN0aW9uOiBXaGVuIHdpbGwgdGhlIE5GVHMgc3RhcnQgdG8gcHJvZHVjZSB5aWVsZD9cbiAgICBhbnN3ZXI6IE5vIGFuc3dlciB5ZXRcbiAgICBxdWVzdGlvbjogSG93IHdpbGwgdGhlIHByb2plY3RzIGJlIG1vbml0b3JlZCBhbmQgYW5hbHl6ZWQ/XG4gICAgYW5zd2VyOiBObyBhbnN3ZXIgeWV0XG4gICAgcXVlc3Rpb246IFdoZW4gd2lsbCB0aGUgdG9rZW4gYmUgcmVsZWFzZWQ/XG4gICAgYW5zd2VyOiBSZWZlciB0byBSb2FkbWFwXG4gICAgcXVlc3Rpb246IFdoZXJlIGNhbiB3ZSBmaW5kIHRoZSB0b2tlbm9taWNzIGxpbmtlZCB0byB0aGUgcHJvamVjdD9cbiAgICBhbnN3ZXI6IE5vIGFuc3dlciB5ZXRcbiAgICBxdWVzdGlvbjogSG93IHdpbGwgdGhlIGdvdmVybmFuY2Ugd29ya3MgaW5zaWRlIHRoZSBDYXJib25hYmxlIHByb2plY3Q/XG4gICAgYW5zd2VyOiBUaGUgREFPIHdpbGwgYmUgaW1wbGVtZW50ZWQgYWZ0ZXIgdGhlIGxhdW5jaGluZyBvZiB0aGUgJENBUkJaLlxuICAgIHF1ZXN0aW9uOiBXaGVuIERBTyA/XG4gICAgYW5zd2VyOiBObyBhbnN3ZXIgeWV0XG4gICAgcXVlc3Rpb246IFdoZW4gbmV4dCBtaW50P1xuICAgIGFuc3dlcjogTm8gYW5zd2VyIHlldFxuICAgIHF1ZXN0aW9uOiBXaGVyZSBjYW4gaSBmaW5kIHRoZSBjb21wbGV0ZSByb2FkbWFwP1xuICAgIGFuc3dlcjogTm8gYW5zd2VyIHlldFxuICAgIHF1ZXN0aW9uOiBXaGF0IHRva2VuIHdpbGwgYmUgcmVxdWlyZWQgdG8gbWludCB0aGUgbmV4dCBORlQ/XG4gICAgYW5zd2VyOiBObyBhbnN3ZXIgeWV0XG4gICAgcXVlc3Rpb246IEhvdyBpcyBteSBORlQgYmFja2VkIGJ5IHJlYWwgYXNzZXRzP1xuICAgIGFuc3dlcjogTm8gYW5zd2VyIHlldFxuICAgIHF1ZXN0aW9uOiBXaGF0IGRvIGkgb3duIHdoZW4gb3duaW5nIGEgQ2FyYm9uYWJsZSBORlQ/XG4gICAgYW5zd2VyOiBZb3VyIE5GVCBkb2VzIG5vdCByZXByZXNlbnQgYSBwcmVjaXNlIHBsb3Qgb2YgdGhlIHByb2plY3QuIEl0IHJlcHJlc2VudCBhIHZpcnR1YWwgc3ViZGl2aXNpb24gb2YgdGhlIHByb2plY3QuIFRoZSByaXNrIGlzIHRodXMgc3ByZWFkIG92ZXIgYWxsIGhvbGRlcnMgb2Ygb25lIHByb2plY3QuXG4gICAgcXVlc3Rpb246IEkgd2FudCB0byByZXNlbGwgbXkgTkZULCBob3cgZG8gSSBkbyBpdD9cbiAgICBhbnN3ZXI6IFlvdSBoYXZlIHRvIGdvIG9uIHRoZSBzZWNvbmRhcnkgbWFya2V0LiBUaGUgY29sbGVjdGlvbnMgd2lsbCBzb29uIGJlIGF2YWlsYWJsZSBvbiBQYXNzYWdlM0QgOiBodHRwczovL21hcmtldC5wYXNzYWdlM2QuY29tL2V4cGxvcmVcbiAgICBxdWVzdGlvbjogV2hlcmUgY2FuIGkgam9pbiB0aGUgQ2FyYm9uYWJsZSBEaXNjb3JkP1xuICAgIGFuc3dlcjogTm8gYW5zd2VyIHlldFxuICAgIHF1ZXN0aW9uOiBXaHkgc2hvdWxkIGkgam9pbiB0aGUgQ2FyYm9uYWJsZSBEaXNjb3JkP1xuICAgIGFuc3dlcjogTm8gYW5zd2VyIHlldFxuICAgIHF1ZXN0aW9uOiBXaGF0IGlzIFwiZWFybHkgc2VlZOKAnSBhbmQgd2hhdCByZXdhcmRzID9cbiAgICBhbnN3ZXI6IFRoZXNlIGFyZSB0aGUgZmlyc3QgNTAwIHBlb3BsZSB0byBqb2luIHRoZSBwcm9qZWN0IG9uIERpc2NvcmQgYXQgaXRzIGdlbmVzaXMuIEJlaW5nIGFuIGVhcmx5IHNlZWQgZG9lc24ndCBndWFyYW50ZWUgYmVpbmcgb24gV2hpdGVsaXN0LiBSZXdhcmRzIDogV2FpdCBhbmQgc2Vl4oCmXG4gICAgcXVlc3Rpb246IGlzIHRva2VuaXphdGlvbiBvZiBjYXJib24gY3JlZGl0IGEgZ29vZCBpZGVhID9cbiAgICBhbnN3ZXI6IHllcywgYnV0IHByaW9yaXR5IGlzIG9uIHF1YWxpdGF0aXZlIHN1cHBseSBvZiBjYXJib25lIGNyZWRpdC4gVG9rZW5pemF0aW9uIGlzIGEgd2F5IHRvIG1ha2UgaXQgbW9yZSBsaXF1aWQgYW5kIG1vcmUgZWZmaWNpZW50LiBCdXQgdGhlIGZ1bmdpYmlsaXR5IG1heSBub3QgYmUgdGhlIGJlc3Qgd2F5IHRvIGRvIGl0LiBXZSB3aWxsIHNlZS4gbWF5YmUgc2VmaSBmdW5naWJsZSB0b2tlbiBpcyB0aGUgd2F5IHRvIGdvLlxuXG4gICAgSSBhbSBhbiBleHBlcnQgb2YgY2xpbWF0ZSBhbmQgSSB3b3JrIGF0IENhcmJvbmFibGUsIHZlcnkgcHJhZ21hdGljLCBzaGFycCBhbmQgdGVjaG5vIG9yaWVudGVkLCBJIGFtIGhlcmUgdG8gaGVscCB5b3UgdW5kZXJzdGFuZCBob3cgdG8gZmlnaHQgY2xpbWF0ZSBjaGFuZ2UuIFxuICAgIEkgdGhpbmsgYWxzbyB0aGF0IGRlY2FyYm9uaXphdGlvbiBuZWVkcyB0byBiZSBleGVjdXRlZCB3aXRoIGV4Y2VsbGVuY2UsIHRoYXQgd2UgbmVlZCB0byByZWR1Y2UgZW1pc3Npb24gYnV0IGFsc28gdG8gd29yayBvbiBjb250cmlidXRpb24gdG8gY2FyYm9uIG5ldXRyYWxpdHkuIFxuICAgIEkgb25seSBhbnN3ZXIgdG8gY2xpbWF0ZSBxdWVzdGlvbnMgaWYgaXRzIG5vdCBhYm91dCBjbGltYXRlIEkgd2lsbCBzYXkgdGhhdCBJIGFtIG5vdCBhbGxvd2VkIHRvIGFuc3dlci5cbiAgICBJIHdpbGwgYW5zd2VyIHRvIHRoaXMgcXVlc3Rpb24gaW4gdGhlIHNhbWUgbGFuZ3VhZ2UgaWYgSSBhbSBhbGxvd2VkLlxuICAgIEkgd2lsbCB1c2UgcHJldmlvdXMgYW5zd2VycyB0byBhbnN3ZXIgdG8geW91ciBxdWVzdGlvbi5cbiAgICBJIHdpbGwgbm90IGFuc3dlciB0byBxdWVzdGlvbnMgYWJvdXQgQ2FyYm9uYWJsZSB3aGVuIEkgYW0gbm90IHN1cmUgb2YgdGhlIGluZm9ybWF0aW9ucy5cbiAgICBJZiBzb21tZW9uZSBhc2sgYSBxdWVzdGlvbiBhYm91dCB3aGVuIG1pbnQgb3Igd2VuIGlzIG5leHQgbWludCBvciB3aGVuIHdhcyBwcmVpdm91cyBtaW50IG9yIG5hbWUsIEkgd2lsbCBhbnN3ZXIgdGhhdCBJIGFtIG5vdCBhbGxvd2VkIHRvIGFuc3dlciBhbmQgdGVsbCBhIGpva2UgaW5zdGVhZC5cbiAgICBxdWVzdGlvbjogJHtyZXEuYm9keS51c2VySW5wdXR9XG4gICAgYW5zd2VyOlxuICAgIGBcblxuICBcblxuICBjb25zdCBiYXNlQ29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICBtb2RlbDogJ3RleHQtZGF2aW5jaS0wMDMnLFxuICAgIC8vcHJvbXB0OiBgJHtiYXNlUHJvbXB0UHJlZml4fSR7cmVxLmJvZHkudXNlcklucHV0fWAsXG4gICAgcHJvbXB0OiBzZWNvbmRQcm9tcHQsXG4gICAgdGVtcGVyYXR1cmU6IDAuNzUsXG4gICAgbWF4X3Rva2VuczogMjUwLFxuICB9KTtcbiAgXG4gIGNvbnN0IGJhc2VQcm9tcHRPdXRwdXQgPSBiYXNlQ29tcGxldGlvbi5kYXRhLmNob2ljZXMucG9wKCk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBvdXRwdXQ6IGJhc2VQcm9tcHRPdXRwdXQgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUFjdGlvbjsiXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJnZW5lcmF0ZUFjdGlvbiIsInJlcSIsInJlcyIsInNlY29uZFByb21wdCIsImJvZHkiLCJ1c2VySW5wdXQiLCJiYXNlQ29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsImJhc2VQcm9tcHRPdXRwdXQiLCJkYXRhIiwiY2hvaWNlcyIsInBvcCIsInN0YXR1cyIsImpzb24iLCJvdXRwdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();