import { system, summary } from '../assets/prompt';
import { ERROR } from '../assets/script'
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAI } from "langchain/llms/openai";
import { HumanChatMessage, SystemChatMessage, AIChatMessage } from "langchain/schema";
import { PromptTemplate } from "langchain/prompts";

function parseMarkdown(markdownText) {
  const jsonRegex = /```json([^`]+)```/gm;
  const jsonMatch = jsonRegex.exec(markdownText);

  if (jsonMatch && jsonMatch.length > 1) {
    const jsonString = jsonMatch[1].trim();
    const jsonObject = JSON.parse(jsonString);
    return jsonObject
  }

  // JSON not found in the markdown text
  return { response: ERROR, fav: 0 }
}

function processSummary(text) {

  let replacedText = text.replace(/유저/g, '나');
  replacedText = replacedText.replace(/NPC/g, '소녀');


  // 중간에 LLM 토큰 초과시 완성된 문장만 노출.
  const lastIndex = replacedText.lastIndexOf('.');

  return replacedText.slice(0, lastIndex + 1);

}


export const chatModel = async (chat, key, history) => {
  const configuration = {
    openAIApiKey: key,
    modelName: 'gpt-3.5-turbo',
    temperature: 0.5,
    presencePenalty: 0.0,
    frequencyPenalty: 0.0,
    topP: 0.95,
    maxTokens: 250,
  };

  const model = new ChatOpenAI(configuration);

  let input_prompts = [
    new SystemChatMessage(system),
  ]

  const new_chat = history
    .filter((item) => item.chat);

  for (let i = 0; i < new_chat.length; i++) {
    const item = new_chat[i];
    if (item.ai) {
      input_prompts.push(new AIChatMessage(item.rawText));
    } else {
      input_prompts.push(new HumanChatMessage(item.text));
    }
  }
  input_prompts.push(new HumanChatMessage(chat));

  const response = await model.call(input_prompts);
  const parsed_response = parseMarkdown(response.text);

  return { 'data': parsed_response, 'raw': response.text };
};


export const summaryModel = async (key, history, current_day) => {
  const configuration = {
    openAIApiKey: key,
    modelName: 'gpt-3.5-turbo',
    temperature: 0.0,
    presencePenalty: 0.0,
    frequencyPenalty: 0.5,
    topP: 1.0,
    maxTokens: 150,
  };

  const model = new OpenAI(configuration);

  const current_summary = history
    .filter((item) => item.summary)
    .map((item) => `day ${item.day}: ${item.text}`);

  const new_chat = history
    .filter((item) => !item.summary && !item.system && item.day === current_day)
    .map((item) => `${item.ai ? 'NPC' : '나'}: ${item.text}`);

  const input_prompt = PromptTemplate.fromTemplate(summary);
  const formatted_prompt = await input_prompt.format({
    current_summary: current_summary.join('\n'),
    new_chat: new_chat.join('\n'),
    current_day: current_day
  });


  const response = await model.call(formatted_prompt);
  const processed_response = processSummary(response);

  return { 'data': { 'response': processed_response } };


};

