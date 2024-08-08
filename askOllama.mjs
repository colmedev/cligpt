import ollama from 'ollama'



export const askOllama = async(request) => {
  const cleanRequest = request.replace(/"/g, '\\"');
  const prompt = `Dame un comando de terminal de powershell que haga lo siguiente: \"${cleanRequest}\". Devuélveme sólo el comando, sin explicaciones añadidas.`;
  const response = await ollama.chat({
    model: 'llama3',
    messages: [{ role: 'user', content: prompt }],
  })
  return {
    response: response.message.content
  }
}